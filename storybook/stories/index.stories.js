import React from 'react'
import { Text } from '../../src/base'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from './Button'
import CenterView from './CenterView'
import Welcome from './Welcome'
import Page from './Layout/Page'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
  .add('with text text', () => (
    <Page
      info="Test"
      code={`<Button onPress={action('clicked-text')}>
  <Text>Hello Button</Text>
</Button>
    `}
    >
      <Button onPress={action('clicked-text')}>
        <Text>Hello Button</Text>
      </Button>
    </Page>
  ))
