import { isAdmin } from '../../../../../core/modules/auth/utils';
import { useAuth } from '../../../../Auth/AuthProvider';

const AdminContainer = ({children}) => {
    const {user} = useAuth().user;
    const admin = isAdmin(user);

    if (admin) {
        return children;
    }
    return null;
}

export default AdminContainer;