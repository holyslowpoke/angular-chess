import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent {
  
  title = 'angular-chess';
  
  

  
  isActive = false;
  board:any;
  current:number = 0;
  message:string = '';
  defeat:boolean = false;
  
  
  onEnter(){
    console.log('yes');
    this.isActive = !this.isActive;
  }
  reset(){
    const size =5
    
  }
  undo(){
    const v = 1
  }
  constructor(){
    this.reset()
  }
}
