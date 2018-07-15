import { Component, OnInit, OnDestroy } from '@angular/core';

//this isn't by def, we need to add it while addimg a service
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  
public allBlogs;
  constructor(public blogHttpService:BlogHttpService) {
    console.log('home constructor called')
  
   }

  ngOnInit() {
    console.log('home OnInit called')

    //for normal services
    //this.allBlogs = this.blogHttpService.getAllBlogs();

    //handling observables when using http service
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
        data => {
          console.log(data)
          this.allBlogs=data["data"]
        },

        error =>{
          console.log("some error occured");
          console.log(error.errorMessage);
        }
    )
    console.log(this.allBlogs)
  }
  ngOnDestroy() {
    console.log('home destroyed')

  }
}
