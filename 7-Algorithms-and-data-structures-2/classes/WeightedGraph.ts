
export class WeightedGraph {
    weightedGraph: Record<string,{ node: string, weight: number }[] >
    constructor() {
      this.weightedGraph = {};
    }
    addVertex(vertex:string) {
      if (!this.weightedGraph[vertex]) this.weightedGraph[vertex] = [];
    }
    addEdge(vertex1:string, vertex2:string, weight: number) {
      this.weightedGraph[vertex1].push({ node: vertex2, weight });
      this.weightedGraph[vertex2].push({ node: vertex1, weight });
    }
    
  }