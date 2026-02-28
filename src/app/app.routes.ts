import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'landing',
        title: 'NathanDev',
        loadComponent: () => import('./feature/landing/landing.component').then(m => m.LandingComponent)
    },
    {
        path: 'portfolio',
        title: 'NathanDev - Portfolio',
        loadComponent: () => import('./feature/portfolio/portfolio.component').then(m => m.PortfolioComponent)
    },
    {
        path: 'about',
        title: 'NathanDev - A propos',
        loadComponent: () => import('./feature/about-me/about-me.component').then(m => m.AboutMeComponent)
    },
    {
        path: 'contact',
        title: 'NathanDev - Contact',
        loadComponent: () => import('./feature/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: '**',
        title: '404 - Not Found',
        loadComponent: () => import('./shared/layout/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
