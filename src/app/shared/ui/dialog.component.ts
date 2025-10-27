import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, effect, inject, signal } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-dialog',
    imports: [QRCodeComponent],
    template: `
        <div class="m-auto">
    <qrcode
        (qrCodeURL)="onChangeURL($event)"
        class="qrCode"
        [qrdata]="dataToQrCode"
        [allowEmptyString]="true"
        [alt]="'qrCode'"
        [ariaLabel]="'QRCode avec les données des billets'"
        [elementType]="'img'"
        [errorCorrectionLevel]="'M'"
        [margin]="4"
        [scale]="1"
        [title]="'Mes e-billets'"
        [width]="350"
    ></qrcode>
</div>
    `,
    styles: [
        `
            :host {
                display: block;
                background: #f7f7f7;
                border-radius: 8px;
                padding: 16px;
                box-shadow: 5px 5px 15px 5px #001d3d;
            }
        `,
    ],
})
export class DialogComponent {
    data = inject(DIALOG_DATA) || [];
    qrCodeDownloadLink: SafeUrl = '';

    dataToQrCode = `${this.data.showing.startAt}/${this.data.showing.endAt}/${this.data.showing.room.number}/${this.data.showing.movie.title}/${this.data.showing.room.projectionQuality.quality}/${this.data.seat.length}`
    effect = effect(()=> console.log(this.dataToQrCode))

    onChangeURL(url: SafeUrl) {
        this.qrCodeDownloadLink = url;
    }
}
