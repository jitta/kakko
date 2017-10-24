import React from 'react'
import { View } from '../../base'
import styled from '../../styled'

const SPACING_SIZE = {
  XXS: 4,
  XS: 8,
  S: 16,
  M: 32,
  L: 48,
  XL: 64,
  XXL: 72,
  NORMAL: 24
}

const sized = size => {
  switch (size) {
    case 'XXS':
      return SPACING_SIZE.XXS
      break
    case 'XS':
      return SPACING_SIZE.XS
      break
    case 'S':
      return SPACING_SIZE.S
      break
    case 'M':
      return SPACING_SIZE.M
      break
    case 'L':
      return SPACING_SIZE.L
      break
    case 'XL':
      return SPACING_SIZE.XL
      break
    case 'XXL':
      return SPACING_SIZE.XXL
      break
    default:
      return SPACING_SIZE.NORMAL
  }
}

const DividerStyle = styled(View)`
  height: ${({ size }) => sized(size)}px;
  justify-content: center;
`

const SeparaterStyle = styled(View)`
  background: #E9EEF5;
  height: 1px;
`

const Divider = props => {
  return (
    <View>
      <DividerStyle {...props} />
      {props.line && <SeparaterStyle />}
    </View>
  )
}

Divider.defaultProps = {
  line: false
}

export default Divider