import React from "react"
import { useState, useEffect } from "react"
import { Timeline } from "flowbite-react"
import { CalendarIcon } from "@heroicons/react/24/solid"
import { Card } from "@tremor/react"

const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getEvents()
      .then((data) => {
        setEvents(data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="mx-4 mb-4 h-5/6 w-full self-center">
      <h2 className="mb-4 text-2xl font-semibold">Upcoming Events</h2>
      <Card className="max-h-full overflow-scroll">
        <Timeline className="border-l-2 border-l-blue-800">
          {events.map((event) => (
            <Timeline.Item key={event.eventId}>
              <Timeline.Point icon={CalendarIcon} className="-ml-9" />
              <Timeline.Content className="">
                <Timeline.Time>{event.date}</Timeline.Time>
                <Timeline.Title className="my-1">{event.name}</Timeline.Title>
                <Timeline.Body>{event.description}</Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      </Card>
    </div>
  )
}

export default Events

async function getEvents() {
  const accessToken = localStorage.getItem("accessToken")
  const response = await fetch("http://localhost:3000/api/event", {
    headers: {
      accessToken,
    },
  })
  const data = await response.json()
  return data
}
