import React, { Component } from 'react';
import styled from 'styled-components';
import Rock from './img/rock.jpg';
import Paper from './img/paper.jpg';
import Scissors from './img/scissors.jpg';

class Card extends Component {
    render() {
        const { selection } = this.props;
        return (
            <StyledWrapper background={selection}>
            </StyledWrapper>
        )
    }
}

export default Card;

const handleBackground = background => {
    switch (background) {
      case "Rock":
        return `${Rock}`;
      case "Paper":
        return `${Paper}`;
      default:
        return `${Scissors}`;
    }
};

const StyledWrapper = styled.div`
color: #fff;
margin-top: 2px;
{({ color }) => handleColorType(color)}
background-image: url(${({ background }) => handleBackground(background) });
background-size: contain;
background-repeat: no-repeat;
backgroun-position: center center;
width: 100%;
height: 100%;
text-align: center;
`;
