import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { WorksComponent } from './components/works/works.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './services/portfolio.service';
import { InterceptorService } from './services/interceptor.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutMeComponent,
    AbilitiesComponent,
    ExperienceComponent,
    StudiesComponent,
    WorksComponent,
    LoginFormComponent,
    PortfolioComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
