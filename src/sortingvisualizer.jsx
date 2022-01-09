import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithm/mergesort.js';
import './sortingvisualizer.css';

const ANIMATION_SPEED_MS = 0.5;

const NUMBER_OF_ARRAY_BARS = 250;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    this.setState({array});
  }

  mergeSort() {
    
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneId, barTwoId] = animations[i];
        const barOneStyle = arrayBars[barOneId].style;
        const barTwoStyle = arrayBars[barTwoId].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } 
      else {
        setTimeout(() => {
          const [barOneId, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneId].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
      //arrayBars[0].style.backgroundColor= 'purple';
      if(i==animations.length-1)
        {for(let i=0;i<arrayBars.length;i++)arrayBars[i].style.backgroundColor= 'purple';}
    }
  }

  quickSort() {
    
  }

  selectionSort() {
    
  }

  bubbleSort() {

  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, Id) => (
          <div
            className="array-bar"
            key={Id}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <button onClick={() => this.resetArray()}>Generate New Array</button>   
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.bubbleSort()}>Quick Sort</button>
        <button onClick={() => this.selectionSort()}>Heap Sort</button>
        <button onClick={() => this.quickSort()}>Bubble Sort</button>
      </div>
    );
  }
}


function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
