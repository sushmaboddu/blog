import styled from "@emotion/styled";

type ButtonProps = {
  width: string;
  height: string;
  bgColor: string;
};

export default styled.button`
  width: ${(props: ButtonProps) => props.width};
  height: ${(props: ButtonProps) => props.height};

  background: ${(props: ButtonProps) => props.bgColor};
  border-radius: 100px;
  border: none;
  outline: none;
  cursor:pointer;

  &:hover {
    background-color: #0078D7;
  }

  font-family: Nunito;
  font-size: 20px;
  font-weight: 500;
  line-height: 50px;
  color: white;
  text-align:center;
`;

