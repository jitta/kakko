import React from 'react'
import { View, Text, TextInput, Animated } from '../../base'
import styled from '../../styled'
import { colors } from '../../styleguide'

// height: 72px;
const ContainerView = styled(View)`
  padding-top: 16px;
  flex-direction: column;
  position: relative;
`

const StyledInput = styled(TextInput)`
  padding: 8px 0;
  border-width: 0px;
  font-size: 16px;
  outline: none;

  width: 100%;
  color: ${({ editable = true }) =>
    editable ? colors.Bluewood : colors.BaliHai}
`

const FloatableLabel = styled(Animated.Text)`
  position: absolute;
  left: 0px;
  margin: 0;
  backgroundColor: transparent;
`

const PlaceholderLabel = styled(Animated.Text)`
  position: absolute;
  left: 0px;
  top: 24px;
  backgroundColor: transparent;
  font-size: 16px;
  color: ${colors.BaliHai}
`

const CaptionText = styled(Text)`
  font-size: 10px;
  margin-top: 8px;
  color: ${colors.BaliHai}
`

export default class FloatingLabel extends React.Component {
  static defaultProps = {
    editable: true,
    placeholder: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      focusAnimation: new Animated.Value(0)
    }
  }

  _handleOnFocus = () => {
    Animated.timing(this.state.focusAnimation, {
      toValue: 1,
      duration: 150
    }).start()
  }

  _handleOnBlur = () => {
    Animated.timing(this.state.focusAnimation, {
      toValue: 0,
      duration: 150
    }).start()
  }

  _handleOnChange = e => {
    // Check if is web event
    if (typeof e.target === 'object') {
      this.props.onChangeText && this.props.onChangeText(e.target.value)
    }
  }

  _handleNativeOnChangeText = text => {
    console.log(text)
    this.props.onChangeText && this.props.onChangeText(text)
  }

  render() {
    // colors for default and focus state for eacg animatable element
    let defaultLabelColor =
      this.props.value === '' ? colors.BaliHai : colors.Bluewood
    let highlightLabelColor = colors.JittaBlue

    let captionLabelColor = colors.BaliHai

    if (this.props.error) {
      defaultLabelColor = colors.Bittersweet
      highlightLabelColor = colors.Bittersweet
      captionLabelColor = colors.Bittersweet
    }

    if (!this.props.editable) {
      defaultLabelColor = colors.Geyser
      highlightLabelColor = colors.BaliHai
      captionLabelColor = colors.BaliHai
    }

    // Position for default and focus state for each label element
    const focusLabelPosition = 0
    const focusLabelSize = 12

    const defaultLabelPosition = this.props.value === '' ? 24 : 0
    const defaultLabelSize = this.props.value === '' ? 16 : 12

    const defaultPlaceholderOpacity = 0
    const focusPlaceholderOpacity = 1

    // Interpolate Value based on focus animated value
    const placeholderOpacity = this.state.focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [defaultPlaceholderOpacity, focusPlaceholderOpacity]
    })
    const labelColor = this.state.focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [defaultLabelColor, highlightLabelColor]
    })
    const borderColor = this.state.focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [defaultLabelColor, highlightLabelColor]
    })
    const labelPositionTop = this.state.focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [defaultLabelPosition, focusLabelPosition]
    })
    const LabelFontSize = this.state.focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [defaultLabelSize, focusLabelSize]
    })

    // Replace TextInput's props with proxy function handle for animation
    const newProps = Object.assign({}, this.props, {
      onChange: this._handleOnChange,
      onChangeText: this._handleNativeOnChangeText,
      onFocus: this._handleOnFocus,
      onBlur: this._handleOnBlur,
      type: this.props.type || 'text',
      underlineColorAndroid: 'transparent',
      placeholder: '' // we replace input placeholder with placeholder label
    })

    return (
      <ContainerView>
        <FloatableLabel
          style={{
            top: labelPositionTop,
            fontSize: LabelFontSize,
            color: labelColor
          }}
        >
          {this.props.label}
        </FloatableLabel>
        <PlaceholderLabel style={{ opacity: placeholderOpacity }}>
          {this.props.value === '' ? this.props.placeholder : ''}
        </PlaceholderLabel>
        <StyledInput {...newProps} />
        <Animated.View
          style={{
            height: 1,
            backgroundColor: borderColor
          }}
        />
        {this.props.caption
          ? <CaptionText style={{ color: captionLabelColor }}>
              {this.props.caption}
            </CaptionText>
          : null}
      </ContainerView>
    )
  }
}