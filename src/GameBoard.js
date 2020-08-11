import React, { Component } from 'react';
import styled from 'styled-components';

import Timer from './Timer';



class GameBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timer: {
                minutes: 0,
                seconds: 5
            }
        };

    }



    render() {
        return (
            <MainBoard>
                <Timer timer={this.state.timer} />
            </MainBoard>
        )
    }
}

export default GameBoard;

const MainBoard = styled.div`
background-color: #DBDBD;
border: 2px dotted red;
height: 500px;
padding: 10px;
overflow: auto;
border-radius: 5px;
margin: 10px 0 10px 0;
position: relative;
`;
