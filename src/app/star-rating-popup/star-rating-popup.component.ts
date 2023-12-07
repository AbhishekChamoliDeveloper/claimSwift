import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating-popup',
  templateUrl: './star-rating-popup.component.html',
})
export class StarRatingPopupComponent implements OnInit {
  rating: number;
  showFeedBackForm: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showFeedBackForm = true;
    }, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000);
  }

  closeFeedBackForm(): void {
    this.showFeedBackForm = false;
  }

  setRating(rating: number): void {
    this.rating = rating;
  }

  onSubmit(e: Event): void {
    e.preventDefault();

    this.showFeedBackForm = false;
  }
}
