import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testmonial',
  imports: [NgFor],
  templateUrl: './testmonial.component.html',
  styleUrl: './testmonial.component.css',
})
export class TestmonialComponent {
  stars: number[] = [0, 1, 2, 3, 4];
  cards = Array(4).fill(0);
}
