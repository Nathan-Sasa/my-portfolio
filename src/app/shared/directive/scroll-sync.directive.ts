import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollSync]'
})
export class ScrollSyncDirective {

	private el: HTMLElement
	
	constructor(
		private ref: ElementRef
	) { 
		this.el = ref.nativeElement
	}

	@HostListener('window:scroll')
	onScroll(): void {
		const p = this.progress()
		this.apply(p)
	}

	private progress(): number {
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight

		return this.clamp(1 - rect.top / vh, 0, 1)
	}

	private apply(p: number): void {
		const scale = this.map(p, 0, 1, 0.8, 1)
		const opacity = this.map(p, 0, 1, 0, 1)
		const rotate = this.map(p, 0, 1, -8, 0)

		this.el.style.opacity = opacity.toString()
		this.el.style.transform = `scale(${scale}) rotate(${rotate}deg)`
	}

	private map(
		v: number,
		inMin: number,
		inMax: number,
		outMin: number,
		outMax: number
	): number{
		return (v - inMin) * (outMax - outMin)
			/ (inMax - inMin) + outMin
	}

	private clamp(v: number, min: number, max: number) : number{
		return Math.max(min, Math.min(max, v))
	}

}
