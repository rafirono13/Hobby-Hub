<div align="center">
  <img src="https://i.ibb.co/L5T1fK8/logo-placeholder.png" alt="HobbyHub Logo" width="120px" />
  <h1>🎨 HobbyHub – Full-Stack Hobby Group Platform</h1>
  <p>
    <strong>HobbyHub</strong> is a dynamic, full-stack social platform designed to connect people with shared interests. From painting and gaming to book clubs and hiking crews, users can discover, create, and manage local hobby groups with ease.
  </p>
</div>

🔗 [**Live Site**](https://hobby-hub-1549a.web.app/)
&nbsp;&nbsp;•&nbsp;&nbsp;
🔗 [**Live API**](https://hobby-hub-server-lemon.vercel.app/)

---

## ✨ Key Features

### Client-Side

- **🔐 Robust Authentication:** Secure user login and registration using Firebase Authentication (Email/Password & Google).
- **🏠 Multi-Section Homepage:** A rich, engaging landing page with 7+ animated sections, including a Swiper.js banner and a scrolling testimonial marquee.
- **🌐 Group Exploration:** An "All Groups" page with advanced client-side **filtering by category** and **sorting** capabilities.
- **🔒 Private Dashboard:** A protected, user-centric dashboard with:
  - An **Overview** page showcasing user info and stats cards (Total Groups vs. My Groups).
  - Nested routes for managing user-specific actions.
- **👥 Full Group Management (CRUD):**
  - **C**reate new hobby groups via a dedicated form.
  - **R**ead group details on a polished, two-column details page.
  - **U**pdate existing groups with pre-populated forms.
  - **D**elete groups from a personal "My Groups" table.
- **🎨 Persistent Theming:** A seamless dark/light mode toggle with preferences saved to `localStorage`, ensuring the theme persists across all pages and sessions, including the dashboard.
- **🚀 Flawless UX:** A full-page initial loader to prevent content flash, along with component-level loaders and beautiful animations from `react-awesome-reveal`.
- **🔔 User Feedback:** Interactive alerts, confirmations, and toasts using SweetAlert2 & React Toastify for a better user experience.

### Server-Side

- **🌐 RESTful API:** A robust set of API endpoints built with Express.js for all group and user-related CRUD operations.
- **🛡️ Protected Routes:** Secure endpoints for fetching user-specific data based on their email.
- **📀 MongoDB Integration:** Efficient and reliable data storage using MongoDB Atlas.
- **🔒 Environment Security:** API keys and database credentials are kept secure using `dotenv`.

---

## 🚀 Tech Stack

### Frontend

<p>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/react_router-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI" />
  <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" />
  <img src="https://img.shields.io/badge/swiper-%236332F6.svg?style=for-the-badge&logo=swiper&logoColor=white" alt="Swiper.js" />
</p>

### Backend

<p>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  <img src="https://img.shields.io/badge/mongodb-%234EA94B.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## 🚧 API Endpoints

| Method   | Endpoint                | Description                    |
| -------- | ----------------------- | ------------------------------ |
| `POST`   | `/groupInformation`     | Create a new group             |
| `GET`    | `/groupInformation`     | Get all groups                 |
| `GET`    | `/groupInformation/:id` | Get a specific group by its ID |
| `PUT`    | `/groupInformation/:id` | Update group info by its ID    |
| `DELETE` | `/groupInformation/:id` | Delete a group by its ID       |
| `POST`   | `/users`                | Add a new user to the database |

---

## 🛠️ How to Run Locally

```bash
# Clone the full project repository
git clone [https://github.com/rafirono13/hobbyhub.git](https://github.com/rafirono13/hobbyhub.git)
cd hobbyhub

# ---- In Terminal 1: Run the Client ----
cd client
npm install
npm run dev

# ---- In Terminal 2: Run the Server ----
cd ../server
npm install
npm run dev
```

Your client will be available at `http://localhost:5173` and the server will be running on port `3000`.

---

## 📅 License

This project is open-source and free to use for learning and experimentation purposes.
