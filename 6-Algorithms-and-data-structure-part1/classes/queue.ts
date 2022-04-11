import { Job } from './job';

export class Queue {
    queue: Job[];
    constructor(queue?: Job[]) {
        this.queue = queue ?? [];
    }

    public removeJob() {
        const max = this.queue[0];
        const end = this.queue.pop();
        if (this.queue.length === 0) return max;
        this.queue[0] = end;
        let index = 0;
        const length = this.queue.length;
        const current = this.queue[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.queue[leftChildIndex];
                if (leftChild.priority > current.priority) swap = leftChildIndex;
            }
            if (rightChildIndex < length) {
                rightChild = this.queue[rightChildIndex];
                if (
                    (swap === null && rightChild.priority > current.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                )
                    swap = rightChildIndex;
            }

            if (swap === null) break;
            this.queue[index] = this.queue[swap];
            this.queue[swap] = current;
            index = swap;
        }

        return max;

    }
    public addJob(job: Job) {
        this.queue.push(job);
        let index = this.queue.length - 1;
        const current = this.queue[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.queue[parentIndex];

            if (parent.priority <= current.priority) {
                this.queue[parentIndex] = current;
                this.queue[index] = parent;
                index = parentIndex;
            } else break;
        }

    }

    public getNumJobs() {
        return this.queue.length;
    }



}