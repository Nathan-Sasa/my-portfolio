import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../../shared/layout/header/header.component';

@Component({
	selector: 'app-contact',
	imports: [
		CommonModule,
		HeaderComponent
	],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.css',
})
export class ContactComponent {

}
