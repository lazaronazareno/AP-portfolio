export interface Person {
  name: string,
  lastName:string,
  birth:string,
  nationality:string,
  tel?:number,
  address?:string,
  mail:string,
  about_me:string,
  ocupation:string,
  photo_url:string,
  background_url:string,
  repo_url:string,
  linkedin_url:string,
}

export interface Experience {
  id:number,
  position : string,
  company : string,
  mode : string,
  isActual : boolean,
  date_init : Date,
  date_end : Date,
  description : string,
  photo_url : string
}

export interface Stack {
  id:number,
  name: string,
  photo_url: string
}

export interface Study {
  id:number,
  name: string,
  description: string,
  school: string,
  photo_url: string,
  date_init: Date,
  date_end: Date,
}

export interface Proyect {
  id:number,
  name:string,
  stack:string,
  description:string,
  year_made:Date,
  photo_url:string,
  repo_url:string,
  deploy_url:string,
}