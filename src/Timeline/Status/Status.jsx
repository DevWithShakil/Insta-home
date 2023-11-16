import React from 'react'
import "./status.css"
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Status() {
  return (
    <div className='status'>
      <div className="status__header">
        <div className="status__headerAuthor">
        <Avatar>R</Avatar>
        shakil_khan ˙ <span>14h</span>

        </div>

        <MoreHorizIcon />
      </div>
        <div className="status__image">
          <img src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?w=740&t=st=1700148905~exp=1700149505~hmac=5412a43268cdb22225f5ec85d260904e0e651272254b9def707589ca7ae6b9af" alt="" />
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
          Liked by 1110 People
        </div>
    </div>
  )
}

export default Status;
