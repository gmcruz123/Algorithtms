import { Dijkstra } from './dijsktra';
import { WeightedGraph } from './weightedGraph';

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const dijkstra = new Dijkstra(graph.weightedGraph);
console.log(dijkstra.findShortestPath("A", "E"))
console.log(dijkstra.findShortestPath("B", "A"))
console.log(dijkstra.findShortestPath("C", "D"))
console.log(dijkstra.findShortestPath("D", "E"))