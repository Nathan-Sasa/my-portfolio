import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IProject, ISkill } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private skillApi = environment.skillApiUrl
    private projectApi = environment.projectApiUrl

    constructor (private http: HttpClient) {}

    getSkills(): Observable<ISkill[]>{
        return this.http.get<ISkill[]>(this.skillApi)
    }

    getProject(): Observable<IProject[]>{
        return this.http.get<IProject[]>(this.projectApi)
    }
}

// json data
// ,
//             {
//             "image1": "assets/img/images/project/nathandev-portfolio-laptop.png",
//             "image2": "assets/img/images/project/nathandev-portfolio-tablette.png",
//             "image3": "assets/img/images/project/nathandev-portfolio-mobile.png",
//             "image4": "assets/img/images/project/nathandev-portfolio-mini-mobile.png"
//             }

// {
//             "image1": "",
//             "image2": "",
//             "image3": "",
//             "image4": ""
//         },