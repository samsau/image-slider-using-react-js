import "./App.css";
import { ImageSlider } from "./components/image-slider/image-slider";

function App() {
	return (
		<div className="App">
			<ImageSlider
				url={"https://picsum.photos/v2/list"}
				page={"1"}
				limit={"5"}
			/>
		</div>
	);
}

export default App;
