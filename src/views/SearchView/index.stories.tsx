import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { SearchView } from '.'


const meta: Meta<typeof SearchView> = {
  title: 'views/SearchView',
  component: SearchView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  play: async ({ canvasElement }) => {
    const button = await within(canvasElement).findByTestId('button')
    expect(button).toBeInTheDocument()
    expect(within(canvasElement).queryByTestId('countText')?.innerHTML).toBe("0")
    await userEvent.click(button)
    expect(within(canvasElement).queryByTestId('countText')?.innerHTML).toBe("1")
  },
}