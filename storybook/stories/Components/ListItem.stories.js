import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Page from '../Page'

import { Text } from 'react-native'
import ListItem from 'kakko/components/ListItem'

const text = `
import ListItem from 'kakko/components/ListItem'

const Component = () => (
  <Page code={text}>
    <ListItem title="Title" />
    <ListItem title="Title" subtitle="Subtitle" />
    <ListItem title="Title" subtitle="Subtitle" separator={false} />
  </Page>
)
`

storiesOf('Component', module).add('ListItem', () => (
  <Page code={text}>
    <ListItem title="Title" />
    <ListItem title="Title" subtitle="Subtitle" />
    <ListItem title="Title" subtitle="Subtitle" separator={false}/>
    <ListItem title="Title with image" image="https://octodex.github.com/images/catstello.png" />
  </Page>
))
