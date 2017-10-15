import { Injectable } from "@angular/core";

@Injectable()
export class SessionService {
    private readonly TOKEN_KEY: string = 'token';

    public save(token: string): void {
        sessionStorage.setItem(this.TOKEN_KEY, token);
    }

    public load(): string {
        return sessionStorage.getItem(this.TOKEN_KEY);
    }

    public delete(): void {
        sessionStorage.removeItem(this.TOKEN_KEY);
    }
}