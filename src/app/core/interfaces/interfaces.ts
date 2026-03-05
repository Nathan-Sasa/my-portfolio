export interface ISkill {
    id: number;
    name: string;
    icon: string;
    level: number;
    description: string;
    class: string;
    image?: string
}

export interface IProject{
    id: number
    name: string
    description: string
    image: string
    images: IMage[]
    stacks: IStack[]
    isTeam: string
    project: string
    link: string
    time: string
    date: string
}

export interface IStack{
    stack: string
    class: string
}
export interface IMage{
    image: string
}

export interface IGallery{
    photo: string
}

export interface IStudent{
    id: number
    text:string
    formations: IFormation[]
    certifications: ICertificate[]
}
// formations: T[]
// certifications: T[]

export interface IFormation{
    domain: string
    option: string
    university: string
    grade: string
    year: string
}

export interface ICertificate{
    name: string
    site: string
    date: string
    current: string
}

// "name": "Introduction to SQL",
// "site": "SoloLearn",
// "date": "2025-02-11",
// "current": false