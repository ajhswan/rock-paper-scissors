import React, { Component } from 'react';
import styled from 'styled-components';

import Timer from './Timer';
import Score from './Score';
import CardWrapper from './CardWrapper';
import CardSlot from './CardSlot';
import SectionHeader from './SectionHeader';



class GameBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timer: {
                minutes: 0,
                seconds: 5
            },
            score: {
                player: 0,
                bot: 0
            },
            header: null
        };

    }



    render() {
        return (
            <MainBoard>
                <Timer timer={this.state.timer} />
                <Score score={this.state.score} />
                <CardWrapper>
                    <CardSlot>
                        <SectionHeader header="Player" />
                    </CardSlot>
                    <CardSlot>
                        <SectionHeader header="Bot" />
                    </CardSlot>
                </CardWrapper>
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

