export const Taskbar = ({ children }) => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #8eb6d9 0%, #0062ea 20%)",
        boxShadow: "inset 0px -1px 3px #081bcb",
        top: "96vh",
        display: "block",
        width: "100%",
        height: "4.1vh",
        position: "absolute",
      }}
    >
      {children}
    </div>
  );
};
