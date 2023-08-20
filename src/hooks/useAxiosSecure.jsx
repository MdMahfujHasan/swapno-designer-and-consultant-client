import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://swapno-designer-and-consultant-server.vercel.app'
})

const useAxiosSecure = () => {

    useEffect(() => {
        axiosSecure.interceptors.request.use(

        )
    })
    return (
        <div>

        </div>
    );
};

export default useAxiosSecure;