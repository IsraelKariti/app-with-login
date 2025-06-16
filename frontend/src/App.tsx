import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import axios from 'axios'
import { supabaseClient } from './supabase/supabaseClient'
import LogoutButton from './buttons/Logout'
import UserCard from './cards/UserCard'

function App() {

  useEffect(()=>{
    (async ()=>{
      const session = await supabaseClient.auth.getSession();
      console.log('session: ', session);
      
      // const token = session.data.session?.access_token;
      
      // Send token to your NestJS backend
      // axios.get('/api/something-protected', {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   }
      // });
    })();
  })

  return (
    <>
    <LogoutButton/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <UserCard/>
    </>
  )
}

export default App
