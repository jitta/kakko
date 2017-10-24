import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Page from '../Page'

import { Text } from 'react-native'
import { Display, Headline, Title, Body, Label, Caption } from 'kakko/typo'

const code = `
import { Display, Headline, Title, Body, Label, Caption } from 'kakko/typo'
// or
import Display from 'kakko/typo/Display'

const Component = () => (
  <Page code={text}>
    <Display>Display</Display>
    <Headline>Headline</Headline>
    <Title>Title</Title>
    <Body>Body</Body>
    <Label>Label</Label>
    <Caption>Caption</Caption>
  </Page>
)
`


storiesOf('Typo', module).add('Typo', () => (
  <Page code={code}>
    <Display>Display</Display>
    <Headline>Headline</Headline>
    <Title>Title</Title>
    <Body>Body</Body>
    <Label>Label</Label>
    <Caption>Caption</Caption>
  </Page>
))
