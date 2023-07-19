import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  PhotosDetailPage,
  PhotosListPage,
  PhotosMainPage,
  PhotosPostPage,
  SignInPage,
} from "../pages";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhotosMainPage />} />
        <Route path="/list" element={<PhotosListPage />} />
        <Route path="/post" element={<PhotosPostPage />} />
        <Route path="/list/:id/detail" element={<PhotosDetailPage />} />

        <Route path="/login" element={<SignInPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
