import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Page from '../Page'

import { Text } from 'react-native'
import Divider from 'kakko/components/Divider'

const text = `
import Divider from 'kakko/components/Divider'

const Component = () => (
  <View>
    <Text>Card Content</Text>

    <Divider size='XL'/> 

    <Text>Card Content</Text>

    <Divider line/> 
    
    <Text>Card Content</Text>
  </View>
)
`


storiesOf('Component', module).add('Divider', () => (
  <Page code={text}>
    <Text>Card Content</Text>
    <Divider size='XL'/> 
    <Text>Card Content</Text>
    <Divider line/> 
    <Text>Card Content</Text>
  </Page>
))
