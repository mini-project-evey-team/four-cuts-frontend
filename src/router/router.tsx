import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  PhotosDetailPage,
  PhotosListPage,
  PhotosMainPage,
  PhotosPostPage,
  SignInPage,
} from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhotosMainPage />} />
        <Route path="/list" element={<PhotosListPage />} />
        <Route path="/post" element={<PhotosPostPage />} />
        <Route path="/list/detail/:id/" element={<PhotosDetailPage />} />

        <Route path="/login" element={<SignInPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
