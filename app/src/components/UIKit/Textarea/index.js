import React from 'react';
import './_index.scss';

class Textarea extends React.Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.value !== nextProps.value 
    || JSON.stringify(this.props.error) !== JSON.stringify(nextProps.error);
  }

  onChange = (e) => {
    if (this.props._formHandleChange) {
      this.props._formHandleChange(e)
    }

    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }

	render() {
    const { typeTextarea, placeholder, name, error, value } = this.props;
		return (
      <textarea
        name={name}
        // className={`textarea textarea-${typeTextarea}`}
        // className = {error ? "has-error" : ''}
        className = {error ? `has-error textarea textarea-${typeTextarea}` : `textarea textarea-${typeTextarea}`}
        placeholder={placeholder}
        onChange={this.onChange}
        value={value}
        >
      </textarea>
		);
	}
}


Textarea.defaultProps = {
  label: 'Textarea',
  typeButton: 'default',
  value: ''
}

export default Textarea;
