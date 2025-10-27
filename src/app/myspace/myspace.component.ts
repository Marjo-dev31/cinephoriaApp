import { Component, computed, effect, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonFooter } from "@ionic/angular/standalone";
import { DatatableComponent } from '../shared/ui/datatable/datatable.component';
import { OrderService } from '../order/order.service';
import { UserService } from '../user/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.scss'],
  imports: [IonFooter, IonHeader, IonToolbar, DatatableComponent, RouterLink]
})
export class MySpaceComponent {
private readonly orderService = inject(OrderService)
private readonly userService = inject(UserService)
private currentDate = new Date()

readonly currentUser = toSignal(this.userService.currentUser, { initialValue: {
        id: '',
        username: '',
        role: '',
        access_token:''
    }})

readonly orders = toSignal(this.orderService.getOrdersByUser(this.currentUser().id))

readonly previousShowing = computed(()=> this.orders() ?? [])

effect = effect(()=> console.log(this.currentDate, this.currentUser(), this.orders(), this.previousShowing()))

displayColumns = signal([
  {
    label: 'Séances',
    key: 'showing',
    accessor: (row:any)=> row
  }
])

}
