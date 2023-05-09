import React from "react"
import { Outlet } from "react-router-dom"
import { Sidebar } from "flowbite-react"
import { UserIcon, ChartPieIcon, TicketIcon } from "@heroicons/react/24/solid"

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo img="/level-up-icon-black.png" imgAlt="LevelUP logo">
          LevelUp
        </Sidebar.Logo>
        <Sidebar.Items className="flex h-fit flex-col justify-between">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/dashboard" icon={ChartPieIcon}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/events" icon={TicketIcon}>
              Events
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup className="mb-10">
            <Sidebar.Item href="/dashboard/profile" icon={UserIcon}>
              Profile
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <Outlet />
    </div>
  )
}

export default DashboardLayout
