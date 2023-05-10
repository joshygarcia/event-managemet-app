import React from "react"
import { useState, useEffect } from "react"
import { Button, Timeline } from "flowbite-react"
import { CalendarIcon } from "@heroicons/react/24/solid"
import { Card } from "@tremor/react"
import { getEvents } from "../components/EventsContext"
import { useEvents } from "../components/EventsContext"
import { Link } from "react-router-dom"

const Events = () => {
  const { events } = useEvents()
  const [loading, setLoading] = useState(false)
  return (
    <div className="mx-4 mb-4 h-5/6 w-full self-center">
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Upcoming Events</h2>
        <Link to="create">
          <Button className="mb-4">Create Event</Button>
        </Link>
      </div>
      <Card className="max-h-full overflow-scroll">
        <Timeline className="border-l-2 border-l-blue-800">
          {events.map((event) => (
            <Link to={`/dashboard/events/${event.eventId}`}>
              <Timeline.Item key={event.eventId}>
                <Timeline.Point icon={CalendarIcon} className="-ml-9" />
                <Timeline.Content className="">
                  <Timeline.Time>
                    {new Date(event.date).toLocaleDateString()}
                  </Timeline.Time>
                  <Timeline.Title className="my-1">{event.name}</Timeline.Title>
                  <Timeline.Body>{event.description}</Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Link>
          ))}
        </Timeline>
      </Card>
    </div>
  )
}

export default Events
