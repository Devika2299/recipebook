

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private userId: number | null = null; // Store user ID

//   constructor() {
//     // Optionally load user ID from local storage or other sources
//     this.userId = this.loadUserId();
//   }

//   // Simulated method to get user ID
//   getUserId(): number | null {
//     return this.userId;
//   }

//   // Simulated method to set user ID
//   setUserId(id: number): void {
//     this.userId = id;
//     // Optionally store user ID in local storage or other sources
//     this.saveUserId(id);
//   }

//   private loadUserId(): number | null {
//     // Load user ID from local storage (or return null if not found)
//     return parseInt(localStorage.getItem('userId') || '0', 10) || null;
//   }

//   private saveUserId(id: number): void {
//     // Save user ID in local storage
//     localStorage.setItem('userId', id.toString());
//   }
// }


// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: number | null; // Make userId nullable

  constructor() {
    const storedUserId = sessionStorage.getItem('userId');
    this.userId = storedUserId ? Number(storedUserId) : null; // Initialize to null if not found
  }

  getUserId(): number {
    if (this.userId !== null) {
      return this.userId; // Return the user ID
    }
    throw new Error("User not logged in."); // Handle user not logged in
  }

  // Other methods for login/logout can be added here
}
