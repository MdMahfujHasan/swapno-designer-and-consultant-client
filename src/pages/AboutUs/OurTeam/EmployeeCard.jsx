import Swal from "sweetalert2";
import useTheme from "../../../hooks/useTheme";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsInfoSquare } from 'react-icons/bs';

const EmployeeCard = ({ employee }) => {
    const { dark } = useTheme();
    const { _id, img, name, designation, role, mobile, education } = employee;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit, setValue } = useForm();

    const openModal = id => {
        setIsModalOpen(true);
        setValue("img", img);
        setValue("name", name);
        setValue("designation", designation);
        setValue("role", role);
        setValue("education", education);
        setValue("mobile", mobile);
        setValue("id", id);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onSubmit = data => {
        const id = data.id;
        console.log(id, data);
        fetch(`http://localhost:5000/employees/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        closeModal();
    };

    const handleDelete = id => {
        Swal.fire({
            title: 'Confirm',
            text: "You won't be able to revert this",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FB6F4C',
            cancelButtonColor: '#BCC0CD',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/employees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted',
                                'Your file has been deleted',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className={`card w-80 bg-base-100 shadow-xl ${dark ? "bg-indigo-900" : "bg-base-100"}`}>
            <figure className="px-6 pt-6">
                <img src={img} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className={`text-3xl font-thin ${dark ? "text-indigo-400" : "text-sky-400"}`}>{name}</h2>
                <div className={`${dark ? "text-primary-content" : "text-slate-500"}`}>
                    <p className="font-bold">{designation}</p>
                    <p>{education}</p>
                    <p>{mobile}</p>
                    <button onClick={() => openModal(_id)} className="btn btn-xs btn-success text-white mr-1">Edit</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error text-white">Delete</button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h3 className="font-semibold mb-4 text-primary flex items-center"><BsInfoSquare className="mr-1" /> Edit Employee Info</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                {...register("img")}
                                placeholder="Photo URL"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            <input
                                type="text"
                                {...register("name")}
                                placeholder="Name"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            <input
                                type="text"
                                {...register("designation")}
                                placeholder="Designation"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            <input
                                type="text"
                                {...register("role")}
                                placeholder="Role"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            <input
                                type="text"
                                {...register("education")}
                                placeholder="Education"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            <input
                                type="text"
                                {...register("mobile")}
                                placeholder="Mobile"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            <div className="flex justify-end">
                                <button type="submit" className="btn btn-xs btn-success text-white mr-1">Save</button>
                                <button type="button" onClick={closeModal} className="btn btn-xs bg-slate-400 hover:bg-slate-400 text-white">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default EmployeeCard;