import React from 'react'
import Emoji from '../../components/Emoji'
import './style.css'

const Post = props => {
  return (
    // <div>Post <Emoji symbol="🌃" label="shooting-stars" /></div>
    <section className="container">
      <div className="blogPost">Blog Post</div>
      <div className="sidebar">Sidebar</div>
    </section>
  )
}

export default Post
