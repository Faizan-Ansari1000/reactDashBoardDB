import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";

export default function Album() {
    const location = useLocation();
    const [user, setUser] = useState([]);

    const deleteList = (i) => {
        user.splice(i, 1)
        setUser([...user])
    }

    useEffect(() => {
        const dataSaved = JSON.parse(localStorage.getItem("photo")) || [];

        if (location.state?.data) {
            const newUser = location.state.data;
            const existData = dataSaved.some(user => user.id === newUser.id);

            if (!existData) {
                dataSaved.push(newUser);
                localStorage.setItem("photo", JSON.stringify(dataSaved));
            }
        }

        setUser(dataSaved);
    }, [location.state]);

    return (
        <>
            <div className="border rounded-lg mb-4">
                <header className="bg-black text-white flex justify-between items-center p-4">
                    <div className="text-start">
                        <h1 className="text-xl sm:text-2xl md:text-3xl">Users</h1>
                    </div>
                    <div className="text-end">
                        <Link to={'/DashBoard/PhotosForm'} className="text-white hover:text-cyan-400 text-sm sm:text-base md:text-lg">Feed</Link>
                    </div>
                </header>
            </div>

            {/* User Cards Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {user.map((x, i) => (
                    <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
                        <div className="relative flex justify-center">
                            {/* Circular User Image */}
                            <img
                                src={x.image}
                                alt={x.title}
                                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg mt-6"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <p className="text-gray-500 text-sm">User ID: {x.id}</p>
                            <h3 className="text-xl font-semibold text-gray-800 mt-2">{x.title}</h3>
                        </div>
                        <div className="p-4 flex justify-center">
                            <button
                                onClick={() => deleteList(i)}
                                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
                            >
                                <MdDelete className="inline-block mr-2 text-lg" />
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}
