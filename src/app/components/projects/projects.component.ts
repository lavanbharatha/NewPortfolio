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
      description: 'CarFlex is a user-friendly web platform where people can explore, buy, sell, and rent cars.  Sellers can post car listings with full details and images, while renters can check availability and send rental requests.',
      techStack: ['Java', 'Spring Boot', 'Angular18', 'MySQL', 'Bootstrap'],
      image: 'public/carFlex.jpg',
      githubLink: 'https://github.com/lavanbharatha/CarFlex-Website'
     
    },
    {
      title: 'Fintess-Tracker',
      description: 'Fitness Tracker is a web application that allows users to log workouts, monitor calories, and track progress over time. It features personalized workout and diet plans, real-time heart rate and activity sync via wearables, and interactive progress charts.',
      techStack: ['Java', 'Spring Boot', 'Angular18', 'MySQL', 'Bootstrap'],
      image: 'public/fitness.jpg',
      githubLink: 'https://github.com/lavanbharatha/Fitness-Tracker'
    },
    {
      title: 'Employee System',
      description: 'This is an Employee Management System designed to simplify handling employee records. It allows adding, viewing, updating, and deleting employee details with ease. The system also includes admin login and search functionality for efficient management.',
      techStack: ['Java', 'Spring Boot', 'Angular18', 'MySQL', 'Bootstrap'],
      image: 'public/Employe2.jpg',
      githubLink:'https://github.com/lavanbharatha/EmployeeManagement'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experience. Built with Angular and Bootstrap for a responsive design.',
      techStack: ['Angular', 'Bootstrap', 'HTML', 'CSS'],
      image: 'public/MyPortfolio.png',
      githubLink:'https://github.com/lavanbharatha/NewPortfolio'
    }
  ];
} 