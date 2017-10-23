import React from 'react';
import PropTypes from 'prop-types';
import { View } from '../../../src/base';
import style from './style';

export default function CenterView(props) {
  return <View style={style.main}>{props.children}</View>;
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
