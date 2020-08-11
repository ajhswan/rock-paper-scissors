import React, { Component } from 'react';
import styled from 'styled-components';

class GameButton extends Component {
    render() {
        return (
            <React.Fragment>
                <StyledButton>{this.props.name}</StyledButton>
            </React.Fragment>
        )
    }
}

export default GameButton;

const StyledButton = styled.button`
height: 50px;
width: 150px;
margin: 0 100px 0 100px;
`