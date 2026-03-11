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
			link: 'https://github.com/Nathan-Sasa',
			class: 'group-hover:text-clr-title dark:group-hover:text-clr-title-dark'
		},
		{
			icon: 'bi bi-facebook',
			link: '',
			class: 'group-hover:text-clr-accent-linear-blue'
		},
		{
			icon: 'bi bi-instagram',
			link: 'https://www.instagram.com/nathan_sasa00?igsh=MTZrYnAwdnd1dG9hbA%3D%3D&utm_source=qr',
			class: 'group-hover:text-clr-accent-red/80'
		},
		{
			icon: 'bi bi-linkedin',
			link: '',
			class: 'group-hover:text-clr-accent-linear-blue'
		},
		{
			icon: 'bi bi-youtube',
			link: '',
			class: 'group-hover:text-clr-accent-red'
		},
	]
}
