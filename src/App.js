import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import SliderScreen from './components/SliderScreen/SliderScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <SliderScreen></SliderScreen>
    </div>
    </BrowserRouter>
  );
}

export default App;
