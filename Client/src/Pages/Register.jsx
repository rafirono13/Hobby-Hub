import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import useAuth from './../Hooks/useAuth';

const Register = () => {
  const { register, redirectPath, setRedirectPath, googleSignIn, loading } =
    useAuth();
  const [photoURL, setPhotoURL] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  console.log(from);

  useEffect(() => {
    if (from !== '/' && !redirectPath) {
      setRedirectPath(from);
    }
  }, [from, redirectPath, setRedirectPath]);

  const handleRegister = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const pass = form.password.value;
    console.log({ name, email, photo, pass });

    // Password validation
    const hasUpper = /[A-Z]/.test(pass);
    const hasLower = /[a-z]/.test(pass);
    const hasLength = pass.length >= 6;

    if (!hasUpper || !hasLower || !hasLength) {
      toast.error(
        'Password must contain 1 uppercase, 1 lowercase, and be 6+ characters long'
      );
      return;
    }

    register(email, pass, name, photo)
      .then(result => {
        const user = result.user;
        console.log('Firebase user created:', user);
        const userDataForBackend = {
          firebaseUid: user.uid,
          email: user.email,
          name: name,
          photoURL: photo,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
        };

        fetch('https://hobby-hub-server-lemon.vercel.app/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDataForBackend),
        })
          .then(res => {
            if (!res.ok) {
              console.error(
                `Backend server responded with ${res.status}: ${res.statusText}`
              );
              return null;
            }
            return res.json();
          })
          .then(data => {
            if (data) {
              console.log('User data saved to custom backend:', data);
            }
          })
          .catch(fetchError =>
            console.error(
              'Error saving user data to custom backend:',
              fetchError.message
            )
          );

        Swal.fire({
          icon: 'success',
          title: 'Welcome aboard!',
          text: `Account created for ${name}`,
          confirmButtonColor: '#6366f1',
        });
        form.reset();
        setPhotoURL('');
        setPassword('');
        navigate(redirectPath || '/', { replace: true });
        setRedirectPath('/');
      })
      .catch(error => {
        console.error('Registration error:', error.message);
        toast.error(`Registration failed: ${error.message}`);
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      await result.user.reload();
      console.log('Google sign-in result:', result.user);

      // Prepare user data for database
      const userDataForBackend = {
        firebaseUid: result.user.uid,
        email: result.user.email,
        name: result.user.displayName,
        photoURL: result.user.photoURL,
        creationTime: result.user.metadata.creationTime,
        lastSignInTime: result.user.metadata.lastSignInTime,
      };

      try {
        const response = await fetch(
          'https://hobby-hub-server-lemon.vercel.app/users',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDataForBackend),
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log('User data saved to database:', data);
        } else {
          console.log('User might already exist in database, continuing...');
        }
      } catch (dbError) {
        console.log(
          'Database save failed, but login continues:',
          dbError.message
        );
      }

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: `Welcome back, ${result.user.displayName || result.user.email}!`,
        confirmButtonColor: '#6366f1',
      });

      // Navigate to desired page
      navigate(redirectPath || '/', { replace: true });
      setRedirectPath('/');
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
      toast.error(`Google Sign-In failed: ${error.message}`);
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Join HobbyHub</h1>
          <p className="py-6 text-lg">
            Create your HobbyHub account to explore passions, join communities,
            and track your growth — all in one place.
          </p>
        </div>

        {/* Right Side */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset space-y-2">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="input input-bordered"
                />

                {/* Photo URL + Avatar Preview */}
                <label className="label">Photo URL</label>
                <input
                  type="url"
                  name="photoURL"
                  required
                  placeholder="Profile Photo URL"
                  className="input input-bordered"
                  onChange={e => setPhotoURL(e.target.value)}
                />
                {photoURL && (
                  <>
                    <div className="flex justify-center my-2">
                      <img
                        src={photoURL}
                        alt="Avatar Preview"
                        className="w-20 h-20 rounded-full border-2 object-cover cursor-pointer"
                        onClick={() =>
                          document.getElementById('photo-preview').showModal()
                        }
                        onError={e => (e.target.style.display = 'none')}
                      />
                    </div>

                    {/* Full Image Modal */}
                    <dialog
                      id="photo-preview"
                      className="modal hover:shadow-2xl"
                    >
                      <div className="modal-box max-w-md">
                        <h3 className="font-bold text-lg mb-4">
                          Full Image Preview
                        </h3>
                        <img
                          src={photoURL}
                          alt="Full Avatar"
                          className="w-full rounded-lg border object-contain"
                        />
                        <p className="text-sm mt-3 text-center text-gray-500">
                          Don’t like it? Just paste a new Photo URL above 👆
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-neutral">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </>
                )}

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className="input input-bordered"
                />

                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  placeholder="Password"
                  className="input input-bordered"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />

                {/* Password Guide */}
                <div className="text-xs text-gray-500 mt-1 mb-2">
                  Password must include:
                  <ul className="list-disc list-inside ml-2">
                    <li>At least 1 uppercase letter</li>
                    <li>At least 1 lowercase letter</li>
                    <li>Minimum 6 characters</li>
                  </ul>
                </div>

                <button
                  className="btn btn-neutral mt-2"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Registering...' : 'Register'}
                </button>

                {/* Divider */}
                <div className="divider">OR</div>

                {/* Google Sign In */}
                <button
                  className="btn btn-outline flex items-center justify-center gap-2"
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                >
                  <FcGoogle size={20} /> Sign up with Google
                </button>

                {/* Already have account */}
                <p className="mt-4 text-sm text-center">
                  Already have an account?
                  <Link
                    to="/auth/login"
                    className="link link-primary font-semibold"
                  >
                    Login here
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Register;
