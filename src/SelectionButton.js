import React, { Component } from 'react';
import styled from 'styled-components';

class SelectionButton extends Component {

    render() {
        return(
            <React.Fragment>
                <StyledButton>{this.props.name}</StyledButton>
            </React.Fragment>
        )
    }
}

export default SelectionButton;

const StyledButton = styled.button`
height: 30px;
width: 90px;
margin: 0 100px 0 100px;
`