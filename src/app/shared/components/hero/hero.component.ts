import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter} from '@angular/core';
import { TextWriterDirective } from '../../directive/textwriter.directive';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-hero',
	imports: [
		CommonModule,
		RouterModule,
		TextWriterDirective
	],
	templateUrl: './hero.component.html',
	styleUrl: './hero.component.css',
})
export class HeroComponent {

	@Output() toProject = new EventEmitter<void>();
	scrollToProject(){
		this.toProject.emit()
	}

	stacks = [
		{
			name: 'Angular',
			icon: 'angularjs-fill',
			color: 'text-red-400'
		},
		{
			name: 'react',
			icon: 'reactjs-fill',
			color: 'text-clr-accent-linear-blue'
		},
		{
			name: 'JavaScript',
			icon: 'javascript-fill',
			color: 'text-clr-accent-yellow'
		},
		{
			name: 'Next.js',
			icon: 'nextjs-line',
			color: '[#000000]'
		},
		{
			name: 'GitHub',
			icon: 'github-fill',
			color: '[#000000]'
		},
		{
			name: 'Tailwind',
			icon: 'tailwind-css-fill',
			color: 'text-clr-accent-text'
		},
		{
			name: 'Copilot',
			icon: 'copilot-line',
			color: '[#000000]'
		},
		{
			name: 'Code',
			icon: 'code-s-slash-fill',
			color: '[#000000]'
		},
		{
			name: 'Claude',
			icon: 'claude-fill',
			color: 'text-clr-accent-orange'
		},
	]

	textWriter = [
		'Creative Problem Solver',
		'Frontend Stack Développeur',
		'Web Designer',
	]

}
