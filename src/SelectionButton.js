import React, { Component } from 'react';
import styled from 'styled-components';

class SelectionButton extends Component {
    
    handleClick = () => {
        this.props.action(this.props.name);
    }

    render() {
        return(
            <React.Fragment>
                <StyledButton color={this.props.color} onClick={this.handleClick}>{this.props.name}</StyledButton>
            </React.Fragment>
        )
    }
}

export default SelectionButton;

const handleColorType = color => {
    switch (color) {
      case "red":
        return "#d43d1a";
      case "blue":
        return "#3b6aa0";
      default:
        return "#faa507";
    }
  };

const StyledButton = styled.button`
height: 40px;
width: 120px;
border: none;
border-radius: 7px;
margin: 0 50px 10px 50px;
color: #fff;
background-color: ${({ color }) => handleColorType(color)};
outline: none;
cursor: pointer;
box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.31);
&:active {
    box-shadow: inset 0px 0px 5px #c1c1c1;
}
`