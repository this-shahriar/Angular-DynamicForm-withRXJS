import { Component, OnInit } from '@angular/core';
import { ISignUp } from 'src/interfaces';
import { StatesService } from '../services/states.service';

@Component({
  selector: 'app-info-board',
  templateUrl: './info-board.component.html',
  styleUrls: ['./info-board.component.scss'],
})
export class InfoBoardComponent implements OnInit {
  signUpData: ISignUp;
  constructor(private _statesService: StatesService) {}

  ngOnInit(): void {
    this._statesService.state$.subscribe((data) => (this.signUpData = data));
  }
}
