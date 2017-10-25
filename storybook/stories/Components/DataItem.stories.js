import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Page from '../Page'

import { Text } from 'react-native'
import DataItem from 'kakko/components/DataItem'

const text = `
import DataItem from 'kakko/components/DataItem'

const Component = () => (
  <Page code={text}>
    <ListItem title="Title" />
    <ListItem title="Title" subtitle="Subtitle" />
    <ListItem title="Title" subtitle="Subtitle" separator={false} />
  </Page>
)
`

storiesOf('Component', module).add('DataItem', () => (
  <Page code={text}>
    <DataItem label="Label" title="Title" />
    <DataItem 
      label="Label"
      title="Title"
      labelColor="#ea323d"
      titleColor="#da3de3"
    />
    <DataItem 
      label="Label"
      title="Title"
      labelColor="#ea323d"
      titleColor="#da3de3"
      labelSize="20"
      titleSize="20"
    />
  </Page>
))
