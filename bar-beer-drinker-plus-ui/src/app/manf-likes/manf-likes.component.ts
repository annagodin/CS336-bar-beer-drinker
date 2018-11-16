import { Component, OnInit } from '@angular/core';
import { ManfDetails } from '../manufacturer.service';
import { ManufacturerService } from '../manufacturer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manf-likes',
  templateUrl: './manf-likes.component.html',
  styleUrls: ['./manf-likes.component.css']
})
export class ManfLikesComponent implements OnInit {

 likes : ManfDetails[]
  manf : string

  constructor(private manfService: ManufacturerService, private route: ActivatedRoute) { 

    this.route.paramMap.subscribe((paramMap) => {
    this.manf = paramMap.get('manf');

    this.manfService.getManfLikes(this.manf).subscribe(
      data => {
        this.likes = data;
      }
    );
  });
}

  ngOnInit() {

  }

}
