
import { NodeI } from './node';

  export class PriorityQueue {
    priorityQueue: NodeI[];
    constructor() {
      this.priorityQueue = [];
    }
    enqueue(val:string, priority:number) {
      let newNode = new NodeI(val, priority);
      this.priorityQueue.push(newNode);
      let idx = this.priorityQueue.length - 1;
      const element = this.priorityQueue[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.priorityQueue[parentIdx];
        if (element.priority >= parent.priority) break;
        this.priorityQueue[parentIdx] = element;
        this.priorityQueue[idx] = parent;
        idx = parentIdx;
      }
    }
    dequeue() {
      const min = this.priorityQueue[0];
      const end = this.priorityQueue.pop();
      if (this.priorityQueue.length > 0) {
        this.priorityQueue[0] = end || {val:'' ,priority:0 };
        let idx = 0;
      const length = this.priorityQueue.length;
      const element = this.priorityQueue[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild: NodeI = { val:'' ,priority:0 }, rightChild: NodeI = { val:'' ,priority:0 };
        let swap = null;
  
        if (leftChildIdx < length) {
          leftChild = this.priorityQueue[leftChildIdx];
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.priorityQueue[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.priorityQueue[idx] = this.priorityQueue[swap];
        this.priorityQueue[swap] = element;
        idx = swap;
      }
      }
      return min;
    }

  }
  
  

  
  
  