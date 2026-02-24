import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { WorkComponent } from '../../shared/components/work/work.component';
import { SkillComponent } from '../../shared/components/skill/skill.component';

@Component({
	selector: 'app-landing',
	imports: [
		HeaderComponent,
		HeroComponent,
		WorkComponent,
		SkillComponent
	],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.css',
})
export class LandingComponent {

}
