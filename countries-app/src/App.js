import "./App.css";
import { Navbar } from "./components/Navbar";
import { CardList } from "./components/CardList";
import React, { useState, useEffect } from "react";
import { Button, TextField, InputAdornment } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const App = () => {
  const [counterList, setCounterList] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [origin, setOrigin] = React.useState("All");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    setCounterList(json);
    setfilterData(json);
  };
  const setDarkModeOnLocalStorage = () => {
    setIsDarkMode(
      JSON.parse(window.localStorage.getItem("darkMode") || "false")
    );
  };

  useEffect(() => {
    setDarkModeOnLocalStorage();
    getData("https://restcountries.com/v3.1/all");
  }, []);

  const styles = {
    app:{
      backgroundColor: isDarkMode ? "black": "whitesmoke"
    },
    container: {
      margin: "0px 50px",
    },
    seacrh_Filter: {
      display: "flex",
      justifyContent: "space-between",
      margin: "40px 20px 10px 20px",
    }
  };

  const handleOnSearch = (val) => {
    const newCounterList = counterList.filter(contry => contry.region === origin).filter((country) => {
      if (country.name.common.toLowerCase().includes(val.toLowerCase())) {
        return country;
      }
    });
    setfilterData(newCounterList);
    if (val.length === 0) {
      setfilterData(counterList.filter(contry => contry.region === origin));
    }
  };

  const handleOnSearchOrigin = (val) => {
    if (val === "All") setfilterData(counterList);
    else {
      const newCounterList = counterList.filter((country) => {
        if (country.region.toLowerCase().includes(val.toLowerCase())) {
          return country;
        }
      });
      setfilterData(newCounterList);
    }
  };

  return (
    <div style={styles.app}>
      <Navbar isDarkMode={isDarkMode} handleOnChangeDarkMode={setIsDarkMode} />
      <div style={styles.container}>
        <div style={styles.seacrh_Filter}>
          <TextField
            placeholder="search for a country..."
            sx={{
              backgroundColor: "white",
              width: 350
            }}
            id="serach-text"
            onChange={(e) => handleOnSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />

          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              width: 200,
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "white"
              },
              ".css-9tj150-MuiButton-endIcon": {
                marginLeft: 5
              }
            }}
            onClick={handleClick}
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
          >
            Filter By Region
          </Button>
          <Menu
            sx={{
              ".MuiMenu-list": {
                width: 200
              },
              ".MuiMenu-paper": {
                marginTop: 1
              }
            }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button"
            }}
          >
            {["All", "Africa", "Europe", "Asia", "Americas"].map((origin) => {
              return (
                <MenuItem
                  key={origin}
                  onClick={() => {
                    handleClose();
                    setOrigin(origin)
                    handleOnSearchOrigin(origin)
                  }}
                >
                  {origin}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
        <CardList isDarkMode={isDarkMode} list={filterData} />
      </div>
    </div>
  );
};

export default App;
