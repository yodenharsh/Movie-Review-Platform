import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ContentContainerCard: FC<Props> = (props) => {
  return (
    <div className="lg:w-[85%] shadow-[0_0_50px] shadow-primary w-full border-slate-700 border-2 bg-primary-bg rounded-lg">
      {props.children}
    </div>
  );
};

export default ContentContainerCard;
