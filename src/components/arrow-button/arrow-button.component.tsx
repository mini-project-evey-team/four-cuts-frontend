import { FC } from "react";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";

type IArrowButtonComponentProps = {
  direction: string;
  onButtonClick: () => void;
};

export const ArrowButtonComponent: FC<IArrowButtonComponentProps> = ({
  direction,
  onButtonClick,
}) => {
  if (direction === "left") {
    return (
      <div
        onClick={onButtonClick}
        style={{
          cursor: "pointer",
          borderRadius: 999,
        }}
      >
        <CaretLeftFilled style={{ color: "#ff8ea2", fontSize: "70px" }} />
      </div>
    );
  }

  if (direction === "right") {
    return (
      <div
        onClick={onButtonClick}
        style={{
          cursor: "pointer",
          borderRadius: 999,
        }}
      >
        <CaretRightFilled style={{ color: "#ff8ea2", fontSize: "70px" }} />
      </div>
    );
  }
};
