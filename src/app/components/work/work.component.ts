import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ContactBtnComponent } from "../contact-btn/contact-btn.component";

@Component({
  selector: 'app-work',
  imports: [NgFor, ContactBtnComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
imageSrc:string[]=[
  "/images/work-1.svg",
  "/images/work-2.svg",
  "/images/work-3.svg",
  "/images/work-4.svg",
];

}
