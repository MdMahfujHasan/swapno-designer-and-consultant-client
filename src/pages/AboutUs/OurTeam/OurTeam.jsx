import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import useEmployees from "../../../hooks/useEmployees";
import useTheme from "../../../hooks/useTheme";
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { BsFileEarmarkText } from 'react-icons/bs';
import Swal from "sweetalert2";

const OurTeam = () => {
    const { dark } = useTheme();
    const [employees] = useEmployees();
    const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const openNewEmployeeModal = () => {
        setIsNewEmployeeModalOpen(true);
    };

    const closeNewEmployeeModal = () => {
        setIsNewEmployeeModalOpen(false);
    };

    const onSubmitNewEmployee = data => {
        console.log(data);
        const newEmployee = { img: data.newImg, name: data.newName, designation: data.newDesignation, role: data.newRole, education: data.newEducation, mobile: data.newMobile };
        Swal.fire({
            title: 'Add new employee?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6BE55A',
            cancelButtonColor: '#A8B5A7',
            confirmButtonText: 'Add'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:5000/employees', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newEmployee)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire(
                                'Added',
                                'New employee has been added',
                                'success'
                            )
                        }
                    })
            }
        })
        closeNewEmployeeModal();
    };

    return (
        <div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 ${dark && "bg-blue-950"}`}>
                {employees.map(employee => (
                    <EmployeeCard key={employee._id} employee={employee} />
                ))}
                <div className="flex justify-center items-center">
                    <AiOutlinePlusSquare onClick={openNewEmployeeModal} className="text-8xl text-emerald-300 hover:text-green-300 hover:cursor-pointer" />
                </div>
            </div>

            {isNewEmployeeModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h3 className="font-semibold mb-4 text-accent flex items-center">
                            <BsFileEarmarkText className="mr-1" /> Add New Employee
                        </h3>
                        <form onSubmit={handleSubmit(onSubmitNewEmployee)}>
                            <input
                                type="text"
                                {...register("newImg", {
                                    required: true,
                                    pattern: /^https:\/\//
                                })}
                                placeholder="Photo URL"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            {errors.newImg && <p className="text-error text-xs">Please provide a valid image URL starting with https://</p>}

                            <input
                                type="text"
                                {...register("newName", {
                                    required: true,
                                    maxLength: 120
                                })}
                                placeholder="Name"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            {errors.newName && <p className="text-error text-xs">Name is required and should not exceed 120 characters</p>}

                            <input
                                type="text"
                                {...register("newDesignation", {
                                    required: true,
                                    maxLength: 120
                                })}
                                placeholder="Designation"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            {errors.newDesignation && <p className="text-error text-xs">Designation is required and should not exceed 120 characters</p>}

                            <input
                                type="text"
                                {...register("newRole", {
                                    required: true,
                                    maxLength: 120
                                })}
                                placeholder="Role"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            {errors.newRole && <p className="text-error text-xs">Role is required and should not exceed 120 characters</p>}

                            <input
                                type="text"
                                {...register("newEducation", {
                                    required: true,
                                    maxLength: 120
                                })}
                                placeholder="Education"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            {errors.newEducation && <p className="text-error text-xs">Education is required and should not exceed 120 characters</p>}

                            <input
                                type="text"
                                {...register("newMobile", {
                                    required: true,
                                    pattern: /^[+]?\d{11,14}$/
                                })}
                                placeholder="Mobile"
                                className="input input-bordered w-full focus:outline-0 input-sm mb-3"
                            />
                            {errors.newMobile && <p className="text-error text-xs">Mobile number is required and should be between 11 and 14 digits</p>}

                            <div className="flex justify-end">
                                <button type="submit" className="btn btn-xs btn-success text-white mr-1">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={closeNewEmployeeModal}
                                    className="btn btn-xs bg-slate-400 hover:bg-slate-400 text-white"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OurTeam;
