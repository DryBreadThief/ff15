import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Home } from './home/home';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { FileNotFound } from './file-not-found/file-not-found';




@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Home,
    CommonModule,
    Navbar,
    Footer,
    FileNotFound,
    RouterLink,
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('PlatePlaza');

  ngOnInit(): void {
    initFlowbite();
  }
}

