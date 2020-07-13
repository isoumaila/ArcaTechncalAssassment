import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Injectable()
export class StartBatchProcessingServices{


    constructor(public http: HttpClient){

    }
/**
 * Call this method to start the batch process from the template
 */
    lunchBatch():Observable<any>{
        return this.http.get("http://localhost:8085/startjob")
        .map(resp=>resp);
        } 


}