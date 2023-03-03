// button.stories.tsx

import type { Meta, StoryObj } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"

// Import the component directly to add auto-generated documentation https://storybook.js.org/docs/7.0/react/writing-docs/autodocs#the-auto-generated-documentation-is-not-showing-up-in-a-monorepo-setup
import { Button } from "@wtw/ui/src/button"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Click Here",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // See https://storybook.js.org/docs/7.0/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const button = canvas.getByRole("button")

    await userEvent.click(button)
  },
}
