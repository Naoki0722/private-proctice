import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, ButtonProps } from '@mui/material'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
const primaryProps: ButtonProps = {
  color: 'primary',
  variant: 'contained',
  children: 'test',
}
Primary.args = primaryProps
