import { Injectable } from "@angular/core";
import { SessionService } from "./session.service";

@Injectable()
export class AuthenticationService {
    constructor(
        private sessionService: SessionService
    ) { }

    public login(username: string, password: string): boolean {
        if(!(username === 'elitsa' && password === '123')){
            return false;    
        }

        let jwtToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlbGl0c2FAYm9yb2ludmVzdC5jb20iLCJuYW1lIjoiZWxpdHNhIiwiYWRtaW4iOnRydWV9.Hr5hOhkUyRS5xu0bakawz8tTS1xvg47x5ZhiH8Mq7Go';

        this.sessionService.save(jwtToken);

        return true;
    }

    public logout(): void {
        this.sessionService.delete();
    }

    public isAuthenticated(): boolean {
        return this.sessionService.load() !== "";
    }
}