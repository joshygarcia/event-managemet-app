import React, { useState, useEffect } from "react"
import { Card, Title, Text } from "@tremor/react"
import { useParams } from "react-router-dom"
import { useEvents } from "../components/EventsContext"

const EventDetail = () => {
  const { eventId } = useParams()
  const { events } = useEvents()
  const event = events.find((event) => event.eventId == eventId)
  if (!event) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-4">
      <Card>
        <Title className="mb-2 text-xl font-semibold">{event.name}</Title>
        <Text className="mb-2">{event.description}</Text>
        <Text className="mb-2">
          Date: {new Date(event.date).toLocaleDateString()}
        </Text>
        <Text className="mb-2">Time: {event.time}</Text>
        <Text className="mb-2">Venue: {event.venueId}</Text>
        <Text className="mb-2">Company: {event.companyId}</Text>
        <Text className="mb-2">Manager: {event.managerId}</Text>
      </Card>
    </div>
  )
}

export default EventDetail
