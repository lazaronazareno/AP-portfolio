import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceEditFormComponent } from './components/experience-edit-form/experience-edit-form.component';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { StackFormComponent } from './components/stack-form/stack-form.component';
import { StackComponent } from './components/stack/stack.component';
import { StudiesFormComponent } from './components/studies-form/studies-form.component';
import { StudiesComponent } from './components/studies/studies.component';
import { StudyEditFormComponent } from './components/study-edit-form/study-edit-form.component';
import { WorkEditFormComponent } from './components/work-edit-form/work-edit-form.component';
import { WorksFormComponent } from './components/works-form/works-form.component';
import { WorksComponent } from './components/works/works.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'profile', component: ProfileComponent},
  {path:'profile-form', component:ProfileFormComponent},
  {path:'stack', component: StackComponent},
  {path:'stack-form', component:StackFormComponent},
  {path:'experiences', component: ExperienceComponent},
  {path:'experience-form', component:ExperienceFormComponent},
  {path:'experience-edit-form', component:ExperienceEditFormComponent},
  {path:'studies', component: StudiesComponent},
  {path:'studies-form', component:StudiesFormComponent},
  {path:'study-edit-form', component:StudyEditFormComponent},
  {path:'works', component: WorksComponent},
  {path:'works-form', component:WorksFormComponent},
  {path:'work-edit-form', component:WorkEditFormComponent},
  {path:'login', component:LoginFormComponent},
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
