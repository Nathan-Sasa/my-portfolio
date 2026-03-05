import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, InfoIcon } from 'lucide-angular';
import { DataService } from '../../../core/services/data.service';
import { ISkill } from '../../../core/interfaces/interfaces';
import { ScrollAnimDirective } from '../../directive/scroll-anim.directive';

@Component({
    selector: 'app-info',
    imports: [
        CommonModule,
        LucideAngularModule,
        ScrollAnimDirective
    ],
    templateUrl: './info.component.html',
    styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit{

    stacks: ISkill[] = [];
    selectedSkill:any = null
    // @ViewChild('scrollTop') scrollTop!: ElementRef
    // backPop: boolean = false
    // closedPop = false
    // lirePlus = false

    constructor(
        private dataService: DataService
    ) {}

    icons = {
        about: InfoIcon
    }

    about = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia suscipit dolore. Aspernatur sequi enim explicabo accusantium ex, facilis maxime nemo distinctio omnis natus perspiciatis voluptatum ratione quaerat laudantium deserunt laboriosam at ducimus necessitatibus molestias! Adipisci odit ea quam, quisquam nulla voluptas praesentium animi aliquid officia reiciendis accusamus laboriosam debitis neque qui saepe. Dolorem nesciunt aut iste iure vel cum reiciendis explicabo error dolores? Ex dolores, veritatis quod possimus consequatur voluptatem dolor explicabo nostrum non ipsa vero nam quam earum, aliquam molestiae beatae dolorem animi, consectetur labore est? Porro mollitia fugit voluptatum, modi eveniet autem expedita temporibus reprehenderit sint voluptatem!"

    exps = [
        {
            post: 'Title du post ici',
            description: 'ici c\'est la description du post',
            year: 'année',
            current: true
        },
        {
            post: 'Title du post ici',
            description: 'ici c\'est la description du post',
            year: 'année',
            current: false
        },
        {
            post: 'Title du post ici',
            description: 'ici c\'est la description du post',
            year: 'année',
            current: false
        },
        {
            post: 'Title du post ici',
            description: 'ici c\'est la description du post',
            year: 'année',
            current: false
        },
        {
            post: 'Title du post ici',
            description: 'ici c\'est la description du post',
            year: 'année',
            current: false
        },
    ]


    ngOnInit(): void {
        this.loadSkills()
    }

    loadSkills(): void {
		this.dataService.getSkills().subscribe({
			next: (data) => {
				this.stacks = data;
				// console.log('Skills loaded successfully:', this.skills);
			},
			error: (err) => {
				console.error('Error fetching skills:', err);
			}
		});	
	}

	// scrollToTop(): void {
	// 	if(this.scrollTop){
	// 		this.scrollTop.nativeElement.scrollIntoView({
	// 			behavior: 'smooth',
	// 			block: 'start'
	// 		})
	// 	}
	// }

	// fixeBodyScroll(): void{
    //     if(this.selectedSkill) {
    //         this.renderer.addClass(document.body, 'overflow-y-hidden');
    //     }else {
    //         this.renderer.removeClass(document.body, 'overflow-y-hidden')
    //     }
    // }

	// closePop(): void {
	// 	this.closedPop = true
	// 	setTimeout(() => {
	// 		this.backPop = false
	// 		this.closedPop = false
	// 		this.selectedSkill = null
	// 		this.renderer.removeClass(document.body, 'overflow-y-hidden')
	// 		// console.log('selectedSkill : ', this.selectedSkill)
	// 	}, 300)
	// }
	// handleLirePlus(): void {
	// 	this.lirePlus = !this.lirePlus
	// }
 
}
