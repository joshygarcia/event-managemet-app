import React from 'react'
import { TextInput } from "@tremor/react";

function Register() {
  return (
    <div>
      <TextInput placeholder='Name' className=''/>
      <TextInput placeholder='Email' className=''/>
      <TextInput placeholder='Password' className=''/>
    </div>
  )
}

export default Register