import { FC } from "react";
import { Button } from "../../../components";
import { Link } from "react-router-dom";
type IPhotosMainTitleViewProps = {};

export const PhotosMainTitleView: FC<IPhotosMainTitleViewProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "68px",
            fontWeight: 700,
          }}
        >
          만들어요
          <br />
          인생네컷!
        </div>
        <div style={{ display: "flex", gap: "10px", paddingTop: "30px" }}>
          <Link to="/post">
            <Button size="small" attribute="empty">
              만들기
            </Button>
          </Link>
          <Link to="/list">
            <Button size="medium" attribute="filled">
              보러가기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
