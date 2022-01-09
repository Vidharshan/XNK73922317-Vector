export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startId,
    endId,
    auxiliaryArray,
    animations,
  ) {
    if (startId === endId) return;
    const middleId = Math.floor((startId + endId) / 2);
    mergeSortHelper(auxiliaryArray, startId, middleId, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleId + 1, endId, mainArray, animations);
    doMerge(mainArray, startId, middleId, endId, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startId,
    middleId,
    endId,
    auxiliaryArray,
    animations,
  ) {
    let k = startId;
    let i = startId;
    let j = middleId + 1;
    while (i <= middleId && j <= endId) {
      
      animations.push([i, j]);
      
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
 
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
    
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleId) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endId) {
      animations.push([j, j]);
    
      animations.push([j, j]);
  
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
