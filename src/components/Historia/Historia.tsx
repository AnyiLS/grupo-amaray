import React from 'react'
import LifeLine1984 from './components/1984'
import LifeLine1999 from './components/1999'
import LifeLine2000 from './components/2000'
import LifeLine2007 from './components/2007'
import LifeLine2009 from './components/2009'
import LifeLine20111 from './components/20111'
import LifeLine20112 from './components/20112'
import LifeLine2012 from './components/2012'
import LifeLine20122 from './components/20122'
import LifeLine20141 from './components/20141'
import LifeLine20142 from './components/20142'
import LifeLine2016 from './components/2016'
import LifeLine2017 from './components/2017'
import LifeLine20231 from './components/20231'
import LifeLine20232 from './components/20232'
import LifeLine20233 from './components/20233'
import LifeLine20234 from './components/20234'

const Historia: React.FC = (): JSX.Element => {
	/** States */
	const [steps, setSteps] = React.useState<number>(0)

	const handleChangeStep = () => setSteps(steps + 1 > 16 ? 0 : steps + 1)
	const handleLessStep = () => setSteps(steps - 1 < 0 ? 16 : steps - 1)
	const handleChangeStepForce = (index: number) => setSteps(index)

	return (
		<div>
			<svg
				width="100%"
				height={'100%'}
				viewBox="0 60 1920 1080"
				preserveAspectRatio="none">
				<defs>
					<style>
						{
							'.a-histo{fill:#fff;stroke:#707070;}.b-histo,.d-histo,.f-histo{fill:#001f5f;}.c-histo{fill:url(#a-histo);}.d-histo{font-size:40px;font-family:Silka-Bold, Silka;}.d-histo,.f-histo{font-weight:700;}.e-histo{fill:#182856;font-size:24px;font-family:Silka-Regular, Silka;}.f-histo{font-size:70px;font-family:Kiona-Bold, Kiona;}.g-histo{clip-path:url(#b-histo);}.h-histo{fill:#e40032;}'
						}
					</style>
					<pattern
						id="a-histo"
						width={1}
						height={1}
						patternTransform="matrix(-1, 0, 0, 1, 1594, 0)"
						viewBox="44.551 5.621 746.639 883.891">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={797}
							height={1195.5}
							xlinkHref="/images/imagenbebe.jpg"
						/>
					</pattern>
					<clipPath id="b-histo">
						<rect
							className="a-histo"
							width={260.931}
							height={402.643}
							transform="translate(0)"
						/>
					</clipPath>
				</defs>
				<path
					className="b-histo"
					d="M0,1.723V952.495H566.562c53.046-11.268,98.887-61.849,119.781-134.63l43.042-272.448,74.953-474.54C810.112,34.3,777.4,1.723,734.917,1.723Z"
				/>
				<path
					className="c-histo"
					d="M0,1.723v943.51H560.932c52.519-11.182,97.9-61.377,118.59-133.6l42.614-270.367L796.344,70.349c5.717-36.3-26.673-68.626-68.73-68.626Z"
					transform="translate(0 -1.723)"
				/>
				<text className="d-histo" transform="translate(837 774)">
					<tspan x={0} y={38}>
						{'\u201Cun compromiso inquebrantable con '}
					</tspan>
					<tspan x={0} y={82} xmlSpace="preserve">
						{'la salud y la vida\u201D.  '}
					</tspan>
				</text>
				<text className="e-histo" transform="translate(837 530)">
					<tspan x={0} y={23}>
						{
							'Grupo Amarey es una compa\xF1\xEDa con m\xE1s de 40 a\xF1os de '
						}
					</tspan>
					<tspan x={0} y={49}>
						{
							'trayectoria, comprometida con acercar el conocimiento, la '
						}
					</tspan>
					<tspan x={0} y={75}>
						{
							'ciencia y la tecnolog\xEDa al sector de la salud en Colombia, '
						}
					</tspan>
					<tspan x={0} y={101} xmlSpace="preserve">
						{'Panam\xE1 y Costa Rica.  '}
					</tspan>
					<tspan x={0} y={127} />
					<tspan x={0} y={153}>
						{
							'Con 6 sedes en Colombia y operaci\xF3n internacional en '
						}
					</tspan>
					<tspan x={0} y={179}>
						{
							'Panam\xE1 y Costa Rica, el grupo empresarial cuenta con un '
						}
					</tspan>
					<tspan x={0} y={205}>
						{
							'equipo de colaboradores que trabajan bajo una \xFAnica premisa, '
						}
					</tspan>
				</text>
				<text className="f-histo" transform="translate(837 399)">
					<tspan x={0} y={70}>
						{'NUESTRA HISTORIA '}
					</tspan>
				</text>
				<g className="g-histo" transform="translate(1659.069 60.012)">
					<path
						className="h-histo"
						d="M231.41,143.377c6.98-9.5-.043,2.533,0,0,.035-1.337-.574-1.5-.769-2.872a16.27,16.27,0,0,0-4.3-9.55c-2.192-2.246,11.013-2.12-34.618,1.161l-51.66-71.9.115-23.33,31.035.164L171.1,58.865a2.138,2.138,0,0,0,2.131,2.156l8.583.049a2.144,2.144,0,0,0,2.156-2.14l.3-56.5A2.148,2.148,0,0,0,182.133.271L173.55.23a2.143,2.143,0,0,0-2.156,2.131l-.115,21.821-31.027-.164L140.368,2.2A2.155,2.155,0,0,0,138.228.041L129.645,0a2.148,2.148,0,0,0-2.156,2.131l-.32,61.5a2.144,2.144,0,0,0,.4,1.262l56.889,79.17a2.167,2.167,0,0,0,1.73.893l45.22-1.585c.689,0,.456,3.76.858,3.2m-78.211,62.027L61.189,238.239a2.077,2.077,0,0,1-1.32-.008l-58.4-19.3a2.147,2.147,0,0,1-1.361-2.713L2.8,208.065A2.144,2.144,0,0,1,5.513,206.7l20.706,6.845,9.747-29.461-20.715-6.845a2.147,2.147,0,0,1-1.361-2.713l2.689-8.148a2.154,2.154,0,0,1,2.713-1.361L72.944,182.76a2.141,2.141,0,0,1,1.361,2.713l-2.689,8.148a2.154,2.154,0,0,1-2.713,1.361l-20.715-6.853L38.45,217.59,60.6,224.919,144.942,198l6.889-20.837,7.1-21.486-51.66-71.9-22.157-7.32-9.738,29.461,20.715,6.845a2.147,2.147,0,0,1,1.361,2.713l-2.7,8.148a2.142,2.142,0,0,1-2.705,1.361L38.4,107.246a2.147,2.147,0,0,1-1.361-2.713l2.689-8.148a2.147,2.147,0,0,1,2.713-1.361l20.715,6.853L72.9,72.415,52.189,65.563a2.145,2.145,0,0,1-1.369-2.713l2.7-8.148A2.147,2.147,0,0,1,56.23,53.34l58.39,19.313a2.148,2.148,0,0,1,1.074.787L172.575,152.6a2.125,2.125,0,0,1,.3,1.926l-17.428,52.7a2.149,2.149,0,0,1-1.385,1.377m101.324,24.23c.426.139,3.111,12.221,3.374,12.59,2.741,3.813-2.108,1.933.1.388,5.076-3.472,5.311-3.817,0,0-.6.431-.275-5.831-.1-.388.032.705,5.8,4.845.1.388l-25.345,17.254-.459,88.531,13.616,18.944,25.2-18.108-12.731-17.714a2.141,2.141,0,0,1,.492-2.992l6.968-5.009a2.141,2.141,0,0,1,2.992.492L302.568,373.1a2.141,2.141,0,0,1-.492,2.992l-6.968,5.009a2.149,2.149,0,0,1-2.992-.492L279.378,362.9,254.188,381l12.73,17.723a2.148,2.148,0,0,1-.492,2.992l-6.968,5.009a2.133,2.133,0,0,1-2.992-.492l-35.9-49.946a2.18,2.18,0,0,1-.4-1.262l.508-97.483a2.133,2.133,0,0,1,.893-1.73l33.81-22.97c.557-.4-.656-.213,0,0m-94.79-9.9,44.692,32.921a2.159,2.159,0,0,1,.877,1.746l-.648,97.483a2.115,2.115,0,0,1-.418,1.254l-36.478,49.52a2.139,2.139,0,0,1-3,.459l-6.91-5.091a2.147,2.147,0,0,1-.451-3L171.2,380.66l-24.985-18.4-12.944,17.567a2.144,2.144,0,0,1-3,.451l-6.91-5.091a2.144,2.144,0,0,1-.451-3l33.511-45.5a2.147,2.147,0,0,1,3-.451l6.91,5.091a2.147,2.147,0,0,1,.459,3L153.844,351.9l24.985,18.4,13.837-18.788.582-88.531-35.9-26.436-84.375,26.8L59.14,282.128l24.985,18.4,12.935-17.567a2.147,2.147,0,0,1,3-.451l6.91,5.091a2.153,2.153,0,0,1,.459,3L73.912,336.091a2.141,2.141,0,0,1-3,.459L64,331.46a2.146,2.146,0,0,1-.451-3l12.935-17.567-24.977-18.4L38.565,310.056a2.148,2.148,0,0,1-3,.459l-6.91-5.091a2.147,2.147,0,0,1-.451-3L64.682,252.9a2.1,2.1,0,0,1,1.074-.771l92.909-29.519a2.154,2.154,0,0,1,1.926.32"
						transform="matrix(0.966, 0.259, -0.259, 0.966, 75.162, -82.093)"
					/>
				</g>
			</svg>

			{/* linea del tiempo */}
			{steps === 0 ? (
				<LifeLine1984 onClick={handleChangeStep} handleChangeStepForce={handleChangeStepForce} />
			) : steps === 1 ? (
				<LifeLine1999
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 2 ? (
				<LifeLine2000
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 3 ? (
				<LifeLine2007
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 4 ? (
				<LifeLine2009
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 5 ? (
				<LifeLine20111
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 6 ? (
				<LifeLine20112
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 7 ? (
				<LifeLine2012
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 8 ? (
				<LifeLine20122
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 9 ? (
				<LifeLine20141
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 10 ? (
				<LifeLine20142
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 11 ? (
				<LifeLine2016
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 12 ? (
				<LifeLine2017
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 13 ? (
				<LifeLine20231
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 14 ? (
				<LifeLine20232
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 15 ? (
				<LifeLine20233
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : steps === 16 ? (
				<LifeLine20234
					onClick={handleChangeStep}
					onLess={handleLessStep}
					handleChangeStepForce={handleChangeStepForce}
				/>
			) : null}
		</div>
	)
}

export default Historia
