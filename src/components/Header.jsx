import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = ({ handleToggleButton, darkmodeTrue }) => {
  return (
    <div className="header">
      <h1>Notes</h1>

      <button
        className="save"
        onClick={() =>
          handleToggleButton((previousDarkMode) => !previousDarkMode)
        }
      >
        {darkmodeTrue ? (
          <MdLightMode size="20px" />
        ) : (
          <MdDarkMode size="20px" />
        )}
      </button>
    </div>
  );
};
export default Header;
