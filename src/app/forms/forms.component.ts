import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidate';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  frameworks:string[]=['Angular','React', 'Vue', 'Next.js', 'Ember','Meteor']
  candidates:Candidate[]=[];
  candidate:Candidate = new Candidate('','','','',50,0, false);   
  formVals:string='';



  constructor() {}

  ngOnInit(): void {

  }

  onSubmit(isValid:boolean|null){
      if(isValid){
        let newCandidate = new Candidate(this.candidate.firstName, this.candidate.lastName, this.candidate.email, this.candidate.javascript,this.candidate.skillLevel, this.candidate.salary,this.candidate.preferRemote)
        this.formVals = JSON.stringify(this.candidate);
        this.candidates.push(newCandidate)
        console.log(this.candidates);
      }else{
        this.formVals = 'Invalid Entry'
      }
    
  }
}
