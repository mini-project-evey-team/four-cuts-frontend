import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  PhotosDetailPage,
  PhotosListPage,
  PhotosMainPage,
  PhotosPostPage,
  SignInPage,
  SignUpPage,
} from "../pages";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhotosMainPage />} />
        <Route path="/list" element={<PhotosListPage />} />
        <Route path="/post" element={<PhotosPostPage />} />
        <Route path="/list/detail/:id/" element={<PhotosDetailPage />} />

        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
