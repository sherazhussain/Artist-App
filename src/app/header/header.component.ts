import { Component, Input, OnInit } from '@angular/core';

import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ArtistName:string = ''
 

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
  }

 

  onSubmit(form:any){
    this.ArtistName = form.value.artistName;
    this.getArtistInfo();
  }


  getArtistInfo(){

    this.artistService.getArtist(this.ArtistName);
  }

}
