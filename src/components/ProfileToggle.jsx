import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ActiveLink from "./ActiveLink";
import Swal from "sweetalert2";

const ProfileToggle = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const handleSignOut = () => {
        Swal.fire({
            title: 'Sign Out',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#F89176',
            cancelButtonColor: '#BCC0CD',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                navigate("/login");
            }
        })
    }
    return (
        <>
            {
                !user ? <ActiveLink key="login" to="/login" className="mr-5 font-semibold uppercase">Login</ActiveLink> :
                    <div className="dropdown dropdown-end">
                        <label className="btn btn-ghost btn-circle avatar">
                            <div tabIndex={0} className="w-12 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[2] p-2 ps-3 shadow menu menu-sm dropdown-content bg-slate-600 rounded-box w-56">
                            <Link className="text-white rounded-lg p-1 hover:bg-slate-500" to="/profile">Profile</Link>
                            <button onClick={handleSignOut} className="flex text-white rounded-lg p-1 hover:bg-slate-500">Logout</button>
                        </ul>
                    </div>
            }
        </>
    );
};

export default ProfileToggle;