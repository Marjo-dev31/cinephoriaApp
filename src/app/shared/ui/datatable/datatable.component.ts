import { Component, computed, input, output, signal } from '@angular/core';
import { ColumnInterface } from '../../models/column.interface';
import { CdkTableModule } from '@angular/cdk/table';
import { OrderInterface } from '../../../order/order.interface';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-datatable',
    standalone: true,
    imports: [CdkTableModule, DatePipe],
    templateUrl: './datatable.component.html',
})
export class DatatableComponent {
    displayColumns = input.required<ColumnInterface[]>();
    data =
        input.required<OrderInterface[]>();

    onEditItem = output<OrderInterface>();

    public readonly url = `${environment.serverUrl}/uploads/`;
    
    dataSource = computed(() => this.data());
    columnKeys = computed(() => [
        ...this.displayColumns().map((column) => column.key),
        'action',
    ]);

    editItem(item: any) {
     this.onEditItem.emit(item);
    }
}
