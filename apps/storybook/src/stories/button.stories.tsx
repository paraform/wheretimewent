// button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@wtw/ui"

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onClick: () => console.log("Clicked"),
    children: "Click Me",
  },
}
