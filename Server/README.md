# 🧠 HobbyHub Server - REST API

This is the backend server for **HobbyHub**, hobby group platform. The server is built with **Node.js**, **Express**, and **MongoDB** to handle user creation, group management, and CRUD operations.

---

## 🌐 Live Server

- **Base URL:** [`https://hobby-hub-server-lemon.vercel.app/`](https://hobby-hub-server-lemon.vercel.app/)

---

## 🚀 Technologies Used

| Tech       | Purpose                         |
| ---------- | ------------------------------- |
| Node.js    | Runtime environment             |
| Express.js | Web server & routing            |
| MongoDB    | Database                        |
| Vercel     | Server deployment               |
| dotenv     | Environment variable management |
| CORS       | Cross-origin support            |

---

## 📦 API Endpoints

---

### ✅ Group APIs

| Method | Endpoint                               | Description              |
| ------ | -------------------------------------- | ------------------------ |
| POST   | `/groupInformation`                    | Create a new group       |
| GET    | `/groupInformation`                    | Get all groups           |
| GET    | `/groupInformation/user?email={email}` | Get groups by user email |
| GET    | `/groupInformation/:id`                | Get specific group by ID |
| PUT    | `/groupInformation/:id`                | Update group info by ID  |
| DELETE | `/groupInformation/:id`                | Delete group by ID       |

---

## ⚙️ Setup & Installation
