import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, ElementRef, OnInit, inject, signal } from '@angular/core';
import { LucideAngularModule, MapPin } from 'lucide-angular';
import { AppTheme, ThemeAppService } from '../../../core/services/themeApp.service';
import { isPlatformBrowser, DOCUMENT } from "@angular/common";
import { ScrollAnimDirective } from '../../directive/scroll-anim.directive';

const map_style_light = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
const map_style_dark = 'https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json'

@Component({
	selector: 'app-geo-location',
	imports: [
		CommonModule,
		LucideAngularModule,
		ScrollAnimDirective
	],
	templateUrl: './geo-location.component.html',
	styleUrl: './geo-location.component.css',
})
export class GeoLocationComponent implements OnInit {

	private document = inject(DOCUMENT)

	icons = {
		location: MapPin
	}

	@ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>

	// map: maplibregl.Map ;


	constructor(
		private themeService: ThemeAppService
	) {}
// "themeAppService.themeDisplay() === appTheme.System"
	ngOnInit(): void {
		this.loadMap()
	}

	loadMap(){
		// this.map.setStyle(
			// if(!map) return
			this.themeService.isDark$.subscribe(isDark => {
				isDark ? map_style_dark : map_style_light
			})
		// )

	}


}
