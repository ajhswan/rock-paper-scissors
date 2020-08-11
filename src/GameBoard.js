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
import Result from './Result';



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
            botSelection: "Rock",
            result: "",
            gameRunning: false
        };
        
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.updatePlayerSelection = this.updatePlayerSelection.bind(this);
        this.botPick = this.botPick.bind(this);
        this.updateBotSelection = this.updateBotSelection.bind(this);
        this.checkResult = this.checkResult.bind(this);
    }

    startTimer() {
        if(!this.state.gameRunning){
            this.timer = setInterval(() => {
                const { minutes, seconds } = this.state;
                if (seconds > 0) {
                  this.setState({
                      seconds: seconds - 1,
                      gameRunning: true
                  })
                }
                if (seconds === 0 && minutes === 0) {
                      this.updateBotSelection();
                      this.checkResult();
                      this.setState({
                        seconds: 5,
                    })
                }
              }, 1000)
        }

    }

    pauseTimer() {
        clearInterval(this.timer);
        this.setState({
            gameRunning: false
        })

    }

    updatePlayerSelection(arg) {
        this.setState({
            playerSelection: arg
        })
    }

    botPick() {
        const selectionList = ["Rock", "Paper", "Scissors"];
        const randomNumber = Math.floor(Math.random() * 3);
        return selectionList[randomNumber];
    }

    updateBotSelection() {
        const selection = this.botPick();
        console.log(selection);
        this.setState({
            botSelection: selection
        })    
    }

    checkResult() {
        const { playerSelection, botSelection, botScore, playerScore } = this.state;
        if (playerSelection === botSelection) {
            this.setState({
                result: "Draw"
            })
        }
        if (playerSelection === "Rock") {
            if (botSelection === "Paper") {
                this.setState({
                result: "Lose",
                botScore: botScore + 1
                })
            } else if(botSelection === "Scissors") {
                this.setState({
                    result: "Win",
                    playerScore: playerScore + 1
                })
            } 
        }
        
        if (playerSelection === "Paper"){
            if (botSelection === "Scissors") {
                this.setState({
                    result: "Lose",
                    botScore: botScore + 1
                })
            } else if (botSelection === "Rock") {
                this.setState({
                    result: "Win",
                    playerScore: playerScore + 1
                })
            }
        }

        if (playerSelection === "Scissors"){
            if (botSelection === "Rock") {
                this.setState({
                    result: "Lose",
                    botScore: botScore + 1
                })
            } else if (botSelection === "Paper") {
                this.setState({
                    result: "Win",
                    playerScore: playerScore + 1
                })
            }
        }
    }

    render() {
        return (
            <MainBoard>
                <Result result={this.state.result}/>
                <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
                <SectionHeader header="Score" />
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
                    <SelectionButton action={this.updatePlayerSelection} name="Rock" color="red" />
                    <SelectionButton action={this.updatePlayerSelection} name="Paper" color="blue" />
                    <SelectionButton action={this.updatePlayerSelection} name="Scissors" color="yellow" />
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
height: 650px;
padding: 10px;
overflow: auto;
border-radius: 5px;
margin: 10px 0 10px 0;
position: relative;
`;
