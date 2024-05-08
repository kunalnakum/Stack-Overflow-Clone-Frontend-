import React from 'react'
import {Link , useLocation , useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import Questions from './Questions'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1 ;
    const navigate = useNavigate()

  var questionList = [{
    _id:'1',
    upVotes:3,
    downVotes:2,
    noOfAnswers:2,
    questionTitel:"What is a function ?",
    questionBody:"It meant to be",
    questionTags:["javascript","node js","react js","mongo db" ],
    userPosted: "mano",
    userId:1,
    askedOn: "jan 1",
    answer :[{
      answerBody:"Answer",
      userAnswered:'kumar',
      answeredOn : "jan 2",
      userId: 2,
    }]
  },{
    _id:'2',
    upVotes:3,
    downVotes:2,
    noOfAnswers:0,
    questionTitel:"What is a function ?",
    questionBody:"It meant to be",
    questionTags:["javascript","R","Python" ],
    userPosted: "mano",
    userId:1,
    askedOn: "jan 1",
    answer :[{
      answerBody:"Answer",
      userAnswered:'kumar',
      answeredOn : "jan 2",
      userId: 2,
    }]
  },{
    _id:'3',
    upVotes:3,
    downVotes:2,
    noOfAnswers:0,
    questionTitel:"What is a function ?",
    questionBody:"It meant to be",
    questionTags:["javascript","R","Python" ],
    userPosted: "mano",
    userId:1,
    askedOn: "jan 1",
    answer :[{
      answerBody:"Answer",
      userAnswered:'kumar',
      answeredOn : "jan 2",
      userId: 2,
    }]
  }]

  
    const redirect = () => {
        alert("login or signup to ask question ")
        navigate('/Auth')
    }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Question </h1> : <h1>All Questions</h1>
        }
        <Link to={user === null ? redirect() : '/AskQuestion'} className='ask-btn'> Ask Question </Link>
      </div>
      <div>
        {
          questionList === null ? 
          <h1>Loding...</h1> : 
          <>
            <p>{questionList.length} question</p>
            <QuestionList questionList = {questionList} />
              
            
          </>
          
          
        }
      </div>
    </div>
  )
}

export default HomeMainbar