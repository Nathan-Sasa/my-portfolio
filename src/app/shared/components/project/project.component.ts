import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimDirective } from '../../directive/scroll-anim.directive';

@Component({
	selector: 'app-project',
	imports: [
		CommonModule,
		ScrollAnimDirective
	],
	templateUrl: './project.component.html',
	styleUrl: './project.component.css',
})
export class ProjectComponent {

}
