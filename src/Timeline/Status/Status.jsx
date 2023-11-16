import React from 'react'
import "./status.css"
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Status({user,statusImage, likes, timestamp}) {
  return (
    <div className='status'>
      <div className="status__header">
        <div className="status__headerAuthor">
        <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
        {user} ˙ <span>{timestamp}</span>

        </div>

        <MoreHorizIcon />
      </div>
        <div className="status__image">
          <img src={statusImage} alt="" />
        </div>
        <div className="status__footer">
          <div className="status__footerIcon">
            <div className="status__iconMain">
              <FavoriteBorderIcon className='statusIcon'/>
              <ChatBubbleOutlineIcon className='statusIcon'/>
              <TelegramIcon className='statusIcon'/>
          
            </div>
            <div className="status__iconSave">
              <BookmarkBorderIcon className='statusICon'/>
            </div>
          </div>
          Liked by {likes} People
        </div>
    </div>
  )
}

export default Status;
