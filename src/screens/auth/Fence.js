import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom'
import Admin from '../admin/Admin'
import User from '../admin/User'
import Login from '../auth/Login'
import CircularProgress from '@material-ui/core/CircularProgress';
import isSuperUser from '../../promises/IsSuperUser'

function Fence(){

  const [status, setStatus] = useState(true)
  const [stop, setStop] = useState(true)
  const [iamSuperUser, setIamSuperUser] = useState(false)

  const evaluate = async () => {
    const auth = await localStorage.getItem('auth')

    if(auth == null || auth == '' || auth == false){setStatus(false)}

    const superUser = await isSuperUser()
    if(superUser === true){
      setIamSuperUser(true)
    }


    setStop(false)
  }

  if(stop){
    evaluate()
  } 
  


  return (
    <div>
      {stop ? (
          <CircularProgress />
      ) : (
        <div>
           {status ? (
             <div>
               {iamSuperUser ? ( <Admin /> ): <User />}
             </div>
            ) : (
              <Login />
            )}
        </div>
      )}
    </div>
  );

}

export default Fence

