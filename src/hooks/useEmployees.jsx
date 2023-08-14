import { useEffect, useState } from "react";

const useEmployees = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('/employees.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])
    return [employees];
};

export default useEmployees;