import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  contactMethods = [
    { id:1, name: 'Email' },
    { id:2, name: 'SMS' },
    { id:3, name: 'Call' },
  ];

  ngOnInit() {
  }

  submit(f){
    console.log(f);
  }

  onblur(f){
    console.log(f);
    console.log(!f.touched || !f.valid);
  }

}
