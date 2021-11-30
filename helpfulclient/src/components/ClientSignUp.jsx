import React,{useState}from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function ClientSignUp() {
    const navigate = useNavigate();
    const [client, setClient] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        city: "",
      });
    
      const submitHandler = (e) => {
        e.preventDefault();
        const user = {
          fullName: client.firstName,
          lastName: client.lastName,
          email: client.email,
          password: client.password,
          city: client.city,
        };

        axios.post('http://localhost:5000/client/register', user)
        .then(response=> {
            console.log(response);
            navigate("/clientsignin");
            
        }
        )
        .catch(err=>{
            alert("ERROR! Try Again")
        })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
          <div className="form-inner">
            <h2>Register</h2>
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
            <label htmlFor="Lat Name">Last Name:</label>
              <input
                type="text"
                name="firstName"
                id="FirstName"
                onChange={(e) =>
                  setClient({ ...client, lastName: e.target.value })
                }
                value={client.lastName}
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
            <div className="form-group">
              <label htmlFor="City">City:</label>
              <input
                type="text"
                name="cirt"
                id="city"
                onChange={(e) => setClient({ ...client, city: e.target.value })}
                value={client.city}
              />
            </div>
            <input type="submit" value="REGISTER" />
          </div>
        </form>
        </div>
    )
}

export default ClientSignUp
