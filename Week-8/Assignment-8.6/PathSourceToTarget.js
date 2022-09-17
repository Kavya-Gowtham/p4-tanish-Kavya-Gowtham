function AllPathFromSourceToTarget(graph) {
    let result = [];
    let queue = [[0]];
  
    while (queue.length) {
      let updatedQueue = [];
      while (queue.length) {
        let current = queue.shift();
        let parentNodes = [...graph[current[current.length - 1]]];
        while (parentNodes.length) {
          let nextNode = parentNodes.pop();
          let newIteraton = [...current, nextNode];
          if (nextNode == graph.length - 1) {
            result.push(newIteraton);
          } else {
            updatedQueue.push(newIteraton);
          }
        }
      }
      queue = updatedQueue;
    }
    return result;
  }
  let allpath = AllPathFromSourceToTarget([[4,3,1],[3,2,4],[3],[4],[]]);
  console.log(allpath);
  /* [[4,3,1],[3,2,4],[3],[4],[]]Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]] */