import React from 'react';
import PropTypes from 'prop-types'
import CircleButtonComponent from '../../../../src/components/Buttons/CircleButton';
// import {themePropTypes} from 'styles/themer/utils';

export default function CircleButton(props) {
  return <CircleButtonComponent {...props} />
}

CircleButton.propTypes = {
  /** Label to be used by screen readers */
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  /** Bool to disable click/touch listeners */
  disabled: PropTypes.bool,
  /** Callback function called after button click */
  onClick: PropTypes.func,
  /** snacks theme attributes */
  // snacksTheme: themePropTypes,
  /** Optional style overrides */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}
