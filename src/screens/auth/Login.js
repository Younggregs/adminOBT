import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../../styles/Auth.css'
import MainLogo from '../../assets/imgs/MainLogo.png'
import Button from '../../components/Button'
import login from '../../promises/Login'
import signin from '../../store'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState('')
    const [showpassword, setShowpassword] = useState()
    const [flowershower, setFlowershower] = useState(false)
    const [success, setSuccess] = useState(false)
    const [err, setErr] = useState(false)
    const [error, setError] = useState('')
    const [email, setEmail] = useState(false)
    

    const onPhoneChanged = e => setPhone(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const _handleKeyDownSubmit = (e) => {
        if (e.key === 'Enter') {
          submit()
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const submit = async () => {

        setLoading(true)
        const message = await login(phone, password)
        if(message.code){
            setFlowershower(true)
            const res = await signin(phone, password)
            if(res){
              setSuccess(true)
            } 
        }else if(message.error_message){
            setErr(true)
            setError(message.error_message)
        }else{
            setErr(true)
            setError('Sorry something broke, could not complete the process')
        }

        setLoading(false)
  
    }

    return (
        <div className="auth-background">
            <div className="auth-container">
                <img src={MainLogo} width="160px" height="74px" alt="Logo" />
                <h1>Obuntu</h1><br /><br />
                <h3>Welcome to Admin Space</h3>
                <p>Proceed with login</p>
                <form onSubmit={handleSubmit}>
                    <div className="position-relative">
                        <span>Phone</span>
                        <input 
                            autoFocus 
                            type="text" 
                            name="phone" 
                            id="phone"
                            onChange={onPhoneChanged}
                        />
                    </div>
                    <div className="position-relative">
                        <span>Password</span>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Min. 6 characters" 
                            onChange={onPasswordChanged}
                            onKeyDown={(e) => _handleKeyDownSubmit(e)}/>
                    </div>
                    <div>
                        <p className="already"><Link to="/forgotpassword" className="sign">Forgot Password</Link></p>
                    </div>
                    <div className="mt-4 mb-3">
                        <Button handleClick={() => submit()} title={loading ? "Processing..." : "Continue"} />
                    </div>
                </form>
                

            <div>
            {success ? (
                <Redirect to={'/admin'} />
            ) : (
              <div />
            )}

            {err ? (
              <div>
                  <p style={{color: 'red', fontSize: 15}}>{error}</p>
              </div>
            ) : (
              <div />
            )}
        </div>
                

            </div>
        </div>
    )
}