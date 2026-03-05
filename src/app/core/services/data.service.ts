import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IFormation, IGallery, IProject, ISkill, IStudent } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private skillApi = environment.skillApiUrl
    private projectApi = environment.projectApiUrl
    private galleryApi = environment.galleryApiUrl
    private studentApi = environment.studentApiUrl

    constructor (private http: HttpClient) {}

    getSkills(): Observable<ISkill[]>{
        return this.http.get<ISkill[]>(this.skillApi)
    }

    getProject(): Observable<IProject[]>{
        return this.http.get<IProject[]>(this.projectApi)
    }

    getGallery(): Observable<IGallery[]>{
        return this.http.get<IGallery[]>(this.galleryApi)
    }

    getStudent(): Observable<IStudent[]>{
        return this.http.get<IStudent[]>(this.studentApi)
    }

    // getStudents(): Observable {
    //     return this.http.get(this.studentApi)
    // }

    // getFormation(): Observable<IStudent<IFormation>>{
    //     return this.http.get<IStudent<IFormation>>(this.studentApi)
    // }
}
