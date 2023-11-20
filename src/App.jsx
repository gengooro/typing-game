import "./App.css";

const App = () => {
  const handleColor = (color) => {
    const output = document.getElementById("output");
    output.style.backgroundColor = color;
  };

  return (
    <div className="main d-flex flex-column align-items-center bg-black vh-100 vw-100 text-white">
      <div className="box mt-3 h-50 d-flex flex-column gap-3  align-items-center py-3">
        <h3 id="heading">Type your color</h3>
        <div id="output" className="output w-100"></div>
        <input
          placeholder="cyan"
          type="text"
          onInput={(e) => handleColor(e.target.value)}
          className="input form-control bg-transparent text-white"
        />
        <h3 className="credits">
          Made by <span className="text-primary ">{"<Shoaib />"}</span>
        </h3>
      </div>
    </div>
  );
};

export default App;
