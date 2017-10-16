import { Injectable } from "@angular/core";

@Injectable()
export class SessionService {
    private readonly TOKEN_KEY: string = 'token';

    public save(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    public load(): string {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    public delete(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }
}