import React from 'react'
import './singlePost.scss';

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                alt="" 
                className="singlePostImg"
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur ad.
                <div className="singlePostEdit">
                    <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Dino</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium ab accusamus dicta veritatis numquam vitae natus, inventore aspernatur quidem? Id explicabo nulla voluptatibus enim, odio dicta saepe minus consectetur, dolores illo maxime sit ipsum! Odit magni debitis sunt quaerat. Necessitatibus quibusdam amet ipsum minus repellendus quae officiis tempore. Aperiam dignissimos cumque fugiat corporis, quam id eos impedit rerum amet facilis? Quos officiis doloribus natus. Dolor a, neque exercitationem est officiis ullam hic laudantium, architecto minus illum, labore beatae maiores libero eveniet sequi aperiam sint dolore aliquam? Atque vero, velit harum debitis, et aut in architecto vel quis quibusdam dolore?
            </p>
        </div>
    </div>
  )
}
