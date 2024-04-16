import React from 'react'
import './Elipses.css'

const Elipses: React.FC = (): JSX.Element => {
	return (
		<React.Fragment>
			<defs>
				<radialGradient
					id="a-item-1826"
					cx={0.5}
					cy={0.5}
					r={0.538}
					gradientTransform="translate(0 0.113) scale(1 0.774)"
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#9e9e9e" />
					<stop offset={1} stopColor="gray" stopOpacity={0} />
				</radialGradient>
			</defs>
			<g className='elipses__container'>
				<ellipse
					className="a-item-1826"
					cx={132.5}
					cy={11}
					rx={132.5}
					ry={11}
					transform="translate(268.5 95)"
				/>
				<ellipse
					className="a-item-1826"
					cx={92}
					cy={8.5}
					rx={92}
					ry={8.5}
				/>
				<ellipse
					className="a-item-1826"
					cx={92}
					cy={8.5}
					rx={92}
					ry={8.5}
					transform="translate(625.992)"
				/>
			</g>
		</React.Fragment>
	)
}

export default Elipses
