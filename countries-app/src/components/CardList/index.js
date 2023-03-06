import { Card } from "../Card";

export const CardList = ({list, isDarkMode}) => {
  const styles = {
    cardList: {
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
      gap: 40,
      flexWrap: "wrap",
      padding: "50px 0px",
      backgroundColor: isDarkMode ? "black" : "whitesmoke"
    }
  };
  return (
    <div style={styles.cardList}>
        {
            list.map((country, index) =>{
                return (
                    <Card
                    key={index}
                    countryName={country.name.common}
                    flagImg={country.flags.png}
                    popultion={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                )
            })
        }
    </div>
  );
};
