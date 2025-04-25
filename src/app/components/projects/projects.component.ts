import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'CarFlex',
      description: 'A comprehensive system for managing car inventory, sales, and maintenance records. Features include real-time tracking, detailed reporting, and user management.',
      techStack: ['Java', 'Spring Boot', 'Angular18', 'MySQL', 'REST API'],
      image: 'carFlex.jpg',
      githubLink: 'https://github.com/lavanbharatha/CarFlex-Website'
     
    },
    {
      title: 'Fintess-Tracker',
      description: 'Developed at Liberty Mutual, this system handles policy creation, claims processing, and customer management with a focus on user experience and performance.',
      techStack: ['Java', 'Spring Boot', 'Angular18', 'MySQL', 'Microservices'],
      image: 'fitness.jpg',
      githubLink: 'https://github.com/lavanbharatha/Fitness-Tracker'
    },
    {
      title: 'Employee Management System',
      description: 'Built for Finish Line Inc., this platform manages product inventory, user orders, and payment processing with integration to multiple payment gateways.',
      techStack: ['Java', 'Spring Boot', 'Angular18', 'MySQL', 'Bootstrap'],
      image: 'Employe2.jpg',
      githubLink:'https://github.com/lavanbharatha/EmployeeManagement'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experience. Built with Angular and Bootstrap for a responsive design.',
      techStack: ['Angular', 'Bootstrap', 'HTML', 'CSS'],
      image: 'MyPortfolio.png',
      githubLink:'https://github.com/lavanbharatha/NewPortfolio'
    }
  ];
} 