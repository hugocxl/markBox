import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pinned',
  templateUrl: './card-pinned.component.html',
  styleUrls: ['./card-pinned.component.scss']
})
export class CardPinnedComponent implements OnInit {

  @Input() pinnedNote: any;

  constructor() { }

  ngOnInit() {
  }

}
