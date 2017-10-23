import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Page from '../Page'

import { Button, Image, Text, TextInput, View } from 'react-native'
import styled from 'kakko/styled'

const text = `
import styled from 'kakko/styled'

const Container = styled(View)\`
  background-color: #eee;
\`

const Component = () => (
  <Container>
    <Title>This is Title</Title>
  </Container>
)
`

const Container = styled(View)`
  background-color: #eee;
`

const Title = styled(Text)`
  font-size: 24px;
`

storiesOf('Base', module).add('Styled', () => (
  <Page code={text}>
    <Container>
      <Title>This is Title</Title>
    </Container>
  </Page>
))
