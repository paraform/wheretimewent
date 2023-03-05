"use client"

import { OrganizationSwitcher as ClerkOrganizationSwitcher } from "@clerk/nextjs/app-beta"

type OrganizationSwitcherProps = {}

function OrganizationSwitcher(props: OrganizationSwitcherProps) {
  return <ClerkOrganizationSwitcher />
}

export default OrganizationSwitcher
