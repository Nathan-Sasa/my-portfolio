import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IGallery } from '../../../core/interfaces/interfaces';
import { DataService } from '../../../core/services/data.service';
import { LucideAngularModule, GalleryHorizontalIcon } from 'lucide-angular';
import { ScrollAnimDirective } from '../../../shared/directive/scroll-anim.directive'

@Component({
	selector: 'app-gallery',
	imports: [
		CommonModule,
		LucideAngularModule,
		ScrollAnimDirective
	],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {

	gallery: IGallery[] = []
	selectGallery: any = ''

	icons = {
		gallery: GalleryHorizontalIcon
	}

	constructor (
		private dateService: DataService
	) {}

	ngOnInit(): void {
		this.loadGallery()
	}

	loadGallery(): void{
		this.dateService.getGallery().subscribe({
			next: (data) => {
				this.gallery = data
			},
			error: (err) => {

			}
		})
	}

}
