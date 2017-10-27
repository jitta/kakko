
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Page from '../Page'

import { Text } from 'react-native'
import FloatingLabel from 'kakko/components/FloatingLabel'

const text = `
import FloatingLabel from 'kakko/components/FloatingLabel'

const Component = () => (
  <Page code={text}>
    <FloatingLabel label="Title" value="" />
    <FloatingLabel label="Title" value="Value" />
    <FloatingLabel label="Title" value="Value" caption="Caption Text"/>
    <FloatingLabel label="Title" value="Value" caption="Caption Text" error={true}/>
    <FloatingLabel label="Title" value="Value" editable={false}/>
  </Page>
)
`

storiesOf('Component', module).add('FloatingLabel', () => (
  <Page code={text}>
    <FloatingLabel label="Title" value="" />
    <FloatingLabel label="Title" value="Value" />
    <FloatingLabel label="Title" value="Value" caption="Caption Text"/>
    <FloatingLabel label="Title" value="Value" caption="Caption Text" error={true}/>
    <FloatingLabel label="Title" value="Value" editable={false}/>
  </Page>
))
