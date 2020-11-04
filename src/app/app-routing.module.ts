import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './components/projects/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [
  {
    path: 'portfolio', component: ProjectsComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'projects/:id', component: ProjectComponent,
  },
  {
    path: 'projects', component: ProjectsComponent,
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'skills', component: SkillsComponent
  },
  {
    path: "**", component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  AboutComponent, ProjectsComponent, ContactComponent, PageNotFoundComponent, HomeComponent, ProjectComponent
]