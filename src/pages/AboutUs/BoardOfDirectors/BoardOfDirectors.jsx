import useEmployees from "../../../hooks/useEmployees";
import useTheme from "../../../hooks/useTheme";
import DirectorCard from "./DirectorCard";

const BoardOfDirectors = () => {
    const { dark } = useTheme();
    const [employees] = useEmployees();
    const directors = employees.filter(employee => employee.role === "Director");
    return (
        <>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-6 ${dark && "bg-blue-950"}`}>
                {
                    directors.map(director => <DirectorCard
                        key={director._id}
                        director={director}
                    ></DirectorCard>)
                }
            </div>
        </>
    );
};

export default BoardOfDirectors;