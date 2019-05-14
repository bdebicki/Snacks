import React from 'react';
import ButtonComponent from '../../../../src/components/Buttons/Button';
// import {themePropTypes} from 'styles/themer/utils';
import PropTypes from 'prop-types'

export default function Button(props) {
  return <ButtonComponent {...props} />
}

Button.propTypes = {
  /** Size of the button. */
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),

  /** Snacks button variants. */
  snacksStyle: PropTypes.oneOf(['primary', 'secondary', 'flat', 'coupon']),

  /** Optional style overrides. */
  style: PropTypes.object,

  /** Whether or not the button is disabled. */
  disabled: PropTypes.bool,

  /** Sets the HTML type attribute on the element. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /**
   An optional icon. Can be a an icon name
   or a Snacks `Icon` component.
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Where the icon is positioned relative to primary text content. */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /** Callback that fires when the button is clicked. */
  onClick: PropTypes.func,

  /** Callback that fires on mouse down. */
  onMouseDown: PropTypes.func,

  /** Reverses colors. Use for rendering buttons on dark backgrounds. */
  inverted: PropTypes.bool,

  /** Sets the HTML `tabindex` attribute. */
  tabIndex: PropTypes.number,

  /**
   If href is provided, `Button` will render as an anchor
   tag with the supplied href value.
   */
  href: PropTypes.string,

  /** Text content for the button. */
  children: PropTypes.node,

  /** Any additonal props to add to the element (e.g. data attributes). */
  elementAttributes: PropTypes.object,

  /** Snacks theme attributes provided by `Themer` */
  // snacksTheme: themePropTypes,
}
