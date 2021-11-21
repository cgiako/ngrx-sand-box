import { Component, OnInit } from '@angular/core';

export interface ResultItem {
  id: number;
  title: string;
  subtitle?: string;
}

enum ResultAction {
  analytics,
  favourite
}

@Component({
  selector: 'mw-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  itemList: ResultItem[] = [
    {id: 1, title: 'title', subtitle: 'subtitle'}, 
    {id: 2, title: 'test', subtitle: 'subtitle'},
    {id: 3, title: 'asdf', subtitle: 'subtitle'}
  ];

  resultActions = ResultAction;

  public selectedItem?: ResultItem;

  public selectedAction?: ResultAction;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(item: ResultItem, action: ResultAction): void {
    this.selectedItem = item;
    this.selectedAction = action
  }


}
