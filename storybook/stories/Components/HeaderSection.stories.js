import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Page from '../Page'

import HeaderSection from 'kakko/components/HeaderSection'

const text = `
import HeaderSection from 'kakko/components/HeaderSection'

const Component = () => (
  <Page code={text}>
    <HeaderSection title="Title" />
    <HeaderSection title="Title" separator={false}/>
  </Page>
)
`


storiesOf('Component', module).add('HeaderSection', () => (
  <Page code={text}>
    <HeaderSection title="Title" />
    <HeaderSection title="Title" separator={false}/>
  </Page>
))
