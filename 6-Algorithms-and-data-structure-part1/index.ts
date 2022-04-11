import { Job } from './classes/job';
import { Queue } from './classes/queue';

let jobJunner = new Queue();

for (let index = 0; index < 10000; index++)   
 {
    const priority = Math.floor((Math.random() * 10000)) ;
    const newJob = new Job(priority);
    jobJunner.addJob(newJob);
}

while (jobJunner.getNumJobs()>0) 
 {
  const job = jobJunner.removeJob();
  console.log(job.toString());
}
