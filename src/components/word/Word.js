import { NavLink } from "react-router-dom";

const WordComponent = ({ title, index }) => {
  return (
    <NavLink to={`/word/${index}`}>
      <li>
        <p>{title}</p>
      </li>
    </NavLink>
  );
};

export default WordComponent;
