export class Job {
    priority: number;

    constructor(priority: number) {
        this.priority = priority;
    }

    toString(): string {
        return `The job with priority ${this.priority} is already done`;

    }
}