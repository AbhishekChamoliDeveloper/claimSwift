import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdministratorLoginComponent } from './administrator-login/administrator-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'user-signup', component: UserSignupComponent },
  { path: 'admin-login', component: AdministratorLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
