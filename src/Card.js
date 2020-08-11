import React, { Component } from 'react';
import styled from 'styled-components';

class Card extends Component {
    render() {
        const { selection } = this.props;
        return (
            <StyledWrapper selection={ selection } >
                <img src=""></img>
                <h2>{ selection }</h2>
            </StyledWrapper>
        )
    }
}

export default Card;

const StyledWrapper = styled.div`
color: red;
border: 2px dotted red;
width: 100%;
height: 100%;
text-align: center;
`;