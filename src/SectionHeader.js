import React, { Component } from 'react';
import styled from 'styled-components'; 

class SectionHeader extends Component {

    render() {
        const { header } = this.props;

        return (
            <HeaderWrapper>
                <StyledH3>{ header }</StyledH3>
            </HeaderWrapper>          
        )
    }
}

export default SectionHeader;

const HeaderWrapper = styled.div`
text-align: center;
color: #212121;
margin: 0 auto;
`
const StyledH3 = styled.h3`
margin-top: 5px;
margin-bottom: 0;
`;