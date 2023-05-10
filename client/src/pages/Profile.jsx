import React from "react"
import { fetchApi } from "../utils/api"
import { useEffect, useState } from "react"
import { useEventsContext } from "../components/EventsContext"
import { Card, Button, Text } from "@tremor/react"

const Profile = () => {
  const { user } = useEventsContext()
  const userData = user.user
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState({ ...userData })
  console.log(editedUser)

  const handleInputChange = (event) => {
    setEditedUser({
      ...editedUser,
      [event.target.name]: event.target.value,
    })
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    // make API request to save the data here
    console.log(editedUser)
    setIsEditing(false)
  }

  return (
    <Card className="mx-auto mt-10 flex h-5/6 max-w-lg flex-col justify-between p-10">
      <Text className="mb-5 text-3xl">User Profile</Text>
      {["username", "email", "phone", "address", "city", "state", "zip"].map(
        (field) => (
          <div key={field} className="mb-3">
            <Text className="mb-2 block text-sm font-bold capitalize text-gray-700">
              {field}:
            </Text>
            {isEditing ? (
              <input
                name={field}
                value={editedUser[field]}
                onChange={handleInputChange}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            ) : (
              <Text className="text-gray-700">
                {user[field]} {editedUser[field]}
              </Text>
            )}
          </div>
        )
      )}

      {isEditing ? (
        <Button size="md" variant="primary" onClick={handleSave}>
          Save
        </Button>
      ) : (
        <Button size="md" variant="primary" onClick={handleEdit}>
          Edit
        </Button>
      )}
    </Card>
  )
}

export default Profile
