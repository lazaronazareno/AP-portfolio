import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { StudiesComponent } from './components/studies/studies.component';
import { WorksComponent } from './components/works/works.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'profile', component: ProfileComponent},
  {path:'abilities', component: AbilitiesComponent},
  {path:'experiences', component: ExperienceComponent},
  {path:'studies', component: StudiesComponent},
  {path:'works', component: WorksComponent},
  {path:'login', component:LoginFormComponent},
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
