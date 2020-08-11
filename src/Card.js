import React, { Component } from 'react';
import styled from 'styled-components';

class Card extends Component {
    render() {
        const { selection } = this.props;
        return (
            <StyledWrapper>
                <h2>{ selection }</h2>
            </StyledWrapper>
        )
    }
}

export default Card;

const StyledWrapper = styled.div`
color: red;
`