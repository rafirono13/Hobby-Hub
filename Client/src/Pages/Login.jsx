import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Login = () => {
  const { logIn, googleSignIn, loading, redirectPath, setRedirectPath } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (from !== '/' && !redirectPath) {
      setRedirectPath(from);
    }
  }, [from, redirectPath, setRedirectPath]);

  const handleLogIn = async event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log('User attempting login:', { email, password });

    try {
      await logIn(email, password);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: `Welcome back, ${email}!`,
        confirmButtonColor: '#6366f1',
      });
      form.reset();
      navigate(redirectPath || from, { replace: true });
      setRedirectPath('/');
    } catch (error) {
      console.error('Login failed:', error.message);
      toast.error(`Login failed: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      await result.user.reload();
      // Send user data to your backend
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

      console.log('Google sign-in result:', result.user);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: `Welcome back, ${result.user.displayName || result.user.email}!`,
        confirmButtonColor: '#6366f1',
      });
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
        {/* Left Side Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome back!</h1>
          <p className="py-6 text-lg italic">
            Create your HobbyHub account to explore passions, join communities,
            and track your growth — all in one place.
          </p>
        </div>
        {/* Right Side Form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Email"
                  name="email"
                  autoComplete="username"
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-bordered"
                  placeholder="Password"
                  name="password"
                  autoComplete="current-password"
                  required
                />

                <div className="flex justify-end text-sm mt-1 mb-2">
                  <span className="link link-hover">Forgot password?</span>
                </div>

                <button
                  className="btn btn-neutral mt-2"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Logging In...' : 'Login'}
                </button>

                {/* Divider */}
                <div className="divider">OR</div>

                {/* Google Button */}
                <button
                  className="btn btn-outline flex items-center justify-center gap-2"
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                >
                  <FcGoogle size={20} /> Sign in with Google
                </button>

                {/* Redirect to Register */}
                <p className="mt-4 text-sm text-center">
                  Don’t have an account?
                  <Link
                    to="/auth/register"
                    className="link link-primary font-semibold"
                  >
                    Register here
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
