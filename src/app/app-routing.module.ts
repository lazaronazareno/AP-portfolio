import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RegisterComponent } from './components/register/register.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent, canActivate:[GuardGuard]},
  {path:'login', component:LoginFormComponent},
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
