import { Routes } from '@angular/router';
import { Home } from './home/home';
import { FileNotFound } from './file-not-found/file-not-found';

export const routes: Routes = [
    {path: 'home', component: Home},
    { path: '', redirectTo: 'home',  pathMatch: 'full' },
    { path: '**', component: FileNotFound}
];
