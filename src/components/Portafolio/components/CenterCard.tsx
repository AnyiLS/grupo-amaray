import React from "react";
import { CarouselPortfolio } from "mocks/portfolio.mocks";

type TCenterCard = Pick<
  CarouselPortfolio,
  "title" | "x" | "title_2" | "x_2" | "x_selected"
> & { selected: boolean; onOver: any; onLeave: any };

const CenterCard: React.FC<TCenterCard> = ({
  title,
  x,
  title_2,
  x_2,
  x_selected,
  selected,
  onLeave,
  onOver,
}): JSX.Element => {
  return (
    <g transform={!selected ? "scale(1) translate(291.563 -9)" : "scale(1.05) translate(270.563 -55)"}>
      <g
        className="ae-portfolio-3"
        transform="matrix(1, 0, 0, 1, -806.49, -343.85)"
        onMouseLeave={onLeave}
          onMouseOver={onOver}
      >
        <rect
          className="e-portfolio-3"
          width={306.729}
          height={567.799}
          rx={35}
          transform="translate(806.49 343.85)"
          style={{ fill: !selected ? "white" : "#001f5f" }}
          
        />
      </g>
      <path
        className="y-portfolio-3"
        d="M0,0V178.868H0q0,.066,0,.132V309.008a33.4,33.4,0,0,0,33.4,33.4H273.56a33.4,33.4,0,0,0,33.4-33.4V179l-.06-.132h.06L267.618,57.477C256.342,22.689,229.739,0,200.228,0Z"
        transform="translate(307.023 342.413) rotate(180)"
      />
      <text
        className="z-portfolio-3"
        transform={`translate(${x_selected} 463.362)`}
        
      >
        <tspan
          style={{ fill: selected ? "white" : "#001f5f" }}
          x={x}
          y={0}
          dangerouslySetInnerHTML={{ __html: title }}
          onMouseLeave={onLeave}
        onMouseOver={() => onOver()}
        />
        <tspan
          style={{ fill: selected ? "white" : "#001f5f" }}
          x={x_2}
          y={30}
          dangerouslySetInnerHTML={{ __html: title_2 ?? "" }}
          onMouseLeave={onLeave}
        onMouseOver={() => onOver()}
        />
      </text>
    </g>
  );
};

export default CenterCard;
