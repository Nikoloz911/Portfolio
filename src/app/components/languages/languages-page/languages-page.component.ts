// languages-page.component.ts
import { Component } from '@angular/core';
import { Skill } from '../../../Interfaces/ISkills';

@Component({
  selector: 'app-languages-page',
  templateUrl: './languages-page.component.html',
  styleUrl: './languages-page.component.scss'
})
export class LanguagesPageComponent {
  skills: Skill[] = [
    { 
      name: 'HTML', 
      icon: 'devicon-html5-plain-wordmark colored',
      category: 'language',
      description: 'Core markup language for web pages'
    },
    { 
      name: 'CSS', 
      icon: 'devicon-css3-plain-wordmark colored',
      category: 'language',
      description: 'Style sheet language for web design'
    },
    { 
      name: 'SCSS', 
      icon: 'devicon-sass-original colored',
      category: 'language',
      description: 'Powerful CSS preprocessor with variables and nesting'
    },
    { 
      name: 'JavaScript', 
      icon: 'devicon-javascript-plain colored',
      category: 'language',
      description: 'Programming language for web development'
    },
    { 
      name: 'TypeScript', 
      icon: 'devicon-typescript-plain colored',
      category: 'language',
      description: 'Typed superset of JavaScript compiling to plain JavaScript'
    },
    { 
      name: 'C#', 
      icon: 'devicon-csharp-plain-wordmark colored',
      category: 'language',
      description: 'Modern object-oriented programming language'
    },
    { 
      name: 'SQL', 
      icon: 'devicon-azuresqldatabase-plain colored',
      category: 'language',
      description: 'Standard language for storing and retrieving data'
    },
    { 
      name: 'Angular', 
      icon: 'devicon-angularjs-plain colored',
      category: 'framework',
      description: 'Platform for building web applications'
    },
    { 
      name: 'ASP.NET', 
      icon: 'devicon-dot-net-plain-wordmark colored',
      category: 'framework',
      description: 'Framework for building web apps and services with .NET'
    }
  ];

  languageSkills = this.skills.filter(skill => skill.category === 'language');
  frameworkSkills = this.skills.filter(skill => skill.category === 'framework');

  getLanguageRoute(name: string): string {
    if (name === 'C#') {
      return '/Csharp';
    }
    return '/' + name.toLowerCase();
  }
}