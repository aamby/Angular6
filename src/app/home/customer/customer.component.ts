 import { NameValidators } from './../../common/validators/name.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  form = new FormGroup({
    name : new FormControl('Ambarish Roy', 
    [
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(30), 
      NameValidators.cannotStartWithNumber
    ]),
    email: new FormControl('aamby2006@gmail.com', [Validators.required, Validators.email]),
    address : new FormControl('Bangalore', Validators.maxLength(50))
  });

  get name(){
    return this.form.get('name');
  }

  get email(){
    return this.form.get('email');
  }

  get address(){
    return this.form.get('address');
  }
}
