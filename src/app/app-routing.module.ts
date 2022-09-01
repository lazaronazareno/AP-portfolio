import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceEditFormComponent } from './components/experience-edit-form/experience-edit-form.component';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { RegisterComponent } from './components/register/register.component';
import { StackFormComponent } from './components/stack-form/stack-form.component';
import { StudiesFormComponent } from './components/studies-form/studies-form.component';
import { StudyEditFormComponent } from './components/study-edit-form/study-edit-form.component';
import { WorkEditFormComponent } from './components/work-edit-form/work-edit-form.component';
import { WorksFormComponent } from './components/works-form/works-form.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'profile-form', component:ProfileFormComponent, canActivate:[GuardGuard]},
  {path:'stack-form', component:StackFormComponent, canActivate:[GuardGuard]},
  {path:'experience-form', component:ExperienceFormComponent, canActivate:[GuardGuard]},
  {path:'experience-edit-form', component:ExperienceEditFormComponent, canActivate:[GuardGuard]},
  {path:'studies-form', component:StudiesFormComponent, canActivate:[GuardGuard]},
  {path:'study-edit-form', component:StudyEditFormComponent, canActivate:[GuardGuard]},
  {path:'works-form', component:WorksFormComponent, canActivate:[GuardGuard]},
  {path:'work-edit-form', component:WorkEditFormComponent, canActivate:[GuardGuard]},
  {path:'login', component:LoginFormComponent},
  {path:'register', component:RegisterComponent, canActivate:[GuardGuard] },
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
