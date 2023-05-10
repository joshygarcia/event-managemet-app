import { createContext, useContext, useState } from "react"
import { fetchApi } from "../utils/api"
import { useEffect } from "react"

const EventsContext = createContext()

export function useEventsContext() {
  return useContext(EventsContext)
}

export function EventsProvider({ children }) {
  const [events, setEvents] = useState([])
  const [venues, setVenues] = useState([])
  const [companies, setCompanies] = useState([])
  const [managers, setManagers] = useState([])
  const [caters, setCaters] = useState([])
  const [productions, setProductions] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchApi("/api/user/info", setUser)
    fetchApi("/api/event", setEvents)
    fetchApi("/api/event", setEvents)
    fetchApi("/api/manager", setManagers)
    fetchApi("/api/venue", setVenues)
    fetchApi("/api/company", setCompanies)
    fetchApi("/api/cater", setCaters)
    fetchApi("/api/production", setProductions)
  }, [])

  return (
    <EventsContext.Provider
      value={{ events, venues, companies, managers, caters, productions, user }}
    >
      {children}
    </EventsContext.Provider>
  )
}
