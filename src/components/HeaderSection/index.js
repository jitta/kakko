import React from 'react'
import styled from '../../styled'
import { View, Text, Platform } from '../../base'
import Title from '../../typo/Title'
import colors from '../../styleguide/colors'

const HeaderSectionContainerStyled = styled(View)`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  background: white;
`

const TitleStyled = styled(Title)`
  color: ${({ textColor }) => (textColor ? textColor : colors.BlackPearl)};
  font-weight: bold;
`

const BorderStyled = styled(View)`
  height: 1px;
  background: ${colors.Geyser};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

const HeaderSection = ({ title, separator = true}) => {
  return (
    <HeaderSectionContainerStyled>
      <TitleStyled>
        {title}
      </TitleStyled>
      { separator ? <BorderStyled /> : null}
    </HeaderSectionContainerStyled>
  )
}
  
export default HeaderSection