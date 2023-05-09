import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import DashboardLayout from "./components/DashboardLayout"
import dashboardLoader from "./pages/Dashboard"
import Events from "./pages/Events"

import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" loader={""} element={<DashboardLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:eventId" element={<div>Event</div>} />
          <Route path="events/:eventId/edit" element={<div>Edit Event</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
