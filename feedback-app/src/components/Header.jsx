import React from 'react';
const Header = (props) => {
  const headerStyles = {
    text: props.text,
    backgroundColor: props.bgColor,
    color: props.textColor,
  }
  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{props.text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text:'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

export default Header;