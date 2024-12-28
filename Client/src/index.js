import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import AuthorPosts from './pages/AuthorPosts'
import Authors from './pages/Authors'
import CategoryPosts from './pages/CategoryPosts'
import CreatePost from './pages/CreatePost'
import Dashboard from './pages/Dashboard'
import EditPost from './pages/EditPost'
import DeletePost from './pages/DeletePost'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: "posts/:id", element: <PostDetail />},
      {path: "posts/users/:id", element: <AuthorPosts />},
      {path: "register", element: <Register />},
      {path: "login", element: <Login />},
      {path: "create", element: <CreatePost />},
      {path: "authors", element: <Authors />},
      {path: "posts/categories/:category", element: <CategoryPosts />},
      {path: "my_posts", element: <Dashboard />},
      {path: "posts/:id/edit", element: <EditPost />},
      {path: "posts/:id/delete", element: <DeletePost />},
      {path: "logout", element: <Logout />},
      {path: "profile/:id", element: <UserProfile />},
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);


