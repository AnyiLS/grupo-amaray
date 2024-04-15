import React from 'react'
import Reward1 from './components/Reward'
import Reward2 from './components/Reward2'
import Reward3 from './components/Reward3'
import Reward4 from './components/Reward4'
import Reward5 from './components/Reward5'
import Reward6 from './components/Reward6'
import Reward7 from './components/Reward7'
import Reward8 from './components/Reward8'
import Reward9 from './components/Reward9'
import Reward10 from './components/Reward10'
import Reward11 from './components/Reward11'
import Reward12 from './components/Reward12'
import Reward13 from './components/Reward13'
import Reward14 from './components/Reward14'
import Reward15 from './components/Reward15'
import Reward16 from './components/Reward16'
import Reward17 from './components/Reward17'
import Reward18 from './components/Reward18'
import Reward19 from './components/Reward19'
import Reward22 from './components/Reward22'
import Reward21 from './components/Reward21'
import Reward20 from './components/Reward20'
import Reward23 from './components/Reward23'
import Reward24 from './components/Reward24'
import Reward25 from './components/Reward25'
import Reward26 from './components/Reward26'
import Reward27 from './components/Reward27'
import Reward28 from './components/Reward28'
import Reward29 from './components/Reward29'
import Reward30 from './components/Reward30'
import { mocksRewards } from './mocks/Rewards.mocks'

