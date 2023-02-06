import styled from 'styled-components';

const handleColorType = variant => {
  switch (variant) {
    case "secondary":
      return "color: var(--color-primary-default); background-color: var(--color-mist-default);";
    case "tertiary":
      return "color: #fff; background: #f56342;";
    default:
      return "color: #000; background: #eee;";
  }
};

const Button = styled.button`
  width: ${props => props.block ? "100%" : "50%"};
  font-size: 1em;
  margin: 1em;
  padding: ${props => props.large ? "2rem" : "1rem"};
  ${({ variant }) => handleColorType(variant)};
`;

export default Button;