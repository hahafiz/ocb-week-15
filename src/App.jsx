import Title from "./components/Title";
import Cat from "./components/Cat";

function App() {
  // const stailNama = {
  //   color: "red",
  //   fontSize: 50,
  // };

  // learning debugging jwt for first 15min

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <h1 style={{ fontWeight: 200 }}>React App</h1>
      <p>Hello World</p>
      <Title name="Qamarul Hafiz" role="Frontend Developer" isManager={true} />
      <Title
        name="MeowPanda"
        role="Meowing panda"
        meow={() => console.log("Meowimmapanda!")}
      />
    </div>
  );
}

export default App;
