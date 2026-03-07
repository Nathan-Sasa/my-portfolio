import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, ElementRef, OnInit, inject, signal } from '@angular/core';
import { LucideAngularModule, MapPin } from 'lucide-angular';
import { AppTheme, ThemeAppService } from '../../../core/services/themeApp.service';
import { isPlatformBrowser, DOCUMENT } from "@angular/common";
import { ScrollAnimDirective } from '../../directive/scroll-anim.directive';

import maplibregl from 'maplibre-gl'

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
export class GeoLocationComponent implements OnInit, AfterViewInit {

	private document = inject(DOCUMENT)

	icons = {
		location: MapPin
	}

	@ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>

	map!: maplibregl.Map ;


	constructor(
		private themeService: ThemeAppService
	) {}
// "themeAppService.themeDisplay() === appTheme.System"
	ngOnInit(): void {
		// this.loadMap()
		// this.initMap()
		console.log('current',this.themeService.current)
	}

	// loadMap(){
	// 	this.themeService.isDark$.subscribe(isDark => {
	// 		if(!this.map) return
			
	// 		this.map.setStyle(
	// 			isDark ? map_style_dark : map_style_light
	// 		)
	// 	})
	// }

	ngAfterViewInit(): void {
		this.initMap()
	}

	initMap(): void {


		// let dark = false

		this.themeService.isDark$.subscribe(isDark => {
			// dark = isDark

			// container: this.mapContainer.nativeElement,
			this.map = new maplibregl.Map({
				container: 'mapContainer',
				center: [15.2663, -4.4419],
				zoom: 10,
				style: isDark ? map_style_dark : map_style_light
			})
	
			this.map.addControl(new maplibregl.NavigationControl())
	
			const el = this.document.createElement('div')
			el.style.height = '20px'
			el.style.width= '20px'
			el.style.background = 'var(--color-clr-btn)'
			el.style.borderRadius = '50%'
			el.style.border = '2px solid var(--color-clr-accent-violet-opacity)'
	
			const marker = new maplibregl.Marker({color: 'var(#0080FF)'})
				.setLngLat([15.2663, -4.4419])
				.addTo(this.map)
	
	
			const popup = new maplibregl.Popup({
				offset: 25,
				closeButton: true,
				closeOnClick: false
			})
	
			.setHTML(
				`<h3 class="text-clr-title font-accent">Nathan BIkuta</h3>`
			)
			marker.setPopup(popup)
	
			const markerElement = marker.getElement()
			markerElement.addEventListener('mouseenter', () => popup.addTo(this.map).setLngLat([15.2663, -4.4419]))
			markerElement.addEventListener('mouseleave', ()=> popup.remove())
		})

		// this.map.on('load', () => {

		// })
	}


}
