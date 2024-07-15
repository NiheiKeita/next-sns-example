
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { TweetList } from '.'


const meta: Meta<typeof TweetList> = {
  title: 'components/TweetList',
  component: TweetList,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    tweets: [],
  },
  play: async ({ canvasElement }) => {
    await within(canvasElement).findByText('Twitter Clone')
  },
}