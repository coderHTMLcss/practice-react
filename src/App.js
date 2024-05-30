import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import Slider from "./components/Image-Slider/Slider";
import LoadMoreData from "./components/Load-more-data/Load-more-data";
import LigthDarkMode from "./components/Ligth-dark-mode/Liigth-dark-mode";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <Slider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"} /> */}
      {/* <LoadMoreData /> */}
      <LigthDarkMode />
    </div>
  );
}

export default App;
