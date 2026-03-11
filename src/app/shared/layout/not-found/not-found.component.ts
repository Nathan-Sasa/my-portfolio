import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
	selector: 'app-not-found',
	imports: [
		RouterModule,
		CommonModule
	],
	templateUrl: './not-found.component.html',
	styleUrl: './not-found.component.css',
})
export class NotFoundComponent {

	linkRoute = [
		{
			route: '/landing',
			title: 'Accueil',
		},
		{
			route: '/portfolio',
			title: 'Portfolio',
		},
		{
			route: '/about',
			title: 'À propos',
		},
		{
			route: '/contact',
			title: 'Contact',
		},
	]
}
