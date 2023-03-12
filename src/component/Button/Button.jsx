import PropTypes from 'prop-types';

import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/utils';

// import { getColor } from '@/theme/utils';
// import { useTheme } from '@/theme/ThemeContext';

import classes from './Button.module.css';

function getClassName(isSecondary, disabled) {
  let buttonStyle = {};

  if (!disabled) {
    buttonStyle = {
      backgroundColor: !isSecondary
        ? getColor('primary/400')
        : getColor('white'),
      color: !isSecondary ? getColor('white') : getColor('primary/400'),
    };
  } else {
    buttonStyle = {
      backgroundColor: !isSecondary
        ? getColor('primary/50')
        : getColor('gray/50'),
      color: !isSecondary ? getColor('primary/400') : getColor('gray/300'),
    };
  }

  return buttonStyle;
}

export function Button({ secondary: isSecondary, disabled, ...restProps }) {
  const theme = useTheme();
  console.log('theme', theme);

  return (
    <button
      className={classes.Button}
      disabled={disabled}
      style={getClassName(isSecondary, disabled)}
      type="button"
      {...restProps}
    />
  );
}

Button.defaultProps = {
  secondary: false,
  disabled: false,
};

Button.propTypes = {
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
};
