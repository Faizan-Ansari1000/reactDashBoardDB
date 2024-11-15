import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";


export default function Posts() {
    const location = useLocation();
    const [user, setUser] = useState([]);

    const deleteList = (i) => {
        user.splice(i, 1)
        setUser([...user])
    }

    useEffect(() => {
        const dataSave = JSON.parse(localStorage.getItem("postsNew")) || [];

        if (location.state?.data) {
            const newUser = location.state.data;
            const existData = dataSave.some(user => user.id === newUser.id);

            if (!existData) {
                dataSave.push(newUser);
                localStorage.setItem("postsNew", JSON.stringify(dataSave));
            }
        }

        setUser(dataSave);
    }, [location.state]);

    return (
        <>
            <div className="border rounded-lg mb-4">
                <header className="bg-black text-white flex justify-between items-center p-4">
                    <div className="text-start">
                        <h1 className="text-xl sm:text-2xl md:text-3xl">Users</h1>
                    </div>
                    <div className="text-end">
                        <Link to={'/DashBoard/PostsForm'} className="text-white hover:text-cyan-400 text-sm sm:text-base md:text-lg">Feed</Link>
                    </div>
                </header>
            </div>

              {/* Card Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {user.map((x, i) => (
                    <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* User ID at the top */}
                        <div className="p-4 bg-gray-100 text-sm text-gray-600">
                            User ID: {x.id}
                        </div>

                        {/* Image in the middle */}
                        <div className="relative">
                            <img src={x.image} alt={x.title} className="w-full h-40 object-cover" />
                        </div>

                        {/* Title at the bottom */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{x.title}</h3>
                        </div>

                        {/* Delete button at the bottom right */}
                        <div className="p-4 flex justify-end">
                            <button
                                onClick={() => deleteList(i)}
                                className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
                            >
                                <MdDelete className="text-xl" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
