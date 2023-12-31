import React from 'react';

export default function Profile(props) {
  const src = '/abteilungs-page-exp/img/' + props.srcName
  const twitter = 'https://www.twitter.com/' + props.twitter
  const instagram = 'https://www.instagram.com/' + props.instagram
  return (
      <div className="profile">
        {
          props.srcName ?   
          <img className='profile-img' src={src}></img>
          : <div style={{height: (props.rolle? "4px": "112px")}}></div>
        }
        <h2>{props.name}</h2>
        {props.rolle ? 
          <h4>{props.rolle}</h4>
          : <></>
        }
        {
          props.instagram ? 
            <a href={instagram} target="_blank">
              <img className='profile-a-img' src='/abteilungs-page-exp/img/SPD_Instagram_rot-frei_RGB.png'></img>
            </a>
          : <></>
        }
        {
          props.twitter ? 
            <a href={twitter} target="_blank">
              <img className='profile-a-img' src='/abteilungs-page-exp/img/SPD_Twitter_rot-frei_RGB.png'></img>
            </a>
          : <></>
        }
      </div>
  );
}
