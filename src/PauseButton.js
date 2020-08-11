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
margin: 0 100px 0 100px;
`