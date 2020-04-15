import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imageGallery';
  ImageList = [];

constructor()
{

  this.ImageList = [
    {id : 101, cat : "forest", img :"https://homepages.cae.wisc.edu/~ece533/images/airplane.png"},
    {id : 102, cat : "forest", img :"https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"},
    {id : 103, cat : "village", img :"https://homepages.cae.wisc.edu/~ece533/images/baboon.png"},
    {id : 104, cat : "forest", img :"https://homepages.cae.wisc.edu/~ece533/images/cat.png"},
    {id : 105, cat : "house", img :"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
    {id : 106, cat : "forest", img :"https://homepages.cae.wisc.edu/~ece533/images/peppers.png"},
    {id : 107, cat : "house", img :"https://homepages.cae.wisc.edu/~ece533/images/pool.png"},
    ]; 
}

  
// getDataBysearch(searchingValue)
// {
//   this.ImageList= this.ImageList.filter(s=>s.cat==searchingValue)
// }


}
