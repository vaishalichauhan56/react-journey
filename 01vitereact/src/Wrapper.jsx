function Wrapper({children}) {
  return (
    <div style={{ color: "green", border: "2px solid green", width: "300px" }}>
        {children}
    </div>
  );
}

export default Wrapper;
