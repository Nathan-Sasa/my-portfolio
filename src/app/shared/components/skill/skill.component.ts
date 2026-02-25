import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { ISkill } from '../../../core/interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MenuIcon, XIcon } from 'lucide-angular';


@Component({
	selector: 'app-skill',
	imports: [
		CommonModule,
		LucideAngularModule
	],
	templateUrl: './skill.component.html',
	styleUrl: './skill.component.css',
})
export class SkillComponent implements OnInit {

	skills: ISkill[] = [];
	selectedSkill:any = null
	@ViewChild('scrollTop') scrollTop!: ElementRef
	backPop: boolean = false
	icon = XIcon
	closedPop = false
	lirePlus = false

	constructor(
		private dataService: DataService,
		private renderer: Renderer2
	) { }

	ngOnInit(): void {
		this.loadSkills();
	}

	loadSkills(): void {
		this.dataService.getSkills().subscribe({
			next: (data) => {
				this.skills = data;
				// console.log('Skills loaded successfully:', this.skills);
			},
			error: (err) => {
				console.error('Error fetching skills:', err);
			}
		});	
	}

	scrollToTop(): void {
		if(this.scrollTop){
			this.scrollTop.nativeElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	}

	fixeBodyScroll(): void{
        if(this.selectedSkill) {
            this.renderer.addClass(document.body, 'overflow-y-hidden');
        }else {
            this.renderer.removeClass(document.body, 'overflow-y-hidden')
        }
    }

	closePop(): void {
		this.closedPop = true
		setTimeout(() => {
			this.backPop = false
			this.closedPop = false
			this.selectedSkill = null
			this.renderer.removeClass(document.body, 'overflow-y-hidden')
			console.log('selectedSkill : ', this.selectedSkill)
		}, 300)
	}
	handleLirePlus(): void {
		this.lirePlus = !this.lirePlus
	}

	// particul(): void {
	// 	const particule = document.createElement

	// 	let nbPart = 100
	// 	for(let i = 0; i > nbPart ; i++){

	// 	}
	// }
}
