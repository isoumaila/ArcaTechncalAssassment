import { Component, OnInit } from '@angular/core';
import { DetailServices } from '../services/detail.services';

@Component({
  selector: 'app-datadetail',
  templateUrl: './datadetail.component.html',
  styleUrls: ['./datadetail.component.scss']
})
export class DatadetailComponent implements OnInit {

  data :any;
  keyWord : string="";
  currentPage : number=0;
  size : number=15;
  pages : Array<number>;
  constructor(public detailServices: DetailServices) { }

  ngOnInit(): void {
  }


/**
 * return a JSON array data from the data base
 */
  doChearch(){
    this.detailServices.doChearch(this.keyWord, this.size, this.currentPage).subscribe(
      data =>{
        this.data = data;
        
        this.pages = new Array(this.data.totalPages);
      }, error =>{
        console.log(error);
      }
      );  
  }

/**
 * call it to go to the next page
 * @param i : page number
 */
  goToPage(i: number){
    this.currentPage = i;
    this.doChearch();
  }
}
