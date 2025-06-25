# 🎨 HobbyHub – Full-Stack Hobby Group Platform

**HobbyHub** is a hobby-centric platform where users can connect based on shared interests like painting, photography, gaming, and more. Built with the MERN stack, the platform supports group creation, exploration, and management.

🔗 [Live Client](https://hobby-hub-1549a.web.app/)  
🔗 [Live API](https://hobby-hub-server-lemon.vercel.app/)

---

## 📁 Project Structure

```
hobbyhub/
 ├ client/  → React frontend (Tailwind CSS + Firebase)
 └ server/  → Express backend (MongoDB + REST APIs)
```

---

## ✨ Key Features

### Client

- 🔐 Firebase Auth (Google & Email/Password)
- ➕ Create, join, and explore hobby groups
- 🌐 All Groups page with filtering + scroll animations
- 📄 Group details page with join functionality
- 👥 My Groups management (update/delete only your groups)
- ⚪ Theme support with dark/light mode toggle (DaisyUI)
- 🔔 Alerts, confirmations, and toasts with SweetAlert2 & Toastify
- 🌟 Fully responsive UI with smooth UX animations

### Server

- 🌐 RESTful API for group CRUD operations
- ⚖️ Protected user-specific endpoints using email query
- 📀 MongoDB Atlas database
- ⚖️ Environment-secured via dotenv

---

## 🚀 Tech Stack

**Frontend:**  
React, Tailwind CSS, DaisyUI, Firebase, React Router DOM, React Awesome Reveal, SweetAlert2, React Toastify, React Icons, Typewriter

**Backend:**  
Node.js, Express, MongoDB, CORS, dotenv, Vercel

---

## 🚧 API Endpoints

**Group APIs:**

| Method | Endpoint                               | Description              |
| ------ | -------------------------------------- | ------------------------ |
| POST   | `/groupInformation`                    | Create a new group       |
| GET    | `/groupInformation`                    | Get all groups           |
| GET    | `/groupInformation/user?email={email}` | Get groups by user email |
| GET    | `/groupInformation/:id`                | Get specific group by ID |
| PUT    | `/groupInformation/:id`                | Update group info by ID  |
| DELETE | `/groupInformation/:id`                | Delete group by ID       |

---

## 🛠️ Run Locally

```bash
# Clone the full project
git clone https://github.com/rafirono13/hobbyhub.git
cd hobbyhub

# Run client
cd client
npm install
npm run dev

# Run server (in another terminal tab)
cd ../server
npm install
npm run dev
```

---

## 📅 License

This project is open source and free to use for learning and experimentation purposes.
