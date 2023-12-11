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
import { PurchasedPoliciesComponent } from './purchased-policies/purchased-policies.component';
import { ClaimPolicyComponent } from './claim-policy/claim-policy.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClaimReviewComponent } from './claim-review/claim-review.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminApprovedPoliciesComponent } from './admin-approved-policies/admin-approved-policies.component';
import { AdminRejectedPoliciesComponent } from './admin-rejected-policies/admin-rejected-policies.component';
import { TakeClaimActionComponent } from './take-claim-action/take-claim-action.component';

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
    path: 'buy-policy/:policyId',
    component: PolicyPurchaseComponent,
  },
  { path: 'dashboard/settings', component: SettingsComponent },
  {
    path: 'dashboard/purchased-policies',
    component: PurchasedPoliciesComponent,
  },
  {
    path: 'claim-policy/:policyId',
    component: ClaimPolicyComponent,
  },
  {
    path: 'dashboard/notifications',
    component: NotificationsComponent,
  },
  {
    path: 'dashboard/admin',
    component: AdminDashboardComponent,
  },
  {
    path: 'dashboard/admin/claim-review',
    component: ClaimReviewComponent,
  },
  {
    path: 'dashboard/admin/users-list',
    component: UsersListComponent,
  },
  {
    path: 'dashboard/admin/approved-policies',
    component: AdminApprovedPoliciesComponent,
  },
  {
    path: 'dashboard/admin/rejected-policies',
    component: AdminRejectedPoliciesComponent,
  },
  {
    path: 'dashboard/admin/claim-review/:claimId',
    component: TakeClaimActionComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
