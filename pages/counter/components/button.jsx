import styled from 'styled-components';

const Button = styled.button`
  padding: 8px;
  color: white;
  background: ${(props) => (props.color ? props.color : 'orange')};
  border-bottom: solid 2px #d27d00;
  border-radius: 4px;
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
  &:active {
    border-bottom: solid 2px #fd9535;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    opacity: 0.7;
  }
`;

export default (props) => {
  return <Button {...props} />;
};
