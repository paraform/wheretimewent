import {
  OrganizationProfile,
  OrganizationSwitcher,
  currentUser,
} from "@clerk/nextjs/app-beta"

import UserButton from "@/components/user-button"

export default async function Page() {
  const user = await currentUser()

  return (
    <div className="layout-center bg-white text-slate-900">
      Protected page. You are in {user?.id}!!!
      <div className="absolute top-4 right-4">
        <UserButton />
      </div>
      <div className="absolute top-4 left-4">
        <OrganizationSwitcher />
      </div>
    </div>
  )
}
