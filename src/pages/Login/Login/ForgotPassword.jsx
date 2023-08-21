import { useForm } from 'react-hook-form';
import Modal from './Modal';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const ForgotPassword = ({ isOpen, onClose }) => {
    const { resetPassword } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        resetPassword(data.forgotEmail)
            .then(() => {
                Swal.fire(
                    'Link Sent',
                    'Check your email and reset password',
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
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="text-xl font-semibold text-slate-700 mb-4 text-center">Reset Password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="forgotEmail" className="block text-sm font-medium text-slate-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="forgotEmail"
                        placeholder="Your Email"
                        className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.forgotEmail ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-blue-500 focus:border-blue-500`}
                        {...register('forgotEmail', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.forgotEmail && <p className="mt-1 text-xs text-red-500">{errors.forgotEmail.message}</p>}
                </div>
                <button type="submit" className="w-full btn btn-primary">
                    Send a Password Reset Email
                </button>
            </form>
        </Modal>
    );
};

export default ForgotPassword;
