import ReactDOM from "react-dom";
import Pet from "./Pet";


const App = () => {
  return (
    <div>
      <h1 className="adopt-me-class">Adopt Me </h1>
      <Pet name="Alpha" animal="Dog" breed="a" />
      <Pet name="Bravo" animal="Cat" breed="b" />
      <Pet name="Charlie" animal="Man" breed="c" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
