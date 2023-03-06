import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #f5f5f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 10px 15px 15px rgba(0,0,0,0.1);
  border-radius: 12px;

  & img{
    object-fit: contain;
    width: 90px;

  }
`

export const Stats = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 70px;
  background-color: rgb(229 230 237);
  border: 1px solid #212121;
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
  

  }



  }
`
export const Description = styled.div`
  & p{
    font-size: 12px
  }
`