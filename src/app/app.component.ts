import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { TestmonialComponent } from "./components/testmonial/testmonial.component";
import { ContactComponent } from "./components/contact/contact.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from "./components/work/work.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, TestmonialComponent, ContactComponent, RecipesComponent, AboutComponent, WorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tasty-pastries';
}
