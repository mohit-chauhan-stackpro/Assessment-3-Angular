import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assessment-3-Angular';
  paraShow=false
  buttonClickDetails: any[]=[]
  clickedTimes=1;
  buttonClick(){
    this.paraShow=!this.paraShow
    this.buttonClickDetails.push(new Date())
  }
}
