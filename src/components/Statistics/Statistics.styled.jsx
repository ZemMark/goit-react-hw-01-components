import styled from 'styled-components'
export const StatsSection = styled.section`
  height: 300px;
  width: 450px;
  margin: 60 auto;

  display: flex;
  flex-direction: column;
  & ul{
    display: flex;
    list-style: none;
  }
  & li{
    display: flex;
    flex-direction: column;
  }
`