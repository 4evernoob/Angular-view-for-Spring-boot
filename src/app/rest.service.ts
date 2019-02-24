import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestService {
readonly endpoint = 'http://localhost:8080/user/';
readonly httpOptions = {
  headers: new HttpHeaders({
	  
    'Content-Type':  'application/json'
//'	Access-Control-Allow-Origin':' *'
  })
};
 constructor(private http: HttpClient) { }
 private extractData(res: Response) {
  let body = res;
  return body || { };
}
getProducts(): Observable<any> {
  return this.http.get(this.endpoint+"articles/" ).pipe(
    map(this.extractData));
}
getProduct(id): Observable<any> {
  return this.http.get(this.endpoint + 'article/' + id).pipe(
    map(this.extractData));
}

addProduct(product){
  console.log(product);
  console.log(this.endpoint + 'article/');
   this.http.post<any>(this.endpoint + 'article/', JSON.stringify(product), this.httpOptions).subscribe(
    tap((product) => console.log(`added product w/ id=${product}`)),
    catchError(this.handleError<any>('addProduct'))
  );
}

updateProduct(id, product)  {
	console.log('k '+id);
	console.log(JSON.stringify(product));
  this.http.put(this.endpoint + 'article' , JSON.stringify(product), this.httpOptions).subscribe(
    tap(_ => console.log(`updated product id=${product}`)),
    catchError(this.handleError<any>('updateProduct'))
  );
}

deleteProduct (id): Observable<any> {
	console.log(id);
  return this.http.delete<any>(this.endpoint + 'article/' + id, this.httpOptions).pipe(
    tap(_ => console.log(`deleted product id=${id}`)),
    catchError(this.handleError<any>('deleteProduct'))
);
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}

