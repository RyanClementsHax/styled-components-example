import styled from "styled-components";
import { purple, elevation, fixed, serif } from "../utilities";
import logo from "../logo.svg";

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt="logo" className="logo" />
    Hello
  </header>
);

export default styled(Header)`
  background-color: ${purple};
  padding: 10px 5%;
  width: 100%;
  ${serif}
  ${elevation[2]}
  ${fixed()}

  .logo {
    width: 60px;
  }
`;
