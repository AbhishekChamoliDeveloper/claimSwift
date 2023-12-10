import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdministratorLoginComponent } from './administrator-login/administrator-login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserAvailablePoliciesComponent } from './user-available-policies/user-available-policies.component';
import { SinglePolicyCardComponent } from './single-policy-card/single-policy-card.component';
import { PolicyPurchaseComponent } from './policy-purchase/policy-purchase.component';
import { SettingsComponent } from './settings/settings.component';
import { PurchasedPoliciesComponent } from './purchased-policies/purchased-policies.component';
import { SinglePolicyPurchasedCardComponent } from './single-policy-purchased-card/single-policy-purchased-card.component';
import { ClaimPolicyComponent } from './claim-policy/claim-policy.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { ClaimReviewComponent } from './claim-review/claim-review.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminApprovedPoliciesComponent } from './admin-approved-policies/admin-approved-policies.component';
import { AdminRejectedPoliciesComponent } from './admin-rejected-policies/admin-rejected-policies.component';
import { TakeClaimActionComponent } from './take-claim-action/take-claim-action.component';
import { StarRatingPopupComponent } from './star-rating-popup/star-rating-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdministratorLoginComponent,
    UserSignupComponent,
    DashboardComponent,
    UserSidebarComponent,
    UserAvailablePoliciesComponent,
    SinglePolicyCardComponent,
    PolicyPurchaseComponent,
    SettingsComponent,
    PurchasedPoliciesComponent,
    SinglePolicyPurchasedCardComponent,
    ClaimPolicyComponent,
    NotificationsComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    ClaimReviewComponent,
    UsersListComponent,
    AdminApprovedPoliciesComponent,
    AdminRejectedPoliciesComponent,
    TakeClaimActionComponent,
    StarRatingPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
