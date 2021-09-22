import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../Model/Artist';
import { Event } from '../Model/Event';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  ArtistInfo: Artist[] = []
  ArtistEvent: Event[] = []
 

  constructor(private http: HttpClient) { }

  getArtist(artistname:string){                     //get request for Artist Info

    console.log('send request')
    return this.http.get('https://rest.bandsintown.com/artists/'+ artistname + '?app_id=510').subscribe(
      (response:any) => {                           
        console.log('response received')
        console.log(response)
        let Artist:any = {
          Name:response.name,
          image: response.image_url,
          facebook: response.facebook_page_url,
       }
  
       this.ArtistInfo.push(Artist)
           
      },
      (error) => {                              
        console.error('Request failed with error')
        
      })
  }

    getEvent(username:string) {                         //get request for Artist event 
      console.log('send request')
        return this.http.get('https://rest.bandsintown.com/artists/'+ username +'/events?app_id=510&date=17%2F09%2F2021')
        
    }
}
