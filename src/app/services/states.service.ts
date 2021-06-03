import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISignUp } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  private state = new Subject<ISignUp>();
  state$ = this.state.asObservable();
  setState = (data: ISignUp) => this.state.next(data);
}
