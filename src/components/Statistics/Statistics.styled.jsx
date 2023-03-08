import styled from 'styled-components'
export const StatsSection = styled.section`
  height: 260px;
  width: 450px;
  margin: 70px auto;
  border: 1px solid violet;

  display: flex;
  flex-direction: column;
  & ul{
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
    list-style: none;
    position: relative;
    &:before{
      content: '';
      width: 100%;
      height: 1px;
      background-color: violet;
      position: absolute;
    }
  }
  & li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    &:not(:last-child):before{
      content: '';
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background-color: red;
      position: absolute;
    }
  }
`