import React from "react"
import { Outlet } from "react-router-dom"
import { Sidebar } from "flowbite-react"

const DashBoardLayout = () => {
  return (
    <div className="flex">
      <div className="w-fit">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/dashboard" icon={""}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="/dashboard/events" icon={""}>
                Events
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/user" icon={""}>
                User
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <Outlet />
    </div>
  )
}

export default DashBoardLayout
