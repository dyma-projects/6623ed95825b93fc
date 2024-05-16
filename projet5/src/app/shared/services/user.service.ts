import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  public users$: BehaviorSubject<String[]> = new BehaviorSubject(["tintin", "remi", "godfrey"]);

  addUser(name: string) {
    this.users$.next(this.users$.getValue().concat([name]));
    console.log(this.users$);
    console.log(name);
    
  }

  constructor() { }
}
