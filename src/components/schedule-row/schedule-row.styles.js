import styled from "styled-components";

export const Row = styled.ul`
  width: 100%;
  display: table;
  table-layout: fixed;
  border-collapse: collapse;
  margin: 0;
  &:not(:last-child) {
    border-width: 0 0 2px 0px;
    border-style: solid;
  }
`;

export const Column = styled.li`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-right: 2px solid gray;
`;

export const Header = styled.ul`
  width: 100%;
  display: table;
  table-layout: fixed;
  border-collapse: collapse;
  margin: 0;
  background-color: gray;
  color: white;
`;
