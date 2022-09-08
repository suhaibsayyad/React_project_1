import styled from 'styled-components';

const Footer = ({length}) => {
    return (
        <Wrapper>
            <h2>{length} item's</h2>
        </Wrapper>
    )
}

export default Footer


const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: yellow;
    color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
`