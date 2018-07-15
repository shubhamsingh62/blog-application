import { Component, OnInit, ViewContainerRef} from '@angular/core';

import{ActivatedRoute,Router} from '@angular/router';
import{ToastsManager} from 'ng2-toastr/ng2-toastr';

import {Location} from '@angular/common';

import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy","Drama", "Action", "Technology"]

  constructor(private _route:ActivatedRoute, private router:Router,private blogService :BlogService,public blogHttpService:BlogHttpService,public toastr:ToastsManager, vcr:ViewContainerRef,public location:Location ) {
    console.log("blog-view constructor was called");
    this.toastr.setRootViewContainerRef(vcr)

   }


 
 
  

  ngOnInit() {
    console.log("edit-view ngOnInit was called");
    //getting the blogid from route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data)
        this.currentBlog=data["data"]
        console.log("current blog is")
        console.log(this.currentBlog)
      },

      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    )
  }



  public editThisBlog():any{
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(

     
      data => {
        console.log("blog created")
        console.log(data)
        this.toastr.success('Blog Edited Successfully','Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId])
        },1500)
      },

      error => {
        console.log("some error occured")
        console.log(error.errorMessage)
        this.toastr.error('some error occured','error')
      }

    )
  }

}
