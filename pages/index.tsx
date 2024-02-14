import React from 'react'
import AddProperty from '@/components/templates/Home/AddProperty'
import Header from '@/components/templates/Home/Header'
import Introduction from '@/components/templates/Home/Introduction'
import Head from 'next/head'

export default function index() {
  return (
    <>
    <Head>
    <title>خانه - دابزهوم</title>
    </Head>
    
    <Header/>
    <Introduction/>
    <AddProperty/>
    </>
  )
}
