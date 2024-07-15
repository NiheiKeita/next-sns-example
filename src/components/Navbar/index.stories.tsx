
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { Navbar } from '.'


const meta: Meta<typeof Navbar> = {
  title: 'components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  play: async ({ canvasElement }) => {
    await within(canvasElement).findByText('Twitter Clone')
  },
}