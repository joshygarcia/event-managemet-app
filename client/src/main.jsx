import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import DashBoardLayout from "./components/DashBoardLayout"

import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<DashBoardLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="events" element={<div>Events</div>} />
          <Route path="events/:eventId" element={<div>Event</div>} />
          <Route path="events/:eventId/edit" element={<div>Edit Event</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
