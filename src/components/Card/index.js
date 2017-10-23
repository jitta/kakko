import React from 'react'
import { View, Platform } from 'react-native'
import styled from '../../styled'

let NormalCardStyle = styled(View)`

  background-color: #ffffff;

  border: ${({ shadow }) => shadow ? '1px solid rgba(0, 0, 0, 0)' : '1px solid #E9EEf5' };
  border-radius: 3px;
  padding: 24px;
  margin: 24px;
  marginTop: 0;

  ${'' /* For React Native */}
  shadow-offset: 0px 1px;
  shadow-color: rgba(35, 36, 61, 0.10);
  shadow-radius: ${({ shadow }) => (shadow ? '6px' : '0px')};
  shadow-opacity: ${ ({shadow}) => shadow ? 1 : 0};
`

if (Platform.OS == 'web') {
  NormalCardStyle = NormalCardStyle.extend`
    box-shadow: ${ ({shadow}) => shadow ? '0 1px 10px rgba(35, 36, 61, 0.10);' : '0;'}; 
  `
}

NormalCardStyle.defaultProps = {
  border: true,
  shadow: false,
  roundedShadow: false
}

export default NormalCardStyle