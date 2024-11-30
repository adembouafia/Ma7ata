import { Voyage } from '@/components/chauffeur/voyageChart'
import React from 'react'
import ChauffeurNew from './chauffeur/new/page'

const Dashbord = () => {
  return (
    <div className='flex w-full'>
      
      <div className='w-full'>
      <Voyage/>
      </div>
    </div>
  )
}

export default Dashbord
