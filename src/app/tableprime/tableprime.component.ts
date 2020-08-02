import { Component, OnInit, Input, Output } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { PacoteTree } from './tablerow.model';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-tableprime',
  templateUrl: './tableprime.component.html'
})
export class TableprimeComponent implements OnInit {


  @Input()
  pacotes: TreeNode[]


  res: TreeNode[]
  res2: TreeNode[]

  constructor() { }
  listaPacotes: TreeNode[]

  ngOnInit(): void {

  }

}
