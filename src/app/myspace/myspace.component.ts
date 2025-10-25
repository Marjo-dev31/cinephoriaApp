import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonFooter } from "@ionic/angular/standalone";
import { DatatableComponent } from '../shared/ui/datatable/datatable.component';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.scss'],
  imports: [IonFooter, IonHeader, IonToolbar, DatatableComponent]
})
export class MySpaceComponent {

displayColumns = signal([
  {
    label: 'Séances',
    key: 'showing',
    accessor: (row:any)=> row
  }
])

}
