import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

export class DetailServices{




    constructor(public http: HttpClient){

    }

/**
 * return a JSON array of sum of values per group by city
 * @param keyword 
 * @param size 
 * @param page 
 */
    doChearch(keyword : string, size: number, page: number ){
        return this.http.get("http://localhost:8085/ChearchSumTab?mc="+keyword+"&size="+size+"&page="+page)
        .map(resp=>resp);
    }

    getFullTable():Observable<any>{
        return this.http.get("http://localhost:8085/Sum")
        .map(resp=>resp);
        } 
}
