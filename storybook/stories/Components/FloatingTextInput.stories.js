
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Page from '../Page'

import { Text } from 'react-native'
import FloatingTextInput from 'kakko/components/FloatingTextInput'

const text = `
import FloatingTextInput from 'kakko/components/FloatingTextInput'

const Component = () => (
  <Page code={text}>
    <FloatingTextInput label="Title" value="" />
    <FloatingTextInput label="Title" value="Value" />
    <FloatingTextInput label="Title" value="Value" caption="Caption Text"/>
    <FloatingTextInput label="Title" value="Value" caption="Caption Text" error={true}/>
    <FloatingTextInput label="Title" value="Value" editable={false}/>
  </Page>
)
`

storiesOf('Component', module).add('FloatingTextInput', () => (
  <Page code={text}>
    <FloatingTextInput label="Title" value="" />
    <FloatingTextInput label="Title" value="Value" />
    <FloatingTextInput label="Title" value="Value" caption="Caption Text"/>
    <FloatingTextInput label="Title" value="Value" caption="Caption Text" error={true}/>
    <FloatingTextInput label="Title" value="Value" editable={false}/>
  </Page>
))
