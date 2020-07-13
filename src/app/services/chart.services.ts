import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

export class ChartServices{



    constructor(public http: HttpClient){

    }

/**
 * return a JSON array of sum of values per day
 */
    getAllDatas():Observable<any>{
        return this.http.get("http://localhost:8085/SumOfValuePerDay")
        .map(resp=>resp);
        } 


getDataWithoutKeyW(size: number, page: number ):Observable<any>{
    return this.http.get("http://localhost:8085/calcSumOfValuePerDayWithoutKeyW?size="+size+"&page="+page)
    .map(resp=>resp);
    } 
/**
 * return a JSON array of sum of values per day with pagination
 * @param keyword 
 * @param size 
 * @param page 
 */
    doChearch(keyword : number, size: number, page: number ){
        return this.http.get("http://localhost:8085/calcSumOfValuePerDayWithKeyW?mc="+keyword+"&size="+size+"&page="+page)
        .map(resp=>resp);
    }
}