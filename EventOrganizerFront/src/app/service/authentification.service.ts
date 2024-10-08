import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthentificationService {
    isConnected: boolean = false;

    constructor() {}

    login(userId: number, userName: string) {
        localStorage.setItem("sessionUserName", userName);
        localStorage.setItem("sessionUserId", userId.toString())
    }

    logout() {
        localStorage.clear();
    }

    isAuthenticated(): boolean {
        return Boolean(localStorage.getItem('sessionUserName') && localStorage.getItem('sessionUserId'));
    }

    getUsername(): string {
        return String (localStorage.getItem("sessionUserName"));
    }
    getId(): number {
        return Number(localStorage.getItem("sessionUserId"));
    }
}
