# 📊 Company Info Viewer

This project is a React application that displays detailed company information using a mock backend powered by JSON Server. The entire stack is containerized using Docker.

## 📦 Technologies

- **React** + TypeScript (Frontend)
- **React Mosaic** (Window layout manager)
- **Tailwind CSS** (Styling)
- **JSON Server** (Mock API)
- **Docker + Docker Compose** (Containerization)

---

## 🚀 Quick Start (Without Docker)

### 1. Install Dependencies

```bash
npm install
```

### 2. Start JSON Server

```bash
npm run server
# or
npx json-server --watch companies-lookup.json --port 3001
```

### 3. Start React App

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🐳 Running with Docker

### ⚙️ Requirements

- Docker installed
- Docker Compose installed

### 🔧 Usage

1. **Build and Start the Containers:**

```bash
docker-compose up --build
```

2. **Access the App:**

- Frontend: [http://localhost:3000](http://localhost:3000)
- API (JSON Server): [http://localhost:3001/companies](http://localhost:3001/companies)

---

## 📁 Project Structure

```
.
├── src/                     # React components and logic
├── public/                  # Static public files (favicon, index.html)
├── companies-lookup.json    # Mock database for JSON Server
├── Dockerfile               # Frontend Docker build
├── docker-compose.yml       # Multi-service setup (frontend + API)
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Scripts and dependencies
└── README.md                # This file
```
