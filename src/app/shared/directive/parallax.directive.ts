import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

	@Input() speed: number = 0.3
	private el: HTMLElement

	constructor(
		ref: ElementRef<HTMLElement>
	) {
		this.el = ref.nativeElement
	}

	@HostListener('window:scroll')
	onScroll(): void {
		// console.log(window.scrollY)
		this.applyParallax(window.scrollY)
	}

	private applyParallax(scrollY: number): void {
		const y = scrollY * this.speed

		this.el.style.transform = `translate3d(0, ${y}px, 0)`
	}

}
