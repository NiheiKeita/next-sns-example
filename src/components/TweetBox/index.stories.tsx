
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { TweetBox } from '.'


const meta: Meta<typeof TweetBox> = {
  title: 'components/TweetBox',
  component: TweetBox,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  play: async ({ canvasElement }) => {
    await within(canvasElement).findByText('Twitter Clone')
  },
}