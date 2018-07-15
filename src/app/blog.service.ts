import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  public currentBlog;

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2018-03-29T04:49:42.189Z",
      "created": "2018-03-29T04:49:42.189Z",
      "tags": [],
      "author": "Pranav",
      "category": "angular",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>Welcome to blog !!!!<\/h1>",
      "description": "hi hello",
      "title": "title1"
    },
    {
      "blogId": "2",
      "lastModified": "2018-03-29T04:51:43.263Z",
      "created": "2018-03-29T04:51:43.263Z",
      "tags": [
        
      ],
      "author": "sourav",
      "category": "category2",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "body 2 <br> implemented ng2-toastr",
      "description": "dsvdsv",
      "title": "title2"
    },
    {
      "blogId": "3",
      "lastModified": "2018-04-04T18:24:10.381Z",
      "created": "2018-04-04T18:24:10.381Z",
      "tags": [
        
      ],
      "author": "shubham singh",
      "category": "Technical",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h2>angular4 <\/h2>",
      "description": "checking...",
      "title": "This is my blog"
    }]

  constructor() { 
    console.log('service was called')
  }

  //home
 public getAllBlogs() : any{
   return this.allBlogs;
 }


 //blog-view
 public getSingleBlogInformation(currentBlogId)
  {
    for(let blog of this.allBlogs)
    {
      if(blog.blogId == currentBlogId)
      this.currentBlog = blog;
    }
    console.log(this.currentBlog);
    return this.currentBlog
  }
}
