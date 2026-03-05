import { Component } from '@angular/core';
import { CommonModule } from'@angular/common'
import { RouterModule } from '@angular/router';
import { ScrollAnimDirective } from '../../directive/scroll-anim.directive';
import { ScrollStoryDirective } from '../../directive/scroll-story.directive'

// Particules imports
import  {  MoveDirection,  OutMode, Container, Engine }  from  "@tsparticles/engine";
import  {  NgParticlesService, NgxParticlesModule  }  from  "@tsparticles/angular"
import { loadSlim } from '@tsparticles/slim';

@Component({
	selector: 'app-me',
	imports: [
		CommonModule,
		RouterModule,
		ScrollAnimDirective,
		NgxParticlesModule,
		ScrollStoryDirective
	],
	templateUrl: './me.component.html',
	styleUrl: './me.component.css',
})
export class MeComponent {

	me = {
		name: 'Nathan BIKUTA SASA',
		photo: 'assets/img/images/profile/nathan-profil.webp',
	}

	// Particles options
	particlesOptions = {
		fpsLimit: 60,
		pauseOnBlur: true,
		pauseOnOutsideViewport: true,
		responsive: [
			{
				maxWidth: 768,
				options: {
					particles: {
					number: { value: 50 } 
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

	// Particule
	// Moteur tsParticle
	public async particlesInit(engine: Engine): Promise<void> {
		await loadSlim(engine);
  	}
	public particlesLoaded(container: Container): void {
	  	// console.log("Particles container loaded", container);
	}
}
