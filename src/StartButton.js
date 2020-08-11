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
width: 150px;
margin: 0 100px 0 100px;
`