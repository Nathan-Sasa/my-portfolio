import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollAnimDirective } from '../../directive/scroll-anim.directive';
import { DataService } from '../../../core/services/data.service';
import { IProject } from '../../../core/interfaces/interfaces';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms'

@Component({
	selector: 'app-project',
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ScrollAnimDirective
	],
	templateUrl: './project.component.html',
	styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {

	projects: IProject[] = []
	projectFiltered: IProject[] = []
	filterDefault: string = 'tout'

	@ViewChild('projectTop') projectTop!: ElementRef

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
				this.projectFiltered = data
				console.log("projects recus : ", data)
			},
			error: (err) => {
				console.log("err de reception de données : ", err)
			}
		})
	}

	getProjectFiltered() {
		return this.projects
			.filter(p => {
				const filterProject = this.filterDefault === 'tout' || p.isTeam === this.filterDefault
				return filterProject
			})
	}

	scrollTo(): void {
		if(this.projectTop){
			this.projectTop.nativeElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	}

}
