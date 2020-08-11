import React, { Component } from 'react';
import styled from 'styled-components';

class GameBoard extends Component {
    render() {
        return (
            <MainBoard>
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
