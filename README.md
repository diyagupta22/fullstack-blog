# 🚀 Fullstack Blog Application (MERN Stack)

## 📌 Project Overview

This project is a **Fullstack Blog Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
It allows users to create, view, and delete blog posts, along with optional image uploads.

The project demonstrates end-to-end integration between frontend and backend, including API communication and database persistence.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **File Upload:** Multer
* **Cloud Storage:** Cloudinary

---

## ✨ Features

* 📝 Create blog posts
* 📄 View all posts
* ❌ Delete posts
* 🖼️ Upload and display images
* 🔗 Full frontend-backend integration
* 💾 Persistent data using MongoDB

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```
git clone <your-repo-link>
cd fullstack-blog
```

---

### 2. Backend Setup

```
cd Backend
npm install
npx nodemon server.js
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 🌐 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/posts     | Fetch all posts |
| POST   | /api/posts     | Create new post |
| DELETE | /api/posts/:id | Delete a post   |

---

## 📷 Image Upload

* Images are uploaded using **Multer**
* Stored securely on **Cloudinary**
* Image URL is saved in MongoDB and displayed in UI

---

## 🎯 Learning Outcomes

* Understanding of MERN stack architecture
* Building RESTful APIs
* Handling file uploads in Node.js
* Connecting React frontend with backend APIs
* Working with cloud-based databases (MongoDB Atlas)

---

## 🚀 Future Improvements

* Edit/Update posts
* User authentication
* Like/Comment system
* Responsive UI enhancements

---

## 👩‍💻 Author

**Diya Gupta**
Fullstack Developer

---

## 📌 Conclusion

This project demonstrates a complete fullstack workflow and serves as a strong foundation for building scalable web applications.

---
