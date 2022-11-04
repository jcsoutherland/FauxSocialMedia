import React from 'react'
import './rightBar.scss'

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions For You</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <span>Jane Doe</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <span>Jane Doe</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className='item'>
          <span>Latest Activities</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <p>
                <span>Jane Doe</span> liked a post
              </p>
            </div>
            <span>2 min ago</span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <p>
                <span>Jane Doe</span> liked a comment
              </p>
            </div>
            <span>5 min ago</span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <p>
                <span>Jane Doe</span> posted
              </p>
            </div>
            <span>8 min ago</span>
          </div>
        </div>
        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='profile image'
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
