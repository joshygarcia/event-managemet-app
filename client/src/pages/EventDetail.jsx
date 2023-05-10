import React, { useState, useEffect } from "react"
import { Card, Title, Text } from "@tremor/react"
import { useParams } from "react-router-dom"
import { useEventsContext } from "../components/EventsContext"
import { format } from "date-fns"

const EventDetail = () => {
  const { eventId } = useParams()
  const { events, venues, companies, managers, caters, productions } =
    useEventsContext()
  const event = events.find((event) => event.eventId == eventId)
  const venue = venues.find((venue) => venue.venueId == event.venueId)
  const company = companies.find((company) => company.userId == event.companyId)
  const manager = managers.find((manager) => manager.userId == event.managerId)

  const timeString = event.time
  const time = new Date(`2022-05-10T${timeString}`)
  const formattedTime = format(time, "h:mm a")

  if (!event) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
      <Card className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        <Title className="mb-6 text-center text-3xl font-semibold">
          {event.name}
        </Title>
        <Text className="mb-4 text-lg">{event.description}</Text>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Text className="text-lg font-semibold">Date:</Text>
            <Text className="text-lg">
              {new Date(event.date).toLocaleDateString()}
            </Text>
          </div>
          <div>
            <Text className="text-lg font-semibold">Time:</Text>
            <Text className="text-lg">{formattedTime}</Text>
          </div>
          <div>
            <Text className="text-lg font-semibold">Venue:</Text>
            <Text className="text-lg">{venue.name}</Text>
          </div>
          <div>
            <Text className="text-lg font-semibold">Company:</Text>
            <Text className="text-lg">{company.name}</Text>
          </div>
          <div>
            <Text className="text-lg font-semibold">Manager:</Text>
            <Text className="text-lg">{manager.name}</Text>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default EventDetail
