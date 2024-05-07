import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login, signup } from "../../redux/actions";

const Auth = (props) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(props.title==='Signup'){
      dispatch(signup({email, pass}))
    }
    dispatch(login());
    navigate('/', { replace: true })

  }

  return (
    <div className="card text-center mx-auto mt-2" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-text">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={pass}
                onChange={(e)=> {setPass(e.target.value)}}
              />
            </div>

            <button type="submit" className="btn btn-primary m-2">
              Submit
            </button>
            <Link className="btn btn-success m-2" to ={props.title==='Login'? '/signup' : '/login'}>
              {props.title==='Login'? 'Sign Up' : 'Login'}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
