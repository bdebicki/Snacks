import React from 'react';
import PropTypes from 'prop-types'
import RadioGroupComponent from '../../../../src/components/Buttons/RadioGroup';
import Radio from '../../../../src/components/Buttons/Radio';

export default function RadioGroup(props) {
  return <RadioGroupComponent {...props} />
}

RadioGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  name: PropTypes.string.isRequired,
  selectedBtn: PropTypes.instanceOf(Radio),
  onChange: PropTypes.func,
  wrapEl: PropTypes.string,
  style: PropTypes.shape({
    wrapEl: PropTypes.object,
  }),
}
