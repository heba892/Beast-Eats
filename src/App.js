import React from 'react'
import Navbar from './components/Navbar'
import BackG from './components/BackG'
import HeadLineCards from './HeadLineCards'
import Food from './components/Food'
import Category from './components/Category'
import SignUpSignIn from './components/SignUpSignIn'

const App = () => {
  return (
    <div>
    <Navbar></Navbar>
    <BackG></BackG>
    <HeadLineCards></HeadLineCards>
    <Food></Food>
    <Category></Category>
   
    <SignUpSignIn></SignUpSignIn>
      
    </div>
  )
}

export default App
