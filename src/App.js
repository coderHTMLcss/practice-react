import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import Slider from "./components/Image-Slider/Slider";
import LoadMoreData from "./components/Load-more-data/Load-more-data";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <Slider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"} /> */}
      <LoadMoreData />
    </div>
  );
}

export default App;
