import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Page from '../Page'

import { Text } from 'react-native'
import Card from 'kakko/components/Card'

const text = `
import Card from 'kakko/components/Card'

const Component = () => (
  <View>
    <Card border={true} shadow={true}>
      <Text>Card Content</Text>
    </Card>
    <Card shadow> 
      <Text>Card Content</Text>
    </Card>
  </View>
)
`


storiesOf('Component', module).add('Card', () => (
  <Page code={text}>
    <Card> 
      <Text>Card Content</Text>
    </Card>

    <Card shadow> 
      <Text>Card Content</Text>
    </Card>
  </Page>
))
