<div align="center">
  <h1>🎨 HobbyHub – Full-Stack Hobby Group Platform</h1>
  <p>
    <strong>HobbyHub</strong> is a dynamic, full-stack social platform designed to connect people with shared interests. From painting and gaming to book clubs and hiking crews, users can discover, create, join, and manage local hobby groups with ease.
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
- **🤝 Full-Stack Group Interaction:**
  - Users can **join** groups, with membership status managed in the database.
  - The "My Groups" page now shows two distinct tables: **groups the user has created** and **groups they have joined**.
- **🌐 Advanced Group Exploration:** An "All Groups" page with client-side **filtering by category** and **sorting** capabilities.
- **🔒 Private Dashboard:** A protected, user-centric dashboard featuring an overview page with user info and key stats.
- **🎨 Persistent Theming:** A seamless dark/light mode toggle with preferences saved to `localStorage`, ensuring the theme persists across all pages and sessions.
- **🚀 Flawless UX:** A full-page initial loader to prevent content flash and a professional API request structure using **Axios**.
- **🔔 User Feedback:** Interactive alerts and confirmations using SweetAlert2 & React Toastify for a polished user experience.

### Server-Side

- **🌐 RESTful API:** A robust set of API endpoints built with Express.js for all group and user-related CRUD operations, including group membership.
- **🛡️ Protected Routes:** Secure endpoints for fetching user-specific created and joined groups.
- **📀 MongoDB Integration:** Efficient data storage using MongoDB Atlas, with a `members` array in group documents to track joined users.
- **🔒 Environment Security:** API keys and database credentials are kept secure using `dotenv`.

---

## 🚀 Tech Stack

### Frontend

<p>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/axios-671ddf?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/react_router-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI" />
  <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" />
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

| Method   | Endpoint                                 | Description                           |
| :------- | :--------------------------------------- | :------------------------------------ |
| `POST`   | `/groupInformation`                      | Create a new group.                   |
| `GET`    | `/groupInformation`                      | Get all groups.                       |
| `GET`    | `/groupInformation/:id`                  | Get a specific group by its ID.       |
| `GET`    | `/groupInformation/user?email={email}`   | Get groups **created** by a user.     |
| `GET`    | `/groupInformation/joined?email={email}` | Get groups **joined** by a user.      |
| `PATCH`  | `/groupInformation/:id/join`             | Add a user to a group's members list. |
| `PUT`    | `/groupInformation/:id`                  | Update group info by its ID.          |
| `DELETE` | `/groupInformation/:id`                  | Delete a group by its ID.             |
| `POST`   | `/users`                                 | Add a new user to the database.       |

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
