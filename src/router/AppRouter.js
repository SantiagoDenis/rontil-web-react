import { BrowserRouter } from "react-router-dom"
import { useLoginContext } from "../Context/LoginContext"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"




const AppRouter = () => {

    const {user} = useLoginContext()
    console.log("user router", user)

    return (
        <BrowserRouter>
            {
            user
                ? <PrivateRoutes/>
                : <PublicRoutes/>
            }
        </BrowserRouter>
    )
}

export default AppRouter