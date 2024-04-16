import React from 'react'
import Mantebiomedico from './components/Mantebiomedico'
import Mantenimiento from './components/Mantenimiento'

const Biomedico: React.FC = (): JSX.Element => {
	/** States */
	const [step, setStep] = React.useState<number>(0)

	return (
		<div>
			{step === 0 ? (
				<svg
					width="100%"
					height={'100%'}
					viewBox="0 55 1920 1020"
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								'.a-bio{fill:#e7002a;}.b-bio,.g-bio{fill:#001f5f;}.c-bio{fill:none;}.d-bio,.i-bio{fill:#fff;}.e-bio{fill:#182856;font-size:24px;font-family:Silka-Regular, Silka;}.f-bio{font-family:Silka-SemiBold, Silka;font-weight:600;}.g-bio{font-size:70px;}.g-bio,.i-bio{font-family:Kiona-Bold, Kiona;font-weight:700;}.h-bio{fill:url(#a-bio);}.i-bio{font-size:28px;}.j-bio{filter:url(#b-bio);}'
							}
						</style>
						<pattern
							id="a-bio"
							width={1}
							height={1}
							viewBox="-10.46 33.225 1133.725 1085.91">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1123.264}
								height={1684.896}
								xlinkHref="/images/biomedico.jpg"
							/>
						</pattern>
						<filter
							id="b-bio"
							x={341.439}
							y={791}
							width={403}
							height={98.849}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="c-bio" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="c-bio" />
							<feComposite in="SourceGraphic" />
						</filter>
					</defs>
					<path
						className="a-bio"
						d="M600.14,90.971V89.849H698.2v.04h99.456c47.929,0,90.812-26.746,109.251-68.14l.035-.08L916.589,0h1.3L908.01,22.18c-.346.781-.7,1.554-1.07,2.324a113.754,113.754,0,0,1-42.974,47.723,125.077,125.077,0,0,1-66.313,18.786H633.935v-.041Z"
						transform="translate(1354.326 1087.571) rotate(180)"
					/>
					<path
						className="a-bio"
						d="M276.234.035v.976H190.988V.977H104.526C62.859.977,25.578,24.228,9.548,60.215l-.031.07L1.129,79.122H0L8.587,59.84c.3-.679.612-1.351.93-2.02,1.017-2.146,2.112-4.25,3.357-6.44a99.43,99.43,0,0,1,34-35.048A108.736,108.736,0,0,1,104.526,0H246.854V.035Z"
						transform="translate(1660.205 1007.815)"
					/>
					<path
						className="b-bio"
						d="M1700.965,802.11l23.877,8.07q2.366.8,4.694,1.641c39.274,14.121,72.536,36.84,96.425,65.9,24.833,30.214,37.957,65.377,37.957,101.692v251.066h-2.269V979.416c0-73.5-54.041-139.263-137.677-167.54l-.164-.054-22.843-7.721Z"
						transform="translate(1230.482 -1701.347) rotate(90)"
					/>
					<path
						className="b-bio"
						d="M385.091,170.105V0H127.639C74.208,0,25.543,65.982,0,170.105Z"
						transform="translate(698.84 917.466)"
					/>
					<path
						className="b-bio"
						d="M321.465,107.3V0H106.55C61.947,0,21.323,41.62,0,107.3Z"
						transform="translate(1829.14 327.465) rotate(-90)"
					/>
					<rect
						className="c-bio"
						width={1920}
						height={1718}
						transform="translate(16.439 102)"
					/>
					<rect
						className="d-bio"
						width={448}
						height={81}
						transform="translate(316.439 797)"
					/>
					<path
						className="b-bio"
						d="M1123.264,0H52.929C19.437,0-5.629,26.779,1.1,55.379L140.3,1039.026c5.045,21.457,26.707,36.862,51.834,36.862h931.125Z"
						transform="translate(807.175 6.003)"
					/>
					<text className="e-bio" transform="translate(265.439 595)">
						<tspan x={0} y={23}>
							{'Somos la compa\xF1\xEDa de servicio t\xE9cnico '}
						</tspan>
						<tspan x={0} y={49}>
							{
								'biom\xE9dico m\xE1s grande del pa\xEDs y la primera '
							}
						</tspan>
						<tspan x={0} y={75}>
							{'empresa a nivel nacional en certificarse con '}
						</tspan>
						<tspan x={0} y={101}>
							{'la '}
						</tspan>
						<tspan className="f-bio" y={101}>
							{'norma ISO 13485 de ICONTEC'}
						</tspan>
						<tspan y={101} xmlSpace="preserve">
							{' para el '}
						</tspan>
						<tspan x={0} y={127}>
							{'servicio t\xE9cnico de dispositivos m\xE9dicos. '}
						</tspan>
					</text>
					<text className="g-bio" transform="translate(265.439 392)">
						<tspan x={0} y={70}>
							{'mantenimiento '}
						</tspan>
						<tspan x={0} y={142}>
							{'biom\xE9dico '}
						</tspan>
					</text>
					<path
						className="h-bio"
						d="M1123.264,0H52.929C19.437,0-5.629,26.779,1.1,55.379L140.3,1039.026c5.045,21.457,26.707,36.862,51.834,36.862h931.125Z"
						transform="translate(813.175 -11.997)"
					/>
					<g onClick={() => setStep(step + 1)}>
						<g
							className="j-bio"
							transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								className="b-bio"
								d="M385,0H78.968C47.139,0,18.557,23.591,6.933,59.456L0,80.849H303.493c33.911,0,64.274-25.435,76.22-63.849Z"
								transform="translate(350.44 797)"
							/>
						</g>
						<text
							className="i-bio"
							transform="translate(421.439 848.424)">
							<tspan x={0} y={0}>
								{'Conoce M\xE1s'}
							</tspan>
						</text>
					</g>
					<path
						className="d-bio"
						d="M45.263,0V24.412L66.419,12.2,56.314,6.375Z"
						transform="translate(586.176 825.219)"
					/>
				</svg>
			) : step === 1 ? (
				<Mantenimiento onClick={() => setStep(step + 1)} />
			) : (
				<Mantebiomedico onClick={() => setStep(0)} />
			)}
		</div>
	)
}

export default Biomedico
