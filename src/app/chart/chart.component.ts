import { Component, OnInit } from '@angular/core';
import { ChartServices } from '../services/chart.services';
import { DateTime, ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  data :Object[];
  dataToChart:Object[]=[];
  public xAxis: Object;
  public yAxis: Object;
  public chartTitle: string;
  public legend : object;
  public markerSetting: object;
  public toolTips: object;

  keyWord : number=2021;
  currentPage : number=0;
  size : number=3;
  pages : Array<number>;
  dataWithpage :any;
  currentYear: number;
  
  constructor(public  chartServices: ChartServices) {

    
   }

  ngOnInit(): void {
  }


/**
 * return a JSON array of data from the data base
 */
  getAllData(){
    this.chartServices.getAllDatas().subscribe(
      data =>{
        this.data = data;
        
        this.chartCaracteristiques();
    for(let i in this.data ){
      
      this.dataToChart.push({'day': this.data[i][0], 'sum': this.data[i][1]});
    
    }
   
      }, error =>{
        console.log(error);
      }
      );  
  }

  /**
   * Initialize the view of the chart
   */
  public chartCaracteristiques(){
    this.chartTitle = 'Somme des valeurs d\'une journée en fonction du temps';
        this.legend={
          visible: true,
          
        }
        this.markerSetting ={
          visible: true,
          dataLabel: {visible: true}
        }
        this.toolTips = {
          enable: true
        }

    this.xAxis = {
      title: 'Jours',
      //valueType : 'Category',
      //valueType: 'DateTime',
      valueType: 'DateTimeCategory',
        labelFormat: 'y/M/d',
    };

    this.yAxis = {
      title: 'Somme des valeurs d\'une journée',
      
      
    
    }
  }

  /**
   * name
   */
  public plotChart() {

    this.getAllData();

    this.chartTitle = 'Somme des valeurs d\'une journée en fonction du temps';
    for(let i in this.data ){
      console.log(i);
      this.dataToChart.push({'day': this.data[i][0], 'sum': this.data[i][1]});
    
    }
   

    
    this.xAxis = {
      title: 'Jours',
      valueType : 'Category'
    };

    this.yAxis = {
      title: 'Somme des valeurs d\'une journée'
    }
  }

/**
 * Return database data in a JSON forma and then fill another object array
 * that will be use to plot the chart
 */
  doChearch(){

    /*if(this.currentPage !== 0){
      this.size = 6;
    }*/
    this.chartServices.getDataWithoutKeyW(this.size, this.currentPage).subscribe(
      data =>{
        this.dataWithpage = data;
        this.chartCaracteristiques();
        
        this.pages = new Array(this.dataWithpage.totalPages);

        this.dataToChart =[];
        for(let i in this.dataWithpage.content ){
      
          this.dataToChart.push({'day': new Date(this.dataWithpage.content[i][0]), 'sum': this.dataWithpage.content[i][1]});
          
        }
        console.log(this.dataToChart);
        
      }, error =>{
        console.log(error);
      }
      );  
  }

  /**
   * Call this method to navigate over year from the chart
   * @param icurrant : current year activate on the chart
   */
  goToNextYear(icurrant: number){
    
    
    
    this.dataToChart =[];
    this.currentPage = icurrant;

    

    this.doChearch();

    

    this.chartCaracteristiques();
    for(var i =icurrant ; i<this.size; i++){
      console.log("------goToNextYear----");
      console.log(icurrant);
      this.dataToChart.push({'day': new Date(this.dataWithpage.content[i][0]), 'sum': this.dataWithpage.content[i][1]});
      console.log(this.dataToChart);
    }
    this.currentYear = new Date(this.dataWithpage.content[0][0]).getFullYear();
  }

  choseChartGranularity(data:object[], gran  : string){

    for(var i=0; i<data.length; i++){
      if(gran==="MOI"){
         data[i]['day'] = data[i]['day'];
      }
      
      /**else 
      if(gran==="SEMAINE"){
        this.dataToChart.;
      }else if(gran==="MOI"){

      }else if(gran==="ANNEE"){

      }**/
    }
  }


  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
};
}
