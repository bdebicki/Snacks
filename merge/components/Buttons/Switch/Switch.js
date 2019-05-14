import React from 'react';
import PropTypes from 'prop-types'
import SwitchComponent from '../../../../src/components/Buttons/Switch';

export default function Switch(props) {
  return <SwitchComponent {...props} />
}

Switch.propTypes = {
  aria: PropTypes.shape({
    label: PropTypes.string,
  }),
  children: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.shape({
    button: PropTypes.object,
    label: PropTypes.object,
    wrapEl: PropTypes.object,
  }),
  value: PropTypes.string,
  wrapEl: PropTypes.string,
  displayOnOffLabel: PropTypes.bool,
}
