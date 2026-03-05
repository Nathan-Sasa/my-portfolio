import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollStory]'
})
export class ScrollStoryDirective {

	private el: HTMLElement ;
	constructor(
		ref: ElementRef<HTMLElement>
	) { 
		this.el = ref.nativeElement
	}

	@HostListener('window:scroll')
	onScroll(): void {
		const progress = this.computeProgress()
		const o = this.OProgress()
		this.applyScene(progress, o)
	}

	private computeProgress(): number {
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight

		const raw = 0.8 - rect.top / vh

		return this.clamp(raw, 0, 1)
	}
	private OProgress(): number {
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight

		const raw = 1.5 - rect.top / vh

		return this.clamp(raw, 0, 1)
	}

	private applyScene(progress: number, o: number): void {
		const opacity = o
		const y = 60 * (1 - progress)

		// blur
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight
		const b = this.clamp(1.5 - rect.top / vh, 0, 1)

		this.el.style.opacity = opacity.toString()
		this.el.style.transform = `translateY(${y}px) scale(${0.9 + progress * 0.1})`

		this.el.style.filter = `blur(${this.map(b, 0, 1, 8, 0)}px)`
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

	private clamp(v: number, min: number, max: number ): number {
		return Math.max(min, Math.min(max, v))
	}
}
