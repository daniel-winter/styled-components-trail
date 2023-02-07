import styled from "styled-components";
import { useThemeProvider } from "./ThemeProvider";

const handleColorType = (variant) => {
  switch (variant) {
    case "secondary":
      return "color: var(--color-primary-default); background-color: var(--color-mist-default);";
    case "tertiary":
      return "color: #fff; background: #f56342;";
    default:
      return "color: var(--color-text, #000); background: var(--color-bg, #eee);";
  }
};

export const StyledButton = styled.button`
  width: ${(props) => (props.block ? "100%" : "50%")};
  font-size: 1em;
  margin: 1em;
  padding: ${(props) => (props.large ? "2rem" : "1rem")};
  ${({ variant }) => handleColorType(variant)};
`;

const Button = ({ children, style: propsStyles, ...rest }) => {
  const {
    generic = {},
    ["Button"]: componentStyles = {},
    [rest["data-style"]]: groupedStyles = {},
  } = useThemeProvider();

  const style = useMemo(
    () => ({
      ...generic,
      ...componentStyles,
      ...groupedStyles,
      ...propsStyles,
    }),
    [generic, componentStyles, groupedStyles, propsStyles]
  );

  return (
    <StyledButton style={style} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
