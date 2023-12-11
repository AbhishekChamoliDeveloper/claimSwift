import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service.ts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  userData: any;
  approvedPolicies: any[] = [];
  rejectedPolicies: any[] = [];
  pendingPolicies: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (data) => {
        this.userData = data;
        this.categorizeClaimedPolicies();
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  formatLocalDate(date: string): string {
    return new Date(date).toLocaleString();
  }

  categorizeClaimedPolicies(): void {
    const claimedPolicies = this.userData?.claimedPolicies || [];

    this.approvedPolicies = claimedPolicies.filter(
      (policy) => policy.claimStatus === 'approved'
    );
    this.rejectedPolicies = claimedPolicies.filter(
      (policy) => policy.claimStatus === 'rejected'
    );
    this.pendingPolicies = claimedPolicies.filter(
      (policy) => policy.claimStatus === 'pending'
    );
  }
}
