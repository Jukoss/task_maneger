import React from 'react';

import './_index.scss';

class Input extends React.Component {

  constructor(props) {
    super(props);
  
  }

	render() {
    const { type, onChange, value, name, placeholder, cssClass, disabled } = this.props;
		return (
      <label className={`input ${cssClass || ''}`}>
        <input 
          required
          type={type}
          onChange={onChange}
          value={value}
          name={name} 
          disabled = {disabled || false}
        />
        <span className={value ? 'is-value' : ''}>{placeholder}</span>
      </label>

        // <label className={`input ${cssClass || ''}`}>
        // <input type="text"/>
        // <span className={value ? 'is-value' : ''}>{placeholder}</span>
        // </label>
		);
	}
}


Input.defaultProps = {
  type: 'text',
  placeholder: 'text',
  value: 'fsdfs',
  disabled: false
}

export default Input;
