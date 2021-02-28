import React, {useState} from 'react';
import { Redirect } from 'react-router-dom'
import Admin from '../admin/Admin'
import Login from '../auth/Login'

function Fence(){

  const [status, setStatus] = useState(true)
  const [stop, setStop] = useState(true)

  const evaluate = async () => {
    const auth = await localStorage.getItem('auth')
    setStop(false)
    console.log('res', auth)

    if(auth == null || auth == '' || auth == false){setStatus(false)}
    console.log('state', status)

  }

  if(stop){
    evaluate()
  }


  return (
    <div>
        {status ? (
            <Admin />
        ) : (
            <Login />
        )}
    </div>
  );

}

export default Fence

