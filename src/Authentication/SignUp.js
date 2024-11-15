import { Input, Button, notification, } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../firebase/FirebaseFunctions";
import { getDatabase, push, ref, set } from "firebase/database";
import app from "../firebase/FirebaseConfig";

export default function SignUp() {

    const db = getDatabase(app)


    const [model, setModel] = useState({});
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()


    const save = (e) => {
        e.preventDefault();
        if (!model.name || !model.email || !model.password) {
            notification.error({
                message: 'Validation Error',
                description: 'Please fill all the input fields.'
            })
        } else {
            console.log('Form Submit', model)
        }
        setLoader(true)
        console.log(model)
        signUpUser(model)
        const reference = push(ref(db, 'signUpUsers', model.id))
        set(reference, model)
            .then((res) => {
                console.log(res)
                navigate('/DashBoard/Users', {
                    state: {
                        data: model
                    }
                })
                setLoader(false)
            })
            .catch((err) => {
                console.log(err,)
            })

    }

    return (
        <>
            <div>
                {loader ? (
                    <div className="fixed inset-x-0 top-0 bottom-0 flex justify-center items-center z-50">
                        <img
                            className="w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/12"
                            src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif"
                            alt="Loading..."
                        />
                    </div>
                ) : false}

            </div>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 p-6">
                <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
                    <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">SignUp User!</h2>

                    <div className="mb-5">
                        <Input
                            placeholder="Username"
                            className="border-2 border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
                            onChange={(e) => setModel({ ...model, name: e.target.value })}
                        />
                    </div>

                    <div className="mb-5">
                        <Input
                            placeholder="Email Address"
                            className="border-2 border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
                            onChange={(e) => setModel({ ...model, email: e.target.value })}
                        />
                    </div>

                    <div className="mb-6">
                        <Input.Password
                            placeholder="Password"
                            className="border-2 border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
                            onChange={(e) => setModel({ ...model, password: e.target.value })}
                        />
                    </div>

                    <div className="mb-6">
                        <Button
                            type="primary"
                            className="w-full py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={save}
                        >
                            Sign In
                        </Button>
                    </div>

                    <div className="text-center text-gray-600">
                        <p>Don't have an account? <Link to={'/'} className="text-indigo-600 font-semibold">Create one</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}