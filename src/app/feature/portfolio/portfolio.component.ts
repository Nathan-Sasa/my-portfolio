import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { IProject } from '../../core/interfaces/interfaces';
import { DataService } from '../../core/services/data.service';
import { ScrollAnimDirective } from '../../shared/directive/scroll-anim.directive';
import { ScrollStoryDirective } from '../../shared/directive/scroll-story.directive';
import { FooterComponent } from '../../shared/layout/footer/footer.component';

@Component({
	selector: 'app-portfolio',
	imports: [
		CommonModule,
		HeaderComponent,
		ScrollStoryDirective,
		FooterComponent
	],
	templateUrl: './portfolio.component.html',
	styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
	app = signal({name: 'Portfolio'})

	projects: IProject[] = []

	constructor(
		private dataService: DataService
	) {}

	ngOnInit(): void {
		this.loadProject()
	}

	loadProject(): void {
		this.dataService.getProject().subscribe({
			next: (data) => {
				this.projects = data
			},
			error: (err) => {

			}
		})
	}

}
