import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdministratorLoginComponent } from './administrator-login/administrator-login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdministratorLoginComponent,
    UserSignupComponent,
    DashboardComponent,
    UserSidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
