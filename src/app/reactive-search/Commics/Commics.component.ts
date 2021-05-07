import { Observable } from 'rxjs';
import { ConfigService } from './../config/config.service';
import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-Commics',
  templateUrl: './Commics.component.html',
  styleUrls: ['./Commics.component.css']
})
export class CommicsComponent implements OnInit, AfterViewInit{

  queryField = new FormControl();
  results: any;
  descricao:any;
  params:Params;
  p: number = 1;
  @ViewChild('teste') loading:ElementRef;
  constructor(private ConfigService:ConfigService ) {

    this.params = new HttpParams()
    .set('orderBy','title')
    .set('apikey','90716f845301a38e357037bdc9b47351')
    .set('format','comic')
    .set('formatType','comic')
    .set('limit','100')
    this.ConfigService.getComics(this.params).subscribe(res=>{
       this.results = res.data.results
     })
   }
  ngAfterViewInit() {
    this.loading.nativeElement.style.display = 'none';
  }


  ngOnInit() {

  }

 onSearch()
 {
    var Params = this.params.set('titleStartsWith',this.queryField.value);
    this.loading.nativeElement.style.display = '';
    this.ConfigService.getComics(Params).subscribe(res=>{this.results = res.data.results
      this.results = res.data.results;
      this.loading.nativeElement.style.display = 'none';} )
   //
 }
 getDetails(pos: number){


    if(this.results != null){
      this.descricao= this.results[pos].description;
    }
 }
}
