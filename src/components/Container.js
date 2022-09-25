import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link, } from 'react-router-dom'
import SignUpForm from "./SignUpForm.js"
import FormNavbar from "./FormNavbar.js"
function Container() {
  return (
    <Router>
<div>
<FormNavbar/>


<Routes>
   <Route path='/SingUpForm'></Route>
   </Routes>


<SignUpForm/>
</div>
</Router>
  )
}

export default Container