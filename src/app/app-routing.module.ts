import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
//
import { MeComponent } from './components/person/me/me.component';
import { ProjectsComponent } from './components/person/projects/projects.component';
import { SkillsComponent } from './components/person/skills/skills.component';
//
const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: "Me",
    component: MeComponent
  },
  {
    path: "Projects",
    component: ProjectsComponent
  },
  {
    path: "Skills",
    component: SkillsComponent
  },
  {
    path: "**",
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
