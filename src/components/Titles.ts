import styled from "styled-components";

//  heading 1
export const H1 = styled.h1<{ color?: string }>`
  color: ${(props) => (!props.color ? "var(--heading_color)" : props.color)};
`;

//  heading 2
export const H2 = styled.h2<{ color?: string }>`
  color: ${(props) => (!props.color ? "var(--heading_color)" : props.color)};
`;

//  heading 3
export const H3 = styled.h3<{ color?: string }>`
  color: ${(props) => (!props.color ? "var(--heading_color)" : props.color)};
`;

//  heading 4
export const H4 = styled.h4<{ color?: string }>`
  color: ${(props) => (!props.color ? "var(--heading_color)" : props.color)};
`;

//  heading 5
export const H5 = styled.h5<{ color?: string }>`
  color: ${(props) => (!props.color ? "var(--heading_color)" : props.color)};
`;

//  heading 6
export const H6 = styled.h6<{ color?: string }>`
  color: ${(props) => (!props.color ? "var(--heading_color)" : props.color)};
`;
