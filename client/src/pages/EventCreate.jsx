import React, { useState, useEffect } from "react"
import {
  Card,
  Title,
  Dropdown,
  DropdownItem,
  Button,
  TextInput,
} from "@tremor/react"
import { useNavigate } from "react-router-dom"

const EventCreate = () => {
  const [venues, setVenues] = useState([])
  const [companies, setCompanies] = useState([])
  const [managers, setManagers] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    description: "",
    venueId: "",
    companyId: "",
    managerId: "",
  })

  useEffect(() => {
    fetch("http://localhost:3000/api/manager", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setManagers(data)
        console.log(data)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/api/venue", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setVenues(data)
        console.log(data)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/api/company", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data)
        console.log(data)
      })
  }, [])

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3000/api/event/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accessToken: localStorage.getItem("accessToken"),
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        navigate("/dashboard/events")
      } else {
        const error = await response.json()
        console.error(error)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Card className="p-4">
      <Title className="mb-4">Create Event</Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Event Name"
        />
        <TextInput
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Event Date"
        />
        <TextInput
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="Event Time"
        />
        <TextInput
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Event Description"
        />

        <Dropdown
          name="venueId"
          value={formData.venueId}
          onValueChange={(value) =>
            setFormData((prevState) => ({
              ...prevState,
              venueId: value,
            }))
          }
          placeholder="Select a Venue"
        >
          {venues.map((venue) => (
            <DropdownItem
              key={venue.id}
              value={venue.venueId}
              text={venue.name}
            />
          ))}
        </Dropdown>

        <Dropdown
          name="companyId"
          value={formData.companyId}
          onValueChange={(value) =>
            setFormData((prevState) => ({
              ...prevState,
              companyId: value,
            }))
          }
          placeholder="Select a Company"
        >
          {companies.map((company) => (
            <DropdownItem
              key={company.id}
              value={company.userId}
              text={company.name}
            />
          ))}
        </Dropdown>

        <Dropdown
          name="managerId"
          value={formData.managerId}
          onValueChange={(value) =>
            setFormData((prevState) => ({
              ...prevState,
              managerId: value,
            }))
          }
          placeholder="Select a Manager"
        >
          {managers.map((manager) => (
            <DropdownItem
              key={manager.id}
              value={manager.userId}
              text={manager.name}
            />
          ))}
        </Dropdown>

        <Button type="submit" className="mt-4">
          Create Event
        </Button>
      </form>
    </Card>
  )
}

export default EventCreate
