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