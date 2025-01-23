// function Title() {
//   return <h1>Title Component</h1>;
// }

const Title = () => {
  const name = "Qamarul Hafiz";
  const role = "Frontend Developer";

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem 2rem",
        borderRadius: "1rem",
        backgroundColor: "burlywood",
      }}
    >
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
};

export default Title;
