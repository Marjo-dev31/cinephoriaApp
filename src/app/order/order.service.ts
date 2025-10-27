import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { OrderInterface } from './order.interface';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    private readonly url = `${environment.serverUrl}/order`;
    private readonly http = inject(HttpClient);

    getOrdersByUser(id: string): Observable<OrderInterface[]>{
        return this.http.get<OrderInterface[]>(`${this.url}/${id}`)
    }
}
