import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.css']
})
export class ArtistInfoComponent implements OnInit {

  ArtistData: any = [];
  ArtistEvent:any = [];

  constructor(private artistService: ArtistService) { 
         
     this.ArtistData = this.artistService.ArtistInfo            //getting Artist Info from service
       
  }

  ngOnInit(): void {
  }

  getArtistEvent(username:string) {             //Sending request to service for Event
  
   this.artistService.getEvent(username)
    .subscribe(
      (response:any) => {                           //next() callback
        console.log('response received')
        console.log(response)
        this.ArtistEvent = response.map((x:any) => {
          return {
            Venue: x.venue.name,
            City: x.venue.city,
            Country: x.venue.country,
            date: x.datetime
          }
        })
       
        
      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
      },
      )
    
  }
  

}
