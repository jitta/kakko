import React from 'react'

import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';

import { View, Text, Platform, ScrollView } from 'kakko/base'

export default class Page extends React.Component {
  render() {
    let code = null
    let info = null
    const Container = (Platform.OS === 'web') ? View : ScrollView
    if (this.props.code) {
      code = <SyntaxHighlighter language='shell' style={atomOneDark} customStyle={{ padding: 20 }}>{this.props.code.trim()}</SyntaxHighlighter>
    }

    if (this.props.info) {
      info = <Text style={{ marginBottom: 18 }}>{this.props.info}</Text>
    }

    return (
      <Container style={
        { 
          padding: (Platform.OS === 'web') ? 40 : 0,
          paddingTop: 20,
          paddingBottom: 20
        }
      }>
        <Text style={{
          borderBottomWidth: 1,
          marginBottom: 12,
          fontSize: 18
        }}>Preview</Text>
        <View style={{
          padding: 20,
          borderWidth: 1,
          borderColor: '#f0f0f0',
          marginBottom: 24
        }}>
          {this.props.children}
        </View>

        { info }
        { code }
      </Container>
    )
  }
}
