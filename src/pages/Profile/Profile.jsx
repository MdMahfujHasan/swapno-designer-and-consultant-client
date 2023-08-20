import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { user, emailVerification } = useAuth();
    const handleVerifyEmail = () => {
        emailVerification()
            .then(() => {
                Swal.fire(
                    'Sent',
                    'Check your email for verification link',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire(
                    'Error',
                    `${error.message}`,
                    'error'
                )
            })
    }
    return (
        <div className="flex justify-center gap-4">
            <div className="p-4">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-indigo-400 ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <h3 className="text-lg text-indigo-500 font-semibold">{user?.displayName}</h3>
                <p className="text-slate-500"><small>{user?.email}</small></p>
                <p>
                    {user?.emailVerified ? <p className="text-green-400"><small>Email verified</small></p> :
                        <p className="text-red-400"><small>Email is not verified</small></p>}
                </p>
                <button onClick={handleVerifyEmail} disabled={user?.emailVerified ? true : false} className="btn btn-xs btn-info text-white">Verify Now</button>
            </div>
            <div className="mt-4">
                <button className="btn btn-xs btn-success text-white">Edit</button>
            </div>
        </div>
    );
};

export default Profile;