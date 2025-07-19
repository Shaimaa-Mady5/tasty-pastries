import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { TestmonialComponent } from "./components/testmonial/testmonial.component";
import { ContactComponent } from "./components/contact/contact.component";
import { RecipesComponent } from "./components/recipes/recipes.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, TestmonialComponent, ContactComponent, RecipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tasty-pastries';
}
