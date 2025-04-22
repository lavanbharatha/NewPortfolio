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
      title: 'Car Management System',
      description: 'A comprehensive system for managing car inventory, sales, and maintenance records. Features include real-time tracking, detailed reporting, and user management.',
      techStack: ['Java', 'Spring Boot', 'Angular18', 'MySQL', 'REST API'],
      image: 'carFlex.jpg',
      githubLink: 'https://github.com/yourusername/car-management',
      demoLink: 'https://car-management-demo.com'
    },
    {
      title: 'Insurance Policy Management',
      description: 'Developed at Liberty Mutual, this system handles policy creation, claims processing, and customer management with a focus on user experience and performance.',
      techStack: ['Java', 'Spring Boot', 'Angular18', 'MySQL', 'Microservices'],
      image: 'fitness.jpg',
    },
    {
      title: 'E-commerce Platform',
      description: 'Built for Finish Line Inc., this platform manages product inventory, user orders, and payment processing with integration to multiple payment gateways.',
      techStack: ['Java', 'Spring Boot', 'Angular18', 'MySQL', 'Bootstrap'],
      image: 'Employee.png'
    }
  ];
} 