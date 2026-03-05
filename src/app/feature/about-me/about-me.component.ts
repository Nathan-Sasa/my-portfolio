import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { ProfileComponent } from '../../shared/components/profile/profile.component';
import { InfoComponent } from '../../shared/components/info/info.component';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
// import { GeoLocationComponent } from '../../shared/components/geo-location/geo-location.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { StudentFormationComponent } from '../../shared/components/student-formation/student-formation.component';


// Particules imports
// import  {  MoveDirection,  OutMode, Container, Engine }  from  "@tsparticles/engine";
// import  {  NgParticlesService, NgxParticlesModule  }  from  "@tsparticles/angular"
// import { loadSlim } from '@tsparticles/slim';
// GeoLocationComponent,

@Component({
	selector: 'app-about-me',
	imports: [
		CommonModule,
		RouterModule,
		HeaderComponent,
		ProfileComponent,
		InfoComponent,
		StudentFormationComponent,
		GalleryComponent,
		FooterComponent
	],
	templateUrl: './about-me.component.html',
	styleUrl: './about-me.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent {

	app = signal({name: 'À propos'})

// // Particles options
// 	particlesOptions = {
// 		fpsLimit: 60,
// 		pauseOnBlur: true,
// 		pauseOnOutsideViewport: true,
// 		responsive: [
// 			{
// 				maxWidth: 768,
// 				options: {
// 					particles: {
// 					number: { value: 50 } 
// 					}
// 				}
// 			}
// 		],
// 		fullScreen: {
// 			enable: false 
// 		},
// 		background: { 
// 			color: { 
// 				value: "transparent" 
// 			} 
// 		},
// 		particles: {
// 			color: { 
// 				value: "#ffffff" 
// 			},
// 			opacity: { 
// 				value: 0.5 
// 			},
// 			number: { 
// 				density: { 
// 					enable: true, area: 800 
// 				}, value: 50 
// 			},
// 			links: { 
// 				color: "#ffffff", 
// 				distance: 150, 
// 				enable: true, 
// 				opacity: 0.5, 
// 				width: 1 
// 			},
// 			move: { 
// 				direction: MoveDirection.none, 
// 				enable: true, outModes: { 
// 					default: OutMode.out 
// 				}, 
// 				speed: 2 
// 			},
// 			shape: { 
// 				type: "circle" 
// 				// type: "image",
// 				// options: {
// 				// 	image: {
// 				// 		src: "assets/img/logo/nathan-logo.webp",
// 				// 		width: 100,
// 				// 		height: 100
// 				// 	}
// 				// }
// 			},
// 			size: { 
// 				value: { 
// 					min: 1, 
// 					max: 5 
// 				} 
// 			},
// 		}
// 	}

// 	// Particule
// 	// Moteur tsParticle
// 	public async particlesInit(engine: Engine): Promise<void> {
// 		await loadSlim(engine);
// 	}
// 	public particlesLoaded(container: Container): void {
// 		// console.log("Particles container loaded", container);
// 	}
}
