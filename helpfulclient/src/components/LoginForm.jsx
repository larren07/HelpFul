import React,{useState} from 'react'

function LoginForm({Login, error}) {
    const [details,setDetails] = useState({firstName:"",email:"",password:""})

    const submitHandler = e =>{
        e.preventDefault()
        Login(details)
     }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>LogIn</h2>
                <div className="form-group">
                    <label htmlFor="First Name">First Name:</label>
                    <input type="text" name="firstName" id="FirstName" onChange={e=>setDetails({...details,firstName:e.target.value})} value={details.firstName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="Email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password:</label>
                    <input type="password" name="password" id="Password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm
