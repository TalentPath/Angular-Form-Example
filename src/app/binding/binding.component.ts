import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  counter:number;
  statement:string='';
  constructor() { 
    this.counter =0;
  }

 
  countClick(){
    this.counter++;
  }
  ngOnInit(): void {

    
  }

}
