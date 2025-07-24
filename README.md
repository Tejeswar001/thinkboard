<div align="center">
  
  # MERN Notes App 📝
  
</div>

A full-stack notes application built with **MongoDB**, **Express**, **React**, and **Node.js** — featuring note CRUD operations, rate limiting, and responsive design. 
## 🚀 Features

- 🗂️ Create, read, update, and delete notes
- 📏 Rate limiting for API security
- 🌐 Fully responsive UI with React
- ⚙️ RESTful API structure
- 🛡️ Input validation & error handling
- ☁️ Production-ready deployment workflow

---

## 📁 Project Structure

```
mern-notes-app/
├── backend/        # Express server, MongoDB models, auth, routes
├── frontend/       # React app (Vite)
├── package.json    # Project-level scripts for build/start
```

---

## 🧰 Tech Stack

- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)
- **Security**: Rate Limiting, CORS
- **Deployment**: Render

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Tejeswar001/thinkboard
cd thinkboard
```

### 2. Install dependencies

```bash
# Install root dependencies (if any)
npm install

# Install backend dependencies
npm install --prefix backend

# Install frontend dependencies
npm install --prefix frontend
```

### 3. Configure environment variables

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

NODE_ENV=development
```

### 4. Run the app locally

```bash
# Start backend
npm run start --prefix backend

# Start frontend
npm run dev --prefix frontend
```

Or run both from root:

```bash
npm run start
```

---

## 📦 Build for Production

```bash
# Build frontend
npm run build --prefix frontend

# Deploy backend and serve frontend build statically (optional)
```

---

## 🧪 API Endpoints

| Method | Endpoint            | Description         |
|--------|---------------------|---------------------|
| GET    | /api/notes          | Fetch all notes     |
| POST   | /api/notes          | Create a new note   |
| PUT    | /api/notes/:id      | Update a note       |
| DELETE | /api/notes/:id      | Delete a note       |

---

## 🙌 Acknowledgements

- Thanks to [@codesistency](https://www.youtube.com/@codesistency) for the original tutorial and guidance.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
