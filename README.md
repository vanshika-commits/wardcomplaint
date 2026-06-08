# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Connect to backend (Complaint API)

This frontend submits complaints to the Node/Express backend.

### 1) Backend (runs on port 3000)

```bash
cd C:\Users\user\complaint-backend
npm install
copy .env.example .env
npm run dev
```

Make sure your backend `.env` has:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/complaints_db
FRONTEND_ORIGIN=http://localhost:5173
```

### 2) Frontend (Vite)

Create a `.env` in this folder (copy from `.env.example`):

```bash
copy .env.example .env
```

Run the frontend:

```bash
npm install
npm run dev
```

The complaint form (`src/pages/Registerco.jsx`) will `POST` to:
- `http://localhost:3000/api/complaints`
