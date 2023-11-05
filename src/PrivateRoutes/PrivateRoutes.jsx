import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { RotatingLines } from "react-loader-spinner";


const PrivateRoutes = ({ children }) => {
    const { loading, user } = UseAuth()
    const location = useLocation()
    if (loading)
        return <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />

    if (!user) {
        return <Navigate state={location.pathname} to={'/logIn'}></Navigate>
    }
    return children

};

export default PrivateRoutes;