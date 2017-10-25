import React from 'react'
import styled from '../../styled'
import { View, Text, Platform } from '../../base'
// import propTypes from 'prop-types'
import { Label, Headline } from '../../typo'
import colors from '../../styleguide/colors'
import { fontSize } from '../../styleguide/fonts'

const DataItemContainerStyled = styled(View)`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  background: white;
`
const LabelStyle = styled(Label)`
  margin-bottom: 4px;
  color: ${({ textColor }) => (textColor ? textColor : colors.BlackPearl)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  ${({textSize}) => textSize ? `font-size: ${textSize}px;` : ''}
`
const ValueDataStyled = styled(Headline)`
  color: ${({ textColor }) => (textColor ? textColor : colors.BlackPearl)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  ${({textSize}) => textSize ? `font-size: ${textSize}px;` : ''}
`
const DataItem = ({ 
  labelAlign = 'left', 
  labelSize, 
  labelColor,
  titleColor,
  titleSize,
  titleAlign,
  title,
  label
 }) => {
   console.log(labelSize)
  return (
    <DataItemContainerStyled>
      <LabelStyle
        textAlign={labelAlign}
        textSize={labelSize}
        textColor={labelColor}
      >
        {label}
      </LabelStyle>
      <ValueDataStyled
        textAlign={titleAlign}
        textSize={titleSize}
        textColor={titleColor}
      >
        {title}
      </ValueDataStyled>
    </DataItemContainerStyled>
  )
}
// prop type here

export default DataItem