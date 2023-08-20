import Swal from "sweetalert2";

const MessageCard = ({ singleMessage }) => {
    const { _id, name, email, mobile, message } = singleMessage;
    const handleDelete = id => {
        Swal.fire({
            title: 'Delete Message?',
            text: "You won't be able to revert this",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#FF6767',
            cancelButtonColor: '#C5C5C5',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://swapno-designer-and-consultant-server.vercel.app/messages/${id}`, {
                    method: 'DELETE'
                })
                Swal.fire(
                    'Deleted',
                    'Message has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div className="rounded-lg w-full md:w-80 lg:w-96 bg-gradient-to-r from-indigo-200 to-indigo-400">
            <div className="card-body">
                <h2 className="text-xl text-indigo-600 font-bold">{name}</h2>
                <p><small><b>Email:</b> <span className="text-slate-700 font-semibold">{email}</span></small></p>
                <p><small><b>Mobile:</b> <span className="text-slate-700 font-semibold">{mobile}</span></small></p>
                <p><small><b>Message:</b> <span className="text-slate-700 font-semibold">{message}</span></small></p>
                <div>
                    <button onClick={() => handleDelete(_id)} className="bg-red-400 hover:bg-red-500 px-2 rounded text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MessageCard;
