import React,{useState,useContext} from 'react'
import axios from 'axios'
import {UserContext} from "../userComponent"
import '../css/form.css';

function ClientSignin() {
    const [client,setClient] = useState({firstName:"",email:"",password:""})

    const {signedIn,setSignedIn} = useContext(UserContext)

    
    const Logout = ()=>{
        setClient({firstName:"",email:"",password:""})
        setSignedIn({firstName:"",loggedIn:"False"})
    }

    const submitHandler = e =>{
        e.preventDefault()
        const user={
            fullName:client.firstName,
            email:client.email,
            password:client.password
        }

        axios.post('http://localhost:5000/client/login', user)
        .then(response=> {
            console.log(response);
            if(response.status === 200){
                setSignedIn({firstName:user.fullName,loggedIn:"True"})
            }
        }
        )
        .catch(err=>{
          alert("Invalid Credentials")
        })

        
    }

    return (
      <div>
        {signedIn.loggedIn !== "False" ? (
          <div className="welcome">
            <h2>
              Welcome, <span>{client.firstName}</span>
            </h2>
            <button className="logout" onClick={Logout}>Logout</button>
          </div>
        ) : (
          
          <form className="form" onSubmit={submitHandler}>
            <div className="form-inner">
              <h2>LogIn</h2>
              <div className="form-group">
                <label htmlFor="First Name">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  id="FirstName"
                  onChange={(e) =>
                    setClient({ ...client, firstName: e.target.value })
                  }
                  value={client.firstName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="Email"
                  onChange={(e) =>
                    setClient({ ...client, email: e.target.value })
                  }
                  value={client.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="Password"
                  onChange={(e) =>
                    setClient({ ...client, password: e.target.value })
                  }
                  value={client.password}
                />
              </div>
              <input type="submit" value="LOGIN" />
            </div>
          </form>
        )}
      </div>
    );
}

export default ClientSignin
