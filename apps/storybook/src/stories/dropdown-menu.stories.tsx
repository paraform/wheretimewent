// dropdown-menu.stories.tsx
import * as React from "react"

import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@wtw/ui/src/button"
// Import the component directly to add auto-generated documentation https://storybook.js.org/docs/7.0/react/writing-docs/autodocs#the-auto-generated-documentation-is-not-showing-up-in-a-monorepo-setup
import { DropdownMenu, content, item } from "@wtw/ui/src/dropdown-menu"

const meta = {
  title: "Components/Dropdown Menu",
  component: DropdownMenu.Root,
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button>Click Me</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className={content}>
        <DropdownMenu.Item className={item}>Content</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
}
