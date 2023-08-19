// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";

// const useAdmin = () => {
//     const { user, loading } = useAuth();
//     const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//         }
//     })
//     return (
//         <div>

//         </div>
//     );
// };

// export default useAdmin;