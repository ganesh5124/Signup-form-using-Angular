import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { signupComponent } from './signup/signup.component';
import { signinComponent } from './signin/signin.component';

const routes: Routes = [
  { path:"signup", component:signupComponent},
  { path:"", component:signinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
