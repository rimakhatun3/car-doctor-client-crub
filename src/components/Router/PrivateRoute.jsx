import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    // const location = useLocation()
    console.log(location)
    const {user,loadding} = useContext(AuthContext)
    // const location = useLocation()
    // console.log(location)

if(loadding){
    return <div className="radial-progress text-primary text-center" style={{"--value":70}}>70%</div>
}

    if(user?.email){
        return children
    }
    return <Navigate to='/login' state={{from:location}}  replace></Navigate>
};

export default PrivateRoute;