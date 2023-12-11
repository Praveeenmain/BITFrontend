import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie';
const PrivateRoutes = () => {
  let auth = {'token':Cookies.get('jwt_token')}
return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )
}
export default PrivateRoutes