import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating-popup',
  templateUrl: './star-rating-popup.component.html',
})
export class StarRatingPopupComponent {
  @Input() rating: number; // You can pass the initial rating from the parent component

  stars: number[] = [1, 2, 3, 4, 5];
  hoveredIndex: number | null = null;
  selectedIndex: number | null = null;

  onMouseEnter(index: number): void {
    this.hoveredIndex = index;
  }

  onMouseLeave(): void {
    this.hoveredIndex = null;
  }

  onClick(index: number): void {
    this.selectedIndex = index;
    // You can emit an event here to notify the parent component about the selected rating
  }
}
