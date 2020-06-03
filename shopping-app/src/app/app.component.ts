import { Component, OnInit } from '@angular/core';
import Sample from "../assets/data.json"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopping-app';
  jsonCollection = Sample
  customOptionsForcarousel1 : any;
  brandCarousel = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin:100,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  watchCarousel = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin:100,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  customOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin:20,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  ngOnInit() {
    console.log(this.jsonCollection);    
    this.customOptionsForcarousel1= {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['next', 'prev'],
      margin:20,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 3
        },
        740: {
          items: 4
        },
        940: {
          items: 6
        }
      },
      nav: true
    }
  }
 

}
