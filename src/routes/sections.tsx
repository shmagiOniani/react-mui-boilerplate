import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "../layouts/dashboard";
// import { laodData } from '../pages/user';
// import { DataNotFound } from "../components/error";

export const IndexPage = lazy(() => import("../pages/app"));
export const BlogPage = lazy(() => import("../pages/blog"));
export const UserPage = lazy(() => import("../pages/user"));
export const LoginPage = lazy(() => import("../pages/login"));
export const ProductsPage = lazy(() => import("../pages/products"));
export const Page404 = lazy(() => import("../pages/page-not-found"));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        {
          path: "user",
          element: <UserPage />,
          // loader: async () => {
          //   const response = await fetch(
          //     "http://xdata.rs.ge/TaxPayer/RSPublicInfo"
          //   );
          //   return response.json();
          // },
          // errorElement: <DataNotFound />,
        },
        { path: "products", element: <ProductsPage /> },
        { path: "blog", element: <BlogPage /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);


  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<IndexPage />}>
  //       <Route path="dashboard" element={<Dashboard />} />
  //       {/* ... etc. */}
  //     </Route>
  //   )
  // );

  return routes;
}



