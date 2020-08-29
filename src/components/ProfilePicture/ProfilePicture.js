import React, { useState } from 'react'
import styles from './_ProfilePicture.module.scss'
import { getInitials } from '../../shared/utility'

const ProfilePicture = ({ user, style, heightWidth, history }) => {
  const [ isTall, setIsTall ] = useState(false)

  // Check if the image is portrait or landscape and apply correct style to img.
  const heighOrWide = e => setIsTall(e.target.clientWidth < e.target.clientHeight)

  return (
    <div 
      className={`${styles.profilePicture} ${!user.profile_picture && styles.initials}`} 
      style={{ ...style, height: heightWidth, width: heightWidth }} 
      onClick={() => history.push("/profile")}>
      {user.profile_picture ? 
        <img 
          id="profile-picture"
          alt="Profile" 
          style={isTall ? { width: heightWidth } : { height: heightWidth }} 
          src={user.profile_picture} 
          onLoad={e => heighOrWide(e)}
        /> 
      :
        <p>{getInitials(user)}</p>
      }
    </div>
  )
}

export default ProfilePicture