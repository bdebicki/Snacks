import React from 'react';
import PropTypes from 'prop-types'
import CheckboxComponent from '../../../../src/components/Buttons/Checkbox';

export default function Checkbox(props) {
  return <CheckboxComponent {...props} />
}

Checkbox.propTypes = {
  aria: PropTypes.shape({
    label: PropTypes.string,
  }),
  children: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  style: PropTypes.shape({
    button: PropTypes.object,
    label: PropTypes.object,
    wrapEl: PropTypes.object,
  }),
  value: PropTypes.string,
  wrapEl: PropTypes.string,
}
