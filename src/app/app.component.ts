import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { TestmonialComponent } from "./components/testmonial/testmonial.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, TestmonialComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tasty-pastries';
}
