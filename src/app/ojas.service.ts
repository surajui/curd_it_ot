import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OjasService {

  constructor(private http:HttpClient) { }

 all_user(){
   return this.http.get('http://localhost:3000/posts')
 }
new_user(a){
  return this.http.post('http://localhost:3000/posts',a)
}
del_user(s){
  return this.http.delete('http://localhost:3000/posts/'+s)
}
up_user(s){
  return this.http.put('http://localhost:3000/posts/' + s.id, s)
}


 get_user(){
   return this.http.get('http://localhost:3000/profile')
 }


}
