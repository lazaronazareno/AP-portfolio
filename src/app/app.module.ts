import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faSquarePlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StackComponent } from './components/stack/stack.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { WorksComponent } from './components/works/works.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './services/portfolio.service';
import { InterceptorService } from './services/interceptor.service';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { StackFormComponent } from './components/stack-form/stack-form.component';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';
import { StudiesFormComponent } from './components/studies-form/studies-form.component';
import { WorksFormComponent } from './components/works-form/works-form.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MissingImgDirective } from './missing-img.directive';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StackComponent,
    ExperienceComponent,
    StudiesComponent,
    WorksComponent,
    LoginFormComponent,
    PortfolioComponent,
    RegisterComponent,
    HeaderComponent,
    ProfileFormComponent,
    StackFormComponent,
    ExperienceFormComponent,
    StudiesFormComponent,
    WorksFormComponent,
    FooterComponent,
    MissingImgDirective,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [PortfolioService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faEdit)
    library.addIcons(faSquarePlus)
    library.addIcons(faTrash)
  }
 }
