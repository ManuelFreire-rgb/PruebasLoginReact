// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";

import AdminRoute from "./protected_views/AdminRoute";
import ClienteRoute from "./protected_views/ClienteRoute";
import SupervisorRoute from "./protected_views/SupervisorRoute";
import AnalistaRoute from "./protected_views/AnalistaRoute";

import AdminPage from "./pages/AdminPage"; // crea este archivo
import ClientePage from "./pages/ClientePage"; // crea este archivo
import SupervisorPage from "./pages/SupervisorPage"; // crea este archivo
import AnalistaPage from "./pages/AnalistaPage"; // crea este archivo

export const router = createBrowserRouter(
  createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}

      <Route path="/admin" element={
        <AdminRoute>
          <AdminPage />
        </AdminRoute>
      } />
      <Route path="/cliente" element={
        <ClienteRoute>
          <ClientePage />
        </ClienteRoute>
      } />
      <Route path="/supervisor" element={
        <SupervisorRoute>
          <SupervisorPage />
        </SupervisorRoute>
      } />
      <Route path="/analista" element={
        <AnalistaRoute>
          <AnalistaPage />
        </AnalistaRoute>
      } />

      <Route path="/" element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />  {/* Dynamic route for single items */}
      <Route path="/demo" element={<Demo />} />
    </Route>
  )
);