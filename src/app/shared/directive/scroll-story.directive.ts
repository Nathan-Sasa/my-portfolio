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
		this.applyScene(progress)
	}

	private computeProgress(): number {
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight

		const raw = 1 - rect.top / vh

		return this.clamp(raw, 0, 1)
	}

	private applyScene(progress: number): void {
		const opacity = progress
		const y = 60 * (1 - progress)

		this.el.style.opacity = opacity.toString()
		this.el.style.transform = `translateY(${y}px) scale(${0.9 + progress * 0.1})`

		console.log(progress)
	}

	private clamp(v: number, min: number, max: number ): number {
		return Math.max(min, Math.min(max, v))
	}
}
