import { Injectable } from '@angular/core';

export interface Database{
  Name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModificationService {

  constructor() { }
}
