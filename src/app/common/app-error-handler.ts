import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert('An unexpected error occurred!');
        console.log('An unexpected error occurred!', error);
    }
}