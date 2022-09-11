function walkMatrix(matrix) {
    const result = [];
    //declaring the boundaries for the traversal
    const rowCount = matrix.length;
    const columnCount = matrix[0].length;
    let startRow = 0;
    let endRow = rowCount - 1;
    let startColumn = 0;
    let endColumn = columnCount - 1;
  
    while (endRow >= startRow && endColumn >= startColumn) {
      //first go from left to right in the first row
      for (let i = startColumn; i <= endColumn; i++) {
        result.push(matrix[startRow][i]);
      }
      startRow++;
  
      //then from top to bottom in the end coloumn
      for (let i = startRow; i <= endRow; i++) {
        result.push(matrix[i][endColumn]);
      }
      endColumn--;
  
      //then from right to left in the end row
      for (let i = endColumn; i >= startColumn; i--) {
        result.push(matrix[endRow][i]);
      }
      endRow--;
  
      //then from top to bottom from in first coloumn
      for (let i = endRow; i >= startRow; i--) {
        result.push(matrix[i][startColumn]);
      }
      startColumn++;
    }
    return result;
  }
  
  let matrix = [
    [0, 1, 2, 3],
    [11, 12, 13, 4],
    [10, 15, 14, 5],
    [9, 8, 7, 6],
  ];
  
  console.log(walkMatrix(matrix));
  
  //time complexity - O(row*coloumn)
  //space complexity - O(1)