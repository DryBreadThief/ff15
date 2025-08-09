import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Home,
    CommonModule,
    Navbar,
    Footer,
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('ff15');

  ngOnInit(): void {
    initFlowbite();
  }
}

