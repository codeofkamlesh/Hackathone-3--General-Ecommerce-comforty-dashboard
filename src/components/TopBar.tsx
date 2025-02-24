// import { Notifications } from "  @/components/Notifications"
// import { UserNav } from "@/components/UserNav"
import Image from 'next/image';


export function TopBar() {
  return (

    <header className="flex items-center justify-between px-6 py-4 border-b bg-card">
      {/* <h1 className="text-2xl font-bold">Dashboard</h1> */}
      <div className="flex items-center space-x-4">
        {/* <Notifications /> */}
        {/* <UserNav /> */}
       <Image
       src="/logoicon.png"
       alt="logo"
       width={40}
       height={40} />
      </div>
    </header>
  )
}

