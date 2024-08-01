import { MdOutlineAccessTime } from "react-icons/md";
import Breadcrumb from "../components/ui/Breadcrumb";
import LoaderBig from "../components/ui/LoaderBig";
import { useSingleBlog } from "../service/useBlog";
import { formatDate } from "../components/utils/helpers";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { IoIosShareAlt } from "react-icons/io";

const Blog = () => {
  const { id } = useParams();
  const { post, isLoading } = useSingleBlog(id);
  const [isCopied, setIsCopied] = useState(false);
  

  const handleShareClick = () => {
    const shareUrl = window.location.href; // Get current page URL
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Hide message after 2 seconds
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <>
      <Breadcrumb
        backgroundImage="/img/program-banner.png"
        breadcrumbText="Blogs"
      />

      {isLoading ? (
        <LoaderBig />
      ) : (
        <section className="bg-[#f4f4f4] ">
          <div className="xl:w-[70%] w-full flex mx-auto flex-col  gap-x-10 justify-center items-start gap-y-5 mt-4">
          <h4>{post?.title}</h4>
            <div className=" w-full">
              <img
                src={post?.image}
                alt=""
                className="w-full h-[25rem] object-cover object-center rounded-3xl "
              />
              <div className="flex justify-between items-center mt-5">
                <div className="flex sm:flex-row  items-center flex-col gap-2">
                  <p className="font-semibold">Date Posted:</p>
                  <p className="flex items-center text-base gap-3">
                    <span>
                      <MdOutlineAccessTime />
                    </span>
                    {formatDate(post?.createdAt)}
                  </p>
                </div>
                <div className="relative">
                <p
                  className="text-xl font-medium items-center rounded cursor-pointer text-center px-4 py-4 w-full flex  justify-center"
                  onClick={handleShareClick}
                >
                  Share{" "}
                  <span>
                    <IoIosShareAlt size={25} />
                  </span>
                </p>
                {isCopied && (
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-700 text-white text-sm rounded">
                    Link copied!
                  </span>
                )}
              </div>
              </div>
              <div className="mt-5"  dangerouslySetInnerHTML={{ __html: post?.description }}/>
              {/* <div
                className="add_list"
                dangerouslySetInnerHTML={{ __html: specification }}
              />
                <p>{post?.description}</p> */}
              
              <div className="">
              

            
            </div>
            </div>
            
          </div>
        </section>
      )}
    </>
  );
};

export default Blog;
