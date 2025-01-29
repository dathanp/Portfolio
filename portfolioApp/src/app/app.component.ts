import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectListingComponent } from './project-listing/project-listing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProjectListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dathan Pompa';
}
