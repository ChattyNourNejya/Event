import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginClubComponent } from './login-club/login-club.component';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { AuthAtudiantComponent } from './auth-etudiant/auth-atudiant.component';
import { AuthClubComponent } from './auth-club/auth-club.component';
import { FormClubComponent } from './form-club/form-club.component';
import { ProfileClubComponent } from './profile-club/profile-club.component';

@NgModule({
  declarations: [
    AppComponent, EventListComponent, NavbarComponent, HomeComponent, LoginClubComponent, LoginEtudiantComponent, AuthAtudiantComponent, AuthClubComponent, FormClubComponent, ProfileClubComponent],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
