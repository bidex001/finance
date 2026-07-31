"use client"
import React from 'react'
import Header from './component/header'
import Main from './component/main'

const Page = () => {
  return (
    <div className='w-full h-full flex min-h-screen flex-col bg-white '>
      <Header/>
      <Main/>
    </div>
  )
}

export default Page