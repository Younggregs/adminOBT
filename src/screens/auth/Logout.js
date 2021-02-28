import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Logout extends React.Component {
    componentWillMount() {
        localStorage.setItem('auth', '')
        localStorage.setItem('auth', '')
    }

      render(){
          return(<Redirect to='/'/>)
      }
}