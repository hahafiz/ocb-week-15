// function Title() {
//   return <h1>Title Component</h1>;
// }

const Title = (props) => {
  // const name = "Qamarul Hafiz";
  // const role = "Frontend Developer";
  props.meow?.();

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem 2rem",
        borderRadius: "1rem",
        backgroundColor: "burlywood",
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: 40 }}>{props.name}</p>
      <p>{props.role}</p>
      {props.isManager && <p style={{ color: "green" }}>Manager</p>}
    </div>
  );
};

export default Title;
