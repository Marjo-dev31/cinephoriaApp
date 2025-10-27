import { Component, computed, effect, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonFooter, IonContent } from '@ionic/angular/standalone';
import { DatatableComponent } from '../shared/ui/datatable/datatable.component';
import { OrderService } from '../order/order.service';
import { UserService } from '../user/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { DialogComponent } from '../shared/ui/dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { OrderInterface } from '../order/order.interface';
import { NgClass } from '@angular/common';


@Component({
    selector: 'app-myspace',
    templateUrl: './myspace.component.html',
    styleUrls: ['./myspace.component.scss'],
    imports: [IonContent, IonFooter, IonHeader, IonToolbar, DatatableComponent, RouterLink, NgClass],
})
export class MySpaceComponent {
    private readonly orderService = inject(OrderService);
    private readonly userService = inject(UserService);
    private readonly dialog = inject(Dialog);
    private readonly router = inject(Router)
    private currentDate = new Date();
    readonly currentUser = toSignal(this.userService.currentUser, {
        initialValue: {
            id: '',
            username: '',
            role: '',
            access_token: '',
        },
    });

    readonly orders = toSignal(
        this.orderService.getOrdersByUser(this.currentUser().id),
    );

    readonly previousShowing = computed(() => this.orders() ?? []);

    displayQrCode(order: OrderInterface) {
        const dialogRef = this.dialog.open(DialogComponent, {
            height: '400px',
            width: '400px',
            data: order,
        });
    }

    logout(){
        this.userService.logout()
        this.router.navigate(['/']);
    }

    displayColumns = signal([
        {
            label: 'Séances',
            key: 'showing',
            accessor: (row: any) => row,
        },
    ]);
}
