import styled from "styled-components";

// const sideVariant = {
//   top: "margin-top",
//   left: "margin-left",
//   right: "margin-right",
//   bottom: "margin-bottom",
// };

// //translate input values into spacing.js indices
// const getVariant = (side, size, theme) => {
//   const marginSize = theme.spacing[size];
//   return `${sideVariant[side]}:${marginSize}`;
// };

// export const Spacer = styled.div`
//   ${({ side, size, theme }) => getVariant(side, size, theme)}
// `;
// Spacer.defaultProps = { side: "top", size: "sm" };

export const Spacer = styled.span`
  margin-left: 10px;
`;
