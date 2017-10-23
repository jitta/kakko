import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Page from '../Page'

import { Button, Image, Text, TextInput, View } from 'kakko/base'

const code = `
import { 
  Button,
  Image,
  Text,
  TextInput,
  View,
} from 'kakko/base'

<View>
  <Text>This is Text</Text>
  <Button
    onPress={() => {}}
    title="Learn More"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
  />
  <Image
    style={{ width: 200, height: 200 }}
    source={{ uri: 'https://octodex.github.com/images/catstello.png' }}
  />
  </View>
</Page>
`

storiesOf('Base', module).add('View', () => (
  <Page code={code}>
    <View>
      <Text>This is Text</Text>
      <Button
        onPress={() => {}}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: 'https://octodex.github.com/images/catstello.png' }}
      />
    </View>
  </Page>
))
