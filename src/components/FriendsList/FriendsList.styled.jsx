import styled from "styled-components";
export const Friends = styled.ul`
  display: block;

  li{
    display: flex;
    align-items: center;
    padding: 5px 5px;
    outline: 1px solid #a1a1a1;
    border-radius: 12px;
    background-color: #f1f1f9;
  box-shadow: 0px 0px 9px 15px rgba(0,0,0,0.1);


  }
  li+li{
    margin-top: 12px;
  }
  img{
    object-fit: contain;
    outline: 1px solid #a1a1a1;
    border-radius: 10px;
    padding: 10px;

  }
`

export const Indicator = styled.span`
    width: 15px;
    height: 15px;
    display: block;
    border-radius: 50%;
        margin-right: 5px;
        margin-left: 5px;
    background-color: ${(props) => props.isOnline ? 'green' : 'red'}
    // margin-right: 5px;
`
