import React from 'react'
import './post.scss';

export default function Post() {
  return (
    <div className="post">
        <img 
            src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
            alt="" 
            className="postImg" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ut, doloribus? Facilis fuga vel nihil laudantium consequuntur 
            vero exercitationem illum amet qui distinctio atque, minima doloremque.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ut, doloribus? Facilis fuga vel nihil laudantium consequuntur 
            vero exercitationem illum amet qui distinctio atque, minima doloremque.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ut, doloribus? Facilis fuga vel nihil laudantium consequuntur 
            vero exercitationem illum amet qui distinctio atque, minima doloremque.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ut, doloribus? Facilis fuga vel nihil laudantium consequuntur 
            vero exercitationem illum amet qui distinctio atque, minima doloremque.
        </p>
    </div>
  )
}
