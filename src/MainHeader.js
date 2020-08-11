import React, { Component } from 'react';
import styled from 'styled-components';

class MainHeader extends Component {
    render() {
        return (
            <HeaderWrapper>
                 <Title>Rock Paper Scissors</Title>
            </HeaderWrapper>
        )
    }
}

export default MainHeader;

const HeaderWrapper = styled.div`
background-color: #2196F3;
height: 50px;
margin: 10px 0 10px 0;
text-align: center;
border-radius: 5px;
position: relative;
`;

const Title = styled.h1`
margin: 0;
padding-top: 5px;
`