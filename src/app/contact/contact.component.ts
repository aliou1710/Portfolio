import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent  implements OnInit{
  public contactForm : FormGroup;
  constructor(){
    this.contactForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message:new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(){
  }
  
 public onSubmit(){
    console.log(this.contactForm.value);
  }
}
