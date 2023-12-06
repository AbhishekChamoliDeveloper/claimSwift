import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent {
  users = [
    {
      fullName: 'John Doe',
      userId: '12345',
      phoneNumber: '555-1234',
      email: 'john.doe@example.com',
      photoUrl: 'https://placekitten.com/100/100',
      dateOfJoining: new Date('2022-01-01'),
      policiesBought: 5,
      policiesClaimed: 2,
      policiesRejected: 1,
    },
    {
      fullName: 'Jane Smith',
      userId: '67890',
      phoneNumber: '555-5678',
      email: 'jane.smith@example.com',
      photoUrl: 'https://placekitten.com/100/100',
      dateOfJoining: new Date('2021-05-15'),
      policiesBought: 8,
      policiesClaimed: 4,
      policiesRejected: 0,
    },
  ];
}
