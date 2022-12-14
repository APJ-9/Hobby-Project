import './App.css';
import { SliderData } from './components/SliderData'
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="App">
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default App;
