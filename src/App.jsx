import { useEffect, useState } from "react";

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "crimson",
  "deeppink",
  "deepskyblue",
  "gold",
  "lightgrey",
  "pink",
  "orange",
  "mediumturquoise",
  "lemonchiffon",
  "indigo",
];

function App() {
  const [state, setState] = useState({ currentIndexColor: 0 });
  console.log(state);
  console.log(setState);

  // useEffect(() => {
  //   const randomIndex = Math.floor(Math.random() * colors.length);

  //   document.body.style.backgroundColor = colors[randomIndex];
  // }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    setState({ currentIndexColor: randomIndex });
  }, []);

  return (
    <div id="app">
      <h1>{colors[state.currentIndexColor]}</h1>

      <div className="colors">
        {colors.map((color, index) => {
          return (
            <button
              key={`color-${index}`}
              className={index === state.currentIndexColor ? "active" : ""}
              style={{
                backgroundColor: color,
              }}
              onClick={() => {
                document.body.style.backgroundColor = color;
                setState({ currentIndexColor: index });
              }}
            >
              {colors[index]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
