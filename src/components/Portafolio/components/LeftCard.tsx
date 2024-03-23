import React from "react";
import { CarouselPortfolio } from "mocks/portfolio.mocks";

type TLeftCard = Pick<CarouselPortfolio, "title" | "x" | "title_2" | "x_2">;

const LeftCard: React.FC<TLeftCard> = ({ title, x, title_2, x_2 }): JSX.Element => {
  return (
    <g className="u-portfolio-3">
      <g transform="translate(0)">
        <g
          className="ag-portfolio-3"
          transform="matrix(1, 0, 0, 1, -514.93, -352.85)"
        >
          <rect
            className="e-portfolio-3"
            width={256.573}
            height={474.955}
            rx={21}
            transform="translate(514.93 352.85)"
          />
        </g>
        <path
          className="v-portfolio-3"
          d="M0,0V149.62H0q0,.055,0,.11V258.48a27.943,27.943,0,0,0,27.943,27.943H228.829a27.943,27.943,0,0,0,27.943-27.943V149.73l-.05-.11h.05L223.858,48.078C214.426,18.979,192.173,0,167.487,0Z"
          transform="translate(256.771 286.423) rotate(180)"
        />
      </g>
      <text className="w-portfolio-3" transform="translate(0 379.825)">
        <tspan x={x} y={0} dangerouslySetInnerHTML={{ __html: title }} />
        <tspan x={x_2} y={30} dangerouslySetInnerHTML={{ __html: title_2 ?? '' }}/>
      </text>
    </g>
  );
};

export default LeftCard;
