import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ImageFrameComponent } from "../../../components";

type IPhotosMainSlideViewProps = {
  photoUrls: string[];
};

export const PhotosMainSlideView: FC<IPhotosMainSlideViewProps> = ({
  photoUrls,
}) => {
  const customIndicator = (
    onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
    label: string
  ) => {
    return (
      <li
        style={{
          ...{
            display: "inline-block",
            marginRight: "10px",
            cursor: "pointer",
          },
          opacity: isSelected ? "1" : "0.7",
        }}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      >
        <div
          style={{
            width: isSelected ? 24 : 12,
            aspectRatio: isSelected ? 56 / 28 : 1,
            borderRadius: isSelected ? 10 : 999,
            backgroundColor: isSelected ? "pink" : "gray",
            transition: "0.3s",
          }}
        ></div>
      </li>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <div style={{ width: "80%", padding: 25 }}>
        <Carousel
          autoPlay={true}
          showArrows={true}
          showIndicators={true}
          infiniteLoop={true}
          interval={2000}
          showStatus={false}
          showThumbs={false}
          renderIndicator={customIndicator}
        >
          {photoUrls.map((e, i) => {
            return (
              <div
                key={`slide${i + 1}`}
                style={{
                  width: "100%",
                  aspectRatio: 155 / 220,
                }}
              >
                <ImageFrameComponent width="100%" title="">
                  <img
                    style={{
                      width: "100%",
                      aspectRatio: 155 / 170,
                      objectFit: "fill",
                    }}
                    src={e}
                  />
                </ImageFrameComponent>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
