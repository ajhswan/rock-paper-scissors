import React, { Component } from 'react';
import styled from 'styled-components';

class Score extends Component {

    render() {
        const { playerScore, botScore } = this.props;
        return (
            <ScoreWrapper>
                <StyledH1>{ playerScore } : { botScore }</StyledH1>
            </ScoreWrapper>
        )
    }
}

export default Score;

const ScoreWrapper = styled.div `
color: #757575;
font-size: 1.5rem;
margin-block-start: 0;
margin: 0 auto;
width: 250px;
text-align: center;
border-radius: 5px; 
`;

const StyledH1 = styled.h1`
margin-top: 0;
margin-bottom: 0;
`;