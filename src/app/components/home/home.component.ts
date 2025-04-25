import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
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

  keySkills = [
    'Full Stack Development',
    'RESTful API Design',
    'Frontend Development',
    'Problem Solving',
    'Team Collaboration'
  ];

  summary = `Hi, I'm Lavan Bharatha — a passionate Full Stack Developer with hands-on experience in building scalable web applications using Java, Spring Boot, Angular 18, and MySQL.
I thrive in fast-paced environments and enjoy translating complex business needs into intuitive digital solutions.
My strengths lie in clean code practices, efficient RESTful API design, and building responsive, modern UIs using Bootstrap 5 and Angular.
With strong problem-solving skills, I love tackling backend logic as much as crafting smooth frontend experiences.
`;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}