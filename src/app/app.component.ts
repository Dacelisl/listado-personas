import { Component, Injectable, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  title = 'Listado de personas';

  ngOnInit(): void {
    initializeApp({
      apiKey: 'AIzaSyA9FcDqt-4uUMP-I8JlZITHBCgHeTINL24',
      authDomain: 'listadopersonas-angular.firebaseapp.com',
    });
  }
  isLogin() {
    return this.loginService.isLogin();
  }
  logOut(){
    this.loginService.logOut();
  }
}
