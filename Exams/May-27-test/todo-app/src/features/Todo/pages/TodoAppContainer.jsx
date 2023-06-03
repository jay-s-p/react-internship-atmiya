

const TodoContainer = ({children}) => {
  return (
    <>
    <div style={{ display: "grid", padding:"0 1em" }}>
      <div style={{ border: "2px solid #0000", margin: "3em auto 2em auto", width: "100%", maxWidth:"70em" }}>
        {children}
      </div>
    </div>
    </>
  );
};

export default TodoContainer;