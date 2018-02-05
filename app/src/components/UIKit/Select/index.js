import React, {Component} from 'react';
import PropTypes from 'prop-types';


import './_index.scss';


class Select extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }


  onChange(e) {
    if (this.props._formHandleChange) {
      this.props._formHandleChange(e)
    }

    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }
  

  getOptions() {
    const {options, valueParam} = this.props;
    switch (valueParam) {
      case 'label':
        return options.map((value, index) => 
          <option key={index} value={value}>{value}</option> // ['option1', 'option2']
        )
        break;
     
    }
  }

	render() {
    const { type, placeholder, options, value, name, cssClass, onChange, valueParam, error } = this.props;
    
		return (
      <label className={`select ${cssClass || ''}`}>
        <select 
          type={type} 
          value={value} 
          name={name} 
          onChange={this.onChange} 
          className = {error && error.message ? "has-error" : ''}
        >
          {this.getOptions()}
        </select>
        
        <span className={value !== '' ? 'is-value' : ''}>
          { placeholder }
        </span>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
          <path d="M1521.22,257.23a0.725,0.725,0,0,1,1.06,0l4.24,4.433a0.814,0.814,0,0,1,0,1.108,0.727,0.727,0,0,1-1.06,0l-4.24-4.433A0.814,0.814,0,0,1,1521.22,257.23Zm4.24,4.433,4.23-4.433a0.725,0.725,0,0,1,1.06,0,0.8,0.8,0,0,1,0,1.108l-4.23,4.433a0.727,0.727,0,0,1-1.06,0A0.8,0.8,0,0,1,1525.46,261.663Z" transform="translate(-1520 -254.016)" fill="#04356C"/>
        </svg>
      </label>
		);
	}
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

Select.defaultProps = {
  type: 'select',
  placeholder: 'text',
  options: ['option1', 'option2'],
  value: '',
  valueParam: 'label'
}

export default Select;
