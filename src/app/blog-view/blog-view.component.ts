import { Component, OnInit, OnDestroy,ViewContainerRef } from '@angular/core';

//to get parameter passed in the route which is not included by default
import{ActivatedRoute,Router} from '@angular/router';
import{ToastsManager} from 'ng2-toastr/ng2-toastr';

import {Location} from '@angular/common';

import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit, OnDestroy  {
  public currentBlog;
  
 

  constructor(private _route:ActivatedRoute, private router:Router,private blogService :BlogService,public blogHttpService:BlogHttpService,public toastr:ToastsManager, vcr:ViewContainerRef,public location:Location ) {
    console.log("blog-view constructor was called");
    this.toastr.setRootViewContainerRef(vcr)

   }

  ngOnInit() {
    console.log("blog-view ngOnInit was called");
    //getting the blogid from route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    
    //below method can be used for normal services without observables
    //this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
    //console.log(this.currentBlog)

    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data)
        this.currentBlog=data["data"]
      },

      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    )
  }

  

 
  public deleteThisBlog() :any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
        console.log(data)
        this.toastr.success('Blog Deleted Successfully','Success!')
        
        setTimeout(()=>{
          this.router.navigate(['/home'])
        },1500)
      },

      error => {
        console.log("some error occured")
        console.log(error.errorMessage)
        this.toastr.error('some error occured','error')
      }
    )

  }

  public goBackToPreviousPage(): any{
    this.location.back();
  }

  ngOnDestroy(){
    console.log('blog-view destroyed')
  }

}
