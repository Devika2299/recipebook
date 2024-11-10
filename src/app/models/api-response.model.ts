// src/app/models/api-response.model.ts
// export interface ApiResponse<T> {
//     success: boolean;
//     data: T;
//   }
// src/app/models/api-response.model.ts


export interface ApiResponse<T> {
  success: boolean;
  data: T | null;         // data can be null if not found
  message?: string;       // optional message for error or information
}

