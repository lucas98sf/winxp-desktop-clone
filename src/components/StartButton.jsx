export const StartButton = () => {
  return (
    <button
      style={{
        background:
          "linear-gradient(270deg, #008d00 10%, rgba(94,219,94,1) 45%)",
        boxShadow: "inset -3px -1px 5px -3px black",
        borderRadius: "0px 12px 12px 0px",
        width: "7vw",
        minWidth: "40px",
        height: "4vh",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        alignContent: "space-around",
        paddingLeft: "0.3vw",
      }}
    >
      <img
        src="/win-logo.png"
        style={{
          height: "3vh",
          marginRight: "0.2vw",
          gridColumn: "span 1",
          filter: "drop-shadow(2px 3px 2px rgb(0,0,0,0.6))",
        }}
      />
      <b
        className="start-button-text"
        style={{
          color: "white",
          fontSize: "2.5vh",
          gridColumn: "span 3",
          textShadow: "1px 2px 3px rgb(0,0,0,0.8)",
          fontFamily: "Verdana",
          fontStyle: "italic",
        }}
      >
        start
      </b>
    </button>
  );
};
