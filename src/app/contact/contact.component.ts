import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name : string ='';
   email : string='';
   message :string='';
   personData:any[]=[];

  constructor (){}

  submitData(){
    const data ={
      name : this.name,
      email : this.email,
      message : this.message
    }
    this.personData.push(data);
    localStorage.setItem("Data",JSON.stringify(this.personData));
    console.log(this.personData);
    //clear fields
    this.email=''; this.name=''; this.message='';
  }

}
