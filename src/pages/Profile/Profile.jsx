import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useForm, Controller } from 'react-hook-form';
import { useState } from "react";
import defaultUser from '../../assets/default-user.png';
import Messages from "../Shared/Messages/Messages";

const Profile = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const { user, updateUserProfile, emailVerification } = useAuth();
    const [hide, setHide] = useState(true);
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
    const onSubmit = data => {
        updateUserProfile(data.name, data.photo)
            .then(() => {
                reset();
                Swal.fire(
                    'Updated',
                    'Your profile has been updated',
                    'success'
                )
            })
            .catch(error => {
                console.log(error);
            })
    };
    return (
        <>
            <div className="flex justify-center gap-4 p-4">
                <div className="p-4">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-indigo-400 ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL || defaultUser} />
                        </div>
                    </div>
                    <h3 className="text-lg text-indigo-500 font-semibold">{user?.displayName}</h3>
                    <p className="text-slate-500"><small>{user?.email}</small></p>
                    <>
                        {user?.emailVerified ? <p className="text-green-400"><small>Email verified</small></p> :
                            <p className="text-red-400"><small>Email is not verified</small></p>}
                    </>
                    <button onClick={handleVerifyEmail} disabled={user?.emailVerified ? true : false} className="btn btn-xs btn-info text-white">Verify Now</button>
                </div>
                <div className="mt-4">
                    <button onClick={() => setHide(!hide)} className="btn btn-xs btn-primary text-white">Edit</button>
                    <form onSubmit={handleSubmit(onSubmit)} className={`max-w-md mx-auto p-4 border rounded-lg mt-4 ${hide ? "invisible" : "visible"}`}>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium text-sm text-slate-700">Name</label>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: 'Name is required', maxLength: { value: 120, message: 'Name must not exceed 120 characters' } }}
                                render={({ field }) => (
                                    <div>
                                        <input {...field} className="w-full border rounded py-1 px-2" />
                                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                                    </div>
                                )}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium text-sm text-slate-700">Photo URL</label>
                            <Controller
                                name="photo"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Photo URL is required',
                                    pattern: {
                                        value: /^https:\/\/.*/,
                                        message: 'Photo URL must start with "https://"'
                                    }
                                }}
                                render={({ field }) => (
                                    <div>
                                        <input {...field} className="w-full border rounded py-1 px-2" />
                                        {errors.photo && <p className="text-red-500 text-xs">{errors.photo.message}</p>}
                                    </div>
                                )}
                            />
                        </div>
                        <button type="submit" className="btn btn-xs btn-success text-white">Save</button>
                    </form>
                </div>
            </div>
            <Messages />
        </>
    );
};

export default Profile;