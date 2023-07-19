import { FC } from "react";
import styled from "styled-components";

type IPhotosDetailContentViewProps = {
  title: string;
  content: string;
};

export const PhotosDetailContentView: FC<IPhotosDetailContentViewProps> = ({
  title,
  content,
}) => {
  return (
    <DetailContainer>
      <DetailRow>
        <Label>제목</Label>
        <Underline />
        <Detail>{title}</Detail>
      </DetailRow>

      <DetailRow>
        <Label>내용</Label>
        <Underline />
        <Detail>{content}</Detail>
      </DetailRow>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const DetailRow = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 60px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Detail = styled.div`
  flex: 1;
  font-weight: normal;
  word-wrap: break-word;
`;

const Underline = styled.div`
  border-bottom: 1px solid #ffe1e7;
  height: 5px;
  background: #ffe1e7;
  margin-bottom: 20px;
`;
