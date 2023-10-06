import React, { useContext} from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
const Login = () => {
const {googleSignIn,setUser} = useContext(AuthContext)
const navigate = useNavigate()

    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user
             setUser(loggedInUser)
             navigate('/')
        })
        .catch(error=>{
            console.log(error);
        })
    }

   
    return (
        <div className='text-center mt-10'>
            <h1 className='text-3xl font-bold'>Login with Google</h1>
             <button className='bg-blue-500 px-8 py-2 rounded-sm text-white mt-4' onClick={handleGoogleLogin} >Google login</button>
        </div>
    );
};

export default Login;