import { React, useContext } from 'react'
import './navBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { DarkModeContext } from '../../context/darkModeContext'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>flynnsocial</span>
        </Link>
        <HomeOutlinedIcon style={{ cursor: 'pointer' }} />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} style={{ cursor: 'pointer' }} />
        ) : (
          <DarkModeOutlinedIcon
            onClick={toggle}
            style={{ cursor: 'pointer' }}
          />
        )}
        <GridViewOutlinedIcon style={{ cursor: 'pointer' }} />
        <div className='search'>
          <SearchOutlinedIcon style={{ cursor: 'pointer' }} />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='right'>
        <PersonOutlineOutlinedIcon style={{ cursor: 'pointer' }} />
        <EmailOutlinedIcon style={{ cursor: 'pointer' }} />
        <NotificationsOutlinedIcon style={{ cursor: 'pointer' }} />
        <div className='user' style={{ cursor: 'pointer' }}>
          <img src={currentUser.profilePic} alt='profile image' />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
