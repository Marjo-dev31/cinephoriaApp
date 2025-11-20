import { Component, DestroyRef, inject, signal } from '@angular/core';
import {
    IonHeader,
    IonToolbar,
    IonFooter,
} from '@ionic/angular/standalone';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormComponent } from '../shared/ui/form/form.component';
import { Validators } from '@angular/forms';
import { DynamicControl } from '../shared/models/form.interface';
import { LoginCredantialInterface } from '../user/user.interface';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [
        IonFooter,
        IonHeader,
        IonToolbar,
        FormComponent,
    ],
})
export class HomePage {
    private readonly userService = inject(UserService);
    private readonly router = inject(Router);
    private readonly destroyRef = inject(DestroyRef);
    readonly errorMessage = signal('');

    handleLogin(loginCredentials: LoginCredantialInterface) {
        this.userService
            .login(loginCredentials)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (response) => {
                    if (response) {
                        this.router.navigate(['myspace']);
                    }
                },
                error: (err) => this.errorMessage.set(err.message),
            });
    }

    readonly formModelConfig: DynamicControl[] = [
        {
            controlKey: 'mail',
            formFieldType: 'input',
            inputType: 'email',
            label: 'mail',
            validators: [Validators.required, Validators.email],
        },
        {
            controlKey: 'password',
            formFieldType: 'input',
            inputType: 'password',
            label: 'password',
            validators: [
                Validators.required,
                Validators.pattern(
                    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$',
                ),
            ],
        },
    ];
}
