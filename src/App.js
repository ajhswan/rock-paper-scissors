import React, { Component } from 'react';
import styled from 'styled-components';

import MainHeader from './MainHeader';
import GameBoard from './GameBoard';

class App extends Component {
  render() {
    return (
      <GameWrapper>
        <MainHeader/>
        <GameBoard/>
      </GameWrapper>
    );
  }
}

export default App;

const GameWrapper = styled.div`
box-sizing: border-box;
font-family: sans-serif;
color: #FFFFFF;
width: 800px;
margin: 0 auto;
position: relative;
`;