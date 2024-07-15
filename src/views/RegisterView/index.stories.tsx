
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { RegisterView } from '.'


const meta: Meta<typeof RegisterView> = {
  title: 'views/RegisterView',
  component: RegisterView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  play: async ({ canvasElement }) => {
    await within(canvasElement).findByTestId('button')
  },
}