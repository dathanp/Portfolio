import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from '../data/projects';

@Component({
  selector: 'app-project-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent implements OnInit {
  projects: Array<any> = projects;

  constructor() {}
  ngOnInit(): void {
      
  }
}
