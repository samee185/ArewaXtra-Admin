import React from 'react'
import DashboardCard from './DashboardCard'
import { UserIcon, ClipboardDocumentCheckIcon,  BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import Charts from './Charts';
import UserTable from './UserTable';
const Dashboard = () => {
  const todayDate = new Date()
  const formattedDate = todayDate.toLocaleDateString()
  return (
    <>
      <div className="p-1 ">
        <div className="p-4 flex items-center justify-center gap-5 flex-wrap lg:flex-nowrap">
          <DashboardCard
            title={"Users"}
            cardImg={<UserIcon className="h-9 w-9 text-[#eeb100]" />}
            amount={"1"}
            cardDate={formattedDate}
          />
          <DashboardCard
            title={"Products"}
            cardImg={
              <BuildingStorefrontIcon className="h-9 w-9 text-[#eeb100]" />
            }
            amount={"0"}
            cardDate={formattedDate}
          />
          <DashboardCard
            title={"orders"}
            cardImg={
              <ClipboardDocumentCheckIcon className="h-9 w-9 text-[#eeb100]" />
            }
            amount={"0"}
            cardDate={formattedDate}
          />
        </div>
        <div className="bg-gray-100 flex flex-wrap lg:flex-nowrap justify-between rounded-md">
          <div className="p-2 w-full basis-1/2">
            <h1 className="text-3xl text-center mb-4">
              Revenue <span className='text-[#eeb100]'>Indices</span>
            </h1>
            <Charts />
          </div>
          <div className="p-2 w-full basis-1/2">
            <p className="text-center text-2xl text-[#eeb100] mb-6">All <span className='text-black'>Users</span></p>
            <UserTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;