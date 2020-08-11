import React, { Component } from 'react';
import styled from 'styled-components';

class PauseButton extends Component {
    
    handleClick = () => {
        this.props.pause();
    }
    
    render() {
        return (
            <React.Fragment>
                <StyledButton onClick={this.handleClick}>{this.props.name}</StyledButton>
            </React.Fragment>
        )
    }
}

export default PauseButton;

const StyledButton = styled.button`
height: 50px;
width: 150px;
border: none;
border-raduis: 2px;
margin: 0 100px 0 100px;
cursor: pointer;
background-color:#DC143C;
color: #fff;
box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.31);
outline: none;
&:active {
    box-shadow: inset 0px 0px 5px #c1c1c1;
}
`