import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

export const Navbar = ({isDarkMode, handleOnChangeDarkMode}) => {
    // hook to rerender page
  // styles obj => class
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: isDarkMode ? "black" : "white",  // if (isDarkMode == ture) return black ..........
      color: isDarkMode ? "white" : "black",
      borderBottom: "solid 1px whitesmoke"
    },
    header: {
      marginLeft: 20,
    },
    drakMode: {
      marginRight: 20,
      display: "flex",
      alignItems: "center",
      gap: 15
    },
    drakModeIcon: {
      width: 40,
      height: 25,
      cursor: "pointer"
    }
  };
  return (
    <div style={{ ...styles.navbar, textTransform: "capitalize" }}>
      <h1 style={styles.header}>where in the world ?</h1>
      <div style={styles.drakMode}>
        {isDarkMode ? (
          <BsSun onClick={()=> {
            handleOnChangeDarkMode(!isDarkMode)
            window.localStorage.setItem("darkMode", !isDarkMode)
          }} style={styles.drakModeIcon} />
        ) : (
          <MdOutlineDarkMode onClick={()=> {
            handleOnChangeDarkMode(!isDarkMode)
            window.localStorage.setItem("darkMode", !isDarkMode)
          }} style={styles.drakModeIcon} />
        )}

        <label>{isDarkMode ? "light mode": "dark  mode"}</label>
      </div>
    </div>
  );
};
