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

    about = `Développeur web spécialisé en frontend, je coiçois et développe des applications zeb modernes; interactives et perfomantes. Je trvaille principalement avec JavaScript et TypeScript en utilisant de frameworks comme Angular et React pour créer des interfaces dynamique connectées à des API.  
    
    \n \n \n \n
    
    À mon quotidien, j'utilise également Tailwind CSS et Git afin de maintenir un workflow de développement structuré et collaboratif. J'ai déjà participé à la conception de plusieurs projets zeb incluant lùintegration d'API, la gestion de données et le déploiement d'applications. 

    \n \n \n

    Passioné par  l'ingénierie logicille et l'apprentissage  continu, je poursuis actuellement l'élargissement de mes compétence vers le backend. Je consolide notamment mes connaissances en Python, SQL et Spring Boot afin d'évoluer vers uj profil de développeur full-stack.
    
    `

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
