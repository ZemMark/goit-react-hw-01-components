import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #f6f6f6;
  display: flex;
  justify-content: flex-end;
    flex-direction: column;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0px 0px 9px 15px rgba(0,0,0,0.1);

  & img{
    object-fit: contain;
    width: 100px;

  }
`

export const Stats = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 70px;
  background-color:#a6a6a6;
  border: 1px solid #9a9a9a;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;


  span{
    font-size: 12px
  }
  li{
  display: flex;
      align-items: center;
    justify-content: center;
  flex-direction: column;
  position: relative;
  
  &:not(:last-child):before{
      content: '';
      width: 1px; 
      height: 100%;
      background-color: #9a9a9a;
      position: absolute;
      right: 0; /* Position the line on the right side */
    }
  }

  
`
export const Description = styled.div`
      padding: 35px;

  & p{
    font-size: 12px;
    text-align: center;
  }
`
export const UserName = styled.p`
  fonst-size: 14px;
  font-weight: 900;
`