import { createContext, useContext, useState } from "react"

const EventsContext = createContext()

export function useEvents() {
  return useContext(EventsContext)
}

export async function getEvents() {
  const accessToken = localStorage.getItem("accessToken")
  const response = await fetch(
    "https://levelup-server.onrender.com/api/event",
    {
      headers: {
        accessToken,
      },
    }
  )
  const data = await response.json()
  return data
}

export async function getVenues() {
  const accessToken = localStorage.getItem("accessToken")
  const response = await fetch(
    "https://levelup-server.onrender.com/api/venue",
    {
      headers: {
        accessToken,
      },
    }
  )
  const data = await response.json()
  return data
}

export async function getCompanies() {
  const accessToken = localStorage.getItem("accessToken")
  const response = await fetch(
    "https://levelup-server.onrender.com/api/company",
    {
      headers: {
        accessToken,
      },
    }
  )
  const data = await response.json()
  return data
}

export async function getManagers() {
  const accessToken = localStorage.getItem("accessToken")
  const response = await fetch(
    "https://levelup-server.onrender.com/api/manager",
    {
      headers: {
        accessToken,
      },
    }
  )
  const data = await response.json()
  return data
}

export function EventsProvider({ children }) {
  const [events, setEvents] = useState([])

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  )
}
