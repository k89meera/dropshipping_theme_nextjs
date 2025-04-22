import React from 'react'
import ProfileMain from './components/ProfileMain'
import ProfileAbout from './components/ProfileAbout'
import PopularProfile from './components/PopularProfile'
import PageTItle from '@/components/PageTItle'
import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Profile' }

const ProfilePage = () => {
  return (
    <>
      <PageTItle title="PROFILE" />
      <ProfileMain />
      <ProfileAbout />
      <PopularProfile />
    </>
  )
}

export default ProfilePage
