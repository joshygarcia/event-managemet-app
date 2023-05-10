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
import { EventsProvider } from "./components/EventsContext"
import { UserProvider } from "./components/UserContext"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import EventDetail from "./pages/EventDetail"
import EventCreate from "./pages/EventCreate"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <EventsProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route path="" element={<Dashboard />} />
              <Route path="events" element={<Events />} />
              <Route path="events/:eventId" element={<EventDetail />} />
              <Route path="events/create" element={<EventCreate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </EventsProvider>
    </UserProvider>
  </React.StrictMode>
)
