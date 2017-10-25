import React from 'react'
import styled from '../../styled'
import { View, Text, Image, Platform } from '../../base'
import colors from '../styleguide/colors'
import { Body, Title } from '../../typo'
import icRight from '../../assets/images/ic_right.png'

// console.log(View)

const ListItemContainerStyled = styled(View)`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  background: white;
  display: flex;
  flex-direction: row;
`
const ThumbnailStyled = styled(Image)`
  width: 32px;
  height: 32px;
  margin-right: 24px;
`
const BoxCenterStyled = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`
const TitleDefault = styled(Body)``

const DescriptionStyled = styled(Body)`color: ${colors.BaliHai};`

const ActionIconContainer = styled(View)`
  justify-content: center;
  margin-left: 24px;
`

const ActionIconStyled = styled(Image)`
  width: 24px;
  height: 24px;
`

const BorderStyled = styled(View)`
  height: 1px;
  background: ${colors.Alabaster};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

const ListItem = ({ title, subtitle, image, separator = true }) => {
  let thumbnail = null
  let displayText = null
  let border = null

  if (image) {
    thumbnail = <ThumbnailStyled source={{ uri: image }} />
  }

  if (subtitle) {
    displayText = (
      <BoxCenterStyled>
        <Title>{title}</Title>
        <Body>{subtitle}</Body>
      </BoxCenterStyled>
    )
  } else {
    displayText = (
      <BoxCenterStyled>
        <Body>{title}</Body>
      </BoxCenterStyled>
    )
  }

  if (separator) {
    border = <BorderStyled />
  }

  return (
    <ListItemContainerStyled>
      {thumbnail}
      {displayText}
      <ActionIconContainer>
        <ActionIconStyled source={icRight} />
      </ActionIconContainer>
      {border}
    </ListItemContainerStyled>
  )
}

ListItem.DefaultProps = {
  separator: true
}

export default ListItem
