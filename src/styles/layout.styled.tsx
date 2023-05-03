import styled, { css } from "styled-components";
import { device } from "./deviceMediaQuerys.styled";

export const gridTemplateColumns1 = css`
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      10,
      [col-start] minmax(9rem, 13rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  ${device.betweenPcAndTabPort2} {
    grid-template-columns:
      [full-start] minmax(6rem, 1fr) [center-start] repeat(
        10,
        [col-start] minmax(min-content, 13rem) [col-end]
      )
      [center-end] minmax(6rem, 1fr) [full-end];
  }

  ${device.tabPort} {
    grid-template-columns:
      [full-start] minmax(10px, 1fr) [center-start] repeat(
        4,
        [col-start] minmax(min-content, 20rem) [col-end]
      )
      [center-end] minmax(10px, 1fr) [full-end];
  }

  ${device.phone} {
    grid-template-columns: [full-start] minmax(5px, 1fr) [center-start] repeat(
        4,
        [col-start] minmax(4rem, 14rem) [col-end]
      ) [center-end] minmax(5px, 1fr) [full-end];
  }
`;

export const ContainerGrid = styled.div`
  display: grid;
  ${gridTemplateColumns1}
  grid-template-rows: min-content;
  padding-bottom: 2rem;
`;

export const BoxContainer = styled.div`
  grid-column: center-start / center-end;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(10rem, 1fr);
  justify-items: center;
  align-items: center;
  padding: 2rem 1rem;

  ${device.tabPort} {
    padding: 2rem 0;
  }
  ${device.phone} {
    padding: 8px 0 2rem 0;
  }
`;
