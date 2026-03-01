import { Component } from '@angular/core';
import { CommonModule } from'@angular/common'
import { RouterModule } from '@angular/router';
import { ScrollAnimDirective } from '../../directive/scroll-anim.directive';

@Component({
	selector: 'app-me',
	imports: [
		CommonModule,
		RouterModule,
		ScrollAnimDirective
	],
	templateUrl: './me.component.html',
	styleUrl: './me.component.css',
})
export class MeComponent {

	me = {
		name: 'Nathan BIKUTA SASA',
		photo: 'assets/img/images/profile/nathan-profil.webp',
	}
}
