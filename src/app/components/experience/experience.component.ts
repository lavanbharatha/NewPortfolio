import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ExperienceComponent {
  experiences: Experience[] = [
   
    {
      company: 'Hanuma Infotech',
      role: 'Junior Developer',
      period: 'Mar 2023 - Present',
      location: 'Remote',
      description: [
        'Assisted in developing web applications using Java and Angular frameworks',
        'Created responsive UI components.',
        'Participated in regular code reviews and implemented feedback to improve code quality',
        'Integrated RESTful APIs for CRUD operations with Spring Boot backend',
        'Worked with MySQL database for designing and optimizing queries',
        'Collaborated with senior developers to fix UI/UX bugs during sprints',
        'Used Git for version control.',
        'Collaborated on modular Angular 18 components with routing and state management for a scalable frontend architecture.',
        'Styled reusable components and layouts with SCSS and Bootstrap utility classes to ensure design consistency.',
         ],
      technologies: ['Java', 'SpringBoot','Angular', 'Bootstrap', 'MySQL', 'HTML/CSS']
    }
  ];
}