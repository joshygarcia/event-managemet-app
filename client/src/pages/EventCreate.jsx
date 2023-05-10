import React, { useState, useEffect } from "react"
import {
  Card,
  Title,
  Dropdown,
  DropdownItem,
  Button,
  TextInput,
  Text,
  MultiSelectBox,
  MultiSelectBoxItem,
} from "@tremor/react"
import { useNavigate } from "react-router-dom"

const EventCreate = () => {
  const [venues, setVenues] = useState([])
  const [companies, setCompanies] = useState([])
  const [managers, setManagers] = useState([])
  const [caters, setCaters] = useState([])
  const [productions, setProductions] = useState([])
  const navigate = useNavigate()
  const [totalCost, setTotalCost] = useState(0) // This will hold the total cost

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    description: "",
    venueId: "",
    companyId: "",
    managerId: "",
    caterId: [],
    productionId: [],
    expectedCapacity: 0,
  })

  useEffect(() => {
    let cost = 0

    if (formData.venueId) {
      const selectedVenue = venues.find(
        (venue) => venue.venueId === formData.venueId
      )
      cost += selectedVenue ? selectedVenue.pricePerDay : 0
    }

    formData.caterId.forEach((caterId) => {
      const selectedCater = caters.find((cater) => cater.caterId === caterId)
      cost += selectedCater
        ? selectedCater.pricePerPerson * formData.expectedCapacity
        : 0
    })

    formData.productionId.forEach((productionId) => {
      const selectedProduction = productions.find(
        (production) => production.productionId === productionId
      )
      cost += selectedProduction ? selectedProduction.pricePerDay : 0
    })

    setTotalCost(cost)
  }, [formData, venues, caters, productions])

  const fetchApi = async (url, setter) => {
    const response = await fetch(url, {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    })

    const data = await response.json()
    setter(data)
  }

  useEffect(() => {
    fetchApi("https://levelup-server.onrender.com/api/manager", setManagers)
    fetchApi("https://levelup-server.onrender.com/api/venue", setVenues)
    fetchApi("https://levelup-server.onrender.com/api/company", setCompanies)
    fetchApi("https://levelup-server.onrender.com/api/cater", setCaters)
    fetchApi(
      "https://levelup-server.onrender.com/api/production",
      setProductions
    )
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        "https://levelup-server.onrender.com/api/event/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accessToken: localStorage.getItem("accessToken"),
          },
          body: JSON.stringify(formData),
        }
      )

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

        <input
          name="expectedCapacity"
          type="number"
          value={formData.expectedCapacity}
          onChange={handleChange}
          placeholder="Expected Capacity"
          className="focus:shadow-outline w-full appearance-none rounded border border-gray-300 px-3 py-2 pl-4 text-sm leading-tight text-gray-700 focus:outline-none"
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
              text={`${venue.name} - ${venue.type} - ${venue.capacity} people - $${venue.pricePerDay} / day`}
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

        <MultiSelectBox
          name="caterId"
          value={formData.caterId}
          placeholder="Select Caters"
          onValueChange={(value) =>
            setFormData((prevState) => ({
              ...prevState,
              caterId: value,
            }))
          }
        >
          {caters.map((cater) => (
            <MultiSelectBoxItem
              key={cater.id}
              value={cater.caterId}
              text={`${cater.name} - ${cater.type} - ${
                cater.alcohol ? "Alcohol" : "Non-Alcoholic"
              } $${cater.pricePerPerson} / person`}
            />
          ))}
        </MultiSelectBox>

        <MultiSelectBox
          name="productionId"
          value={formData.productionId}
          placeholder="Select Productions"
          onValueChange={(value) =>
            setFormData((prevState) => ({
              ...prevState,
              productionId: value,
            }))
          }
        >
          {productions.map((production) => (
            <MultiSelectBoxItem
              key={production.id}
              value={production.productionId}
              text={`${production.name} -${
                (production.audio ? " Audio" : "") +
                (production.video ? " Video" : "") +
                (production.lighting ? " Lighting" : "") +
                (production.electrical ? " Electrical" : "")
              }  $${production.pricePerDay} / day"`}
            />
          ))}
        </MultiSelectBox>

        <Text className="mt-4 text-lg">
          Total Cost: <span className="text-green-400">$ {totalCost}</span>
        </Text>

        <Button type="submit" className="mt-4">
          Create Event
        </Button>
      </form>
    </Card>
  )
}

export default EventCreate
