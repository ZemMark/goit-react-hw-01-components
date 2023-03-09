import styled from "styled-components";
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  }

tr{
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

}

td{

  border: 1px solid #ddd;
  padding: 8px;
}
`