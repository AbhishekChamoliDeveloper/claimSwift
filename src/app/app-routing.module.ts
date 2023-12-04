import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdministratorLoginComponent } from './administrator-login/administrator-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAvailablePoliciesComponent } from './user-available-policies/user-available-policies.component';
import { PolicyPurchaseComponent } from './policy-purchase/policy-purchase.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'user-signup', component: UserSignupComponent },
  { path: 'admin-login', component: AdministratorLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'dashboard/available-policies',
    component: UserAvailablePoliciesComponent,
  },
  {
    path: 'buy-policy/:id',
    component: PolicyPurchaseComponent,
  },
  { path: 'dashboard/settings', component: SettingsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
