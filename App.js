import logo from './logo.svg';
import SortingVisualizer from './SortingVisualizer/sortingvisualizer.jsx';
import './App.css';
import { render } from '@testing-library/react';


function App() {
render()
  function Sorting() {
        render(
          <SortingVisualizer></SortingVisualizer> 
        );  
  }
  return (
    <div className="App">
      <button onClick={Sorting}>Visualise Sorting</button>
      <button onClick={Sorting}>Visualise Pathfinding</button>
      <button onClick={Sorting}>Go to student Forum</button>
      
    </div>
    
  );
}

export default App;
