import React, { useState } from "react";
import styled from "styled-components";

const CellInput = styled.input`
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  text-overflow: ellipsis;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const CellSelect = styled.datalist`
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  text-overflow: ellipsis;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const cities = [
  "",
  "coral springs",
  "coconut creek",
  "parkland",
  "margate",
  "tamarac",
  "boca raton",
  "deerfield beach",
  "hillsboro beach",
  "lighthouse point",
  "pompano beach",
  "north lauderdale",
  "lauderdale lakes",
  "lauderhill",
  "fort lauderdale",
  "wilton manors",
  "lauderdale by the sea",
  "sea ranch lakes",
  "oakland park",
  "weston",
  "plantation",
  "davie",
  "cooper city",
  "sunrise",
  "southwest ranches",
  "pembroke pines",
  "miramar",
];

export const EditableText = ({ value }) => {
  return <CellInput defaultValue={value || ""} />;
};

export const EditableSelect = ({ value }) => {
  return (
    <>
      <CellInput defaultValue={value || ""} list="cities" />
      <CellSelect id="cities">
        {cities.map((city) => {
          return <option value={city}>{city}</option>;
        })}
      </CellSelect>
    </>
  );
};
