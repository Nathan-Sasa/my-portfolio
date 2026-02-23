import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'landing',
        title: 'NathanDev - Portfolio',
        loadComponent: () => import('./feature/landing/landing.component').then(m => m.LandingComponent)
    },

    {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
    },
    {
        path: '**',
        title: '404 - Not Found',
        loadComponent: () => import('./shared/layout/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
