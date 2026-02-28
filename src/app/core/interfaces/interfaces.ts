export interface ISkill {
    id: number;
    name: string;
    icon: string;
    level: number;
    description: string;
    class: string;
}

export interface IProject{
    id: number
    name: string
    description: string
    image: string
    images: string[]
    stacks: string[]
    isTeam: string
    project: string
    link: string
    time: string
    date: string
}