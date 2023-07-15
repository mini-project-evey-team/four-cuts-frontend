import { FC } from "react";
type IPhotosDetailContentViewProps = {};

export const PhotosDetailContentView: FC<
  IPhotosDetailContentViewProps
> = ({}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
      <div style={{ display: "flex" }}>
        <div style={{ paddingRight: 10 }}>제목 </div>

        <div>title</div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ paddingRight: 10 }}>내용 </div>
        <div> contents</div>
      </div>
    </div>
  );
};
