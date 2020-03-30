import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class EnvironmentService {
    public get baseUrl(): string {
        return window['BASE_URL'];
    }
}
