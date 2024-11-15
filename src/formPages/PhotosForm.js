import { Button, Input, notification } from "antd";
import { getDatabase, push, ref, set } from "firebase/database";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function PhotosForm() {

    const db = getDatabase()
    const [model, setModel] = useState({});
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()

    const save = (e) => {
        e.preventDefault()
        if (!model.id && !model.image && !model.title) {
            notification.error({
                message: 'Validation Error',
                description: 'Please Filled the AllInput Fileds'
            })
        }
        setLoader(true)
        console.log(model)
        const reference = push(ref(db, 'photosUser', model.id))
        set(reference, model)
            .then((res) => {
                console.log(res)
                navigate('/DashBoard/Photos', {
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
                <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Phots</h2>

                        <div className="mb-4">
                            <Input
                                placeholder="User Id"
                                className="border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setModel({ ...model, id: e.target.value })}
                            />
                        </div>

                        <div className="mb-4">
                            <Input
                                placeholder="Title"
                                className="border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setModel({ ...model, title: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                placeholder="Image Url"
                                className="border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setModel({ ...model, image: e.target.value })}
                            />
                        </div>

                        <div className="flex justify-center">
                            <Button
                                type="primary"
                                className="w-full py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={save}
                            >
                                Saved
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}