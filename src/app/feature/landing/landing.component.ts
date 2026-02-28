import { Component, ViewChild, ElementRef } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { WorkComponent } from '../../shared/components/work/work.component';
import { SkillComponent } from '../../shared/components/skill/skill.component';
import { ProjectComponent } from '../../shared/components/project/project.component';
import { MeComponent } from '../../shared/components/me/me.component';

@Component({
	selector: 'app-landing',
	imports: [
		HeaderComponent,
		HeroComponent,
		WorkComponent,
		SkillComponent,
		ProjectComponent,
		MeComponent
	],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.css',
})
export class LandingComponent {

	@ViewChild('project', {static: false}) project!: ElementRef
	scrollToProject(): void {
		if(this.project){
			this.project.nativeElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}else{
			console.log("#project non trouvé")
		}
	}
}
