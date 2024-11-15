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
        const dataSaved = JSON.parse(localStorage.getItem("albumUser")) || [];

        if (location.state?.data) {
            const userNew = location.state.data;
            const existData = dataSaved.some(user => user.id === userNew.id);

            if (!existData) {
                dataSaved.push(userNew);
                localStorage.setItem("albumUser", JSON.stringify(dataSaved));
            }
        }

        setUser(dataSaved);
    }, [location.state]);

    return (
        <>
            <div className="border rounded-lg mb-4">
                <header className="bg-black text-white flex justify-between items-center p-4 rounded-md">
                    <div className="text-start">
                        <h1 className="text-xl sm:text-2xl md:text-3xl">Users</h1>
                    </div>
                    <div className="text-end">
                        <Link to={'/DashBoard/AlbumForm'} className="text-white hover:text-cyan-400 text-sm sm:text-base md:text-lg">Feed</Link>
                    </div>
                </header>
            </div>

            <div className="overflow-x-auto rounded-md">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                <thead className="bg-cyan-800 text-white">
                    <tr>
                        <th className="py-3 px-4 text-left font-semibold text-sm sm:text-base md:text-lg">User Id</th>
                        <th className="py-3 px-4 text-left font-semibold text-sm sm:text-base md:text-lg">Title</th>
                        <th className="py-3 px-4 text-left font-semibold text-sm sm:text-base md:text-lg">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {user.map((x, i) => (
                        <tr
                            key={i}
                            className={`hover:bg-indigo-100 transition duration-300 ease-in-out ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                        >
                            <td className="py-3 px-4 text-sm sm:text-base md:text-lg">{x.id}</td>
                            <td className="py-3 px-4 text-sm sm:text-base md:text-lg">{x.title}</td>
                            <td className="py-3 px-4 flex justify-start items-center space-x-2">
                                <button
                                    onClick={() => deleteList(i)}
                                    className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out p-2 rounded-full hover:bg-red-100 focus:outline-none"
                                >
                                    <MdDelete className="text-lg sm:text-xl md:text-2xl" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}
