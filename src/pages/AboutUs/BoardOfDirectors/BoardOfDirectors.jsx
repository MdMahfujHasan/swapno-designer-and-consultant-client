import useEmployees from "../../../hooks/useEmployees";
import DirectorCard from "./DirectorCard";

const BoardOfDirectors = () => {
    const [employees] = useEmployees();
    const directors = employees.filter(employee => employee.role === "Director");
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-8">
            {
                directors.map(director => <DirectorCard
                    key={director._id}
                    director={director}
                ></DirectorCard>)
            }
        </div>
    );
};

export default BoardOfDirectors;