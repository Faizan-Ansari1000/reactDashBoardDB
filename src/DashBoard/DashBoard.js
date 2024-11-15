import { Link, Route, Routes } from "react-router-dom";
import Album from './Album';
import Comments from './Comments';
import Photos from './Photos';
import Posts from './Posts';
import Todos from './Todos';
import User from './User';

import { IoMdAlbums } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa6";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { FiUploadCloud } from "react-icons/fi";
import { LuListTodo } from "react-icons/lu";
import { PiUsersFill } from "react-icons/pi";

import AlbumForm from "../formPages/AlbumForm";
import CommentsForm from '../formPages/CommentsForm';
import PhotosForm from '../formPages/PhotosForm';
import PostsForm from '../formPages/PostsForm';
import TodosForm from '../formPages/TodosForm';
import SignUp from "../Authentication/SignUp";

export default function DashBoard() {
    
    return (
        <div className="flex flex-col lg:flex-row h-screen bg-gray-100">

            {/* Sidebar */}
            <div className="bg-gradient-to-b from-[#000000] via-[#000000] to-[#000000] text-white w-full lg:w-1/4 p-6 hidden lg:block border-r-2 border-gray-700 rounded-md shadow-2xl">
                <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Dashboard</h2>
                <nav className="space-y-6">
                    <Link to={'/DashBoard/Album'} className="flex items-center p-2 rounded-lg hover:text-cyan-500 hover:scale-105 transition-all duration-200 ease-in-out">
                        <IoMdAlbums className="mr-4 text-2xl" />
                        Albums
                    </Link>
                    <Link to={'/DashBoard/Comments'} className="flex items-center p-2 rounded-lg hover:text-cyan-500 hover:scale-105 transition-all duration-200 ease-in-out">
                        <FaRegCommentDots className="mr-4 text-2xl" />
                        Comments
                    </Link>
                    <Link to={'/DashBoard/Photos'} className="flex items-center p-2 rounded-lg hover:text-cyan-500 hover:scale-105 transition-all duration-200 ease-in-out">
                        <TbPhotoSquareRounded className="mr-4 text-2xl" />
                        Photos
                    </Link>
                    <Link to={'/DashBoard/Posts'} className="flex items-center p-2 rounded-lg hover:text-cyan-500 hover:scale-105 transition-all duration-200 ease-in-out">
                        <FiUploadCloud className="mr-4 text-2xl" />
                        Posts
                    </Link>
                    <Link to={'/DashBoard/Todos'} className="flex items-center p-2 rounded-lg hover:text-cyan-500 hover:scale-105 transition-all duration-200 ease-in-out">
                        <LuListTodo className="mr-4 text-2xl" />
                        Todos
                    </Link>
                    <Link to={'/DashBoard/Users'} className="flex items-center p-2 rounded-lg hover:text-cyan-500 hover:scale-105 transition-all duration-200 ease-in-out">
                        <PiUsersFill className="mr-4 text-2xl" />
                        Users
                    </Link>
                </nav>
            </div>

            {/* Mobile View Header */}
            <div className="block lg:hidden bg-gray-800 text-white">
                <div className="flex overflow-x-auto text-xs ps-2 space-x-1 font-bold">
                    <Link to={'/DashBoard/Albums'} className="flex flex-col items-center p-3 rounded-lg hover:bg-cyan-700 hover:scale-105 transition-all duration-200 ease-in-out">
                        <IoMdAlbums className="mb-1 text-3xl" />
                        Albums
                    </Link>
                    <Link to={'/DashBoard/Comments'} className="flex flex-col items-center p-3 rounded-lg hover:bg-cyan-700 hover:scale-105 transition-all duration-200 ease-in-out">
                        <FaRegCommentDots className="mb-1 text-3xl" />
                        Comments
                    </Link>
                    <Link to={'/DashBoard/Photos'} className="flex flex-col items-center p-3 rounded-lg hover:bg-cyan-700 hover:scale-105 transition-all duration-200 ease-in-out">
                        <TbPhotoSquareRounded className="mb-1 text-3xl" />
                        Photos
                    </Link>
                    <Link to={'/DashBoard/Posts'} className="flex flex-col items-center p-3 rounded-lg hover:bg-cyan-700 hover:scale-105 transition-all duration-200 ease-in-out">
                        <FiUploadCloud className="mb-1 text-3xl" />
                        Posts
                    </Link>
                    <Link to={'/DashBoard/Todos'} className="flex flex-col items-center p-3 rounded-lg hover:bg-cyan-700 hover:scale-105 transition-all duration-200 ease-in-out">
                        <LuListTodo className="mb-1 text-3xl" />
                        Todos
                    </Link>
                    <Link to={'/DashBoard/Users'} className="flex flex-col items-center p-3 rounded-lg hover:bg-cyan-700 hover:scale-105 transition-all duration-200 ease-in-out">
                        <PiUsersFill className="mb-1 text-3xl" />
                        Users
                    </Link>
                </div>
            </div>

            
            {/* Main Content */}
            <div className="flex-1 p-6 bg-white shadow-lg rounded-xl overflow-auto">
                <Routes>
                    <Route path="/Album" element={<Album />} />
                    <Route path="/Comments" element={<Comments />} />
                    <Route path="/Photos" element={<Photos />} />
                    <Route path="/Posts" element={<Posts />} />
                    <Route path="/Todos" element={<Todos />} />
                    <Route path="/Users" element={<User />} />

                    <Route path="/AlbumForm" element={<AlbumForm />} />
                    <Route path="/CommentsForm" element={<CommentsForm />} />
                    <Route path="/PhotosForm" element={<PhotosForm />} />
                    <Route path="/PostsForm" element={<PostsForm />} />
                    <Route path="/TodosForm" element={<TodosForm />} />
                    <Route path="/SignUp" element={<SignUp />} />
                </Routes>
            </div>
        </div>
    );
}
