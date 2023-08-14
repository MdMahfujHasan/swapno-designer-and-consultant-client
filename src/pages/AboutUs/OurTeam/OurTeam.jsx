import EmployeeCard from "./EmployeeCard";
import useEmployees from "../../../hooks/useEmployees";

const OurTeam = () => {
    const [employees] = useEmployees();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-y-4">
            {
                employees.map(employee => <EmployeeCard
                    key={employee._id}
                    employee={employee}
                ></EmployeeCard>)
            }
        </div>
    );
};

export default OurTeam;