let V;
let adj;

function Graph(v) {
  V = v;
  adj = new Array(v);
  for (let i = 0; i < v; ++i) {
    adj[i] = [];
  }
}

function addEdge(v, w) {
  adj[v].push(w);
}

function pathExists(s, d) {
  let visited = new Array(V);
  for (let i = 0; i < V; i++) {
    visited[i] = false;
  }

  let queue = [];

  visited[s] = true;
  queue.push(s);

  while (queue.length != 0) {
    n = queue.shift();

    if (n == d) return true;
    for (let i = 0; i < adj[n].length; i++) {
      if (visited[adj[n][i]] == false) {
        queue.push(adj[n][i]);
        visited[adj[n][i]] = true;
      }
    }
  }
  return false;
}
/* n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], */
Graph(6);
addEdge(0, 1);
addEdge(0, 2);
addEdge(3, 5);
addEdge(5, 4);
addEdge(4, 3);

let source = 0;
let dest = 5;
if (pathExists(source,dest)) {
  console.log("There is a path from " + source + " to " + dest);
} else {
  console.log("There is no path from " + source + " to " + dest);
}