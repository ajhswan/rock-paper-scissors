import React, { Component } from 'react';
import styled from 'styled-components';

class StartButton extends Component {
    
    handleClick = () => {
        this.props.start();
    }
    render() {
        return (
            <React.Fragment>
                <StyledButton onClick={this.handleClick}>{this.props.name}</StyledButton>
            </React.Fragment>
        )
    }
}

export default StartButton;

const StyledButton = styled.button`
height: 50px;
border: none;
width: 150px;
margin: 0 100px 10px 100px;
cursor: pointer;
background-color:#3CB371;
color: #fff;
box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.31);
outline: none;
&:active {
    box-shadow: inset 0px 0px 5px #c1c1c1;
}
`