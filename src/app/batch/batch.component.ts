import { Component, OnInit } from '@angular/core';
import { StartBatchProcessingServices } from '../services/batch.services';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  job:any;
  progress: number = 0;
  constructor(public startBatchProcessingServices: StartBatchProcessingServices) { }

  ngOnInit(): void {
  }

/**
 * Call it to lunch the batch
 */
  lunchBatch(){
    this.startBatchProcessingServices.lunchBatch().subscribe(
      data =>{
        while(this.job===null){
          this.progress++;
        }
        this.job = data;
      }, error =>{
        console.log(error);
      }
      );  
  }

}
