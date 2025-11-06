import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    alert('Welcome to the Angular Fundamentals App!');
  }
  
}
