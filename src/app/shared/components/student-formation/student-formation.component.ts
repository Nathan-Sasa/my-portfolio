import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, InfoIcon } from 'lucide-angular';
import { IFormation, IStudent } from '../../../core/interfaces/interfaces';
import { DataService } from '../../../core/services/data.service';
import { GeoLocationComponent } from '../geo-location/geo-location.component';
import { ScrollAnimDirective } from '../../directive/scroll-anim.directive';

@Component({
	selector: 'app-student-formation',
	imports: [
		CommonModule,
		LucideAngularModule,
		GeoLocationComponent,
		ScrollAnimDirective
	],
	templateUrl: './student-formation.component.html',
	styleUrl: './student-formation.component.css',
})
export class StudentFormationComponent implements OnInit {

	student: IStudent[] = []

	icons = {
		about: InfoIcon
	}

	constructor(
		private dataService: DataService
	) {}

	ngOnInit(): void{
		this.loadStudent()
	}

	loadStudent(): void{
		
		this.dataService.getStudent().subscribe({
			next: (data) =>{
				this.student = data
			}
		})
	}
}
