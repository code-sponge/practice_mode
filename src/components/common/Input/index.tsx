import styled from "styled-components";

interface PropsInput01 {
  width?: string;
  height?: string;
  borderRadius?: string;
  color?: string;
  onChange?: () => void;
  fontSize?: string;
  placeholder?: string;
  padding?: string;
  margin?: string;
  focusRef?: any;
}

const CommonInput01 = styled.input<PropsInput01>`
  width: ${(props: PropsInput01) => props.width};
  height: ${(props: PropsInput01) => props.height};
  color: ${(props: PropsInput01) => props.color};
  font-size: ${(props: PropsInput01) => props.fontSize};
  padding: ${(props: PropsInput01) => props.padding};
  margin: ${(props: PropsInput01) => props.margin};
`;

export default function Input01(props: PropsInput01) {
  return (
    <>
      <CommonInput01
        width={props.width}
        height={props.height}
        color={props.color}
        fontSize={props.fontSize}
        placeholder={props.placeholder}
      />
    </>
  );
}
