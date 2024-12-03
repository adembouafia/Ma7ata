import { Voyage } from '@/components/chauffeur/voyageChart';
import LoginForm from '@/components/login/loginForm';
import React from 'react';

const Dashbord = () => {
  return (
    <>
      <LoginForm />
      <div className='flex w-full'>
        <div className='w-full'>
          <Voyage />
        </div>
      </div>
    </>
  );
};

export default Dashbord;
