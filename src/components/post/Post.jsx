import { React, useState } from 'react'
import './post.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Link } from 'react-router-dom'
import Comments from '../comments/Comments'

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false)

  //TEMPORARY
  const [liked, setLiked] = useState(false)

  return (
    <div className='post'>
      <div className='container'>
        <div className='user'>
          <div className='userInfo'>
            <Link
              to={`/profile/${post.userId}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img src={post.profilePic} alt='profile image' />
            </Link>
            <div className='details'>
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className='name'>{post.name}</span>
              </Link>
              <span className='date'>1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon style={{ cursor: 'pointer' }} />
        </div>
        <div className='content'>
          <p>{post.desc}</p>
          <img src={post.img} alt='' />
        </div>
        <div className='info'>
          <div className='item' onClick={() => setLiked(!liked)}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            Likes
          </div>
          <div className='item' onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            Comments
          </div>
          <div className='item'>
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  )
}

export default Post
