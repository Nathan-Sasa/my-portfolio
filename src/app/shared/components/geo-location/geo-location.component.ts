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

	public initMap(): void {


		// let dark = false

		this.themeService.isDark$.subscribe(isDark => {
			let dark = signal(isDark)
			console.log("signal dark: ", dark())

			this.map = new maplibregl.Map({
				container: 'mapContainer',
				// style: 'https://demotiles.maplibre.org/style.json',
				// style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
				// style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
				style: dark() ? map_style_dark : map_style_light,
				center: [15.2663, -4.4419], // les coordonées de kinshasa
				zoom: 11
			})

			// les controls
			this.map.addControl(new maplibregl.NavigationControl())

			// custom icon marker
			const el = document.createElement('div');
			el.style.width = '20px';
			el.style.height = '20px';
			el.style.backgroundColor = '#4f57c4';
			el.style.borderRadius = '50%'
			el.style.border = '2px solid #fff'

			const marker = new maplibregl.Marker({color: 'var(--color-clr-btn)' })
				.setLngLat([15.2663, -4.4419])
				.addTo(this.map);

			//popup infos 
			const popup = new maplibregl.Popup({ 
				offset: 25,
				closeButton: false,
				// closeOnClick: false
				})
				.setHTML(
					`<h3 class="text-clr-accent font-mono font-semibold"></h3>
					<img src="" class="w-44 h-24 rounded-lg object-center my-2" alt="Map Marker" />
					<p>Kinshasa, RDC</p>
					`
				);
			marker.setPopup(popup);

			// Marker Hover effect
			const markerElement = marker.getElement();
			markerElement.addEventListener('mouseenter', () => popup.addTo(this.map).setLngLat([15.2663, -4.4419]));
			markerElement.addEventListener('mouseleave', () => popup.remove());

			// =======================================================


			// this.map = new maplibregl.Map({
			// 	container: 'mapContainer',
			// 	center: [15.2663, -4.4419], //
			// 	zoom: 11,
			// 	style: dark() ? map_style_dark : map_style_light
			// })
	
			// this.map.addControl(new maplibregl.NavigationControl())
	
			// const el = this.document.createElement('div')
			// el.style.height = '20px'
			// el.style.width= '20px'
			// el.style.background = 'var(--color-clr-btn)'
			// el.style.borderRadius = '50%'
			// el.style.border = '2px solid var(--color-clr-accent-violet-opacity)'

			
	
			// const marker = new maplibregl.Marker({color: '#4f57c4' })
			// 	.setLngLat([15.2663, -4.4419])
			// 	.addTo(this.map);

			
			// const popup = new maplibregl.Popup({
			// 	offset: 25,
			// 	closeButton: true,
			// 	closeOnClick: false
			// })
	
			// popup.setHTML(
			// 	`<h3 class="text-clr-title font-accent">Nathan BIkuta</h3>`
			// )
			// marker.setPopup(popup)
	
			// const markerElement = marker.getElement()
			// markerElement.addEventListener('mouseenter', () => popup.addTo(this.map).setLngLat([15.2663, -4.4419]))
			// markerElement.addEventListener('mouseleave', ()=> popup.remove())
		})

		// this.map.on('load', () => {

		// })
	}


}
