import { Component } from '@angular/core';
import { ContactBtnComponent } from "../contact-btn/contact-btn.component";

@Component({
  selector: 'app-about',
  imports: [ContactBtnComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
