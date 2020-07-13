import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Dataservices{






    constructor(public http: HttpClient){

    }

/**
 * get all data from the data base
 */
    getAllDatas():Observable<any>{
        return this.http.get("http://localhost:8085/DataB")
        .map(resp=>resp);
        } 
/**
 * Return data with pagination
 * @param keyword : key work to filter data
 * @param size  : page size
 * @param page : page number
 */
    doChearch(keyword : string, size: number, page: number ){
        return this.http.get("http://localhost:8085/ChearchDataB?mc="+keyword+"&size="+size+"&page="+page)
        .map(resp=>resp);
    }
    getData(id:number):Observable<any>{
        return this.http.get("http://localhost:8080/Data/"+id) .map(resp=>resp);
        }
    saveData(contact){
        return this.http.post("http://localhost:8080/Data",contact) .map(resp=>resp);
        }
     deleteDatta(id:number){
        return this.http.delete("http://localhost:8080/Data/"+id) .map(resp=>resp);
        }
}