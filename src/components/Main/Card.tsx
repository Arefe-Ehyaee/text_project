import { useState } from "react";

export interface CardProps {
  cardTitle: string;
  cardDescription: string;
  options?: string[];
  children?: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { cardTitle, cardDescription, options , children} = props;

  const [selectChartOption, setSelectChartOption] = useState<string | null>();

  const handeSelectCardOption = (option: string) => {
    setSelectChartOption(option);
  }

  return (
    <div
      className='relative h-[400px] border border-[#FFFFFF00] rounded-lg p-4 mr-3 max-w-[100%] min-w-[100%]'
      style={{
        boxShadow: "0px 0px 2px 0px #0000001F, 0px 2px 4px 0px #00000024",
      }}
    >
      <div className="flex flex-col">
        <div className="font-bold text-sm leading-5">{cardTitle}</div>
        <div className="text-[#616161] text-xs font-normal">
          {cardDescription}
        </div>
        <div className="mt-3">
          <ul className="flex">
            {options?.map((option) => (
              <li className={`mr-3 border-b-4 ${selectChartOption === option ? "border-[#5B5FC7]" : "border-transparent"}`}>
                <button className="text-sm leading-5" onClick={() => handeSelectCardOption(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-5">{children}</div>
        
        <div>
            <button className="text-[#5B5FC7] absolute bottom-0 left-0 p-4 text-sm font-normal">View details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
