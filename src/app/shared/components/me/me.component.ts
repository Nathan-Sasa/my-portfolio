import { Component } from '@angular/core';
import { CommonModule } from'@angular/common'
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-me',
	imports: [
		CommonModule,
		RouterModule
	],
	templateUrl: './me.component.html',
	styleUrl: './me.component.css',
})
export class MeComponent {

}
