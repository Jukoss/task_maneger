import React from 'react';
import './_index.scss';

class Button extends React.Component {
	render() {
    const { typeButton, onClick, label } = this.props;
		return (
      <button
        className={`button button-${typeButton}`}
        onClick={onClick}
        >
        {label}
      </button>
		);
	}
}

Button.defaultProps = {
  label: 'Button',
  typeButton: 'default'
}

export default Button;
