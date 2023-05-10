import React from "react"
import { Link, Outlet } from "react-router-dom"
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
            <Link to="/dashboard">
              <Sidebar.Item icon={ChartPieIcon}>Dashboard</Sidebar.Item>
            </Link>
            <Link to="/dashboard/events">
              <Sidebar.Item icon={TicketIcon}>Events</Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup className="mb-10">
            <Link to="/dashboard/profile">
              <Sidebar.Item icon={UserIcon}>Profile</Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <Outlet />
    </div>
  )
}

export default DashboardLayout
