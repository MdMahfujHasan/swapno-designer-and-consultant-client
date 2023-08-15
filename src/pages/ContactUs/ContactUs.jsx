import { useForm, Controller } from 'react-hook-form';
import SectionTitle from '../../components/SectionTitle';
import Swal from 'sweetalert2';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { FaMobileAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const ContactUs = () => {
    const { handleSubmit, control, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Delivered',
                        'Your message has been sent.',
                        'success'
                    )
                    reset();
                }
            })
    };
    const featuredIcon = "text-2xl mt-1 mr-4 bg-sky-400 hover:bg-sky-500 w-10 h-10 p-2 text-white";
    const title = "uppercase text-slate-700 font-semibold";
    const details = "text-slate-500";
    return (
        <>
            <SectionTitle>Contact Us</SectionTitle>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-screen-xl mx-auto p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-50 p-12 w-full md:w-1/2">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Name is required' }}
                            render={({ field }) => <input {...field} className="mt-1 p-2 border rounded-md w-full" />}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: 'Email is required', pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ }}
                            render={({ field }) => <input {...field} className="mt-1 p-2 border rounded-md w-full" />}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Mobile</label>
                        <Controller
                            name="mobile"
                            control={control}
                            rules={{
                                required: 'Mobile is required',
                                pattern: /^[0-9]*$/,
                                minLength: 11,
                                maxLength: 11,
                            }}
                            render={({ field }) => <input {...field} className="mt-1 p-2 border rounded-md w-full" />}
                        />
                        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <Controller
                            name="message"
                            control={control}
                            rules={{ required: 'Message is required' }}
                            render={({ field }) => <textarea {...field} className="mt-1 p-2 border rounded-md w-full h-20" />}
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
                </form>
                <div className='w-full md:w-1/2 space-y-5 bg-slate-50 p-6'>
                    <div className='flex'>
                        <FiMapPin className={featuredIcon} />
                        <div>
                            <h4 className={title}>Address</h4>
                            <p className={details}>Swapno Designer and Consultant 123 Dream Street, Dhaka, Bangladesh.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <FiPhone className={featuredIcon} />
                        <div>
                            <h4 className={title}>Phone</h4>
                            <p className={details}>+88 02 12345678</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <FaMobileAlt className={featuredIcon} />
                        <div>
                            <h4 className={title}>Mobile</h4>
                            <p className={details}>01716861356, 01716861356, 01716861356</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <MdOutlineEmail className={featuredIcon} />
                        <div>
                            <h4 className={title}>Email</h4>
                            <p className={details}>info@swapnodesign.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
