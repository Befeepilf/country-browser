import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import 'styles/selector.scss';

export default function Selector(props) {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState();

  return(
    <div class={'selector' + (showDropdown ? ' active' : '')} onClick={() => setShowDropdown(!showDropdown)}>
      <div class={'placeholder bg-element' + (selectedOption ? '' : ' active')}>{props.placeholder}</div>
      <div class="dropdown">{
        props.options.map((option, index) => (
          <div
            key={option}
            class={'option bg-element ' + (option === selectedOption ? ' selected' : '')}
            style={{'--index': index}}
            onClick={event => {
              event.stopPropagation();
              if(option === selectedOption) {
                setShowDropdown(!showDropdown);
              }
              else {
                setSelectedOption(option);
                setShowDropdown(false);
                props.onChange(option);
              }
            }}
          >{option}</div>
        ))
      }</div>
      <KeyboardArrowDownIcon/>
    </div>
  );
}
