import Image from "next/image";

const AddPost = () => {
  return (
    <div className="flex bg-gray-100 p-4 px-8 justify-between rounded-2xl text-sm gap-8 items-center">
      {/* Avatar */}
      <div>
        <Image src="" alt="" width={48} height={48} className="w-12 h-12 rounded-full" />
      </div>

        {/* Input */}
        <div className="flex flex-col gap-2">
           <textarea name=" " id=" " className="border-purple-200 border-1 rounded-lg bg-white"></textarea>

            {/* Post Options */}
            <div className="flex gap-4 items-center justify-center">
            <h1>Image</h1>
            <h1>Video</h1>
            <h1>Poll</h1>
            </div>
        </div>


        {/* Button */}
        <div>
            <h1>Post</h1>
        </div>

    </div>
  )
}

export default AddPost;