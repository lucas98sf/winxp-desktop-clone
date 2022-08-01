export const Desktop = ({ children }) => {
  return (
    <div
      style={{
        background: "url(/background.jpg)",
        width: "100vw",
        minWidth: "100vw",
        minHeight: "96vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      {children}
    </div>
  );
};
