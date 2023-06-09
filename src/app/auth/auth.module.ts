import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { signinComponent } from './signin/signin.component';
import { signupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    signinComponent,
    signupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
