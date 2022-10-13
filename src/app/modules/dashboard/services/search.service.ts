import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, map, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(public http: HttpClient) { }

  searchRobert(date:string){
    return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+date).pipe(
      map((resp:any)=>{
        console.log(resp)
        return resp.photos.map((item:any)=>{
          return{
            title: item.camera.full_name,
            url: item.img_src,
            date: item.earth_date
            
          }
        })
        
        
      })
    )
  }

  searchApod(startDate: string,endDate :string){
    return this.http.get(`https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}`).pipe(
      map((resp:any)=>{
        return resp.map((item: any)=>{
          return {
            title: item.title,
            date: item.date,
            explanation: item.explanation,
            url: item.url,
            type: item.media_type,
            author: item.copyright,
            error: false
          }
        })
        
        
        
      }
      
      
      )
    )
  }
}
