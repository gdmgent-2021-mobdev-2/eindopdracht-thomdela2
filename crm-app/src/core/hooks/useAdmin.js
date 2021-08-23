const { useAuth } = require("../../Components/Auth/AuthProvider");
const { isAdmin } = require("../modules/auth/utils");

const useAdmin = () => {
    const {user} = useAuth().user;
    return isAdmin(user.role);
}

export default useAdmin;