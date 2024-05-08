import React from 'react'
import './RightSidebar.css'
import pen from '../../assets/pen-solid.svg'
import comment from '../../assets/comment-alt-solid.svg'
import blacklogo from '../../assets/stack-overflow.svg'

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The overflow blog</h4>
      <div className='right-sidebar-div-1'>  
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width='18' />
          <p>Ops teams are pets, not cattle (Ep. 562)
sponsored post</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width='18' />
          <p>When setting up monitoring, less data is better (Ep. 563)</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>  
        <div className='right-sidebar-div-2'>
          <img src={comment} alt="comment" width='18' />
          <p>Improving the copy in the close modal and post notices - 2023 edition</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt="comment" width='18' />
          <p>New blog post from our CEO Prashanth: Community is the future of AI</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blacklogo} alt="blacklogo" width='18' />
          <p>Temporary policy: ChatGPT is banned</p>
        </div>
      </div>


      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>  
        <div className='right-sidebar-div-2'>
          <p>38</p>
          <p>Review our technical responses for the 2023 Developer Survey</p>
        </div>

        <div className='right-sidebar-div-2'>
          <p>20</p>
          <p>Content Discovery initiative April 13 update: Related questions using a...</p>
        </div>

        <div className='right-sidebar-div-2'>
          <p>14</p>
          <p>The [protection] tag is being burninated</p>
        </div>
      </div>
    </div>
  )
}

export default Widget