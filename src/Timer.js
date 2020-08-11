import React, { Component } from 'react';
import styled from 'styled-components';

class Timer extends Component {


    render() {
        const { minutes, seconds } = this.props.timer;
        return (
            <TimerWrapper>
                <h2>Next turn in: { minutes }:{ seconds < 10 ? `0${ seconds }` : seconds }</h2>
            </TimerWrapper>
        )
    }
}

export default Timer;

const TimerWrapper = styled.div `
background-color: #757575;
margin: 0 auto;
padding: 5px 0 5px 0;
width: 250px;
text-align: center;
border-radius: 5px; 
`;