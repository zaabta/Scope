export const Card = ({ capital, countryName, flagImg, popultion, region }) => {
  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      width: 250,
      height: 350,
      border: "none",
      borderRadius: 15,
      background: "white",
    },
    img: {
      width: "100%",
      height: "50%",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    des: {
      padding: "0 20px 20px 20px"
    },
    desKey: {
      fontWeight: "bolder"
    }
  };
  return (
    <div style={styles.card}>
      <img style={styles.img} src={flagImg} />
      <div style={styles.des}>
        <h3>{countryName}</h3>
        <p>
          <label style={styles.desKey}>Popultion:</label> {popultion}
        </p>
        <p>
          <label style={styles.desKey}>Region:</label> {region}
        </p>
        <p>
          <label style={styles.desKey}>Capital:</label> {capital}
        </p>
      </div>
    </div>
  );
};
