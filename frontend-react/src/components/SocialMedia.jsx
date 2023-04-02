import React from 'react'
import { BsTwitter, BsInstagram, BsFacebook, BsLinkedin, BsMedium } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className= "app__social">
      <div>
        <a href='https://twitter.com/kevoyout144' target="_blank">
        <BsTwitter />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/kevoben14/' target="_blank">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/profile.php?id=100006344356184' target="_blank">
          <BsFacebook />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/kelvinben/' target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://medium.com/@kevoyout144' target="_blank">
          <BsMedium />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia