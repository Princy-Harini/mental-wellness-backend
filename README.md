# Mental Wellness Hub – Backend

This is the backend server of the **Mental Wellness Hub** project. It provides RESTful APIs for user authentication, mood tracking, journaling, feedback collection, and insights.

## 🌐 Live API

👉 [https://mental-wellness-backend-1-q6m0.onrender.com](https://mental-wellness-backend-1-q6m0.onrender.com)

## 🛠️ Technologies Used

- **Node.js** – Runtime
- **Express.js** – API server
- **MongoDB** – Database (via MongoDB Atlas)
- **Mongoose** – ODM for MongoDB
- **bcryptjs** – Password hashing
- **dotenv** – Environment variables
- **CORS** – Cross-origin requests
- **Render** – Backend deployment

## 📁 Folder Structure

mental-wellness-backend/

├── models/

│ ├── User.js

│ ├── Mood.js

│ ├── Journal.js

│ ├── Feedback.js

├── routes/

│ ├── authRoutes.js

│ ├── moodRoutes.js

│ ├── journalRoutes.js

│ ├── feedbackRoutes.js

├── .env

├── index.js

├── package.json


## 🔐 API Features

- **User Signup & Login** with hashed passwords
- **Mood Tracking API**
- **Journal Entry API**
- **Feedback Submission**
- **Protected Routes (JWT ready)**

## ⚙️ Setup Locally

To run the server on your local system:

```bash
git clone https://github.com/Princy-Harini/mental-wellness-backend.git
cd mental-wellness-backend
npm install
npm start

