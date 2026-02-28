import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ScrollAnimDirective } from '../../directive/scroll-anim.directive';
import { DataService } from '../../../core/services/data.service';
import { IProject } from '../../../core/interfaces/interfaces';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { LucideAngularModule, LinkIcon, InfoIcon, XIcon } from 'lucide-angular';

@Component({
	selector: 'app-project',
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ScrollAnimDirective,
		LucideAngularModule
	],
	templateUrl: './project.component.html',
	styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {

	projects: IProject[] = []
	projectFiltered: IProject[] = []
	filterDefault: string = 'tout'
	selectedProject:any = null

	projectBackPop: boolean = false
	closedProjectPop = false


	@ViewChild('projectTop') projectTop!: ElementRef
	@ViewChild('scrollPop') scrollPop!: ElementRef

	constructor(
		private dataService: DataService,
		private renderer: Renderer2
	) {} 

	icons = {
		linkIcon: LinkIcon,
		info: InfoIcon,
		xIcon: XIcon
	}

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
	scrollToPop(): void {
		if(this.scrollPop){
			this.scrollPop.nativeElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	}

	fixeBodyScroll(): void{
        if(this.selectedProject) {
            this.renderer.addClass(document.body, 'overflow-y-hidden');
        }else {
            this.renderer.removeClass(document.body, 'overflow-y-hidden')
        }
    }

	closePop(): void {
		this.closedProjectPop = true
		setTimeout(() => {
			this.projectBackPop = false
			this.closedProjectPop = false
			this.selectedProject = null
			this.renderer.removeClass(document.body, 'overflow-y-hidden')
			// console.log('selectedSkill : ', this.selectedSkill)
		}, 300)
	}

}
