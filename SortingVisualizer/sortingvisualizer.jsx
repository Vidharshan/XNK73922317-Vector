import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithm/mergesort.js';
import './sortingvisualizer.css';

// Change this value for the speed of the animations.
const SPEED = 0.5;

// Change this value for the number of bars (value) in the array.
const ARRAY_BARS = 250;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
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
    for (let i = 0; i < ARRAY_BARS; i++) {
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
        }, i * SPEED);
      } 
      else {
        setTimeout(() => {
          const [barOneId, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneId].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * SPEED);
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
        {array.map((value, id) => (
          <div
            className="array-bar"
            key={id}
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
