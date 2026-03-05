import { Component, OnInit, Renderer2, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { ISkill } from '../../../core/interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MenuIcon, XIcon } from 'lucide-angular';

// Particules imports
import  {  MoveDirection,  OutMode, Container, Engine }  from  "@tsparticles/engine";
import  {  NgParticlesService, NgxParticlesModule  }  from  "@tsparticles/angular"
import { loadSlim } from '@tsparticles/slim';
import { ScrollAnimDirective } from '../../directive/scroll-anim.directive';


@Component({
	selector: 'app-skill',
	imports: [
		CommonModule,
		ScrollAnimDirective,
		NgxParticlesModule,
		LucideAngularModule
	],
	templateUrl: './skill.component.html',
	styleUrl: './skill.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
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

	// Particles options
	particlesOptions = {
		fpsLimit: 120,
		pauseOnBlur: true,
		pauseOnOutsideViewport: true,
		responsive: [
			{
				maxWidth: 768,
				options: {
					particles: {
					number: { value: 30 } 
					}
				}
			}
		],
		fullScreen: {
			enable: false 
		},
		background: { 
			color: { 
				value: "transparent" 
			} 
		},
		particles: {
			color: { 
				value: "#ffffff" 
			},
			opacity: { 
				value: 0.5 
			},
			number: { 
				density: { 
					enable: true, area: 800 
				}, value: 50 
			},
			links: { 
				color: "#ffffff", 
				distance: 150, 
				enable: true, 
				opacity: 0.5, 
				width: 1 
			},
			move: { 
				direction: MoveDirection.none, 
				enable: true, outModes: { 
					default: OutMode.out 
				}, 
				speed: 2 
			},
			shape: { 
				type: "circle" 
				// type: "image",
				// options: {
				// 	image: {
				// 		src: "assets/img/logo/nathan-logo.webp",
				// 		width: 100,
				// 		height: 100
				// 	}
				// }
			},
			size: { 
				value: { 
					min: 1, 
					max: 5 
				} 
			},
		}
  	}

	// detectsOn: "window", 
	// events: {
	// 	onHover: {
	// 	enable: true,
	// 	mode: "parallax" // ou "bubble", "repulse", etc.
	// 	}
	// },
	// modes: {
	// 	parallax: {
	// 		enable: true,
	// 		force: 60,
	// 		smooth: 10
	// 	}
	// }

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
		this.backPop = false
		setTimeout(() => {
			this.closedPop = false
			this.selectedSkill = null
			this.renderer.removeClass(document.body, 'overflow-y-hidden')
			// console.log('selectedSkill : ', this.selectedSkill)
		}, 300)
	}
	handleLirePlus(): void {
		this.lirePlus = !this.lirePlus
	}

	// Particule
	// Moteur tsParticle
	public async particlesInit(engine: Engine): Promise<void> {
		await loadSlim(engine);
  	}
	public particlesLoaded(container: Container): void {
	  	// console.log("Particles container loaded", container);
	}


}
