import styled from "styled-components";

interface PropsButtons01 {
  color?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick?: () => void;
  text?: string;
  fontSize?: string;
  backgroundColor?: string;
  border?: string;
}

const CommonButton01 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: PropsButtons01) => props.color};
  width: ${(props: PropsButtons01) => props.width};
  height: ${(props: PropsButtons01) => props.height};
  border-radius: ${(props: PropsButtons01) => props.borderRadius};
  background-color: ${props => props.backgroundColor}
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: PropsButtons01) => props.color};
  font-size: ${(props: PropsButtons01) => props.fontSize};
`;

export default function Button01(props: PropsButtons01) {
  return (
    <>
      <CommonButton01
        onClick={props.onClick}
        color={props.color}
        width={props.width}
        height={props.height}
        borderRadius={props.borderRadius}
        backgroundColor={props.backgroundColor}
      >
        <Text color={props.color} fontSize={props.fontSize}>
        {props.text}
        </Text>
      </CommonButton01>
    </>
  );
}
