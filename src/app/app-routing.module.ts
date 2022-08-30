import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { WorksFormComponent } from './components/works-form/works-form.component';
import { WorksComponent } from './components/works/works.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'profile', component: ProfileComponent},
  {path:'abilities', component: StackComponent},
  {path:'experiences', component: ExperienceComponent},
  {path:'studies', component: StudiesComponent},
  {path:'works', component: WorksComponent},
  {path:'login', component:LoginFormComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile-form', component:ProfileFormComponent},
  {path:'stack-form', component:StackFormComponent},
  {path:'experience-form', component:ExperienceFormComponent},
  {path:'studies-form', component:StudiesFormComponent},
  {path:'works-form', component:WorksFormComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
