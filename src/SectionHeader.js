import React, { Component } from 'react';
import styled from 'styled-components'; 

class SectionHeader extends Component {

    render() {
        const { header } = this.props;

        return (
            <HeaderWrapper>
                <h3>{ header }</h3>
            </HeaderWrapper>          
        )
    }
}

export default SectionHeader;

const HeaderWrapper = styled.div`
color: #212121;
margin: 0 auto;
`