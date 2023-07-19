import { FC } from "react";
import { styled } from "styled-components";
import { ImageFrameComponent } from "../../../components";

type IPhotosListCardComponentProps = {
  imageData: {
    imageUrl: string;
    title: string;
  }[];
};

export const PhotosListCardComponent: FC<
  IPhotosListCardComponentProps
> = ({}) => {
  return (
    <ImageFrameComponent title="title" width="200px" fontSize="14px">
      <CardWrapper>
        <ImageCardWrapper>
          <ImageBoxRow>
            {/* {imageData.map((e, i) => {})} */}
            {/* <EachImageBox right={true} bottom={true}>
            <Image src={imageUrl || HAPPYCAT_URL} alt="placeholder" />
          </EachImageBox>
          <EachImageBox bottom={true}>
            <Image src={imageUrl || HAPPYCAT_URL} alt="placeholder" />
          </EachImageBox>
        </ImageBoxRow>
        <ImageBoxRow>
          <EachImageBox right={true}>
            <Image src={imageUrl || HAPPYCAT_URL} alt="placeholder" />
          </EachImageBox>
          <EachImageBox>
            <Image src={imageUrl || HAPPYCAT_URL} alt="placeholder" />
          </EachImageBox> */}
          </ImageBoxRow>
        </ImageCardWrapper>
      </CardWrapper>
    </ImageFrameComponent>
  );
};

const CardWrapper = styled.div``;

const ImageCardWrapper = styled.div`
  display: inline-block;
  flex-direction: column;
  // border: 3px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  // &:hover {
  //   border: 3px solid #ff8ea2;
  // }
`;

const ImageBoxRow = styled.div`
  display: flex;
`;

// const EachImageBox = styled.div<{ right?: boolean; bottom?: boolean }>`
//   display: inline-flex;
//   width: 100%;
//   height: 100%;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   // border-right: ${(props) => (props.right ? "2px solid black" : "none")};
//   // border-bottom: ${(props) => (props.bottom ? "2px solid black" : "none")};
// `;

// const Image = styled.img`
//   width: 100%;
//   aspect-ratio: 155/190;
//   object-fit: cover;
// `;
