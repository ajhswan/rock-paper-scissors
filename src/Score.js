import React, { Component } from 'react';
import styled from 'styled-components';

class Score extends Component {

    render() {
        const { player, bot } = this.props.score;
        return (
            <ScoreWrapper>
                <h1>{ player } : { bot }</h1>
            </ScoreWrapper>
        )
    }
}

export default Score;

const ScoreWrapper = styled.div `
color: #757575;
font-size: 1.5rem;
margin: 0 auto;
padding: 5px 0 5px 0;
width: 250px;
text-align: center;
border-radius: 5px; 
`;