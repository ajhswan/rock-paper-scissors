import React, { Component } from 'react';
import styled from 'styled-components';

import Timer from './Timer';
import Score from './Score';
import FlexWrapper from './FlexWrapper';
import CardSlot from './CardSlot';
import SectionHeader from './SectionHeader';
import SelectionButton from './SelectionButton';
import StartButton from './StartButton';
import PauseButton from './PauseButton';
import Card from './Card';



class GameBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            minutes: 0,
            seconds: 5,
            playerScore: 0,
            botScore: 0,
            header: null,
            playerSelection: "Rock",
            botSelection: "Rock"
        };
        
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.updatePlayerSelection = this.updatePlayerSelection.bind(this);
    }

    startTimer() {
        this.timer = setInterval(() => {
            const { minutes, seconds } = this.state;
            if (seconds > 0) {
              this.setState({
                  seconds: seconds - 1
              })
            }
            if (seconds === 0) {
              if (minutes === 0) {
                this.setState({
                    seconds: 5
                })
              }
            }
          }, 1000)
    }

    pauseTimer() {
        clearInterval(this.timer);
    }

    updatePlayerSelection(arg) {

        this.setState({
            playerSelection: arg
        })
    }
    render() {
        return (
            <MainBoard>
                <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
                <Score playerScore={this.state.playerScore} botScore={this.state.botScore} />
                <FlexWrapper>
                    <CardSlot>
                        <SectionHeader header="Player" />
                        <Card selection={this.state.playerSelection} />
                    </CardSlot>
                    <CardSlot>
                        <SectionHeader header="Bot" />
                        <Card selection={this.state.botSelection}/>
                    </CardSlot>
                </FlexWrapper>
                <FlexWrapper>
                    <SelectionButton action={this.updatePlayerSelection} name="Rock" />
                    <SelectionButton action={this.updatePlayerSelection} name="Paper" />
                    <SelectionButton action={this.updatePlayerSelection} name="Scissors" />
                </FlexWrapper>
                <FlexWrapper>
                    <StartButton name="Start Game" start={this.startTimer}/>
                    <PauseButton name="Pause Game" pause={this.pauseTimer} />
                </FlexWrapper>

            </MainBoard>
        )
    }
}

export default GameBoard;

const MainBoard = styled.div`
background-color: #DBDBD;
border: 2px dotted red;
height: 600px;
padding: 10px;
overflow: auto;
border-radius: 5px;
margin: 10px 0 10px 0;
position: relative;
`;
