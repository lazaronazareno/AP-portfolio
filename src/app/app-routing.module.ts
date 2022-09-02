import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { RegisterComponent } from './components/register/register.component';
import { StackFormComponent } from './components/stack-form/stack-form.component';
import { StudiesFormComponent } from './components/studies-form/studies-form.component';
import { WorksFormComponent } from './components/works-form/works-form.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent, runGuardsAndResolvers: 'always'},
  {path:'profile-form', component:ProfileFormComponent, canActivate:[GuardGuard], runGuardsAndResolvers: 'always'},
  {path:'stack-form', component:StackFormComponent, canActivate:[GuardGuard], runGuardsAndResolvers: 'always'},
  {path:'experience-form', component:ExperienceFormComponent, canActivate:[GuardGuard],runGuardsAndResolvers: 'always'},
  {path:'experience-form/:id', component:ExperienceFormComponent, canActivate:[GuardGuard],runGuardsAndResolvers: 'always'},
  {path:'studies-form', component:StudiesFormComponent, canActivate:[GuardGuard], runGuardsAndResolvers: 'always'},
  {path:'studies-form/:id', component:StudiesFormComponent, canActivate:[GuardGuard], runGuardsAndResolvers: 'always'},
  {path:'works-form', component:WorksFormComponent, canActivate:[GuardGuard], runGuardsAndResolvers: 'always'},
  {path:'works-form/:id', component:WorksFormComponent, canActivate:[GuardGuard], runGuardsAndResolvers: 'always'},
  {path:'login', component:LoginFormComponent, runGuardsAndResolvers: 'always'},
  {path:'register', component:RegisterComponent, canActivate:[GuardGuard], runGuardsAndResolvers: 'always' },
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
