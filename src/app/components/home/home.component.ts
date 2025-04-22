import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface TechStack {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  constructor(private router: Router) { }
navigateToProjects() {
this.router.navigate(['/projects']);
}
  techStack: TechStack[] = [
    { name: 'Java', icon: 'bi bi-filetype-java' },
    { name: 'Spring Boot', icon: 'bi bi-gear-fill' },
    { name: 'Angular', icon: 'bi bi-code-slash' },
    { name: 'MySQL', icon: 'bi bi-database-fill' },
    { name: 'Git', icon: 'bi bi-git' },
    { name: 'HTML5', icon: 'bi bi-filetype-html' },
    { name: 'CSS3', icon: 'bi bi-filetype-css' },
    { name: 'Bootstrap', icon: 'bi bi-bootstrap' }
  ];
} 