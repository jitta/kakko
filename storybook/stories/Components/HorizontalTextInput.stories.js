
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Page from '../Page'

import { Text } from 'react-native'
import HorizontalTextInput from 'kakko/components/HorizontalTextInput'

const text = `
import HorizontalTextInput from 'kakko/components/FloatingLabel'

const Component = () => (
  <Page code={text}>
    <HorizontalTextInput label="Title" value="" />
    <HorizontalTextInput label="Title" value="Value" />
    <HorizontalTextInput label="Title" value="Value" caption="Caption Text"/>
    <HorizontalTextInput label="Title" value="Value" caption="Caption Text" error={true}/>
    <HorizontalTextInput label="Title" value="Value" editable={false}/>
  </Page>
)
`

storiesOf('Component', module).add('HorizontalTextInput', () => (
  <Page code={text}>
    <HorizontalTextInput label="Title" value="" />
    <HorizontalTextInput label="Title" value="Value" />
    <HorizontalTextInput label="Title" value="Value" caption="Caption Text"/>
    <HorizontalTextInput label="Title" value="Value" caption="Caption Text" error={true}/>
    <HorizontalTextInput label="Title" value="Value" editable={false}/>
  </Page>
))
