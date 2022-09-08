import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper>
        <h1>Todo App</h1>
    </Wrapper>
  )
}

export default Header



const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: yellow;
    color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
`