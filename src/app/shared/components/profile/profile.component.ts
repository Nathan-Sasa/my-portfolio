import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { LucideAngularModule, LocateIcon, MapPinIcon } from 'lucide-angular';

@Component({
	selector: 'app-profile',
	imports: [
		CommonModule,
		LucideAngularModule
	],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.css',
})
export class ProfileComponent {
	me = {
		photo: 'assets/img/images/profile/nathan-profil.webp',
		name: 'Nathan BIKUTA SASA',
		address: 'Kinshasa, République Démocratique du Congo',
		carer: 'Développeur Web / Frontend'
	}

	icons = {
		location: MapPinIcon
	}
}
