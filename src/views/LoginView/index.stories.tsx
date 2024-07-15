
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { LoginView } from '.'


const meta: Meta<typeof LoginView> = {
  title: 'views/LoginView',
  component: LoginView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  play: async ({ canvasElement }) => {
    await within(canvasElement).findByTestId('button')
  },
}