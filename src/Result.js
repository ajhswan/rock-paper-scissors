import React, { Component }from 'react';
import styled from 'styled-components';

class Result extends Component {
    render() {
        return (
            <ResultWrapper>
                <h3>{this.props.result}</h3>
            </ResultWrapper>
        )
    }
}

export default Result;

const ResultWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: #757575;
`;