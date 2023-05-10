import { Card, Title, Text, Tab, TabList, Grid } from "@tremor/react"
import { useState, useEffect } from "react"
import { BellIcon } from "@heroicons/react/24/solid"
import { useEventsContext } from "../components/EventsContext"
import { Rating } from "flowbite-react"

export default function Example() {
  const { events } = useEventsContext()

  // useEffect(() => {
  //   async function fetchData(/api/users) {
  //     const usersData = await setUsers()
  //     setUsers(usersData)
  //   }
  // }, [setUsers])

  const notifications = [
    "New registration for Event 1",
    "Event 2 tickets sold out",
  ]

  const tasks = [
    "Create a new venue",
    "Schedule a rehearsal with performers",
    "Order decorations for the event",
    "Research catering options",
    "Meet with sponsors",
    "Develop marketing strategy for the event",
    "Review contracts with vendors",
    "Coordinate transportation for attendees",
    "Organize event merchandise",
    "Create an event program",
  ]

  const fakeEvents = [
    {
      name: "Spring Music Festival",
      date: "2023-05-01",
      reviews: 4.5,
    },
    {
      name: "Summer Block Party",
      date: "2023-05-08",
      reviews: 3.8,
    },
  ]

  return (
    <main className="mx-4 w-full self-center">
      <Title className="ml-2 mt-2 self-start text-2xl">Dasboard</Title>
      <p className="ml-2 mt-2 self-start text-gray-400">Welcome</p>
      <Grid numColsMd={2} numColsLg={3} className="mt-6 gap-6">
        <Card>
          <h2 className="mb-2 text-xl font-semibold">Upcoming Events</h2>
          {events[0] ? (
            <ul>
              <li key={events[0].eventId} className="mb-2">
                <p>
                  <strong>{events[0].name}</strong> -{" "}
                  {new Date(events[0].date).toLocaleDateString()}
                </p>
              </li>
              <li key={events[1].eventId} className="mb-2">
                <p>
                  <strong>{events[1].name}</strong> -{" "}
                  {new Date(events[1].date).toLocaleDateString()}
                </p>
              </li>
            </ul>
          ) : (
            <p>No events</p>
          )}
        </Card>
        <Card>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Recent Events</h2>
            <ul>
              {fakeEvents.map((event, index) => (
                <li key={index}>
                  <p>
                    <strong>{event.name}</strong> -{" "}
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <Rating value={event.reviews}>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                  </Rating>
                </li>
              ))}
            </ul>
          </div>
        </Card>
        <Card>
          <h2 className="mb-2 text-xl font-semibold">Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className="mb-2 flex items-center">
                <BellIcon className="mr-2 h-5 w-5" />
                <p>{notification}</p>
              </li>
            ))}
          </ul>
        </Card>
      </Grid>
      <div className="mt-6">
        <Card className="h-96 overflow-scroll">
          <h2 className="mb-3 text-xl font-semibold">Tasks</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="mt-3 rounded bg-gray-200 p-2">
                {task}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  )
}
