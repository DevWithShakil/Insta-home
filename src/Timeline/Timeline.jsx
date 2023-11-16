import React, { useState } from 'react';
import "./Timeline.css";
import Status from "./Status/Status";
import Suggestions from './Suggestions';

function Timeline() {
  const [statuses, setStatuses] = useState([
    {
      user: "shakil_",
      statusImage: "https://img.freepik.com/free-photo/young-adult-programmer-typing-away-computer-generated-by-ai_188544-29910.jpg?t=st=1700147284~exp=1700150884~hmac=6f4e65dbd09e73519bf4000951312d2e8e3896fe62c5dc7118758b754c3703b8&w=826",
      likes: "5130",
      timestamp: "5d"
    },
    {
      user: "allen_donald",
      statusImage: "https://img.freepik.com/free-photo/medium-shot-man-working-laptop_23-2150323514.jpg?w=740&t=st=1700153878~exp=1700154478~hmac=f807defb12626d1bb8dfd7d8ca45aab86f420fd9aa892bab9fece01732b7b12f",
      likes: "5475",
      timestamp: "21d"
    },
    {
      user: "john_smith",
      statusImage: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?w=740&t=st=1700153852~exp=1700154452~hmac=f263f9770ba6e6f645019bcd3d0450a3300d616adff8e6c5caec0ffa874ae736",
      likes: "9864",
      timestamp: "13h"
    },
    {
      user: "jesica_jerin",
      statusImage: "https://img.freepik.com/free-photo/lab-technician-doctor-analyzing-virus-evolution-looking-digital-tablet-team-scientists-conducting-vaccine-development-using-high-tech-researching-treatment-against-covid19-pandemic_482257-4011.jpg?w=900&t=st=1700153812~exp=1700154412~hmac=2c26d412eef994e6a503421f50a0cf0dc4873db0c61c995aa9fe46e4d5d2d925",
      likes: "2560",
      timestamp: "3h"
    },
  ]);

  return (
    <div className='timeline'>
      <div className="timeline__left">
        <div className="timeline__status">
          {statuses.map((status, index) => (
            <Status 
            key={index} 
            user={status.user} 
            statusImage={status.statusImage} 
            likes={status.likes} 
            timestamp={status.timestamp} />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
