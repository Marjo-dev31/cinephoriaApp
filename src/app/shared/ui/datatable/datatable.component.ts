import { Component, computed, input, output, signal } from '@angular/core';
import { ColumnInterface } from '../../models/column.interface';
import { CdkTableModule } from '@angular/cdk/table';


@Component({
    selector: 'app-datatable',
    standalone: true,
    imports: [CdkTableModule],
    templateUrl: './datatable.component.html',
})
export class DatatableComponent {
    displayColumns = input.required<ColumnInterface[]>();
    data =
        input.required<[]>();

    onEditItem = output();

    dataSource = computed(() => this.data());
    columnKeys = computed(() => [
        ...this.displayColumns().map((column) => column.key),
        'action',
    ]);

    editItem(item: any) {
        this.onEditItem.emit(item);
    }
}
