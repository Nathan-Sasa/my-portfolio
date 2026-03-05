import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'app-footer',
	imports: [
		CommonModule,
		RouterModule
	],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

	app = {
        name: 'athanDev',
        logo: 'assets/img/logo/nathan-logo.webp'
    }

	media = [
		{
			icon: 'ri-github-fill',
			link: ''
		},
		{
			icon: 'bi bi-facebook',
			link: ''
		},
		{
			icon: 'bi bi-instagram',
			link: ''
		},
		{
			icon: 'bi bi-linkedin',
			link: ''
		},
		{
			icon: 'bi bi-youtube',
			link: ''
		},
	]
}
