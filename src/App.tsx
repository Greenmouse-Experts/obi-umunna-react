import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Faq from "./pages/Faq";
import Excos from "./pages/Excos";
import Apply from "./pages/Apply";
import Sponsor from "./pages/Sponsor";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Program from "./pages/Program";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/program/:id",
        element: <Program />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/excos",
        element: <Excos />,
      },
      {
        path: "/apply",
        element: <Apply />,
      },
      {
        path: "/sponsor",
        element: <Sponsor />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
