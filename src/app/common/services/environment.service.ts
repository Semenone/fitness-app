import { Injectable } from '@angular/core';

@Injectable()
export class EnvironmentService {
    public get baseUrl(): string {
        return window['BASE_URL'];
    }
}
