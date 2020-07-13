import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
import "rxjs/add/operator/map";
import { Dataservices } from '../services/data.services';
@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.component.html',
  styleUrls: ['./raw-data.component.scss']
})
export class RawDataComponent implements OnInit {

  data :any;
  keyWord : string="";
  currentPage : number=0;
  size : number=5;
  pages : Array<number>;

  
  constructor(public dataservices : Dataservices) { }

  ngOnInit(): void {
    
    //this.getAllData();
    
  }
/**
 * call the service docheach and return data from the database and an array of pages 
 */
  doChearch(){
    this.dataservices.doChearch(this.keyWord, this.size, this.currentPage).subscribe(
      data =>{
        this.data = data;
        this.pages = new Array(this.data.totalPages);
      }, error =>{
        console.log(error);
      }
      );  
  }
  /**
   * return data from the data base without pagination
   */
  getAllData(){
    this.dataservices.getAllDatas().subscribe(
      data =>{
        this.data = data;
      }, error =>{
        console.log(error);
      }
      );  
  }

/**
 * Call this method to go to the next page
 * @param i :page number
 */
  goToPage(i: number){
    this.currentPage = i;
    this.doChearch();
  }
}
