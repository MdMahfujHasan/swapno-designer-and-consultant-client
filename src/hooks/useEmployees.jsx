import { useEffect, useState } from "react";

const useEmployees = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('https://swapno-designer-and-consultant-server.vercel.app/employees')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])
    return [employees];
};

export default useEmployees;