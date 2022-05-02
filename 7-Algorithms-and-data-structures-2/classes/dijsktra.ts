import { PriorityQueue } from './minHeap';

export class Dijkstra {
    weightedGraph : Record<string, {node: string, weight: number}[]>;
    constructor(weightedGraph: Record<string, {node: string, weight: number}[]>){
        this.weightedGraph = weightedGraph;
    }
    
    findShortestPath(start:string, finish:string){
    const nodes = new PriorityQueue();
    const distances : Record<string, number> = {};
    const previous: Record<string, any> = {};
    let path = [];
    let smallest: string = '';
    for (let vertex in this.weightedGraph) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.priorityQueue.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.weightedGraph[smallest]) {
          let nextNode = this.weightedGraph[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}