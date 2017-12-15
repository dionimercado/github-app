import React from 'react';

const ProgrammingLanguage = props => {
  switch (props.lang) {
    case 'HTML':
      return <p><i className="fab fa-html5"></i> {props.lang}</p>
    case 'JavaScript':
      return <p><i className="fab fa-js"></i> {props.lang}</p>
    case 'Python':
      return <p><i className="fab fa-python"></i> {props.lang}</p>
    case 'C#':
      return <p><i className="fab fa-windows"></i> {props.lang}</p>

    default:
      return '';
  }
}

export default ProgrammingLanguage;