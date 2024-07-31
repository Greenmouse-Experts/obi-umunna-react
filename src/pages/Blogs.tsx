import { BlogType } from "../components/types/program.types";
import Breadcrumb from "../components/ui/Breadcrumb";
import LoaderBig from "../components/ui/LoaderBig";
import PostItem from "../components/ui/PostItem";
import { useBlog } from "../service/useBlog";

const Blogs = () => {
  const { posts, isLoading } = useBlog();

  return (
    <>
      <Breadcrumb
        backgroundImage="/img/program-banner.png"
        breadcrumbText="Blog"
      />

   {isLoading ? <LoaderBig/> :     <section>
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 mt-8 ">
          
          {posts?.map((post: BlogType) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </section>}
    </>
  );
};

export default Blogs;