const Reconocimientos: React.FC = (): JSX.Element => {
	const [slide, setSlide] = React.useState<number>(0);

	const handleLessSlide = () => setSlide((slide - 1) < 0 ? 3 : slide - 1)

	const handleAddSlide = () => setSlide((slide + 1) > 3 ? 0 : slide + 1)

	return (
		<div>
			<svg
				width="100%"
				height={'100%'}
				viewBox="0 0 1920 1080"
				preserveAspectRatio="none">
				<defs>
					<style>
						{
							'.a-lin{fill:#e7002a;}.b-lin,.f-lin,.i-lin,.n-lin,.o-lin{fill:#001f5f;}.c-lin{fill:#e40032;}.d-lin{fill:#fff;}.e-lin{fill:url(#c-lin);}.f-lin{font-size:24px;}.f-lin,.i-lin,.k-lin{font-family:Silka-SemiBold, Silka;font-weight:600;}.g-lin,.m-lin{opacity:0.5;}.h-lin{fill:url(#f-lin);}.i-lin{font-size:18px;}.j-lin{fill:url(#i-lin);}.k-lin{fill:#182856;font-size:12px;}.l,.m-lin{fill:#c7c7cc;}.n-lin{font-size:40px;font-family:Silka-Bold, Silka;}.n-lin,.o-lin{font-weight:700;}.o-lin{font-size:70px;font-family:Kiona-Bold, Kiona;}.p-lin{filter:url(#l-lin);}.l-lin{fill:#C7C7CC;}.q-lin{filter:url(#j-lin);}.r-lin{filter:url(#g-lin);}.s-lin{filter:url(#d-lin);}.t-lin{filter:url(#a-lin);}'
						}
					</style>
					<filter
						id="a-lin"
						x={657.984}
						y={280.622}
						width={603.939}
						height={417.65}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="b-lin" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="b-lin" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="c-lin"
						width={1}
						height={1}
						viewBox="-181.516 -74.52 953.561 650.393">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={635.234}
							height={399.65}
							xlinkHref="/images/logo1.png"
						/>
					</pattern>
					<filter
						id="d-lin"
						x={1290.648}
						y={353.835}
						width={389.26}
						height={271.223}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="e-lin" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="e-lin" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="f-lin"
						width={1}
						height={1}
						viewBox="-124.765 -48.997 625.315 426.506">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={406.584}
							height={253.223}
							xlinkHref="/images/logo2.png"
						/>
					</pattern>
					<filter
						id="g-lin"
						x={240}
						y={353.835}
						width={389.259}
						height={271.223}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="h-lin" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="h-lin" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="i-lin"
						width={1}
						height={1}
						viewBox="-15.936 -60.477 757.102 516.393">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={741.165}
							height={253.223}
							xlinkHref="/images/logo3.png"
						/>
					</pattern>
					<filter
						id="j-lin"
						x={465.047}
						y={660.009}
						width={209.953}
						height={109.057}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="k-lin" />
						<feFlood floodOpacity={0.6} />
						<feComposite operator="in" in2="k-lin" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="l-lin"
						x={1245}
						y={660.009}
						width={209.953}
						height={109.057}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="m-lin" />
						<feFlood floodOpacity={0.6} />
						<feComposite operator="in" in2="m-lin" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<path
					className="a-lin"
					d="M2447.566,0l-275.7,741.576-.086.234c-44.512,119.69-148.033,197.028-263.731,197.028H1512.837v.01h-32.891c-57.156,0-112.516,18.781-160.078,54.32s-15.657,2.574,54.853-28.721a258.948,258.948,0,0,1,105.224-22.362h428.1c57.165,0,112.516-18.781,160.078-54.32,45.747-34.187,81.511-81.788,103.739-137.992q1.325-3.338,2.583-6.718L2450.235,1.26Z"
					transform="translate(-507.745 20.999)"
				/>
				<path
					className="b-lin"
					d="M411.543,0V170.106H136.407C79.306,170.106,27.3,104.123,0,0Z"
					transform="translate(1508.457)"
				/>
				<path
					className="c-lin"
					d="M800.553,453.3l-13.039,26.062c-23.279,46.53-77.422,76.6-137.934,76.6H259.215v1.259H649.58c29.9,0,58.848-7.3,83.724-21.115s44.1-33.266,55.606-56.254L802.191,453.3Z"
					transform="translate(-259.215 -450.164)"
				/>
				<path
					className="b-lin"
					d="M313.7,856.23,425.343,655.7c31.177-55.987,103.687-92.163,184.729-92.163h466.374v-1.516H610.071c-40.039,0-78.812,8.786-112.128,25.408s-59.067,40.027-74.47,67.688L311.735,855.816l1.963.415"
					transform="translate(-311.735 -515.179)"
				/>
				<path
					className="b-lin"
					d="M1507.776,453.3c-33.505,27.909-92.543,45.256-157.494,45.256H1038.444v.973h311.838c37.137,0,73.1-5.641,104-16.314,22.688-7.836,41.588-18.024,55.688-29.914Z"
					transform="translate(-421.16 -450.164)"
				/>
				<g transform="translate(0 -100.875)">
						{mocksRewards.map((item, index) => (
							<React.Fragment>
								{index === slide && item.component(() => setSlide(index), handleLessSlide, handleAddSlide)}
							</React.Fragment>
						))}
				</g> 
				<text className="o-lin" transform="translate(474 84.125)">
					<tspan x={154.515} y={70}>
						{'RECONOCIMIENTOS'}
					</tspan>
				</text>
			</svg>
			<svg viewBox="470 850 1920 2647" preserveAspectRatio="none" style={{ marginTop: '-11%' }}>
				<defs>
					<style>
						{
							'.a-item-1824{fill:none;}.a-item-1824,.ab-item-1824,.ad-item-1824,.af-item-1824,.ah-item-1824,.aj-item-1824,.al-item-1824,.an-item-1824,.ap-item-1824,.ar-item-1824,.at-item-1824,.av-item-1824,.ax-item-1824,.az-item-1824,.bb-item-1824,.bd-item-1824,.bf-item-1824,.bh-item-1824,.bj-item-1824,.bl-item-1824,.bn-item-1824,.bp-item-1824,.br-item-1824,.bt-item-1824,.bv-item-1824,.bx-item-1824,.bz-item-1824,.cb-item-1824,.cf-item-1824,.ch-item-1824,.ck-item-1824,.cm-item-1824,.h-item-1824,.j-item-1824,.l-item-1824,.n-item-1824,.p-item-1824,.r-item-1824,.t-item-1824,.v-item-1824,.x-item-1824,.z-item-1824{stroke:#707070;stroke-width:4px;}.b-item-1824{fill:#e7002a;}.c-item-1824{fill:#1c164e;}.cs-item-1824,.d-item-1824{fill:#001f5f;}.co-item-1824,.e-item-1824{fill:#fff;}.f-item-1824{clip-path:url(#c-item-1824);}.g-item-1824{clip-path:url(#d-item-1824);}.h-item-1824{fill:url(#e-item-1824);}.i-item-1824{clip-path:url(#f-item-1824);}.j-item-1824{fill:url(#g-item-1824);}.k-item-1824{clip-path:url(#h-item-1824);}.l-item-1824{fill:url(#i-item-1824);}.m-item-1824{clip-path:url(#j-item-1824);}.n-item-1824{fill:url(#k-item-1824);}.o-item-1824{clip-path:url(#l-item-1824);}.p-item-1824{fill:url(#m-item-1824);}.q-item-1824{clip-path:url(#n-item-1824);}.r-item-1824{fill:url(#o-item-1824);}.s-item-1824{clip-path:url(#p-item-1824);}.t-item-1824{fill:url(#q-item-1824);}.u-item-1824{clip-path:url(#r-item-1824);}.v-item-1824{fill:url(#s-item-1824);}.w-item-1824{clip-path:url(#t-item-1824);}.x-item-1824{fill:url(#u-item-1824);}.y-item-1824{clip-path:url(#v-item-1824);}.z-item-1824{fill:url(#w-item-1824);}.aa-item-1824{clip-path:url(#x-item-1824);}.ab-item-1824{fill:url(#y-item-1824);}.ac-item-1824{clip-path:url(#z-item-1824);}.ad-item-1824{fill:url(#aa-item-1824);}.ae-item-1824{clip-path:url(#ab-item-1824);}.af-item-1824{fill:url(#ac-item-1824);}.ag-item-1824{clip-path:url(#ad-item-1824);}.ah-item-1824{fill:url(#ae-item-1824);}.ai-item-1824{clip-path:url(#af-item-1824);}.aj-item-1824{fill:url(#ag-item-1824);}.ak-item-1824{clip-path:url(#ah-item-1824);}.al-item-1824{fill:url(#ai-item-1824);}.am-item-1824{clip-path:url(#aj-item-1824);}.an-item-1824{fill:url(#ak-item-1824);}.ao-item-1824{clip-path:url(#al-item-1824);}.ap-item-1824{fill:url(#am-item-1824);}.aq-item-1824{clip-path:url(#an-item-1824);}.ar-item-1824{fill:url(#ao-item-1824);}.as-item-1824{clip-path:url(#ap-item-1824);}.at-item-1824{fill:url(#aq-item-1824);}.au-item-1824{clip-path:url(#ar-item-1824);}.av-item-1824{fill:url(#as-item-1824);}.aw-item-1824{clip-path:url(#at-item-1824);}.ax-item-1824{fill:url(#au-item-1824);}.ay-item-1824{clip-path:url(#av-item-1824);}.az-item-1824{fill:url(#aw-item-1824);}.ba-item-1824{clip-path:url(#ax-item-1824);}.bb-item-1824{fill:url(#ay-item-1824);}.bc-item-1824{clip-path:url(#az-item-1824);}.bd-item-1824{fill:url(#ba-item-1824);}.be-item-1824{clip-path:url(#bb-item-1824);}.bf-item-1824{fill:url(#bc-item-1824);}.bg-item-1824{clip-path:url(#bd-item-1824);}.bh-item-1824{fill:url(#be-item-1824);}.bi-item-1824{clip-path:url(#bf-item-1824);}.bj-item-1824{fill:url(#bg-item-1824);}.bk-item-1824{clip-path:url(#bh-item-1824);}.bl-item-1824{fill:url(#bi-item-1824);}.bm-item-1824{clip-path:url(#bj-item-1824);}.bn-item-1824{fill:url(#bk-item-1824);}.bo-item-1824{clip-path:url(#bl-item-1824);}.bp-item-1824{fill:url(#bm-item-1824);}.bq-item-1824{clip-path:url(#bn-item-1824);}.br-item-1824{fill:url(#bo-item-1824);}.bs-item-1824{clip-path:url(#bp-item-1824);}.bt-item-1824{fill:url(#bq-item-1824);}.bu-item-1824{clip-path:url(#br-item-1824);}.bv-item-1824{fill:url(#bs-item-1824);}.bw-item-1824{clip-path:url(#bt-item-1824);}.bx-item-1824{fill:url(#bu-item-1824);}.by-item-1824{clip-path:url(#bv-item-1824);}.bz-item-1824{fill:url(#bw-item-1824);}.ca-item-1824{clip-path:url(#bx-item-1824);}.cb-item-1824{fill:url(#by-item-1824);}.cc-item-1824{opacity:0.4;mix-blend-mode:multiply;isolation:isolate;}.cd-item-1824{clip-path:url(#ca-item-1824);}.ce-item-1824{clip-path:url(#cb-item-1824);}.cf-item-1824{fill:url(#cc-item-1824);}.cg-item-1824{clip-path:url(#cd-item-1824);}.ch-item-1824{fill:url(#ce-item-1824);}.ci-item-1824{clip-path:url(#cg-item-1824);}.cj-item-1824{clip-path:url(#ch-item-1824);}.ck-item-1824{fill:url(#ci-item-1824);}.cl-item-1824{clip-path:url(#cj-item-1824);}.cm-item-1824{fill:url(#ck-item-1824);}.cn-item-1824,.cp-item-1824{fill:#543913;}.cn-item-1824{font-size:32px;}.cn-item-1824,.co-item-1824,.cp-item-1824{font-family:Silka-SemiBold, Silka;font-weight:600;}.co-item-1824,.cp-item-1824{font-size:24px;}.cq-item-1824{fill:url(#qi-item-1824);}.cr-item-1824{fill:url(#qf-item-1824);}.cs-item-1824{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.ct-item-1824{filter:url(#cnr-item-1824);}.cu-item-1824{filter:url(#ckg-item-1824);}.cv-item-1824{filter:url(#cgv-item-1824);}.cw-item-1824{filter:url(#cdk-item-1824);}.cx-item-1824{filter:url(#bzz-item-1824);}.cy-item-1824{filter:url(#bwo-item-1824);}.cz-item-1824{filter:url(#btd-item-1824);}.da-item-1824{filter:url(#bps-item-1824);}.db-item-1824{filter:url(#bmh-item-1824);}.dc-item-1824{filter:url(#biw-item-1824);}.dd-item-1824{filter:url(#bfl-item-1824);}.de-item-1824{filter:url(#bca-item-1824);}.df-item-1824{filter:url(#ayp-item-1824);}.dg-item-1824{filter:url(#ave-item-1824);}.dh-item-1824{filter:url(#art-item-1824);}.di-item-1824{filter:url(#aoi-item-1824);}.dj-item-1824{filter:url(#akx-item-1824);}.dk-item-1824{filter:url(#ahm-item-1824);}.dl-item-1824{filter:url(#aeb-item-1824);}.dm-item-1824{filter:url(#aaq-item-1824);}.dn-item-1824{filter:url(#xf-item-1824);}.do-item-1824{filter:url(#tu-item-1824);}.dp-item-1824{filter:url(#qj-item-1824);}.dq-item-1824{filter:url(#qg-item-1824);}.dr-item-1824{filter:url(#qd-item-1824);}.ds-item-1824{filter:url(#ms-item-1824);}.dt-item-1824{filter:url(#jh-item-1824);}.du-item-1824{filter:url(#fw-item-1824);}.dv-item-1824{filter:url(#cl-item-1824);}.dw-item-1824{filter:url(#a-item-1824);}'
						}
					</style>
					<filter
						id="a-item-1824"
						x={598.018}
						y={1385.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="b" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="b" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="c-item-1824">
						<rect
							className="a-item-1824"
							width={258.267}
							height={231.925}
						/>
					</clipPath>
					<clipPath id="d-item-1824">
						<path
							className="a-item-1824"
							d="M221.1,236.687c-3,4.484-3.981,12.676-3.972,12.666a27.361,27.361,0,0,0,8.77-10.7c-.022.076-.51,4.019-5.759,9.32a19.186,19.186,0,0,1-3.36,2.746c.143-.006.29-.022.436-.036a17.584,17.584,0,0,0-6.647,3.2,28.509,28.509,0,0,1,5.671-.443c10.009.117,14.676,2.973,14.684,2.973a44.416,44.416,0,0,0-18.661-1.671c-.045-.007,9.247,6.073,16.7,7.307a64.967,64.967,0,0,0,12.671.979c-3.793-11.609-13.835-14.127-21.875-12.877,6.878-2.18,14.89-10.356,7.142-20.531a42.054,42.054,0,0,0-5.8,7.065"
							transform="translate(-210.568 -229.622)"
						/>
					</clipPath>
					<linearGradient
						id="e-item-1824"
						x1={-2.995}
						y1={1.757}
						x2={-2.98}
						y2={1.757}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#805a23" />
						<stop offset={0.061} stopColor="#ac925f" />
						<stop offset={0.118} stopColor="#d2c192" />
						<stop offset={0.162} stopColor="#eadeb2" />
						<stop offset={0.186} stopColor="#f3eabe" />
						<stop offset={0.235} stopColor="#e2d3a2" />
						<stop offset={0.312} stopColor="#cbb57c" />
						<stop offset={0.384} stopColor="#ba9f60" />
						<stop offset={0.447} stopColor="#b0914f" />
						<stop offset={0.495} stopColor="#ad8d4a" />
						<stop offset={0.583} stopColor="#ae8f4d" />
						<stop offset={0.661} stopColor="#b59758" />
						<stop offset={0.735} stopColor="#bfa56a" />
						<stop offset={0.806} stopColor="#ceb983" />
						<stop offset={0.875} stopColor="#e0d2a3" />
						<stop offset={0.896} stopColor="#e7dbaf" />
						<stop offset={1} stopColor="#a98d5c" />
					</linearGradient>
					<clipPath id="f-item-1824">
						<path
							className="a-item-1824"
							d="M249.543,225.8c-3.331,4.208-5.122,12.351-5.117,12.341A27.342,27.342,0,0,0,254,228.248c-.029.074-.885,3.98-6.52,8.8a19.018,19.018,0,0,1-3.54,2.435c.137.007.279,0,.421,0a16.715,16.715,0,0,0-6.758,2.583,26.621,26.621,0,0,1,5.525.1c9.672,1.074,13.924,4.382,13.927,4.382a41.823,41.823,0,0,0-17.91-3.452c-.043-.008,8.267,6.984,15.377,8.914a61.527,61.527,0,0,0,12.248,2.166C264.32,242.21,254.8,238.712,246.869,239.2c6.895-1.522,15.562-8.927,8.958-19.916a41.615,41.615,0,0,0-6.284,6.516"
							transform="translate(-237.607 -219.282)"
						/>
					</clipPath>
					<linearGradient
						id="g-item-1824"
						x1={-3.42}
						y1={1.914}
						x2={-3.405}
						y2={1.914}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="h-item-1824">
						<path
							className="a-item-1824"
							d="M271.713,216.569c-2.3,4.594-2.1,12.77-2.086,12.759a23.757,23.757,0,0,0,7-11.033c-.011.085.057,4.025-4.278,9.525a16.3,16.3,0,0,1-2.872,2.881c.139-.013.281-.035.423-.056a15.21,15.21,0,0,0-6,3.48,26.415,26.415,0,0,1,5.444-.7c9.728-.342,14.648,2.285,14.657,2.285a42.7,42.7,0,0,0-18.332-.812c-.047-.006,9.854,5.608,17.248,6.5a62.125,62.125,0,0,0,12.4.406c-5.339-11.383-15.4-13.421-23.018-11.811,6.36-2.485,12.939-10.985,4.068-20.723a36.8,36.8,0,0,0-4.65,7.291"
							transform="translate(-263.901 -209.278)"
						/>
					</clipPath>
					<linearGradient
						id="i-item-1824"
						x1={-3.817}
						y1={2.076}
						x2={-3.802}
						y2={2.076}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="j-item-1824">
						<path
							className="a-item-1824"
							d="M291.4,204.617c-1.21,4.839.893,12.8.906,12.789a21.649,21.649,0,0,0,4.234-11.84c.008.08.956,3.938-1.95,9.965a14.221,14.221,0,0,1-2.1,3.239c.138-.034.276-.078.414-.12a13.513,13.513,0,0,0-5.012,4.278,24.522,24.522,0,0,1,5.114-1.471c9.333-1.749,14.654.119,14.669.119a40.822,40.822,0,0,0-17.88,1.853c-.021,0,2.6.974,6.142,1.95a45.849,45.849,0,0,0,12.08,1.945,57.349,57.349,0,0,0,11.941-1.367c-7.8-10.461-17.94-10.977-24.9-8.287,5.555-3.366,9.874-12.7-.762-20.9a33.388,33.388,0,0,0-2.894,7.846"
							transform="translate(-287.893 -196.771)"
						/>
					</clipPath>
					<linearGradient
						id="k-item-1824"
						x1={-4.316}
						y1={2.34}
						x2={-4.3}
						y2={2.34}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="l-item-1824">
						<path
							className="a-item-1824"
							d="M307.529,190.306c-.132,4.937,3.678,12.441,3.695,12.431a21.266,21.266,0,0,0,1.437-12.288c.021.067,1.758,3.727.329,10.1a13.059,13.059,0,0,1-1.279,3.5c.131-.057.261-.123.391-.189a12.091,12.091,0,0,0-3.849,4.954,21.9,21.9,0,0,1,4.569-2.2c6.81-2.476,11.659-2.306,13.352-2.137.426.043.652.086.66.086a37.134,37.134,0,0,0-16.634,4.462c-.016,0,1.795.379,4.413.759,3.954.573,9.749,1.146,13.885.41a49.374,49.374,0,0,0,10.954-3.1c-9.727-9.231-19.5-8.2-25.538-4.506,4.55-4.14,6.591-14.032-5.263-20.448a31.887,31.887,0,0,0-1.12,8.162"
							transform="translate(-307.526 -182.144)"
						/>
					</clipPath>
					<linearGradient
						id="m-item-1824"
						x1={-4.774}
						y1={2.651}
						x2={-4.758}
						y2={2.651}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="n-item-1824">
						<path
							className="a-item-1824"
							d="M318.158,174.069c.882,4.885,6.126,11.7,6.142,11.693a22.388,22.388,0,0,0-1.231-12.362c.021.037,2.424,3.387,2.436,9.932a13.05,13.05,0,0,1-.457,3.652c.119-.08.233-.17.348-.261a11.261,11.261,0,0,0-2.587,5.488,19.317,19.317,0,0,1,3.856-2.861c7.419-4.364,12.758-4.158,12.779-4.158a32.945,32.945,0,0,0-14.735,6.936c-.03,0,11.385.65,17.543-1.594A41,41,0,0,0,351.8,185.8c-11.06-7.724-20.079-5.169-24.992-.573,3.427-4.782,3.294-14.947-9.224-19.39a31.945,31.945,0,0,0,.579,8.231"
							transform="translate(-317.519 -165.838)"
						/>
					</clipPath>
					<linearGradient
						id="o-item-1824"
						x1={-4.9}
						y1={2.907}
						x2={-4.884}
						y2={2.907}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="p-item-1824">
						<path
							className="a-item-1824"
							d="M324.614,156.4c1.785,4.686,8.136,10.611,8.15,10.6a24.524,24.524,0,0,0-3.637-12.06s2.926,2.93,4.274,9.46a13.884,13.884,0,0,1,.32,3.695c.1-.1.192-.215.285-.328a11.124,11.124,0,0,0-1.3,5.858,17.509,17.509,0,0,1,3.032-3.436c6.073-5.49,11.081-6.139,11.1-6.139a29.582,29.582,0,0,0-12.358,9.2c-.016,0,10.854-1.112,16.088-4.308a34.849,34.849,0,0,0,7.841-6.226c-11.793-5.983-19.747-1.967-23.416,3.393,2.259-5.278.164-15.426-12.5-17.758a32.821,32.821,0,0,0,2.122,8.048"
							transform="translate(-322.492 -148.352)"
						/>
					</clipPath>
					<linearGradient
						id="q-item-1824"
						x1={-5.028}
						y1={3.216}
						x2={-5.012}
						y2={3.216}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="r-item-1824">
						<path
							className="a-item-1824"
							d="M327.389,137.836c2.545,4.344,9.653,9.2,9.663,9.189a26.743,26.743,0,0,0-5.682-11.392s3.27,2.422,5.777,8.7a15.276,15.276,0,0,1,1.014,3.626c.073-.121.14-.251.2-.382a11.521,11.521,0,0,0-.064,6.046,16.909,16.909,0,0,1,2.156-3.906c4.6-6.45,9.111-7.933,9.126-7.933a27.886,27.886,0,0,0-9.7,11.18s9.916-2.84,14.094-6.89a32.1,32.1,0,0,0,5.991-7.531c-11.964-4.053-18.64,1.31-21.025,7.271,1.115-5.619-2.665-15.458-15.01-15.6a33.627,33.627,0,0,0,3.451,7.621"
							transform="translate(-323.938 -130.215)"
						/>
					</clipPath>
					<linearGradient
						id="s-item-1824"
						x1={-5.216}
						y1={3.614}
						x2={-5.199}
						y2={3.614}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="t-item-1824">
						<path
							className="a-item-1824"
							d="M322.211,111.844a33.8,33.8,0,0,0,4.534,6.963c3.146,3.87,10.669,7.5,10.672,7.5a28.014,28.014,0,0,0-7.31-10.377c.007,0,3.462,1.839,6.915,7.677a16.574,16.574,0,0,1,1.6,3.446c.044-.132.081-.272.117-.414a12.119,12.119,0,0,0,1.059,6.042,17.372,17.372,0,0,1,1.283-4.258c3.1-7.216,7-9.488,7.013-9.488a28.136,28.136,0,0,0-6.941,12.824c.009.007,8.676-4.483,11.755-9.263a32.9,32.9,0,0,0,4.126-8.6c-11.65-1.992-16.933,4.555-18.076,10.93a13.39,13.39,0,0,0-13.524-13.267,18.473,18.473,0,0,0-3.222.294"
							transform="translate(-322.211 -111.55)"
						/>
					</clipPath>
					<linearGradient
						id="u-item-1824"
						x1={-5.528}
						y1={4.161}
						x2={-5.51}
						y2={4.161}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="v-item-1824">
						<path
							className="a-item-1824"
							d="M335.433,102.18c-.893-5.808-7.063-14.169-17.747-9.954a32.62,32.62,0,0,0,5.361,6.093c3.583,3.277,11.21,5.579,11.206,5.576a27.557,27.557,0,0,0-8.508-9.048c.011,0,3.522,1.2,7.692,6.42a17.15,17.15,0,0,1,2.06,3.161c.017-.134.025-.273.034-.414a12.519,12.519,0,0,0,2.02,5.834,18.648,18.648,0,0,1,.46-4.48c1.658-7.76,4.9-10.752,4.9-10.752a30.02,30.02,0,0,0-4.263,14.078c.019.008,7.251-5.989,9.261-11.356a37.077,37.077,0,0,0,2.364-9.419c-10.969.139-14.837,7.671-14.841,14.261"
							transform="translate(-317.686 -87.919)"
						/>
					</clipPath>
					<linearGradient
						id="w-item-1824"
						x1={-5.576}
						y1={4.668}
						x2={-5.559}
						y2={4.668}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="x-item-1824">
						<path
							className="a-item-1824"
							d="M328.893,79.2c-1.7-5.647-8.586-12.847-18.109-6.606a30.435,30.435,0,0,0,5.945,5.038c3.869,2.586,11.341,3.488,11.329,3.486a25.306,25.306,0,0,0-9.3-7.443c.013,0,3.475.525,8.139,4.968a16.567,16.567,0,0,1,2.4,2.78c-.005-.126-.018-.257-.031-.386a12.405,12.405,0,0,0,2.787,5.433,20.062,20.062,0,0,1-.278-4.566c.342-8.069,2.909-11.691,2.907-11.691a32.667,32.667,0,0,0-1.795,14.9c.026.01,5.754-7.312,6.783-13.1a43.527,43.527,0,0,0,.787-9.945C330.43,64.339,327.912,72.6,328.893,79.2"
							transform="translate(-310.785 -62.068)"
						/>
					</clipPath>
					<linearGradient
						id="y-item-1824"
						x1={-5.435}
						y1={5.108}
						x2={-5.417}
						y2={5.108}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="z-item-1824">
						<path
							className="a-item-1824"
							d="M319.89,57.643c-2.37-5.313-9.686-11.1-17.947-3.03a27.322,27.322,0,0,0,6.316,3.829c4.022,1.816,11.143,1.29,11.125,1.29a21.973,21.973,0,0,0-9.735-5.612c.013,0,3.346-.166,8.311,3.365a14.971,14.971,0,0,1,2.623,2.315c-.021-.111-.049-.225-.075-.339a11.669,11.669,0,0,0,3.359,4.86,20.918,20.918,0,0,1-.91-4.515c-.8-8.063,1.088-12.2,1.111-12.272a34.8,34.8,0,0,0,.379,15.275c.028.012,4.28-8.414,4.455-14.451a50.6,50.6,0,0,0-.556-10.17c-8.964,4.33-10.253,13.06-8.457,19.455"
							transform="translate(-301.943 -38.188)"
						/>
					</clipPath>
					<linearGradient
						id="aa-item-1824"
						x1={-5.355}
						y1={5.611}
						x2={-5.337}
						y2={5.611}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="ab-item-1824">
						<path
							className="a-item-1824"
							d="M308.951,38.17c-2.9-4.8-10.424-8.971-17.4.659a24.329,24.329,0,0,0,6.515,2.506c2.448.6,5.828.132,8.126-.331,1.522-.308,2.57-.615,2.561-.615a18.53,18.53,0,0,0-9.893-3.611c.012,0,3.167-.852,8.273,1.66a12.731,12.731,0,0,1,2.754,1.78c-.03-.094-.066-.189-.1-.285a10.431,10.431,0,0,0,3.754,4.142,20.581,20.581,0,0,1-1.431-4.324c-1.751-7.832-.47-12.349-.447-12.482a35.34,35.34,0,0,0,2.223,15.183c.027.012,2.9-9.259,2.364-15.361A56.3,56.3,0,0,0,314.6,17a17.864,17.864,0,0,0-5.649,21.165"
							transform="translate(-291.554 -17.005)"
						/>
					</clipPath>
					<linearGradient
						id="ac-item-1824"
						x1={-5.249}
						y1={6.089}
						x2={-5.23}
						y2={6.089}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="ad-item-1824">
						<path
							className="a-item-1824"
							d="M299.468,0c-6.89,7.965-6.172,16.8-3.211,22.235-3.3-4.14-10.9-6.565-16.632,4.327a22.254,22.254,0,0,0,6.6,1.105,18.311,18.311,0,0,0,6.708-1.574,34.137,34.137,0,0,0,3.414-1.578,16.02,16.02,0,0,0-9.87-1.5c.01,0,2.966-1.513,8.109-.1a10.579,10.579,0,0,1,2.817,1.19c-.034-.08-.076-.161-.115-.241a8.949,8.949,0,0,0,4.017,3.319,19.18,19.18,0,0,1-1.85-4c-2.528-7.382-1.771-12.132-1.76-12.309A33.75,33.75,0,0,0,301.44,25.5c.023.013,1.671-9.825.558-15.8A57.623,57.623,0,0,0,299.468,0Z"
							transform="translate(-279.625 0.001)"
						/>
					</clipPath>
					<linearGradient
						id="ae-item-1824"
						x1={-5.12}
						y1={6.52}
						x2={-5.101}
						y2={6.52}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="af-item-1824">
						<path
							className="a-item-1824"
							d="M282.822,12.832c2.746,3.2,8.929,5.353,8.927,5.349A23.79,23.79,0,0,0,285.278,9.3c.011,0,2.822,1.126,5.953,6.267a16.309,16.309,0,0,1,1.516,3.124c.869-5.494-1.624-13.684-13.942-13.876a22.963,22.963,0,0,0,4.017,8.018"
							transform="translate(-278.805 -4.814)"
						/>
					</clipPath>
					<linearGradient
						id="ag-item-1824"
						x1={-9.294}
						y1={11.428}
						x2={-9.26}
						y2={11.428}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="ah-item-1824">
						<path
							className="a-item-1824"
							d="M142.494,250.153c-8.041-1.249-18.082,1.268-21.875,12.877a64.97,64.97,0,0,0,12.671-.979c7.45-1.234,16.743-7.314,16.7-7.307a44.416,44.416,0,0,0-18.661,1.671c.008,0,4.675-2.857,14.684-2.973a28.529,28.529,0,0,1,5.671.443,17.589,17.589,0,0,0-6.647-3.2c.146.014.294.03.436.036a19.2,19.2,0,0,1-3.361-2.746c-5.25-5.3-5.737-9.245-5.759-9.32a27.355,27.355,0,0,0,8.77,10.7c.009.01-.97-8.182-3.972-12.666a42.135,42.135,0,0,0-5.8-7.065c-7.749,10.175.263,18.351,7.142,20.531"
							transform="translate(-120.619 -229.622)"
						/>
					</clipPath>
					<linearGradient
						id="ai-item-1824"
						x1={-1.647}
						y1={1.757}
						x2={-1.632}
						y2={1.757}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="aj-item-1824">
						<path
							className="a-item-1824"
							d="M116.247,239.2c-7.934-.485-17.451,3.012-19.906,14.976a61.529,61.529,0,0,0,12.249-2.166c7.111-1.93,15.421-8.922,15.377-8.914a41.822,41.822,0,0,0-17.91,3.452s4.255-3.307,13.926-4.382a26.619,26.619,0,0,1,5.525-.1,16.712,16.712,0,0,0-6.757-2.583c.141,0,.284,0,.421,0a19.019,19.019,0,0,1-3.54-2.435c-5.636-4.818-6.492-8.724-6.52-8.8a27.337,27.337,0,0,0,9.578,9.891c0,.01-1.787-8.133-5.117-12.341a41.559,41.559,0,0,0-6.285-6.516c-6.6,10.988,2.064,18.394,8.959,19.916"
							transform="translate(-96.341 -219.282)"
						/>
					</clipPath>
					<linearGradient
						id="ak-item-1824"
						x1={-1.281}
						y1={1.913}
						x2={-1.266}
						y2={1.913}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="al-item-1824">
						<path
							className="a-item-1824"
							d="M85.725,209.278c-8.87,9.738-2.292,18.238,4.067,20.723-7.613-1.61-17.679.428-23.018,11.811a62.124,62.124,0,0,0,12.4-.406c7.393-.9,17.294-6.51,17.247-6.5a42.7,42.7,0,0,0-18.331.812c.01,0,4.928-2.627,14.657-2.285a26.415,26.415,0,0,1,5.444.7,15.218,15.218,0,0,0-6-3.48c.141.021.284.043.423.056a16.3,16.3,0,0,1-2.872-2.881c-4.336-5.5-4.267-9.441-4.279-9.525a23.763,23.763,0,0,0,7,11.033c.01.011.211-8.165-2.086-12.759a36.775,36.775,0,0,0-4.65-7.291"
							transform="translate(-66.775 -209.278)"
						/>
					</clipPath>
					<linearGradient
						id="am-item-1824"
						x1={-0.85}
						y1={2.076}
						x2={-0.835}
						y2={2.076}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="an-item-1824">
						<path
							className="a-item-1824"
							d="M66.731,217.671c-6.963-2.69-17.1-2.173-24.9,8.287a57.368,57.368,0,0,0,11.941,1.367,45.858,45.858,0,0,0,12.08-1.945c3.541-.976,6.163-1.952,6.141-1.95a40.811,40.811,0,0,0-17.879-1.853c.015,0,5.337-1.869,14.669-.119a24.523,24.523,0,0,1,5.114,1.471,13.519,13.519,0,0,0-5.012-4.278c.138.043.276.086.414.12a14.208,14.208,0,0,1-2.1-3.239c-2.907-6.028-1.957-9.887-1.95-9.965a21.643,21.643,0,0,0,4.234,11.84c.014.01,2.116-7.95.906-12.789a33.424,33.424,0,0,0-2.894-7.846c-10.636,8.2-6.316,17.534-.762,20.9"
							transform="translate(-41.829 -196.771)"
						/>
					</clipPath>
					<linearGradient
						id="ao-item-1824"
						x1={-0.509}
						y1={2.34}
						x2={-0.493}
						y2={2.34}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="ap-item-1824">
						<path
							className="a-item-1824"
							d="M47.943,202.592C41.9,198.9,32.131,197.867,22.405,207.1a49.374,49.374,0,0,0,10.954,3.1c4.135.736,9.93.163,13.884-.41,2.618-.38,4.428-.759,4.413-.759a37.153,37.153,0,0,0-16.634-4.462c.007,0,.233-.043.659-.086,1.693-.169,6.543-.339,13.353,2.137a21.9,21.9,0,0,1,4.569,2.2,12.088,12.088,0,0,0-3.85-4.954c.13.066.26.132.392.189a13.061,13.061,0,0,1-1.279-3.5c-1.43-6.376.307-10.037.329-10.1a21.253,21.253,0,0,0,1.437,12.288c.016.01,3.826-7.494,3.695-12.431a31.9,31.9,0,0,0-1.12-8.162c-11.854,6.416-9.813,16.308-5.263,20.448"
							transform="translate(-22.405 -182.144)"
						/>
					</clipPath>
					<linearGradient
						id="aq-item-1824"
						x1={-0.23}
						y1={2.652}
						x2={-0.214}
						y2={2.652}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="ar-item-1824">
						<path
							className="a-item-1824"
							d="M33.973,185.228c-4.913-4.6-13.931-7.151-24.991.573a41.006,41.006,0,0,0,9.543,4.734c6.159,2.244,17.573,1.594,17.544,1.594a32.951,32.951,0,0,0-14.735-6.936c.021,0,5.36-.206,12.779,4.158a19.3,19.3,0,0,1,3.856,2.861,11.255,11.255,0,0,0-2.587-5.488c.115.091.23.18.349.261a13.051,13.051,0,0,1-.457-3.652c.012-6.547,2.417-9.9,2.435-9.932a22.375,22.375,0,0,0-1.231,12.362c.016.01,5.26-6.808,6.142-11.693a31.883,31.883,0,0,0,.578-8.231c-12.518,4.443-12.651,14.608-9.224,19.39"
							transform="translate(-8.982 -165.838)"
						/>
					</clipPath>
					<linearGradient
						id="as-item-1824"
						x1={-0.039}
						y1={2.908}
						x2={-0.023}
						y2={2.908}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="at-item-1824">
						<path
							className="a-item-1824"
							d="M25.036,166.11c-3.668-5.36-11.622-9.376-23.415-3.393a34.827,34.827,0,0,0,7.841,6.226c5.233,3.2,16.1,4.31,16.087,4.308a29.57,29.57,0,0,0-12.358-9.2c.019,0,5.028.648,11.1,6.139a17.451,17.451,0,0,1,3.032,3.436,11.116,11.116,0,0,0-1.3-5.858c.093.114.186.226.285.328a13.883,13.883,0,0,1,.32-3.695c1.348-6.53,4.276-9.46,4.274-9.46A24.516,24.516,0,0,0,27.264,167c.014.008,6.365-5.918,8.15-10.6a32.759,32.759,0,0,0,2.121-8.048c-12.663,2.332-14.759,12.48-12.5,17.758"
							transform="translate(-1.621 -148.352)"
						/>
					</clipPath>
					<linearGradient
						id="au-item-1824"
						x1={0.059}
						y1={3.216}
						x2={0.075}
						y2={3.216}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="av-item-1824">
						<path
							className="a-item-1824"
							d="M21.025,145.815C18.64,139.854,11.964,134.492,0,138.545a32.1,32.1,0,0,0,5.991,7.531c4.178,4.05,14.1,6.895,14.093,6.89a27.872,27.872,0,0,0-9.7-11.18c.016,0,4.527,1.483,9.126,7.933a16.876,16.876,0,0,1,2.156,3.906,11.513,11.513,0,0,0-.064-6.046c.065.131.132.261.2.382a15.316,15.316,0,0,1,1.014-3.626c2.508-6.279,5.774-8.7,5.778-8.7a26.733,26.733,0,0,0-5.682,11.392c.009.007,7.118-4.845,9.663-9.189a33.625,33.625,0,0,0,3.451-7.621c-12.347.143-16.126,9.981-15.01,15.6"
							transform="translate(0 -130.215)"
						/>
					</clipPath>
					<linearGradient
						id="aw-item-1824"
						x1={0.071}
						y1={3.614}
						x2={0.088}
						y2={3.614}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="ax-item-1824">
						<path
							className="a-item-1824"
							d="M21.572,124.817c-1.144-6.375-6.425-12.921-18.076-10.93a32.885,32.885,0,0,0,4.126,8.6c3.08,4.781,11.747,9.27,11.755,9.263a28.123,28.123,0,0,0-6.941-12.824c.01,0,3.913,2.272,7.013,9.488a17.309,17.309,0,0,1,1.282,4.258,12.117,12.117,0,0,0,1.059-6.041c.036.141.073.281.117.414a16.573,16.573,0,0,1,1.6-3.446c3.453-5.838,6.908-7.677,6.915-7.677a27.993,27.993,0,0,0-7.31,10.377c0,.005,7.526-3.626,10.671-7.5a33.77,33.77,0,0,0,4.534-6.963,18.474,18.474,0,0,0-3.222-.294,13.389,13.389,0,0,0-13.524,13.267"
							transform="translate(-3.496 -111.55)"
						/>
					</clipPath>
					<linearGradient
						id="ay-item-1824"
						x1={-0.001}
						y1={4.161}
						x2={0.017}
						y2={4.161}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="az-item-1824">
						<path
							className="a-item-1824"
							d="M13.64,97.338c2.011,5.367,9.242,11.364,9.261,11.356A30.015,30.015,0,0,0,18.64,94.615s3.242,2.992,4.9,10.752a18.623,18.623,0,0,1,.46,4.48,12.511,12.511,0,0,0,2.02-5.834c.009.141.018.281.034.414a17.154,17.154,0,0,1,2.06-3.161c4.17-5.219,7.682-6.42,7.692-6.42A27.574,27.574,0,0,0,27.3,103.9s7.623-2.3,11.206-5.576a32.645,32.645,0,0,0,5.361-6.093c-10.684-4.214-16.854,4.146-17.748,9.954,0-6.59-3.872-14.122-14.84-14.261a37.091,37.091,0,0,0,2.363,9.419"
							transform="translate(-11.277 -87.919)"
						/>
					</clipPath>
					<linearGradient
						id="ba-item-1824"
						x1={-0.123}
						y1={4.667}
						x2={-0.106}
						y2={4.667}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="bb-item-1824">
						<path
							className="a-item-1824"
							d="M23.2,72.013c1.029,5.791,6.757,13.113,6.783,13.1a32.673,32.673,0,0,0-1.794-14.9s2.564,3.622,2.906,11.691a20.014,20.014,0,0,1-.278,4.566A12.407,12.407,0,0,0,33.6,81.037c-.013.13-.026.261-.032.386a16.579,16.579,0,0,1,2.4-2.78c4.665-4.443,8.126-4.968,8.139-4.968a25.306,25.306,0,0,0-9.3,7.443c-.011,0,7.461-.9,11.329-3.486a30.379,30.379,0,0,0,5.945-5.038c-9.522-6.24-16.405.959-18.109,6.606.982-6.6-1.535-14.862-11.566-17.132a43.558,43.558,0,0,0,.788,9.945"
							transform="translate(-22.374 -62.068)"
						/>
					</clipPath>
					<linearGradient
						id="bc-item-1824"
						x1={-0.282}
						y1={5.107}
						x2={-0.264}
						y2={5.107}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="bd-item-1824">
						<path
							className="a-item-1824"
							d="M35.206,48.358c.176,6.038,4.427,14.463,4.456,14.451a34.8,34.8,0,0,0,.379-15.275c.024.072,1.913,4.211,1.111,12.272a20.927,20.927,0,0,1-.909,4.515A11.689,11.689,0,0,0,43.6,59.463c-.026.113-.054.227-.075.338a14.938,14.938,0,0,1,2.623-2.315c4.965-3.531,8.3-3.365,8.311-3.365a21.972,21.972,0,0,0-9.735,5.612c-.018,0,7.1.525,11.125-1.29a27.323,27.323,0,0,0,6.316-3.829c-8.261-8.067-15.577-2.283-17.947,3.03,1.8-6.4.508-15.125-8.457-19.455a50.668,50.668,0,0,0-.556,10.17"
							transform="translate(-35.167 -38.188)"
						/>
					</clipPath>
					<linearGradient
						id="be-item-1824"
						x1={-0.496}
						y1={5.61}
						x2={-0.477}
						y2={5.61}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="bf-item-1824">
						<path
							className="a-item-1824"
							d="M48.877,27.092c-.538,6.1,2.336,15.373,2.364,15.361A35.358,35.358,0,0,0,53.463,27.27c.024.134,1.3,4.651-.447,12.482a20.644,20.644,0,0,1-1.43,4.324,10.431,10.431,0,0,0,3.754-4.142c-.034.1-.071.191-.1.285a12.753,12.753,0,0,1,2.754-1.78c5.105-2.512,8.261-1.66,8.273-1.66a18.529,18.529,0,0,0-9.893,3.611c-.01,0,1.038.307,2.56.614,2.3.464,5.677.928,8.127.332a24.328,24.328,0,0,0,6.515-2.506c-6.973-9.631-14.5-5.464-17.4-.66A17.864,17.864,0,0,0,50.53,17a56.421,56.421,0,0,0-1.653,10.087"
							transform="translate(-48.81 -17.005)"
						/>
					</clipPath>
					<linearGradient
						id="bg-item-1824"
						x1={-0.734}
						y1={6.089}
						x2={-0.715}
						y2={6.089}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="bh-item-1824">
						<path
							className="a-item-1824"
							d="M68.355,10.866h0M66.581,0a57.669,57.669,0,0,0-2.529,9.7c-1.113,5.979.535,15.817.557,15.8a33.74,33.74,0,0,0,3.746-14.628c.012.18.768,4.929-1.76,12.309a19.156,19.156,0,0,1-1.85,4,8.957,8.957,0,0,0,4.018-3.318c-.038.08-.08.161-.115.241a10.577,10.577,0,0,1,2.818-1.19c5.143-1.417,8.1.1,8.109.1a16.02,16.02,0,0,0-9.87,1.5,34.016,34.016,0,0,0,3.412,1.578,18.318,18.318,0,0,0,6.709,1.574,22.246,22.246,0,0,0,6.6-1.105C80.7,15.669,73.088,18.094,69.792,22.234,72.752,16.8,73.471,7.964,66.581,0Z"
							transform="translate(-63.666 0.001)"
						/>
					</clipPath>
					<linearGradient
						id="bi-item-1824"
						x1={-1.01}
						y1={6.52}
						x2={-0.991}
						y2={6.52}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="bj-item-1824">
						<path
							className="a-item-1824"
							d="M77.264,18.69a16.292,16.292,0,0,1,1.517-3.124c3.131-5.14,5.942-6.267,5.953-6.267a23.809,23.809,0,0,0-6.471,8.881s6.181-2.145,8.927-5.349a22.991,22.991,0,0,0,4.017-8.018C78.889,5.006,76.4,13.2,77.264,18.69"
							transform="translate(-77.108 -4.814)"
						/>
					</clipPath>
					<linearGradient
						id="bk-item-1824"
						x1={-2.438}
						y1={11.428}
						x2={-2.404}
						y2={11.428}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="bl-item-1824">
						<path
							className="a-item-1824"
							d="M34.033,278.79l-2.26,19.972c-1.291,9.713,48.225,16.4,48.776,6.019.7-13.179,3.557-36.66,3.557-36.66Z"
							transform="translate(-31.748 -268.121)"
						/>
					</clipPath>
					<linearGradient
						id="bm-item-1824"
						x1={-0.383}
						y1={1.019}
						x2={-0.37}
						y2={1.019}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#543913" />
						<stop offset={0.385} stopColor="#735626" />
						<stop offset={1} stopColor="#ad8d4a" />
					</linearGradient>
					<clipPath id="bn-item-1824">
						<path
							className="a-item-1824"
							d="M48.846,322.7c0,7.8,24.046,7.92,24.349,4.651l1.5-16.279-24.268-.691Z"
							transform="translate(-48.846 -310.382)"
						/>
					</clipPath>
					<linearGradient
						id="bo-item-1824"
						x1={-1.296}
						y1={0.938}
						x2={-1.269}
						y2={0.938}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#ad8d4a" />
						<stop offset={0.615} stopColor="#735626" />
						<stop offset={1} stopColor="#543913" />
					</linearGradient>
					<clipPath id="bp-item-1824">
						<path
							className="a-item-1824"
							d="M52.4,285.722l-3.556,27.632c3.145-11.628,37.07-8.344,37.07-4.651l2.566-28.089Z"
							transform="translate(-48.846 -280.615)"
						/>
					</clipPath>
					<linearGradient
						id="bq-item-1824"
						x1={-0.845}
						y1={1.204}
						x2={-0.828}
						y2={1.204}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#805a23" />
						<stop offset={0.078} stopColor="#835e27" />
						<stop offset={0.165} stopColor="#8d6a35" />
						<stop offset={0.257} stopColor="#9d7f4b" />
						<stop offset={0.352} stopColor="#b59c6a" />
						<stop offset={0.448} stopColor="#d2c192" />
						<stop offset={0.536} stopColor="#f3eabe" />
						<stop offset={0.569} stopColor="#ebe0b4" />
						<stop offset={0.609} stopColor="#e7dbaf" />
						<stop offset={1} stopColor="#a98d5c" />
					</linearGradient>
					<clipPath id="br-item-1824">
						<path
							className="a-item-1824"
							d="M271.311,304.781c.55,10.382,50.067,3.694,48.776-6.019l-2.26-19.972-50.072-10.669s2.859,23.481,3.557,36.66"
							transform="translate(-267.754 -268.121)"
						/>
					</clipPath>
					<linearGradient
						id="bs-item-1824"
						x1={-3.425}
						y1={1.019}
						x2={-3.413}
						y2={1.019}
						xlinkHref="#bm-item-1824"
					/>
					<clipPath id="bt-item-1824">
						<path
							className="a-item-1824"
							d="M289.29,311.073l1.5,16.279c.3,3.269,24.351,3.146,24.349-4.651l-1.585-12.318Z"
							transform="translate(-289.29 -310.382)"
						/>
					</clipPath>
					<linearGradient
						id="bu-item-1824"
						x1={-7.676}
						y1={0.938}
						x2={-7.649}
						y2={0.938}
						xlinkHref="#bo-item-1824"
					/>
					<clipPath id="bv-item-1824">
						<path
							className="a-item-1824"
							d="M271.52,307.035c0-3.694,33.925-6.977,37.071,4.651l-3.556-27.632L268.42,275.3Z"
							transform="translate(-268.42 -275.298)"
						/>
					</clipPath>
					<linearGradient
						id="bw-item-1824"
						x1={-4.584}
						y1={1.183}
						x2={-4.567}
						y2={1.183}
						xlinkHref="#bq-item-1824"
					/>
					<clipPath id="bx-item-1824">
						<path
							className="a-item-1824"
							d="M38.486,241.669c-3.891,9.475-6.7,44.321-6.7,44.321,5.235-19.7,107.143-19.151,107.143-19.151s101.908-.547,107.143,19.151c0,0-2.81-34.846-6.7-44.321-4.643-11.308-66.717-14.226-100.442-14.226s-95.8,2.918-100.441,14.226"
							transform="translate(-31.784 -227.443)"
						/>
					</clipPath>
					<linearGradient
						id="by-item-1824"
						x1={-0.102}
						y1={1.296}
						x2={-0.099}
						y2={1.296}
						xlinkHref="#e-item-1824"
					/>
					<clipPath id="ca-item-1824">
						<rect
							className="a-item-1824"
							width={214.285}
							height={24.253}
						/>
					</clipPath>
					<clipPath id="cb-item-1824">
						<path
							className="a-item-1824"
							d="M138.928,277.435S42.1,276.919,32.376,295.141c-.382,3.956-.591,6.545-.591,6.545,5.234-19.7,107.143-19.151,107.143-19.151s101.907-.547,107.143,19.151c0,0-.209-2.589-.591-6.545-9.721-18.222-106.551-17.706-106.551-17.706"
							transform="translate(-31.785 -277.434)"
						/>
					</clipPath>
					<linearGradient
						id="cc-item-1824"
						x1={-0.102}
						y1={1.7}
						x2={-0.099}
						y2={1.7}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#805a23" />
						<stop offset={0.049} stopColor="#8a662f" />
						<stop offset={0.138} stopColor="#a68851" />
						<stop offset={0.25} stopColor="#d0bb84" />
						<stop offset={0.324} stopColor="#bea366" />
						<stop offset={0.396} stopColor="#b19351" />
						<stop offset={0.443} stopColor="#ad8d4a" />
						<stop offset={0.599} stopColor="#815d25" />
						<stop offset={0.682} stopColor="#825e26" />
						<stop offset={0.712} stopColor="#88652d" />
						<stop offset={0.734} stopColor="#917139" />
						<stop offset={0.751} stopColor="#9f814a" />
						<stop offset={0.766} stopColor="#b09660" />
						<stop offset={0.776} stopColor="#c1aa74" />
						<stop offset={0.83} stopColor="#b59b65" />
						<stop offset={0.932} stopColor="#97763f" />
						<stop offset={1} stopColor="#805a23" />
					</linearGradient>
					<clipPath id="cd-item-1824">
						<path
							className="a-item-1824"
							d="M344.079,312.422c.01.038.029.074.038.112,0,0-.015-.193-.045-.547,0,.148,0,.292.006.434"
							transform="translate(-344.073 -311.988)"
						/>
					</clipPath>
					<linearGradient
						id="ce-item-1824"
						x1={-5293.231}
						y1={32.724}
						x2={-5277.848}
						y2={32.724}
						xlinkHref="#cc-item-1824"
					/>
					<clipPath id="cg-item-1824">
						<rect
							className="a-item-1824"
							width={202.697}
							height={16.942}
						/>
					</clipPath>
					<clipPath id="ch-item-1824">
						<path
							className="a-item-1824"
							d="M141.579,232.543c31.217,0,89.211,2.5,101.348,11.842a25.687,25.687,0,0,0-.907-2.715c-4.643-11.309-66.717-14.227-100.441-14.227s-95.8,2.918-100.441,14.227a25.522,25.522,0,0,0-.908,2.715c12.137-9.34,70.132-11.842,101.349-11.842"
							transform="translate(-40.23 -227.443)"
						/>
					</clipPath>
					<linearGradient
						id="ci-item-1824"
						x1={-0.136}
						y1={4.48}
						x2={-0.133}
						y2={4.48}
						xlinkHref="#cc-item-1824"
					/>
					<clipPath id="cj-item-1824">
						<path
							className="a-item-1824"
							d="M31.785,312.535c.01-.038.028-.075.039-.112,0-.143,0-.286.006-.434-.029.353-.045.547-.045.547"
							transform="translate(-31.785 -311.988)"
						/>
					</clipPath>
					<linearGradient
						id="ck-item-1824"
						x1={-481.591}
						y1={32.724}
						x2={-466.439}
						y2={32.724}
						xlinkHref="#cc-item-1824"
					/>
					<filter
						id="cl-item-1824"
						x={598.018}
						y={1784.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="cm" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="cm" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="fw-item-1824"
						x={598.018}
						y={2183.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="fx" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="fx" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="jh-item-1824"
						x={598.018}
						y={2582.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="ji" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="ji" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="ms-item-1824"
						x={598.018}
						y={2981.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="mt" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="mt" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="qd-item-1824"
						x={930.018}
						y={986.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="qe" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="qe" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="qf-item-1824"
						width={1}
						height={1}
						viewBox="28.173 6.343 175.044 280.657">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={231.39}
							height={287}
							xlinkHref="/images/rewards/reward-2.png"
						/>
					</pattern>
					<filter
						id="qg-item-1824"
						x={598.018}
						y={986.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="qh" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="qh" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="qi-item-1824"
						width={1}
						height={1}
						viewBox="-8.11 -3.149 244.219 329.91">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={228}
							height={323.613}
							xlinkHref="/images/rewards/reward-1.png"
						/>
					</pattern>
					<filter
						id="qj-item-1824"
						x={930.018}
						y={1385.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="qk" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="qk" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="tu-item-1824"
						x={930.018}
						y={1784.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="tv" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="tv" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="xf-item-1824"
						x={930.018}
						y={2183.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="xg" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="xg" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="aaq-item-1824"
						x={930.018}
						y={2582.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="aar" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="aar" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="aeb-item-1824"
						x={930.018}
						y={2981.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="aec" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="aec" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="ahm-item-1824"
						x={1261.018}
						y={986.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="ahn" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="ahn" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="akx-item-1824"
						x={1261.018}
						y={1385.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="aky" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="aky" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="aoi-item-1824"
						x={1261.018}
						y={1784.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="aoj" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="aoj" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="art-item-1824"
						x={1261.018}
						y={2183.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="aru" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="aru" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="ave-item-1824"
						x={1261.018}
						y={2582.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="avf" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="avf" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="ayp-item-1824"
						x={1261.018}
						y={2981.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="ayq" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="ayq" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bca-item-1824"
						x={1593.018}
						y={986.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bcb" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bcb" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bfl-item-1824"
						x={1593.018}
						y={1385.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bfm" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bfm" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="biw-item-1824"
						x={1593.018}
						y={1784.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bix" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bix" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bmh-item-1824"
						x={1593.018}
						y={2183.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bmi" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bmi" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bps-item-1824"
						x={1593.018}
						y={2582.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bpt" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bpt" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="btd-item-1824"
						x={1593.018}
						y={2981.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bte" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bte" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bwo-item-1824"
						x={1924.018}
						y={986.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bwp" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bwp" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bzz-item-1824"
						x={1924.018}
						y={1385.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="caa" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="caa" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="cdk-item-1824"
						x={1924.018}
						y={1784.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="cdl" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="cdl" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="cgv-item-1824"
						x={1924.018}
						y={2183.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="cgw" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="cgw" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="ckg-item-1824"
						x={1924.018}
						y={2582.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="ckh" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="ckh" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="cnr-item-1824"
						x={1924.018}
						y={2981.122}
						width={328}
						height={380}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="cns" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="cns" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<path
					className="b-item-1824"
					d="M278,1953.27V2709.4H648.04c-27.52-13.933-50.827-36.353-67.566-65.028-17.4-29.813-26.6-64.51-26.6-100.343V2203.983c0-72.524-37.873-137.408-96.479-165.311Z"
					transform="translate(187.065 787.627)"
				/>
				<path
					className="b-item-1824"
					d="M2295.819,2701.41l-657.365-312.871-.208-.1c-106.1-50.515-174.654-167.992-174.654-299.289v-448.5h-2.879v448.5c0,64.873,16.648,127.686,48.151,181.66,30.3,51.916,72.5,92.5,122.322,117.725q2.959,1.5,5.955,2.933l657.563,312.967Z"
					transform="translate(93.113 -95.078)"
				/>
				<path
					className="c-item-1824"
					d="M0,2137.1l657.365,312.871.208.1c106.1,50.514,174.654,167.991,174.654,299.289v448.5h2.878v-448.5c0-64.873-16.648-127.686-48.151-181.66-30.3-51.915-72.5-92.5-122.322-117.725q-2.959-1.5-5.955-2.932L1.114,2134.075Z"
					transform="translate(0 -130.828)"
				/>
				<path
					className="c-item-1824"
					d="M1238,2431.3l449.73,246.774,164.061,90.023.194.1c99.066,54.377,163.077,180.837,163.077,322.176v482.793h2.688V3090.376c0-69.834-15.545-137.45-44.959-195.552-28.3-55.885-67.7-99.574-114.214-126.728q-2.763-1.619-5.561-3.157l-613.976-336.9Z"
					transform="translate(-987.021 4974.449) rotate(-90)"
				/>
				<path
					className="b-item-1824"
					d="M2666.768,2333.66l-273.92,750.84-.085.237c-44.225,121.186-147.077,199.49-262.028,199.49H1738.073v.01h-32.679c-56.787,0-111.79,19.016-159.044,55s-83.778,86.648-105.627,146.518L1309.331,3845.84,1238,4041.32l2.652,1.26,67.357-184.6,135.365-370.962c44.225-121.186,147.068-199.5,262.019-199.5h425.341c56.8,0,111.79-19.015,159.044-55,45.452-34.614,80.985-82.81,103.069-139.716q1.316-3.379,2.567-6.8l274.005-751.067Z"
					transform="translate(-149.364 126.957)"
				/>
				<path
					className="d-item-1824"
					d="M2551.156,2372.3h-268.57c-135.818,0-245.92-125.759-245.92-280.889V1590.77h278.749c130.2,0,235.741,120.553,235.741,269.263Z"
					transform="translate(-39.648 -211.968)"
				/>
				<path
					className="d-item-1824"
					d="M118.6,1246.207a205.157,205.157,0,0,0,82.608-38.175c36.3-27.642,64.363-66.563,81.147-112.562L405.809,757.079l13.3-36.445c-.729-.188-1.457-.376-2.187-.56L280.318,1094.5c-28.8,78.924-89.963,134.164-161.718,149.163Z"
					transform="translate(214.579 544.142)"
				/>
				<g transform="translate(465.018 -121.878)">
					<Reward6 />
					<Reward11/>
					<Reward16 />
					<Reward20 />
					<Reward26 />
					<Reward1 />
					<Reward2 />
					<Reward7 />
					<Reward12 />
					<Reward17 />
					<Reward22 />
					<Reward21 />
					<Reward27 />
					<Reward3 />
					<Reward8 />
					<Reward13 />
					<Reward18 />
					<Reward23 />
					<Reward28 />
					<Reward4 />
					<Reward9 />
					<Reward14 />
					<Reward19 />
					<Reward24 />
					<Reward29 />
					<Reward5 />
					<Reward10 />
					<Reward15 />
					<Reward25 />
					<Reward30 />
					<text
						className="cs-item-1824"
						transform="translate(474 986.632)">
						<tspan x={216.06} y={38}>
							{'Premios y reconocimientos'}
						</tspan>
					</text>
				</g>
			</svg>
		</div>
	)
}

export default Reconocimientos
