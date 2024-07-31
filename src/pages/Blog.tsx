
import { MdOutlineAccessTime } from "react-icons/md";
import Breadcrumb from "../components/ui/Breadcrumb";
import LoaderBig from "../components/ui/LoaderBig";
import {  useSingleBlog } from "../service/useBlog";
import { formatDate } from "../components/utils/helpers";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { IoIosShareAlt } from "react-icons/io";

const Blog = () => {
  const {id} = useParams()
  const { post, isLoading } = useSingleBlog(id);
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate()
 


const handleShareClick = () => {
  const shareUrl = window.location.href; // Get current page URL
  navigator.clipboard.writeText(shareUrl)
    .then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Hide message after 2 seconds
    })
    .catch(err => console.error('Failed to copy: ', err));
};


  return (
    <>
      <Breadcrumb
        backgroundImage="/img/program-banner.png"
        breadcrumbText="Blogs"
      />

 { isLoading ? <LoaderBig/> :   <section className="bg-[#f4f4f4] ">
        <h4>{post?.title}</h4>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-10 mt-4">
          <div className="col-span-2">
            <img
              src={post?.image}
              alt=""
              className="w-full h-[25rem] object-cover object-center rounded-3xl "
            />
            <div className="flex justify-between items-center mt-5">
              <div className="flex sm:flex-row flex-col gap-2">
                <p className="font-semibold">Date Posted:</p>
                <p className="flex items-center text-base gap-3">
                  <span>
                    <MdOutlineAccessTime />
                  </span>
                  {formatDate(post?.createdAt)}
                </p>
              </div>
             
            </div>
            <div className="mt-5">
              <p>{post?.description}</p>

          
            </div>
          </div>
          <div className="relative h-full">
            <div className="sticky top-44 card-shadow bg-white rounded-3xl p-6">
             

            
              <button
                type="button"
                onClick={() => navigate("/programs")}
                className="px-4 py-4 w-full mt-4 bg-colorPrimary text-white rounded font-medium transition-colors duration-200"
              >
                View Programs
              </button>

              <div className="relative">
                <p
                  className="text-xl font-medium border-2 rounded mt-5 cursor-pointer border-black text-center px-4 py-4 w-full flex items-center justify-center"
                  onClick={handleShareClick}
                >
                  Share <span><IoIosShareAlt size={25} /></span>
                </p>
                {isCopied && (
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-700 text-white text-sm rounded">
                    Link copied!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>}
    </>
  );
};

export default Blog;
