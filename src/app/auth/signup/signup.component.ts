import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Passwordmatch } from '../validator/passwordmatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class signupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation : new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  },
  { Validators:[this.passwordMatch.validate]}
  ) 

  constructor(public passwordMatch: Passwordmatch){ }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

 ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  
 }
}

