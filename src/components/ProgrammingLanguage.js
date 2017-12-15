import React from 'react';

const ProgrammingLanguage = props => {
  switch (props.lang) {
    case 'HTML':
      return <span><i className="fab fa-html5"></i> {props.lang}</span>
    case 'JavaScript':
      return <span><i className="fab fa-js"></i> {props.lang}</span>
    case 'Python':
      return <span><i className="fab fa-python"></i> {props.lang}</span>
    case 'C#':
      return <span><i className="fab fa-windows"></i> {props.lang}</span>

    default:
      return '';
  }
}

export default ProgrammingLanguage;