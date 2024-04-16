import React from 'react'
import './Slide3.css'
import BluePoint from './BluePoint'
import RedPoint from './RedPoint'

interface ISlider {
	height: string
	index: number
	handleChangeSlide: (position: number) => void
}

export const Slider3: React.FC<ISlider> = ({ height }) => {
	const [selectedImage, setSelectedImage] = React.useState<null | number>(
		null
	)

	return (
		<svg
			width="100%"
			height={height}
			viewBox="0 0 1920 1080"
			preserveAspectRatio="none">
			<defs>
				<style>
					{
						'.a-item-1821,.ab-item-1821,.ae-item-1821,.af-item-1821,.ag-item-1821,.ai-item-1821,.aj-item-1821,.c-item-1821,.f-item-1821,.g-item-1821,.h-item-1821,.i-item-1821,.j-item-1821,.k-item-1821,.l-item-1821,.m-item-1821,.n-item-1821,.o-item-1821,.p-item-1821,.q-item-1821,.r-item-1821,.s-item-1821,.t-item-1821{fill:none;}.b-item-1821,.u-item-1821{fill:#fff;}.b-item-1821{stroke:#707070;}.c-item-1821{filter:url(#a-item-1821);}.d-item-1821{fill:#aca6a6;}.e-item-1821{fill:#afafaf;}.f-item-1821{filter:url(#c-item-1821);}.g-item-1821{filter:url(#e-item-1821);}.h-item-1821{filter:url(#g-item-1821);}.i-item-1821{filter:url(#i-item-1821);}.j-item-1821{filter:url(#k-item-1821);}.k-item-1821{filter:url(#m-item-1821);}.l-item-1821{filter:url(#o-item-1821);}.m-item-1821{filter:url(#q-item-1821);}.n-item-1821{filter:url(#s-item-1821);}.o-item-1821{filter:url(#u-item-1821);}.p-item-1821{filter:url(#w-item-1821);}.q-item-1821{filter:url(#y-item-1821);}.r-item-1821{filter:url(#aa-item-1821);}.s-item-1821{filter:url(#ac-item-1821);}.t-item-1821{filter:url(#ae-item-1821);}.v-item-1821{clip-path:url(#ag-item-1821);}.w-item-1821{fill:#e7002a;stroke:#e40032;}.ac-item-1821,.ak-item-1821,.bw-item-1821,.x-item-1821{fill:#001f5f;}.ab-item-1821,.ae-item-1821,.af-item-1821,.ag-item-1821,.ai-item-1821,.x-item-1821{stroke:#001f5f;}.y-item-1821{clip-path:url(#ah-item-1821);}.z-item-1821{fill:#f2f2f2;}.aa-item-1821{fill:#c5dbf7;}.ab-item-1821,.af-item-1821{stroke-miterlimit:3.864;}.ab-item-1821{stroke-width:0.891px;}.ad-item-1821{fill:#4899d5;}.ae-item-1821{stroke-linecap:round;stroke-linejoin:round;}.ae-item-1821,.ag-item-1821{stroke-width:1.169px;}.af-item-1821{stroke-width:0.292px;}.ag-item-1821,.ai-item-1821,.aj-item-1821{stroke-miterlimit:10;}.ah-item-1821{clip-path:url(#ai-item-1821);}.ai-item-1821,.aj-item-1821{stroke-width:3.044px;}.aj-item-1821{stroke:#e7002a;}.ak-item-1821{font-size:70px;}.ak-item-1821,.bt-item-1821,.bv-item-1821,.bw-item-1821{font-family:Silka-SemiBold, Silka;font-weight:600;}.al-item-1821{clip-path:url(#aj-item-1821);}.am-item-1821,.bv-item-1821{fill:#e40032;}.an-item-1821,.ay-item-1821{mix-blend-mode:multiply;}.an-item-1821,.at-item-1821,.ay-item-1821,.bj-item-1821,.bl-item-1821,.bp-item-1821{isolation:isolate;}.ao-item-1821{fill:#eeebeb;}.ap-item-1821{fill:#d6d6d6;}.aq-item-1821{clip-path:url(#ak-item-1821);}.ar-item-1821{clip-path:url(#al-item-1821);}.as-item-1821{fill:#9d9d9e;}.at-item-1821{opacity:0.3;}.at-item-1821,.bj-item-1821,.bl-item-1821,.bp-item-1821{mix-blend-mode:screen;}.au-item-1821{clip-path:url(#an-item-1821);}.av-item-1821{clip-path:url(#ao-item-1821);}.aw-item-1821{fill:url(#ap-item-1821);}.ax-item-1821{fill:#787878;}.ay-item-1821,.bj-item-1821{opacity:0.2;}.az-item-1821{clip-path:url(#aq-item-1821);}.ba-item-1821{clip-path:url(#ar-item-1821);}.bb-item-1821{clip-path:url(#as-item-1821);}.bc-item-1821{clip-path:url(#at-item-1821);}.bd-item-1821{fill:url(#au-item-1821);}.be-item-1821{clip-path:url(#av-item-1821);}.bf-item-1821{clip-path:url(#aw-item-1821);}.bg-item-1821{clip-path:url(#ax-item-1821);}.bh-item-1821{clip-path:url(#ay-item-1821);}.bi-item-1821{clip-path:url(#az-item-1821);}.bk-item-1821{clip-path:url(#ba-item-1821);}.bl-item-1821{opacity:0.1;}.bm-item-1821{clip-path:url(#bb-item-1821);}.bn-item-1821{clip-path:url(#bc-item-1821);}.bo-item-1821{fill:url(#bd-item-1821);}.bp-item-1821{opacity:0.4;}.bq-item-1821{clip-path:url(#be-item-1821);}.br-item-1821{clip-path:url(#bf-item-1821);}.bs-item-1821{fill:#e81d2c;}.bt-item-1821,.bu-item-1821{fill:#182856;}.bt-item-1821,.bu-item-1821,.bv-item-1821{font-size:24px;}.bu-item-1821{font-family:Silka-Regular, Silka;}.bw-item-1821{font-size:32px;}.bx-item-1821{clip-path:url(#pe-item-1821);}.by-item-1821{clip-path:url(#pf-item-1821);}.bz-item-1821{clip-path:url(#ph-item-1821);}.ca-item-1821{clip-path:url(#pi-item-1821);}.cb-item-1821{clip-path:url(#pk-item-1821);}.cc-item-1821{clip-path:url(#pl-item-1821);}.cd-item-1821{fill:url(#pm-item-1821);}.ce-item-1821{clip-path:url(#pn-item-1821);}.cf-item-1821{clip-path:url(#po-item-1821);}.cg-item-1821{clip-path:url(#pq-item-1821);}.ch-item-1821{clip-path:url(#pr-item-1821);}.ci-item-1821{fill:url(#ps-item-1821);}.cj-item-1821{clip-path:url(#pt-item-1821);}.ck-item-1821{clip-path:url(#pu-item-1821);}.cl-item-1821{fill:url(#pv-item-1821);}.cm-item-1821{clip-path:url(#py-item-1821);}.cn-item-1821{clip-path:url(#pz-item-1821);}.co-item-1821{clip-path:url(#qb-item-1821);}.cp-item-1821{clip-path:url(#qc-item-1821);}.cq-item-1821{filter:url(#pc-item-1821);}.cr-item-1821{filter:url(#oe-item-1821);}.cs-item-1821{filter:url(#ng-item-1821);}.ct-item-1821{filter:url(#mi-item-1821);}.cu-item-1821{filter:url(#lk-item-1821);}.cv-item-1821{filter:url(#km-item-1821);}.cw-item-1821{filter:url(#jo-item-1821);}.cx-item-1821{filter:url(#iq-item-1821);}.cy-item-1821{filter:url(#hs-item-1821);}.cz-item-1821{filter:url(#gu-item-1821);}.da-item-1821{filter:url(#fw-item-1821);}.db-item-1821{filter:url(#ey-item-1821);}.dc-item-1821{filter:url(#ea-item-1821);}.dd-item-1821{filter:url(#dc-item-1821);}.de-item-1821{filter:url(#ce-item-1821);}.df-item-1821{filter:url(#bg-item-1821);}'
					}
				</style>
				<filter
					id="a-item-1821"
					x={1295.781}
					y={411.472}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="b" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="b" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="c-item-1821"
					x={1481.735}
					y={288.533}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="d" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="d" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="e-item-1821"
					x={1449.735}
					y={339.54}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="f" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="f" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="g-item-1821"
					x={1342.735}
					y={118.483}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="h" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="h" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="i-item-1821"
					x={1053.735}
					y={237.483}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="j" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="j" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="k-item-1821"
					x={803.781}
					y={194.483}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="l" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="l" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="m-item-1821"
					x={1430.735}
					y={163.498}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="n" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="n" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="o-item-1821"
					x={1310.735}
					y={151.504}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="p" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="p" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="q-item-1821"
					x={1281.688}
					y={231.519}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="r" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="r" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="s-item-1821"
					x={1385.781}
					y={483.504}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="t" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="t" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="u-item-1821"
					x={1292.781}
					y={473.504}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="v" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="v" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="w-item-1821"
					x={1243.735}
					y={554.494}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="x" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="x" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="y-item-1821"
					x={1323.735}
					y={501.486}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="z" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="z" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="aa-item-1821"
					x={1416.211}
					y={507.487}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ab" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="ab" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="ac-item-1821"
					x={1320.305}
					y={591.5}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ad" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="ad" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="ae-item-1821"
					x={1203.735}
					y={679.818}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="af" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="af" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="ag-item-1821">
					<rect
						className="a-item-1821"
						width={1920.143}
						height={1117.999}
						transform="translate(0 88)"
					/>
				</clipPath>
				<clipPath id="ah-item-1821">
					<rect
						className="a-item-1821"
						width={1500}
						height={1119.24}
					/>
				</clipPath>
				<clipPath id="ai-item-1821">
					<rect
						className="a-item-1821"
						width={1915}
						height={1080}
						transform="translate(0 0)"
					/>
				</clipPath>
				<clipPath id="aj-item-1821">
					<rect
						className="b-item-1821"
						width={161.363}
						height={249}
						transform="translate(116.102 -113)"
					/>
				</clipPath>
				<clipPath id="ak-item-1821">
					<rect
						className="a-item-1821"
						width={32.6}
						height={49.195}
					/>
				</clipPath>
				<clipPath id="al-item-1821">
					<path
						className="a-item-1821"
						d="M92.941,592.465c0,1.459,4.2,2.642,9.381,2.642s9.381-1.183,9.381-2.642-4.2-2.642-9.381-2.642-9.381,1.183-9.381,2.642"
						transform="translate(-92.941 -589.823)"
					/>
				</clipPath>
				<clipPath id="an-item-1821">
					<rect
						className="a-item-1821"
						width={27.391}
						height={14.246}
					/>
				</clipPath>
				<clipPath id="ao-item-1821">
					<path
						className="a-item-1821"
						d="M35,42.379a13.348,13.348,0,0,1,.841-5.317,13.59,13.59,0,0,1,2.92-4.6,13.794,13.794,0,0,1,4.521-3.107,13.8,13.8,0,0,1,10.79,0A13.793,13.793,0,0,1,58.6,32.463a13.593,13.593,0,0,1,2.92,4.6,13.346,13.346,0,0,1,.841,5.317.13.13,0,0,1-.136.124.132.132,0,0,1-.124-.124,13.81,13.81,0,0,0-4.174-9.243,13.316,13.316,0,0,0-18.485,0,13.81,13.81,0,0,0-4.174,9.243.131.131,0,0,1-.136.124A.132.132,0,0,1,35,42.379"
						transform="translate(-34.985 -28.257)"
					/>
				</clipPath>
				<linearGradient
					id="ap-item-1821"
					x1={-0.092}
					y1={3.305}
					x2={-0.089}
					y2={3.305}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#fff" />
					<stop offset={1} />
				</linearGradient>
				<clipPath id="aq-item-1821">
					<rect
						className="d-item-1821"
						width={27.296}
						height={19.678}
					/>
				</clipPath>
				<clipPath id="ar-item-1821">
					<path
						className="d-item-1821"
						d="M52.337,350.34A18.336,18.336,0,0,1,39,344.608a105.975,105.975,0,0,0,13.244,18.93.224.224,0,0,0,.308,0c1.239-1.139,9.561-10.744,13.745-19.618a18.347,18.347,0,0,1-13.957,6.416"
						transform="translate(-38.998 -343.924)"
					/>
				</clipPath>
				<clipPath id="as-item-1821">
					<rect
						className="a-item-1821"
						width={19.145}
						height={12.905}
					/>
				</clipPath>
				<clipPath id="at-item-1821">
					<path
						className="a-item-1821"
						d="M109.431,395.315a.13.13,0,0,0-.17.065l0,.006a20.148,20.148,0,0,1-2.038,3.3q-1.15,1.576-2.392,3.086c-1.575,1.922-3.214,3.8-4.89,5.629-1.677-1.831-3.315-3.707-4.891-5.629q-1.238-1.512-2.392-3.086a20.143,20.143,0,0,1-2.038-3.3l0-.006a.13.13,0,0,0-.238.107,20.4,20.4,0,0,0,1.987,3.4q1.12,1.616,2.33,3.162,2.41,3.092,5,6.037a.3.3,0,0,0,.025.035.315.315,0,0,0,.089.054l0,0a.374.374,0,0,0,.258,0l0,0a.315.315,0,0,0,.088-.054.31.31,0,0,0,.025-.035q2.585-2.952,5-6.037,1.206-1.549,2.33-3.162a20.4,20.4,0,0,0,1.987-3.4.13.13,0,0,0-.068-.171"
						transform="translate(-90.365 -395.304)"
					/>
				</clipPath>
				<linearGradient
					id="au-item-1821"
					x1={-0.35}
					y1={1.531}
					x2={-0.346}
					y2={1.531}
					xlinkHref="#ap"
				/>
				<clipPath id="av-item-1821">
					<rect className="e-item-1821" width={2.54} height={2.832} />
				</clipPath>
				<clipPath id="aw-item-1821">
					<path
						className="e-item-1821"
						d="M266.662,61.68a7.128,7.128,0,0,1,2.045.938c-1.039,1.307-1.491,1.894-1.491,1.894l-1.049-.475Z"
						transform="translate(-266.166 -61.68)"
					/>
				</clipPath>
				<clipPath id="ax-item-1821">
					<rect
						className="e-item-1821"
						width={5.765}
						height={6.134}
					/>
				</clipPath>
				<clipPath id="ay-item-1821">
					<path
						className="e-item-1821"
						d="M71.058,80.871c.9-1.542,2.078-3.352,3.586-3.989-.637-1.207-1.173-2.145-1.173-2.145a11.475,11.475,0,0,0-4.592,5.095c1.039.469,2.179,1.039,2.179,1.039"
						transform="translate(-68.879 -74.737)"
					/>
				</clipPath>
				<clipPath id="az-item-1821">
					<rect className="a-item-1821" width={2.54} height={2.832} />
				</clipPath>
				<clipPath id="ba-item-1821">
					<rect
						className="a-item-1821"
						width={5.765}
						height={6.134}
					/>
				</clipPath>
				<clipPath id="bb-item-1821">
					<rect
						className="a-item-1821"
						width={22.583}
						height={4.548}
					/>
				</clipPath>
				<clipPath id="bc-item-1821">
					<path
						className="a-item-1821"
						d="M78.528.951A19.6,19.6,0,0,1,89.817,4.544a16.3,16.3,0,0,0-22.583,0A19.6,19.6,0,0,1,78.528.951"
						transform="translate(-67.234 0)"
					/>
				</clipPath>
				<linearGradient
					id="bd-item-1821"
					x1={-0.222}
					y1={10.817}
					x2={-0.218}
					y2={10.817}
					xlinkHref="#ap"
				/>
				<clipPath id="be-item-1821">
					<rect
						className="a-item-1821"
						width={25.015}
						height={10.649}
					/>
				</clipPath>
				<clipPath id="bf-item-1821">
					<rect
						className="a-item-1821"
						width={25.429}
						height={11.999}
					/>
				</clipPath>
				<filter
					id="bg-item-1821"
					x={1207.581}
					y={362.665}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="bh" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="bh" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="ce-item-1821"
					x={1393.535}
					y={239.725}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="cf" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="cf" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="dc-item-1821"
					x={1361.535}
					y={290.732}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="dd" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="dd" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="ea-item-1821"
					x={1254.535}
					y={69.676}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="eb" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="eb" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="ey-item-1821"
					x={942.535}
					y={188.676}
					width={273}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ez" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="ez" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="fw-item-1821"
					x={715.581}
					y={118.676}
					width={227}
					height={88}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="fx" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="fx" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="gu-item-1821"
					x={1342.535}
					y={114.69}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="gv" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="gv" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="hs-item-1821"
					x={1222.535}
					y={102.697}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ht" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="ht" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="iq-item-1821"
					x={1193.488}
					y={182.711}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ir" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="ir" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="jo-item-1821"
					x={1297.581}
					y={434.697}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="jp" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="jp" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="km-item-1821"
					x={1204.581}
					y={424.697}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="kn" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="kn" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="lk-item-1821"
					x={1155.535}
					y={505.686}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ll" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="ll" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="mi-item-1821"
					x={1235.535}
					y={452.679}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="mj" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="mj" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="ng-item-1821"
					x={1328.011}
					y={458.679}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="nh" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="nh" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="oe-item-1821"
					x={1232.105}
					y={542.693}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="of" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="of" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="pc-item-1821"
					x={1115.535}
					y={631.01}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="pd" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="pd" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="pe-item-1821">
					<rect
						className="a-item-1821"
						width={40.871}
						height={61.677}
					/>
				</clipPath>
				<clipPath id="pf-item-1821">
					<path
						className="a-item-1821"
						d="M92.941,593.135c0,1.829,5.265,3.312,11.761,3.312s11.761-1.483,11.761-3.312-5.265-3.312-11.761-3.312-11.761,1.483-11.761,3.312"
						transform="translate(-92.941 -589.823)"
					/>
				</clipPath>
				<clipPath id="ph-item-1821">
					<rect
						className="a-item-1821"
						width={34.34}
						height={17.861}
					/>
				</clipPath>
				<clipPath id="pi-item-1821">
					<path
						className="a-item-1821"
						d="M35.007,45.962A16.735,16.735,0,0,1,36.062,39.3a17.039,17.039,0,0,1,3.661-5.766,17.293,17.293,0,0,1,5.668-3.9,17.3,17.3,0,0,1,13.527,0,17.293,17.293,0,0,1,5.669,3.9A17.042,17.042,0,0,1,68.248,39.3,16.733,16.733,0,0,1,69.3,45.962a.163.163,0,0,1-.171.156.165.165,0,0,1-.156-.156,17.314,17.314,0,0,0-5.233-11.588,16.695,16.695,0,0,0-23.176,0,17.313,17.313,0,0,0-5.233,11.588.164.164,0,0,1-.171.156.165.165,0,0,1-.156-.156"
						transform="translate(-34.985 -28.257)"
					/>
				</clipPath>
				<clipPath id="pk-item-1821">
					<rect
						className="a-item-1821"
						width={34.221}
						height={24.67}
					/>
				</clipPath>
				<clipPath id="pl-item-1821">
					<path
						className="a-item-1821"
						d="M55.722,351.968A22.989,22.989,0,0,1,39,344.782c5.414,10.506,15.127,22.305,16.6,23.733a.28.28,0,0,0,.386,0c1.553-1.428,11.987-13.47,17.232-24.6a23,23,0,0,1-17.5,8.044"
						transform="translate(-38.998 -343.924)"
					/>
				</clipPath>
				<linearGradient
					id="pm-item-1821"
					x1={-0.106}
					y1={1.198}
					x2={-0.104}
					y2={1.198}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#e33940" />
					<stop offset={1} stopColor="#b80007" />
				</linearGradient>
				<clipPath id="pn-item-1821">
					<rect
						className="a-item-1821"
						width={24.002}
						height={16.179}
					/>
				</clipPath>
				<clipPath id="po-item-1821">
					<path
						className="a-item-1821"
						d="M114.269,395.317a.163.163,0,0,0-.213.081l0,.008a25.261,25.261,0,0,1-2.556,4.137q-1.442,1.976-3,3.869c-1.975,2.41-4.029,4.762-6.131,7.058-2.1-2.3-4.157-4.648-6.131-7.058q-1.552-1.9-3-3.869a25.254,25.254,0,0,1-2.555-4.137l0-.008a.163.163,0,0,0-.3.134A25.572,25.572,0,0,0,92.87,399.8q1.4,2.026,2.921,3.965,3.021,3.877,6.265,7.569a.375.375,0,0,0,.032.044.4.4,0,0,0,.111.067l.006,0a.39.39,0,0,0,.107.025.183.183,0,0,0,.109,0,.389.389,0,0,0,.107-.025l.006,0a.394.394,0,0,0,.111-.067.386.386,0,0,0,.032-.044q3.241-3.7,6.265-7.569,1.512-1.942,2.921-3.965a25.578,25.578,0,0,0,2.491-4.269.163.163,0,0,0-.085-.215"
						transform="translate(-90.365 -395.304)"
					/>
				</clipPath>
				<clipPath id="pq-item-1821">
					<rect
						className="a-item-1821"
						width={3.185}
						height={3.551}
					/>
				</clipPath>
				<clipPath id="pr-item-1821">
					<path
						className="a-item-1821"
						d="M266.788,61.68a8.937,8.937,0,0,1,2.563,1.177c-1.3,1.639-1.87,2.374-1.87,2.374l-1.315-.6Z"
						transform="translate(-266.166 -61.68)"
					/>
				</clipPath>
				<linearGradient
					id="ps-item-1821"
					x1={-5.374}
					y1={13.081}
					x2={-5.353}
					y2={13.081}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#a12025" />
					<stop offset={1} stopColor="#c1272d" />
				</linearGradient>
				<clipPath id="pt-item-1821">
					<rect className="a-item-1821" width={7.228} height={7.69} />
				</clipPath>
				<clipPath id="pu-item-1821">
					<path
						className="a-item-1821"
						d="M71.61,82.427c1.135-1.933,2.605-4.2,4.5-5-.8-1.513-1.471-2.689-1.471-2.689a14.387,14.387,0,0,0-5.757,6.387c1.3.588,2.731,1.3,2.731,1.3"
						transform="translate(-68.879 -74.737)"
					/>
				</clipPath>
				<linearGradient
					id="pv-item-1821"
					x1={-0.453}
					y1={5.347}
					x2={-0.444}
					y2={5.347}
					xlinkHref="#ps"
				/>
				<clipPath id="py-item-1821">
					<rect
						className="a-item-1821"
						width={28.313}
						height={5.702}
					/>
				</clipPath>
				<clipPath id="pz-item-1821">
					<path
						className="a-item-1821"
						d="M81.394,1.192A24.567,24.567,0,0,1,95.547,5.7a20.431,20.431,0,0,0-28.313,0,24.569,24.569,0,0,1,14.16-4.51"
						transform="translate(-67.234 0)"
					/>
				</clipPath>
				<clipPath id="qb-item-1821">
					<rect
						className="a-item-1821"
						width={31.362}
						height={13.351}
					/>
				</clipPath>
				<clipPath id="qc-item-1821">
					<rect
						className="a-item-1821"
						width={31.881}
						height={15.044}
					/>
				</clipPath>
				<image
					id="rc-item-1821"
					width={18.836}
					height={5.286}
					xlinkHref="ComponentTMP_0-image.png-item-1821"
				/>
			</defs>
			<path
				className="u-item-1821"
				d="M0,0H1920V1105H0Z"
				transform="translate(95 3.24)"
			/>
			<g transform="translate(0 -86.759)">
				<g className="v-item-1821" transform="translate(2)">
					<path
						className="w-item-1821"
						d="M140.348,0h-1.732V141.555h.062V285.131A170.418,170.418,0,0,1,33.553,442.847l-.124.051L0,456.828V458.7l34.218-14.259c1.205-.5,2.4-1.016,3.585-1.545a172.052,172.052,0,0,0,73.626-62.037,172.036,172.036,0,0,0,28.982-95.73V48.787h-.063Z"
						transform="translate(0 88)"
					/>
					<path
						className="x-item-1821"
						d="M278.84.143,175.932,43.025c-1.205.5-2.4,1.016-3.585,1.545A172.593,172.593,0,0,0,69.739,202.337V438.681H69.8V582.257A170.358,170.358,0,0,1,0,720.063v2.085a172.208,172.208,0,0,0,42.552-44.161,172.028,172.028,0,0,0,28.982-95.73V345.913h-.062V202.337A170.42,170.42,0,0,1,176.6,44.621l.124-.051L283.338.143Z"
						transform="translate(0 88)"
					/>
				</g>
				<g transform="translate(470 86.755)">
					<g className="y-item-1821" transform="translate(0 0.004)">
						<path
							className="z-item-1821"
							d="M1200.47,102.291c-3.136-2.923-8.083-3.225-12.253-2.047-8.626,2.433-15.183,11.587-13.025,20.082s14.094,13.439,21.134,8.006c1.314-1.014,2.624-2.377,4.3-2.3,1.792.084,2.99,1.768,3.9,3.272.207.342.414.683.62,1.025-5.224-8.2,2.562-21.292-4.676-28.038"
							transform="translate(-7.349 -0.627)"
						/>
						<path
							className="z-item-1821"
							d="M1251.39,95.041c-.727-.554-2.09-1.078-2.593-1.811-.392-.573-.026-1.3-.366-1.887a1.486,1.486,0,0,0-2.233-.313,1.458,1.458,0,0,0-.289.709,4.09,4.09,0,0,0,1.5,3.543,14.516,14.516,0,0,0,3.491,2.064,9.975,9.975,0,0,1,3.339,2.264c.7.815,1.138,1.821,1.822,2.65a9.21,9.21,0,0,0,4.133,2.58c1.557.552,3.181.926,4.693,1.587a4.847,4.847,0,0,0-1.162-4.04,8.335,8.335,0,0,0-2.369-1.7c-2.446-1.287-5.117-2.174-7.405-3.711-.891-.6-1.711-1.288-2.562-1.937"
							transform="translate(-7.794 -0.571)"
						/>
						<path
							className="z-item-1821"
							d="M1291.888,102.586a2.242,2.242,0,0,0,.8,2.3,2.39,2.39,0,0,0,2.479.219,4.073,4.073,0,0,0,1.657-2.093,6.2,6.2,0,0,0,.695-3.434c-.383-2.4-3.384-4.82-5.673-5.492-.488-.143-1.892-.535-2.189.122-.461,1.02,1.883,1.8,2.46,2.043a1.438,1.438,0,0,1,.548.351,1.461,1.461,0,0,1,.257.66,5.678,5.678,0,0,1,.039,3.248,19.306,19.306,0,0,0-1.071,2.08"
							transform="translate(-8.068 -0.591)"
						/>
						<path
							className="z-item-1821"
							d="M1509.427,568.077c-.135-.083-.267-.167-.408-.247a9.022,9.022,0,0,0-2.188-.881c.869,1.391,1.742,2.771,2.6,4.1Z"
							transform="translate(-9.427 -3.551)"
						/>
						<path
							className="z-item-1821"
							d="M1506.4,1123.559V740.071a3.347,3.347,0,0,1-3.635.218l-2.753-1.556c-4.425,4.019-8.827,8.119-9.478,8.92-.6.882-1.532,2.289-8.211,1.742v7.654a3.329,3.329,0,0,1-3.019,3.31l-4.437.4c-1.556-.093-3.589-.175-5.111-.163.082.29.163.569.233.813.186.616.384,1.255.546,1.893.918,3.6-2.671,8.119-10.662,13.416a3.3,3.3,0,0,1-1.834.557,3.5,3.5,0,0,1-1.035-.163c-7.107-2.323-8.118-3.786-8.559-4.413-1.08-1.592-2.021-2.962,5.447-13.6a14.775,14.775,0,0,0-2.683-2.612c-7.781,1.277-12.4,2.136-14.052,2.59-.651.476-2.637,3.949-3.845,7.05a3.343,3.343,0,0,1-3.554,2.08l-1.463-.2-2.532,1.916a3.266,3.266,0,0,1-2,.674h-15.32a3.351,3.351,0,0,1-2.242-.87l-29.118-26.493-.127-.116-7.051,2.184a3.3,3.3,0,0,1-2.009-.012l-5.8-1.881-.255-.081a3.339,3.339,0,0,1-1.719-1.29l-4.03-5.888a3.336,3.336,0,0,1-.2-3.426,3.632,3.632,0,0,1,3-1.65c1.2-.174,2.613-.2,4.064-.406-.127-3.9-1.916-13.728-3.844-22.334l-13.1-9.477a3.134,3.134,0,0,1-.662-.639,3.227,3.227,0,0,1-.581-1.161,2.464,2.464,0,0,1-.1-.5l-.685-5.61v-.024l-.116-.893a6.239,6.239,0,0,1-1.358.29,14.644,14.644,0,0,1-3.834-.314,20.544,20.544,0,0,0-2.159-.313,23.165,23.165,0,0,0-2.219,7,3.311,3.311,0,0,1-.8,1.684,3.194,3.194,0,0,1-1.022.766,3.328,3.328,0,0,1-1.975.29c-.219.2-.5.43-.731.639l-1.65,1.487-3.274.012.917,5.633s-2.881,2.184-2.961,2.254a6.162,6.162,0,0,1-4.611,1.963,9.586,9.586,0,0,1-5.319-1.707l-5.575-1.278a2.509,2.509,0,0,1-.384-.127l-.766,1.231-2.4,3.8H1301.6a2.726,2.726,0,0,1-1.336.291l-8.536-.291-66.459-2.265-5.621-.186c-.4.093-1.069.256-1.929.5-1.126.3-2.59.72-4.215,1.266-.372.128-.743.255-1.127.394a27.86,27.86,0,0,1-3.926,1.057v21.754a5.36,5.36,0,0,1,.616-.035,6.15,6.15,0,0,1,3.414,1.022c.221-.047.465-.092.72-.127a10.678,10.678,0,0,1,1.452-.105,9.686,9.686,0,0,1,4.413,1.15,6.084,6.084,0,0,1,.557.291,11.307,11.307,0,0,1,2.277-.406,11.587,11.587,0,0,1,1.289-.081,9.109,9.109,0,0,1,2.021.221c.092.012.209.035.36.058a7.013,7.013,0,0,1,1.777.453,6.543,6.543,0,0,1,4.088-1.428,7.3,7.3,0,0,1,2.381.429,6.691,6.691,0,0,1,3.949,1.846,7.221,7.221,0,0,1,2.009.43,7.9,7.9,0,0,1,4.925,5.877,6.721,6.721,0,0,1,2.636,2.636,6.459,6.459,0,0,1,.813,3.67,6.289,6.289,0,0,1,1.405,4.053,6.745,6.745,0,0,1-1.452,4.146l6.829,13.322-5.528-2.3a6.147,6.147,0,0,1-.662.929,7.462,7.462,0,0,1-1.917,1.742,3.275,3.275,0,0,1-.244,1.626,3.327,3.327,0,0,1-2.474,1.94l-13.31,2.358a3.329,3.329,0,0,1-3.194-1.22l-4.169-5.33-5.413,5.273a2.887,2.887,0,0,1-2.485.941,3.314,3.314,0,0,1-2.381-1.185l-1.6-1.929-6.968,5.2a2.992,2.992,0,0,1-2.138.651l-5.969-.267c-.07,10.535-.116,23.264-.059,28.5a6.3,6.3,0,0,1,1.813,4.588c.1.058.221.116.336.174a8.162,8.162,0,0,1,3.786,4.274,11.139,11.139,0,0,1,4.542,1.952,9.241,9.241,0,0,1,.813.685,8.576,8.576,0,0,1,4.691,2.289c.988.662,2.219,1.638,3.253,2.5.627.383,1.858,1.126,3.519,2.206,3.334,2.16,3.88,4.681,3.671,6.528l1.556.789-.384,9.734-1.487,1.115a17.632,17.632,0,0,1,3.508,3.984,8.992,8.992,0,0,1,1.753,5.655,14.271,14.271,0,0,0,1.348.651l1.626.662,1.011,1.452a9.517,9.517,0,0,1,1.556,4.4l1.662,2.822-1.15,5.482-.256.465a18.335,18.335,0,0,0-.719,2.416,11.912,11.912,0,0,1,1.056,2.241c.082.221.151.4.2.512a6.09,6.09,0,0,1,1.208,4.7c-.093.848-.3,2.544-2.928,5.761l-27.444,146.272c-1.847,9.9-2.9,14.774-6.377,16.261-.139.685-.243,1.173-.29,1.417a3.273,3.273,0,0,1-1.243,1.858l-4.54,9.686a3.332,3.332,0,0,1-2.95,1.905,3.2,3.2,0,0,1-3.02-1.8l-1.382-2.694-1.207,1.393a3.352,3.352,0,0,1-4.076.755l-6.458-3.437a3.333,3.333,0,0,1-1.754-2.939v-3.577a25.579,25.579,0,0,0-6.12,1.162,5.275,5.275,0,0,1-4.158.221,5.638,5.638,0,0,1-1.045-.465,3.994,3.994,0,0,1-.627.337,3.324,3.324,0,0,1-3.635-.755l-3.438-3.5c-2.183.128-5.691.8-7.131,3-2.892,4.4-4.8,11.348-4.82,11.417a3.372,3.372,0,0,1-3.52,2.451c-6.329-.6-16.876-1.568-18.234-1.568a57.123,57.123,0,0,0-5.818,4.634,3.347,3.347,0,0,1-2.9.8,3.3,3.3,0,0,1-2.357-1.87l-.976,2.277a3.333,3.333,0,0,1-2.1,1.87l-2.625.789-3.786,1.8a3.328,3.328,0,0,1-4.727-3.008v-.151a4.033,4.033,0,0,1-1.011.127c-5.353-.174-11.939-.127-13.264.256a66.744,66.744,0,0,0-4.8,5.737c-3.1,3.949-5.122,6.422-6.98,7.5-2.753,1.615-5.6.976-7.689.512a7.75,7.75,0,0,0-2.381-.314c-1.021.535-5.424,4.4-8.641,7.213-7.515,6.586-11.29,9.768-13.532,10.546a17,17,0,0,1-5.191.859,7.438,7.438,0,0,0-1.277.116c-.349.255-.988.662-1.707,1.115a26.08,26.08,0,0,0-3.357,2.334c-.047.5-.093,1.255-.163,2.172-.408,5.517-.759,9.585-1.1,12.595Z"
							transform="translate(-6.397 -4.319)"
						/>
						<path
							className="z-item-1821"
							d="M1004.8,268.846a5.218,5.218,0,0,0-.7.406l.348-.987c.082-.093.163-.175.233-.267Z"
							transform="translate(-6.282 -1.681)"
						/>
						<path
							className="z-item-1821"
							d="M1506.3,580.243c-2.348-3.2-5.888-8.532-11.29-17.479a3.331,3.331,0,0,1,1.823-4.889,16.835,16.835,0,0,1,9.466.2V212.9l-2.742.469c2.126,3.868-2.427,8.049-6.631,9.64a39.915,39.915,0,0,1-25.227.964c-6.945-2.1-14.529-4.762-21.324-7.549a54.638,54.638,0,0,1-12.171-6.492c-5.111-3.822-8.99-8.99-12.289-14.379-1.08-1.753-2.2-3.635-4.053-4.587-2.973-1.521-6.539-.151-9.779.685-10.082,2.6-20.8-.325-31.161.837-5.064.569-9.977,2.114-15.064,2.52-4.762.384-9.559-.243-14.333-.2-10.987.116-21.591,3.787-32.5,5.052-4.971.581-10.174.628-14.82-1.219-10.3-4.111-16.2-16.62-13.473-27.131,1.789-6.91-4.889-12.939-10.964-16.922-8.071-5.284-16.446-10.244-25.494-13.728a68.546,68.546,0,0,0-26.888-4.925c-8.165.3-18.13,1.626-22.9-4.762,1.626,2.7,3.251,5.378,4.878,8.072a31.486,31.486,0,0,1-12.672,2.242c-.127-1.7-.244-3.392-.372-5.087a24.084,24.084,0,0,0-11.5,2.416c2.265,3.588-2.346,7.538-6.342,9.151a101.634,101.634,0,0,1-38.118,7.4,22.676,22.676,0,0,0-6.992.651,20.01,20.01,0,0,0-5.575,3.287l-30.279,22.682c6.2,10.151,3.3,24.263,10.929,33.439,4.448,5.354,11.754,7.979,15.865,13.566,8.212,11.185-.209,26.782,1.975,40.372a121.74,121.74,0,0,1-22.276,12.648c-5.088,2.206-12.44,3.368-14.995-1.441-2.4-4.518,2.067-10.081.58-14.959-12.357-2.985-19.071-15.668-24.228-27.015,4.4-1.673,3.345-7.933,4.866-12.289,1.615-4.646,6.493-7.247,10.65-10.012s8.328-7.072,7.294-11.869c2.1-.557,4.216-1.127,6.318-1.7,1.731-18-10.1-34.193-16.317-51.23a71.06,71.06,0,0,1-2.207-7.236l-3.183,6.481-11.091,17.6-2.8.291c-1.184.115-2.567.266-3.368.36-.662.313-1.766.872-2.776,1.382l-3.426,2.624-3.9,6.9-4.2,11.452-2.834,4.077-2.323,7.189-6.1,7.19-2.079.976-2.869,4.576v9.965l-2.938,4.309-.476,2.532a7.28,7.28,0,0,1,1.684,3.566c.07.243.163.5.174.534l1.011,2.973-3.588,4.588-1.325,1.231-4.367,10.162-.7.743c-.883.941-1.929,2.079-2.44,2.614a.326.326,0,0,1-.058.07,1,1,0,0,0-.093.116c-.36.453-1.37,1.638-4.913,5.738l3.253-.163,8.92-1.08s1.045,6.156,1.162,6.818c.035.07.08.127.116.186a8.112,8.112,0,0,1,1.661,2.091,8.274,8.274,0,0,1,1.254-.128,15.353,15.353,0,0,1,4.263.917c.336.1.65.2.882.255,4.691.825,6.051,7.1,6.109,7.387.093.441,3.706,17.886,4.913,23.728l16.481,14.611.127,2.44c.071,1.487.163,3.321.175,4.042.047.743.395,3.925.58,5.157.023.059.047.116.07.175.837,1.869,1.766,3.983.929,6.469-.035.08-.07.221-.116.383.581,2.149,1.208,5.807-.743,8.874a7.509,7.509,0,0,1-4.39,3.368l-.662,4.541c-.325,2.845-.685,5.969-.836,7.364.174.662.464,1.683.592,2.091.3.754.534,1.7.639,4.785l.023.778-.2.813.941.917a16.407,16.407,0,0,1,4.46-.813c5.563-.162,9.384,3.8,11.382,7.433a34.485,34.485,0,0,1,2.88,8.049c.175.662.349,1.3.535,1.951.047.21.116.418.174.627a17.287,17.287,0,0,0,2.579,5.1c.069.093.128.174.186.255,2.183-.081,4.843-.174,5.4-.174.081,0,.233,0,.406-.012a8.98,8.98,0,0,1,4.2-2.741l.673-.163.814-.011a17.777,17.777,0,0,1,3.821.557l2.125.441.175-.047a14.454,14.454,0,0,1,4.042-.778,6.4,6.4,0,0,1,4.866,2.393l2.648.2c.139-.058.279-.116.384-.162a6.8,6.8,0,0,1,3.286-.743c.453,0,1,.035,1.429.058l.209.012a6.193,6.193,0,0,1,3,.882c2.474-.035,5.818-.092,7.572-.116a7.854,7.854,0,0,1,1.928-.546l.395-.047.477-.012c.58,0,2.125,0,5.134,1.6l.778.418.523.523a8.278,8.278,0,0,0,5.226-3.182,19.367,19.367,0,0,1,5.853-2.16l.14-.035a9.848,9.848,0,0,1,2.381-.233c.674,0,1.556.035,2.567.081,1.15.046,2.45.1,3.717.1.487,0,.964-.012,1.44-.023,3.821-.175,7.213-.256,7.213-.256l2.532-.07,4.448,4.565,1.045.232c1.638.372,3.81.825,4.472.906a8.453,8.453,0,0,1,3.809,1.475l1.139-1.022,2.114-.081c.813-.024,4.936-.163,5.935-.163,3.148,0,5.505,2.207,6.643,3.531l36.609,44.727a9.173,9.173,0,0,1,.975-.36,7.236,7.236,0,0,1,2.068-.3,7.992,7.992,0,0,1,5.679,2.5,9.546,9.546,0,0,1,.836-.8,6.266,6.266,0,0,1,.524-2.183c.754-1.7,2.508-3.739,6.631-3.739,1.162,0,2.52.127,3.833.243.557.047,1.1.093,1.591.128a13.777,13.777,0,0,1,4.378,1.091l.175.07c.406-.035.836-.058,1.324-.058,1.556,0,6.492.337,8.838,1.429.569.232,2.787.952,5.064,1.637h.116c.151,0,.29-.011.406-.011a6.722,6.722,0,0,1,3.357-1.812,12.12,12.12,0,0,1,2.265-.14c.395,0,.848,0,1.289.012l.941-1.011,1.916-.372c.871-.162,2.985-.546,3.763-.639l.349-.035.429-.011c.535,0,1.591,0,4.889,1.068l3.241-.093a11.939,11.939,0,0,1,2.184-1.475,8.7,8.7,0,0,1,3.786-.72l1.348-1.173,2.044-.023s.848-.024,1.788-.024a15.134,15.134,0,0,1,3.45.244,10.486,10.486,0,0,1,2.833,1.115l.441-.43a14.916,14.916,0,0,1,4.751-2.683c.162-.186.325-.395.429-.523a11.6,11.6,0,0,1,1-1.15c1.952-1.9,4.623-2.055,7.9-2.055a6.753,6.753,0,0,1,4.007,1.358l6.237-.349,1.289.581c6.807,3.043,9.188,4.274,9.779,7.654,0,.047.512,3.333.7,5.18.151.5.511,1.509.894,2.578l3.241,3.751-.686,6.922-1.533,1.754a11.586,11.586,0,0,1-.36,2.044c-1.184,4.286-4.681,7.143-7.933,9.361-.266.186-.615.418-.894.639a1.8,1.8,0,0,0-.452.429,3.582,3.582,0,0,0-.035,1,2.769,2.769,0,0,0,0,.314l.08,2.044.406,9.745a18.128,18.128,0,0,1,0,1.963,8.542,8.542,0,0,1-.662,2.939,10.879,10.879,0,0,1-3.891,4.262l-7.317,5.366a11.214,11.214,0,0,1-.245,3.647,6.451,6.451,0,0,1-.511,1.358,30.2,30.2,0,0,1,.917,3.52c.326,1.6.012,2.834-.755,5.818-.046.21-.1.406-.139.569.024,2.508.163,11.3.222,12.369.162,2.474-1.417,8.688-2.312,10.233a.918.918,0,0,1,.1-.163c-.024.059-.059.128-.081.2,1.2,1.429,2.311,2.753,2.961,3.484,2.277,1.638,2.787,4.972,3.136,7.2l.093.58-.465,9.024,2.369,4,1.94,6.1.047.673c.092,1.069.2,2.335.29,3.195a12.8,12.8,0,0,1,2.172,3.96c.174.627.383,1.556.546,2.3l1.068,1.627a11.942,11.942,0,0,1,2.927-.43,6.167,6.167,0,0,1,2.683.6c2.148,1.056,2.985,2.88,4.146,5.412l.14.325a30.535,30.535,0,0,1,1.544,6.609c.21.429.535,1.091.755,1.521.511,1.045.882,1.789,1.127,2.416l1.405.162,1.5,2.044c2.555,3.473,2.753,3.868,3.043,4.716.429,1.277.406,2.357.1,5.167l-.233,2.219-2.567,2.3a3.353,3.353,0,0,1-.917,1.219l-.616.523c-.546,2.416-2.345,5.54-5.69,5.981l-14.716,13.555a13.94,13.94,0,0,1,3.659,1.126l.116.059c2.323.894,4.738,4.181,5.3,6.992h.918l1.661,1.509c4.135,3.74,8.8,7.944,9.64,8.676a16.731,16.731,0,0,1,2.532,2.741l1.289,1.591v1.65c1.115.65,2.474,1.428,3.67,2.079l2.857,1.568.151,3.252c.14,3.078-.476,5.111-2,6.6-.023.023-.047.035-.07.058.047.209.209.837.639,2.23.2.012.395.012.558.023l5.691.21-.1,5.7c-.047,2.148-.071,4.6-.082,6.306.1.092.2.186.29.278.349.337,1.254,1.22,2.961,4.437l.441.825.163.917s.2,1.208.3,2.218a26.1,26.1,0,0,1,.058,2.962c7.085,16.306,7.085,16.643,7.085,18.083a18.768,18.768,0,0,1-.128,1.893,7.766,7.766,0,0,1,2.706,2.346,8.85,8.85,0,0,1,1.3,3.485c.047.243.093.5.128.627a7.03,7.03,0,0,1,.221,3.391l.047,3.287v5.075l-.279.093,25.308,23.031h12.927l2.741-2.067a3.389,3.389,0,0,1,2.463-.65l.3.046c1.614-3.519,4.134-7.735,7.224-8.595,2.579-.719,9.757-1.928,14.936-2.776,3.973-.639,7.864,3.566,10.43,7.2a3.332,3.332,0,0,1-.012,3.868c-2.056,2.846-4.356,6.307-5.551,8.421.638.243,1.475.557,2.345.87,2.985-2.137,5.738-4.622,6.424-5.83-.1-.372-.22-.754-.326-1.115-.719-2.4-1.463-4.877-.127-7.015a4.719,4.719,0,0,1,3.321-2.126,39.4,39.4,0,0,1,8.026-.035l.836-.082v-8.4a3.3,3.3,0,0,1,1.15-2.508,3.387,3.387,0,0,1,2.648-.778,39.442,39.442,0,0,0,6.457.476c1.638-1.731,5.459-5.3,11.405-10.662a3.331,3.331,0,0,1,3.868-.418l2.927,1.672,2.265-1.721Z"
							transform="translate(-6.3 -0.825)"
						/>
						<path
							className="z-item-1821"
							d="M529.684,1100.675c1.37,7.015,2.369,14.3,5.191,20.952a27.6,27.6,0,0,0,1.5,2.711h476.348c.339-2.943.726-7.319,1.151-13.083.116-1.487.2-2.567.233-2.949.337-2.939,3.425-4.855,6.4-6.714.557-.348,1.057-.65,1.406-.906a8.164,8.164,0,0,1,4.832-1.324,10.885,10.885,0,0,0,3.3-.5c1.487-.651,7.631-6.04,11.3-9.257,6.167-5.4,8.839-7.666,10.464-8.351,2.277-.952,4.564-.453,6.389-.035,1.185.245,2.392.523,2.9.233.929-.569,3.542-3.891,5.1-5.865,3.775-4.8,5.842-7.317,8.119-8,2.625-.8,10.65-.662,14.332-.569l3.369-2.171a3.273,3.273,0,0,1,2.776-.406,3.35,3.35,0,0,1,3.264-2.695h8.061a3.357,3.357,0,0,1,2.786,1.51c4.437-3.473,6.226-3.473,6.888-3.473,1.684,0,11.127.86,16.167,1.336a48.4,48.4,0,0,1,4.844-10.639c4.158-6.318,13.218-6.063,14.239-6.016a2.31,2.31,0,0,0,3.531.081,3.319,3.319,0,0,1,3.729,1.8,11.183,11.183,0,0,0,1.858,2.683c3.531-1.359,10.151-1.742,11.521-1.812a2.892,2.892,0,0,1,2.451.906,3.339,3.339,0,0,1,1.033,2.416v5.168l2.358,1.254,2.694-3.112a3.23,3.23,0,0,1,2.916-1.115,3.332,3.332,0,0,1,2.555,1.777l.534,1.045,1.488-3.183c-6.446-8.06-13.392-16.376-15.981-18.908-.279.244-.72.592-1.08.87-.512.407-1.057.837-1.639,1.243-2.833,1.975-5.958,1.278-8.048.813-.441-.092-.87-.186-1.278-.243a10.118,10.118,0,0,0-1.033-.1,3.38,3.38,0,0,1-3.241-.814,10.9,10.9,0,0,0-1.834-1.416c-1.37.383-4.077.337-10.059-2.718a3.3,3.3,0,0,1-1.242-4.809l.987-1.464,37.713-56.283a4.7,4.7,0,0,0,.069-1.87,4.21,4.21,0,0,1-2.114-.767,1.043,1.043,0,0,1-.163-.162l-.349-.418-2.59-3.112h-2.973a3.335,3.335,0,0,1-2.753-1.441l-.231-.348-.581-.86h-4.6a3.225,3.225,0,0,1-1.672-.453l-6.179-3.612-4.552,1.778a3.313,3.313,0,0,1-3.206-.442,3.35,3.35,0,0,1-1.313-2.961,6.686,6.686,0,0,0-.941-3.717c-.255-.36-.836-.557-2.1-.941a12.589,12.589,0,0,1-5.644-2.973c-.894-.87-3.357-1.951-5.842-2.845v1.057a3.323,3.323,0,0,1-2.683,3.263,3.278,3.278,0,0,1-3.263-1.231,3.183,3.183,0,0,1-.453-.767,2.5,2.5,0,0,0-.128-.243c-.592.627-1.44,1.533-2.288,2.439l-2.95,3.206a3.345,3.345,0,0,1-4.042.674l-3.252-1.777-5.958,3.251a3.315,3.315,0,0,1-4.17-.813l-1.87-2.277-2.206-.859a3.327,3.327,0,0,1-2.114-3.1,3.252,3.252,0,0,1,.243-1.254l-10.929-1.336a3.326,3.326,0,0,1-2.126-1.139,3.238,3.238,0,0,1-.6-1.022l-.092-.267-4.2,3.937-.6.917-1.9,2.881a3.3,3.3,0,0,1-3.671,1.37l-3.147-.882-.58-.163-1.266,2.474-2.033,3.96a3.33,3.33,0,0,1-3.879,1.673c-3.426-.987-7.631-2.126-8.421-2.23-.221.116-4.076,1.231-7.213,2.218a3.342,3.342,0,0,1-3-.534l-6.516-4.936-.825-.628-.546,1.452a1,1,0,0,1-.081.163,3.258,3.258,0,0,1-3.937,1.846l-5.146-1.463a3,3,0,0,1-.708-.3,2.927,2.927,0,0,1-.488-.337,7.586,7.586,0,0,0-1.01-.674c-1.975,1.905-5.668,2.636-9.2,2.834-.848.058-1.683.081-2.5.081a3.324,3.324,0,0,1-3.321-3.334v-1.683h-6.957a3.31,3.31,0,0,1-3.241-2.579s-1.231-5.436-1.556-7.259a4.866,4.866,0,0,1-.058-1.15,6.626,6.626,0,0,1,2.473-4.088c1.033-1,1.672-1.661,1.823-2.625.267-1.719-1.382-8.654-3.183-14.507l-.754-.546-.233-.163-.568-.406-1.186.976-.789.638a3.336,3.336,0,0,1-3.334.535l-3.38-1.348-5.342-2.125-5.587-2.219a3.4,3.4,0,0,1-2.021-2.346,3.408,3.408,0,0,1,.779-2.984A39.224,39.224,0,0,0,981.2,902.3c-.743-.917-1.963-2.265-3.1-3.449a25.325,25.325,0,0,0-2.556-2.4c-1.765-1.29-2.416-3.821-1.94-7.527q.052-.453.14-.94c-.476-.291-.941-.6-1.394-.929a13.615,13.615,0,0,1-2.428-2.149c-.023-.023-.046-.058-.07-.081a.407.407,0,0,0-.115,0,1.392,1.392,0,0,0-.384-.011c-.616-.024-1.406.023-1.905.047-.592.035-1.162.058-1.638.058-.36.151-.755.314-1.174.453a6.577,6.577,0,0,1-6.376-1.045c-1.789-1.243-3.6-4.158-5.04-7.131a49.976,49.976,0,0,1-2.126-5.215c-.2.023-.4.059-.569.081a29.069,29.069,0,0,1-3.263.278l-.872.012c-.766.012-1.649.024-2.59-.012a18.541,18.541,0,0,1-2.729-.29h-.012a7.964,7.964,0,0,1-5.413-3.112,6,6,0,0,0-1.579-1.254c-.128-.081-.255-.175-.384-.255-1.544-1.057-3.728-2.753-3.844-5.982a2.177,2.177,0,0,1-.012-.278,5.415,5.415,0,0,1,1.15-3.392c-.059-.082-.116-.162-.162-.233l-.825-1.207-.651-.941-1.754-2.567a3.335,3.335,0,0,1,.244-4.076c-.372-.476-.883-1.138-1.5-1.916-1.65-2.1-3.96-5.076-5.958-7.62-1.3-1.661-2.451-3.147-3.194-4.1l-1.091-.21-7.77-1.521a3.332,3.332,0,0,1-2.486-2.114l-1.207-3.321h-7.77a3.351,3.351,0,0,1-2.242-.872l-10.36-9.443-.349-.325-.3.174-5.273,2.961a3.11,3.11,0,0,1-.964.267l.024.093a124.758,124.758,0,0,1-15.512-6.332c-.485-.25-1.127-.046-1.742-.116l23.6,30.2a3.332,3.332,0,0,1,.023,4.123l-4.111,5.238,4.623,12.9a3.325,3.325,0,0,1-3.124,4.448h-7.259a3.349,3.349,0,0,1-2.265-.894c-3.206,12.636-6.109,25.2-6.109,27.329,0,3.38-4.6,9.013-23.427,28.722-3.519,3.671-7.491,7.852-8.083,8.7-1.336,3.357-30.929,24.588-36.829,27.608-7.457,3.833-62.951,21.242-70.361,23.566l-18.316,17.224a52.017,52.017,0,0,1,2.138,7.167,4.263,4.263,0,0,1-1.371,4.03c-1.985,1.719-5.11,1.208-7.364.476a3.3,3.3,0,0,1-1.974-1.73l-2.23-4.46c-1.2,9.477-2.323,19.036-2.334,20.314,0,3.147-3.113,5.191-6.726,7.56a23.249,23.249,0,0,0-3.542,2.59c-.755,1.974-3.032,19.443-4.682,34.995a3.289,3.289,0,0,1-1.951,2.683l-11.324,5.017v9.628a3.321,3.321,0,0,1-1.15,2.508,3.267,3.267,0,0,1-2.648.778l-1.847-.266a4.325,4.325,0,0,1-.3.778,5.274,5.274,0,0,1-3.369,2.625.741.741,0,0,1,.047.059,3.318,3.318,0,0,1-2.532,5.481,3.09,3.09,0,0,1-.72-.081,92.866,92.866,0,0,1-18.467-6.55c-8.63-4.193-11.08-18.99-11.742-25.088a56.535,56.535,0,0,1-5.889-1.789,30.967,30.967,0,0,0-6.155,2.161,3.339,3.339,0,0,1-2.671.047l-20.58-8.746-13.45,8.49a3.277,3.277,0,0,1-3.693-.092c-2.044-1.452-4.46-3.741-4.333-6.4a4.231,4.231,0,0,1,2.16-3.508,47.494,47.494,0,0,0,3.555-6.574h-1.882a3.31,3.31,0,0,1-3.112-2.183l-3.229-8.839a3.323,3.323,0,0,1,1-3.7l5.25-4.321a3.33,3.33,0,0,1,3.135-.592l5.4,1.754,5.285-4.889-4.529-23.23c-12.289,9.722-28.456,14.937-38.258,27.039-3.38,4.182-5.819,8.989-8.235,13.763q-4.163,8.206-8.328,16.423c-2.636,5.2-5.238,7.77-2.624,13.031,3.31,6.667,5.052,13.543,6.469,20.8"
							transform="translate(-3.266 -5.098)"
						/>
						<path
							className="z-item-1821"
							d="M873.416,850.708l3.624-4.611-17.12-21.451h-4.042a3.312,3.312,0,0,1-3.194-4.263l1.614-5.493a2.681,2.681,0,0,1,2.277-2.183c-3.9-.883-8.432-1.835-12.636-2.648a3.407,3.407,0,0,1-1.987-1.231c-.417-.546-9.372-15.949-9.814-16.506l-13.577-3.732c-.465.255-9.292,12.1-9.861,12.1h-6.457c-2.068,0-4.123-1.092-6.516-2.346-.139-.07-.267-.139-.406-.221a19.791,19.791,0,0,0-4.262-1.835c-1.139-.162-4.983.326-9.594,1.115-3.3.569-2.857-6.193-6.226-5.45a3.314,3.314,0,0,1-2.5-.426,4.717,4.717,0,0,0-4.132-.375l-3.579,1.315-.116-.267-5.761-.65-2.938-.337-6.516-.743h-.011l-7.1-.8a3.342,3.342,0,0,1-2.88-3.973l1.928-9.384.488-2.346h-7.619a3.322,3.322,0,0,1-3.322-3.321v-4.147H718.366a3.3,3.3,0,0,1-1.478-.349l-15.726-7.852a3.4,3.4,0,0,1-1.615-1.777l-1.683-4.356-1.893-4.936-2.033.906a3.344,3.344,0,0,1-3.11-.2l-2.3-1.411-.012-.011-4.332-2.66-6.075-3.729-21.464-13.182c.163,5.18-.186,10.639-4.146,13.821a18.961,18.961,0,0,1-6.365,2.881,299.343,299.343,0,0,0-52.23,22.032,6.858,6.858,0,0,0-3.147,2.648,6.7,6.7,0,0,0-.209,3.891q1.619,10.959,3.24,21.905c.755,5.18,1.186,11.324-2.868,14.762-2.881,2.463-7.247,2.694-10.14,5.145-2.265,1.928-3.252,4.89-4.03,7.724-2.219,8.071-3.6,16.423-6.83,24.169s-8.722,15.076-16.643,18.3c-3.171,1.289-7.108,2.311-8.246,5.482-.72,2.02.035,4.227.719,6.272,4.774,14.111,10.569,29.419,9.734,44.262,2.508,1.51,3.008,4.925,2.369,7.735s-2.1,5.4-2.555,8.246c-.7,4.333,1.068,8.769,3.809,12.242s6.377,6.167,9.977,8.816q3.048,2.246,6.109,4.495c2.392,1.754,5.447,3.612,8.177,2.416,4.238-1.858,2.706-8.142,4.726-12.207a6,6,0,0,1,6.028-3.392c2.451.384,4.367,3.124,3.426,5.366-.453,1.08-1.417,1.882-1.9,2.95a3.871,3.871,0,0,0,1.5,4.785,4.131,4.131,0,0,0,5.064-.813c2.659-3.147-.941-8.2.871-11.858a26.778,26.778,0,0,1,1.476-2.253c.523.893,1.207,1.869,1.614,2.764,2.567,5.668,2.44,12.23.86,18.235s-4.507,11.579-7.456,17.073a113.352,113.352,0,0,1-7.271,12.2,56.244,56.244,0,0,1-5.772,6.69l5.679,29.13a3.356,3.356,0,0,1-1,3.078l-8.072,7.468a3.315,3.315,0,0,1-3.275.72l-5.528-1.789-2.021,1.661,1.615,4.448H578.5a3.5,3.5,0,0,1,2.644,1.106,3.346,3.346,0,0,1,.577,3.541,93.046,93.046,0,0,1-4.995,10.127l10.453-6.6a3.268,3.268,0,0,1,3.067-.245l20.848,8.85c7.166-3.067,9.175-2.091,9.953-1.719a67.9,67.9,0,0,0,7.386,2.126,3.3,3.3,0,0,1,2.532,3.02c.441,7.154,3.055,19.443,8.223,21.963a82.012,82.012,0,0,0,11.324,4.448,5.76,5.76,0,0,1,.186-.58,4.952,4.952,0,0,1,4.345-3l.1-1.177a3.5,3.5,0,0,1,.963-2.187,3.423,3.423,0,0,1,2.836-.956l1.683.244v-7.944a3.3,3.3,0,0,1,1.975-3.032l11.545-5.122c3.566-33.194,5.1-35.424,5.61-36.167,1.044-1.533,3.054-2.845,5.365-4.366a30.723,30.723,0,0,0,3.751-2.707c.279-4.193,2.37-20.615,2.811-24.076a3.319,3.319,0,0,1,4.042-2.81l4.135.929c.035-.047.07-.07.1-.116l22.985-21.6a3.286,3.286,0,0,1,1.289-.755c17.422-5.447,63.96-20.244,70.035-23.356,7.131-3.659,32.138-22.614,34.228-25.18.163-.569,1.1-1.626,8.909-9.8,6.678-6.981,20.557-21.521,21.661-24.658-.082-3.995,6.4-29.118,7.689-34.111a3.374,3.374,0,0,1,2.358-2.37,3.306,3.306,0,0,1,3.217.86l3.055,3.055h1.162l-3.647-10.186a3.312,3.312,0,0,1,.511-3.171m-273.3,90.756c-2.358-.128-5.064.081-6.678-1.591.139-2.009,2.009-3.566,4.007-4.065a2.935,2.935,0,0,0-.128.453c1.325,1.405,3.4,1.475,5.4,1.544a8.317,8.317,0,0,0,.047,4.333,8.037,8.037,0,0,0-2.648-.674"
							transform="translate(-3.408 -4.552)"
						/>
						<path
							className="aa-item-1821"
							d="M1044.314,125.341l.384-.025c.076-.031-.384.025-.384.025"
							transform="translate(-6.533 -0.788)"
						/>
						<path
							className="ab-item-1821"
							d="M1044.314,125.341l.384-.025C1044.773,125.285,1044.314,125.341,1044.314,125.341Z"
							transform="translate(-6.533 -0.788)"
						/>
						<path
							className="aa-item-1821"
							d="M1375.231,729.7a5.438,5.438,0,0,1,.342-2.588c.343-.334,1.37-.584,1.028-1.668a15.484,15.484,0,0,0-.685-2.588c-.343-.5-2.311-1.252-2.825-1.92a4.517,4.517,0,0,1-1.027-2.671c.085-.834.256-2.336.256-2.921s-7.106-16.943-7.106-16.943.086-2.671,0-3.506-.257-1.835-.257-1.835a20.634,20.634,0,0,0-1.883-3.005,23.1,23.1,0,0,1-1.97-1.753c-.172-.334,0-9.1,0-9.1a18.53,18.53,0,0,1-2.654-.25,3.737,3.737,0,0,1-2.741-2.336,32.089,32.089,0,0,1-1.369-5.008c-.085-1-1.37-2.169-.256-3a22.306,22.306,0,0,0,2.054-1.669c.343-.334.257-2.17.257-2.17s-6.679-3.672-6.679-4.089V658a21.8,21.8,0,0,0-1.627-1.836c-.343-.25-9.932-8.931-9.932-8.931h-3a47.793,47.793,0,0,1-1.369-4.674,6.254,6.254,0,0,0-1.8-2.755c-.428-.167-2.226-1.084-3.168-.751s-1.8,1.252-2.141.918-1.541-2-1.541-2-4.967-.584-5.223-.334-.171,2-1.285,2.169-2.226.584-2.482-.167,1.113-2.169,1.113-2.169l25.174-23.2s1.627-.334,1.884-.334.855-1.336.855-1.669V610.6l4.2-3.756a23.425,23.425,0,0,0,.172-2.67c-.086-.25-2.227-3.172-2.227-3.172l-3.6-.417-.257-.835s.257-1.919.257-2.169-2.141-4.257-2.141-4.591-.941-5.258-1.113-5.592a17.7,17.7,0,0,0-1.627-3.089,20.267,20.267,0,0,0-3.682.751h-2.312l-3.6-5.508s-.428-2.087-.685-3.005-1.97-2.921-2.141-3.421-.514-4.842-.514-4.842l-1.541-4.841-2.911-4.924.514-10.183s-.514-3.339-.771-3.255-6.164-7.178-6.164-7.178,1.2-3.5,1.541-4.089a36.19,36.19,0,0,0,1.54-6.844c-.085-.751-.256-13.188-.256-13.438s1.113-4.173,1.027-4.59a18.345,18.345,0,0,0-.942-3.339c-.428-.835-1.969-2.086-1.284-2.67s1.712-.835,1.883-1.5a17.061,17.061,0,0,0,0-3.005s-1.883-3.338-1.883-3.588a33.742,33.742,0,0,1,1.8-3.089s5.908-2.5,6.936-2.838a28.511,28.511,0,0,0,5.309-3.922c.171-.334,1.113-3.172,1.113-3.172a14.742,14.742,0,0,0-.428-3.171,31.6,31.6,0,0,1-1.884-2.838l-.6-4.59s1.37-.584,1.627-1.085a14.75,14.75,0,0,0,.428-3.255c0-.417-.171-2-.171-2l3.938-4.674,4.2-2.421,2.483-2.837.257-2.588-2.312-2.671s-1.541-4.173-1.541-4.59-.6-4.674-.685-5.174-6.422-3.339-6.422-3.339l-7.536.417s-.856-1.5-1.627-1.5-3.425,0-3.853.417-1.8,2.5-2.826,2.755a11.141,11.141,0,0,0-3.339,1.586c-.428.416-2.654,2.587-2.654,2.587l-2.74-.167a20.877,20.877,0,0,0-3.168-1.586,32.206,32.206,0,0,0-3.854-.082,8.912,8.912,0,0,1-1.627,1.168,20.7,20.7,0,0,0-3.168.167c-.343.167-2.654,2-2.654,2l-6.165.167a23.3,23.3,0,0,0-4.11-1.085c-.685.083-3.424.584-3.424.584s-1.37,1.5-2.055,1.5-3.854-.083-4.281,0-.857.918-1.884,1.419a8.386,8.386,0,0,1-4.538.334c-1.113-.334-5.223-1.586-6.079-2a23.685,23.685,0,0,0-7.45-.835c-1.969.25-2.825-1-5.223-1.169s-6.079-.668-6.336-.083.771,1.586.172,2.588-1.2,1.085-1.97,1.5-.857,1-2.055,2.086a12.948,12.948,0,0,1-2.825,1.836s-2.655-1.169-3.255-2.17-1.712-2.169-2.825-1.835a31.071,31.071,0,0,0-4.11,2.169l-39.559-48.326s-1.284-1.5-2.226-1.5-5.737.167-5.737.167l-2.141,1.919a13.908,13.908,0,0,1-3.083-.334,4.91,4.91,0,0,0-2.74-2c-1.37-.167-5.052-1-5.052-1l-1.627.5-4.967-5.092s-3.339.083-7.106.25-7.963-.334-8.99-.083a16.6,16.6,0,0,0-4.2,1.419c-1.028.668-1.2,2.254-1.8,2.421s-2.911.25-3.254.668-.343,1.169-1.2,1.5a10.523,10.523,0,0,1-3.425.334,20.075,20.075,0,0,1-2.74-2.421,8.037,8.037,0,0,0-2.483-.918c-.6.083-1.113.584-1.541.584s-11.046.167-11.046.167-.514-.918-.857-.918a8.448,8.448,0,0,0-2.054,0c-.257.167-2.227.918-2.227.918l-6.592-.5s-1.456-2.17-1.8-2.17-2.569.584-2.569.584a2.065,2.065,0,0,1-1.37,1.252c-1.027.25-2.483.5-2.483.25a11.8,11.8,0,0,0-1.113-1.836,18.988,18.988,0,0,0-2.74-.417,4.809,4.809,0,0,0-1.628,1.419c-.427.584-.427,1.169-.856,1.252s-2.74.25-3.511.25-7.792.25-7.792.25l-2.4-2.087s-1.627-1.085-1.285-2.421a2.946,2.946,0,0,0-.171-2.169l-4.795-6.094s-.686-6.26-.686-6.594a12.815,12.815,0,0,0-2.654-3.088c-.428-.167-3.339,1.085-3.339,1.085l-8.734.082-.685-1.084.6-2.254-3-2.922.771-3.255a21.055,21.055,0,0,0-.257-2.922,31.916,31.916,0,0,1-1.027-3.839c0-.417.942-8.43.942-8.43l1.113-7.679a19.026,19.026,0,0,1,2.313-2.17c.256,0,1.369,1.336,2.482-.417s-.342-5.341-.342-5.592a19.466,19.466,0,0,1,.6-2.421c.171-.5-.942-2.588-1.113-3.172s-.771-6.093-.771-6.594-.171-3.922-.171-3.922l-16.1-14.272s-5.223-25.206-5.309-25.624a9.888,9.888,0,0,0-1.456-2.838c-.256,0-3.6-1.085-4.11-1.085a7.087,7.087,0,0,0-3.083,1.169,8.431,8.431,0,0,1-2.654,1.085l-1.113-1.836a22.75,22.75,0,0,0,.6-2.838c0-.583-.427-.917-.856-1.335a7.666,7.666,0,0,1-1.541-2.5c-.085-.584-.343-2.087-.343-2.087l-3.424.417s.171,2.17-.857,2.5a14.6,14.6,0,0,1-2.654.584c-.257,0-1.2,1.252-1.627,1.92s-.514,1.084-1.028,1.251-10.018.835-10.018.835l4.623-12.77s7.792-9.014,7.964-9.265,2.911-3.172,2.911-3.172l4.453-10.349,1.883-1.753,1.37-1.753a10.143,10.143,0,0,1-.428-1.585,19.718,19.718,0,0,0-2.141-2.755l1.2-6.427,2.62-3.84v-9.849l4.658-7.428,2.483-1.169,4.538-5.341,2.226-6.927,2.911-4.174,4.11-11.184,4.709-8.346,4.8-3.673s3.938-2,4.281-2.086,4.366-.5,4.366-.5l9.419-14.94,7.022-14.273,14.813-3.171,15.07-4.508,5.308-2.587,2.141-3.589a10.084,10.084,0,0,1-1.2-2.169,6.325,6.325,0,0,1,.77-1.669,6.2,6.2,0,0,1,.771,1c.086.25,0,1.251.342,1.251s1.97-.167,1.97-.167l1.8-2.67s3.6-2.087,4.025-2.17,2.569-.668,2.569-.668l.685-2.67c.086-.335-2.141-3.756-2.141-3.756l-4.709-7.428-.6-4.424-2.4-1.668-3.34.5a13.172,13.172,0,0,0-2.654-1.92c-.685-.167-3.339-.417-3.339-.417l-3.854-2.254L1094.3,84.59l-3.254.517-4.452.5v1.085h1.626c.428,0,.771-1.085,1.628-.543a6.166,6.166,0,0,1,1.284.876c.685.584,1.627.918.428,1.336s-3.253.835-3.34,1.169-1.455,1.085-1.626.751.6-1.669-.857-1.92-1.541.918-1.285,1.5a1.4,1.4,0,0,1-.112,1.5c-.315.417-.4-.166-1.257.668s-1.028,1.169-1.541,1.252-1.627-.835-1.627-.835-1.37-.167-.686-.751.558-2-.192-2.251.364,2-1.521,2.919-3.938.584-4.11,1.5.428,1.669.857,1.669a2.228,2.228,0,0,1,1.884.417,4.5,4.5,0,0,1,1.627,1.836c.256.668,1.028,1.169,1.113,1.5s-1.541,1.169-2.055,1.252-2.141-1.084-2.312-.5,1.2,1.669-.256,2.087a9.967,9.967,0,0,1-2.483.417.893.893,0,0,1-1.113-1V99.213s1.2.25,1.37-.417-.514-1.669-.514-1.669-1.713-1-2.141-.5-.085,1.252-1.2,1.336-.685-.167-2.14-.334-2.4-.584-2.825-.25a1.358,1.358,0,0,1-1.456.334c-.857-.167-1.541-.584-1.8-.167a1.661,1.661,0,0,0-.342,1.252c.085.5,2.825,1.835,2.825,1.835s.686.751.686,1.169v2.5l-.771,3.255-1.884,2.922s-.085,4.508-3.425,6.844-4.538,1.753-7.364,4.341-1.37,2.837-3.853,3.088c-1.751.177-2.976.269-3.556.309-.083.034-.815.172-3.552.609-5.223.835-4.624.584-4.624.584a6.29,6.29,0,0,0-3.682.584,28.892,28.892,0,0,0-2.825,2.087,10.943,10.943,0,0,1-2.912,1.92c-.942.25-2.912.417-3.339.917a14.21,14.21,0,0,0-1.114,1.92,19.007,19.007,0,0,1-2.825,2.337,3,3,0,0,1-1.627,1.669c-1.113.334-3.424,1.335-3.424,1.335s-1.97.918-2.227,1.5a14.521,14.521,0,0,1-1.2,2.254,4.816,4.816,0,0,1-1.8,1.669c-.685.334-1.712.751-1.712.751a7.308,7.308,0,0,0-2.4.835c-.857.584-1.285.668-1.285,1.084s.6,1.169,0,1.5-1.284,3.673-6.079,4.508-2.483,1.169-7.193.835-5.651-.584-6.85,0a22.324,22.324,0,0,1-2.483,1,6.7,6.7,0,0,0-2.826-.5c-1.54.082-5.394.417-5.394.417H968.77a4.865,4.865,0,0,1-2.483-.5c-1.627-.668-.685.083-3.168-1.252s.857-.167-3.767-1.669-4.281-1.753-5.822-1.753a7.7,7.7,0,0,0-2.826.167,12.619,12.619,0,0,1-2.74.334s-.343-2.5-1.97-.5-1.712,3.005-1.712,3.005-2.825,1.085-3,1.753.172,3.421,0,4.507.086,2.17,0,3.588,1.456,1.92,0,3.089.172,3.339-1.54,3.84-3.255,2.253-6.851,2a53.762,53.762,0,0,1-10.617-2c-4.11-1.085-6.08-1.836-8.134-2.421s-2.312-2-4.967-2.254-2.4-.835-4.2-.167a20.619,20.619,0,0,0-3.511,1.92c-1.113.584-1.884.835-2.226,1.753s0,1.252-1.37,1.585-3.424,1.217-3.51,1.611a8.756,8.756,0,0,1,0,2.146,3.6,3.6,0,0,1-1.028,1.92,13.967,13.967,0,0,1-2.654,0,6.23,6.23,0,0,1-1.628,1.836,12.612,12.612,0,0,1-3.253,2.5c-1.8.918-.685.083-3.168.835s-1.883.083-2.825,1.5a23.085,23.085,0,0,0-1.285,2.421c-.6,1-.085,1.336-1.369,1.752s-2.4-.166-3,.334-.343,1.169-2.141,2.588-1.541,2.087-2.74,2.421-1.97-.417-2.483.5-1.884,1.085-.514,1.919,2.483,1.169,1.541,3.255-2.227,2.337-2.569,3.256,0,2.17-1.37,2.67-2.825.668-2.911,1.586-.771,1.676.6,2.09,1.627-.337,2.569-1.088,1.284-1.169,1.883-.751.771.584.771,1.336.171,2.17-.343,2.671a4.666,4.666,0,0,1-1.884,1.169c-.513.082-1.8-.417-1.969-.168s-2.206.918-1.874,1.92,1.36,1.252.418,2.17-3,1-4.11,2.254-1.369,2.087-.342,2.754.941-.083,2.226-1.335,1.284-1.669,2.569-2.337,1.883-2.838,3.168-3.005,1.8.334,1.883,2,1.456,2.17.172,2.755-2.055.25-2.483.584-.343.832-1.028,1.584-2.386-.751-.845,2.254.587,1.837,1.444,2a9.123,9.123,0,0,0,1.349.079l.994,2.209a.833.833,0,0,1-.2.133c-.77.333-1.455,0-2.055.333,0,0-1.209,1.013-1.08,1.92s.963.971,0,1.628-1.413.313-1.83,1.69-1.189,1.346-.45,2.285,1,.814.547,2.034.481,1.69-1.285,3.318-2.408,1.252-3.114,2.191-.675,1.189-.128,1.815,1-.313,1.862,0,1.445.658,1.894,2.286-.353,1.721,1.189,2.378,2.215,1.6,1.8,3.381-.546,1.1-1.413,3.224.289,1.44-1.38,3.254-1.38,1.284-2.793,2.035-1.252-.094-2.087-.094a2.451,2.451,0,0,0-1.99.783c-.9.719-.418,1.659-2.377,1.19s-3.981.031-3.114-1.064.386-.376,1.606-.751,2.119-1.189.867-1.346a14.892,14.892,0,0,0-2.954.064c-.93.031-.674.594-1.059.845s-.642.188-1.573-.032a4.711,4.711,0,0,0-2.762.282c-.963.344-.835.188-1.445,1.283s.225,1.659-1.252,1.533-.835.25-1.99.345-.482-.438-1.766.219-1.445.157-2.344,1.284-.931.657-1.445,2.128.931,1.19-.738,1.941-1.766.5-2.633,1.189-.514.281-1,1.315.129,1.127,0,2.911.065,1.659-.514,2.6-1.091.814-1.894,1.878-1.7.469-2.023,1.5a6.7,6.7,0,0,1-.931,2.034c-.706,1.283-.609.563-.931,1.941s.643,1.408-.867,1.94a11.892,11.892,0,0,1-2.762.689c-.481.063-1.156.157-1.83,1.409s.321,1.1-.932,1.846a5.424,5.424,0,0,1-1.552.617h0a6.589,6.589,0,0,0-.791.414c-1.478.876-1.22.939-2.505,2.254a11.545,11.545,0,0,1-3.339,2.567,18.628,18.628,0,0,0-3.275,2.316c-3.114,2.347-1.38,1.627-4.077,2.879a15.867,15.867,0,0,0-3.886,2.567c-.9.563-1.8.406-3.372.438a27.417,27.417,0,0,0-5.972.751c-.8.376-.706.406-.738,1.533s.8,1-.642,1.628-1.927.281-2.344,1.283-1.38,1.22-.353,1.846,1.348.783,2.023,0,.449-1.283,1.219-.782.738.778,1.124,1.312a2.109,2.109,0,0,0,1.8.6,2.274,2.274,0,0,1,1.219.407s-.256.782.931,2.472,1.092.532,2.184,2.129.995.657.738,2.5-.642,1.847-1.092,3.443-1.445,1.44.033,3.286.9,1.784.867,3.067a31,31,0,0,0,.193,5.2c.256,1.22.707.657,1.059,1.784s.514,1.22-.1,2.129a3,3,0,0,0-.77,3.067c.321,1.973.225,2.849-.707,3.6s0,1.5-1.477,1.972a12.4,12.4,0,0,1-5.041.219c-.145-.013-.269-.017-.4-.024l-2.681-7.291a1.769,1.769,0,0,1,.194-.2c.674-.594.609-.907,1.412-.657s.033,1.753,1.317.751.867-.908,1.606-1.722.995-.876.706-2.222.675-2.254-.9-2.41a5.882,5.882,0,0,0-2.472.188s-.578-.188-1.124.657-.449,1.221-1,1.6-.16.751-1.059.438-1.573-.125-1.188-.971a3.493,3.493,0,0,1,1.06-1.6c.77-.782,1.124-.344.963-1.252a16.294,16.294,0,0,0-.386-1.659s-.113-1.127-.714-1.377-1.6.063-.762-.782a3.14,3.14,0,0,0,1.091-2.286c-.1-.469-.064-1.064-1.219-1.033s-1.028.032-1.734.438.161,1.064-1.317.469a6.369,6.369,0,0,1-3.5-4.163c-.8-2.285.289-2.628-1.83-3.818s-2.087-.876-3.339-2.034.417-1.252-1.927-1.878-2.632-.469-3.114-1.659a12.789,12.789,0,0,1-.867-2.035c-.161-.751-1.445-.782-2.28-1.972s.385-.156-1.285-1.909-.707-2.066-2.055-2.066-1.733.063-1.99,1.44a4.406,4.406,0,0,1-1.252,2.848c-.8.751-1.573.939-1.8,1.628a5.668,5.668,0,0,0-.064,2.191c.064.532.064,1.721.9,2.19a9.818,9.818,0,0,1,2.537,2.066c.835.939,1.606,1.127,2.183,2.347a6.956,6.956,0,0,1,.289,3.474,3.759,3.759,0,0,0,1.059,2.6,26.21,26.21,0,0,1,3.757,4.256,19.582,19.582,0,0,1,2.408,4.507s-1.284-.469-.256,1.66,1.316,2.159,1.733,3.6-.064,1.408-.064,3.067a20.371,20.371,0,0,1-.289,3.224c-.161,1.534.642,1.346-.8,2.223s-.931,1.377-2.569,1.6a9.115,9.115,0,0,1-2.729,0,11.134,11.134,0,0,0-1.285,1.377c-.514.689-.77,1.033-2.055,3.036s-.642,2.159-2.471,3.787-1.8,2.222-3.854,4.6-1.831,1.659-2.055,3.38.353,2.536-1.252,2.755-2.7.689-3.982,0-.963-.125-1.6-2.034-1-2.785-1.959-3.631-.45-1.659-1.99-1.941-1.606-.688-2.793-.093-1.8.533-1.638,2.066,0,2,.674,2.848,1.638.376,1.606,2.129a9.364,9.364,0,0,1-.353,2.6c-.035-.017-.162.083-.547.587-.835,1.1-.353.845-2.441,1.315s-1.959-.406-2.6,1.158a17.11,17.11,0,0,0-.8,2.942,26.441,26.441,0,0,1-1.188,2.817c-.321,1.033.128,2.378-.867,3.63s-2.087,1.252-1.541,2.316,1.8,1.127,2.665,2.316.1,1.471,1.157,2.222,3.306,2.692,5.65,4.381a33.442,33.442,0,0,1,3.854,3.411,3.264,3.264,0,0,1,1.38,3.005c.032,1.22-.738.939-1.831,1.44s-1.091,1.033-1.156,2.159-1.059,3.1-.128,4.131,1.091,1.753,1.508.533-.192-2.5.675-2.535,3.4,2.472,4.88,3.975,2.216,2.5,1.766,4.664-.9,2.472.418,3.036,1.349,1.44,1.958.845.578-.594.289-1.158-.61-1.377.032-1.909-.1-1.221,1.831-.783,2.28-.125,3.114,1a3.722,3.722,0,0,1,.836,2s-1.317.689-.129,1.44a11.891,11.891,0,0,1,3.533,3.474c.642,1.189.514,1.1.1,2.315s-.9.563-1.028,2.286-.354,1.408-.193,2.911.449,1.659.128,1.909-1.606.313-1.669.782-.61,1.1.032,1.565,1.124-.814,1.285.689-.354,2.159-.129,3.286.289,1.659-.225,2.347-1.348,1.034-1.862.626a2.7,2.7,0,0,1-.963-1.377c-.321-.75.128-.907-.964-1.033s-1.477-.97-1.508.157.385,1.44-.032,2.159a5.415,5.415,0,0,0-.643,1.784,4.176,4.176,0,0,0,.707,2.755,20.039,20.039,0,0,0,1.83,2.285c1.349,1.6,0,2,1.734,2.159s1.766.063,2.5.157,1.252-.6,1.124.563.256,2,.032,3.725.514,2.065.771,3.6.288,1.283.449,2.566.032,0,1.638,2.16,2.311,1.564,2.537,3.255.546,2.442-.354,3.756-1.959.751-2.6,2,.353.97-.578,2.5-1.38,2.911-3.146,3.193-1.734-.971-3.533-.157-1.156,1.347-3.018,1.722-2.28-.25-2.729.594-1.028.469-.417,1.69.577,1.941.417,2.253-.482.376.193,1,.9,1.346,1.829.658.739-1.534,1.445-1.159a4.414,4.414,0,0,1,1.285,1.221s-1.317.313-.417.72,1.8.376,2.087.563,1.252,1.816.161,2.159-1.734.125-1.542.939a10.371,10.371,0,0,1,.514,2.6c-.1.5-.032.783.739,1.033a3.5,3.5,0,0,1,1.99.97c.707.751,1.156,1.5.931,1.909s-1.22.563-1.22.563-.193-1.377-1.059-.688-.353,1.689-.321,3.255-1.252,2.1-.1,2.347,1.124-.156,1.862,0,.77,1.064,1.349.22.738-.814,1.22-.751,1.091,0,1.252.344a.967.967,0,0,1-.065,1.127,8.759,8.759,0,0,1-.931.657,5.314,5.314,0,0,0-1.508,0,11.113,11.113,0,0,0-1.7.407c-.867.25-.738.125-.931.532s.45,2.724,1.092,4.538.642,1.565.481,3.005.257,4.444.193,6.51-.963,1.816.321,2.88,1.478.876,2.313,1.877.065,1.377,1.38,1.816a4.742,4.742,0,0,1,2.569,1.847c.289.562.514.782.482,1.408s.546.907-.161,1.19-1.219,1.032-1.638.093-.577-.97-.577-1.346.064-.594-.707-.783-1.99-.156-2.151.376-.578.6-.321,1.064.8.876.9,1.347.931.532.385,2.128-.514,1.252-.835,2.347-.321,1.252.033,1.941.674.814.353,1.377-.482-.156-.674.658-.289,1.314.192,1.5,1.189-.281.836.345-1.253,1.252-1.381,1.5-.161.219-.032.751a2.048,2.048,0,0,0,.449,1.033c.289.376,1.477-.281,1.766.907s1.413,1.753.1,1.878a4.944,4.944,0,0,0-1.959.5c-.835.282-2.6.751-3.4,1.659s-.417,1.252-1.38,2.129-1.541.156-1.606,1.471.417,1.972-.481,2.347-.61.876-1.188.376a3.146,3.146,0,0,1-.8-1.032s-.707-1.1-1.284-.563a8.637,8.637,0,0,0-1.22,1.846c-.289.438-.386.345-.032,1.377a15.228,15.228,0,0,1,.321,4.32c-.032,1.408-1.541,1.439.1,2.566s2.215,1.19,2.6,2.066.546,1.346.9,1.315,1.028-1.346,1.638-.782-.226.188-.226,1.408-.674,1.6.45,1.878,1.188-.063,1.83.281.546,1.69.8,2.191.321,1.628,1.028,1.565.707-.313,1.189-.846,1.028-.626.8-1.471-.61-.876-.321-1.252a6.471,6.471,0,0,1,.93-.939,4.7,4.7,0,0,0,.964-1.1c.61-.814.417-1,.9-1.565s-.354-1.377,1.219-1.158,1.7.125,2.151.657.065.845.835,1.159,1.8.249,1.445.75-1.573.846-1.829,1.1-.482.281-.386.939.386,1.1.225,1.408.257.751-.578.751-2.215-.125-2.632.751-1.381.939-1.669,1.752,1.156.971,1.7,1.19.675-.063.771,1-.964,1.565.707,1.565,3.114-.063,3.114-.063,1.541.125,2.408.188a2.05,2.05,0,0,0,1.7-.594c.449-.376,1.124.125.738-.689s-.964-1-.835-1.722.1-1,.931-1.127.546-.312,1.412-.156.193-.5,1.991,0,2.022,0,2.183.814.449,1.127.321,1.5-1.317.782-1.317.782-.61-.594-.706-.031a11.264,11.264,0,0,0-.418,1.659c0,.533-1.028-.032-.032,1.69s2.5,3.161,1.862,4.006.257,1.19-1.7.939-2.409,1.976-2.923.08-.353-2.146.289-2.177.8-.345.8-.345.482-.813-.61-1.314-1.285-1.284-1.927-.846a1.971,1.971,0,0,0-.642,1.753c0,.5.16.845-.482,1.377s-1.156.657-1.187,1.6-.514,2.159.128,2.472a16.9,16.9,0,0,0,2.408.6c.771.219,1.413.125,1.253.5a1.911,1.911,0,0,1-1.349,1.189,9.882,9.882,0,0,1-1.8.156c-.193,0,1.541.782-1.156,2.1s-4.11.751-5.01,2.254-2.119,3.255-2.119,3.255-1.541.125-1.734,1.189a2.161,2.161,0,0,0,.449,2.026c.386.478,1.862-.273.9,1.229a8.06,8.06,0,0,1-2.12,2.254,4.009,4.009,0,0,0-2.7,1.627c-1.091,1.5-2.632,1.628-3.274,1.941a5.084,5.084,0,0,0-1.606,1.127,17.839,17.839,0,0,1-2.055,1.941c-.449.188-1.349,1.377-.514,2.129s1.606-.939,2.376-.438a3.182,3.182,0,0,1,.963,2.378c0,.5-3.018,1.127-3.018,1.127l-2.311.939a2.875,2.875,0,0,1-.9,1.565c-.77.689-1.22,1.315-1.862,1.816s-.514.939-2.12,1.628a4.968,4.968,0,0,0-2.311,1.439c-.964.876-1.734,3.568-1.734,3.568h1.156s1.092-1.189,1.862-.751a2.764,2.764,0,0,1,1.092,1.252l-.707,1.628s-1.477-.313-1.22.626-1.99-.376-2.5.688-1.092,1-.386,2.129.964,1.315.835,2.129a2.067,2.067,0,0,1-1.091,1.878,5.189,5.189,0,0,1-2.826.5c-.449,0-1.028.5-.642,1.065s1.734.688,2.12,1.189,1.349,1.252.514,1.565a8.65,8.65,0,0,1-2.12.376s-1.284-1.44-2.311-1.44a1.75,1.75,0,0,0-1.478.751s1.478,2.88,1.285,3.631a3.741,3.741,0,0,1-1.092,1.5s-1.734-.813-1.734-2.128,3.019-3.193-.321-2.379-3.339,1.252-3.66,1.941a4.3,4.3,0,0,0-.321,2.254c.064.877,1.091,1.877,0,2.065s-1.541.814-2.12-.438.386-1.816-.578-2.19-1.156-.939-1.6.125c-.3.71.227,1.921.153,3.021a1.967,1.967,0,0,1-.731,1.486c-1.541,1.252-1.733,1.753-3.018,2.316s-2.762.188-2.7-1,.449-1.608,0-3-.514-2.326-2.376-1.826-1.606.877-2.89,1.252-2.12-.938-1.991.814.938,1.252-.013,2.692-1.657,2.066-2.17,2.129.257-1.315-1.156-1.377-1.477-.313-2.311,1a5.745,5.745,0,0,0-.771,2.941s2.055.438.835,1.565-1.22,2.191-1.541,0,1.028-2.411-.449-2.989-2.762.3-2.311-.7,1.54-1.627.449-2.065a3.384,3.384,0,0,0-1.734-.313s-1.284,4.068-3.725,4.82-3.66-.5-4.5.814-.963,1.44-.835,2.629,1.22,1.878-.256,2.691-1.285.877-1.669,1.252-1.541-1.565-.707,1.878,1.22,2.129,1.926,4.069-1.219,1.188.835,2.378,1.8,2.943,1.8,4.069-.065,5.133-1.669,5.508-3.083-1.315-4.689-.751-3.4.313-2.311,1.628.642,1.565,1.927,1.69,1.541-1.189,2.5.188,1.99,2,1.734,3.067-1.991.689-.707,1.816.577.689,2.183.939,1.862.814,1.862,1.565.128,4.068-1.477,5.32-1.8,2.442-3.147.689-1.927-2.629-3.211-1.941-.642,1.628-2.376,1.252-.128-.063-2.954-1.252-.706-1.5-3.853-1.064-3.211,1.44-4.624,2.817-2.7,3.569-5.009,5.446-2.954.626-2.954,2.88-1.606,2.5,1.669,4.757.257,2.129,3.789,2.066,3.468-.689,3.853.5a36.624,36.624,0,0,1,.9,3.631c.193.938.707,1.19,1.606,1.877s2.311.313,3.981,2.379,1.092,2.629,3.4,4.319,1.8.626,3.083,1.628,4.11,4.758,5.844,5.008,3.6-.376,4.174.063.771,2.128,2.826,3.818,2.376.5,3.6,2.63,2.7,1.69,3.982,1.69,2.569-.313,2.954.626,7.642,6.134,10.4,8.263,1.926,3.63,5.522,4.444a40.051,40.051,0,0,0,5.844,1.189,6.216,6.216,0,0,0,2.954-.689,9.378,9.378,0,0,1,7.321-2.129c.9,0,1.669-1.252,3.083-.313s4.238.188,2.569,1.628-1.157,1.941-1.991,2.88a6.624,6.624,0,0,0-1.156,2.691l2.248,2.316s.256,3.631,4.559,3.443,6.358-.939,6.551.313,1.156,1.815.192,2.566a14.675,14.675,0,0,1-2.5,1.44s-1.22.188-.256,1.377,1.669,1.064,2.119,2a20.159,20.159,0,0,1,.835,2.128s-.835.313-.514,2.066,1.156,2.442,1.669,2.629a21.6,21.6,0,0,0,3.212.188l2.89-1.315s2.44.313,3.018,1.189.256,1.315,1.541,1.44a12.667,12.667,0,0,0,3.083-.25s2.119-.5,2.89-.689,1.669-.939,2.7-.438l.822.4.976.476,1.413,1.314a13.486,13.486,0,0,1,4.88,1.189c1.991,1.064,1.413,1.753,3.533,3.005s1.99.25,3.788-.125,2.505-.376,3.854.438,1.22,1.5,1.99.814a1.294,1.294,0,0,0-.065-2.129c-.309-.192-.709-.4-.961-.585l8.739,1.981c.2.545-.621,1.025,1.149,1.547a3,3,0,0,0,3.062-.593l1.795-2.5,3.688,1.594,1.091-1.2-.728-5.529,3.2-3.059,2.533.516,3.35-1.352,2.34,1.747,6.136.5,2.36,2.37,3.026.744-.114,1.131,1.973-.227,2.3,3.065-.41,2.647,1.093,2.227,1.7,1.332,2,.716,2.777.53,1.382,3.514c1.066.521,4.518,2.218,6.238,2.049l7.354-1.56,3.609,3.567c.3.108,3.156,1.222,3.331,1.233l1.5.339a12.449,12.449,0,0,1,1.169.723c2.569,1.753,2.762,1.377,4.367,2s2.44.751,3.725,1.377,1.284,1.628,2.953.25a10.261,10.261,0,0,0,1.331-1.285l2.125-2.318,3.157,1.1,1.73,1.243,2.053-.268,2.967,2.966a9.1,9.1,0,0,0,1.215,1.375c.77.814,1.091-.751,2.632,1.565s2.762.438,3.725,1.753,1.22,2.128,2.505,1.565,1.8-2.629,2.953-3.005,1.22.5,2.826,1.753,1.349,2.566,1.413,3.943-.836,1.5.706,3.005,2.055,1.815,2.89,1.815,1.349.376,1.8,0,1.22-.751,1.8,0,1.349,1.5,1.669,1.94,1.285,1.565,1.285,1.565a2.913,2.913,0,0,0,1.156,2.442c1.284.939.771.376,2.825,1.19s2.248.626,3.275,1.877,1.028,1.315,1.8,2.129,1.733.689,1.412,1.5a2.311,2.311,0,0,0,0,2.066c.321.5,1.285.876,1.285,1.126s-.9.5-.45,1.315a9.915,9.915,0,0,0,1.991,2l-.9,1-1.413.689s-.577.438-.064,1.315a5.282,5.282,0,0,0,1.477,1.5,3.557,3.557,0,0,1,2.825,2.129c.771,1.941.45,2,1.67,2.066s2.5-.563,1.734.563.192,1.816-1.285,1.69-1.541-1.44-2.312-.626a3.1,3.1,0,0,0-.707,2.065,12.087,12.087,0,0,0,1.6,1.628c1.028.876,1.541,1.377,1.734,2.129a8.2,8.2,0,0,1,.514,2c-.065.438-.321,1.315,1.092,1.376s1.028-.625,3.146-.124,2.762.563,3.468,1.19,1.541,1.627,2.376,1.564,1.091-.188,1.284-1.064-.9-1.752.193-1.94,1.606-.876,1.991.063a5.983,5.983,0,0,1,.064,2.628,10.093,10.093,0,0,0-.321,1.69c0,.5.514-.876,2.5,0s-.449,1.69,1.478,1.941,2.247-.626,2.89-.563,1.412-.438,1.541,1,.449,2,.449,2.879-2.7.751.835,2.379,3.982,2.191,4.5,1.69a4.92,4.92,0,0,0,.707-2.129s.642-1,1.99-.125,1.6.939,1.862,1.315.642,1.293,2.569,1.116a3.447,3.447,0,0,1,3.853,2.578c.707,1.877-1.091,1.5.514,3s2.248.877,2.441,2.066a25.849,25.849,0,0,0,.642,2.692,3.905,3.905,0,0,0,.964,1.439c.577.438,1.8,1.315,1.8,1.315s.707-.063.835,1.377.514,2.692.578,3.318.577.939-.193,1.877-.964.188-1.669,1.377a16.12,16.12,0,0,0-1.092,3.068c-.386.939-2.183,1.232-.514,2.681s2.248.386,4.175,2.514,1.926,2.755,3.788,2.316,1.8-.376,3.018-.063,2.441.876,3.34.125.386-.939,1.6-1.127,1.8.877,1.863-.438.256-1.941.963-1.5,2.055.313,2.119,1.19-.963,1.435-.256,2.252,1.669.816,1.734,1.755.128,2.253.128,2.253,3.917-1.752,3.468,1.5-.322,2.191-1.028,3.882-1.478.751-.45,2.19,2.055,2.629,2.055,2.629,1.606,1.252,1.478,2.066a5.94,5.94,0,0,1-.771,1.815s-2.762-.375-2.825.314a5.058,5.058,0,0,0,.192,1.564,2.127,2.127,0,0,1-.513,1.753c-.707.689-1.927.438-2.376.563s-.515.125-.515.563-.192,1.377,1.67,3.318.963,1.126,1.733,2.628,1.285,1.816,1.992,2.129,0,1.69,1.734.313a3.579,3.579,0,0,1,4.046-.5c1.091.376.963-.063,1.541.25a9.22,9.22,0,0,1,1.669,1.816s-.963,1.689-.386,2.253,1.67.563,1.67,1.19-1.22,1.5.192,1.628,2.7-.877,3.854-1.377a23.1,23.1,0,0,0,2.7-1.5s-.45-2.5,1.028-1.188,2.376.876,2.376.876.9-1.44,1.22-1.5,1.477,0,1.541.5.256,1.5.256,1.5-1.092,1.439.257,1.188,1.99-.563,2.055-1.188.193,0,.321-1.565a5.53,5.53,0,0,1,.321-1.878l1.284-.563s1.927,1.377,3.6,2.5,2.312,1.189,4.11.376a9.387,9.387,0,0,1,3.083-.876,4.416,4.416,0,0,1,2.055.814c.642.625-1.991-.313,1.284,1.439s3.533,1.878,4.688,1.315a12.033,12.033,0,0,1,2.953-.814,5.685,5.685,0,0,0,2.505-.438,3.119,3.119,0,0,0,1.091-1.439s-.064-1.19.835-.125-.77,2.315,1.029,1.752,2.247.313,2.183-1.627,1.8-4.257,3.467-5.008,1.285-.5,2.376-.063,1.67,1.69,2.954,1.127,2.12-.188,2.441-2,.77-2,2.054-2.128,2.505,1.5,2.761-1.127-.321-2.88.45-4.007.577-.689,2.183-1.689,1.6-.5,2.7-1.753,1.413-1.628,1.734-1.628-.45.563.193,1.753-1.22,1.753.064,2.879.706,1.753,1.927,1.19.449-1.377,1.927-1.69,1.156-1.126,1.862-.376.642.125,1.091,1.19.835,1.377,1.927,1.315,2.12-.5,3.276.689.642,1.878,1.028,4.131.835,2.692,1.6,2.379a2.232,2.232,0,0,0,1.22-2.629c-.386-1.189-1.22-2.065.385-2.253s1.99.438,2.5,1.565,1.156,2.315,1.028,3.254-1.413,1.5-.065,2.317,1.413,1.941,2.762.939a13.442,13.442,0,0,0,2.569-2.316c.771-.876.129-1.628,1.606-1.252a23.139,23.139,0,0,1,2.441.626c.642.25-.322.376,1.99.751s3.532.626,3.917-.939-.257-1.69.77-3.38,1.671-2.379,3.275-1.753,1.027,1.127,2.313,1.377,1.733-.188,1.8-.689a9.414,9.414,0,0,0-.386-2.066c-.193-1.064-1.477-2,.065-2.5s2.569-.5,3.018.5-.449,2.129.771,2.254a3.426,3.426,0,0,0,2.312-.876s-.065-1.5,1.541-.376,1.927,1.127,2.119,1.878-.128,1.064.707,1.5a14.905,14.905,0,0,0,2.762.689c.578.188-.128-.689,1.092.313s-.193.25,1.99,1.5a19.556,19.556,0,0,0,3.4,1.565c1.8.814.257,1.628.9,2.254s.835.063,1.541,2.817,1.669,3.442,2.376,3.129,1.027-.563,1.156-1.064a24.051,24.051,0,0,0-.128-2.628c0-1.252-.257-1.5.707-1.5s1.8.25,1.926,1.19-.642,2.065.771,2.253,1.8-.5,2.569-.25,1.349.5,1.349,1.315-.514.939.385,1.565,1.8-.291,2.505-.427.577-.762,1.991-.825,2.441-.814,2.761.063a2.75,2.75,0,0,1-.257,1.941s-2.248.438-2.632.939-1.349,1.064-.578,1.878a5.664,5.664,0,0,0,2.569,1.126s1.028-1.126,1.67-1.815.321-1.127,1.156-1.127,1.862-.751,1.862-.125a25.957,25.957,0,0,0,.45,3.442,2.629,2.629,0,0,0,1.8,1.878s1.927.063,2.441.814-1.349,1.753.707,2.5,2.311.376,2.632-.563-.449-1.628,1.22-1.628,1.541,1.565,1.541,4.32-2.7,5.634-4.366,8.262-33.865,52.166-33.865,52.166.085.334,2.312,1.085.686,2.837,2.569,2.587,1.37-1.251,3.255-1.084,2.311.458,2.654,1.105.085,1.816,1.712,1.732,1.97.668,2.74-.334,1.969-2.5,1.969-2.5a2.584,2.584,0,0,1,1.541-1.753,16.99,16.99,0,0,1,3.682-.918c1.113-.167,1.113-.668,3.168.334s2.4.417,3.254,2.087,1.97,2.054,2.055,3.28a6.076,6.076,0,0,0,2.313,3.731c1.369,1.251,2.4,2.336,2.4,3.338a3.326,3.326,0,0,0,.857,2.421,16.16,16.16,0,0,1,2.483,1.67c1.455,1.252,3,2.086,3.51,3.171s1.028,2.087,1.114,2.421-.343,1,.6.918,3.168-12.019,3.168-12.019L1224.7,880.269s2.44-2.691,2.569-3.756,0,.376-1.092-2.628-2.183-1.315-1.477-4.569a22.647,22.647,0,0,1,1.349-4.57l.514-2.442-1.027-1.752a3.423,3.423,0,0,1-.257-1.377,3.922,3.922,0,0,0-.577-1.815s-4.752-1.878-5.009-3.944.514-2.691-.707-4.444a10.324,10.324,0,0,0-3.339-3.443c-1.413-.876-2.376-1.564-2.441-3.067a9.477,9.477,0,0,1,.578-3.193l2.248-1.69.128-3.255a29.9,29.9,0,0,1-3.339-1.878c0-.188,1.027-2.254,1.027-2.5s2.184-.064-.128-1.565-3.725-2.316-3.725-2.316a38.039,38.039,0,0,0-3.339-2.567c-.9-.5-.257-.876-2.505-1.315s-1.926-.875-3.018-1.689a5.3,5.3,0,0,0-2.376-.939l-2.311-.25-1.541-2a2.958,2.958,0,0,0-1.348-2.567c-1.413-.751-1.927-.313-2.7-1.5s-1.156-2-1.028-2.816.707-1.19-.128-1.753a8.62,8.62,0,0,1-1.284-.939c-.257-.25,0-37.559,0-37.559a19.441,19.441,0,0,0,3.083-1.189c.128-.25.256-1.252.963-1.315a4.818,4.818,0,0,1,1.927.188c.577.188,1.6-.626,1.6-.626s-.128-.688,1.22-.751a34.669,34.669,0,0,1,3.532-.063c1.028.063,1.8.814,3.147.25s.77.313,1.669-.814a6.3,6.3,0,0,0,1.478-3.254c.064-.939-.45-1.753.706-1.878s2.441-.063,2.89.751-.064,1.628,1.285,2.191,1.284,1.127,2.312.188a6.329,6.329,0,0,0,1.67-2.692c.514-1.127.129-1.69,1.092-2.191s1.927-1.5,2.89-1.439.449-.563,1.67.25a25.179,25.179,0,0,1,3.019,2.065c1.926,1.5,2.649.814,2.738,2s-.73,1.628,0,2.755,1.243,2,1.822,1.5a5.247,5.247,0,0,0,.9-2.19s-.321-1.315.771-1.377,1.092-1,1.541.188.707.563.642,1.753.386,2,.9,1.94,2.632-.814,3.083-1.5-.385-1.5.77-2.129,1.349-1.315,2.055-.626.578,1.252,1.156,1.315.771-.313,1.092-.689.385-.939-.386-1.753-1.541-1.69-2.248-2.442-1.6-1.5-.963-2a1.653,1.653,0,0,1,1.348-.313l.449.188a26.5,26.5,0,0,1-1.219-2.629c0-.25-.771-2.379.449-2.5s1.99-.063,1.99-.876-.192.125-1.862-1.5-2.953-1.565-1.477-2.129,2.248-.563,1.862-1.252-1.092-.563-1.99-.939a1.9,1.9,0,0,1-1.028-1.44s0-3-1.413-3.5-1.541,1-2.89-.125-.707-1.753-1.99-1.878-1.478-.876-2.505.25-.128,1.69-1.733,2-1.862,1-2.441.188-.385-1.753-1.413-1.878a7.179,7.179,0,0,0-2.376-.188,3.475,3.475,0,0,0-1.926.563c-.707.376-.257,1.127-1.992.376s-.9-.814-2.055-1.377a3.663,3.663,0,0,0-2.569-.5c-.963.125.064.5-1.541.376s-1.6,0-2.312-.376-.642-1.19-1.477-.689a12.469,12.469,0,0,0-1.606,1.127c-.835.626-.9,1.315-1.8,1.44a4.032,4.032,0,0,1-1.991-.438l-.577-.939V702.742s3.361-.751,3.96-.751,1.627-.918,1.627-.918a13.765,13.765,0,0,1,2.74-.083,4.763,4.763,0,0,0,1.541.5,3.542,3.542,0,0,0,2.74-.835c1.2-1,2.055-2.671,3-2.838s2.4-.5,2.825.167-.086,1.5,1.285,1.669,1.8-1.252,3.168-.668a8,8,0,0,1,3.083,1.92,4.963,4.963,0,0,0,2.055,1.251h69.869l.686-1.084a4.543,4.543,0,0,1-1.028-.918c-.172-.334.086-1.586-.514-1.669s-1.712-.167-1.712-.167-.343,1.169-.771,1.169a5.6,5.6,0,0,1-1.627-.835s.085-.835.428-1.085.685-.083.685-.668.257-1.085-.428-1.085-1.541.083-1.8.083-.428.167-.428-.584-.942-1.418,0-1.669a17.643,17.643,0,0,0,2.226-.834l.428-1.085a9.822,9.822,0,0,1-.171-1.92,3.291,3.291,0,0,1,1.369-2,5.192,5.192,0,0,1,1.97-.584c.6,0,1.8-.167,1.97.5s.085.751.686,1a13.662,13.662,0,0,0,1.969.5,2.3,2.3,0,0,1,1.456.334c.428.417,1.541.835,1.969,2.17a16.554,16.554,0,0,0,1.113,3.005c.428.75.256,1.084,2.312,1.919s2.912,1.252,3.511,1.92,1.028.668,1.456,1.085,2.054.751,2.226.5a6.923,6.923,0,0,1,.942-.835l-.771-4.758s.343-2.587.771-2.837a15.984,15.984,0,0,1,3.511-1.336h2.911s1.113-1,1.712-1.419a8.565,8.565,0,0,1,2.4-.835,7.73,7.73,0,0,0,2.4-1.169l2.139-1.669s1.285-1.586,2.056-2.5a19.4,19.4,0,0,1,2.4-2.5,19.309,19.309,0,0,0,2.825-3.839l3.083-.668a13.188,13.188,0,0,1,2.741.835,9.06,9.06,0,0,1,2.055,1.5c.171.334.685.25.685,2.253s.256,1.753,0,3.089-.857,3.922-.857,3.922a7.74,7.74,0,0,0,.971,2.671,5.65,5.65,0,0,1,1.255,3.172,7.25,7.25,0,0,0,.257,2.086,28.317,28.317,0,0,0,2.312,1.753c.6.334,2.826,1.336,3.768,1.92s1.8.5,2.14,1.669a19.081,19.081,0,0,1,.514,2.67s2.226,7.846,2.4,8.1a22.853,22.853,0,0,1,2.227,3.923,12.029,12.029,0,0,1,1.2,3.755s-.857,2.755-1.2,3.756a25.271,25.271,0,0,0-.771,4.173,10.51,10.51,0,0,0,.257,2.588c.085.5.685,2.588.941,3.339a9.429,9.429,0,0,0,1.285,2L1376.6,731.2v-.835s-1.284-.334-1.369-.668"
							transform="translate(-4.113 -0.533)"
						/>
						<path
							className="ab-item-1821"
							d="M1375.231,729.7a5.438,5.438,0,0,1,.342-2.588c.343-.334,1.37-.584,1.028-1.668a15.484,15.484,0,0,0-.685-2.588c-.343-.5-2.311-1.252-2.825-1.92a4.517,4.517,0,0,1-1.027-2.671c.085-.834.256-2.336.256-2.921s-7.106-16.943-7.106-16.943.086-2.671,0-3.506-.257-1.835-.257-1.835a20.634,20.634,0,0,0-1.883-3.005,23.1,23.1,0,0,1-1.97-1.753c-.172-.334,0-9.1,0-9.1a18.53,18.53,0,0,1-2.654-.25,3.737,3.737,0,0,1-2.741-2.336,32.089,32.089,0,0,1-1.369-5.008c-.085-1-1.37-2.169-.256-3a22.306,22.306,0,0,0,2.054-1.669c.343-.334.257-2.17.257-2.17s-6.679-3.672-6.679-4.089V658a21.8,21.8,0,0,0-1.627-1.836c-.343-.25-9.932-8.931-9.932-8.931h-3a47.793,47.793,0,0,1-1.369-4.674,6.254,6.254,0,0,0-1.8-2.755c-.428-.167-2.226-1.084-3.168-.751s-1.8,1.252-2.141.918-1.541-2-1.541-2-4.967-.584-5.223-.334-.171,2-1.285,2.169-2.226.584-2.482-.167,1.113-2.169,1.113-2.169l25.174-23.2s1.627-.334,1.884-.334.855-1.336.855-1.669V610.6l4.2-3.756a23.425,23.425,0,0,0,.172-2.67c-.086-.25-2.227-3.172-2.227-3.172l-3.6-.417-.257-.835s.257-1.919.257-2.169-2.141-4.257-2.141-4.591-.941-5.258-1.113-5.592a17.7,17.7,0,0,0-1.627-3.089,20.267,20.267,0,0,0-3.682.751h-2.312l-3.6-5.508s-.428-2.087-.685-3.005-1.97-2.921-2.141-3.421-.514-4.842-.514-4.842l-1.541-4.841-2.911-4.924.514-10.183s-.514-3.339-.771-3.255-6.164-7.178-6.164-7.178,1.2-3.5,1.541-4.089a36.19,36.19,0,0,0,1.54-6.844c-.085-.751-.256-13.188-.256-13.438s1.113-4.173,1.027-4.59a18.345,18.345,0,0,0-.942-3.339c-.428-.835-1.969-2.086-1.284-2.67s1.712-.835,1.883-1.5a17.061,17.061,0,0,0,0-3.005s-1.883-3.338-1.883-3.588a33.742,33.742,0,0,1,1.8-3.089s5.908-2.5,6.936-2.838a28.511,28.511,0,0,0,5.309-3.922c.171-.334,1.113-3.172,1.113-3.172a14.742,14.742,0,0,0-.428-3.171,31.6,31.6,0,0,1-1.884-2.838l-.6-4.59s1.37-.584,1.627-1.085a14.75,14.75,0,0,0,.428-3.255c0-.417-.171-2-.171-2l3.938-4.674,4.2-2.421,2.483-2.837.257-2.588-2.312-2.671s-1.541-4.173-1.541-4.59-.6-4.674-.685-5.174-6.422-3.339-6.422-3.339l-7.536.417s-.856-1.5-1.627-1.5-3.425,0-3.853.417-1.8,2.5-2.826,2.755a11.141,11.141,0,0,0-3.339,1.586c-.428.416-2.654,2.587-2.654,2.587l-2.74-.167a20.877,20.877,0,0,0-3.168-1.586,32.206,32.206,0,0,0-3.854-.082,8.912,8.912,0,0,1-1.627,1.168,20.7,20.7,0,0,0-3.168.167c-.343.167-2.654,2-2.654,2l-6.165.167a23.3,23.3,0,0,0-4.11-1.085c-.685.083-3.424.584-3.424.584s-1.37,1.5-2.055,1.5-3.854-.083-4.281,0-.857.918-1.884,1.419a8.386,8.386,0,0,1-4.538.334c-1.113-.334-5.223-1.586-6.079-2a23.685,23.685,0,0,0-7.45-.835c-1.969.25-2.825-1-5.223-1.169s-6.079-.668-6.336-.083.771,1.586.172,2.588-1.2,1.085-1.97,1.5-.857,1-2.055,2.086a12.948,12.948,0,0,1-2.825,1.836s-2.655-1.169-3.255-2.17-1.712-2.169-2.825-1.835a31.071,31.071,0,0,0-4.11,2.169l-39.559-48.326s-1.284-1.5-2.226-1.5-5.737.167-5.737.167l-2.141,1.919a13.908,13.908,0,0,1-3.083-.334,4.91,4.91,0,0,0-2.74-2c-1.37-.167-5.052-1-5.052-1l-1.627.5-4.967-5.092s-3.339.083-7.106.25-7.963-.334-8.99-.083a16.6,16.6,0,0,0-4.2,1.419c-1.028.668-1.2,2.254-1.8,2.421s-2.911.25-3.254.668-.343,1.169-1.2,1.5a10.523,10.523,0,0,1-3.425.334,20.075,20.075,0,0,1-2.74-2.421,8.037,8.037,0,0,0-2.483-.918c-.6.083-1.113.584-1.541.584s-11.046.167-11.046.167-.514-.918-.857-.918a8.448,8.448,0,0,0-2.054,0c-.257.167-2.227.918-2.227.918l-6.592-.5s-1.456-2.17-1.8-2.17-2.569.584-2.569.584a2.065,2.065,0,0,1-1.37,1.252c-1.027.25-2.483.5-2.483.25a11.8,11.8,0,0,0-1.113-1.836,18.988,18.988,0,0,0-2.74-.417,4.809,4.809,0,0,0-1.628,1.419c-.427.584-.427,1.169-.856,1.252s-2.74.25-3.511.25-7.792.25-7.792.25l-2.4-2.087s-1.627-1.085-1.285-2.421a2.946,2.946,0,0,0-.171-2.169l-4.795-6.094s-.686-6.26-.686-6.594a12.815,12.815,0,0,0-2.654-3.088c-.428-.167-3.339,1.085-3.339,1.085l-8.734.082-.685-1.084.6-2.254-3-2.922.771-3.255a21.055,21.055,0,0,0-.257-2.922,31.916,31.916,0,0,1-1.027-3.839c0-.417.942-8.43.942-8.43l1.113-7.679a19.026,19.026,0,0,1,2.313-2.17c.256,0,1.369,1.336,2.482-.417s-.342-5.341-.342-5.592a19.466,19.466,0,0,1,.6-2.421c.171-.5-.942-2.588-1.113-3.172s-.771-6.093-.771-6.594-.171-3.922-.171-3.922l-16.1-14.272s-5.223-25.206-5.309-25.624a9.888,9.888,0,0,0-1.456-2.838c-.256,0-3.6-1.085-4.11-1.085a7.087,7.087,0,0,0-3.083,1.169,8.431,8.431,0,0,1-2.654,1.085l-1.113-1.836a22.75,22.75,0,0,0,.6-2.838c0-.583-.427-.917-.856-1.335a7.666,7.666,0,0,1-1.541-2.5c-.085-.584-.343-2.087-.343-2.087l-3.424.417s.171,2.17-.857,2.5a14.6,14.6,0,0,1-2.654.584c-.257,0-1.2,1.252-1.627,1.92s-.514,1.084-1.028,1.251-10.018.835-10.018.835l4.623-12.77s7.792-9.014,7.964-9.265,2.911-3.172,2.911-3.172l4.453-10.349,1.883-1.753,1.37-1.753a10.143,10.143,0,0,1-.428-1.585,19.718,19.718,0,0,0-2.141-2.755l1.2-6.427,2.62-3.84v-9.849l4.658-7.428,2.483-1.169,4.538-5.341,2.226-6.927,2.911-4.174,4.11-11.184,4.709-8.346,4.8-3.673s3.938-2,4.281-2.086,4.366-.5,4.366-.5l9.419-14.94,7.022-14.273,14.813-3.171,15.07-4.508,5.308-2.587,2.141-3.589a10.084,10.084,0,0,1-1.2-2.169,6.325,6.325,0,0,1,.77-1.669,6.2,6.2,0,0,1,.771,1c.086.25,0,1.251.342,1.251s1.97-.167,1.97-.167l1.8-2.67s3.6-2.087,4.025-2.17,2.569-.668,2.569-.668l.685-2.67c.086-.335-2.141-3.756-2.141-3.756l-4.709-7.428-.6-4.424-2.4-1.668-3.34.5a13.172,13.172,0,0,0-2.654-1.92c-.685-.167-3.339-.417-3.339-.417l-3.854-2.254L1094.3,84.59l-3.254.517-4.452.5v1.085h1.626c.428,0,.771-1.085,1.628-.543a6.166,6.166,0,0,1,1.284.876c.685.584,1.627.918.428,1.336s-3.253.835-3.34,1.169-1.455,1.085-1.626.751.6-1.669-.857-1.92-1.541.918-1.285,1.5a1.4,1.4,0,0,1-.112,1.5c-.315.417-.4-.166-1.257.668s-1.028,1.169-1.541,1.252-1.627-.835-1.627-.835-1.37-.167-.686-.751.558-2-.192-2.251.364,2-1.521,2.919-3.938.584-4.11,1.5.428,1.669.857,1.669a2.228,2.228,0,0,1,1.884.417,4.5,4.5,0,0,1,1.627,1.836c.256.668,1.028,1.169,1.113,1.5s-1.541,1.169-2.055,1.252-2.141-1.084-2.312-.5,1.2,1.669-.256,2.087a9.967,9.967,0,0,1-2.483.417.893.893,0,0,1-1.113-1V99.213s1.2.25,1.37-.417-.514-1.669-.514-1.669-1.713-1-2.141-.5-.085,1.252-1.2,1.336-.685-.167-2.14-.334-2.4-.584-2.825-.25a1.358,1.358,0,0,1-1.456.334c-.857-.167-1.541-.584-1.8-.167a1.661,1.661,0,0,0-.342,1.252c.085.5,2.825,1.835,2.825,1.835s.686.751.686,1.169v2.5l-.771,3.255-1.884,2.922s-.085,4.508-3.425,6.844-4.538,1.753-7.364,4.341-1.37,2.837-3.853,3.088c-1.751.177-2.976.269-3.556.309-.083.034-.815.172-3.552.609-5.223.835-4.624.584-4.624.584a6.29,6.29,0,0,0-3.682.584,28.892,28.892,0,0,0-2.825,2.087,10.943,10.943,0,0,1-2.912,1.92c-.942.25-2.912.417-3.339.917a14.21,14.21,0,0,0-1.114,1.92,19.007,19.007,0,0,1-2.825,2.337,3,3,0,0,1-1.627,1.669c-1.113.334-3.424,1.335-3.424,1.335s-1.97.918-2.227,1.5a14.521,14.521,0,0,1-1.2,2.254,4.816,4.816,0,0,1-1.8,1.669c-.685.334-1.712.751-1.712.751a7.308,7.308,0,0,0-2.4.835c-.857.584-1.285.668-1.285,1.084s.6,1.169,0,1.5-1.284,3.673-6.079,4.508-2.483,1.169-7.193.835-5.651-.584-6.85,0a22.324,22.324,0,0,1-2.483,1,6.7,6.7,0,0,0-2.826-.5c-1.54.082-5.394.417-5.394.417H968.77a4.865,4.865,0,0,1-2.483-.5c-1.627-.668-.685.083-3.168-1.252s.857-.167-3.767-1.669-4.281-1.753-5.822-1.753a7.7,7.7,0,0,0-2.826.167,12.619,12.619,0,0,1-2.74.334s-.343-2.5-1.97-.5-1.712,3.005-1.712,3.005-2.825,1.085-3,1.753.172,3.421,0,4.507.086,2.17,0,3.588,1.456,1.92,0,3.089.172,3.339-1.54,3.84-3.255,2.253-6.851,2a53.762,53.762,0,0,1-10.617-2c-4.11-1.085-6.08-1.836-8.134-2.421s-2.312-2-4.967-2.254-2.4-.835-4.2-.167a20.619,20.619,0,0,0-3.511,1.92c-1.113.584-1.884.835-2.226,1.753s0,1.252-1.37,1.585-3.424,1.217-3.51,1.611a8.756,8.756,0,0,1,0,2.146,3.6,3.6,0,0,1-1.028,1.92,13.967,13.967,0,0,1-2.654,0,6.23,6.23,0,0,1-1.628,1.836,12.612,12.612,0,0,1-3.253,2.5c-1.8.918-.685.083-3.168.835s-1.883.083-2.825,1.5a23.085,23.085,0,0,0-1.285,2.421c-.6,1-.085,1.336-1.369,1.752s-2.4-.166-3,.334-.343,1.169-2.141,2.588-1.541,2.087-2.74,2.421-1.97-.417-2.483.5-1.884,1.085-.514,1.919,2.483,1.169,1.541,3.255-2.227,2.337-2.569,3.256,0,2.17-1.37,2.67-2.825.668-2.911,1.586-.771,1.676.6,2.09,1.627-.337,2.569-1.088,1.284-1.169,1.883-.751.771.584.771,1.336.171,2.17-.343,2.671a4.666,4.666,0,0,1-1.884,1.169c-.513.082-1.8-.417-1.969-.168s-2.206.918-1.874,1.92,1.36,1.252.418,2.17-3,1-4.11,2.254-1.369,2.087-.342,2.754.941-.083,2.226-1.335,1.284-1.669,2.569-2.337,1.883-2.838,3.168-3.005,1.8.334,1.883,2,1.456,2.17.172,2.755-2.055.25-2.483.584-.343.832-1.028,1.584-2.386-.751-.845,2.254.587,1.837,1.444,2a9.123,9.123,0,0,0,1.349.079l.994,2.209a.833.833,0,0,1-.2.133c-.77.333-1.455,0-2.055.333,0,0-1.209,1.013-1.08,1.92s.963.971,0,1.628-1.413.313-1.83,1.69-1.189,1.346-.45,2.285,1,.814.547,2.034.481,1.69-1.285,3.318-2.408,1.252-3.114,2.191-.675,1.189-.128,1.815,1-.313,1.862,0,1.445.658,1.894,2.286-.353,1.721,1.189,2.378,2.215,1.6,1.8,3.381-.546,1.1-1.413,3.224.289,1.44-1.38,3.254-1.38,1.284-2.793,2.035-1.252-.094-2.087-.094a2.451,2.451,0,0,0-1.99.783c-.9.719-.418,1.659-2.377,1.19s-3.981.031-3.114-1.064.386-.376,1.606-.751,2.119-1.189.867-1.346a14.892,14.892,0,0,0-2.954.064c-.93.031-.674.594-1.059.845s-.642.188-1.573-.032a4.711,4.711,0,0,0-2.762.282c-.963.344-.835.188-1.445,1.283s.225,1.659-1.252,1.533-.835.25-1.99.345-.482-.438-1.766.219-1.445.157-2.344,1.284-.931.657-1.445,2.128.931,1.19-.738,1.941-1.766.5-2.633,1.189-.514.281-1,1.315.129,1.127,0,2.911.065,1.659-.514,2.6-1.091.814-1.894,1.878-1.7.469-2.023,1.5a6.7,6.7,0,0,1-.931,2.034c-.706,1.283-.609.563-.931,1.941s.643,1.408-.867,1.94a11.892,11.892,0,0,1-2.762.689c-.481.063-1.156.157-1.83,1.409s.321,1.1-.932,1.846a5.424,5.424,0,0,1-1.552.617h0a6.589,6.589,0,0,0-.791.414c-1.478.876-1.22.939-2.505,2.254a11.545,11.545,0,0,1-3.339,2.567,18.628,18.628,0,0,0-3.275,2.316c-3.114,2.347-1.38,1.627-4.077,2.879a15.867,15.867,0,0,0-3.886,2.567c-.9.563-1.8.406-3.372.438a27.417,27.417,0,0,0-5.972.751c-.8.376-.706.406-.738,1.533s.8,1-.642,1.628-1.927.281-2.344,1.283-1.38,1.22-.353,1.846,1.348.783,2.023,0,.449-1.283,1.219-.782.738.778,1.124,1.312a2.109,2.109,0,0,0,1.8.6,2.274,2.274,0,0,1,1.219.407s-.256.782.931,2.472,1.092.532,2.184,2.129.995.657.738,2.5-.642,1.847-1.092,3.443-1.445,1.44.033,3.286.9,1.784.867,3.067a31,31,0,0,0,.193,5.2c.256,1.22.707.657,1.059,1.784s.514,1.22-.1,2.129a3,3,0,0,0-.77,3.067c.321,1.973.225,2.849-.707,3.6s0,1.5-1.477,1.972a12.4,12.4,0,0,1-5.041.219c-.145-.013-.269-.017-.4-.024l-2.681-7.291a1.769,1.769,0,0,1,.194-.2c.674-.594.609-.907,1.412-.657s.033,1.753,1.317.751.867-.908,1.606-1.722.995-.876.706-2.222.675-2.254-.9-2.41a5.882,5.882,0,0,0-2.472.188s-.578-.188-1.124.657-.449,1.221-1,1.6-.16.751-1.059.438-1.573-.125-1.188-.971a3.493,3.493,0,0,1,1.06-1.6c.77-.782,1.124-.344.963-1.252a16.294,16.294,0,0,0-.386-1.659s-.113-1.127-.714-1.377-1.6.063-.762-.782a3.14,3.14,0,0,0,1.091-2.286c-.1-.469-.064-1.064-1.219-1.033s-1.028.032-1.734.438.161,1.064-1.317.469a6.369,6.369,0,0,1-3.5-4.163c-.8-2.285.289-2.628-1.83-3.818s-2.087-.876-3.339-2.034.417-1.252-1.927-1.878-2.632-.469-3.114-1.659a12.789,12.789,0,0,1-.867-2.035c-.161-.751-1.445-.782-2.28-1.972s.385-.156-1.285-1.909-.707-2.066-2.055-2.066-1.733.063-1.99,1.44a4.406,4.406,0,0,1-1.252,2.848c-.8.751-1.573.939-1.8,1.628a5.668,5.668,0,0,0-.064,2.191c.064.532.064,1.721.9,2.19a9.818,9.818,0,0,1,2.537,2.066c.835.939,1.606,1.127,2.183,2.347a6.956,6.956,0,0,1,.289,3.474,3.759,3.759,0,0,0,1.059,2.6,26.21,26.21,0,0,1,3.757,4.256,19.582,19.582,0,0,1,2.408,4.507s-1.284-.469-.256,1.66,1.316,2.159,1.733,3.6-.064,1.408-.064,3.067a20.371,20.371,0,0,1-.289,3.224c-.161,1.534.642,1.346-.8,2.223s-.931,1.377-2.569,1.6a9.115,9.115,0,0,1-2.729,0,11.134,11.134,0,0,0-1.285,1.377c-.514.689-.77,1.033-2.055,3.036s-.642,2.159-2.471,3.787-1.8,2.222-3.854,4.6-1.831,1.659-2.055,3.38.353,2.536-1.252,2.755-2.7.689-3.982,0-.963-.125-1.6-2.034-1-2.785-1.959-3.631-.45-1.659-1.99-1.941-1.606-.688-2.793-.093-1.8.533-1.638,2.066,0,2,.674,2.848,1.638.376,1.606,2.129a9.364,9.364,0,0,1-.353,2.6c-.035-.017-.162.083-.547.587-.835,1.1-.353.845-2.441,1.315s-1.959-.406-2.6,1.158a17.11,17.11,0,0,0-.8,2.942,26.441,26.441,0,0,1-1.188,2.817c-.321,1.033.128,2.378-.867,3.63s-2.087,1.252-1.541,2.316,1.8,1.127,2.665,2.316.1,1.471,1.157,2.222,3.306,2.692,5.65,4.381a33.442,33.442,0,0,1,3.854,3.411,3.264,3.264,0,0,1,1.38,3.005c.032,1.22-.738.939-1.831,1.44s-1.091,1.033-1.156,2.159-1.059,3.1-.128,4.131,1.091,1.753,1.508.533-.192-2.5.675-2.535,3.4,2.472,4.88,3.975,2.216,2.5,1.766,4.664-.9,2.472.418,3.036,1.349,1.44,1.958.845.578-.594.289-1.158-.61-1.377.032-1.909-.1-1.221,1.831-.783,2.28-.125,3.114,1a3.722,3.722,0,0,1,.836,2s-1.317.689-.129,1.44a11.891,11.891,0,0,1,3.533,3.474c.642,1.189.514,1.1.1,2.315s-.9.563-1.028,2.286-.354,1.408-.193,2.911.449,1.659.128,1.909-1.606.313-1.669.782-.61,1.1.032,1.565,1.124-.814,1.285.689-.354,2.159-.129,3.286.289,1.659-.225,2.347-1.348,1.034-1.862.626a2.7,2.7,0,0,1-.963-1.377c-.321-.75.128-.907-.964-1.033s-1.477-.97-1.508.157.385,1.44-.032,2.159a5.415,5.415,0,0,0-.643,1.784,4.176,4.176,0,0,0,.707,2.755,20.039,20.039,0,0,0,1.83,2.285c1.349,1.6,0,2,1.734,2.159s1.766.063,2.5.157,1.252-.6,1.124.563.256,2,.032,3.725.514,2.065.771,3.6.288,1.283.449,2.566.032,0,1.638,2.16,2.311,1.564,2.537,3.255.546,2.442-.354,3.756-1.959.751-2.6,2,.353.97-.578,2.5-1.38,2.911-3.146,3.193-1.734-.971-3.533-.157-1.156,1.347-3.018,1.722-2.28-.25-2.729.594-1.028.469-.417,1.69.577,1.941.417,2.253-.482.376.193,1,.9,1.346,1.829.658.739-1.534,1.445-1.159a4.414,4.414,0,0,1,1.285,1.221s-1.317.313-.417.72,1.8.376,2.087.563,1.252,1.816.161,2.159-1.734.125-1.542.939a10.371,10.371,0,0,1,.514,2.6c-.1.5-.032.783.739,1.033a3.5,3.5,0,0,1,1.99.97c.707.751,1.156,1.5.931,1.909s-1.22.563-1.22.563-.193-1.377-1.059-.688-.353,1.689-.321,3.255-1.252,2.1-.1,2.347,1.124-.156,1.862,0,.77,1.064,1.349.22.738-.814,1.22-.751,1.091,0,1.252.344a.967.967,0,0,1-.065,1.127,8.759,8.759,0,0,1-.931.657,5.314,5.314,0,0,0-1.508,0,11.113,11.113,0,0,0-1.7.407c-.867.25-.738.125-.931.532s.45,2.724,1.092,4.538.642,1.565.481,3.005.257,4.444.193,6.51-.963,1.816.321,2.88,1.478.876,2.313,1.877.065,1.377,1.38,1.816a4.742,4.742,0,0,1,2.569,1.847c.289.562.514.782.482,1.408s.546.907-.161,1.19-1.219,1.032-1.638.093-.577-.97-.577-1.346.064-.594-.707-.783-1.99-.156-2.151.376-.578.6-.321,1.064.8.876.9,1.347.931.532.385,2.128-.514,1.252-.835,2.347-.321,1.252.033,1.941.674.814.353,1.377-.482-.156-.674.658-.289,1.314.192,1.5,1.189-.281.836.345-1.253,1.252-1.381,1.5-.161.219-.032.751a2.048,2.048,0,0,0,.449,1.033c.289.376,1.477-.281,1.766.907s1.413,1.753.1,1.878a4.944,4.944,0,0,0-1.959.5c-.835.282-2.6.751-3.4,1.659s-.417,1.252-1.38,2.129-1.541.156-1.606,1.471.417,1.972-.481,2.347-.61.876-1.188.376a3.146,3.146,0,0,1-.8-1.032s-.707-1.1-1.284-.563a8.637,8.637,0,0,0-1.22,1.846c-.289.438-.386.345-.032,1.377a15.228,15.228,0,0,1,.321,4.32c-.032,1.408-1.541,1.439.1,2.566s2.215,1.19,2.6,2.066.546,1.346.9,1.315,1.028-1.346,1.638-.782-.226.188-.226,1.408-.674,1.6.45,1.878,1.188-.063,1.83.281.546,1.69.8,2.191.321,1.628,1.028,1.565.707-.313,1.189-.846,1.028-.626.8-1.471-.61-.876-.321-1.252a6.471,6.471,0,0,1,.93-.939,4.7,4.7,0,0,0,.964-1.1c.61-.814.417-1,.9-1.565s-.354-1.377,1.219-1.158,1.7.125,2.151.657.065.845.835,1.159,1.8.249,1.445.75-1.573.846-1.829,1.1-.482.281-.386.939.386,1.1.225,1.408.257.751-.578.751-2.215-.125-2.632.751-1.381.939-1.669,1.752,1.156.971,1.7,1.19.675-.063.771,1-.964,1.565.707,1.565,3.114-.063,3.114-.063,1.541.125,2.408.188a2.05,2.05,0,0,0,1.7-.594c.449-.376,1.124.125.738-.689s-.964-1-.835-1.722.1-1,.931-1.127.546-.312,1.412-.156.193-.5,1.991,0,2.022,0,2.183.814.449,1.127.321,1.5-1.317.782-1.317.782-.61-.594-.706-.031a11.264,11.264,0,0,0-.418,1.659c0,.533-1.028-.032-.032,1.69s2.5,3.161,1.862,4.006.257,1.19-1.7.939-2.409,1.976-2.923.08-.353-2.146.289-2.177.8-.345.8-.345.482-.813-.61-1.314-1.285-1.284-1.927-.846a1.971,1.971,0,0,0-.642,1.753c0,.5.16.845-.482,1.377s-1.156.657-1.187,1.6-.514,2.159.128,2.472a16.9,16.9,0,0,0,2.408.6c.771.219,1.413.125,1.253.5a1.911,1.911,0,0,1-1.349,1.189,9.882,9.882,0,0,1-1.8.156c-.193,0,1.541.782-1.156,2.1s-4.11.751-5.01,2.254-2.119,3.255-2.119,3.255-1.541.125-1.734,1.189a2.161,2.161,0,0,0,.449,2.026c.386.478,1.862-.273.9,1.229a8.06,8.06,0,0,1-2.12,2.254,4.009,4.009,0,0,0-2.7,1.627c-1.091,1.5-2.632,1.628-3.274,1.941a5.084,5.084,0,0,0-1.606,1.127,17.839,17.839,0,0,1-2.055,1.941c-.449.188-1.349,1.377-.514,2.129s1.606-.939,2.376-.438a3.182,3.182,0,0,1,.963,2.378c0,.5-3.018,1.127-3.018,1.127l-2.311.939a2.875,2.875,0,0,1-.9,1.565c-.77.689-1.22,1.315-1.862,1.816s-.514.939-2.12,1.628a4.968,4.968,0,0,0-2.311,1.439c-.964.876-1.734,3.568-1.734,3.568h1.156s1.092-1.189,1.862-.751a2.764,2.764,0,0,1,1.092,1.252l-.707,1.628s-1.477-.313-1.22.626-1.99-.376-2.5.688-1.092,1-.386,2.129.964,1.315.835,2.129a2.067,2.067,0,0,1-1.091,1.878,5.189,5.189,0,0,1-2.826.5c-.449,0-1.028.5-.642,1.065s1.734.688,2.12,1.189,1.349,1.252.514,1.565a8.65,8.65,0,0,1-2.12.376s-1.284-1.44-2.311-1.44a1.75,1.75,0,0,0-1.478.751s1.478,2.88,1.285,3.631a3.741,3.741,0,0,1-1.092,1.5s-1.734-.813-1.734-2.128,3.019-3.193-.321-2.379-3.339,1.252-3.66,1.941a4.3,4.3,0,0,0-.321,2.254c.064.877,1.091,1.877,0,2.065s-1.541.814-2.12-.438.386-1.816-.578-2.19-1.156-.939-1.6.125c-.3.71.227,1.921.153,3.021a1.967,1.967,0,0,1-.731,1.486c-1.541,1.252-1.733,1.753-3.018,2.316s-2.762.188-2.7-1,.449-1.608,0-3-.514-2.326-2.376-1.826-1.606.877-2.89,1.252-2.12-.938-1.991.814.938,1.252-.013,2.692-1.657,2.066-2.17,2.129.257-1.315-1.156-1.377-1.477-.313-2.311,1a5.745,5.745,0,0,0-.771,2.941s2.055.438.835,1.565-1.22,2.191-1.541,0,1.028-2.411-.449-2.989-2.762.3-2.311-.7,1.54-1.627.449-2.065a3.384,3.384,0,0,0-1.734-.313s-1.284,4.068-3.725,4.82-3.66-.5-4.5.814-.963,1.44-.835,2.629,1.22,1.878-.256,2.691-1.285.877-1.669,1.252-1.541-1.565-.707,1.878,1.22,2.129,1.926,4.069-1.219,1.188.835,2.378,1.8,2.943,1.8,4.069-.065,5.133-1.669,5.508-3.083-1.315-4.689-.751-3.4.313-2.311,1.628.642,1.565,1.927,1.69,1.541-1.189,2.5.188,1.99,2,1.734,3.067-1.991.689-.707,1.816.577.689,2.183.939,1.862.814,1.862,1.565.128,4.068-1.477,5.32-1.8,2.442-3.147.689-1.927-2.629-3.211-1.941-.642,1.628-2.376,1.252-.128-.063-2.954-1.252-.706-1.5-3.853-1.064-3.211,1.44-4.624,2.817-2.7,3.569-5.009,5.446-2.954.626-2.954,2.88-1.606,2.5,1.669,4.757.257,2.129,3.789,2.066,3.468-.689,3.853.5a36.624,36.624,0,0,1,.9,3.631c.193.938.707,1.19,1.606,1.877s2.311.313,3.981,2.379,1.092,2.629,3.4,4.319,1.8.626,3.083,1.628,4.11,4.758,5.844,5.008,3.6-.376,4.174.063.771,2.128,2.826,3.818,2.376.5,3.6,2.63,2.7,1.69,3.982,1.69,2.569-.313,2.954.626,7.642,6.134,10.4,8.263,1.926,3.63,5.522,4.444a40.051,40.051,0,0,0,5.844,1.189,6.216,6.216,0,0,0,2.954-.689,9.378,9.378,0,0,1,7.321-2.129c.9,0,1.669-1.252,3.083-.313s4.238.188,2.569,1.628-1.157,1.941-1.991,2.88a6.624,6.624,0,0,0-1.156,2.691l2.248,2.316s.256,3.631,4.559,3.443,6.358-.939,6.551.313,1.156,1.815.192,2.566a14.675,14.675,0,0,1-2.5,1.44s-1.22.188-.256,1.377,1.669,1.064,2.119,2a20.159,20.159,0,0,1,.835,2.128s-.835.313-.514,2.066,1.156,2.442,1.669,2.629a21.6,21.6,0,0,0,3.212.188l2.89-1.315s2.44.313,3.018,1.189.256,1.315,1.541,1.44a12.667,12.667,0,0,0,3.083-.25s2.119-.5,2.89-.689,1.669-.939,2.7-.438l.822.4.976.476,1.413,1.314a13.486,13.486,0,0,1,4.88,1.189c1.991,1.064,1.413,1.753,3.533,3.005s1.99.25,3.788-.125,2.505-.376,3.854.438,1.22,1.5,1.99.814a1.294,1.294,0,0,0-.065-2.129c-.309-.192-.709-.4-.961-.585l8.739,1.981c.2.545-.621,1.025,1.149,1.547a3,3,0,0,0,3.062-.593l1.795-2.5,3.688,1.594,1.091-1.2-.728-5.529,3.2-3.059,2.533.516,3.35-1.352,2.34,1.747,6.136.5,2.36,2.37,3.026.744-.114,1.131,1.973-.227,2.3,3.065-.41,2.647,1.093,2.227,1.7,1.332,2,.716,2.777.53,1.382,3.514c1.066.521,4.518,2.218,6.238,2.049l7.354-1.56,3.609,3.567c.3.108,3.156,1.222,3.331,1.233l1.5.339a12.449,12.449,0,0,1,1.169.723c2.569,1.753,2.762,1.377,4.367,2s2.44.751,3.725,1.377,1.284,1.628,2.953.25a10.261,10.261,0,0,0,1.331-1.285l2.125-2.318,3.157,1.1,1.73,1.243,2.053-.268,2.967,2.966a9.1,9.1,0,0,0,1.215,1.375c.77.814,1.091-.751,2.632,1.565s2.762.438,3.725,1.753,1.22,2.128,2.505,1.565,1.8-2.629,2.953-3.005,1.22.5,2.826,1.753,1.349,2.566,1.413,3.943-.836,1.5.706,3.005,2.055,1.815,2.89,1.815,1.349.376,1.8,0,1.22-.751,1.8,0,1.349,1.5,1.669,1.94,1.285,1.565,1.285,1.565a2.913,2.913,0,0,0,1.156,2.442c1.284.939.771.376,2.825,1.19s2.248.626,3.275,1.877,1.028,1.315,1.8,2.129,1.733.689,1.412,1.5a2.311,2.311,0,0,0,0,2.066c.321.5,1.285.876,1.285,1.126s-.9.5-.45,1.315a9.915,9.915,0,0,0,1.991,2l-.9,1-1.413.689s-.577.438-.064,1.315a5.282,5.282,0,0,0,1.477,1.5,3.557,3.557,0,0,1,2.825,2.129c.771,1.941.45,2,1.67,2.066s2.5-.563,1.734.563.192,1.816-1.285,1.69-1.541-1.44-2.312-.626a3.1,3.1,0,0,0-.707,2.065,12.087,12.087,0,0,0,1.6,1.628c1.028.876,1.541,1.377,1.734,2.129a8.2,8.2,0,0,1,.514,2c-.065.438-.321,1.315,1.092,1.376s1.028-.625,3.146-.124,2.762.563,3.468,1.19,1.541,1.627,2.376,1.564,1.091-.188,1.284-1.064-.9-1.752.193-1.94,1.606-.876,1.991.063a5.983,5.983,0,0,1,.064,2.628,10.093,10.093,0,0,0-.321,1.69c0,.5.514-.876,2.5,0s-.449,1.69,1.478,1.941,2.247-.626,2.89-.563,1.412-.438,1.541,1,.449,2,.449,2.879-2.7.751.835,2.379,3.982,2.191,4.5,1.69a4.92,4.92,0,0,0,.707-2.129s.642-1,1.99-.125,1.6.939,1.862,1.315.642,1.293,2.569,1.116a3.447,3.447,0,0,1,3.853,2.578c.707,1.877-1.091,1.5.514,3s2.248.877,2.441,2.066a25.849,25.849,0,0,0,.642,2.692,3.905,3.905,0,0,0,.964,1.439c.577.438,1.8,1.315,1.8,1.315s.707-.063.835,1.377.514,2.692.578,3.318.577.939-.193,1.877-.964.188-1.669,1.377a16.12,16.12,0,0,0-1.092,3.068c-.386.939-2.183,1.232-.514,2.681s2.248.386,4.175,2.514,1.926,2.755,3.788,2.316,1.8-.376,3.018-.063,2.441.876,3.34.125.386-.939,1.6-1.127,1.8.877,1.863-.438.256-1.941.963-1.5,2.055.313,2.119,1.19-.963,1.435-.256,2.252,1.669.816,1.734,1.755.128,2.253.128,2.253,3.917-1.752,3.468,1.5-.322,2.191-1.028,3.882-1.478.751-.45,2.19,2.055,2.629,2.055,2.629,1.606,1.252,1.478,2.066a5.94,5.94,0,0,1-.771,1.815s-2.762-.375-2.825.314a5.058,5.058,0,0,0,.192,1.564,2.127,2.127,0,0,1-.513,1.753c-.707.689-1.927.438-2.376.563s-.515.125-.515.563-.192,1.377,1.67,3.318.963,1.126,1.733,2.628,1.285,1.816,1.992,2.129,0,1.69,1.734.313a3.579,3.579,0,0,1,4.046-.5c1.091.376.963-.063,1.541.25a9.22,9.22,0,0,1,1.669,1.816s-.963,1.689-.386,2.253,1.67.563,1.67,1.19-1.22,1.5.192,1.628,2.7-.877,3.854-1.377a23.1,23.1,0,0,0,2.7-1.5s-.45-2.5,1.028-1.188,2.376.876,2.376.876.9-1.44,1.22-1.5,1.477,0,1.541.5.256,1.5.256,1.5-1.092,1.439.257,1.188,1.99-.563,2.055-1.188.193,0,.321-1.565a5.53,5.53,0,0,1,.321-1.878l1.284-.563s1.927,1.377,3.6,2.5,2.312,1.189,4.11.376a9.387,9.387,0,0,1,3.083-.876,4.416,4.416,0,0,1,2.055.814c.642.625-1.991-.313,1.284,1.439s3.533,1.878,4.688,1.315a12.033,12.033,0,0,1,2.953-.814,5.685,5.685,0,0,0,2.505-.438,3.119,3.119,0,0,0,1.091-1.439s-.064-1.19.835-.125-.77,2.315,1.029,1.752,2.247.313,2.183-1.627,1.8-4.257,3.467-5.008,1.285-.5,2.376-.063,1.67,1.69,2.954,1.127,2.12-.188,2.441-2,.77-2,2.054-2.128,2.505,1.5,2.761-1.127-.321-2.88.45-4.007.577-.689,2.183-1.689,1.6-.5,2.7-1.753,1.413-1.628,1.734-1.628-.45.563.193,1.753-1.22,1.753.064,2.879.706,1.753,1.927,1.19.449-1.377,1.927-1.69,1.156-1.126,1.862-.376.642.125,1.091,1.19.835,1.377,1.927,1.315,2.12-.5,3.276.689.642,1.878,1.028,4.131.835,2.692,1.6,2.379a2.232,2.232,0,0,0,1.22-2.629c-.386-1.189-1.22-2.065.385-2.253s1.99.438,2.5,1.565,1.156,2.315,1.028,3.254-1.413,1.5-.065,2.317,1.413,1.941,2.762.939a13.442,13.442,0,0,0,2.569-2.316c.771-.876.129-1.628,1.606-1.252a23.139,23.139,0,0,1,2.441.626c.642.25-.322.376,1.99.751s3.532.626,3.917-.939-.257-1.69.77-3.38,1.671-2.379,3.275-1.753,1.027,1.127,2.313,1.377,1.733-.188,1.8-.689a9.414,9.414,0,0,0-.386-2.066c-.193-1.064-1.477-2,.065-2.5s2.569-.5,3.018.5-.449,2.129.771,2.254a3.426,3.426,0,0,0,2.312-.876s-.065-1.5,1.541-.376,1.927,1.127,2.119,1.878-.128,1.064.707,1.5a14.905,14.905,0,0,0,2.762.689c.578.188-.128-.689,1.092.313s-.193.25,1.99,1.5a19.556,19.556,0,0,0,3.4,1.565c1.8.814.257,1.628.9,2.254s.835.063,1.541,2.817,1.669,3.442,2.376,3.129,1.027-.563,1.156-1.064a24.051,24.051,0,0,0-.128-2.628c0-1.252-.257-1.5.707-1.5s1.8.25,1.926,1.19-.642,2.065.771,2.253,1.8-.5,2.569-.25,1.349.5,1.349,1.315-.514.939.385,1.565,1.8-.291,2.505-.427.577-.762,1.991-.825,2.441-.814,2.761.063a2.75,2.75,0,0,1-.257,1.941s-2.248.438-2.632.939-1.349,1.064-.578,1.878a5.664,5.664,0,0,0,2.569,1.126s1.028-1.126,1.67-1.815.321-1.127,1.156-1.127,1.862-.751,1.862-.125a25.957,25.957,0,0,0,.45,3.442,2.629,2.629,0,0,0,1.8,1.878s1.927.063,2.441.814-1.349,1.753.707,2.5,2.311.376,2.632-.563-.449-1.628,1.22-1.628,1.541,1.565,1.541,4.32-2.7,5.634-4.366,8.262-33.865,52.166-33.865,52.166.085.334,2.312,1.085.686,2.837,2.569,2.587,1.37-1.251,3.255-1.084,2.311.458,2.654,1.105.085,1.816,1.712,1.732,1.97.668,2.74-.334,1.969-2.5,1.969-2.5a2.584,2.584,0,0,1,1.541-1.753,16.99,16.99,0,0,1,3.682-.918c1.113-.167,1.113-.668,3.168.334s2.4.417,3.254,2.087,1.97,2.054,2.055,3.28a6.076,6.076,0,0,0,2.313,3.731c1.369,1.251,2.4,2.336,2.4,3.338a3.326,3.326,0,0,0,.857,2.421,16.16,16.16,0,0,1,2.483,1.67c1.455,1.252,3,2.086,3.51,3.171s1.028,2.087,1.114,2.421-.343,1,.6.918,3.168-12.019,3.168-12.019L1224.7,880.269s2.44-2.691,2.569-3.756,0,.376-1.092-2.628-2.183-1.315-1.477-4.569a22.647,22.647,0,0,1,1.349-4.57l.514-2.442-1.027-1.752a3.423,3.423,0,0,1-.257-1.377,3.922,3.922,0,0,0-.577-1.815s-4.752-1.878-5.009-3.944.514-2.691-.707-4.444a10.324,10.324,0,0,0-3.339-3.443c-1.413-.876-2.376-1.564-2.441-3.067a9.477,9.477,0,0,1,.578-3.193l2.248-1.69.128-3.255a29.9,29.9,0,0,1-3.339-1.878c0-.188,1.027-2.254,1.027-2.5s2.184-.064-.128-1.565-3.725-2.316-3.725-2.316a38.039,38.039,0,0,0-3.339-2.567c-.9-.5-.257-.876-2.505-1.315s-1.926-.875-3.018-1.689a5.3,5.3,0,0,0-2.376-.939l-2.311-.25-1.541-2a2.958,2.958,0,0,0-1.348-2.567c-1.413-.751-1.927-.313-2.7-1.5s-1.156-2-1.028-2.816.707-1.19-.128-1.753a8.62,8.62,0,0,1-1.284-.939c-.257-.25,0-37.559,0-37.559a19.441,19.441,0,0,0,3.083-1.189c.128-.25.256-1.252.963-1.315a4.818,4.818,0,0,1,1.927.188c.577.188,1.6-.626,1.6-.626s-.128-.688,1.22-.751a34.669,34.669,0,0,1,3.532-.063c1.028.063,1.8.814,3.147.25s.77.313,1.669-.814a6.3,6.3,0,0,0,1.478-3.254c.064-.939-.45-1.753.706-1.878s2.441-.063,2.89.751-.064,1.628,1.285,2.191,1.284,1.127,2.312.188a6.329,6.329,0,0,0,1.67-2.692c.514-1.127.129-1.69,1.092-2.191s1.927-1.5,2.89-1.439.449-.563,1.67.25a25.179,25.179,0,0,1,3.019,2.065c1.926,1.5,2.649.814,2.738,2s-.73,1.628,0,2.755,1.243,2,1.822,1.5a5.247,5.247,0,0,0,.9-2.19s-.321-1.315.771-1.377,1.092-1,1.541.188.707.563.642,1.753.386,2,.9,1.94,2.632-.814,3.083-1.5-.385-1.5.77-2.129,1.349-1.315,2.055-.626.578,1.252,1.156,1.315.771-.313,1.092-.689.385-.939-.386-1.753-1.541-1.69-2.248-2.442-1.6-1.5-.963-2a1.653,1.653,0,0,1,1.348-.313l.449.188a26.5,26.5,0,0,1-1.219-2.629c0-.25-.771-2.379.449-2.5s1.99-.063,1.99-.876-.192.125-1.862-1.5-2.953-1.565-1.477-2.129,2.248-.563,1.862-1.252-1.092-.563-1.99-.939a1.9,1.9,0,0,1-1.028-1.44s0-3-1.413-3.5-1.541,1-2.89-.125-.707-1.753-1.99-1.878-1.478-.876-2.505.25-.128,1.69-1.733,2-1.862,1-2.441.188-.385-1.753-1.413-1.878a7.179,7.179,0,0,0-2.376-.188,3.475,3.475,0,0,0-1.926.563c-.707.376-.257,1.127-1.992.376s-.9-.814-2.055-1.377a3.663,3.663,0,0,0-2.569-.5c-.963.125.064.5-1.541.376s-1.6,0-2.312-.376-.642-1.19-1.477-.689a12.469,12.469,0,0,0-1.606,1.127c-.835.626-.9,1.315-1.8,1.44a4.032,4.032,0,0,1-1.991-.438l-.577-.939V702.742s3.361-.751,3.96-.751,1.627-.918,1.627-.918a13.765,13.765,0,0,1,2.74-.083,4.763,4.763,0,0,0,1.541.5,3.542,3.542,0,0,0,2.74-.835c1.2-1,2.055-2.671,3-2.838s2.4-.5,2.825.167-.086,1.5,1.285,1.669,1.8-1.252,3.168-.668a8,8,0,0,1,3.083,1.92,4.963,4.963,0,0,0,2.055,1.251h69.869l.686-1.084a4.543,4.543,0,0,1-1.028-.918c-.172-.334.086-1.586-.514-1.669s-1.712-.167-1.712-.167-.343,1.169-.771,1.169a5.6,5.6,0,0,1-1.627-.835s.085-.835.428-1.085.685-.083.685-.668.257-1.085-.428-1.085-1.541.083-1.8.083-.428.167-.428-.584-.942-1.418,0-1.669a17.643,17.643,0,0,0,2.226-.834l.428-1.085a9.822,9.822,0,0,1-.171-1.92,3.291,3.291,0,0,1,1.369-2,5.192,5.192,0,0,1,1.97-.584c.6,0,1.8-.167,1.97.5s.085.751.686,1a13.662,13.662,0,0,0,1.969.5,2.3,2.3,0,0,1,1.456.334c.428.417,1.541.835,1.969,2.17a16.554,16.554,0,0,0,1.113,3.005c.428.75.256,1.084,2.312,1.919s2.912,1.252,3.511,1.92,1.028.668,1.456,1.085,2.054.751,2.226.5a6.923,6.923,0,0,1,.942-.835l-.771-4.758s.343-2.587.771-2.837a15.984,15.984,0,0,1,3.511-1.336h2.911s1.113-1,1.712-1.419a8.565,8.565,0,0,1,2.4-.835,7.73,7.73,0,0,0,2.4-1.169l2.139-1.669s1.285-1.586,2.056-2.5a19.4,19.4,0,0,1,2.4-2.5,19.309,19.309,0,0,0,2.825-3.839l3.083-.668a13.188,13.188,0,0,1,2.741.835,9.06,9.06,0,0,1,2.055,1.5c.171.334.685.25.685,2.253s.256,1.753,0,3.089-.857,3.922-.857,3.922a7.74,7.74,0,0,0,.971,2.671,5.65,5.65,0,0,1,1.255,3.172,7.25,7.25,0,0,0,.257,2.086,28.317,28.317,0,0,0,2.312,1.753c.6.334,2.826,1.336,3.768,1.92s1.8.5,2.14,1.669a19.081,19.081,0,0,1,.514,2.67s2.226,7.846,2.4,8.1a22.853,22.853,0,0,1,2.227,3.923,12.029,12.029,0,0,1,1.2,3.755s-.857,2.755-1.2,3.756a25.271,25.271,0,0,0-.771,4.173,10.51,10.51,0,0,0,.257,2.588c.085.5.685,2.588.941,3.339a9.429,9.429,0,0,0,1.285,2L1376.6,731.2v-.835S1375.317,730.034,1375.231,729.7Z"
							transform="translate(-4.113 -0.533)"
						/>
						<path
							className="z-item-1821"
							d="M296.212,220.389a2.258,2.258,0,0,1-.605-.051,1.492,1.492,0,0,1-.451-.13,2.093,2.093,0,0,1-.4-.339,2.556,2.556,0,0,0-2.257-.617.193.193,0,0,0-.087.038.181.181,0,0,0-.048.086,4.383,4.383,0,0,1-.435.9,1.061,1.061,0,0,0-.14,1.207c.284.544.962.527,1.5.482a11.816,11.816,0,0,0,2.642-.5,1.076,1.076,0,0,0,.516-.286.576.576,0,0,0,.026-.694.247.247,0,0,0-.113-.093.359.359,0,0,0-.149,0"
							transform="translate(-1.825 -1.375)"
						/>
						<path
							className="z-item-1821"
							d="M134.061,15.141a4.2,4.2,0,0,1-1.4-1.8,4.609,4.609,0,0,1,.246-3.493L136.1,2.035c.24-.6.461-1.162.636-1.766L136.8,0H.008L0,.02C5.374,2.033,10.962,4.662,13.248,9.808A4.6,4.6,0,0,0,14.573,11.9a3.894,3.894,0,0,0,1.822.507c11.757,1.265,24.4,1.188,35.591,5.443C59.274,20.619,65.6,25.418,72.712,28.6c6.7,3,13.964,4.5,21.161,5.982.133.028.118.021.249.057,0-1.016-1.066-1.674-2.027-2.028a15.454,15.454,0,0,0-4.692-.939c-.037-.263.346-.344.614-.338s.644-.183.514-.415c-.823-.423-1.186-1.511-2.066-1.8a3.246,3.246,0,0,0-1.989.321,8.223,8.223,0,0,1-4.316.279c-.124-.726.691-1.334,1.432-1.3a3.807,3.807,0,0,1,1.985.928,2.192,2.192,0,0,1,2.256-1.7,6.442,6.442,0,0,1,2.913.969L92.321,30.5a.781.781,0,0,1-.77.532,2.742,2.742,0,0,0,3.583.311,1.6,1.6,0,0,1,.9,1.884,1.221,1.221,0,0,0-.112.56c.053.282.359.434.631.534a11.059,11.059,0,0,0,2.476.589c-.115-.455-.231-.912-.347-1.367l2.2.236a1.53,1.53,0,0,1,.916.3,4.368,4.368,0,0,0,.341.375,1.145,1.145,0,0,0,.628.158l8.062.432a13.107,13.107,0,0,0,2.948-.065c.642-.113,1.267-.321,1.915-.392,1.468-.157,2.969.4,4.407.077a18.794,18.794,0,0,0,7.318,1.384,6.186,6.186,0,0,0-1.156-3.456q3.023-1.552,6.044-3.106c.981-.5,2.095-1.2,2.14-2.3.043-1-.854-1.781-1.747-2.242a6.971,6.971,0,0,1-2.52-1.6c-1.245-1.62-.071-3.951,1.314-5.455.633-.218.506.968.841,1.544a1.329,1.329,0,0,0,.659.471l.04-.032-.008-.051a19.291,19.291,0,0,0,1.6-1.3c.409-.351.8-.688,1.189-.993l1.038-.832-1.2-.57a7.743,7.743,0,0,1-1.583-.994"
							transform="translate(0 -0.004)"
						/>
						<path
							className="ac-item-1821"
							d="M424.657,336.717a3.226,3.226,0,0,1-.13-.922l-.13-.557-.4-.241a3.223,3.223,0,0,1-1.09-2.11l.228.012c-.1-.431-.171-.834-.212-1.14l-.029,0,.026-.532-.792-.072a5.764,5.764,0,0,1-3.426-1.9c-.786-.791-2.629-2.655-2.039-5.2a5.635,5.635,0,0,1,2.3-3.127c.9-.7,1.908-1.428,3.025-2.234.993-.708,1.986-1.422,2.856-2.1a2.513,2.513,0,0,1,1.538-.519,2.628,2.628,0,0,1,1.057.227l.507-.915.623.045a2.875,2.875,0,0,1,.1-.4c.4-1.512.676-2.739.357-3.615a5.537,5.537,0,0,1-.513-1.967,4.06,4.06,0,0,1,.123-1.129l.091-.364-4.142-5.979a3.7,3.7,0,0,1-.746-2.22,3.5,3.5,0,0,1,1.727-2.869l.882-.552a5.263,5.263,0,0,0,1.038-.7l.571-.576-.39-.409a2.854,2.854,0,0,1,.208-.708c1.038-2.356,3.415-2.635,4.862-2.8l.837-.117a2.186,2.186,0,0,0,1.409-1.109,2.743,2.743,0,0,0,.292-.773l.214-1.129-1.142.149a4.749,4.749,0,0,1-1.649-.053,6.181,6.181,0,0,1-2.889-1.68,26.877,26.877,0,0,1-2.791-3l-.358-.448-.552.176a5.31,5.31,0,0,1-2.336.338,2.48,2.48,0,0,1-2.246-2.512,153.371,153.371,0,0,1,2.1-23.6,2.484,2.484,0,0,1,1.512-1.9l1.435-.539-.422-.831a6.588,6.588,0,0,1-.559-1.571,4.907,4.907,0,0,1,.013-2.012,5.137,5.137,0,0,1,2.766-3.473,5.2,5.2,0,0,1,4.447-.143,9.177,9.177,0,0,1,1,.571l.194.13.591.013a6.722,6.722,0,0,1,1.026.052,5.876,5.876,0,0,1,2.188.851,21.1,21.1,0,0,1,4.044,3.122l.753.74.655-1.084a2.445,2.445,0,0,1,1.15-.931,4.457,4.457,0,0,1-.784-1.4,1.26,1.26,0,0,0-.3-.637,1.24,1.24,0,0,0-.979-.116,10.438,10.438,0,0,1-3.584-.383,9.946,9.946,0,0,1-5.494-2.81c-1.524-1.586-3.389-2.9-4.912-4.544a38.87,38.87,0,0,1-7.6-11.9c-.5-1.249-1.083-2.671-2.358-3.128a11.117,11.117,0,0,0-2.171-.26,7.646,7.646,0,0,1-3.594-2,76.561,76.561,0,0,1-24-35.208c-.911-2.776-1.567-5.628-2.221-8.476-.105-.455-.209-.909-.313-1.363-.289-1.253-.576-2.509-.963-3.735-.006-.017-.017-.032-.023-.049-.009.071.006.194,0,.254a17.471,17.471,0,0,1-1.1,4.59,3.833,3.833,0,0,1-1.187,1.571,3.76,3.76,0,0,1-1.753.682l-3.629.552a4.608,4.608,0,0,0-.993.221,4.445,4.445,0,0,0-.8.6c-2.61,2.1-5.044,3.168-7.238,3.168a6.334,6.334,0,0,1-4.569-1.961c-.792-.8-1.61-1.584-2.466-2.33l-.351-.312-.441.143a7.612,7.612,0,0,1-5.511-.11c-.116-.053-.669-.337-.812-.415a3.326,3.326,0,0,0-1.739-.1,6.911,6.911,0,0,1-3.98-.3,4.437,4.437,0,0,1-2.355-2.545,3.757,3.757,0,0,1-.066-2.383l.066-.837-.786-.253A9.64,9.64,0,0,1,340.5,170.9l-.357-.513-.584.2c-.142.047-.292.084-.428.124a7.131,7.131,0,0,1-3.9-.176,14.452,14.452,0,0,1-3.024-1.512l-.228-.137a11.117,11.117,0,0,0-1.481-.791,12.17,12.17,0,0,1-2.726-1.382l-.259-.195-.325.039a6.381,6.381,0,0,1-4.154-1.038l-.409-.273-7.594,4c-2.279,1.188-5.109,2.661-8.284,2.785-3.862.2-7.51-1.863-10.685-3.72-4.512-2.642-9.788-5.557-15.377-6.693l-1.292-.246a24.98,24.98,0,0,1-3.94-.955,24.26,24.26,0,0,1-5.335-2.92c-.553-.365-1.091-.722-1.624-1.052l-.642-.4-.461.6a49.877,49.877,0,0,1-4.148,4.563c-.28.282-.784.827-1.349,1.441-.394.43-.8.88-1.247,1.375-.58.643-1.14,1.271-1.663,1.864a3.542,3.542,0,0,1,1.141.974c.645.927.491,2.474-.569,2.881-1.21.465-2.7-.774-3.794-.077-.4.258-.619.721-.95,1.069s-.933.558-1.272.219a.766.766,0,0,0,.242-.96q-1.766-.154-3.536-.3c.394,1.1-1.828,2.111-1.139,3.059a1.356,1.356,0,0,0,.577.389q2.6,1.158,5.2,2.315c-.28,1.463,1.513,2.382,2.962,2.786a2.371,2.371,0,0,1,2.654-.021c2.016,1.186,2.353,3.888,2.469,6.207.076,1.517.083,3.227-.991,4.311a3.216,3.216,0,0,1,2.824,1,6.593,6.593,0,0,1-3.683,3.448,19.815,19.815,0,0,1-5.059,1.154,6.861,6.861,0,0,0-1.162,2.643,2.349,2.349,0,0,0,1.153,2.463c-.215,1.369-.853,1.352-1.941,1.867a9.087,9.087,0,0,0-3.158,2.537,1.7,1.7,0,0,0-.456.982c-.015.967,1.353,1.393,1.626,2.32a2.687,2.687,0,0,1-.135,1.38c-.779,3.187.593,6.515,2.407,9.259s4.1,5.2,5.506,8.172c.779,1.652,1.269,3.432,2.161,5.026a2.394,2.394,0,0,0,1.179,1.191,3.819,3.819,0,0,0,1.331.06,10.124,10.124,0,0,1,3.463.831,32.592,32.592,0,0,0,7.565,1.656,21.882,21.882,0,0,1,4.466.638,16.291,16.291,0,0,1,5.71,3.8c.873.78,1.435,2.1,2.251,2.941a10.61,10.61,0,0,1,1.5,1.618c.792,1.253.672,2.95,1.591,4.117.746.95,2.128,1.48,2.378,2.658.057.269.045.552.125.815.291.967,1.54,1.2,2.556,1.258a5.876,5.876,0,0,0,1.33-2.689,5.2,5.2,0,0,1,.82-2.648,5.653,5.653,0,0,1,1.855-1.015,5.245,5.245,0,0,0,2.545-2.62,2.414,2.414,0,0,1-1.272-.393,1.9,1.9,0,0,1,2.784-1.1,1.548,1.548,0,0,0,.393.234.772.772,0,0,0,.822-.4,3.367,3.367,0,0,0,.3-.925,4.464,4.464,0,0,1,3.094-3.117c.385-.1.859-.226.956-.608s-.271-.716-.645-.815-.772-.047-1.148-.132a2.318,2.318,0,0,1-1.577-1.946,13.467,13.467,0,0,1,.02-2.639,1.492,1.492,0,0,0-.3-1.111,1.641,1.641,0,0,0-.852-.37q-1.45-.325-2.9-.646a3.577,3.577,0,0,1-2.537-1.387,4.38,4.38,0,0,0-.362-.695c-.541-.678-1.6-.387-2.472-.358-1.615.055-3.026-1.012-4.28-2.025-.407-.33-.861-.831-.63-1.3.2-.414.233-.867.559-1.191a10.119,10.119,0,0,1-3.96-1.053,3.454,3.454,0,0,1-1.849-3.38,1.137,1.137,0,0,0,.725-1.089,4.778,4.778,0,0,0-.269-1.361,7.21,7.21,0,0,1,.06-3.9,2.834,2.834,0,0,1-1.907-.937,8.709,8.709,0,0,1,2.378-.106.794.794,0,0,1,.425.126.846.846,0,0,1,.242.469q.3,1.157.607,2.316a1.459,1.459,0,0,0,.386.784,1.638,1.638,0,0,0,.905.276A9.131,9.131,0,0,1,295,216.72l.477-1.256c.037-.1.09-.211.2-.231a.289.289,0,0,1,.208.07c.663.455.922,1.291,1.419,1.921s1.59.989,2.044.33c4.017,2.791,8.04,5.589,11.777,8.738a4.559,4.559,0,0,0,2.22,1.254,5.8,5.8,0,0,0,1.468-.105,9.743,9.743,0,0,1,1.7-.07,1.538,1.538,0,0,1,.782.191,1.564,1.564,0,0,1,.482.627,12.155,12.155,0,0,1,.82,2.073c.195.679-.077.965-.1,1.576-.033.759.229,1,.821,1.587a38.981,38.981,0,0,1,3.455,3.347,6.85,6.85,0,0,1,1.6,4.206c-.138,1.471-1.542,3.267-2.238,4.593a2.391,2.391,0,0,0-.3.782c-.1.759.516,1.4,1.083,1.924l5.8,5.317a3.731,3.731,0,0,0,1.376.925,1.282,1.282,0,0,0,1.48-.463c4.147.058,7.662,2.965,11.809,2.941a5.607,5.607,0,0,1,2.651.284c.237.125.449.294.7.4a4.024,4.024,0,0,0,1.038.222,14.793,14.793,0,0,1,3.138.95,1.305,1.305,0,0,1,.649.417,1.718,1.718,0,0,1,.108,1.025,3.587,3.587,0,0,0,2.114,3.056,16.621,16.621,0,0,0,3.766,1.129c3.866.965,7.335,3.045,10.739,5.1a17.012,17.012,0,0,1,4.675,3.621,6.822,6.822,0,0,0,.986,1.116c.533.423,1.3.694,1.466,1.349.128.5-.092,1.2.37,1.436a1.086,1.086,0,0,0,.624.036,2.622,2.622,0,0,1,2.531,1.286,13.775,13.775,0,0,0,2.835,2.842,9.173,9.173,0,0,1,1.729,1.4,2.075,2.075,0,0,1,.465,2.059,4.494,4.494,0,0,0-1.625-1.494c.294.938.355,1.971.711,2.876.378.962,1.251,1.768,1.209,2.867a2,2,0,0,0,.019.867,1.309,1.309,0,0,0,.579.552l1.89,1.163a1.294,1.294,0,0,0,.621.248,2.193,2.193,0,0,0,.849-.291c.28-.113.675-.105.8.165a5.05,5.05,0,0,1-3.429,1.235l1.445,1.213a1.122,1.122,0,0,1,.478.673c.04.39-.322.689-.645.91a5.559,5.559,0,0,1-1.914.976,4.113,4.113,0,0,0-1.115.27,1.211,1.211,0,0,0-.014,2.02,1.5,1.5,0,0,1,2.247-1.169c.112.288-.285.488-.582.581a3.482,3.482,0,0,0-2.326,2.558c-.156.764-.081,1.652-.629,2.212a3.646,3.646,0,0,1-.825.54c-1.881,1.081-2.74,3.276-3.465,5.307-.392,1.094.157,1.167.975,1.571a6.545,6.545,0,0,1,2.281,1.988,16.527,16.527,0,0,0,2.522,3.07c.689.557,1.506.934,2.232,1.438a3.466,3.466,0,0,1,1.567,2.054,9.381,9.381,0,0,1,4.328-.635c1.584.272,2.91,1.332,4.425,1.864s3.228.547,4.567,1.42c1.014.659,1.993,1.831,3.155,1.487a36.614,36.614,0,0,1,.5-5.7,1.143,1.143,0,0,0,.018-.41,1.166,1.166,0,0,0-.3-.488,8.642,8.642,0,0,1-1.449-2.384,6.465,6.465,0,0,0-1.138-2.259c-.955-.961-2.5-.933-3.784-1.378a4.039,4.039,0,0,1-2.766-3.163,3.068,3.068,0,0,0-.162-.96c-.2-.432-.649-.678-1-.994a2.789,2.789,0,0,1-.92-2.208.529.529,0,0,1,.1-.322c.169-.2.485-.1.736-.028,1.477.415,2.848-.784,4.147-1.6a2.235,2.235,0,0,1,.887-.373c.91-.115,1.657.756,1.925,1.626a19.941,19.941,0,0,0,.648,2.644,3.15,3.15,0,0,0,3.738,1.568,2.426,2.426,0,0,1,.739-.2,1.584,1.584,0,0,1,.779.253c.67.376,1.279.856,1.972,1.185a2.828,2.828,0,0,0,2.231.214,1.186,1.186,0,0,1,.535-.151.916.916,0,0,1,.473.258l.673.572c.351.3.738.713.59,1.147-.241.706-1.647.664-1.583,1.405l1.164.64c.238.131.512.327.482.6a.8.8,0,0,1-.187.352c-1.071,1.489.618,2.561,1.569,3.641a2.112,2.112,0,0,1,.716,1.455,2.09,2.09,0,0,1-.461.99q-1.031,1.465-2.063,2.931a1.206,1.206,0,0,0,.247,2.042c2.351,1.794,3.78,5.005,6.278,6.6a11.343,11.343,0,0,1,2.345,1.7A10.8,10.8,0,0,1,424,335.718c.586,1.453.976,1.8,1.563,3.254.119.29-.221.774-.235,1.084a4.444,4.444,0,0,1-.313,1.317c-.145.386.114.674.479.939.115-1.156.245-2.236.405-3.006l.072-.344-.766-1.13a6.166,6.166,0,0,1-.552-1.116"
							transform="translate(-1.558 -0.98)"
						/>
						<path
							className="z-item-1821"
							d="M388.6,71.667a11.4,11.4,0,0,1-.885-4.233,24.2,24.2,0,0,1,.909-7.841c.8-2.789,2.348-5.387,1.2-8.053a2.633,2.633,0,0,1-1.707-.662,1.5,1.5,0,0,0,1.553-1.253,4.491,4.491,0,0,0-.263-2.153,79.687,79.687,0,0,1-2.837-17.137q-.3-4.883-.108-9.781c.611.277,1.21-.52,1.163-1.182s-.432-1.274-.437-1.938c-.009-.956.738-1.733,1.082-2.625.7-1.8-.3-3.768-1.272-5.44-1.581.076-1.742-3.132-3.311-2.929-.666-.83-.056-2.141.882-2.654a9.041,9.041,0,0,1,3.121-.661,1.489,1.489,0,0,1-.433-1.026.933.933,0,0,1,1.4.3,1.952,1.952,0,0,1-.028,1.609,9.141,9.141,0,0,0-.58,1.551,4.762,4.762,0,0,0,.261,2.1q.306,1.084.608,2.169Q389.711,4.92,390.5,0H224.213a7.853,7.853,0,0,1-3.487,1.239,7.621,7.621,0,0,1-4.668-.961l-.292-.169L215.435.2a5.91,5.91,0,0,1-2.415.1A6.07,6.07,0,0,1,211.941,0h-5.51A32.731,32.731,0,0,1,200.1.457l-.72-.026-.13.715A5.361,5.361,0,0,0,199.94,4.9a2.511,2.511,0,0,1-.526,3.271l-.059.052.546.7-.637.487a5.154,5.154,0,0,0,.247.72,13.659,13.659,0,0,0,.825,1.564,13.655,13.655,0,0,1,1.6,3.72,6.736,6.736,0,0,1-.4,3.986l-.22.513.395.4a7.8,7.8,0,0,1,1.773,2.648,5.912,5.912,0,0,1-.623,5.44,4.736,4.736,0,0,1-3.947,2.161,6.76,6.76,0,0,1-3.264-1.038,3.86,3.86,0,0,0-3.571-.149,3.507,3.507,0,0,0-2,2.174A10.153,10.153,0,0,0,189.9,34c.007.61,0,1.22-.039,1.818A14.462,14.462,0,0,1,181,47.993a2.507,2.507,0,0,1-3.187-1.233l-.24-.513-.564.039a152.479,152.479,0,0,0-16.3,1.777,7.4,7.4,0,0,0,3.11,1.424,23.112,23.112,0,0,1-9.395-1.084,11.591,11.591,0,0,0-3.089-5.228c-1.354-1.317-3.775-2.211-4.994-.769a12.519,12.519,0,0,0-.931,1.787c-.709,1.183-2.17,1.758-2.9,2.926-.944,1.507-.345,3.576.883,4.865a13.14,13.14,0,0,0,4.592,2.679,11.113,11.113,0,0,1,4.475,2.839,6.406,6.406,0,0,1-.724-2.547l.878-.075c-.39,1.219.951,2.208,1.8,3.175a12.766,12.766,0,0,1,1.446,2.351A41.431,41.431,0,0,0,159.77,66a4.227,4.227,0,0,0,1.381,1.3,1.468,1.468,0,0,0,1.757-.258A1.663,1.663,0,0,0,163.362,69a6.868,6.868,0,0,0,1.9,1.069,11.608,11.608,0,0,1,4.407,3.609c.762,1.033,1.5,2.3,2.765,2.545a2.341,2.341,0,0,1,.107-1.727c1.016.317,1.285,1.575,1.777,2.513a4.254,4.254,0,0,0,2.783,2.136c-.521.027-1.042.053-1.563.08a7.152,7.152,0,0,0,5.384,3.268,42.879,42.879,0,0,0,8.1,5.444,18.712,18.712,0,0,1,5.192,3.1c2.481,2.435,3.038,6.124,4.106,9.418,2.779,8.563,9.505,15.2,16,21.478a36.214,36.214,0,0,0,5.765,4.843c2.8,1.754,6.024,2.719,8.934,4.283a48,48,0,0,1,7.316,5.206q4.764,3.855,9.522,7.711a14.3,14.3,0,0,1,2.483,2.365c1.192,1.576,1.667,3.557,2.431,5.375a17.5,17.5,0,0,0,6.021,7.37c.745-.812,1.514-1.636,2.279-2.41a27.42,27.42,0,0,0,4.914-5.939,2.481,2.481,0,0,1,3.108-1.207,25.258,25.258,0,0,1,5.207,2.908,20.228,20.228,0,0,0,4.161,2.317,18.6,18.6,0,0,0,2.862.688l1.7.319c6.323,1.285,11.978,4.394,16.78,7.2l.675.4c2.461,1.455,4.953,2.953,7.407,2.7,2.058-.079,4.142-1.169,6.154-2.227l9.392-4.927a2.589,2.589,0,0,1,1.993-.143,2.505,2.505,0,0,1,1.46,1.357l.415.947.832-.6a2.648,2.648,0,0,1,2.492-.264,2.776,2.776,0,0,1,1.442,1.368l.122.286.286.122c.24.111.57.247.792.338a20.046,20.046,0,0,1,2.849,1.461,10.638,10.638,0,0,0,2.025,1.052l.137.052.149-.007a3.747,3.747,0,0,0,2.136-.779l.811-.545a2.453,2.453,0,0,1,2.363-.163,2.479,2.479,0,0,1,1.434,1.883,4.714,4.714,0,0,0,3.227,3.635,9.972,9.972,0,0,1,2.817,1.051,4.393,4.393,0,0,1,2.123,4l-.078.994.993-.1a6.134,6.134,0,0,1,2.571.259,8.935,8.935,0,0,1,1.312.617,2.976,2.976,0,0,0,2.576-.02,4.253,4.253,0,0,1,3.006-.305,4,4,0,0,1,1.369.779,49.69,49.69,0,0,1,3.655,3.389c1.35,1.408,3.927-.642,4.823-1.363a9.829,9.829,0,0,1,2.3-1.558,8.686,8.686,0,0,1,2.175-.539l2.972-.461.13-.552c.142-.616.246-1.3.351-2.018l.045-.324-.188-.267a8.111,8.111,0,0,1-1.551-3.758,2.454,2.454,0,0,1,.193-.993c-.262-.216-.544-.409-.8-.635a26.131,26.131,0,0,1-8.387-14.991,25.79,25.79,0,0,1-.347-3.112,26.109,26.109,0,0,1,.858-8.062c.225-.845,2.092-2.671,3.1-2.332a.988.988,0,0,0,.544.116c.211-.058.31-.291.379-.5q.8-2.354,1.595-4.71a3.87,3.87,0,0,1,.848-1.6c1.059-1.021,3.054-.671,3.94-1.842.293-.39.552-.978,1.037-.916.507.065,1,.834,1.33.447q-1.553-6.466-2.893-12.981a6.889,6.889,0,0,0-.515-1.72,3.485,3.485,0,0,0-2.428-1.817c.082-.2.166-.4.247-.6l1.615.557a17.92,17.92,0,0,1,0-7.591c-.564-.268-1.144.331-1.455.87a6.3,6.3,0,0,0-1.038,3.249,20.063,20.063,0,0,0,.366,2.226,12.387,12.387,0,0,1-.28,3.918c-.118.662-.343,1.447-.995,1.638a16.8,16.8,0,0,1-4.653-4.7.8.8,0,0,1-.173-.44c.008-.4.516-.549.894-.681,1.463-.508,2.106-2.158,2.6-3.611q1.805-5.295,4.117-10.4c.537.3.19,1.1-.07,1.651a3.558,3.558,0,0,0,2.064,4.7c-.046-2.409.523-4.476.3-6.875a16.911,16.911,0,0,1,3.858-12.317q-.419-.507-.834-1.012l-1.889,2.911a4.175,4.175,0,0,1-1.244-2.083,1.327,1.327,0,0,0-.278,1.044,10.218,10.218,0,0,0-2.12-1.087,17.788,17.788,0,0,0,.516-3.975,5.965,5.965,0,0,0-1.26-3.735,3.937,3.937,0,0,1-1.677.365,1.332,1.332,0,0,1-1.25-.994,1.907,1.907,0,0,1,.122-.833,6.973,6.973,0,0,1,1.214-2.61,2.423,2.423,0,0,1,2.6-.824,2.331,2.331,0,0,0,1.012.342,1.481,1.481,0,0,0,.857-.567,13.194,13.194,0,0,1,5.359-3.414,1.5,1.5,0,0,0,.95-.6,1.373,1.373,0,0,0,.06-.772,37.268,37.268,0,0,0-.807-4.4,1.085,1.085,0,0,0-1.1-1.01,7.159,7.159,0,0,1-1.865-.483,3.1,3.1,0,0,1-1.59-1.924,3.729,3.729,0,0,1,.455-2.66.2.2,0,0,0,.019-.118.181.181,0,0,0-.105-.1c-.4-.214-.848-.337-1.266-.518a2.149,2.149,0,0,1-1.055-.831,1.811,1.811,0,0,1-.127-1.323,5.338,5.338,0,0,1,.545-1.246c.027-.048.057-.1.111-.114a.209.209,0,0,1,.139.033q.835.431,1.673.861a.822.822,0,0,1,.386.312.808.808,0,0,1,.049.436c-.059.746-.143,1.493-.249,2.234a4.846,4.846,0,0,1,2.863-.765,6.2,6.2,0,0,1,1.824.728l1.761.929a1.269,1.269,0,0,1,.418.3,1.126,1.126,0,0,1,.167.738,7.831,7.831,0,0,1-1.055,3.743c-.468.8-1.106,1.649-.9,2.552.144.645.7,1.131.9,1.76a3.522,3.522,0,0,1,.1,1.2q-.048,1.227-.094,2.456a1.626,1.626,0,0,1-.13.7,1.429,1.429,0,0,1-.507.5,4.708,4.708,0,0,1-3.427.669c-.5,1.871-.969,3.966-.009,5.65a19.194,19.194,0,0,1,1.168,1.792,1.5,1.5,0,0,1-.407,1.9c-.214.119-.467.159-.675.29a.909.909,0,0,0,.281,1.571c1,.221,1.922-.933,2.847-1.172a5.152,5.152,0,0,1,2.976.2c.417.15.92.331,1.269.059a1.064,1.064,0,0,0,.286-.414c1-2.213.253-5.354-.8-7.439-.391-.772-.885-1.49-1.247-2.276"
							transform="translate(-0.889 -0.004)"
						/>
						<path
							className="z-item-1821"
							d="M418.947,94.863a.681.681,0,0,0-.316.341,1.2,1.2,0,0,0-.067.244.747.747,0,0,0-.009.311.07.07,0,0,0,.025.043.076.076,0,0,0,.068,0,.421.421,0,0,0,.2-.2,2.086,2.086,0,0,1,.141-.251,1.6,1.6,0,0,1,.238-.232c.07-.064.229-.208.12-.305s-.311,0-.4.045"
							transform="translate(-2.618 -0.597)"
						/>
						<path
							className="z-item-1821"
							d="M499.4,69.836a.868.868,0,0,0-.393.075c-.218.115-.191.308-.232.52a9.523,9.523,0,0,1-.291.911c-.106.356-.186.716-.263,1.079a12.152,12.152,0,0,0-.241,1.513,14.008,14.008,0,0,0-.009,1.582,3.522,3.522,0,0,0,.058.631,1.767,1.767,0,0,0,.221.55c.05.081.136.17.227.137a.2.2,0,0,0,.08-.06,3.347,3.347,0,0,0,.7-1.856q.11-.689.22-1.378c.051-.327.1-.652.186-.971a5.376,5.376,0,0,1,.82-1.764.779.779,0,0,0,.179-.36.477.477,0,0,0-.225-.414,1.136,1.136,0,0,0-.468-.156,3.37,3.37,0,0,0-.566-.039"
							transform="translate(-3.115 -0.441)"
						/>
						<path
							className="z-item-1821"
							d="M519.882,22.414a.433.433,0,0,0-.5.089.844.844,0,0,0-.211.477c-.028.174-.03.353-.067.525a6.577,6.577,0,0,0-.319,1.023.325.325,0,0,0,.028.174.274.274,0,0,0,.26.13.718.718,0,0,0,.291-.094,1.114,1.114,0,0,1,.285-.112,1.853,1.853,0,0,1,.356,0,.408.408,0,0,0,.326-.11.468.468,0,0,0,.075-.317,6.679,6.679,0,0,0-.15-1.066,1.609,1.609,0,0,0-.053-.217,1.108,1.108,0,0,0-.323-.506"
							transform="translate(-3.245 -0.144)"
						/>
						<path
							className="z-item-1821"
							d="M431.986,341.217a12.008,12.008,0,0,0-.283,1.671c.7-1.1,1.279-2.22.789-3.138a6.753,6.753,0,0,0-.446-.711,2.949,2.949,0,0,1,.181.776,7.215,7.215,0,0,1-.24,1.4"
							transform="translate(-2.701 -2.125)"
						/>
						<path
							className="ac-item-1821"
							d="M759.812,343.547a12.309,12.309,0,0,0-.128,1.835,6.171,6.171,0,0,1-.07,1.173L757.582,346l-2.358,2.091a16.846,16.846,0,0,0-2.067,2.242c-.615.836-.952,1.289-2.289,3.368a15.8,15.8,0,0,0-1.289,2.451,1.725,1.725,0,0,0-.151.139,17.458,17.458,0,0,0-2.927,3.275c-.384.523-.766,1.057-1.464,1.87-.441.511-.766.86-1.01,1.115-.081.092-.151.174-.233.255a9.373,9.373,0,0,0-.848-.964,7.209,7.209,0,0,0-5.32-3.8,3.75,3.75,0,0,1-.476-.127,8.163,8.163,0,0,0-2.358-.373,7.976,7.976,0,0,0-3.588.918c-.116.058-.221.1-.314.151a7.047,7.047,0,0,0-4.507,7.711c.024.279.047.512.059.709a9.5,9.5,0,0,0,.568,2.95,6.949,6.949,0,0,0-3.879,4.181,11.3,11.3,0,0,0-.837,2.765,6.908,6.908,0,0,1-.186.778,1.969,1.969,0,0,1-.233.616,9.585,9.585,0,0,0-.917,2.079,8.709,8.709,0,0,0-.372,2.125,7.574,7.574,0,0,0-1.615,1.94q-.4-.365-.766-.731c-.035-.233-.139-.476-.035-.7a.588.588,0,0,0,.081-.361c-.047-.174-.279-.209-.453-.266a1.228,1.228,0,0,1-.8-1.533c-.767-.418-1.533-.848-2.311-1.266a2.941,2.941,0,0,1-.767-.535,3.677,3.677,0,0,1-.6-1.452c-.872-2.822-4.472-3.043-3.751-6.237-.406-.012-.814-.035-1.22-.058a4.04,4.04,0,0,0-1.219-3.275c-.813-.906-1.824-1.615-2.636-2.509-3.135-3.472-2.822-9.024-5.842-12.59-1.034-1.231-2.462-2.23-2.927-3.763-.255-.825-.186-1.719-.511-2.52a17.2,17.2,0,0,0-1.2-1.893,4.331,4.331,0,0,1,.755-5.122,1.8,1.8,0,0,0,.511,2.392,3.9,3.9,0,0,0,2.614.6,7.567,7.567,0,0,0,5.853-3.147,5.474,5.474,0,0,0-.186-6.388c-.627-.743-1.544-1.452-1.417-2.4a3.571,3.571,0,0,0,1.813-.209,2.587,2.587,0,0,1,.232-2.416,4.668,4.668,0,0,0,3.484,1.824,23.913,23.913,0,0,1,3.369-8.084c.395.825-.07,1.847.3,2.683.592,1.336,2.625,1.068,3.821,1.917,1.1.8,1.243,2.345,1.789,3.576,1.173,2.636,4.182,3.8,7,4.635a4.074,4.074,0,0,1-2.381-2.277,6.775,6.775,0,0,1,6.957,5.134c1.057.267,2.115.523,3.159.79a16.566,16.566,0,0,0-9.071-6.7,8.127,8.127,0,0,1-2.369-.894,5.685,5.685,0,0,1-1.591-1.846,22.485,22.485,0,0,1-1.916-3.857c-.7-1.777-1.22-3.717-2.614-5.028-.453-.43-1.011-.825-1.127-1.429-.2-.988.894-1.719,1.824-2.148a13.738,13.738,0,0,0-3.252-3.206c-.477.174-.3.917.092,1.219s.952.453,1.185.894a1.784,1.784,0,0,1,.128.825c-.012,1.266-.024,2.52-.035,3.786a2.6,2.6,0,0,0-3.659-.964,6.969,6.969,0,0,0-1.73,2.544c-.512.905-1.382,1.8-2.416,1.672a1.623,1.623,0,0,1-.627-2.846,1.521,1.521,0,0,0,2.1-1.08,5.489,5.489,0,0,0-5.261.523V317.7a7.73,7.73,0,0,1-3.81,2.648,36.537,36.537,0,0,0-1.44-7.073c-1.672,2.021,1.718,5.413.1,7.48.453.174.894.349,1.348.523a15,15,0,0,1-.663,4.472c-2.02-1.928-3.96-3.937-5.841-6.005a2.72,2.72,0,0,1-.581-.825c-.278-.685,0-1.463-.116-2.183-.221-1.185-1.417-1.881-2.2-2.822-1.416-1.707.674-2.5.244-3.914a8.5,8.5,0,0,0-1.835-3.739,2.969,2.969,0,0,0-3.821-.488,3.206,3.206,0,0,1-.406-2.636c-.929.092-1.858.174-2.787.267.116-.592.221-1.174.337-1.766a7.247,7.247,0,0,0-4.437-.709,12.687,12.687,0,0,0-1.812-4.866,3.891,3.891,0,0,1-1.045,2.183,14.458,14.458,0,0,1-5.447-4.018,43.745,43.745,0,0,0-2.753-3.415c-2.6-2.566-6.493-3.251-10.128-3.809l.8-4.286a5.2,5.2,0,0,0-1.127,3.892c-4.553-1.278-9.2-2.579-13.926-2.358s-9.616,2.218-12.1,6.2a3.812,3.812,0,0,0-1.846-1.626c1.254.719.558,3.055-.894,3.658-1.511.639-3.263.222-4.89.43a6.454,6.454,0,0,0-5.261,7.549c.325,1.417,1.138,2.939.406,4.193a4,4,0,0,1-1.846,1.394c-1.325.627-2.648,1.265-3.961,1.9a7.325,7.325,0,0,0,9.071-.546,11.105,11.105,0,0,1-7.758,4.75,3.225,3.225,0,0,0-1.626.465,3.409,3.409,0,0,0-.872,1.312c-1.092,2.079-3.287,3.334-5.366,4.472l-12.543,6.864a17.934,17.934,0,0,1-3.763,1.7,18.2,18.2,0,0,1-3.554.511l-5.157.384a2.82,2.82,0,0,0-1.765.546c-.882.825-.43,2.462-1.313,3.3a4.339,4.339,0,0,1-1.521.709c-3.38,1.3-3.438,6.3-1.37,9.234s5.447,4.715,7.874,7.375c1.684,1.847,2.892,4.077,4.472,6.005,5.842,7.166,15.691,11.115,16.028,21.673a1.645,1.645,0,0,1-.151.882,1.822,1.822,0,0,1-1.1.651c-2.276.65-4.541,1.312-6.817,1.963a5.28,5.28,0,0,1-1.94.314,6.7,6.7,0,0,1-1.963-.639c-1.928-.837-4.309-1.255-6.028-.059a7.7,7.7,0,0,1-2.509,3.52,2.719,2.719,0,0,1-.882-1.382,1.723,1.723,0,0,0-.488,2.3,5.142,5.142,0,0,0,1.9,1.754,4.7,4.7,0,0,0-4.75,4.436,18.376,18.376,0,0,1-5.285-.5c-.128.313-.243.615-.384.917a18.832,18.832,0,0,0-10.848,2.44c-2.776-2.266-6.051-1.789-9.257-.906a2.306,2.306,0,0,1-1.8.023,3.116,3.116,0,0,1-.79-.905,3.575,3.575,0,0,0-2.323-1.37c1.15-.593-.139-2.742.894-3.532.267-.209.627-.243.894-.441.662-.487.418-1.532-.058-2.2s-1.127-1.312-1.1-2.137c.036-1.033,1.185-1.917.894-2.916-.3-1.045-1.8-1.1-2.578-1.858-1.313-1.289.092-3.437.092-5.273a4.46,4.46,0,0,0-1.951-3.415,13.6,13.6,0,0,0-3.694-1.73,4.481,4.481,0,0,1,2.6-2.672,1.864,1.864,0,0,1-1.789-2.8c-.754-.662-1.509-1.336-2.277-2a9.255,9.255,0,0,0,.674-7.072c-1.091-.326-1.824,1.091-2.067,2.2a7.683,7.683,0,0,1-1.638-3.079,8.915,8.915,0,0,1,.337,3.868A14.006,14.006,0,0,1,526,350.586c.464,1.777,1.834,3.147,2.845,4.691s1.65,3.636.581,5.134c-.72,1.011-2.184,2.033-1.545,3.09.023-.36.592-.453.86-.2a1.468,1.468,0,0,1,.3,1.022,24.5,24.5,0,0,1-.4,4.611,27.116,27.116,0,0,1-4.761-2.95c.174.372-.267.767-.674.755a2.27,2.27,0,0,1-1.092-.523,8.148,8.148,0,0,0-4.658-1.5c-1.056-.011-2.265.14-3.031-.58-.267-.255-.441-.592-.731-.825-.941-.79-2.44-.047-3.6-.476a5.2,5.2,0,0,0,2.207-2.95,6.232,6.232,0,0,0-2.009-.337c-1.011.036-1.15.442-1.742,1.255a3.6,3.6,0,0,1-2.056-1.87c-.383-1.289.778-2.544.86-3.89a.59.59,0,0,0-.116-.465.651.651,0,0,0-.418-.139,9.078,9.078,0,0,0-1.951.012,2.784,2.784,0,0,0,.731-1.243.961.961,0,0,0-.65-1.15,10.594,10.594,0,0,0-1.139-4.6c-.186.511-.964.325-1.358-.047a16.138,16.138,0,0,1-1.533-2.265,2.474,2.474,0,0,0-2.277-1.243,1.125,1.125,0,0,1,.72-.976,7.854,7.854,0,0,1-2.265-1.626,6.53,6.53,0,0,1,3.81.569c-.569-3-3.5-4.925-5.1-7.527a2.834,2.834,0,0,0,.441,2.115c.035.278-.279.5-.547.464a.207.207,0,0,1,.024.081c0,.116-.035.255.058.325s.081.279-.035.314c-1.7.372-3.356-.592-4.924-1.313a19.3,19.3,0,0,0-6.075-1.638,4.659,4.659,0,0,0,.476-2.59,4.115,4.115,0,0,1-2.6,1.7,4.436,4.436,0,0,1-1.544-.29,27.486,27.486,0,0,0-3.984-.929,4.3,4.3,0,0,0-1.846-.023,1.621,1.621,0,0,0-1.243,1.242,4.514,4.514,0,0,1-.07.79c-.081.255-.395.476-.627.325a.672.672,0,0,1-.2-.418,2.446,2.446,0,0,0-3.588-1.532,12.9,12.9,0,0,1-1.662.894c-.278.092-.557.162-.836.255-.523.174-1,.488-1.521.674a1.815,1.815,0,0,1-1.591-.071.946.946,0,0,1-.291-.313.833.833,0,0,1-.07-.441c.081-1.684,1.778-1.672,3.032-1.348.743.186,1.487.372,2.23.569-.36-1.023.929-2.009.743-3.067a5.689,5.689,0,0,0-.755-1.405,2.024,2.024,0,0,1,.813-2.52.993.993,0,0,0,.453-.325.611.611,0,0,0-.314-.767c-.685-.395-1.556.128-2.009.778a9.626,9.626,0,0,1-1.289,1.952c-.6.511-1.742.523-2-.221-.209-.663.406-1.417.07-2.021a3.5,3.5,0,0,1-.523.488,2.364,2.364,0,0,1-.58.372,2.18,2.18,0,0,1-.639.2,1.207,1.207,0,0,1-.674-.047.934.934,0,0,0-.3-.116.157.157,0,0,0-.1,0c-.012.012-.035.023-.047.035-.116.128-.325.325-.313.511a.7.7,0,0,0,.488.592,1.712,1.712,0,0,0,.546.012,1.649,1.649,0,0,1,1.056.209,1.39,1.39,0,0,1,.384.43,1.335,1.335,0,0,1,.139.36.331.331,0,0,1-.139.349.455.455,0,0,1-.325-.024,2.044,2.044,0,0,0-.244-.092,1.707,1.707,0,0,1-.255-.116c-.092-.058-.174-.139-.266-.209-.175-.116-.407-.14-.547-.3s-.151-.441-.348-.569a1.419,1.419,0,0,0-.453-.07c-.024,0-.059-.012-.082,0a.119.119,0,0,0-.07.058.7.7,0,0,0-.1.814.919.919,0,0,0,.441.372,5.353,5.353,0,0,1,.94.452.411.411,0,0,1,.186.233.406.406,0,0,1-.011.163.775.775,0,0,1-.081.278c-.093.175-.29.279-.325.476-.035.221.186.441.278.639a4.286,4.286,0,0,1,.314.872,6.171,6.171,0,0,1-6.679-1.092,5.21,5.21,0,0,1,3.124-1.011c.372.012.849-.011.988-.36a.577.577,0,0,0-.372-.686,1.583,1.583,0,0,0-.872-.011,4.875,4.875,0,0,1-1.777.139,1.32,1.32,0,0,1-1.162-1.173,4.962,4.962,0,0,1,.2-.814,1.77,1.77,0,0,0-.465-1.637,5.944,5.944,0,0,1-.987,1.567c-.139.175-.546.418-.569.674-.023.384.291.3.337.557a1.4,1.4,0,0,1-1.068,1.87,3.131,3.131,0,0,1-1.034-.07A57.154,57.154,0,0,1,441,326.392a1.888,1.888,0,0,0-.662-.2,1.756,1.756,0,0,0-.719.162q-3.293,1.185-6.6,2.37a4.333,4.333,0,0,0-1.777,1c-.465.511.755.952.627,1.626a25.639,25.639,0,0,0-.511,4.715,5.906,5.906,0,0,0,.151,1.2c-.059-.093-.128-.243-.175-.314l-.709-1.056.024-.279c.023-.348.07-.685.127-1.034a2.55,2.55,0,0,0-.186-1.382l-1.661-2.8a5.112,5.112,0,0,0-1.219-2.7,3.614,3.614,0,0,0-3.136-1.185,1.049,1.049,0,0,0-.325.047l-.349-.743-.313-.743c.662-.5,1.37-1.011,2.079-1.521l.523-.372c.534-.384,1.045-.755,1.556-1.139l.267-.2.325.046a5.658,5.658,0,0,0,5.273-2.59,8.5,8.5,0,0,0,.976-2.5c.464-1.754,1.091-4.135.082-6.4l-.116-.278.081-.29a4.488,4.488,0,0,0-.849-4.345l-3.17-4.575.65-.477a5.144,5.144,0,0,0,2.091-2.787l.151-.859.6-.093c.1-.012.221-.023.313-.035.406-.047.825-.1,1.208-.174a7.16,7.16,0,0,0,4.75-3.508,7.047,7.047,0,0,0,.65-5.807,5.066,5.066,0,0,0-2.961-3.2,7.527,7.527,0,0,0-2.16-.326c-.383-.011-.754-.035-1.162-.081l-.255-.035-.209-.186a21.937,21.937,0,0,1-2.706-3,5.007,5.007,0,0,0-1.464-1.405,3.587,3.587,0,0,0-1.626-.5l-.813-.047.023-.813a150.538,150.538,0,0,1,1.626-16.864l.081-.535.511-.151c.616-.174,1.231-.325,1.847-.441a2.5,2.5,0,0,0,1.765-3.588l-2.206-3.891,2.16.824a5.712,5.712,0,0,0,.754.221,10.531,10.531,0,0,0,1.731.116l.383.116a17.355,17.355,0,0,1,3.566,2.857,9.459,9.459,0,0,0,4.4,2.95,2.5,2.5,0,0,0,2.916-1.487l.243-.6.639.093a3.306,3.306,0,0,0,.894,0,2.623,2.623,0,0,0,1.683-1.1c.233-.337.372-.58.581-.894,2.555,1.9,4.356,4.809,7.213,6.249a1.574,1.574,0,0,0,.6.186c.65.024,1.347-.731,1.869-.325a43.379,43.379,0,0,0-2.137,4.135.857.857,0,0,0-.081.58c.092.244.372.36.615.453a2.708,2.708,0,0,1,1.533,1.393,1.459,1.459,0,0,1-.58,1.835c-.406.2-.906.163-1.29.4a1.361,1.361,0,0,0-.36,1.73,3.559,3.559,0,0,0,1.394,1.324,7.431,7.431,0,0,0,4.726,1.464c-.011-1.313-.023-2.624-.046-3.937,0-.523.081-1.162.58-1.313a1.129,1.129,0,0,1,.79.128c.882.395,1.8,1.091,1.835,2.044.011.429-.036,1.045.395,1.115-.465-.128-.929-.255-1.382-.372-.012.557-.023,1.126-.035,1.683-.686-.232-1.37-.464-2.067-.7-.175.2.07.5.3.651a3.315,3.315,0,0,0,1.766.766c.651.012,1.348-.546,1.219-1.173a2.059,2.059,0,0,1,2.567.871c.581.8.813,1.813,1.359,2.636.313.116.592-.266.58-.592a5.533,5.533,0,0,1-.116-.964.839.839,0,0,1,1.278-.5,1.1,1.1,0,0,0-.743-.883c.58-.824,1.475-1.765,2.427-1.417a3.034,3.034,0,0,0,.151,2.648l-.662.279a1.216,1.216,0,0,1,1.115.964,3.37,3.37,0,0,1-.1,1.556c-.813.464-1.7-.453-2.567-.755a10.848,10.848,0,0,0-1.614-.255c-1.325-.243-2.625-1.289-3.857-.755-1.15.488-1.37,2.033-1.08,3.23a3.375,3.375,0,0,0-1.37.417c1.1.488,1.591,1.754,1.952,2.893.2.6.313,1.405-.244,1.707-.395.209-1.091.174-1.068.615.012.465.79.349,1.138.651a3.449,3.449,0,0,0,3.636.511.544.544,0,0,1,.3-.07c.175.046.256.232.349.383a2.7,2.7,0,0,0,1.185.79,5.073,5.073,0,0,1,2.416,2.532,1.4,1.4,0,0,0,.314.523,1.227,1.227,0,0,0,.6.221c.441.081.882.151,1.324.233a1.185,1.185,0,0,0,.535.011,1.376,1.376,0,0,0,.5-.36,4.188,4.188,0,0,1,3.438-1.289c.789.116,1.51.534,2.3.685s1.765-.115,2-.871a9.535,9.535,0,0,0,.116-.988c.081-.325.36-.662.685-.592.418.093.547.767.976.767a.874.874,0,0,0,.372-.116,2.351,2.351,0,0,1,2.5.429,11.117,11.117,0,0,0,.825.837,3.063,3.063,0,0,0,1.1.395,2.619,2.619,0,0,0,1.231.081.877.877,0,0,0,.709-.882,1.323,1.323,0,0,1-.058-.465c.058-.255.383-.325.6-.476a1.172,1.172,0,0,0,.024-1.7,4.2,4.2,0,0,0-1.672-.918,6.744,6.744,0,0,1-3.345-2.462,13.322,13.322,0,0,0-.825-1.359A9.035,9.035,0,0,0,486.7,280c-.941-.534-1.812-1.532-1.544-2.567a.7.7,0,0,1,.882-.116c.278.151.5.407.79.569a2.866,2.866,0,0,0,1.951.082c.221-.035.5-.139.511-.372.012-.3-.417-.36-.719-.372a1.931,1.931,0,0,1-1.742-1.824,2.332,2.332,0,0,1,3.031.964,10.684,10.684,0,0,0,.523,1.185.881.881,0,0,0,1.115.384c.384.592.092,1.358.07,2.067a5.423,5.423,0,0,0,1,2.787,4.81,4.81,0,0,1,4.077.488,9.346,9.346,0,0,1,2.439,2.648c.766,1.092,1.544,2.183,2.322,3.275,1.731,2.451,3.763,3.891,5.691,6.2a13.634,13.634,0,0,0,1.58,1.684,7.171,7.171,0,0,0,6.109,1.521,11.324,11.324,0,0,1,2.311-.465,6.714,6.714,0,0,1,1.952.384c8.362,2.334,17.294-.128,25.342-3.38a23.671,23.671,0,0,1,7.1-2.114,2.953,2.953,0,0,0,2.126-1.627,26.483,26.483,0,0,1,1.207-2.439,7.805,7.805,0,0,1,3.381-2.311q8.483-3.867,16.991-7.735a16.864,16.864,0,0,1,2.95-1.138,29.261,29.261,0,0,1,4.158-.535,46.578,46.578,0,0,0,7.735-1.789c2.311-.673,4.866-1.532,5.958-3.67a6.653,6.653,0,0,1,1.08-1.975,5.226,5.226,0,0,1,1.3-.754,13.875,13.875,0,0,0,4.588-4.553.814.814,0,0,1,.789-.79c.07,1.057.139,2.115.209,3.183a1.817,1.817,0,0,0,.256.987.636.636,0,0,0,.917.128c.325-1.069.662-2.148,1-3.218a.87.87,0,0,1,.245-.453c.36-.313.894.059,1.207.418a2,2,0,0,1,.6-1.834,2.041,2.041,0,0,1,1.893-.442,4.063,4.063,0,0,1,1.824,1.464,3.437,3.437,0,0,1,1-2.973,3.5,3.5,0,0,1,3.02-.894c.29-.441.418-.952.708-1.393,1.034-1.58,2.369-2.916,3.333-4.553a1.039,1.039,0,0,0,.2-.592c-.024-.29-.29-.546-.233-.825.035-.186.209-.313.36-.429.825-.616,1.638-1.231,2.463-1.847a1.237,1.237,0,0,1,.662-.3c.384,0,.662.348,1.034.452,1.01.279,1.567-1.289,2.578-1.544a2.3,2.3,0,0,1,1.94.86,1.581,1.581,0,0,0-.709,1.219,2.446,2.446,0,0,0,2.358.255,7.061,7.061,0,0,1,2.4-.615,6.005,6.005,0,0,1,1.916.557,12.672,12.672,0,0,0,5.413.813,2.618,2.618,0,0,1,1.044.047,3.89,3.89,0,0,1,.674.395,7.729,7.729,0,0,0,2.777.941c1.3.255,2.6.523,3.9.778,3.949-1.975,8.548-1.034,12.961-1.394a2.824,2.824,0,0,1-1.916,1.963,17.431,17.431,0,0,0-2.683,1.057,2.153,2.153,0,0,0-1.092,2.416c.245.651.941,1.115.941,1.812.174-.754,1.15-.964,1.94-1.022a10.056,10.056,0,0,1,5.064.5,15.684,15.684,0,0,0,2.915,1.5,6.123,6.123,0,0,0,2.381-.1l.941-.174a39.361,39.361,0,0,0,5.528-1.255,1.905,1.905,0,0,1,.976-.151,2.737,2.737,0,0,1,.58.233,4.439,4.439,0,0,0,.872.244c2.241.464,4.483.94,6.725,1.405a3.149,3.149,0,0,1,.418-1.243,32.867,32.867,0,0,1,8.211,2.218c.639.233,1.417.663,1.336,1.337a48.523,48.523,0,0,0,16.98,6.376,2.9,2.9,0,0,1,1.162.406c.511.395.743,1.15,1.358,1.336a2.648,2.648,0,0,0,.86.035,4.856,4.856,0,0,1,3.112,1.742c.837.813,1.684,1.627,2.532,2.44a2.656,2.656,0,0,1,.592.708,7.584,7.584,0,0,1,.255.731,2.926,2.926,0,0,0,.523.731,17.619,17.619,0,0,0,6.238,4.611,7.937,7.937,0,0,1-1.011-2.624,20.111,20.111,0,0,1,4.064,4.75c1.824,3,2.881,6.492,5.25,9.083a11.956,11.956,0,0,0,4.274,2.939c.174-.453.349-.894.523-1.348a59.09,59.09,0,0,0,5.854,6.086c-.767.488-.512,1.731.174,2.323a8.064,8.064,0,0,0,1.846.987,8.42,8.42,0,0,0-1.08,2.927,7.359,7.359,0,0,0-2.857,3.74,11.04,11.04,0,0,0-.313,4.738c.278,3.055,1.568,5.238,3.821,6.5a4.486,4.486,0,0,1,1.045.872,9.6,9.6,0,0,0,1.045,1.034c-.024.255-.035.5-.047.732a9.644,9.644,0,0,0,2.393,6.5,13.786,13.786,0,0,0,1.277,1.3,13.123,13.123,0,0,1,2.149,2.508c.3.43.547.837.755,1.2a8.461,8.461,0,0,0,.976,4.227c.5,1.033.87,1.7,1.115,2.126.035.07.07.128.1.186"
							transform="translate(-2.65 -1.562)"
						/>
						<path
							className="z-item-1821"
							d="M667.525,329.282a8.462,8.462,0,0,1,2.895-1.249q.006-3.309.01-6.616a1.945,1.945,0,0,0-.519-1.627c-.622-.46-1.637-.092-2.2-.624a.857.857,0,0,0-.279-.23.593.593,0,0,0-.317.011c-1.393.305-2.668.26-3.178,1.667-.454,1.256.23,3.839.186,5.217-.064,1.876.029,3.9,1.183,5.392a2.2,2.2,0,0,0,1.036.8,2.825,2.825,0,0,1,1.182-2.743"
							transform="translate(-4.153 -1.999)"
						/>
						<path
							className="z-item-1821"
							d="M655.921,323.776a.584.584,0,0,0,.523-.177.681.681,0,0,0,.07-.6,2.817,2.817,0,0,0-.645-1.049c-.176-.2-.356-.4-.54-.593a.959.959,0,0,0-.289-.233.345.345,0,0,0-.352.024c-.192.157-.074.485-.213.69-.2.3-.753.572-.387,1a5.113,5.113,0,0,0,1.3.734,1.561,1.561,0,0,0,.535.2"
							transform="translate(-4.091 -2.013)"
						/>
						<path
							className="z-item-1821"
							d="M653.871,332.687a1.412,1.412,0,0,0,.507.691c.257.22.619.431.914.263a.821.821,0,0,0,.3-.725,6.207,6.207,0,0,0-.068-1.152.455.455,0,0,1,.308-.656l.761-.3a.522.522,0,0,0,.182-.1.363.363,0,0,0,.1-.276c-.013-.4-.424-.65-.73-.913-.363-.314-.5-.9-.863-1.168-.43-.318-.717.38-.868.706a8.4,8.4,0,0,0-.566,3.186,1.54,1.54,0,0,0,.023.438"
							transform="translate(-4.09 -2.058)"
						/>
						<path
							className="z-item-1821"
							d="M535.638,362.771a.194.194,0,0,0,.079-.054.188.188,0,0,0,.027-.119c0-.459-.253-1.021-.775-1.046a4.08,4.08,0,0,0-.833.117c-.267.047-.654.061-.818.314a.262.262,0,0,0-.047.173.356.356,0,0,0,.157.212,2.567,2.567,0,0,0,1.555.527,1.65,1.65,0,0,0,.654-.123"
							transform="translate(-3.336 -2.266)"
						/>
						<path
							className="z-item-1821"
							d="M531.981,374.063a1.732,1.732,0,0,1-1.512.767,3.569,3.569,0,0,0-2.053.417,1.5,1.5,0,0,0-.62,1.959.524.524,0,0,1,.521-.3,2.32,2.32,0,0,1,.625.153,6.135,6.135,0,0,0,1.519.2.843.843,0,0,0,.37-.036.956.956,0,0,0,.4-.495,7.148,7.148,0,0,1,3.232-2.734,1.292,1.292,0,0,1,1.01-.2c.41.155.576.681.98.847a1.223,1.223,0,0,0,1.168-.355,5.592,5.592,0,0,0,1.283-1.52.419.419,0,0,0-.187-.716,4.1,4.1,0,0,0-2.759-.233c-.4.108-.784.277-1.193.346a5.619,5.619,0,0,0-1.322.206c-.7.3-.988,1.106-1.465,1.694"
							transform="translate(-3.301 -2.329)"
						/>
						<path
							className="z-item-1821"
							d="M502.045,382.333a1.4,1.4,0,0,1-.848-.16,1.5,1.5,0,0,1-.329-.431,2.658,2.658,0,0,0-1.438-1.1c-.292-.089-.642-.164-.768-.439a.87.87,0,0,1-.043-.426,3.821,3.821,0,0,1,.995-2.857c.567-.463,1.4-.6,1.81-1.211a1.275,1.275,0,0,0-.11-1.526.622.622,0,0,0-.249-.183,1.111,1.111,0,0,0-.326-.042,1.884,1.884,0,0,1-1.666-1.349,3.8,3.8,0,0,1-.088-.932,4.638,4.638,0,0,0-.508-2.393,1.837,1.837,0,0,0-2.012-.867c-.779.234-1.116.96-1.687,1.458-.963.837-2.568.754-3.363,1.749-.879,1.1-.314,2.977-1.394,3.883-.133.112-.511-.3-.762.093a1.358,1.358,0,0,0,.05,1.065,10.444,10.444,0,0,0,2.4,3.758,31.536,31.536,0,0,0,3.393,2.955,9.605,9.605,0,0,0,.973.7c.225.133.46.248.7.362q2.984,1.434,6.089,2.611a1.877,1.877,0,0,0,1.173.172,6.106,6.106,0,0,0,1.063-.638c.275-.147.676-.159.923-.321.559-.368.044-1.255-.229-1.719a4.507,4.507,0,0,0-3.74-2.216"
							transform="translate(-3.06 -2.308)"
						/>
						<path
							className="z-item-1821"
							d="M495.386,389.134c-.539-.156-1,.279-1.5.387a1.524,1.524,0,0,0-.389.1.825.825,0,0,0-.325.78,3.285,3.285,0,0,0,.173.974.826.826,0,0,0,.175.315.609.609,0,0,0,.4.155c.58.023.847-.438,1.138-.846a4.637,4.637,0,0,0,.788-1.084.584.584,0,0,0-.46-.778"
							transform="translate(-3.085 -2.438)"
						/>
						<path
							className="z-item-1821"
							d="M462.9,262.558c.405.294.868.481,1.057.99a4.114,4.114,0,0,0,.209.669c.216.374.7.48,1.07.7.425.252.8.7,1.289.672a1.472,1.472,0,0,0,.961-.7,3.415,3.415,0,0,0,.484-.757,1.1,1.1,0,0,0,.017-.874,2.7,2.7,0,0,0-.571-.651,2.1,2.1,0,0,1-.491-.858c-.077-.265-.12-.578-.355-.729a1.1,1.1,0,0,0-.313-.111,4.189,4.189,0,0,1-1.054-.428,1.015,1.015,0,0,0-.628-.212.915.915,0,0,0-.359.175q-.781.537-1.563,1.076c-.413.285-.067.808.247,1.033"
							transform="translate(-2.893 -1.632)"
						/>
						<path
							className="z-item-1821"
							d="M472.466,270.826a1.923,1.923,0,0,0,.8.9.376.376,0,0,0,.309.025.5.5,0,0,0,.182-.192c.444-.666,1.174-1.112,1.6-1.792.159-.256.3-.567.59-.66.348-.11.785.145,1.064-.086a2.479,2.479,0,0,0-.82-.9,10.753,10.753,0,0,0-1.173-.717l-2.567-1.426a2.867,2.867,0,0,0-1.837-.524.583.583,0,0,0-.368.191.623.623,0,0,0-.077.45,1.015,1.015,0,0,0,.268.645.483.483,0,0,0,.648.031c.051-.053.086-.12.141-.169a.409.409,0,0,1,.513.049,3.654,3.654,0,0,1,.633.874c.136.259.013.349-.023.615-.051.365.144.686.075,1.066a3.044,3.044,0,0,0-.18,1.077,1.777,1.777,0,0,0,.228.545"
							transform="translate(-2.941 -1.664)"
						/>
						<path
							className="z-item-1821"
							d="M479.566,276.277c-.507-.159-.48.581-.464.905a.788.788,0,0,0,.072.346.619.619,0,0,0,.312.247,2.741,2.741,0,0,0,.688.162c.166.025.331.05.5.073a.328.328,0,0,0,.189-.008.232.232,0,0,0,.119-.222.768.768,0,0,0-.308-.5c-.287-.269-.72-.884-1.1-1"
							transform="translate(-2.997 -1.732)"
						/>
						<path
							className="z-item-1821"
							d="M143,20.314c-.149-.354-.446-.637-.564-1a.99.99,0,0,1,.036-.541,7.51,7.51,0,0,1-2.345,2.53,11.032,11.032,0,0,0-1.158.927,4.489,4.489,0,0,0,2.422.414c1.073-.2,2.033-1.335,1.61-2.329"
							transform="translate(-0.869 -0.121)"
						/>
						<path
							className="z-item-1821"
							d="M196.932,22.859c-.364-.24-.733-.474-1.058-.669a2.484,2.484,0,0,1-1.116-2.706,2.52,2.52,0,0,1,1.656-1.786l.642-.214-.078-.669a6.6,6.6,0,0,0-1.007-2.655c-.37-.662-.746-1.324-1.051-2.018a7.428,7.428,0,0,1-.188-5.895l.136-.311-.116-.312A10.353,10.353,0,0,1,194.367,0H142.805c-.022.088-.05.186-.07.271l-.357,1.408a24.888,24.888,0,0,1-.864,2.4l-3.1,7.575.947.227a3.838,3.838,0,0,0,1.214.079,2.386,2.386,0,0,1,2.641,1.713,5.949,5.949,0,0,1-.246,4.157,4.468,4.468,0,0,1,2.082-.861c.433.691.152,1.58.2,2.391a3.035,3.035,0,0,0,2.421,2.71,5.77,5.77,0,0,0-2.421.049,2.127,2.127,0,0,0-1.622,1.918c.044,1.408,1.792,2.016,3.194,2.256a1.512,1.512,0,0,0,.978-.052c.537-.292.5-1.045.658-1.633.486-1.859,3-2.175,4.927-2a4.412,4.412,0,0,0,2.19-.153,1.405,1.405,0,0,0,.835-1.783,2.849,2.849,0,0,1,1.682.393,2.963,2.963,0,0,1-.81,2.461c-.584.592-1.4.918-2,1.5s-.9,1.639-.284,2.2a1.952,1.952,0,0,1-1.187-.559c-.735-.078-1.191.893-.95,1.584a4.567,4.567,0,0,0,1.425,1.652,8.054,8.054,0,0,1,2.55,5.1c.085.888.1,1.944.85,2.437a5.2,5.2,0,0,0,1.174.413c1.962.69,2.487,3.372,3.786,4.885,5.891-.826,12.775-1.408,16.777-1.6a2.76,2.76,0,0,1,1.487.442l.558.39.493-.474a9.35,9.35,0,0,0,2.908-6.03c.033-.5.033-.987.026-1.468a14.206,14.206,0,0,1,.351-3.738,8.466,8.466,0,0,1,4.7-5.414,8.711,8.711,0,0,1,6.277-.513l5,1.551.481.15-.443-.3Z"
							transform="translate(-0.866 -0.004)"
						/>
						<path
							className="z-item-1821"
							d="M144.584,27.584a.364.364,0,0,0-.139-.3c-.259-.178-.6.09-.744.289a1.429,1.429,0,0,0-.244,1.166.661.661,0,0,0,.21.377.8.8,0,0,0,.323.132,5.074,5.074,0,0,0,1.33.13.321.321,0,0,0,.216-.062.257.257,0,0,0,.065-.141.866.866,0,0,0-.24-.7,4.933,4.933,0,0,0-.586-.507.476.476,0,0,1-.188-.385"
							transform="translate(-0.897 -0.174)"
						/>
						<path
							className="z-item-1821"
							d="M140.505,33.128a1.845,1.845,0,0,1-.338-.308c-.076-.087-.031-.134-.128-.2a.277.277,0,0,0-.369.145.773.773,0,0,0-.024.441c.041.3.082.6.125.9a.874.874,0,0,0,.073.285.294.294,0,0,0,.233.167.423.423,0,0,0,.321-.21,1.5,1.5,0,0,0,.35-.768.46.46,0,0,0-.074-.312.751.751,0,0,0-.169-.143"
							transform="translate(-0.873 -0.208)"
						/>
						<path
							className="z-item-1821"
							d="M137,30.693c-.479-.068-.125.636.045.785a.511.511,0,0,0,.2.115.371.371,0,0,0,.389-.131c.286-.384-.309-.723-.631-.769"
							transform="translate(-0.856 -0.196)"
						/>
						<path
							className="z-item-1821"
							d="M432.045,339.031a4.483,4.483,0,0,0-.483-1.217,2.631,2.631,0,0,0,.078.57,3.851,3.851,0,0,0,.405.647"
							transform="translate(-2.7 -2.117)"
						/>
						<path
							className="ad-item-1821"
							d="M1017.26,205.293c-.766-.255-1.881-1.707-1.881-1.707s-.941-1.127-3.857-1.719-1.37.918-3.856,1.591-2.741-1.417-2.741-1.417l-.767-2.427,1.034-1.5s1.881-1.336,2.648-1.835,1.034-1.336,1.8-2.59.337-2.091,0-3.171-.686-.5-1.8-.836-1.627.081-2.742-.163-.429-1.173-.592-2.009-1.033-1.5-1.975-2.671-.86-.337-1.37-.243-1.2,1.08-1.2,1.08l-.86.836s-.94-.674-1.115-1.173,0-.837.349-1.662a12.959,12.959,0,0,1,1.37-2.345c.592-.918,0-1.162-.174-1.754a3.03,3.03,0,0,0-1.2-1.917c-.941-.743-1.2.175-2.23,0a32.055,32.055,0,0,0-4.111,0c-2.567,0-2.219-.081-3.508,0a19.851,19.851,0,0,0-3.937,1.092l-4.444.816c.1.212.1.3.076.369-.064.189-1.6-.062-2.119.438s-1.669,1.252-1.285,1.941a4.359,4.359,0,0,0,1.285,1.252,3.341,3.341,0,0,1,2.183-.125,3.271,3.271,0,0,1,1.477,1l-1.219,2.191-1.413,3.067a3.489,3.489,0,0,0,.064,1.377,46.407,46.407,0,0,1,.321,4.7,6.777,6.777,0,0,0-1.54,1c-.386.438-1.862,2.692-1.862,2.692a4.819,4.819,0,0,1-2.055,2.066c-1.413.689-2.826.689-4.175,1.44s-1.349,1.376-2.569,1.689a9.526,9.526,0,0,1-2.89.25c-1.028,0-3.339,1.5-3.339,1.5s-2.505.814-2.633,2.379.257,2.066-.707,3.38-2.441,2.755-3.146,3.756a30.115,30.115,0,0,0-1.734,3.13l-.449,4.319a17.958,17.958,0,0,0,1.091,3.693c.449.564,1.99,1.628,2.505,2.755s3.788,2.567,4.109,2.88a27.448,27.448,0,0,1,2.183,2.817c.322.562,1.22,2.5,1.22,2.5l1.67,2a10.876,10.876,0,0,0,.514,3.568,16.052,16.052,0,0,0,1.669,2.88c.514.939,1.477,1.753,1.477,2.442s.771,1.377.193,1.941a12.383,12.383,0,0,1-1.284,1.063s-1.092-1.314-2.184-1.063a23.079,23.079,0,0,0-2.7.939,13,13,0,0,1-3.339.312l-2.954-1.251H954.37s-4.046,3.755-4.3,4.068a12.684,12.684,0,0,0-.835,1.69l2.055,1.816,3.211,1.877a6.833,6.833,0,0,1,1.927,2.066c.77,1.315,1.156,1.315,1.734,2.5s1.091,1.44,1.219,2.191a6.946,6.946,0,0,1,.065,2.628c-.193,1.127-.963,1.315-.193,2.191s1.092,1.627,2.183,1.877,1.67-.249,2.183.689,1.029,2,1.029,2,.449,1.377.835,2.316A6.946,6.946,0,0,0,966.7,280.6s.836.939.836,1.565a7.145,7.145,0,0,1-.771,2.065l-2.826,3.758v0c.2.929.384-1.637.767,1.627s.523,3.31,1.219,4.123a24.478,24.478,0,0,1,2,2.949,23.879,23.879,0,0,1,1.219,3.067l-.836,2.694a10.024,10.024,0,0,0,.2,2.44c.255,1.127.7.941.964,2.567s1.022,1.869,1.532,3.437.964,3.008.964,3.008-1.6,5.134-1.218,5.889,1.161,1,1.218,2.567.639,2.183.326,3.751a18.416,18.416,0,0,0-.326,3.253s-.452,1.812-.638,2.567c-.156.594-1.1,3.056-1.5,4.077a2.38,2.38,0,0,1,.741.081,2.38,2.38,0,0,0-.741-.081l-.176.452c.488.186.94.372.94.372s.778,1.672,1.464,3.17a23.415,23.415,0,0,0,1.626,2.672,18.787,18.787,0,0,1,1.533,2.59c.255.836.86,1.254.175,2.334s-1.545,2.927-1.545,2.927a9.874,9.874,0,0,0-1.452,2.416,6.3,6.3,0,0,0-.337,2.254,4.216,4.216,0,0,0,1.022,2.253,3.506,3.506,0,0,0,1.545.592c.979.156.558-.983,2.849.024l2.97-1.7a17.641,17.641,0,0,1,4.624,1.419c1.284.835,2.4,1.92,3.424,1.836a6.1,6.1,0,0,0,3.168-1.836,13.972,13.972,0,0,0,1.712-2.837c.086-.25-.084-.5.172-2.337s-.428-2.838.428-4.007.428-1.836,1.712-2,1.97.334,2.74-.167a2.132,2.132,0,0,0,.685-2.671c-.514-.918,3.169-.167-1.369-2.087s-5.223-3.172-5.223-3.172l-1.2-2.921-.172-4.424.343-2.42s3.767-4.174,3.767-4.424-.086-2.754-.171-4.089a18.086,18.086,0,0,0-.771-3.422l-2.911-.668a1.812,1.812,0,0,0-.685,1.586,4.213,4.213,0,0,1,.085,2.5,12.048,12.048,0,0,0-.6,1.836s-1.713,1.335-2.141,1.084-1.37-.167-1.8-1.418-1.113-2.337-.771-3.422.857-2.087,1.114-2.837a5.28,5.28,0,0,0,.428-1.336c0-.334-.686-.751-1.285-1s-1.8-.835-1.8-.835l-1.284-2.17s-.085-3.171.343-4.006a29.427,29.427,0,0,1,1.627-2.5,12.535,12.535,0,0,0,2.569-2.671l1.455-1.919.335-1.586,1.892-1.336-.343-10.433s-.856,0-1.2-2.17-1.044-3.338-.351-4.34a7.328,7.328,0,0,0,.95-2.5l4.5-.758-.041,0,4.623-12.765s7.793-9.012,7.955-9.269,2.916-3.17,2.916-3.17l4.448-10.349,1.894-1.754,1.37-1.754a10.252,10.252,0,0,1-.43-1.579,19.584,19.584,0,0,0-2.148-2.753l1.208-6.434,2.613-3.833V212.39l4.658-7.433.384-.174c-.245.011-4.158.186-4.658.674-.523.5-1.207.08-1.975-.163"
							transform="translate(-5.938 -1.114)"
						/>
						<path
							className="ae-item-1821"
							d="M1017.26,205.293c-.766-.255-1.881-1.707-1.881-1.707s-.941-1.127-3.857-1.719-1.37.918-3.856,1.591-2.741-1.417-2.741-1.417l-.767-2.427,1.034-1.5s1.881-1.336,2.648-1.835,1.034-1.336,1.8-2.59.337-2.091,0-3.171-.686-.5-1.8-.836-1.627.081-2.742-.163-.429-1.173-.592-2.009-1.033-1.5-1.975-2.671-.86-.337-1.37-.243-1.2,1.08-1.2,1.08l-.86.836s-.94-.674-1.115-1.173,0-.837.349-1.662a12.959,12.959,0,0,1,1.37-2.345c.592-.918,0-1.162-.174-1.754a3.03,3.03,0,0,0-1.2-1.917c-.941-.743-1.2.175-2.23,0a32.055,32.055,0,0,0-4.111,0c-2.567,0-2.219-.081-3.508,0a19.851,19.851,0,0,0-3.937,1.092l-4.444.816c.1.212.1.3.076.369-.064.189-1.6-.062-2.119.438s-1.669,1.252-1.285,1.941a4.359,4.359,0,0,0,1.285,1.252,3.341,3.341,0,0,1,2.183-.125,3.271,3.271,0,0,1,1.477,1l-1.219,2.191-1.413,3.067a3.489,3.489,0,0,0,.064,1.377,46.407,46.407,0,0,1,.321,4.7,6.777,6.777,0,0,0-1.54,1c-.386.438-1.862,2.692-1.862,2.692a4.819,4.819,0,0,1-2.055,2.066c-1.413.689-2.826.689-4.175,1.44s-1.349,1.376-2.569,1.689a9.526,9.526,0,0,1-2.89.25c-1.028,0-3.339,1.5-3.339,1.5s-2.505.814-2.633,2.379.257,2.066-.707,3.38-2.441,2.755-3.146,3.756a30.115,30.115,0,0,0-1.734,3.13l-.449,4.319a17.958,17.958,0,0,0,1.091,3.693c.449.564,1.99,1.628,2.505,2.755s3.788,2.567,4.109,2.88a27.448,27.448,0,0,1,2.183,2.817c.322.562,1.22,2.5,1.22,2.5l1.67,2a10.876,10.876,0,0,0,.514,3.568,16.052,16.052,0,0,0,1.669,2.88c.514.939,1.477,1.753,1.477,2.442s.771,1.377.193,1.941a12.383,12.383,0,0,1-1.284,1.063s-1.092-1.314-2.184-1.063a23.079,23.079,0,0,0-2.7.939,13,13,0,0,1-3.339.312l-2.954-1.251H954.37s-4.046,3.755-4.3,4.068a12.684,12.684,0,0,0-.835,1.69l2.055,1.816,3.211,1.877a6.833,6.833,0,0,1,1.927,2.066c.77,1.315,1.156,1.315,1.734,2.5s1.091,1.44,1.219,2.191a6.946,6.946,0,0,1,.065,2.628c-.193,1.127-.963,1.315-.193,2.191s1.092,1.627,2.183,1.877,1.67-.249,2.183.689,1.029,2,1.029,2,.449,1.377.835,2.316A6.946,6.946,0,0,0,966.7,280.6s.836.939.836,1.565a7.145,7.145,0,0,1-.771,2.065l-2.826,3.758v0c.2.929.384-1.637.767,1.627s.523,3.31,1.219,4.123a24.478,24.478,0,0,1,2,2.949,23.879,23.879,0,0,1,1.219,3.067l-.836,2.694a10.024,10.024,0,0,0,.2,2.44c.255,1.127.7.941.964,2.567s1.022,1.869,1.532,3.437.964,3.008.964,3.008-1.6,5.134-1.218,5.889,1.161,1,1.218,2.567.639,2.183.326,3.751a18.416,18.416,0,0,0-.326,3.253s-.452,1.812-.638,2.567c-.156.594-1.1,3.056-1.5,4.077a2.38,2.38,0,0,1,.741.081,2.38,2.38,0,0,0-.741-.081l-.176.452c.488.186.94.372.94.372s.778,1.672,1.464,3.17a23.415,23.415,0,0,0,1.626,2.672,18.787,18.787,0,0,1,1.533,2.59c.255.836.86,1.254.175,2.334s-1.545,2.927-1.545,2.927a9.874,9.874,0,0,0-1.452,2.416,6.3,6.3,0,0,0-.337,2.254,4.216,4.216,0,0,0,1.022,2.253,3.506,3.506,0,0,0,1.545.592c.979.156.558-.983,2.849.024l2.97-1.7a17.641,17.641,0,0,1,4.624,1.419c1.284.835,2.4,1.92,3.424,1.836a6.1,6.1,0,0,0,3.168-1.836,13.972,13.972,0,0,0,1.712-2.837c.086-.25-.084-.5.172-2.337s-.428-2.838.428-4.007.428-1.836,1.712-2,1.97.334,2.74-.167a2.132,2.132,0,0,0,.685-2.671c-.514-.918,3.169-.167-1.369-2.087s-5.223-3.172-5.223-3.172l-1.2-2.921-.172-4.424.343-2.42s3.767-4.174,3.767-4.424-.086-2.754-.171-4.089a18.086,18.086,0,0,0-.771-3.422l-2.911-.668a1.812,1.812,0,0,0-.685,1.586,4.213,4.213,0,0,1,.085,2.5,12.048,12.048,0,0,0-.6,1.836s-1.713,1.335-2.141,1.084-1.37-.167-1.8-1.418-1.113-2.337-.771-3.422.857-2.087,1.114-2.837a5.28,5.28,0,0,0,.428-1.336c0-.334-.686-.751-1.285-1s-1.8-.835-1.8-.835l-1.284-2.17s-.085-3.171.343-4.006a29.427,29.427,0,0,1,1.627-2.5,12.535,12.535,0,0,0,2.569-2.671l1.455-1.919.335-1.586,1.892-1.336-.343-10.433s-.856,0-1.2-2.17-1.044-3.338-.351-4.34a7.328,7.328,0,0,0,.95-2.5l4.5-.758-.041,0,4.623-12.765s7.793-9.012,7.955-9.269,2.916-3.17,2.916-3.17l4.448-10.349,1.894-1.754,1.37-1.754a10.252,10.252,0,0,1-.43-1.579,19.584,19.584,0,0,0-2.148-2.753l1.208-6.434,2.613-3.833V212.39l4.658-7.433.384-.174c-.245.011-4.158.186-4.658.674C1018.712,205.955,1018.027,205.537,1017.26,205.293Z"
							transform="translate(-5.938 -1.114)"
						/>
						<path
							className="ad-item-1821"
							d="M989.174,279.73c-.694,1,.008,2.17.351,4.34s1.2,2.17,1.2,2.17l.343,10.433-1.892,1.336-.334,1.586-1.456,1.919a12.535,12.535,0,0,1-2.569,2.671,29.427,29.427,0,0,0-1.627,2.5c-.428.835-.343,4.006-.343,4.006l1.284,2.17s1.2.584,1.8.835,1.285.668,1.285,1a5.28,5.28,0,0,1-.428,1.336c-.257.751-.771,1.752-1.114,2.837s.343,2.17.771,3.422,1.37,1.168,1.8,1.418,2.141-1.084,2.141-1.084a12.048,12.048,0,0,1,.6-1.836,4.213,4.213,0,0,0-.085-2.5,1.812,1.812,0,0,1,.685-1.586l2.911.668a18,18,0,0,1,.771,3.422c.085,1.336.171,3.839.171,4.089s-3.767,4.424-3.767,4.424l-.343,2.421.172,4.423,1.2,2.922s.685,1.252,5.223,3.171.857,1.169,1.37,2.087A2.132,2.132,0,0,1,998.6,347c-.77.5-1.455,0-2.74.167s-.857.834-1.712,2-.171,2.17-.428,4.007-.085,2.087-.171,2.337a14.036,14.036,0,0,1-1.713,2.837,6.1,6.1,0,0,1-3.168,1.836c-1.028.083-2.141-1-3.424-1.836a17.641,17.641,0,0,0-4.624-1.419l-2.969,1.7c.1.044.2.086.309.139a32.083,32.083,0,0,1,3.949,2.171,14.766,14.766,0,0,1,2.312,1.835s.848,1.08,1.451,1.835.43,1.336,2.056,1.834,3.508.918,3.508.918a10.185,10.185,0,0,1,3,.337c1.371.417,1.627.662,2.486.836a8.164,8.164,0,0,0,1.37.163l1.8-1.417,1.023-2.172s-.082-.917,2.055-1,.6-.755,3.253-.162a24.179,24.179,0,0,1,4.368,1.079,14.865,14.865,0,0,0,3.251.755s-.163-2.171.86-1.591,1.8.58,1.8,1.591.337,1.243.256,2.079a11.488,11.488,0,0,0,.011,1.835l2.265,1.254s1.15-.58,1.917,1.835,1.289,4.007,1.289,4.007,1.2,1.417,1.452,1.835a10.53,10.53,0,0,1,1.464,3.682,15.408,15.408,0,0,1-.175,4.25c-.348,2.091-.174,2.59-.511,4.007s.081,1.5-.349,2.091-1.37.825-.859,2,.348,1.5,1.37,2.091,1.463.081,3,1,1.464.488,2.312,1.208.686,1.382,2.485,1.463,1.289-.8,3.171-.395,3.937.731,3.937.731h1.452s.348-.754.685,1.917l.349,2.671,3.426.58c.255-.58.429-1.08.94-1.161s2.486,1.417,2.486,1.417a26.293,26.293,0,0,0,2.647.58,6.733,6.733,0,0,0,2.4-.58c.511-.337.848-.755,1.626-1.417s.337-1.592.511-2.172a9.133,9.133,0,0,1,.6-2.334,2.85,2.85,0,0,1,1.37-.592l1.963,1.928a12.7,12.7,0,0,0,1.545-.837c.94-.592.511-1.336.511-1.8a21.851,21.851,0,0,1,.349-2.207l1.532-.674s.941,1.255,1.2,1.51a10.435,10.435,0,0,0,2.23.58l3-1.173s-1.626-1.08-1.278-2.416a2.98,2.98,0,0,0-.174-2.172l-4.8-6.1s-.686-6.249-.686-6.586a12.7,12.7,0,0,0-2.659-3.09c-.418-.174-3.333,1.08-3.333,1.08l-8.734.082-.686-1.08.6-2.253-3-2.916.766-3.263a20.623,20.623,0,0,0-.254-2.916,31.25,31.25,0,0,1-1.035-3.844c0-.418.941-8.432.941-8.432l1.115-7.678a19.171,19.171,0,0,1,2.312-2.171c.255,0,1.37,1.336,2.485-.418s-.337-5.331-.337-5.587a20.488,20.488,0,0,1,.592-2.416c.174-.511-.941-2.59-1.115-3.171s-.766-6.1-.766-6.6-.175-3.925-.175-3.925l-16.1-14.275s-5.214-25.2-5.308-25.621a9.776,9.776,0,0,0-1.452-2.834c-.255,0-3.6-1.092-4.111-1.092a7.1,7.1,0,0,0-3.078,1.174,8.55,8.55,0,0,1-2.66,1.08l-1.115-1.835a22.616,22.616,0,0,0,.6-2.834c0-.58-.43-.917-.86-1.336a7.721,7.721,0,0,1-1.544-2.508c-.082-.581-.337-2.079-.337-2.079l-3.426.417s.174,2.16-.86,2.5a14.14,14.14,0,0,1-2.648.581c-.255,0-1.2,1.254-1.626,1.928s-.523,1.08-1.033,1.254-9.543.792-9.971.822l-4.5.758a7.328,7.328,0,0,1-.95,2.5"
							transform="translate(-6.116 -1.687)"
						/>
						<path
							className="ae-item-1821"
							d="M989.174,279.73c-.694,1,.008,2.17.351,4.34s1.2,2.17,1.2,2.17l.343,10.433-1.892,1.336-.334,1.586-1.456,1.919a12.535,12.535,0,0,1-2.569,2.671,29.427,29.427,0,0,0-1.627,2.5c-.428.835-.343,4.006-.343,4.006l1.284,2.17s1.2.584,1.8.835,1.285.668,1.285,1a5.28,5.28,0,0,1-.428,1.336c-.257.751-.771,1.752-1.114,2.837s.343,2.17.771,3.422,1.37,1.168,1.8,1.418,2.141-1.084,2.141-1.084a12.048,12.048,0,0,1,.6-1.836,4.213,4.213,0,0,0-.085-2.5,1.812,1.812,0,0,1,.685-1.586l2.911.668a18,18,0,0,1,.771,3.422c.085,1.336.171,3.839.171,4.089s-3.767,4.424-3.767,4.424l-.343,2.421.172,4.423,1.2,2.922s.685,1.252,5.223,3.171.857,1.169,1.37,2.087A2.132,2.132,0,0,1,998.6,347c-.77.5-1.455,0-2.74.167s-.857.834-1.712,2-.171,2.17-.428,4.007-.085,2.087-.171,2.337a14.036,14.036,0,0,1-1.713,2.837,6.1,6.1,0,0,1-3.168,1.836c-1.028.083-2.141-1-3.424-1.836a17.641,17.641,0,0,0-4.624-1.419l-2.969,1.7c.1.044.2.086.309.139a32.083,32.083,0,0,1,3.949,2.171,14.766,14.766,0,0,1,2.312,1.835s.848,1.08,1.451,1.835.43,1.336,2.056,1.834,3.508.918,3.508.918a10.185,10.185,0,0,1,3,.337c1.371.417,1.627.662,2.486.836a8.164,8.164,0,0,0,1.37.163l1.8-1.417,1.023-2.172s-.082-.917,2.055-1,.6-.755,3.253-.162a24.179,24.179,0,0,1,4.368,1.079,14.865,14.865,0,0,0,3.251.755s-.163-2.171.86-1.591,1.8.58,1.8,1.591.337,1.243.256,2.079a11.488,11.488,0,0,0,.011,1.835l2.265,1.254s1.15-.58,1.917,1.835,1.289,4.007,1.289,4.007,1.2,1.417,1.452,1.835a10.53,10.53,0,0,1,1.464,3.682,15.408,15.408,0,0,1-.175,4.25c-.348,2.091-.174,2.59-.511,4.007s.081,1.5-.349,2.091-1.37.825-.859,2,.348,1.5,1.37,2.091,1.463.081,3,1,1.464.488,2.312,1.208.686,1.382,2.485,1.463,1.289-.8,3.171-.395,3.937.731,3.937.731h1.452s.348-.754.685,1.917l.349,2.671,3.426.58c.255-.58.429-1.08.94-1.161s2.486,1.417,2.486,1.417a26.293,26.293,0,0,0,2.647.58,6.733,6.733,0,0,0,2.4-.58c.511-.337.848-.755,1.626-1.417s.337-1.592.511-2.172a9.133,9.133,0,0,1,.6-2.334,2.85,2.85,0,0,1,1.37-.592l1.963,1.928a12.7,12.7,0,0,0,1.545-.837c.94-.592.511-1.336.511-1.8a21.851,21.851,0,0,1,.349-2.207l1.532-.674s.941,1.255,1.2,1.51a10.435,10.435,0,0,0,2.23.58l3-1.173s-1.626-1.08-1.278-2.416a2.98,2.98,0,0,0-.174-2.172l-4.8-6.1s-.686-6.249-.686-6.586a12.7,12.7,0,0,0-2.659-3.09c-.418-.174-3.333,1.08-3.333,1.08l-8.734.082-.686-1.08.6-2.253-3-2.916.766-3.263a20.623,20.623,0,0,0-.254-2.916,31.25,31.25,0,0,1-1.035-3.844c0-.418.941-8.432.941-8.432l1.115-7.678a19.171,19.171,0,0,1,2.312-2.171c.255,0,1.37,1.336,2.485-.418s-.337-5.331-.337-5.587a20.488,20.488,0,0,1,.592-2.416c.174-.511-.941-2.59-1.115-3.171s-.766-6.1-.766-6.6-.175-3.925-.175-3.925l-16.1-14.275s-5.214-25.2-5.308-25.621a9.776,9.776,0,0,0-1.452-2.834c-.255,0-3.6-1.092-4.111-1.092a7.1,7.1,0,0,0-3.078,1.174,8.55,8.55,0,0,1-2.66,1.08l-1.115-1.835a22.616,22.616,0,0,0,.6-2.834c0-.58-.43-.917-.86-1.336a7.721,7.721,0,0,1-1.544-2.508c-.082-.581-.337-2.079-.337-2.079l-3.426.417s.174,2.16-.86,2.5a14.14,14.14,0,0,1-2.648.581c-.255,0-1.2,1.254-1.626,1.928s-.523,1.08-1.033,1.254-9.543.792-9.971.822l-4.5.758A7.328,7.328,0,0,1,989.174,279.73Z"
							transform="translate(-6.116 -1.687)"
						/>
						<path
							className="aa-item-1821"
							d="M882.216,186.179c-.325.7-.384.813,0,1.881s.906,2.311.906,2.311a2.716,2.716,0,0,1,.917,1.382,3.752,3.752,0,0,1-.406,1.94l-1.684,1.7a2.9,2.9,0,0,0,.267,1.754,20.968,20.968,0,0,0,1.162,2l2.949,2.254,2.7,1.312s.2.755,1.858,1.51,1.358.186,2.636,1.056,1.8,1.255,2.567,1.882a10.244,10.244,0,0,0,2.765,1.568c1.219.5-.059-1.627,1.672,1,1.044,1.579,1.649,2.392,1.928,2.892l5.818-9.152.082-2.753a11.43,11.43,0,0,1,1.638-2.845c.766-.743,1.533-1.417,1.533-1.417a15.817,15.817,0,0,0,1.37-1.754,4.983,4.983,0,0,0,.418-1.754v-3.5s-.071-1.173,0-2.845a22.843,22.843,0,0,0,0-2.671,17.852,17.852,0,0,1-.5-3.253,5.739,5.739,0,0,1,.337-2.753,4.962,4.962,0,0,0,0-2.508c-.163-.825.255-1.08,0-2.44s-.941-1.15-1.278-1.568-2.23-2.578-2.23-2.578l-1.765-3.972a3.22,3.22,0,0,0-1.487.29,19.936,19.936,0,0,0-3.508,1.928c-1.115.58-1.893.836-2.23,1.754s0,1.242-1.37,1.579-3.426,1.219-3.508,1.615a9.156,9.156,0,0,1,0,2.148,3.567,3.567,0,0,1-1.033,1.917,14.331,14.331,0,0,1-2.648,0,6.279,6.279,0,0,1-1.626,1.834,12.871,12.871,0,0,1-3.263,2.509c-1.789.917-.674.08-3.159.824l-1.243,3.171a11.1,11.1,0,0,1-.58,1.754"
							transform="translate(-5.517 -1.035)"
						/>
						<path
							className="af-item-1821"
							d="M882.216,186.179c-.325.7-.384.813,0,1.881s.906,2.311.906,2.311a2.716,2.716,0,0,1,.917,1.382,3.752,3.752,0,0,1-.406,1.94l-1.684,1.7a2.9,2.9,0,0,0,.267,1.754,20.968,20.968,0,0,0,1.162,2l2.949,2.254,2.7,1.312s.2.755,1.858,1.51,1.358.186,2.636,1.056,1.8,1.255,2.567,1.882a10.244,10.244,0,0,0,2.765,1.568c1.219.5-.059-1.627,1.672,1,1.044,1.579,1.649,2.392,1.928,2.892l5.818-9.152.082-2.753a11.43,11.43,0,0,1,1.638-2.845c.766-.743,1.533-1.417,1.533-1.417a15.817,15.817,0,0,0,1.37-1.754,4.983,4.983,0,0,0,.418-1.754v-3.5s-.071-1.173,0-2.845a22.843,22.843,0,0,0,0-2.671,17.852,17.852,0,0,1-.5-3.253,5.739,5.739,0,0,1,.337-2.753,4.962,4.962,0,0,0,0-2.508c-.163-.825.255-1.08,0-2.44s-.941-1.15-1.278-1.568-2.23-2.578-2.23-2.578l-1.765-3.972a3.22,3.22,0,0,0-1.487.29,19.936,19.936,0,0,0-3.508,1.928c-1.115.58-1.893.836-2.23,1.754s0,1.242-1.37,1.579-3.426,1.219-3.508,1.615a9.156,9.156,0,0,1,0,2.148,3.567,3.567,0,0,1-1.033,1.917,14.331,14.331,0,0,1-2.648,0,6.279,6.279,0,0,1-1.626,1.834,12.871,12.871,0,0,1-3.263,2.509c-1.789.917-.674.08-3.159.824l-1.243,3.171A11.1,11.1,0,0,1,882.216,186.179Z"
							transform="translate(-5.517 -1.035)"
						/>
						<path
							className="ad-item-1821"
							d="M870.958,226.352a7.485,7.485,0,0,1-.6,1.916,32.394,32.394,0,0,0-1.2,3.752l1.627,2.59h2.741a30.316,30.316,0,0,1,6.155,1c4.2,1.011.349,2.172-.162,3.588s-1.464,1.672-2.916,3.508a12.735,12.735,0,0,0-2.23,3.263c-.685,1.417,1.115,2.416,1.115,2.416a2.878,2.878,0,0,0,1.719-1,4.4,4.4,0,0,1,1.626-1.173l4.7-.337a21.692,21.692,0,0,1,2.833,1.011,21.894,21.894,0,0,1,2.822,2.671,8.548,8.548,0,0,0,2.742,1.5c1.452.418,4.193,1.417,4.193,1.417l1.37,2.834,2.916,2.59s1.881,1.337,1.881,3.032a34.906,34.906,0,0,1-.349,4.065l-.08,4.169a34.241,34.241,0,0,1,1.8,3.09c.337.837,4.878,8.595,4.96,8.85a6.273,6.273,0,0,0,2.741,1.254,16.94,16.94,0,0,1,2.311.5l2.311,1.916,2.683,3.171s1.52,1.336,2.892,2.671a7.89,7.89,0,0,1,2.218,3.345c.86,1.835.175,1.162,0,2.5s-2.138,1.835-2.138,1.835a11.29,11.29,0,0,0-.174,1.834c0,.918.093,4.1.093,4.1v5.005a3.86,3.86,0,0,0,1.022,2.579,43.618,43.618,0,0,1,1.882,4.007c.511,1.429,0,.918,0,2.591s-.686.754-1.8,1.591a6.521,6.521,0,0,1-2.474,1.08,4.191,4.191,0,0,0-1.033,1.754c-.081.754-.429,1.753-.685,1.834s-2.648.337-2.648.337l-3.17,2.416a15.066,15.066,0,0,1-.349,1.591l-1.964,2.973a21.23,21.23,0,0,1,2.219.86l2.4,2.928,2.741,2.416s2.648,1.753,3.589,2.345,0-2.427,2.056,1.337,2.578,4.25,2.659,5.167.86,1.592.43,2.928a16.734,16.734,0,0,0-1.115,3.5c-.175,1.428,2.822,3.345,3.078,3.682s1.115.824,1.289,1.661a5.184,5.184,0,0,1,0,1.754s-2.056,1.173-2.822,1.591a4.171,4.171,0,0,0-1.289,1.162,9.6,9.6,0,0,0-.255,2.171,13.9,13.9,0,0,1,.081,1.417l-3.333,5.6,1.37,4.088a9.677,9.677,0,0,0,1.626,1.5c.686.418,2.312,0,2.822.837a3.642,3.642,0,0,0,1.452,1.254s-.441-2.508.418-2.508,2.16-.163,2.16-.163-.43-2.916-.093-3.171,1.719-.836,2.4-.418,1.1-.162,1.452,1.174,1.452,1.661.511,2.834-1.707,2.253-1.707,2.253a9.713,9.713,0,0,0-.429,1.08,7.578,7.578,0,0,0-.082,1.173,1.815,1.815,0,0,1,0,1.592,9.6,9.6,0,0,0-.686,2.079,4.029,4.029,0,0,0-.429,1.834,6.917,6.917,0,0,0,.429,2.254c0,.035.012.058.012.081v.023l.011.012c.105.29.279.824.569,1.718,1.2,3.682,2.706,5.017,2.683,5.6a11.536,11.536,0,0,0,0,1.672c.059.418,6.4,0,6.4,0l16.1-15.366h.445l1.262-3.914a41.119,41.119,0,0,1,0-4.681c.174-.917-.337-2.171,0-3.09s.174-2.079,1.022-2.752.686-.918,2.149-2.254,2.055-2.091,2.137-2.834.255-2.171.255-2.171l.686-9.269s-.592-1.5-1.278-3.09a28.347,28.347,0,0,0-2.183-3.751v-2.59l.976-3.67,1.207-2.916a13.693,13.693,0,0,1,2.138-.836c.108,0,.783-.081,1.371-.082.4-1.022,1.342-3.482,1.5-4.077.186-.754.638-2.567.638-2.567a18.408,18.408,0,0,1,.326-3.252c.313-1.568-.255-2.2-.326-3.751s-.836-1.824-1.219-2.567,1.219-5.889,1.219-5.889-.452-1.44-.964-3.008-1.277-1.812-1.532-3.437-.709-1.441-.965-2.567a10.055,10.055,0,0,1-.2-2.44l.836-2.694a23.879,23.879,0,0,0-1.219-3.067,24.509,24.509,0,0,0-2-2.949c-.7-.814-.825-.872-1.219-4.123s-.569-.7-.767-1.627-.325-.882-1.161-1.382-1.6-.186-2.115-.255a6.331,6.331,0,0,1-2.508-1.683c-1.092-1-1.858-.569-3.589-.755s-1.869.186-4.622.5-1.545-1.185-2.183-2.566-2.126-1.627-3.218-2.811a5.008,5.008,0,0,0-1.858-1.44s-2.183-2.126-3.914-3.821-1.614-.627-2.31-.627a6.925,6.925,0,0,1-2-.5,12.022,12.022,0,0,1-1.8-1.626,11.051,11.051,0,0,0-2.626-.627c-.905,0-1.289,1.753-1.289,1.753a6.227,6.227,0,0,1-2.183-1.126c-.964-.813-1.023-1.5-1.6-2.381a34.841,34.841,0,0,1-1.672-3.31s-3.531-2.451-4.948-3.322-6.3-3.566-6.737-4.378a7.269,7.269,0,0,1-.906-2.323c-.441-1.567-.568-2-.568-2l.441-2.822-.837-3.38s-.255-1.568-.5-2.881-.4-2.38-.4-2.38a25.758,25.758,0,0,1,.326-2.753c.267-1.556-.326-.814-.906-1.778s-1.219-.975-1.533-1.788-1.034-3.322-1.034-3.322a5.5,5.5,0,0,1,1.417-2.126,7.391,7.391,0,0,0,2.056-3.194,5.694,5.694,0,0,0-.453-1.754c-.127-.557-2.056-1.684-2.056-1.684a31.668,31.668,0,0,1-3.275-1.626c-.964-.627-1.346-.813-1.73-1.127s-.453-1.567-.453-1.567l-.639-2.44a27.435,27.435,0,0,0,2.5-3.252.989.989,0,0,0-.186-.732v-.011c-.278-.5-.882-1.313-1.928-2.892-1.73-2.625-.453-.5-1.672-1a10.248,10.248,0,0,1-2.765-1.567,31.732,31.732,0,0,0-2.567-1.882c-1.277-.871-.964-.313-2.636-1.056s-1.858-1.51-1.858-1.51l-2.694-1.312-2.95-2.254a20.968,20.968,0,0,1-1.162-2,2.9,2.9,0,0,1-.266-1.754l1.683-1.7a3.752,3.752,0,0,0,.406-1.94,2.716,2.716,0,0,0-.917-1.382s-.523-1.242-.906-2.311-.325-1.185,0-1.881a11.032,11.032,0,0,0,.581-1.754l1.242-3.171c-2.485.755-1.881.093-2.834,1.51a21.779,21.779,0,0,0-1.277,2.416c-.6,1-.093,1.336-1.37,1.754s-2.4-.163-3,.337-.348,1.161-2.137,2.59-1.545,2.079-2.741,2.416-1.975-.418-2.486.5-1.881,1.092-.511,1.917,2.474,1.173,1.533,3.263-2.218,2.334-2.567,3.253,0,2.171-1.37,2.671-2.822.662-2.9,1.579-.778,1.684.592,2.091,1.626-.337,2.567-1.08,1.289-1.173,1.881-.755.778.581.778,1.336.175,2.172-.348,2.672A4.79,4.79,0,0,1,865.813,211c-.512.081-1.8-.418-1.964-.174s-2.206.917-1.881,1.916,1.358,1.254.417,2.172-3,1.011-4.111,2.253-1.37,2.091-.337,2.753.941-.081,2.23-1.336,1.278-1.661,2.567-2.334,1.882-2.834,3.171-3,1.789.326,1.881,2,1.452,2.171.163,2.753-2.044.255-2.473.58-.349.837-1.035,1.591l4.715,1.417Z"
							transform="translate(-5.363 -1.139)"
						/>
						<path
							className="ae-item-1821"
							d="M870.958,226.352a7.485,7.485,0,0,1-.6,1.916,32.394,32.394,0,0,0-1.2,3.752l1.627,2.59h2.741a30.316,30.316,0,0,1,6.155,1c4.2,1.011.349,2.172-.162,3.588s-1.464,1.672-2.916,3.508a12.735,12.735,0,0,0-2.23,3.263c-.685,1.417,1.115,2.416,1.115,2.416a2.878,2.878,0,0,0,1.719-1,4.4,4.4,0,0,1,1.626-1.173l4.7-.337a21.692,21.692,0,0,1,2.833,1.011,21.894,21.894,0,0,1,2.822,2.671,8.548,8.548,0,0,0,2.742,1.5c1.452.418,4.193,1.417,4.193,1.417l1.37,2.834,2.916,2.59s1.881,1.337,1.881,3.032a34.906,34.906,0,0,1-.349,4.065l-.08,4.169a34.241,34.241,0,0,1,1.8,3.09c.337.837,4.878,8.595,4.96,8.85a6.273,6.273,0,0,0,2.741,1.254,16.94,16.94,0,0,1,2.311.5l2.311,1.916,2.683,3.171s1.52,1.336,2.892,2.671a7.89,7.89,0,0,1,2.218,3.345c.86,1.835.175,1.162,0,2.5s-2.138,1.835-2.138,1.835a11.29,11.29,0,0,0-.174,1.834c0,.918.093,4.1.093,4.1v5.005a3.86,3.86,0,0,0,1.022,2.579,43.618,43.618,0,0,1,1.882,4.007c.511,1.429,0,.918,0,2.591s-.686.754-1.8,1.591a6.521,6.521,0,0,1-2.474,1.08,4.191,4.191,0,0,0-1.033,1.754c-.081.754-.429,1.753-.685,1.834s-2.648.337-2.648.337l-3.17,2.416a15.066,15.066,0,0,1-.349,1.591l-1.964,2.973a21.23,21.23,0,0,1,2.219.86l2.4,2.928,2.741,2.416s2.648,1.753,3.589,2.345,0-2.427,2.056,1.337,2.578,4.25,2.659,5.167.86,1.592.43,2.928a16.734,16.734,0,0,0-1.115,3.5c-.175,1.428,2.822,3.345,3.078,3.682s1.115.824,1.289,1.661a5.184,5.184,0,0,1,0,1.754s-2.056,1.173-2.822,1.591a4.171,4.171,0,0,0-1.289,1.162,9.6,9.6,0,0,0-.255,2.171,13.9,13.9,0,0,1,.081,1.417l-3.333,5.6,1.37,4.088a9.677,9.677,0,0,0,1.626,1.5c.686.418,2.312,0,2.822.837a3.642,3.642,0,0,0,1.452,1.254s-.441-2.508.418-2.508,2.16-.163,2.16-.163-.43-2.916-.093-3.171,1.719-.836,2.4-.418,1.1-.162,1.452,1.174,1.452,1.661.511,2.834-1.707,2.253-1.707,2.253a9.713,9.713,0,0,0-.429,1.08,7.578,7.578,0,0,0-.082,1.173,1.815,1.815,0,0,1,0,1.592,9.6,9.6,0,0,0-.686,2.079,4.029,4.029,0,0,0-.429,1.834,6.917,6.917,0,0,0,.429,2.254c0,.035.012.058.012.081v.023l.011.012c.105.29.279.824.569,1.718,1.2,3.682,2.706,5.017,2.683,5.6a11.536,11.536,0,0,0,0,1.672c.059.418,6.4,0,6.4,0l16.1-15.366h.445l1.262-3.914a41.119,41.119,0,0,1,0-4.681c.174-.917-.337-2.171,0-3.09s.174-2.079,1.022-2.752.686-.918,2.149-2.254,2.055-2.091,2.137-2.834.255-2.171.255-2.171l.686-9.269s-.592-1.5-1.278-3.09a28.347,28.347,0,0,0-2.183-3.751v-2.59l.976-3.67,1.207-2.916a13.693,13.693,0,0,1,2.138-.836c.108,0,.783-.081,1.371-.082.4-1.022,1.342-3.482,1.5-4.077.186-.754.638-2.567.638-2.567a18.408,18.408,0,0,1,.326-3.252c.313-1.568-.255-2.2-.326-3.751s-.836-1.824-1.219-2.567,1.219-5.889,1.219-5.889-.452-1.44-.964-3.008-1.277-1.812-1.532-3.437-.709-1.441-.965-2.567a10.055,10.055,0,0,1-.2-2.44l.836-2.694a23.879,23.879,0,0,0-1.219-3.067,24.509,24.509,0,0,0-2-2.949c-.7-.814-.825-.872-1.219-4.123s-.569-.7-.767-1.627-.325-.882-1.161-1.382-1.6-.186-2.115-.255a6.331,6.331,0,0,1-2.508-1.683c-1.092-1-1.858-.569-3.589-.755s-1.869.186-4.622.5-1.545-1.185-2.183-2.566-2.126-1.627-3.218-2.811a5.008,5.008,0,0,0-1.858-1.44s-2.183-2.126-3.914-3.821-1.614-.627-2.31-.627a6.925,6.925,0,0,1-2-.5,12.022,12.022,0,0,1-1.8-1.626,11.051,11.051,0,0,0-2.626-.627c-.905,0-1.289,1.753-1.289,1.753a6.227,6.227,0,0,1-2.183-1.126c-.964-.813-1.023-1.5-1.6-2.381a34.841,34.841,0,0,1-1.672-3.31s-3.531-2.451-4.948-3.322-6.3-3.566-6.737-4.378a7.269,7.269,0,0,1-.906-2.323c-.441-1.567-.568-2-.568-2l.441-2.822-.837-3.38s-.255-1.568-.5-2.881-.4-2.38-.4-2.38a25.758,25.758,0,0,1,.326-2.753c.267-1.556-.326-.814-.906-1.778s-1.219-.975-1.533-1.788-1.034-3.322-1.034-3.322a5.5,5.5,0,0,1,1.417-2.126,7.391,7.391,0,0,0,2.056-3.194,5.694,5.694,0,0,0-.453-1.754c-.127-.557-2.056-1.684-2.056-1.684a31.668,31.668,0,0,1-3.275-1.626c-.964-.627-1.346-.813-1.73-1.127s-.453-1.567-.453-1.567l-.639-2.44a27.435,27.435,0,0,0,2.5-3.252.989.989,0,0,0-.186-.732v-.011c-.278-.5-.882-1.313-1.928-2.892-1.73-2.625-.453-.5-1.672-1a10.248,10.248,0,0,1-2.765-1.567,31.732,31.732,0,0,0-2.567-1.882c-1.277-.871-.964-.313-2.636-1.056s-1.858-1.51-1.858-1.51l-2.694-1.312-2.95-2.254a20.968,20.968,0,0,1-1.162-2,2.9,2.9,0,0,1-.266-1.754l1.683-1.7a3.752,3.752,0,0,0,.406-1.94,2.716,2.716,0,0,0-.917-1.382s-.523-1.242-.906-2.311-.325-1.185,0-1.881a11.032,11.032,0,0,0,.581-1.754l1.242-3.171c-2.485.755-1.881.093-2.834,1.51a21.779,21.779,0,0,0-1.277,2.416c-.6,1-.093,1.336-1.37,1.754s-2.4-.163-3,.337-.348,1.161-2.137,2.59-1.545,2.079-2.741,2.416-1.975-.418-2.486.5-1.881,1.092-.511,1.917,2.474,1.173,1.533,3.263-2.218,2.334-2.567,3.253,0,2.171-1.37,2.671-2.822.662-2.9,1.579-.778,1.684.592,2.091,1.626-.337,2.567-1.08,1.289-1.173,1.881-.755.778.581.778,1.336.175,2.172-.348,2.672A4.79,4.79,0,0,1,865.813,211c-.512.081-1.8-.418-1.964-.174s-2.206.917-1.881,1.916,1.358,1.254.417,2.172-3,1.011-4.111,2.253-1.37,2.091-.337,2.753.941-.081,2.23-1.336,1.278-1.661,2.567-2.334,1.882-2.834,3.171-3,1.789.326,1.881,2,1.452,2.171.163,2.753-2.044.255-2.473.58-.349.837-1.035,1.591l4.715,1.417Z"
							transform="translate(-5.363 -1.139)"
						/>
						<path
							className="ad-item-1821"
							d="M931.921,454.841c2.9,5.017,1.278.337,2.567.093s2.23-1.092,6.759-.175.6,2.334.6,3.345.511,2.916.174,4.75.418,1.337.767,2.928,1.289.243,2.311-.175,1.114-1.834,1.114-1.834l3.253,1.091a4.205,4.205,0,0,1,1.023,2.5c.174,1.672.952,1.255,2.4,1.429a4.37,4.37,0,0,1,2.485.743c1.022.592,2.473,2.171,3.252,2.59s5.227.5,5.227.5,2.822.162,3.682-.418a14.481,14.481,0,0,1,4.448-1.417c.686,0,1.882-.082,1.882-.082l1.718,1.917,2.474-.453,1.975-1.881.6-2.928-.524-3.252a16.481,16.481,0,0,1-.162-4.088c.255-1.336.941-1.672,2.567-3.253a9.279,9.279,0,0,0,1.963-2.508c.43-.581,3.682-.918,3.682-.918s.86.918,1.719,2.009,2.485,1.917,3.159,3-.337,3.588-.337,3.588a7.126,7.126,0,0,1-2.311,1.51c-1.452.58-1.626.743-3.078,2.416s-.523,1.753.162,3.751,3,2.171,4.031,2.508,2.138-1.336,2.485-2.171,0-2.5.511-2.916,3.427.163,4.274-.418a16.344,16.344,0,0,1,2.742-1.417c1.115-.511.174-2.346.174-2.346s.511-2.671.686-3a5.185,5.185,0,0,1,2.485-1.428c1.2-.326,2.915,1.254,3.17,1.254s5.134.5,5.134.5l15.332-16.19s.255-5.168.255-6.005a1.342,1.342,0,0,1,.766-1.173l1.974-1.08a9.563,9.563,0,0,0-.429-2.334,19.021,19.021,0,0,0-1.719-3.09,18.091,18.091,0,0,0-1.881-2.091,6.133,6.133,0,0,1-.686-2.59c-.081-1.08,1.545-.837,1.882-.837s3.17.918,3.17.918l1.8,3.507.337,2.334a8.108,8.108,0,0,0,2.659.929c.941,0,2.393-1.01,3.508-1.753s2.659-1.255,3.345-1.754-.255-1.011-.6-2.254-.859-2.009-.429-2.671a27.533,27.533,0,0,1,2.276-2.508s.128-4.425.036-6.841,0-4.844,0-6.1a4.782,4.782,0,0,1,.348-2.254l-3.426-.58-.348-2.671c-.337-2.671-.686-1.916-.686-1.916H1039.2s-2.056-.337-3.937-.732-1.37.476-3.171.4-1.626-.755-2.485-1.464-.766-.29-2.312-1.208-1.963-.417-3-1-.848-.917-1.37-2.09.429-1.417.86-2,0-.674.348-2.09.163-1.917.512-4.008a15.362,15.362,0,0,0,.174-4.25,10.5,10.5,0,0,0-1.464-3.682c-.255-.418-1.452-1.835-1.452-1.835s-.511-1.58-1.289-4.007-1.916-1.835-1.916-1.835l-2.266-1.254a11.488,11.488,0,0,1-.011-1.835c.081-.836-.255-1.08-.255-2.079s-.767-1.011-1.8-1.591-.86,1.591-.86,1.591a14.9,14.9,0,0,1-3.251-.754,24.081,24.081,0,0,0-4.368-1.08c-2.648-.592-1.115.081-3.252.162s-2.056,1-2.056,1l-1.022,2.172-1.8,1.417a8.174,8.174,0,0,1-1.37-.163c-.86-.174-1.115-.418-2.485-.836a10.191,10.191,0,0,0-3-.337s-1.881-.418-3.508-.918-1.451-1.08-2.055-1.834S983.9,363.2,983.9,363.2a14.668,14.668,0,0,0-2.312-1.834,31.891,31.891,0,0,0-3.949-2.172c-2.647-1.254-2.137,0-3.159-.163a3.5,3.5,0,0,1-1.544-.592,4.215,4.215,0,0,1-1.023-2.253,6.3,6.3,0,0,1,.337-2.254,9.893,9.893,0,0,1,1.452-2.415s.86-1.835,1.545-2.928.082-1.5-.175-2.334a18.921,18.921,0,0,0-1.532-2.59A23.49,23.49,0,0,1,971.909,341c-.685-1.5-1.463-3.171-1.463-3.171s-.453-.186-.941-.372l.176-.452c-.589,0-1.264.081-1.372.081a13.716,13.716,0,0,0-2.137.836l-1.208,2.916-.976,3.67v2.591a28.354,28.354,0,0,1,2.184,3.751c.685,1.591,1.277,3.089,1.277,3.089l-.685,9.269s-.175,1.417-.255,2.172-.686,1.5-2.138,2.834-1.289,1.591-2.148,2.253-.674,1.835-1.022,2.753.174,2.171,0,3.09a40.892,40.892,0,0,0,0,4.681L959.94,384.9h0l-.189.583a6.04,6.04,0,0,0,.765,1.345c.384.372,0,2.753,0,3.5a35.239,35.239,0,0,0,.639,3.891,6.061,6.061,0,0,0,1.162,2.288c.383.337,1.544.964,1.544,1.835s.384.964,0,2.114,4.623.4-.65,2.648-6.807,2.508-6.807,2.508l-2.055,1.627a15.166,15.166,0,0,0-2.056,2.253c-1.022,1.37-1.022,2-2.694,3.508s-1.29,1.869-3.334,3.124-3.984,2.624-3.984,2.624L937.914,421s-.384-.244-3.729,2.508-3.728,4.634-3.078,6.261,1.278,3.124,1.278,3.124l.511,3.008-2.056,1.626-3.078,1.881L927,440.9l-1.243,3.09,2.311,2.508a40.349,40.349,0,0,0,3.856,8.34"
							transform="translate(-5.791 -2.112)"
						/>
						<path
							className="ae-item-1821"
							d="M931.921,454.841c2.9,5.017,1.278.337,2.567.093s2.23-1.092,6.759-.175.6,2.334.6,3.345.511,2.916.174,4.75.418,1.337.767,2.928,1.289.243,2.311-.175,1.114-1.834,1.114-1.834l3.253,1.091a4.205,4.205,0,0,1,1.023,2.5c.174,1.672.952,1.255,2.4,1.429a4.37,4.37,0,0,1,2.485.743c1.022.592,2.473,2.171,3.252,2.59s5.227.5,5.227.5,2.822.162,3.682-.418a14.481,14.481,0,0,1,4.448-1.417c.686,0,1.882-.082,1.882-.082l1.718,1.917,2.474-.453,1.975-1.881.6-2.928-.524-3.252a16.481,16.481,0,0,1-.162-4.088c.255-1.336.941-1.672,2.567-3.253a9.279,9.279,0,0,0,1.963-2.508c.43-.581,3.682-.918,3.682-.918s.86.918,1.719,2.009,2.485,1.917,3.159,3-.337,3.588-.337,3.588a7.126,7.126,0,0,1-2.311,1.51c-1.452.58-1.626.743-3.078,2.416s-.523,1.753.162,3.751,3,2.171,4.031,2.508,2.138-1.336,2.485-2.171,0-2.5.511-2.916,3.427.163,4.274-.418a16.344,16.344,0,0,1,2.742-1.417c1.115-.511.174-2.346.174-2.346s.511-2.671.686-3a5.185,5.185,0,0,1,2.485-1.428c1.2-.326,2.915,1.254,3.17,1.254s5.134.5,5.134.5l15.332-16.19s.255-5.168.255-6.005a1.342,1.342,0,0,1,.766-1.173l1.974-1.08a9.563,9.563,0,0,0-.429-2.334,19.021,19.021,0,0,0-1.719-3.09,18.091,18.091,0,0,0-1.881-2.091,6.133,6.133,0,0,1-.686-2.59c-.081-1.08,1.545-.837,1.882-.837s3.17.918,3.17.918l1.8,3.507.337,2.334a8.108,8.108,0,0,0,2.659.929c.941,0,2.393-1.01,3.508-1.753s2.659-1.255,3.345-1.754-.255-1.011-.6-2.254-.859-2.009-.429-2.671a27.533,27.533,0,0,1,2.276-2.508s.128-4.425.036-6.841,0-4.844,0-6.1a4.782,4.782,0,0,1,.348-2.254l-3.426-.58-.348-2.671c-.337-2.671-.686-1.916-.686-1.916H1039.2s-2.056-.337-3.937-.732-1.37.476-3.171.4-1.626-.755-2.485-1.464-.766-.29-2.312-1.208-1.963-.417-3-1-.848-.917-1.37-2.09.429-1.417.86-2,0-.674.348-2.09.163-1.917.512-4.008a15.362,15.362,0,0,0,.174-4.25,10.5,10.5,0,0,0-1.464-3.682c-.255-.418-1.452-1.835-1.452-1.835s-.511-1.58-1.289-4.007-1.916-1.835-1.916-1.835l-2.266-1.254a11.488,11.488,0,0,1-.011-1.835c.081-.836-.255-1.08-.255-2.079s-.767-1.011-1.8-1.591-.86,1.591-.86,1.591a14.9,14.9,0,0,1-3.251-.754,24.081,24.081,0,0,0-4.368-1.08c-2.648-.592-1.115.081-3.252.162s-2.056,1-2.056,1l-1.022,2.172-1.8,1.417a8.174,8.174,0,0,1-1.37-.163c-.86-.174-1.115-.418-2.485-.836a10.191,10.191,0,0,0-3-.337s-1.881-.418-3.508-.918-1.451-1.08-2.055-1.834S983.9,363.2,983.9,363.2a14.668,14.668,0,0,0-2.312-1.834,31.891,31.891,0,0,0-3.949-2.172c-2.647-1.254-2.137,0-3.159-.163a3.5,3.5,0,0,1-1.544-.592,4.215,4.215,0,0,1-1.023-2.253,6.3,6.3,0,0,1,.337-2.254,9.893,9.893,0,0,1,1.452-2.415s.86-1.835,1.545-2.928.082-1.5-.175-2.334a18.921,18.921,0,0,0-1.532-2.59A23.49,23.49,0,0,1,971.909,341c-.685-1.5-1.463-3.171-1.463-3.171s-.453-.186-.941-.372l.176-.452c-.589,0-1.264.081-1.372.081a13.716,13.716,0,0,0-2.137.836l-1.208,2.916-.976,3.67v2.591a28.354,28.354,0,0,1,2.184,3.751c.685,1.591,1.277,3.089,1.277,3.089l-.685,9.269s-.175,1.417-.255,2.172-.686,1.5-2.138,2.834-1.289,1.591-2.148,2.253-.674,1.835-1.022,2.753.174,2.171,0,3.09a40.892,40.892,0,0,0,0,4.681L959.94,384.9h0l-.189.583a6.04,6.04,0,0,0,.765,1.345c.384.372,0,2.753,0,3.5a35.239,35.239,0,0,0,.639,3.891,6.061,6.061,0,0,0,1.162,2.288c.383.337,1.544.964,1.544,1.835s.384.964,0,2.114,4.623.4-.65,2.648-6.807,2.508-6.807,2.508l-2.055,1.627a15.166,15.166,0,0,0-2.056,2.253c-1.022,1.37-1.022,2-2.694,3.508s-1.29,1.869-3.334,3.124-3.984,2.624-3.984,2.624L937.914,421s-.384-.244-3.729,2.508-3.728,4.634-3.078,6.261,1.278,3.124,1.278,3.124l.511,3.008-2.056,1.626-3.078,1.881L927,440.9l-1.243,3.09,2.311,2.508A40.349,40.349,0,0,0,931.921,454.841Z"
							transform="translate(-5.791 -2.112)"
						/>
						<path
							className="ad-item-1821"
							d="M817.047,299.7c0,.418.86,2.927,1.115,3.763s.6,2.59,1.289,3.252.686.755,3,1.417,2.392.255,3.762.917,2.4.081,2.485,1.754-.336,2.753,0,3.926,1.2,2.753,0,4.344-2.23,2.671-2.23,2.671A39.07,39.07,0,0,0,822.528,325a10.134,10.134,0,0,1-1.451,1.672,32.469,32.469,0,0,0-2.311,3.752l-.6,3.425-1.452,2.5a4.014,4.014,0,0,0-1.022,1.835c-.43,1.336-.43,6.435-.524,6.759a15.849,15.849,0,0,1-2.822,4.262,10.4,10.4,0,0,0-2.659,5.505,44.069,44.069,0,0,0-.163,4.507c0,1.417-.348,4.17,0,5.424s.337,3.008,1.278,3.926a24.329,24.329,0,0,1,2.4,3.252s1.023,1.672,1.707,2.59,4.031,5.007,4.031,5.007h29.617s7.631-11.185,7.794-11.511.6-3.762.6-3.762a23.417,23.417,0,0,1,.686-2.916,10.185,10.185,0,0,1,1.2-2.428,4.118,4.118,0,0,1,1.544-1.336,19,19,0,0,1,2.056-.743s2.056,1.08,2.567,1.336a3.633,3.633,0,0,0,1.963.743,8.754,8.754,0,0,0,1.719,0,5.7,5.7,0,0,0,.174-1.672,10.67,10.67,0,0,1,.43-2.578,2.967,2.967,0,0,1,1.37-1.51,6.634,6.634,0,0,1,2.31-.662c1.1-.163,1.882-.337,1.882-.337s1.277,0,2.137-1.916-.685-.5,1.452-3.09a10.791,10.791,0,0,1,2.916-2.834,7.584,7.584,0,0,0,1.975-2.508s-.778-.663.418-1.672,1.115-1.417,2.149-1.162a7.343,7.343,0,0,0,2.741.5,14.032,14.032,0,0,1,3,.337s3.334.5,4.449,0a6.618,6.618,0,0,0,1.881-1.336l2.056-.092a4.434,4.434,0,0,0,2.4-.244c.767-.5.941-1.358,1.789-2.52a12.864,12.864,0,0,0,1.464-2.822,4.109,4.109,0,0,1,3.426-.5c.336.105.65.2.94.3l1.963-2.973a14.8,14.8,0,0,0,.349-1.591c.081-.662-.778-1.417-.778-2s.429-.755.952-1.174a2.987,2.987,0,0,0,.849-2.171c0-.825-.849-1.08-2.219-1.835s-1.289.592-1.719.255a9.444,9.444,0,0,0-2.567-1.754c-2.137-1.173-5.052-2.833-5.388-3.425s-2.66-1-2.66-1-1.626.081-3.078,0a1.949,1.949,0,0,0-1.893,1.416,3.7,3.7,0,0,1-2.056,1.929c-1.533.58-1.452,1-3.252,1.579s-1.882-.243-1.964-.5a16.892,16.892,0,0,1,0-2.171l-1.626-2.916-2.311.663-2.485-.081a6.146,6.146,0,0,1-1.289-1.754c-.255-.755,0-1.336.174-2.509a13.643,13.643,0,0,0,0-2.671,4.348,4.348,0,0,0-.348-1.661,26.906,26.906,0,0,0-.674-3.09,26.255,26.255,0,0,1-.6-3.925l-1.719-1.58-1.2-1.254a17.287,17.287,0,0,1,.255-2.254c.175-.592.523-.592,1.719-.673s3.937-.244,3.937-.244l3.334-.917,1.893-.6.429-2.242a21.891,21.891,0,0,0,.511-3.333c0-1.092-.348-1.254-.685-2.172s-.778-.58-2.056-.917a12.6,12.6,0,0,0-3.09-.255,5.415,5.415,0,0,1-.766-1.58c-.081-.58-.174-2.171-.174-2.171a17.784,17.784,0,0,0-2.9-1.835c-2.15-1.173-2.567-1.336-2.567-1.336a12,12,0,0,0-2.23-.674,2.3,2.3,0,0,1-1.975-1.579,8.1,8.1,0,0,0-.848-1.254c-.267-.418-.524-1.417-1.035-2.254s-.86-.836-1.626-1.336a6.74,6.74,0,0,0-2.056-.917,9.115,9.115,0,0,0-2.915-.337,7.605,7.605,0,0,1-2.311-.743l-1.707-1.174v-4.064c-.418-.035-.535-.4-1.08-.4a2.467,2.467,0,0,0-2,.778c-.894.72-.418,1.662-2.369,1.186s-3.984.035-3.113-1.057.384-.384,1.6-.755,2.114-1.185.871-1.347a15.066,15.066,0,0,0-2.962.07c-.929.023-.673.592-1.056.836s-.639.186-1.568-.023a4.673,4.673,0,0,0-2.765.278c-.964.349-.836.186-1.452,1.278s.233,1.661-1.242,1.533-.837.255-2,.348-.477-.441-1.766.221-1.44.151-2.346,1.278-.929.662-1.44,2.138.929,1.185-.743,1.939-1.766.5-2.625,1.186-.523.278-1,1.312.128,1.127,0,2.916.059,1.661-.511,2.6-1.091.813-1.893,1.87-1.707.476-2.032,1.51a6.522,6.522,0,0,1-.929,2.032c-.709,1.278-.6.557-.929,1.94s.638,1.405-.872,1.94a11.569,11.569,0,0,1-2.753.685c-.488.071-1.162.163-1.835,1.417s.326,1.092-.928,1.847a5.684,5.684,0,0,1-1.557.615l1.847,3.357s.848,4.332.848,4.75"
							transform="translate(-5.063 -1.629)"
						/>
						<path
							className="ae-item-1821"
							d="M817.047,299.7c0,.418.86,2.927,1.115,3.763s.6,2.59,1.289,3.252.686.755,3,1.417,2.392.255,3.762.917,2.4.081,2.485,1.754-.336,2.753,0,3.926,1.2,2.753,0,4.344-2.23,2.671-2.23,2.671A39.07,39.07,0,0,0,822.528,325a10.134,10.134,0,0,1-1.451,1.672,32.469,32.469,0,0,0-2.311,3.752l-.6,3.425-1.452,2.5a4.014,4.014,0,0,0-1.022,1.835c-.43,1.336-.43,6.435-.524,6.759a15.849,15.849,0,0,1-2.822,4.262,10.4,10.4,0,0,0-2.659,5.505,44.069,44.069,0,0,0-.163,4.507c0,1.417-.348,4.17,0,5.424s.337,3.008,1.278,3.926a24.329,24.329,0,0,1,2.4,3.252s1.023,1.672,1.707,2.59,4.031,5.007,4.031,5.007h29.617s7.631-11.185,7.794-11.511.6-3.762.6-3.762a23.417,23.417,0,0,1,.686-2.916,10.185,10.185,0,0,1,1.2-2.428,4.118,4.118,0,0,1,1.544-1.336,19,19,0,0,1,2.056-.743s2.056,1.08,2.567,1.336a3.633,3.633,0,0,0,1.963.743,8.754,8.754,0,0,0,1.719,0,5.7,5.7,0,0,0,.174-1.672,10.67,10.67,0,0,1,.43-2.578,2.967,2.967,0,0,1,1.37-1.51,6.634,6.634,0,0,1,2.31-.662c1.1-.163,1.882-.337,1.882-.337s1.277,0,2.137-1.916-.685-.5,1.452-3.09a10.791,10.791,0,0,1,2.916-2.834,7.584,7.584,0,0,0,1.975-2.508s-.778-.663.418-1.672,1.115-1.417,2.149-1.162a7.343,7.343,0,0,0,2.741.5,14.032,14.032,0,0,1,3,.337s3.334.5,4.449,0a6.618,6.618,0,0,0,1.881-1.336l2.056-.092a4.434,4.434,0,0,0,2.4-.244c.767-.5.941-1.358,1.789-2.52a12.864,12.864,0,0,0,1.464-2.822,4.109,4.109,0,0,1,3.426-.5c.336.105.65.2.94.3l1.963-2.973a14.8,14.8,0,0,0,.349-1.591c.081-.662-.778-1.417-.778-2s.429-.755.952-1.174a2.987,2.987,0,0,0,.849-2.171c0-.825-.849-1.08-2.219-1.835s-1.289.592-1.719.255a9.444,9.444,0,0,0-2.567-1.754c-2.137-1.173-5.052-2.833-5.388-3.425s-2.66-1-2.66-1-1.626.081-3.078,0a1.949,1.949,0,0,0-1.893,1.416,3.7,3.7,0,0,1-2.056,1.929c-1.533.58-1.452,1-3.252,1.579s-1.882-.243-1.964-.5a16.892,16.892,0,0,1,0-2.171l-1.626-2.916-2.311.663-2.485-.081a6.146,6.146,0,0,1-1.289-1.754c-.255-.755,0-1.336.174-2.509a13.643,13.643,0,0,0,0-2.671,4.348,4.348,0,0,0-.348-1.661,26.906,26.906,0,0,0-.674-3.09,26.255,26.255,0,0,1-.6-3.925l-1.719-1.58-1.2-1.254a17.287,17.287,0,0,1,.255-2.254c.175-.592.523-.592,1.719-.673s3.937-.244,3.937-.244l3.334-.917,1.893-.6.429-2.242a21.891,21.891,0,0,0,.511-3.333c0-1.092-.348-1.254-.685-2.172s-.778-.58-2.056-.917a12.6,12.6,0,0,0-3.09-.255,5.415,5.415,0,0,1-.766-1.58c-.081-.58-.174-2.171-.174-2.171a17.784,17.784,0,0,0-2.9-1.835c-2.15-1.173-2.567-1.336-2.567-1.336a12,12,0,0,0-2.23-.674,2.3,2.3,0,0,1-1.975-1.579,8.1,8.1,0,0,0-.848-1.254c-.267-.418-.524-1.417-1.035-2.254s-.86-.836-1.626-1.336a6.74,6.74,0,0,0-2.056-.917,9.115,9.115,0,0,0-2.915-.337,7.605,7.605,0,0,1-2.311-.743l-1.707-1.174v-4.064c-.418-.035-.535-.4-1.08-.4a2.467,2.467,0,0,0-2,.778c-.894.72-.418,1.662-2.369,1.186s-3.984.035-3.113-1.057.384-.384,1.6-.755,2.114-1.185.871-1.347a15.066,15.066,0,0,0-2.962.07c-.929.023-.673.592-1.056.836s-.639.186-1.568-.023a4.673,4.673,0,0,0-2.765.278c-.964.349-.836.186-1.452,1.278s.233,1.661-1.242,1.533-.837.255-2,.348-.477-.441-1.766.221-1.44.151-2.346,1.278-.929.662-1.44,2.138.929,1.185-.743,1.939-1.766.5-2.625,1.186-.523.278-1,1.312.128,1.127,0,2.916.059,1.661-.511,2.6-1.091.813-1.893,1.87-1.707.476-2.032,1.51a6.522,6.522,0,0,1-.929,2.032c-.709,1.278-.6.557-.929,1.94s.638,1.405-.872,1.94a11.569,11.569,0,0,1-2.753.685c-.488.071-1.162.163-1.835,1.417s.326,1.092-.928,1.847a5.684,5.684,0,0,1-1.557.615l1.847,3.357S817.047,299.281,817.047,299.7Z"
							transform="translate(-5.063 -1.629)"
						/>
						<path
							className="ad-item-1821"
							d="M962.9,400.168c.383-1.15,0-1.231,0-2.115s-1.162-1.5-1.545-1.834a6.078,6.078,0,0,1-1.161-2.289,35.2,35.2,0,0,1-.639-3.891c0-.743.384-3.124,0-3.5a6.017,6.017,0,0,1-.765-1.345l-.257.8.257-.8c-.15-.327-.257-.583-.257-.583l-16.1,15.366s-6.341.417-6.4,0a11.263,11.263,0,0,1,0-1.672c.023-.581-1.488-1.917-2.683-5.6-.291-.894-.465-1.428-.569-1.719l-.012-.011v-.024c0-.023-.011-.046-.011-.08a6.893,6.893,0,0,1-.43-2.254,4.029,4.029,0,0,1,.43-1.835,9.647,9.647,0,0,1,.685-2.079,1.809,1.809,0,0,0,0-1.591,7.578,7.578,0,0,1,.082-1.173,9.713,9.713,0,0,1,.429-1.08s.767-1.08,1.708-2.254-.175-1.5-.512-2.833-.766-.755-1.452-1.174-2.055.163-2.4.418.092,3.171.092,3.171-1.289.162-2.159.162-.418,2.509-.418,2.509a3.636,3.636,0,0,1-1.452-1.254c-.511-.837-2.138-.418-2.822-.837a9.689,9.689,0,0,1-1.627-1.5l-1.37-4.088,3.334-5.6a13.743,13.743,0,0,0-.081-1.417,9.6,9.6,0,0,1,.255-2.171,4.157,4.157,0,0,1,1.289-1.162c.767-.418,2.823-1.591,2.823-1.591a5.186,5.186,0,0,0,0-1.754c-.175-.837-1.034-1.336-1.29-1.662s-3.252-2.253-3.078-3.682a16.8,16.8,0,0,1,1.115-3.495c.429-1.337-.349-2.009-.429-2.928s-.6-1.417-2.66-5.168-1.115-.754-2.056-1.336-3.588-2.346-3.588-2.346l-2.741-2.416-2.4-2.927a21.137,21.137,0,0,0-2.218-.86c-.29-.1-.6-.2-.941-.3a4.108,4.108,0,0,0-3.425.5,12.864,12.864,0,0,1-1.464,2.822c-.848,1.162-1.023,2.021-1.789,2.52a4.434,4.434,0,0,1-2.4.244l-2.056.092a6.614,6.614,0,0,1-1.882,1.336c-1.115.5-4.448,0-4.448,0a14.032,14.032,0,0,0-3-.337,7.354,7.354,0,0,1-2.742-.5c-1.034-.256-.94.162-2.148,1.161s-.418,1.672-.418,1.672a7.569,7.569,0,0,1-1.974,2.509,10.745,10.745,0,0,0-2.916,2.834c-2.137,2.59-.592,1.173-1.452,3.09s-2.137,1.916-2.137,1.916-.778.174-1.882.337a6.617,6.617,0,0,0-2.311.662,2.972,2.972,0,0,0-1.37,1.509,10.7,10.7,0,0,0-.429,2.579,5.7,5.7,0,0,1-.174,1.672,8.76,8.76,0,0,1-1.719,0,3.633,3.633,0,0,1-1.963-.743c-.512-.255-2.567-1.336-2.567-1.336a19,19,0,0,0-2.056.743,4.109,4.109,0,0,0-1.544,1.336,10.185,10.185,0,0,0-1.2,2.428,23.237,23.237,0,0,0-.686,2.915s-.429,3.426-.6,3.763-7.793,11.511-7.793,11.511H818.706s-3.345-4.088-4.031-5.007-1.707-2.59-1.707-2.59a24.384,24.384,0,0,0-2.4-3.253c-.941-.917-.941-2.671-1.278-3.925s0-4.007,0-5.424a44.069,44.069,0,0,1,.163-4.507,10.4,10.4,0,0,1,2.659-5.505,15.875,15.875,0,0,0,2.822-4.262c.093-.325.093-5.424.523-6.759a4.02,4.02,0,0,1,1.023-1.835l1.452-2.5.6-3.426a32.577,32.577,0,0,1,2.31-3.751,10.1,10.1,0,0,0,1.452-1.672,38.954,38.954,0,0,1,3.937-3.252s1.035-1.092,2.23-2.671.349-3.183,0-4.344.081-2.254,0-3.926-1.115-1.08-2.485-1.754-1.452-.243-3.763-.917-2.31-.755-3-1.417-1.033-2.416-1.289-3.252-1.115-3.345-1.115-3.763-.848-4.75-.848-4.75l-1.847-3.357a6.561,6.561,0,0,0-.789.406c-1.476.882-1.22.941-2.509,2.253a11.288,11.288,0,0,1-3.333,2.567,19.152,19.152,0,0,0-3.275,2.323c-3.113,2.346-1.382,1.626-4.077,2.88a16.1,16.1,0,0,0-3.89,2.567c-.894.557-1.8.406-3.368.43a27.916,27.916,0,0,0-5.97.754c-.8.372-.709.407-.743,1.533s.8,1-.638,1.626-1.929.291-2.346,1.29-1.382,1.219-.349,1.846,1.348.778,2.021,0,.452-1.289,1.219-.79.731.778,1.127,1.313a2.089,2.089,0,0,0,1.788.6,2.291,2.291,0,0,1,1.231.406s-.267.778.929,2.473,1.092.535,2.183,2.126.988.662.732,2.509-.639,1.846-1.092,3.437-1.44,1.44.035,3.287.894,1.789.872,3.066a30.813,30.813,0,0,0,.186,5.192c.255,1.23.709.662,1.068,1.788s.511,1.22-.1,2.126a3,3,0,0,0-.766,3.067c.325,1.975.221,2.857-.709,3.6s0,1.51-1.476,1.975a12.515,12.515,0,0,1-5.04.221c-2.148-.186-3.055.278-3.218-1.44a14.42,14.42,0,0,1-.092-3.659c.162-1.6-.255-1.824.417-2.416s.616-.906,1.417-.65.024,1.742,1.313.743.872-.906,1.6-1.719,1-.872.708-2.219.674-2.253-.894-2.416a6.023,6.023,0,0,0-2.473.186s-.581-.186-1.127.663-.453,1.219-1,1.591-.163.755-1.057.441l-2.288,3.194a18.631,18.631,0,0,1-3.253-.58c-.255-.255-.511-1.51-.94-.674a4.519,4.519,0,0,0-.523,2.009,2.343,2.343,0,0,0,.859,1.661c.686.674,1.371,1.011,1.719,1.754s.767.917.512,1.928a16.558,16.558,0,0,1-.941,2.416,13.92,13.92,0,0,0-2.148,1.754c-.418.58-2.056.5-2.823,1.5a2.6,2.6,0,0,0-.511,3.008,13.979,13.979,0,0,0,2.486,3.333,12.155,12.155,0,0,0,2.566,1.591,35.758,35.758,0,0,1,4.194,2.671s6.423,5.424,7.619,6.424,4.54,4.506,4.54,4.506,2.056,2.753,3.079,4.344.86,1.917,1.893,2.591a7.218,7.218,0,0,0,2.648.836,17.507,17.507,0,0,1,2.915.743c1.707.592,1.37.175,1.963,1.092a22.606,22.606,0,0,1,1.719,3,8.618,8.618,0,0,1,.941,3.09c.081,1.417.86,2.591.174,3.508s-1.463,1.336-1.8,2.927a13.071,13.071,0,0,0-.349,3.67,18.882,18.882,0,0,1,0,2.5,1.078,1.078,0,0,1-1.37.255,6.088,6.088,0,0,1-1.278-1c-.174-.255-.349-1.336-1.544-1.51a12.117,12.117,0,0,0-2.916-.163,13.7,13.7,0,0,1-3.507-.255c-1.545-.243-2.138-.662-3.334-.406a6.761,6.761,0,0,0-2.265,1v1.754s-.465,2.671,0,2.916.639-.163.72,1.091.615,2.834-.72,3.334a8.054,8.054,0,0,1-3.217.255s-3.253-.837-4.194-.175-1.718.918-1.893,1.835-1.022-1.162.093,3.426.848,4.587,2.567,5.179a12.3,12.3,0,0,0,2.485.5c.429.163.511,1.336.255,2.16s-1.115,1.428-.429,2.265a11.5,11.5,0,0,0,3.078,1.835l2.578,2.334a5.566,5.566,0,0,1,1.707,3.17,10.609,10.609,0,0,1-.6,3.926c-.255.662-1.278-.917-.592,2.253s1.626,3.914,1.626,3.914a17.525,17.525,0,0,1,1.8,3.008c.591,1.417-.941,2.834.337,3.426s1.626.917,2.741.662a10.2,10.2,0,0,0,2.567-1.162,4.456,4.456,0,0,1,3,0c1.545.581,1.545,1,2.23.326a21.559,21.559,0,0,0,1.544-1.754s-.348-.743,2.823-.406a22.3,22.3,0,0,0,4.877.081,20.1,20.1,0,0,1,4.031-.418,6.688,6.688,0,0,0,2.473-.081c.6-.174,1.545-.337,1.975.163a9.114,9.114,0,0,1,1.29,2.753c.162.754-.686,2.334-.778,3.844a4.426,4.426,0,0,0,.8,3.333A16.017,16.017,0,0,0,827.7,457.9s1.533-1.591,2.567-.337,1.37,1.5,1.544,2.335a7.153,7.153,0,0,1,.082,4.088c-.6,1.591-1.544,1.173-1.707,3.09a20,20,0,0,0-.174,3.588c.081.418,2.567.755,3,1.672s1.37,2.509,1.023,3.508-1.3.243-.349,2.508l.952,2.254A20.149,20.149,0,0,1,836,482.27a7.737,7.737,0,0,1,1.277,2.253c.175.674.523,3.241.523,3.241a14.672,14.672,0,0,1,1.789-.569,8.322,8.322,0,0,1,2.381.384,6.405,6.405,0,0,1,1.673.813,10.484,10.484,0,0,0,2.3.278,5.473,5.473,0,0,1,.624-1.451,18.765,18.765,0,0,1,2.23-1.568s1.545-.662,2.311-.917a9.885,9.885,0,0,1,2.95-.581,8.64,8.64,0,0,1,2.613.663c.349.092,1.975.719,1.975.719s1.115-.047,1.627-.127a1.569,1.569,0,0,0,1.242-.8,7.813,7.813,0,0,0-.639-2.706,21.435,21.435,0,0,1-.266-4.053s-.082-2.334-.082-2.787,1.161-1.626,1.161-1.626.72-.72,1.15-.755a9.219,9.219,0,0,1,2.533,1.208c.638.372,1.358,2.206,1.358,2.206l1.975,1.011a3.3,3.3,0,0,0,1.579-.418,7.1,7.1,0,0,1,2.485-.836,9.089,9.089,0,0,1,1.975,1,1.181,1.181,0,0,1,.337,1.045,14.051,14.051,0,0,1-.941,1.382c-.557.708.86,1.452.86,1.452l1.674.882s.337,1.417.557,2.288,1.1,3.136,1.1,3.136.778.418,4.239,0,1.161-.755,1.544-1.174a5.592,5.592,0,0,1,1.37-1.37,2.262,2.262,0,0,1,1.882-.127,15.179,15.179,0,0,0,2.183-1.336,17.2,17.2,0,0,0,1.243-2.254l.348-2.927a16.121,16.121,0,0,1,1.37-1.162c.337-.209,1.627,0,2.474-.255s1.336-1.336,1.753-2a5.777,5.777,0,0,1,1.847-1.417,26.069,26.069,0,0,1,2.741-.209,34.478,34.478,0,0,1,3.6.035,3.81,3.81,0,0,1,2.521,1.045,16.738,16.738,0,0,0,2.265,1.126,19.694,19.694,0,0,0,2.915-.5s1.115-1.336,1.2-1.545.731-1.9.731-1.9l2.929.014a.812.812,0,0,1,.835-.525s1.417-3.554,1.5-4.135-.511-1.591-.848-3.345.592-2.159,1.963-4.75,0-2.253-.255-3.763-1.115-2.5-1.37-3.588,2.741-4.925,2.741-4.925l2.741-2.334,1.243-3.09.766-1.5,3.078-1.882,2.056-1.626-.511-3.008s-.639-1.5-1.278-3.124-.255-3.508,3.078-6.261,3.729-2.508,3.729-2.508l4.366-2.253s1.928-1.371,3.984-2.625,1.662-1.626,3.334-3.124,1.672-2.137,2.694-3.508a15.23,15.23,0,0,1,2.056-2.253l2.055-1.626s1.545-.255,6.806-2.509.256-1.5.651-2.647m-30.186-9.385c0-.012,0-.012-.012-.012-.023-.081-.035-.116-.035-.116s.012.035.035.116c.012,0,.012,0,.012.012a.074.074,0,0,0,.011.047.074.074,0,0,1-.011-.047"
							transform="translate(-4.83 -1.829)"
						/>
						<path
							className="ae-item-1821"
							d="M962.9,400.168c.383-1.15,0-1.231,0-2.115s-1.162-1.5-1.545-1.834a6.078,6.078,0,0,1-1.161-2.289,35.2,35.2,0,0,1-.639-3.891c0-.743.384-3.124,0-3.5a6.017,6.017,0,0,1-.765-1.345l-.257.8.257-.8c-.15-.327-.257-.583-.257-.583l-16.1,15.366s-6.341.417-6.4,0a11.263,11.263,0,0,1,0-1.672c.023-.581-1.488-1.917-2.683-5.6-.291-.894-.465-1.428-.569-1.719l-.012-.011v-.024c0-.023-.011-.046-.011-.08a6.893,6.893,0,0,1-.43-2.254,4.029,4.029,0,0,1,.43-1.835,9.647,9.647,0,0,1,.685-2.079,1.809,1.809,0,0,0,0-1.591,7.578,7.578,0,0,1,.082-1.173,9.713,9.713,0,0,1,.429-1.08s.767-1.08,1.708-2.254-.175-1.5-.512-2.833-.766-.755-1.452-1.174-2.055.163-2.4.418.092,3.171.092,3.171-1.289.162-2.159.162-.418,2.509-.418,2.509a3.636,3.636,0,0,1-1.452-1.254c-.511-.837-2.138-.418-2.822-.837a9.689,9.689,0,0,1-1.627-1.5l-1.37-4.088,3.334-5.6a13.743,13.743,0,0,0-.081-1.417,9.6,9.6,0,0,1,.255-2.171,4.157,4.157,0,0,1,1.289-1.162c.767-.418,2.823-1.591,2.823-1.591a5.186,5.186,0,0,0,0-1.754c-.175-.837-1.034-1.336-1.29-1.662s-3.252-2.253-3.078-3.682a16.8,16.8,0,0,1,1.115-3.495c.429-1.337-.349-2.009-.429-2.928s-.6-1.417-2.66-5.168-1.115-.754-2.056-1.336-3.588-2.346-3.588-2.346l-2.741-2.416-2.4-2.927a21.137,21.137,0,0,0-2.218-.86c-.29-.1-.6-.2-.941-.3a4.108,4.108,0,0,0-3.425.5,12.864,12.864,0,0,1-1.464,2.822c-.848,1.162-1.023,2.021-1.789,2.52a4.434,4.434,0,0,1-2.4.244l-2.056.092a6.614,6.614,0,0,1-1.882,1.336c-1.115.5-4.448,0-4.448,0a14.032,14.032,0,0,0-3-.337,7.354,7.354,0,0,1-2.742-.5c-1.034-.256-.94.162-2.148,1.161s-.418,1.672-.418,1.672a7.569,7.569,0,0,1-1.974,2.509,10.745,10.745,0,0,0-2.916,2.834c-2.137,2.59-.592,1.173-1.452,3.09s-2.137,1.916-2.137,1.916-.778.174-1.882.337a6.617,6.617,0,0,0-2.311.662,2.972,2.972,0,0,0-1.37,1.509,10.7,10.7,0,0,0-.429,2.579,5.7,5.7,0,0,1-.174,1.672,8.76,8.76,0,0,1-1.719,0,3.633,3.633,0,0,1-1.963-.743c-.512-.255-2.567-1.336-2.567-1.336a19,19,0,0,0-2.056.743,4.109,4.109,0,0,0-1.544,1.336,10.185,10.185,0,0,0-1.2,2.428,23.237,23.237,0,0,0-.686,2.915s-.429,3.426-.6,3.763-7.793,11.511-7.793,11.511H818.706s-3.345-4.088-4.031-5.007-1.707-2.59-1.707-2.59a24.384,24.384,0,0,0-2.4-3.253c-.941-.917-.941-2.671-1.278-3.925s0-4.007,0-5.424a44.069,44.069,0,0,1,.163-4.507,10.4,10.4,0,0,1,2.659-5.505,15.875,15.875,0,0,0,2.822-4.262c.093-.325.093-5.424.523-6.759a4.02,4.02,0,0,1,1.023-1.835l1.452-2.5.6-3.426a32.577,32.577,0,0,1,2.31-3.751,10.1,10.1,0,0,0,1.452-1.672,38.954,38.954,0,0,1,3.937-3.252s1.035-1.092,2.23-2.671.349-3.183,0-4.344.081-2.254,0-3.926-1.115-1.08-2.485-1.754-1.452-.243-3.763-.917-2.31-.755-3-1.417-1.033-2.416-1.289-3.252-1.115-3.345-1.115-3.763-.848-4.75-.848-4.75l-1.847-3.357a6.561,6.561,0,0,0-.789.406c-1.476.882-1.22.941-2.509,2.253a11.288,11.288,0,0,1-3.333,2.567,19.152,19.152,0,0,0-3.275,2.323c-3.113,2.346-1.382,1.626-4.077,2.88a16.1,16.1,0,0,0-3.89,2.567c-.894.557-1.8.406-3.368.43a27.916,27.916,0,0,0-5.97.754c-.8.372-.709.407-.743,1.533s.8,1-.638,1.626-1.929.291-2.346,1.29-1.382,1.219-.349,1.846,1.348.778,2.021,0,.452-1.289,1.219-.79.731.778,1.127,1.313a2.089,2.089,0,0,0,1.788.6,2.291,2.291,0,0,1,1.231.406s-.267.778.929,2.473,1.092.535,2.183,2.126.988.662.732,2.509-.639,1.846-1.092,3.437-1.44,1.44.035,3.287.894,1.789.872,3.066a30.813,30.813,0,0,0,.186,5.192c.255,1.23.709.662,1.068,1.788s.511,1.22-.1,2.126a3,3,0,0,0-.766,3.067c.325,1.975.221,2.857-.709,3.6s0,1.51-1.476,1.975a12.515,12.515,0,0,1-5.04.221c-2.148-.186-3.055.278-3.218-1.44a14.42,14.42,0,0,1-.092-3.659c.162-1.6-.255-1.824.417-2.416s.616-.906,1.417-.65.024,1.742,1.313.743.872-.906,1.6-1.719,1-.872.708-2.219.674-2.253-.894-2.416a6.023,6.023,0,0,0-2.473.186s-.581-.186-1.127.663-.453,1.219-1,1.591-.163.755-1.057.441l-2.288,3.194a18.631,18.631,0,0,1-3.253-.58c-.255-.255-.511-1.51-.94-.674a4.519,4.519,0,0,0-.523,2.009,2.343,2.343,0,0,0,.859,1.661c.686.674,1.371,1.011,1.719,1.754s.767.917.512,1.928a16.558,16.558,0,0,1-.941,2.416,13.92,13.92,0,0,0-2.148,1.754c-.418.58-2.056.5-2.823,1.5a2.6,2.6,0,0,0-.511,3.008,13.979,13.979,0,0,0,2.486,3.333,12.155,12.155,0,0,0,2.566,1.591,35.758,35.758,0,0,1,4.194,2.671s6.423,5.424,7.619,6.424,4.54,4.506,4.54,4.506,2.056,2.753,3.079,4.344.86,1.917,1.893,2.591a7.218,7.218,0,0,0,2.648.836,17.507,17.507,0,0,1,2.915.743c1.707.592,1.37.175,1.963,1.092a22.606,22.606,0,0,1,1.719,3,8.618,8.618,0,0,1,.941,3.09c.081,1.417.86,2.591.174,3.508s-1.463,1.336-1.8,2.927a13.071,13.071,0,0,0-.349,3.67,18.882,18.882,0,0,1,0,2.5,1.078,1.078,0,0,1-1.37.255,6.088,6.088,0,0,1-1.278-1c-.174-.255-.349-1.336-1.544-1.51a12.117,12.117,0,0,0-2.916-.163,13.7,13.7,0,0,1-3.507-.255c-1.545-.243-2.138-.662-3.334-.406a6.761,6.761,0,0,0-2.265,1v1.754s-.465,2.671,0,2.916.639-.163.72,1.091.615,2.834-.72,3.334a8.054,8.054,0,0,1-3.217.255s-3.253-.837-4.194-.175-1.718.918-1.893,1.835-1.022-1.162.093,3.426.848,4.587,2.567,5.179a12.3,12.3,0,0,0,2.485.5c.429.163.511,1.336.255,2.16s-1.115,1.428-.429,2.265a11.5,11.5,0,0,0,3.078,1.835l2.578,2.334a5.566,5.566,0,0,1,1.707,3.17,10.609,10.609,0,0,1-.6,3.926c-.255.662-1.278-.917-.592,2.253s1.626,3.914,1.626,3.914a17.525,17.525,0,0,1,1.8,3.008c.591,1.417-.941,2.834.337,3.426s1.626.917,2.741.662a10.2,10.2,0,0,0,2.567-1.162,4.456,4.456,0,0,1,3,0c1.545.581,1.545,1,2.23.326a21.559,21.559,0,0,0,1.544-1.754s-.348-.743,2.823-.406a22.3,22.3,0,0,0,4.877.081,20.1,20.1,0,0,1,4.031-.418,6.688,6.688,0,0,0,2.473-.081c.6-.174,1.545-.337,1.975.163a9.114,9.114,0,0,1,1.29,2.753c.162.754-.686,2.334-.778,3.844a4.426,4.426,0,0,0,.8,3.333A16.017,16.017,0,0,0,827.7,457.9s1.533-1.591,2.567-.337,1.37,1.5,1.544,2.335a7.153,7.153,0,0,1,.082,4.088c-.6,1.591-1.544,1.173-1.707,3.09a20,20,0,0,0-.174,3.588c.081.418,2.567.755,3,1.672s1.37,2.509,1.023,3.508-1.3.243-.349,2.508l.952,2.254A20.149,20.149,0,0,1,836,482.27a7.737,7.737,0,0,1,1.277,2.253c.175.674.523,3.241.523,3.241a14.672,14.672,0,0,1,1.789-.569,8.322,8.322,0,0,1,2.381.384,6.405,6.405,0,0,1,1.673.813,10.484,10.484,0,0,0,2.3.278,5.473,5.473,0,0,1,.624-1.451,18.765,18.765,0,0,1,2.23-1.568s1.545-.662,2.311-.917a9.885,9.885,0,0,1,2.95-.581,8.64,8.64,0,0,1,2.613.663c.349.092,1.975.719,1.975.719s1.115-.047,1.627-.127a1.569,1.569,0,0,0,1.242-.8,7.813,7.813,0,0,0-.639-2.706,21.435,21.435,0,0,1-.266-4.053s-.082-2.334-.082-2.787,1.161-1.626,1.161-1.626.72-.72,1.15-.755a9.219,9.219,0,0,1,2.533,1.208c.638.372,1.358,2.206,1.358,2.206l1.975,1.011a3.3,3.3,0,0,0,1.579-.418,7.1,7.1,0,0,1,2.485-.836,9.089,9.089,0,0,1,1.975,1,1.181,1.181,0,0,1,.337,1.045,14.051,14.051,0,0,1-.941,1.382c-.557.708.86,1.452.86,1.452l1.674.882s.337,1.417.557,2.288,1.1,3.136,1.1,3.136.778.418,4.239,0,1.161-.755,1.544-1.174a5.592,5.592,0,0,1,1.37-1.37,2.262,2.262,0,0,1,1.882-.127,15.179,15.179,0,0,0,2.183-1.336,17.2,17.2,0,0,0,1.243-2.254l.348-2.927a16.121,16.121,0,0,1,1.37-1.162c.337-.209,1.627,0,2.474-.255s1.336-1.336,1.753-2a5.777,5.777,0,0,1,1.847-1.417,26.069,26.069,0,0,1,2.741-.209,34.478,34.478,0,0,1,3.6.035,3.81,3.81,0,0,1,2.521,1.045,16.738,16.738,0,0,0,2.265,1.126,19.694,19.694,0,0,0,2.915-.5s1.115-1.336,1.2-1.545.731-1.9.731-1.9l2.929.014a.812.812,0,0,1,.835-.525s1.417-3.554,1.5-4.135-.511-1.591-.848-3.345.592-2.159,1.963-4.75,0-2.253-.255-3.763-1.115-2.5-1.37-3.588,2.741-4.925,2.741-4.925l2.741-2.334,1.243-3.09.766-1.5,3.078-1.882,2.056-1.626-.511-3.008s-.639-1.5-1.278-3.124-.255-3.508,3.078-6.261,3.729-2.508,3.729-2.508l4.366-2.253s1.928-1.371,3.984-2.625,1.662-1.626,3.334-3.124,1.672-2.137,2.694-3.508a15.23,15.23,0,0,1,2.056-2.253l2.055-1.626s1.545-.255,6.806-2.509S962.5,401.318,962.9,400.168Zm-30.186-9.385c0-.012,0-.012-.012-.012-.023-.081-.035-.116-.035-.116s.012.035.035.116c.012,0,.012,0,.012.012a.074.074,0,0,0,.011.047A.074.074,0,0,1,932.713,390.783Z"
							transform="translate(-4.83 -1.829)"
						/>
						<path
							className="ad-item-1821"
							d="M757.349,619.555a15.563,15.563,0,0,0,2.4,2.508c.512.163,3.6.674,4.112.837a25.541,25.541,0,0,1,3.078,3.008l3.6.825h4.274s4.286-1.5,5.83,0a12.751,12.751,0,0,0,3.589,2.845,37.067,37.067,0,0,0,4.286,0l4.285-1.834s2.056-1.836,3.763-1.836,4.971.5,5.656.5,3.588-1.673,3.588-1.673,1.882-1.672,2.056-2.509,2.23-4.832,2.23-5.342v-4l3.426.326s4.274,2.009,5.481,2.009,5.308.662,5.308.662a55.1,55.1,0,0,0,5.135,2.171c.859.163,4.448,1,4.448,1l2.4-6.759,1.963-6.585.894-12.357,4.936-7.015s-.348-3.171,0-3.833a49.625,49.625,0,0,1,4.449-4.263l6.678-7.258s-.047-2.2-.035-3.567l-2.88-.441s-1.6-6.318-1.662-6.631-2.764-3.949-2.764-3.949-1.29-3.566-1.219-4.75-1.6-10.894-1.476-11.15.766-2.254.766-2.254a11.014,11.014,0,0,1,2.184-.94,10.274,10.274,0,0,0,2.044-.557c1.1-.372,1.487-.941,2.2-.941a2.075,2.075,0,0,0,1.475-.314,7.216,7.216,0,0,0,1.336-1.126v-1.069s-5.064-.5-5.528-.139-.941-.476-1.591-.987a2.107,2.107,0,0,1-.639-1.5,5.581,5.581,0,0,0-2.254-1.626c-1.23-.372-.7,1.754-.7,1.754a3.783,3.783,0,0,1-1.289,0,2.248,2.248,0,0,1-1.672-1.382c-.384-.872,1.417-1.87,1.417-1.87a7.658,7.658,0,0,0-.128-2.253.864.864,0,0,0-1.289-.627,5.058,5.058,0,0,1-1.789-.5c-1.162-.511-.651-.511-.569-1.011s-1.614-2.753-1.614-2.753a34.72,34.72,0,0,0-2.311-2.624c-1.034-1-.778-.5-2.183-.882s-.651.127-2.834,0c-1.127-.059-1.533.209-1.766.568-.221.337-.29.767-.674,1.069-.766.615-.383,3-.511,3.879a31.346,31.346,0,0,1-1.8,4.251,16.927,16.927,0,0,1-2.184,1,16.333,16.333,0,0,1-3.2.882l-2.567,1.882s-1.545,1.869-2.452,2.729a9.839,9.839,0,0,0-1.928,3.775c-.266,1-2.822,6.26-3.078,7.386a22.469,22.469,0,0,0-.255,3.508l-1.417.87a7.4,7.4,0,0,0-2.949,1.011c-1.417.871,0,1.5,0,3.88s.766.627,1.289,1.126S808,558.219,808,558.219l-.384,2.253,4.239,1.87a16.331,16.331,0,0,1,1.15,1.881c.523,1-.639.872-2.7,1.627a15.66,15.66,0,0,0-3.078,1.567c-1.162.558-.905,1.684-2.439,3.567s-1.162-.372-3.345,0-3.206.627-3.206.627l-1.289,1.754a9.6,9.6,0,0,1-3.334.5c-1.544-.127-.905-.627-1.8-1.127s-1.673-1-2.822-1.753-1.672.127-2.056,0-.523-1.5-.65-1.568a9.219,9.219,0,0,0-2.184-2.567,1.962,1.962,0,0,0-2.439-.116,11.7,11.7,0,0,1-3.717.743c-2.323.127,0,0-1.8-.059s-.778-.568-1.8-1.567-.638-.627-1.928-1.754a2.677,2.677,0,0,0-2.822-.372s-.65.127-3.09.372-.638,0-1.277-.128-.511-1.242-.651-1.753-.894-1.743-1.661-1.743-.906.872-1.033,1.5a1.675,1.675,0,0,1-1.405,1.626c-1.162.255,0,0-.651-.754a2.738,2.738,0,0,0-1.533-.872s-1.033.372-1.289.872-1.162,2.137-1.928,2.206a13.4,13.4,0,0,0-2.311.674v3.694c.616.568-.221.186-.221,1.417s-.674,1.591.441,1.869,1.2-.058,1.835.291.546,1.683.8,2.183.326,1.626,1.033,1.568.7-.314,1.186-.849,1.022-.627.8-1.475-.615-.87-.325-1.242a5.511,5.511,0,0,1,.941-.941,4.766,4.766,0,0,0,.952-1.092c.615-.825.418-1.011.905-1.568s-.36-1.381,1.22-1.161,1.7.127,2.148.662.07.836.836,1.15,1.8.255,1.441.755-1.568.848-1.824,1.091-.488.29-.384.941.384,1.1.221,1.405.255.755-.58.755-2.207-.128-2.625.755-1.382.94-1.672,1.753,1.15.964,1.7,1.185.674-.058.778,1-.964,1.567.709,1.567,3.112-.058,3.112-.058,1.533.128,2.4.186a2.086,2.086,0,0,0,1.707-.592c.442-.384,1.115.116.732-.7s-.964-1-.837-1.719.1-1,.929-1.127.547-.313,1.417-.151.2-.5,1.987,0,2.032,0,2.183.813.453,1.127.325,1.5-1.312.79-1.312.79-.616-.6-.71-.035a11.638,11.638,0,0,0-.417,1.661c0,.523-1.023-.035-.035,1.684s2.508,3.159,1.869,4.007.255,1.2-1.707.941-2.4,1.975-2.927.081-.348-2.149.29-2.184.8-.337.8-.337.488-.813-.6-1.312-1.289-1.29-1.928-.849a1.983,1.983,0,0,0-.639,1.754c0,.5.163.837-.488,1.37s-1.15.663-1.185,1.6-.511,2.16.128,2.474a16.945,16.945,0,0,0,2.4.592c.778.221,1.417.127,1.254.5a1.9,1.9,0,0,1-1.348,1.185,9.513,9.513,0,0,1-1.8.162c-.186,0,1.544.778-1.15,2.091s-4.112.755-5.017,2.253-2.115,3.263-2.115,3.263-1.544.116-1.73,1.186a2.168,2.168,0,0,0,.441,2.032c.394.476,1.87-.279.906,1.219a7.907,7.907,0,0,1-2.126,2.253,4.02,4.02,0,0,0-2.7,1.627c-1.091,1.51-2.636,1.638-3.274,1.951l3.7,2.16Z"
							transform="translate(-4.704 -3.237)"
						/>
						<path
							className="ae-item-1821"
							d="M757.349,619.555a15.563,15.563,0,0,0,2.4,2.508c.512.163,3.6.674,4.112.837a25.541,25.541,0,0,1,3.078,3.008l3.6.825h4.274s4.286-1.5,5.83,0a12.751,12.751,0,0,0,3.589,2.845,37.067,37.067,0,0,0,4.286,0l4.285-1.834s2.056-1.836,3.763-1.836,4.971.5,5.656.5,3.588-1.673,3.588-1.673,1.882-1.672,2.056-2.509,2.23-4.832,2.23-5.342v-4l3.426.326s4.274,2.009,5.481,2.009,5.308.662,5.308.662a55.1,55.1,0,0,0,5.135,2.171c.859.163,4.448,1,4.448,1l2.4-6.759,1.963-6.585.894-12.357,4.936-7.015s-.348-3.171,0-3.833a49.625,49.625,0,0,1,4.449-4.263l6.678-7.258s-.047-2.2-.035-3.567l-2.88-.441s-1.6-6.318-1.662-6.631-2.764-3.949-2.764-3.949-1.29-3.566-1.219-4.75-1.6-10.894-1.476-11.15.766-2.254.766-2.254a11.014,11.014,0,0,1,2.184-.94,10.274,10.274,0,0,0,2.044-.557c1.1-.372,1.487-.941,2.2-.941a2.075,2.075,0,0,0,1.475-.314,7.216,7.216,0,0,0,1.336-1.126v-1.069s-5.064-.5-5.528-.139-.941-.476-1.591-.987a2.107,2.107,0,0,1-.639-1.5,5.581,5.581,0,0,0-2.254-1.626c-1.23-.372-.7,1.754-.7,1.754a3.783,3.783,0,0,1-1.289,0,2.248,2.248,0,0,1-1.672-1.382c-.384-.872,1.417-1.87,1.417-1.87a7.658,7.658,0,0,0-.128-2.253.864.864,0,0,0-1.289-.627,5.058,5.058,0,0,1-1.789-.5c-1.162-.511-.651-.511-.569-1.011s-1.614-2.753-1.614-2.753a34.72,34.72,0,0,0-2.311-2.624c-1.034-1-.778-.5-2.183-.882s-.651.127-2.834,0c-1.127-.059-1.533.209-1.766.568-.221.337-.29.767-.674,1.069-.766.615-.383,3-.511,3.879a31.346,31.346,0,0,1-1.8,4.251,16.927,16.927,0,0,1-2.184,1,16.333,16.333,0,0,1-3.2.882l-2.567,1.882s-1.545,1.869-2.452,2.729a9.839,9.839,0,0,0-1.928,3.775c-.266,1-2.822,6.26-3.078,7.386a22.469,22.469,0,0,0-.255,3.508l-1.417.87a7.4,7.4,0,0,0-2.949,1.011c-1.417.871,0,1.5,0,3.88s.766.627,1.289,1.126S808,558.219,808,558.219l-.384,2.253,4.239,1.87a16.331,16.331,0,0,1,1.15,1.881c.523,1-.639.872-2.7,1.627a15.66,15.66,0,0,0-3.078,1.567c-1.162.558-.905,1.684-2.439,3.567s-1.162-.372-3.345,0-3.206.627-3.206.627l-1.289,1.754a9.6,9.6,0,0,1-3.334.5c-1.544-.127-.905-.627-1.8-1.127s-1.673-1-2.822-1.753-1.672.127-2.056,0-.523-1.5-.65-1.568a9.219,9.219,0,0,0-2.184-2.567,1.962,1.962,0,0,0-2.439-.116,11.7,11.7,0,0,1-3.717.743c-2.323.127,0,0-1.8-.059s-.778-.568-1.8-1.567-.638-.627-1.928-1.754a2.677,2.677,0,0,0-2.822-.372s-.65.127-3.09.372-.638,0-1.277-.128-.511-1.242-.651-1.753-.894-1.743-1.661-1.743-.906.872-1.033,1.5a1.675,1.675,0,0,1-1.405,1.626c-1.162.255,0,0-.651-.754a2.738,2.738,0,0,0-1.533-.872s-1.033.372-1.289.872-1.162,2.137-1.928,2.206a13.4,13.4,0,0,0-2.311.674v3.694c.616.568-.221.186-.221,1.417s-.674,1.591.441,1.869,1.2-.058,1.835.291.546,1.683.8,2.183.326,1.626,1.033,1.568.7-.314,1.186-.849,1.022-.627.8-1.475-.615-.87-.325-1.242a5.511,5.511,0,0,1,.941-.941,4.766,4.766,0,0,0,.952-1.092c.615-.825.418-1.011.905-1.568s-.36-1.381,1.22-1.161,1.7.127,2.148.662.07.836.836,1.15,1.8.255,1.441.755-1.568.848-1.824,1.091-.488.29-.384.941.384,1.1.221,1.405.255.755-.58.755-2.207-.128-2.625.755-1.382.94-1.672,1.753,1.15.964,1.7,1.185.674-.058.778,1-.964,1.567.709,1.567,3.112-.058,3.112-.058,1.533.128,2.4.186a2.086,2.086,0,0,0,1.707-.592c.442-.384,1.115.116.732-.7s-.964-1-.837-1.719.1-1,.929-1.127.547-.313,1.417-.151.2-.5,1.987,0,2.032,0,2.183.813.453,1.127.325,1.5-1.312.79-1.312.79-.616-.6-.71-.035a11.638,11.638,0,0,0-.417,1.661c0,.523-1.023-.035-.035,1.684s2.508,3.159,1.869,4.007.255,1.2-1.707.941-2.4,1.975-2.927.081-.348-2.149.29-2.184.8-.337.8-.337.488-.813-.6-1.312-1.289-1.29-1.928-.849a1.983,1.983,0,0,0-.639,1.754c0,.5.163.837-.488,1.37s-1.15.663-1.185,1.6-.511,2.16.128,2.474a16.945,16.945,0,0,0,2.4.592c.778.221,1.417.127,1.254.5a1.9,1.9,0,0,1-1.348,1.185,9.513,9.513,0,0,1-1.8.162c-.186,0,1.544.778-1.15,2.091s-4.112.755-5.017,2.253-2.115,3.263-2.115,3.263-1.544.116-1.73,1.186a2.168,2.168,0,0,0,.441,2.032c.394.476,1.87-.279.906,1.219a7.907,7.907,0,0,1-2.126,2.253,4.02,4.02,0,0,0-2.7,1.627c-1.091,1.51-2.636,1.638-3.274,1.951l3.7,2.16Z"
							transform="translate(-4.704 -3.237)"
						/>
						<path
							className="ad-item-1821"
							d="M772.088,771.007,768.755,768l-1.8-1.5.766-4.507,7.19-8.142,1.417-2.88-1.544-4.507-2.822-7.758,2.055-4.007a42.187,42.187,0,0,1,5.134-2.381c1.417-.372,3.473-1,5.4-1.627s1.672-1.254,2.183-1.381a6.188,6.188,0,0,1,1.185-.012l.523-2.067a42.241,42.241,0,0,1-1.533-5.18,1.348,1.348,0,0,0-1.544-1.162,4.034,4.034,0,0,1,.86-2.009c.685-.662,1.533-1.5,2.218-2.171a5.7,5.7,0,0,0,1.035-3c0-.5-.861-2.346-1.035-3.17s-4.448,0-4.448,0-1.2-3.009-1.37-3.508-2.916-2.172-4.112-2.671-1.2,1.336-1.707,1.834a10.717,10.717,0,0,1-2.915,1.835c-.686.163-2.742-.163-4.286-.163s-6.33.5-6.33.5-4.622-.837-5.145-1.336.523-2.671.523-3.845a11.768,11.768,0,0,1,.511-3.67c.337-.837,4.448-.837,4.448-.837l3.345-2a4.66,4.66,0,0,0,0-2.508c-.429-.837,0-3.671,0-3.671l-3.856-1.672s-3.6-1.672-3.937-2.334a16.2,16.2,0,0,1-.511-4.17c0-.836-1.545-4.181-1.719-4.681s-2.9-1-3.763-1a16.028,16.028,0,0,0-4.286.837c-.511.337-3.252,1.834-4.448,1.834s-1.544-1.173-3.09-1.672a42.365,42.365,0,0,0-4.448-.836c-1.545-.325-2.916-2.834-2.916-2.834l-1.022-4.669-5.309-6.853-4.285-4.832-4.809-5.029a1.958,1.958,0,0,1-.731,1.476c-1.545,1.254-1.731,1.753-3.02,2.322s-2.765.186-2.694-1.011.452-1.6,0-3-.512-2.323-2.381-1.823-1.6.882-2.893,1.254-2.114-.94-1.985.813.94,1.255-.012,2.7-1.661,2.067-2.172,2.126.256-1.313-1.15-1.37-1.487-.314-2.322,1a5.819,5.819,0,0,0-.766,2.939s2.055.441.836,1.567-1.219,2.184-1.544,0,1.034-2.416-.441-3-2.765.3-2.311-.7,1.532-1.626.441-2.068a3.335,3.335,0,0,0-1.731-.313s-1.289,4.065-3.727,4.82-3.659-.5-4.495.813-.965,1.441-.837,2.625,1.219,1.881-.255,2.694a4.2,4.2,0,0,0-1.672,1.254c-.384.372-1.533-1.567-.7,1.882s1.219,2.126,1.928,4.065-1.231,1.185.825,2.38,1.8,2.938,1.8,4.065-.058,5.134-1.673,5.505-3.078-1.313-4.68-.743-3.4.314-2.311,1.626.639,1.568,1.928,1.684,1.533-1.185,2.5.2,2,2,1.743,3.066-2,.686-.71,1.812.581.686,2.184.941,1.858.813,1.858,1.568.127,4.065-1.476,5.32-1.8,2.439-3.147.685-1.928-2.624-3.206-1.939-.65,1.626-2.381,1.254-.127-.07-2.949-1.254-.709-1.5-3.857-1.069-3.217,1.441-4.622,2.822-2.7,3.566-5.017,5.448-2.95.627-2.95,2.88-1.6,2.5,1.672,4.751.255,2.137,3.786,2.067,3.473-.686,3.857.5a36.036,36.036,0,0,1,.894,3.635c.2.94.708,1.185,1.614,1.881s2.311.3,3.972,2.369,1.092,2.637,3.4,4.321,1.8.627,3.089,1.626,4.112,4.762,5.842,5.017,3.6-.383,4.17.059.778,2.126,2.834,3.821,2.369.5,3.588,2.624,2.7,1.7,3.984,1.7,2.567-.314,2.95.615,7.642,6.144,10.407,8.27,1.928,3.635,5.528,4.448a39.475,39.475,0,0,0,5.842,1.185,6.331,6.331,0,0,0,2.95-.685,9.417,9.417,0,0,1,7.317-2.138c.905,0,1.672-1.242,3.09-.3s4.239.186,2.567,1.627-1.15,1.939-1.987,2.88a6.578,6.578,0,0,0-1.162,2.683l2.254,2.323s.255,3.623,4.552,3.437,6.365-.941,6.551.314,1.162,1.812.2,2.567a14.454,14.454,0,0,1-2.509,1.44s-1.219.186-.255,1.382,1.672,1.056,2.114,2a19.988,19.988,0,0,1,.837,2.126s-.837.313-.512,2.067,1.162,2.439,1.673,2.636a21.736,21.736,0,0,0,3.2.186l2.893-1.313s2.439.314,3.019,1.186.255,1.312,1.545,1.44a12.449,12.449,0,0,0,3.078-.255s2.126-.5,2.892-.686,1.672-.94,2.7-.441c.3.151.58.279.824.395l-.568-9.012Z"
							transform="translate(-4.113 -4.073)"
						/>
						<path
							className="ae-item-1821"
							d="M772.088,771.007,768.755,768l-1.8-1.5.766-4.507,7.19-8.142,1.417-2.88-1.544-4.507-2.822-7.758,2.055-4.007a42.187,42.187,0,0,1,5.134-2.381c1.417-.372,3.473-1,5.4-1.627s1.672-1.254,2.183-1.381a6.188,6.188,0,0,1,1.185-.012l.523-2.067a42.241,42.241,0,0,1-1.533-5.18,1.348,1.348,0,0,0-1.544-1.162,4.034,4.034,0,0,1,.86-2.009c.685-.662,1.533-1.5,2.218-2.171a5.7,5.7,0,0,0,1.035-3c0-.5-.861-2.346-1.035-3.17s-4.448,0-4.448,0-1.2-3.009-1.37-3.508-2.916-2.172-4.112-2.671-1.2,1.336-1.707,1.834a10.717,10.717,0,0,1-2.915,1.835c-.686.163-2.742-.163-4.286-.163s-6.33.5-6.33.5-4.622-.837-5.145-1.336.523-2.671.523-3.845a11.768,11.768,0,0,1,.511-3.67c.337-.837,4.448-.837,4.448-.837l3.345-2a4.66,4.66,0,0,0,0-2.508c-.429-.837,0-3.671,0-3.671l-3.856-1.672s-3.6-1.672-3.937-2.334a16.2,16.2,0,0,1-.511-4.17c0-.836-1.545-4.181-1.719-4.681s-2.9-1-3.763-1a16.028,16.028,0,0,0-4.286.837c-.511.337-3.252,1.834-4.448,1.834s-1.544-1.173-3.09-1.672a42.365,42.365,0,0,0-4.448-.836c-1.545-.325-2.916-2.834-2.916-2.834l-1.022-4.669-5.309-6.853-4.285-4.832-4.809-5.029a1.958,1.958,0,0,1-.731,1.476c-1.545,1.254-1.731,1.753-3.02,2.322s-2.765.186-2.694-1.011.452-1.6,0-3-.512-2.323-2.381-1.823-1.6.882-2.893,1.254-2.114-.94-1.985.813.94,1.255-.012,2.7-1.661,2.067-2.172,2.126.256-1.313-1.15-1.37-1.487-.314-2.322,1a5.819,5.819,0,0,0-.766,2.939s2.055.441.836,1.567-1.219,2.184-1.544,0,1.034-2.416-.441-3-2.765.3-2.311-.7,1.532-1.626.441-2.068a3.335,3.335,0,0,0-1.731-.313s-1.289,4.065-3.727,4.82-3.659-.5-4.495.813-.965,1.441-.837,2.625,1.219,1.881-.255,2.694a4.2,4.2,0,0,0-1.672,1.254c-.384.372-1.533-1.567-.7,1.882s1.219,2.126,1.928,4.065-1.231,1.185.825,2.38,1.8,2.938,1.8,4.065-.058,5.134-1.673,5.505-3.078-1.313-4.68-.743-3.4.314-2.311,1.626.639,1.568,1.928,1.684,1.533-1.185,2.5.2,2,2,1.743,3.066-2,.686-.71,1.812.581.686,2.184.941,1.858.813,1.858,1.568.127,4.065-1.476,5.32-1.8,2.439-3.147.685-1.928-2.624-3.206-1.939-.65,1.626-2.381,1.254-.127-.07-2.949-1.254-.709-1.5-3.857-1.069-3.217,1.441-4.622,2.822-2.7,3.566-5.017,5.448-2.95.627-2.95,2.88-1.6,2.5,1.672,4.751.255,2.137,3.786,2.067,3.473-.686,3.857.5a36.036,36.036,0,0,1,.894,3.635c.2.94.708,1.185,1.614,1.881s2.311.3,3.972,2.369,1.092,2.637,3.4,4.321,1.8.627,3.089,1.626,4.112,4.762,5.842,5.017,3.6-.383,4.17.059.778,2.126,2.834,3.821,2.369.5,3.588,2.624,2.7,1.7,3.984,1.7,2.567-.314,2.95.615,7.642,6.144,10.407,8.27,1.928,3.635,5.528,4.448a39.475,39.475,0,0,0,5.842,1.185,6.331,6.331,0,0,0,2.95-.685,9.417,9.417,0,0,1,7.317-2.138c.905,0,1.672-1.242,3.09-.3s4.239.186,2.567,1.627-1.15,1.939-1.987,2.88a6.578,6.578,0,0,0-1.162,2.683l2.254,2.323s.255,3.623,4.552,3.437,6.365-.941,6.551.314,1.162,1.812.2,2.567a14.454,14.454,0,0,1-2.509,1.44s-1.219.186-.255,1.382,1.672,1.056,2.114,2a19.988,19.988,0,0,1,.837,2.126s-.837.313-.512,2.067,1.162,2.439,1.673,2.636a21.736,21.736,0,0,0,3.2.186l2.893-1.313s2.439.314,3.019,1.186.255,1.312,1.545,1.44a12.449,12.449,0,0,0,3.078-.255s2.126-.5,2.892-.686,1.672-.94,2.7-.441c.3.151.58.279.824.395l-.568-9.012Z"
							transform="translate(-4.113 -4.073)"
						/>
						<path
							className="ad-item-1821"
							d="M849.614,629.962l5.644-4.135s4.112-1.869,5.017-2.253a5.808,5.808,0,0,0,2.311-2.381,33.817,33.817,0,0,0,0-3.624,12.455,12.455,0,0,1,3.078-2.508c1.8-1,2.567-3.38,3.218-3.624s0-2.137,1.15-3.135a8.294,8.294,0,0,1,3.345-1.37s3.078,1,4.622,1.37a27.467,27.467,0,0,0,3.461.627,10.857,10.857,0,0,1,2.579.87s-.267-3.124,0-2.868,1.789-.128,2.311.615.638,1.881,1.405,1.754,1.162-1.37,2.183-1.87,1.417-.163,2.962-.523a4.392,4.392,0,0,1,2.439,0,3.719,3.719,0,0,1,.384,2.648c-.384,1.37-2.822,4.507-2.822,4.507s-1.162,2.126,1.405,2.126a25.188,25.188,0,0,0,6.55-.743,5.636,5.636,0,0,0,2.7-2.509c.651-1.254.523-2.126,2.961-4.007a24.09,24.09,0,0,1,3.078-2.183v-1.823a8.342,8.342,0,0,0-.766-2.753s-.511-1.382.766-1.754,1.929-.627,2.568-.755,1.544-1.87,1.544-2.369v-2.265l1.8-1.87,2.949-1.254a21.169,21.169,0,0,1,3.984-3.38,13.98,13.98,0,0,0,1.243-.8s-.291-6.713,0-7.084,2.357-3.38,2.357-3.38a4.972,4.972,0,0,1-1.289-3.635c.127-2.254-.639-3.38.511-4.751a12.4,12.4,0,0,0,1.905-3.38c.406-.882-.616-3.833-.616-3.833l-3-3.554a4.767,4.767,0,0,0-2.137.5,26.735,26.735,0,0,0-3.6,2.5c-.905.883-1.161,1.754-1.8,1.51s-4.878-2.881-4.878-2.881l-4.111-2.253-2.44.87-1.928-1.753a2.716,2.716,0,0,1,.767-2.126c.905-.755,5.017-8.258,5.017-8.258l-.651-13.147s3.729-8.015,4.368-8.4.905-4.623.65-6.76-1.417-5.749-1.289-7.258a72.409,72.409,0,0,1,1.289-8.258,22.78,22.78,0,0,0,.243-2.614l-2.427-1.358s-12.079-.163-12.672,0-3.17,1.01-4.03,1.173-.511.674-1.2,2.091a2.544,2.544,0,0,0,.43,2.834,4.96,4.96,0,0,1,.429,1.591s-.092.825-.429,1a1.7,1.7,0,0,1-1.033.337,10.354,10.354,0,0,1-2.219-.418c-1.033-.255-1.115,0-2.23,0s-1.37.5-2.311.906a2.72,2.72,0,0,1-1.8.092s-1.2,0-2.138-.081-1.463.244-2.578,1-.849,3.008-.849,3.008v3a7.509,7.509,0,0,1-.429,3.008c-.43.917.082,2.416.174,3.008a15.145,15.145,0,0,0,1.1,2.5l-4.7,3.09v11.94l-5.818,2.671-5.4,4.924-.429,6.342-1.1,4.425s-3.263,3-3.519,3.252a58.352,58.352,0,0,0-2.138,6.179,9.123,9.123,0,0,0-.035,1.023c-.011,1.37.035,3.566.035,3.566l-6.678,7.258a49.637,49.637,0,0,0-4.448,4.263c-.349.662,0,3.833,0,3.833l-4.937,7.015-.893,12.357-1.964,6.585-2.4,6.76-.848,6.515,2.567,4.077a22.659,22.659,0,0,0,2.9,2.764,1.719,1.719,0,0,1,.639.7h4.67Z"
							transform="translate(-5.215 -3.122)"
						/>
						<path
							className="ae-item-1821"
							d="M849.614,629.962l5.644-4.135s4.112-1.869,5.017-2.253a5.808,5.808,0,0,0,2.311-2.381,33.817,33.817,0,0,0,0-3.624,12.455,12.455,0,0,1,3.078-2.508c1.8-1,2.567-3.38,3.218-3.624s0-2.137,1.15-3.135a8.294,8.294,0,0,1,3.345-1.37s3.078,1,4.622,1.37a27.467,27.467,0,0,0,3.461.627,10.857,10.857,0,0,1,2.579.87s-.267-3.124,0-2.868,1.789-.128,2.311.615.638,1.881,1.405,1.754,1.162-1.37,2.183-1.87,1.417-.163,2.962-.523a4.392,4.392,0,0,1,2.439,0,3.719,3.719,0,0,1,.384,2.648c-.384,1.37-2.822,4.507-2.822,4.507s-1.162,2.126,1.405,2.126a25.188,25.188,0,0,0,6.55-.743,5.636,5.636,0,0,0,2.7-2.509c.651-1.254.523-2.126,2.961-4.007a24.09,24.09,0,0,1,3.078-2.183v-1.823a8.342,8.342,0,0,0-.766-2.753s-.511-1.382.766-1.754,1.929-.627,2.568-.755,1.544-1.87,1.544-2.369v-2.265l1.8-1.87,2.949-1.254a21.169,21.169,0,0,1,3.984-3.38,13.98,13.98,0,0,0,1.243-.8s-.291-6.713,0-7.084,2.357-3.38,2.357-3.38a4.972,4.972,0,0,1-1.289-3.635c.127-2.254-.639-3.38.511-4.751a12.4,12.4,0,0,0,1.905-3.38c.406-.882-.616-3.833-.616-3.833l-3-3.554a4.767,4.767,0,0,0-2.137.5,26.735,26.735,0,0,0-3.6,2.5c-.905.883-1.161,1.754-1.8,1.51s-4.878-2.881-4.878-2.881l-4.111-2.253-2.44.87-1.928-1.753a2.716,2.716,0,0,1,.767-2.126c.905-.755,5.017-8.258,5.017-8.258l-.651-13.147s3.729-8.015,4.368-8.4.905-4.623.65-6.76-1.417-5.749-1.289-7.258a72.409,72.409,0,0,1,1.289-8.258,22.78,22.78,0,0,0,.243-2.614l-2.427-1.358s-12.079-.163-12.672,0-3.17,1.01-4.03,1.173-.511.674-1.2,2.091a2.544,2.544,0,0,0,.43,2.834,4.96,4.96,0,0,1,.429,1.591s-.092.825-.429,1a1.7,1.7,0,0,1-1.033.337,10.354,10.354,0,0,1-2.219-.418c-1.033-.255-1.115,0-2.23,0s-1.37.5-2.311.906a2.72,2.72,0,0,1-1.8.092s-1.2,0-2.138-.081-1.463.244-2.578,1-.849,3.008-.849,3.008v3a7.509,7.509,0,0,1-.429,3.008c-.43.917.082,2.416.174,3.008a15.145,15.145,0,0,0,1.1,2.5l-4.7,3.09v11.94l-5.818,2.671-5.4,4.924-.429,6.342-1.1,4.425s-3.263,3-3.519,3.252a58.352,58.352,0,0,0-2.138,6.179,9.123,9.123,0,0,0-.035,1.023c-.011,1.37.035,3.566.035,3.566l-6.678,7.258a49.637,49.637,0,0,0-4.448,4.263c-.349.662,0,3.833,0,3.833l-4.937,7.015-.893,12.357-1.964,6.585-2.4,6.76-.848,6.515,2.567,4.077a22.659,22.659,0,0,0,2.9,2.764,1.719,1.719,0,0,1,.639.7h4.67Z"
							transform="translate(-5.215 -3.122)"
						/>
						<path
							className="ad-item-1821"
							d="M907.467,625.873a18.2,18.2,0,0,1,4.367-1l2.439-2.381,1.417-2s2.439-2.009,4.111-3.636-.127-2.125-.511-5.5a33.819,33.819,0,0,1-.394-6.424c.139-1.045.905-1.463,1.544-2.09s2.822-2.009,4.239-3.265,1.033-1.626,1.928-3.124c.872-1.452.5-2.753.476-4.076a.763.763,0,0,1-.116.012,8.779,8.779,0,0,1,.21-3.369l.72-2.706-2.184-.882a1.491,1.491,0,0,0-1.033,1.127,2.285,2.285,0,0,1-1.2,1.707,14.03,14.03,0,0,1-1.242.8,21.208,21.208,0,0,0-3.984,3.38l-2.95,1.254-1.8,1.87v2.265c0,.5-.894,2.254-1.544,2.369s-1.278.384-2.567.755-.766,1.754-.766,1.754a8.342,8.342,0,0,1,.766,2.753v1.823a24.147,24.147,0,0,0-3.078,2.183c-2.44,1.882-2.311,2.753-2.961,4.007a5.632,5.632,0,0,1-2.7,2.509,25.2,25.2,0,0,1-6.551.743c-2.567,0-1.405-2.126-1.405-2.126s2.439-3.136,2.822-4.507a3.71,3.71,0,0,0-.384-2.647,4.379,4.379,0,0,0-2.439,0c-1.544.36-1.928.023-2.961.522s-1.405,1.754-2.183,1.87-.894-1-1.406-1.754-2.055-.372-2.311-.615,0,2.869,0,2.869a10.9,10.9,0,0,0-2.578-.872,27.247,27.247,0,0,1-3.461-.627c-1.544-.372-4.623-1.37-4.623-1.37a8.294,8.294,0,0,0-3.345,1.37c-1.15,1-.511,2.881-1.15,3.136s-1.417,2.624-3.217,3.623a12.423,12.423,0,0,0-3.078,2.509,34.059,34.059,0,0,1,0,3.623,5.808,5.808,0,0,1-2.311,2.381c-.906.384-5.017,2.254-5.017,2.254l-5.644,4.134-5.274,3.032h-4.657c.441.7.894,1.638.894,1.638l2.055,6.515s-1.2,3.833-1.2,4.345a52.705,52.705,0,0,0,2.742,6.143c.162.2,4.448,5.146,4.8,6.005s1.2,4.878,1.2,4.878l-3.6,2.159-4.275-3.5-3.774-1.336s-1.545,1.5-2.056,2-2.056,2.508-3.426,2.833-4.111.837-4.111.837l-4.785-1.5a1.88,1.88,0,0,0-2.23.837c-.686,1.336-.175,2.334-1.034,3.333a18.76,18.76,0,0,1-2.393,2.172h-2.23l1.893,5.505s1.707,2.171.511,4.007a4.977,4.977,0,0,1-2.915,2.171,56.171,56.171,0,0,0-5.819-1c-1.2,0-4.971-.5-4.971-.5l-2.393,1.5.686,3.008.337,3.833-.337,3.508,1.022,2.508,2.742.837,2.567.325,2.055,3.171a23.626,23.626,0,0,1,.523,3.345c0,1-.174,3.008-.174,3.833s-.512,2.508.174,2.845.163.837,2.044.837h6.516a7.388,7.388,0,0,1,1.533,2.334,9.225,9.225,0,0,0,1.37,2.334h2.055a5.914,5.914,0,0,1,2.742,0,22.97,22.97,0,0,1,3.09.837h6.5l4.622-5.006s2.393-4.843,3.426-5.505,3.078-4.181,4.112-4.68a7.187,7.187,0,0,0,2.055-2s1.37-4.181,1.707-4.681a38.671,38.671,0,0,1,4.112-2.834,11.777,11.777,0,0,0,4.111-.894,32.217,32.217,0,0,0,4.112-3.449s1.707-6.179,2.567-7.34,2.741-4.68,2.741-4.68,4.959-2.672,5.993-3.334,3.078-5.005,3.078-5.005-1.37-3.67,0-5.007a12.943,12.943,0,0,1,5.83-3.542c2.567-.639,3.078-.465,5.645-1.975s3.09-1.661,3.426-2.834a19.6,19.6,0,0,0,.349-5.505c-.175-1.336-1.894-3.008-1.37-3.682s1.428-1.834,1.428-1.834l6.1-8.177s4.46-7.678,5.61-8.3"
							transform="translate(-5.02 -3.666)"
						/>
						<path
							className="ae-item-1821"
							d="M907.467,625.873a18.2,18.2,0,0,1,4.367-1l2.439-2.381,1.417-2s2.439-2.009,4.111-3.636-.127-2.125-.511-5.5a33.819,33.819,0,0,1-.394-6.424c.139-1.045.905-1.463,1.544-2.09s2.822-2.009,4.239-3.265,1.033-1.626,1.928-3.124c.872-1.452.5-2.753.476-4.076a.763.763,0,0,1-.116.012,8.779,8.779,0,0,1,.21-3.369l.72-2.706-2.184-.882a1.491,1.491,0,0,0-1.033,1.127,2.285,2.285,0,0,1-1.2,1.707,14.03,14.03,0,0,1-1.242.8,21.208,21.208,0,0,0-3.984,3.38l-2.95,1.254-1.8,1.87v2.265c0,.5-.894,2.254-1.544,2.369s-1.278.384-2.567.755-.766,1.754-.766,1.754a8.342,8.342,0,0,1,.766,2.753v1.823a24.147,24.147,0,0,0-3.078,2.183c-2.44,1.882-2.311,2.753-2.961,4.007a5.632,5.632,0,0,1-2.7,2.509,25.2,25.2,0,0,1-6.551.743c-2.567,0-1.405-2.126-1.405-2.126s2.439-3.136,2.822-4.507a3.71,3.71,0,0,0-.384-2.647,4.379,4.379,0,0,0-2.439,0c-1.544.36-1.928.023-2.961.522s-1.405,1.754-2.183,1.87-.894-1-1.406-1.754-2.055-.372-2.311-.615,0,2.869,0,2.869a10.9,10.9,0,0,0-2.578-.872,27.247,27.247,0,0,1-3.461-.627c-1.544-.372-4.623-1.37-4.623-1.37a8.294,8.294,0,0,0-3.345,1.37c-1.15,1-.511,2.881-1.15,3.136s-1.417,2.624-3.217,3.623a12.423,12.423,0,0,0-3.078,2.509,34.059,34.059,0,0,1,0,3.623,5.808,5.808,0,0,1-2.311,2.381c-.906.384-5.017,2.254-5.017,2.254l-5.644,4.134-5.274,3.032h-4.657c.441.7.894,1.638.894,1.638l2.055,6.515s-1.2,3.833-1.2,4.345a52.705,52.705,0,0,0,2.742,6.143c.162.2,4.448,5.146,4.8,6.005s1.2,4.878,1.2,4.878l-3.6,2.159-4.275-3.5-3.774-1.336s-1.545,1.5-2.056,2-2.056,2.508-3.426,2.833-4.111.837-4.111.837l-4.785-1.5a1.88,1.88,0,0,0-2.23.837c-.686,1.336-.175,2.334-1.034,3.333a18.76,18.76,0,0,1-2.393,2.172h-2.23l1.893,5.505s1.707,2.171.511,4.007a4.977,4.977,0,0,1-2.915,2.171,56.171,56.171,0,0,0-5.819-1c-1.2,0-4.971-.5-4.971-.5l-2.393,1.5.686,3.008.337,3.833-.337,3.508,1.022,2.508,2.742.837,2.567.325,2.055,3.171a23.626,23.626,0,0,1,.523,3.345c0,1-.174,3.008-.174,3.833s-.512,2.508.174,2.845.163.837,2.044.837h6.516a7.388,7.388,0,0,1,1.533,2.334,9.225,9.225,0,0,0,1.37,2.334h2.055a5.914,5.914,0,0,1,2.742,0,22.97,22.97,0,0,1,3.09.837h6.5l4.622-5.006s2.393-4.843,3.426-5.505,3.078-4.181,4.112-4.68a7.187,7.187,0,0,0,2.055-2s1.37-4.181,1.707-4.681a38.671,38.671,0,0,1,4.112-2.834,11.777,11.777,0,0,0,4.111-.894,32.217,32.217,0,0,0,4.112-3.449s1.707-6.179,2.567-7.34,2.741-4.68,2.741-4.68,4.959-2.672,5.993-3.334,3.078-5.005,3.078-5.005-1.37-3.67,0-5.007a12.943,12.943,0,0,1,5.83-3.542c2.567-.639,3.078-.465,5.645-1.975s3.09-1.661,3.426-2.834a19.6,19.6,0,0,0,.349-5.505c-.175-1.336-1.894-3.008-1.37-3.682s1.428-1.834,1.428-1.834l6.1-8.177S906.318,626.5,907.467,625.873Z"
							transform="translate(-5.02 -3.666)"
						/>
						<path
							className="ad-item-1821"
							d="M1004.366,560.933c-.778-.243-1.8-1.44-3.415-2.683s-2.753-.94-4.367-1.509-3.264-1.254-3.264-1.254-2.125,0-2.578.07-2.44,1.683-3.206,1.939-.639-.127-2.7-.754-1.614-1.057-1.928-1.626a27.468,27.468,0,0,1-2-4.507c-.255-1.127-.639-3.124-.894-4.251s-1.289-1.011-2.381-1.51-3.461-1.626-3.461-1.626-1.475.813-2.439,1.381a9.177,9.177,0,0,0-2.126,2.44s-2.5,2.567-2.567,2.753,2.892,4.948,2.892,4.948-1.346,1.126-1.475,1.312,2.241,1.313,2.241,1.313l1.87,2.88-1.87,2.126s-2.694,1.7-3.53,2.068a24.168,24.168,0,0,1-5.459,1.753,16,16,0,0,0-3.4.814s-2.183.882-2.822,1.2-1.545,1.557-2.126,2a5.037,5.037,0,0,1-3.4,2c-2.625.569-2.567.012-3.972.012l-1.023.058a2.624,2.624,0,0,0-1.742.813c-.778.871-.07,1.684-1.219,3.565s-3.275,2.626-3.984,3.449.186,1.441,0,3.31-1.033,1.882-1.6,2.509-1.487,1.44-2.183,2.311a2.56,2.56,0,0,0-.709,1.824,3.41,3.41,0,0,1-2.254,1.683c-.731,0-3.019.2-3.565.245.023,1.324.4,2.624-.476,4.076-.894,1.5-.511,1.882-1.928,3.124s-3.6,2.636-4.239,3.263-1.405,1.045-1.544,2.091a33.81,33.81,0,0,0,.394,6.423c.384,3.38,2.183,3.88.511,5.505s-4.111,3.635-4.111,3.635l-1.417,2-2.44,2.381a18.2,18.2,0,0,0-4.367,1c-1.15.627-5.61,8.3-5.61,8.3l7.537,1.672s2.4,2.5,3.427,2.834,4.448,1,4.448,1,3.263,2.671,3.426,3.682,0,5.168,0,6.167-2.056,5.343-2.056,5.343l-2.392,1.672a60.055,60.055,0,0,0-.511,7.178c.162,1.5,1.2,4.506,1.707,6.678s1.2,5.261,1.544,7.05.337,4.635.686,5.807,1.881,5.726,2.566,7.282,1.371,4.4,1.708,5.064,2.915,2.172,2.915,2.172,4.971,2,5.656,2.171,3.937-.674,5.819-.5a49.3,49.3,0,0,1,6.341,1.5l3.763,6.679s2.392-1,3.078.162,2.4,3.682,2.4,3.682,2.218,1.835,4.274,1.661,5.482-1,6.516-1.835a13.28,13.28,0,0,1,5.993-2h6.841V666.659L981.95,666l4.449,2a45.208,45.208,0,0,1,4.971-.5,23.776,23.776,0,0,1,3.588.337,19.761,19.761,0,0,0,3.6,1c.86,0,2.056-1.161,2.056-1.161l2.567-1.672s1.033-1,3.775-.837,5.47-1,7.189-1.5a19.7,19.7,0,0,0,4.413-2.509v-2.172l3.287-3.5,4.623-2.845s2.4,3.508,2.915,3.345,2.4-1.011,2.4-1.011a10.975,10.975,0,0,0,2.044-2.334c.523-1,2.742-2,3.949-2.172a8.675,8.675,0,0,1,2.9,0c1.545.175,2.23-.162,2.741-.836s1.2-2.5,2.056-2.834,2.393,0,3.253-.337a37.375,37.375,0,0,0,3.252-2.16c1.37-.836,1.37-1.51,2.579-1.846a10.352,10.352,0,0,1,2.393-.325l3.078,1.161,2.23,1.337,1.544-1s.686-2.833,0-3.333-.349-3.844,1.2-3.844,4.286,3.345,4.286,3.345-.349,1.834,2.055,1.661,7.016-.662,8.56-.837,3.937.175,5.308-.162,1.37-2,2.9-2.334,2.916-.837,3.427-.337.686,1.834,3.089,1.834a46.417,46.417,0,0,0,5.134,0,49.051,49.051,0,0,0,8.048-.836c3.253-.5,2.567-.837,6.342-.5s5.645.5,6.33.337-2.056-1.672,2.566-1a23.159,23.159,0,0,0,4.541.221V521.688s-9.443,3.949-10.011,4.134-2.707,1.627-3.8,2.184-1.092,1.126-2.37,2.2a8.55,8.55,0,0,1-4.82,1.939c-2.114.256-2.439.814-4.75,1.313s-2.44,1.94-5.458,4.077a18.071,18.071,0,0,1-6.876,2.682l-4.623.883-3.147,1.626-3.531,4.634-1.858,3a11.093,11.093,0,0,1-2.962,1.509,7.972,7.972,0,0,1-3.844.058c-1.219-.313-1.742-1.869-2.44-2.31a17.944,17.944,0,0,0-4.052-1.2c-.384,0-6.226,2.067-6.424,2.2a15.763,15.763,0,0,0-1.66,2.253,5.834,5.834,0,0,1-2.056,1.812c-.58.2-2,.384-3.473.628s-2.183,0-4.111-.314-1.219,0-2.5-.5a2.63,2.63,0,0,0-2.451.5,17.29,17.29,0,0,0-3.531.755,6.226,6.226,0,0,0-2.253,1.5c-.255.314-3.008.384-3.008.384s-1.858-.464-2.032-1.626-3.775-2.846-5.146-4.344a18.246,18.246,0,0,0-4.448-3.008l-2.393-5.007,1.37-3.17s-6.341-7.515-6.853-8.85c0,0-4.587,29.7-5.226,29.7a9.154,9.154,0,0,1-2.5-.384"
							transform="translate(-5.646 -3.268)"
						/>
						<path
							className="ae-item-1821"
							d="M1004.366,560.933c-.778-.243-1.8-1.44-3.415-2.683s-2.753-.94-4.367-1.509-3.264-1.254-3.264-1.254-2.125,0-2.578.07-2.44,1.683-3.206,1.939-.639-.127-2.7-.754-1.614-1.057-1.928-1.626a27.468,27.468,0,0,1-2-4.507c-.255-1.127-.639-3.124-.894-4.251s-1.289-1.011-2.381-1.51-3.461-1.626-3.461-1.626-1.475.813-2.439,1.381a9.177,9.177,0,0,0-2.126,2.44s-2.5,2.567-2.567,2.753,2.892,4.948,2.892,4.948-1.346,1.126-1.475,1.312,2.241,1.313,2.241,1.313l1.87,2.88-1.87,2.126s-2.694,1.7-3.53,2.068a24.168,24.168,0,0,1-5.459,1.753,16,16,0,0,0-3.4.814s-2.183.882-2.822,1.2-1.545,1.557-2.126,2a5.037,5.037,0,0,1-3.4,2c-2.625.569-2.567.012-3.972.012l-1.023.058a2.624,2.624,0,0,0-1.742.813c-.778.871-.07,1.684-1.219,3.565s-3.275,2.626-3.984,3.449.186,1.441,0,3.31-1.033,1.882-1.6,2.509-1.487,1.44-2.183,2.311a2.56,2.56,0,0,0-.709,1.824,3.41,3.41,0,0,1-2.254,1.683c-.731,0-3.019.2-3.565.245.023,1.324.4,2.624-.476,4.076-.894,1.5-.511,1.882-1.928,3.124s-3.6,2.636-4.239,3.263-1.405,1.045-1.544,2.091a33.81,33.81,0,0,0,.394,6.423c.384,3.38,2.183,3.88.511,5.505s-4.111,3.635-4.111,3.635l-1.417,2-2.44,2.381a18.2,18.2,0,0,0-4.367,1c-1.15.627-5.61,8.3-5.61,8.3l7.537,1.672s2.4,2.5,3.427,2.834,4.448,1,4.448,1,3.263,2.671,3.426,3.682,0,5.168,0,6.167-2.056,5.343-2.056,5.343l-2.392,1.672a60.055,60.055,0,0,0-.511,7.178c.162,1.5,1.2,4.506,1.707,6.678s1.2,5.261,1.544,7.05.337,4.635.686,5.807,1.881,5.726,2.566,7.282,1.371,4.4,1.708,5.064,2.915,2.172,2.915,2.172,4.971,2,5.656,2.171,3.937-.674,5.819-.5a49.3,49.3,0,0,1,6.341,1.5l3.763,6.679s2.392-1,3.078.162,2.4,3.682,2.4,3.682,2.218,1.835,4.274,1.661,5.482-1,6.516-1.835a13.28,13.28,0,0,1,5.993-2h6.841V666.659L981.95,666l4.449,2a45.208,45.208,0,0,1,4.971-.5,23.776,23.776,0,0,1,3.588.337,19.761,19.761,0,0,0,3.6,1c.86,0,2.056-1.161,2.056-1.161l2.567-1.672s1.033-1,3.775-.837,5.47-1,7.189-1.5a19.7,19.7,0,0,0,4.413-2.509v-2.172l3.287-3.5,4.623-2.845s2.4,3.508,2.915,3.345,2.4-1.011,2.4-1.011a10.975,10.975,0,0,0,2.044-2.334c.523-1,2.742-2,3.949-2.172a8.675,8.675,0,0,1,2.9,0c1.545.175,2.23-.162,2.741-.836s1.2-2.5,2.056-2.834,2.393,0,3.253-.337a37.375,37.375,0,0,0,3.252-2.16c1.37-.836,1.37-1.51,2.579-1.846a10.352,10.352,0,0,1,2.393-.325l3.078,1.161,2.23,1.337,1.544-1s.686-2.833,0-3.333-.349-3.844,1.2-3.844,4.286,3.345,4.286,3.345-.349,1.834,2.055,1.661,7.016-.662,8.56-.837,3.937.175,5.308-.162,1.37-2,2.9-2.334,2.916-.837,3.427-.337.686,1.834,3.089,1.834a46.417,46.417,0,0,0,5.134,0,49.051,49.051,0,0,0,8.048-.836c3.253-.5,2.567-.837,6.342-.5s5.645.5,6.33.337-2.056-1.672,2.566-1a23.159,23.159,0,0,0,4.541.221V521.688s-9.443,3.949-10.011,4.134-2.707,1.627-3.8,2.184-1.092,1.126-2.37,2.2a8.55,8.55,0,0,1-4.82,1.939c-2.114.256-2.439.814-4.75,1.313s-2.44,1.94-5.458,4.077a18.071,18.071,0,0,1-6.876,2.682l-4.623.883-3.147,1.626-3.531,4.634-1.858,3a11.093,11.093,0,0,1-2.962,1.509,7.972,7.972,0,0,1-3.844.058c-1.219-.313-1.742-1.869-2.44-2.31a17.944,17.944,0,0,0-4.052-1.2c-.384,0-6.226,2.067-6.424,2.2a15.763,15.763,0,0,0-1.66,2.253,5.834,5.834,0,0,1-2.056,1.812c-.58.2-2,.384-3.473.628s-2.183,0-4.111-.314-1.219,0-2.5-.5a2.63,2.63,0,0,0-2.451.5,17.29,17.29,0,0,0-3.531.755,6.226,6.226,0,0,0-2.253,1.5c-.255.314-3.008.384-3.008.384s-1.858-.464-2.032-1.626-3.775-2.846-5.146-4.344a18.246,18.246,0,0,0-4.448-3.008l-2.393-5.007,1.37-3.17s-6.341-7.515-6.853-8.85c0,0-4.587,29.7-5.226,29.7A9.154,9.154,0,0,1,1004.366,560.933Z"
							transform="translate(-5.646 -3.268)"
						/>
						<path
							className="aa-item-1821"
							d="M861.932,533.118a3.361,3.361,0,0,0,2.381.882c1.15-.058,2.694-.127,2.694-.127l1.928-.557,5.134.313v-7.143s-1.544-1.207-1.881-1.544a4.349,4.349,0,0,1-.987-1.661c-.081-.465-1.29-1.336-1.29-1.336a15.075,15.075,0,0,0-2.265-1.045c-1.417-.547-2.183.162-4.146,0s-7.794,0-7.794,0a6.1,6.1,0,0,1-1.37-1.464c-.255-.58-.65-3.426-.905-4.507s-1.15-.627-1.929-.754-2.091.836-2.091.836a27.577,27.577,0,0,1-.558,3.253,2.241,2.241,0,0,1-.766,1.416c-.476.547-.3.837-3.6-.5s-.639-.872-1.754-1.754-.476-1.579-.731-2.753.731-1.207,1.2-1.963.523-1.37,1.754-2a8.05,8.05,0,0,0,2.357-1.382,3.264,3.264,0,0,0,.778-1.034c.21-.337.546-.8.894-1.382s.175-.917.081-1.591-.894-3.334-.976-4.623a2.207,2.207,0,0,1,.255-1.544c.035-.291,2.9.58,4.449,1.079s1.754.047,2.659-.29.813-.709,1.37-1.173a3.159,3.159,0,0,0,.767-2c.081-.674-1.37-2.009-1.37-2.009a10.254,10.254,0,0,0-2.23-1,6.4,6.4,0,0,0-2.648.337c-.86.162-1.5,1.079-2.021,1.079s-.72-.116-1.789-.243-.731-.418-1.08-.836-.255-1.8-.337-2.625a5.752,5.752,0,0,1,.151-1.58,10.686,10.686,0,0,1-2.311-.278,6.356,6.356,0,0,0-1.672-.813,8.317,8.317,0,0,0-2.381-.384,14.319,14.319,0,0,0-1.788.569,6.724,6.724,0,0,1-2,.5c-1.022.127-1.277.2-2.567.405s-1.985,1.592-2.636,2.033a20.6,20.6,0,0,0-2.439,1.44,18.182,18.182,0,0,1-3.275,1.7s-2.439.929-2.5,1.684-.394,2.381-.453,3.38-.383,1.2-.511,2.822.384,5.691,1.476,7a4.249,4.249,0,0,1,.963,3.263c0,.872-.127,1.185.256,1.5s4.46,2.567,4.46,2.567c.233-.36.639-.627,1.765-.569,2.183.128,1.417-.394,2.834,0s1.15-.116,2.183.882a34.61,34.61,0,0,1,2.312,2.625s1.7,2.253,1.615,2.753-.593.5.568,1.011a5.072,5.072,0,0,0,1.789.5.865.865,0,0,1,1.29.627,7.646,7.646,0,0,1,.127,2.254s-1.8,1-1.417,1.869a2.247,2.247,0,0,0,1.672,1.382,3.759,3.759,0,0,0,1.29,0s-.535-2.126.7-1.754a5.572,5.572,0,0,1,2.253,1.627,2.1,2.1,0,0,0,.639,1.5c.651.512,1.115,1.359,1.591.988s5.528.139,5.528.139,5.981-.3,6.307,0"
							transform="translate(-5.141 -3.059)"
						/>
						<path
							className="af-item-1821"
							d="M861.932,533.118a3.361,3.361,0,0,0,2.381.882c1.15-.058,2.694-.127,2.694-.127l1.928-.557,5.134.313v-7.143s-1.544-1.207-1.881-1.544a4.349,4.349,0,0,1-.987-1.661c-.081-.465-1.29-1.336-1.29-1.336a15.075,15.075,0,0,0-2.265-1.045c-1.417-.547-2.183.162-4.146,0s-7.794,0-7.794,0a6.1,6.1,0,0,1-1.37-1.464c-.255-.58-.65-3.426-.905-4.507s-1.15-.627-1.929-.754-2.091.836-2.091.836a27.577,27.577,0,0,1-.558,3.253,2.241,2.241,0,0,1-.766,1.416c-.476.547-.3.837-3.6-.5s-.639-.872-1.754-1.754-.476-1.579-.731-2.753.731-1.207,1.2-1.963.523-1.37,1.754-2a8.05,8.05,0,0,0,2.357-1.382,3.264,3.264,0,0,0,.778-1.034c.21-.337.546-.8.894-1.382s.175-.917.081-1.591-.894-3.334-.976-4.623a2.207,2.207,0,0,1,.255-1.544c.035-.291,2.9.58,4.449,1.079s1.754.047,2.659-.29.813-.709,1.37-1.173a3.159,3.159,0,0,0,.767-2c.081-.674-1.37-2.009-1.37-2.009a10.254,10.254,0,0,0-2.23-1,6.4,6.4,0,0,0-2.648.337c-.86.162-1.5,1.079-2.021,1.079s-.72-.116-1.789-.243-.731-.418-1.08-.836-.255-1.8-.337-2.625a5.752,5.752,0,0,1,.151-1.58,10.686,10.686,0,0,1-2.311-.278,6.356,6.356,0,0,0-1.672-.813,8.317,8.317,0,0,0-2.381-.384,14.319,14.319,0,0,0-1.788.569,6.724,6.724,0,0,1-2,.5c-1.022.127-1.277.2-2.567.405s-1.985,1.592-2.636,2.033a20.6,20.6,0,0,0-2.439,1.44,18.182,18.182,0,0,1-3.275,1.7s-2.439.929-2.5,1.684-.394,2.381-.453,3.38-.383,1.2-.511,2.822.384,5.691,1.476,7a4.249,4.249,0,0,1,.963,3.263c0,.872-.127,1.185.256,1.5s4.46,2.567,4.46,2.567c.233-.36.639-.627,1.765-.569,2.183.128,1.417-.394,2.834,0s1.15-.116,2.183.882a34.61,34.61,0,0,1,2.312,2.625s1.7,2.253,1.615,2.753-.593.5.568,1.011a5.072,5.072,0,0,0,1.789.5.865.865,0,0,1,1.29.627,7.646,7.646,0,0,1,.127,2.254s-1.8,1-1.417,1.869a2.247,2.247,0,0,0,1.672,1.382,3.759,3.759,0,0,0,1.29,0s-.535-2.126.7-1.754a5.572,5.572,0,0,1,2.253,1.627,2.1,2.1,0,0,0,.639,1.5c.651.512,1.115,1.359,1.591.988s5.528.139,5.528.139S861.606,532.815,861.932,533.118Z"
							transform="translate(-5.141 -3.059)"
						/>
						<path
							className="ag-item-1821"
							d="M1123.133,107.976c-.093.337-.685,2.671-.685,2.671s-2.15.581-2.567.662-4.031,2.172-4.031,2.172l-1.8,2.671s-1.626.174-1.963.174-.255-1.01-.348-1.254a5.7,5.7,0,0,0-.767-1,6.256,6.256,0,0,0-.766,1.661,10.071,10.071,0,0,0,1.2,2.172l-2.15,3.588-5.308,2.591-15.064,4.506-14.82,3.171-7.015,14.274-9.42,14.936s-4.03.418-4.367.5-4.286,2.091-4.286,2.091l-4.8,3.67-4.7,8.35-4.112,11.185-2.915,4.17-2.219,6.934-4.541,5.342-2.1.987h-.012l-.372.175-4.657,7.433v9.849l-2.614,3.833-1.208,6.434a19.584,19.584,0,0,1,2.148,2.753,10.252,10.252,0,0,0,.43,1.579l-1.37,1.754-1.893,1.754-4.449,10.348s-2.741,2.928-2.915,3.171-7.956,9.269-7.956,9.269L994.1,275.316s9.5-.662,10.012-.824.6-.592,1.033-1.255,1.37-1.928,1.626-1.928a14.113,14.113,0,0,0,2.648-.58c1.034-.337.86-2.5.86-2.5l3.426-.418s.255,1.5.337,2.079a7.725,7.725,0,0,0,1.544,2.509c.43.418.86.755.86,1.336a22.657,22.657,0,0,1-.6,2.834l1.115,1.834a8.525,8.525,0,0,0,2.66-1.08,7.111,7.111,0,0,1,3.078-1.173c.511,0,3.856,1.092,4.111,1.092a9.759,9.759,0,0,1,1.452,2.833c.093.418,5.307,25.622,5.307,25.622l16.1,14.274s.175,3.426.175,3.925.6,6.005.766,6.6,1.29,2.66,1.115,3.171a20.635,20.635,0,0,0-.592,2.416c0,.255,1.452,3.844.337,5.586s-2.23.418-2.485.418a19.174,19.174,0,0,0-2.312,2.172l-1.115,7.677s-.941,8.015-.941,8.432a31.312,31.312,0,0,0,1.035,3.845,20.646,20.646,0,0,1,.255,2.916l-.767,3.263,3,2.915-.6,2.254.686,1.08,8.734-.082s2.915-1.254,3.333-1.08a12.7,12.7,0,0,1,2.659,3.09c0,.337.686,6.586.686,6.586l4.8,6.1a2.977,2.977,0,0,1,.174,2.171c-.348,1.336,1.278,2.416,1.278,2.416l-3,1.174a10.386,10.386,0,0,1-2.23-.581c-.255-.255-1.2-1.509-1.2-1.509l-1.533.674a21.824,21.824,0,0,0-.349,2.206c0,.465.43,1.208-.511,1.8a12.925,12.925,0,0,1-1.544.837l-1.964-1.929a2.86,2.86,0,0,0-1.37.592,9.222,9.222,0,0,0-.6,2.335c-.174.58.256,1.5-.511,2.171s-1.115,1.08-1.626,1.417a6.711,6.711,0,0,1-2.4.58,26.259,26.259,0,0,1-2.648-.58s-1.975-1.509-2.485-1.417-.686.581-.941,1.162l-3.426-.58-.348-2.672c-.337-2.671-.686-1.916-.686-1.916h-1.452s-2.056-.337-3.937-.731-1.37.476-3.171.395-1.626-.755-2.485-1.464-.766-.29-2.312-1.207-1.963-.418-3-1-.848-.918-1.37-2.091.429-1.417.86-2,0-.674.348-2.091.163-1.916.511-4.007a15.373,15.373,0,0,0,.175-4.251,10.547,10.547,0,0,0-1.464-3.682c-.255-.418-1.452-1.834-1.452-1.834s-.511-1.58-1.289-4.008-1.916-1.834-1.916-1.834l-2.266-1.255a11.478,11.478,0,0,1-.011-1.834c.08-.837-.255-1.08-.255-2.079s-.767-1.011-1.8-1.591-.86,1.591-.86,1.591a14.933,14.933,0,0,1-3.251-.755,24.246,24.246,0,0,0-4.368-1.08c-2.648-.592-1.115.081-3.252.163s-2.056,1-2.056,1L999.4,366.13l-1.8,1.417a8.222,8.222,0,0,1-1.37-.162c-.86-.175-1.115-.418-2.485-.837a10.19,10.19,0,0,0-3-.337s-1.881-.418-3.507-.917-1.452-1.08-2.056-1.835-1.452-1.834-1.452-1.834a14.652,14.652,0,0,0-2.312-1.835,32.178,32.178,0,0,0-3.949-2.172c-2.648-1.254-2.137,0-3.159-.162a3.5,3.5,0,0,1-1.544-.592,4.215,4.215,0,0,1-1.023-2.254,6.292,6.292,0,0,1,.337-2.253,9.874,9.874,0,0,1,1.452-2.416s.86-1.835,1.545-2.927.081-1.5-.175-2.334a18.844,18.844,0,0,0-1.533-2.591,23.545,23.545,0,0,1-1.626-2.671c-.685-1.5-1.463-3.171-1.463-3.171s-.453-.186-.941-.372c0,0,1.475-3.774,1.672-4.529s.639-2.567.639-2.567a18.462,18.462,0,0,1,.325-3.252c.314-1.568-.255-2.2-.325-3.751s-.837-1.824-1.219-2.567,1.219-5.889,1.219-5.889-.453-1.44-.964-3.008-1.278-1.812-1.533-3.437-.709-1.441-.964-2.567a10.024,10.024,0,0,1-.2-2.44l.837-2.694a24.031,24.031,0,0,0-1.219-3.067,24.539,24.539,0,0,0-2-2.95c-.7-.813-.824-.871-1.219-4.123s-.569-.7-.766-1.626-.326-.882-1.162-1.382-1.6-.186-2.114-.255a6.333,6.333,0,0,1-2.509-1.683c-1.091-1-1.858-.569-3.588-.755s-1.87.186-4.623.5-1.544-1.185-2.183-2.567-2.126-1.626-3.217-2.81a5.014,5.014,0,0,0-1.859-1.44s-2.183-2.126-3.913-3.821-1.615-.627-2.311-.627a6.941,6.941,0,0,1-2-.5,11.988,11.988,0,0,1-1.8-1.626,11.039,11.039,0,0,0-2.625-.627c-.906,0-1.29,1.753-1.29,1.753a6.227,6.227,0,0,1-2.183-1.126c-.964-.814-1.022-1.5-1.6-2.381a35.1,35.1,0,0,1-1.672-3.31s-3.531-2.451-4.948-3.322-6.294-3.566-6.736-4.378a7.272,7.272,0,0,1-.906-2.323c-.441-1.567-.569-2-.569-2l.441-2.822-.836-3.38s-.255-1.568-.5-2.881-.394-2.381-.394-2.381a25.569,25.569,0,0,1,.325-2.752c.267-1.557-.325-.814-.905-1.778s-1.22-.975-1.533-1.789-1.034-3.321-1.034-3.321A5.488,5.488,0,0,1,906.8,229.5a7.391,7.391,0,0,0,2.056-3.194,5.636,5.636,0,0,0-.453-1.754c-.127-.557-2.055-1.684-2.055-1.684a31.674,31.674,0,0,1-3.275-1.626c-.964-.627-1.347-.813-1.731-1.127s-.452-1.567-.452-1.567l-.639-2.44a27.546,27.546,0,0,0,2.5-3.252.99.99,0,0,0-.187-.732v-.011l5.819-9.152.082-2.753a11.43,11.43,0,0,1,1.638-2.845c.766-.743,1.532-1.417,1.532-1.417A15.789,15.789,0,0,0,913,194.19a4.978,4.978,0,0,0,.417-1.754v-3.5s-.07-1.173,0-2.845a22.882,22.882,0,0,0,0-2.672,17.879,17.879,0,0,1-.5-3.252,5.727,5.727,0,0,1,.337-2.753,4.966,4.966,0,0,0,0-2.509c-.163-.824.255-1.08,0-2.439s-.941-1.15-1.278-1.568-2.23-2.578-2.23-2.578l-1.765-3.973c.568.047,1.1.3,2.706.465,2.659.243,2.915,1.672,4.971,2.253s4.019,1.336,8.13,2.416a53.7,53.7,0,0,0,10.616,2.009c3.6.244,5.145-1.51,6.852-2.009s.081-2.671,1.545-3.833-.093-1.672,0-3.089-.174-2.509,0-3.589-.174-3.845,0-4.507,3-1.753,3-1.753.081-1,1.707-3.009,1.975.5,1.975.5a13,13,0,0,0,2.742-.325,7.588,7.588,0,0,1,2.822-.175c1.544,0,1.2.256,5.818,1.754s1.289.337,3.774,1.672,1.533.581,3.16,1.255a4.921,4.921,0,0,0,2.485.5h2.148s3.844-.337,5.389-.418a6.724,6.724,0,0,1,2.822.5,22.333,22.333,0,0,0,2.485-1c1.2-.592,2.138-.337,6.853,0s2.393,0,7.189-.837,5.483-4.181,6.087-4.507,0-1.091,0-1.51.417-.5,1.277-1.08a7.473,7.473,0,0,1,2.4-.836s1.022-.418,1.707-.755a4.768,4.768,0,0,0,1.8-1.661,14.9,14.9,0,0,0,1.2-2.254c.255-.592,2.23-1.509,2.23-1.509s2.311-1,3.426-1.336a3,3,0,0,0,1.626-1.661,18.973,18.973,0,0,0,2.822-2.346,13.58,13.58,0,0,1,1.115-1.917c.43-.5,2.393-.662,3.334-.917a11.1,11.1,0,0,0,2.915-1.917,27.4,27.4,0,0,1,2.822-2.09,6.282,6.282,0,0,1,3.682-.581s-.592.244,4.623-.592c2.52-.395,3.345-.546,3.519-.6h-.058a.346.346,0,0,1,.092-.011c-.011.011-.011.011-.023.011.58-.035,1.823-.127,3.578-.313,2.485-.244,1.033-.5,3.856-3.078s4.03-2.009,7.364-4.345,3.427-6.841,3.427-6.841l1.881-2.927.766-3.252V101.8c0-.418-.685-1.162-.685-1.162s-2.73-1.336-2.822-1.834a1.677,1.677,0,0,1,.349-1.254c.255-.418.94,0,1.8.162a1.359,1.359,0,0,0,1.452-.337c.429-.325,1.37.093,2.822.255s1.033.418,2.138.337.778-.836,1.207-1.336,2.138.5,2.138.5.685,1,.511,1.672-1.37.406-1.37.406v2.346a.9.9,0,0,0,1.115,1,9.927,9.927,0,0,0,2.485-.418c1.452-.418.081-1.5.255-2.091s1.8.592,2.311.5,2.137-.917,2.056-1.243-.859-.836-1.115-1.509a4.537,4.537,0,0,0-1.627-1.835,2.245,2.245,0,0,0-1.881-.417c-.43,0-1.034-.743-.86-1.662s2.23-.592,4.111-1.509.767-3.171,1.521-2.916.872,1.662.186,2.254.686.743.686.743,1.115.917,1.638.836.674-.418,1.533-1.254.94-.243,1.254-.662a1.381,1.381,0,0,0,.116-1.5c-.255-.592-.175-1.754,1.289-1.509s.686,1.591.848,1.928,1.545-.418,1.638-.755,2.138-.754,3.334-1.173.255-.743-.43-1.336a6.567,6.567,0,0,0-1.277-.872c-.86-.546-1.208.546-1.627.546H1088.1V85.607l4.46-.5,3.252-.523,4.286,2.021,3.844,2.253s2.66.255,3.345.418a13.347,13.347,0,0,1,2.648,1.928l3.345-.511,2.393,1.672.6,4.425,4.7,7.433S1123.214,107.639,1123.133,107.976Z"
							transform="translate(-5.632 -0.533)"
						/>
						<path
							className="ad-item-1821"
							d="M913.307,186.6c-.07,1.672,0,2.846,0,2.846v3.495a4.959,4.959,0,0,1-.418,1.754,15.811,15.811,0,0,1-1.37,1.754s-.766.674-1.533,1.417a11.449,11.449,0,0,0-1.638,2.845l-.081,2.753-5.819,9.152c-.278-.5-.882-1.313-1.928-2.892-1.73-2.624-.453-.5-1.672-1a10.259,10.259,0,0,1-2.765-1.568c-.766-.627-1.277-1-2.567-1.881s-.964-.314-2.636-1.057-1.858-1.509-1.858-1.509l-2.694-1.313-2.95-2.253a21.048,21.048,0,0,1-1.162-2,2.9,2.9,0,0,1-.266-1.753l1.683-1.7a3.752,3.752,0,0,0,.406-1.94,2.716,2.716,0,0,0-.917-1.382s-.523-1.242-.906-2.31-.325-1.185,0-1.882a11,11,0,0,0,.581-1.754l1.242-3.17c2.485-.743,1.37.092,3.159-.825a12.871,12.871,0,0,0,3.264-2.509,6.3,6.3,0,0,0,1.626-1.834,14.331,14.331,0,0,0,2.648,0,3.57,3.57,0,0,0,1.033-1.917,9.211,9.211,0,0,0,0-2.148c.082-.395,2.137-1.278,3.507-1.614s1.023-.663,1.37-1.58,1.116-1.173,2.231-1.754a19.958,19.958,0,0,1,3.507-1.928,3.224,3.224,0,0,1,1.487-.29l1.766,3.972s1.881,2.172,2.23,2.579,1.021.221,1.277,1.568-.162,1.614,0,2.439a4.94,4.94,0,0,1,0,2.508,5.741,5.741,0,0,0-.337,2.753,17.845,17.845,0,0,0,.5,3.253,22.868,22.868,0,0,1,0,2.671"
							transform="translate(-5.517 -1.035)"
						/>
						<path
							className="ae-item-1821"
							d="M913.307,186.6c-.07,1.672,0,2.846,0,2.846v3.495a4.959,4.959,0,0,1-.418,1.754,15.811,15.811,0,0,1-1.37,1.754s-.766.674-1.533,1.417a11.449,11.449,0,0,0-1.638,2.845l-.081,2.753-5.819,9.152c-.278-.5-.882-1.313-1.928-2.892-1.73-2.624-.453-.5-1.672-1a10.259,10.259,0,0,1-2.765-1.568c-.766-.627-1.277-1-2.567-1.881s-.964-.314-2.636-1.057-1.858-1.509-1.858-1.509l-2.694-1.313-2.95-2.253a21.048,21.048,0,0,1-1.162-2,2.9,2.9,0,0,1-.266-1.753l1.683-1.7a3.752,3.752,0,0,0,.406-1.94,2.716,2.716,0,0,0-.917-1.382s-.523-1.242-.906-2.31-.325-1.185,0-1.882a11,11,0,0,0,.581-1.754l1.242-3.17c2.485-.743,1.37.092,3.159-.825a12.871,12.871,0,0,0,3.264-2.509,6.3,6.3,0,0,0,1.626-1.834,14.331,14.331,0,0,0,2.648,0,3.57,3.57,0,0,0,1.033-1.917,9.211,9.211,0,0,0,0-2.148c.082-.395,2.137-1.278,3.507-1.614s1.023-.663,1.37-1.58,1.116-1.173,2.231-1.754a19.958,19.958,0,0,1,3.507-1.928,3.224,3.224,0,0,1,1.487-.29l1.766,3.972s1.881,2.172,2.23,2.579,1.021.221,1.277,1.568-.162,1.614,0,2.439a4.94,4.94,0,0,1,0,2.508,5.741,5.741,0,0,0-.337,2.753,17.845,17.845,0,0,0,.5,3.253A22.868,22.868,0,0,1,913.307,186.6Z"
							transform="translate(-5.517 -1.035)"
						/>
						<path
							className="ag-item-1821"
							d="M1044.338,413.728c.094,2.416-.035,6.841-.035,6.841a27.7,27.7,0,0,0-2.277,2.509c-.429.662.094,1.416.43,2.671s1.289,1.754.6,2.253-2.23,1-3.345,1.754-2.567,1.754-3.507,1.754a8.117,8.117,0,0,1-2.66-.929l-.337-2.335-1.8-3.507s-2.823-.918-3.171-.918-1.963-.243-1.881.837a6.115,6.115,0,0,0,.685,2.59,18.087,18.087,0,0,1,1.881,2.091,18.873,18.873,0,0,1,1.719,3.09,9.589,9.589,0,0,1,.43,2.334l-1.974,1.08a1.342,1.342,0,0,0-.767,1.174c0,.836-.255,6-.255,6l-15.33,16.191s-4.878-.5-5.134-.5-1.975-1.58-3.171-1.254a5.193,5.193,0,0,0-2.485,1.428c-.174.326-.686,3-.686,3s.941,1.834-.174,2.346a16.3,16.3,0,0,0-2.741,1.416c-.848.581-3.763,0-4.274.418s-.174,2.079-.511,2.916-1.464,2.508-2.486,2.171-3.345-.5-4.03-2.508-1.626-2.079-.163-3.751,1.626-1.835,3.078-2.416a7.106,7.106,0,0,0,2.311-1.51s1.023-2.5.337-3.588-2.311-1.917-3.159-3-1.719-2.008-1.719-2.008-3.252.336-3.682.917A9.258,9.258,0,0,1,982.1,455.8c-1.626,1.58-2.311,1.917-2.567,3.253a16.515,16.515,0,0,0,.163,4.088l.523,3.252-.6,2.928-1.975,1.881-2.473.453-1.719-1.917s-1.2.082-1.881.082a14.487,14.487,0,0,0-4.449,1.417c-.86.581-3.682.418-3.682.418s-4.46-.081-5.226-.5-2.23-2-3.253-2.59a4.386,4.386,0,0,0-2.485-.743c-1.452-.174-2.23.243-2.4-1.429a4.2,4.2,0,0,0-1.023-2.5L945.79,462.8s-.081,1.429-1.115,1.835-1.975,1.753-2.311.174-1.115-1.092-.766-2.927-.175-3.751-.175-4.751,3.938-2.427-.6-3.345-5.482-.081-6.759.175.336,4.924-2.567-.093a40.336,40.336,0,0,1-3.857-8.339l-2.31-2.509,1.242-3.09.766-1.5,3.079-1.881,2.055-1.626-.511-3.008s-.639-1.5-1.278-3.124-.255-3.508,3.079-6.261,3.728-2.508,3.728-2.508l4.367-2.254s1.928-1.37,3.984-2.624,1.661-1.626,3.333-3.124,1.672-2.138,2.7-3.508a15.258,15.258,0,0,1,2.055-2.253l2.056-1.626s1.544-.255,6.806-2.509.255-1.5.65-2.648,0-1.23,0-2.114-1.161-1.5-1.544-1.834a6.086,6.086,0,0,1-1.162-2.289,35.185,35.185,0,0,1-.639-3.891c0-.743.384-3.124,0-3.5a9.726,9.726,0,0,1-1.022-1.928l-16.1,15.365s-6.342.418-6.4,0a11.4,11.4,0,0,1,0-1.672c.023-.58-1.487-1.916-2.683-5.6-.29-.894-.464-1.429-.569-1.719l-.011-.012v-.023c0-.023-.012-.047-.012-.081a6.91,6.91,0,0,1-.429-2.253,4.036,4.036,0,0,1,.429-1.835,9.614,9.614,0,0,1,.686-2.079,1.813,1.813,0,0,0,0-1.591,7.578,7.578,0,0,1,.082-1.173,9.439,9.439,0,0,1,.429-1.08s.766-1.08,1.707-2.254-.174-1.5-.511-2.833-.767-.755-1.452-1.174-2.056.163-2.4.418.092,3.171.092,3.171-1.289.162-2.16.162-.418,2.509-.418,2.509a3.64,3.64,0,0,1-1.452-1.255c-.511-.836-2.137-.417-2.822-.836a9.71,9.71,0,0,1-1.626-1.5l-1.37-4.088,3.333-5.6a13.9,13.9,0,0,0-.081-1.417,9.614,9.614,0,0,1,.255-2.172,4.161,4.161,0,0,1,1.289-1.161c.766-.418,2.822-1.592,2.822-1.592a5.178,5.178,0,0,0,0-1.753c-.174-.837-1.034-1.337-1.289-1.662s-3.253-2.253-3.078-3.682a16.789,16.789,0,0,1,1.114-3.5c.43-1.336-.348-2.009-.429-2.927s-.6-1.417-2.659-5.168-1.115-.755-2.056-1.336-3.589-2.346-3.589-2.346l-2.741-2.416-2.4-2.927a20.982,20.982,0,0,0-2.218-.86l1.963-2.973a14.9,14.9,0,0,0,.348-1.591l3.171-2.416s2.393-.255,2.648-.337.6-1.08.685-1.835a4.19,4.19,0,0,1,1.034-1.754,6.5,6.5,0,0,0,2.473-1.08c1.115-.836,1.8.081,1.8-1.591s.511-1.162,0-2.59a43.888,43.888,0,0,0-1.882-4.007,3.86,3.86,0,0,1-1.022-2.579v-5.005s-.093-3.183-.093-4.1a11.246,11.246,0,0,1,.175-1.835s1.963-.511,2.136-1.834.86-.662,0-2.5a7.883,7.883,0,0,0-2.218-3.345c-1.37-1.336-2.892-2.671-2.892-2.671l-2.683-3.171-2.311-1.916a16.94,16.94,0,0,0-2.311-.5,6.284,6.284,0,0,1-2.741-1.254c-.081-.255-4.623-8.015-4.96-8.85a34.1,34.1,0,0,0-1.8-3.09l.08-4.17a34.906,34.906,0,0,0,.349-4.065c0-1.7-1.881-3.031-1.881-3.031l-2.916-2.59-1.37-2.834s-2.741-1-4.193-1.417a8.562,8.562,0,0,1-2.742-1.5,21.965,21.965,0,0,0-2.822-2.671,21.844,21.844,0,0,0-2.833-1.011l-4.7.337a4.418,4.418,0,0,0-1.626,1.174,2.878,2.878,0,0,1-1.719,1s-1.8-1-1.115-2.416a12.7,12.7,0,0,1,2.23-3.263c1.452-1.835,2.393-2.079,2.916-3.508s4.367-2.579.162-3.588a30.287,30.287,0,0,0-6.155-1h-2.741l-1.627-2.59a32.394,32.394,0,0,1,1.2-3.751,7.485,7.485,0,0,0,.6-1.916l-1.8-4.762-4.715-1.417c.686-.755.6-1.254,1.034-1.591s1.2,0,2.474-.581-.082-1.08-.163-2.753-.6-2.171-1.881-2-1.893,2.334-3.171,3-1.289,1.092-2.567,2.335-1.207,2.009-2.23,1.336-.766-1.5.337-2.753,3.171-1.336,4.112-2.254-.081-1.161-.418-2.171,1.707-1.662,1.881-1.917,1.452.255,1.963.175a4.8,4.8,0,0,0,1.882-1.174c.523-.5.348-1.916.348-2.671s-.174-.917-.778-1.336-.94,0-1.881.755-1.2,1.5-2.567,1.08-.686-1.174-.592-2.091,1.533-1.08,2.9-1.58,1.033-1.754,1.37-2.671,1.626-1.173,2.567-3.252-.163-2.428-1.533-3.264,0-1,.511-1.916,1.278-.163,2.486-.5.94-1,2.741-2.416,1.533-2.09,2.137-2.59,1.707.081,3-.337.766-.755,1.37-1.754a21.779,21.779,0,0,1,1.277-2.416c.953-1.417.349-.754,2.834-1.509l-1.242,3.171a11,11,0,0,1-.581,1.753c-.325.7-.383.814,0,1.882s.906,2.311.906,2.311a2.711,2.711,0,0,1,.917,1.382,3.747,3.747,0,0,1-.406,1.939l-1.683,1.7a2.9,2.9,0,0,0,.266,1.754,20.971,20.971,0,0,0,1.162,2l2.95,2.253,2.694,1.313s.2.755,1.858,1.509,1.359.186,2.636,1.057,1.8,1.254,2.567,1.881a10.259,10.259,0,0,0,2.765,1.568c1.219.5-.058-1.626,1.672,1,1.045,1.58,1.65,2.393,1.928,2.892v.012a.986.986,0,0,1,.186.731,27.373,27.373,0,0,1-2.5,3.253l.639,2.439s.07,1.255.453,1.568.766.5,1.73,1.127a31.671,31.671,0,0,0,3.275,1.626s1.928,1.127,2.056,1.684a5.679,5.679,0,0,1,.453,1.754,7.4,7.4,0,0,1-2.056,3.194,5.5,5.5,0,0,0-1.417,2.126s.709,2.508,1.034,3.321.953.825,1.533,1.789,1.173.221.906,1.777a25.788,25.788,0,0,0-.326,2.753s.14,1.068.4,2.381.5,2.881.5,2.881l.837,3.38-.441,2.822s.127.429.568,2a7.279,7.279,0,0,0,.906,2.323c.441.813,5.331,3.5,6.737,4.378s4.948,3.321,4.948,3.321a34.718,34.718,0,0,0,1.672,3.31c.58.883.639,1.568,1.6,2.381a6.239,6.239,0,0,0,2.183,1.127s.384-1.754,1.289-1.754a11.051,11.051,0,0,1,2.626.627,12.02,12.02,0,0,0,1.8,1.627,6.962,6.962,0,0,0,2,.5c.7,0,.569-1.056,2.311.627s3.914,3.821,3.914,3.821a5.029,5.029,0,0,1,1.858,1.441c1.092,1.185,2.567,1.44,3.217,2.81s-.58,2.881,2.184,2.567,2.88-.685,4.622-.5,2.5-.243,3.589.755a6.341,6.341,0,0,0,2.508,1.684c.511.07,1.29-.244,2.115.255s.964.441,1.161,1.382.384-1.638.767,1.626.523,3.31,1.219,4.123a24.515,24.515,0,0,1,2,2.95,23.882,23.882,0,0,1,1.219,3.066l-.836,2.7a10.046,10.046,0,0,0,.2,2.439c.256,1.127.7.941.965,2.567s1.022,1.87,1.532,3.438.964,3.008.964,3.008-1.6,5.134-1.219,5.888,1.162,1,1.219,2.567.639,2.184.326,3.751a18.416,18.416,0,0,0-.326,3.253s-.452,1.812-.638,2.567-1.673,4.53-1.673,4.53c.488.186.941.372.941.372s.778,1.672,1.464,3.171a23.484,23.484,0,0,0,1.626,2.671,18.845,18.845,0,0,1,1.533,2.59c.255.837.86,1.255.174,2.334s-1.544,2.928-1.544,2.928a9.853,9.853,0,0,0-1.452,2.416,6.292,6.292,0,0,0-.337,2.253,4.212,4.212,0,0,0,1.022,2.253,3.513,3.513,0,0,0,1.545.593c1.021.162.511-1.092,3.159.162a32.051,32.051,0,0,1,3.949,2.172,14.693,14.693,0,0,1,2.31,1.834s.849,1.08,1.452,1.835.43,1.336,2.056,1.835,3.508.917,3.508.917a10.185,10.185,0,0,1,3,.337c1.37.418,1.626.662,2.485.836a8.175,8.175,0,0,0,1.37.163l1.8-1.417,1.022-2.171s-.081-.918,2.056-1,.6-.754,3.253-.162a24.087,24.087,0,0,1,4.367,1.08,14.912,14.912,0,0,0,3.253.754s-.163-2.171.86-1.591,1.8.581,1.8,1.591.337,1.243.255,2.08a11.553,11.553,0,0,0,.012,1.834l2.265,1.254s1.15-.58,1.916,1.835,1.29,4.007,1.29,4.007,1.2,1.417,1.452,1.835a10.53,10.53,0,0,1,1.463,3.682,15.366,15.366,0,0,1-.174,4.251c-.349,2.09-.174,2.59-.511,4.007s.081,1.5-.349,2.09-1.37.825-.859,2,.349,1.5,1.37,2.091,1.464.081,3,1,1.463.487,2.312,1.207.685,1.382,2.485,1.464,1.289-.8,3.171-.4,3.937.732,3.937.732h1.452s.348-.755.685,1.916l.349,2.671,3.426.581a4.772,4.772,0,0,0-.349,2.253C1044.338,408.885,1044.257,411.3,1044.338,413.728Z"
							transform="translate(-5.363 -1.139)"
						/>
						<path
							className="ag-item-1821"
							d="M923.6,316.062a43.892,43.892,0,0,0-1.882-4.007,3.86,3.86,0,0,1-1.022-2.579v-5.005s-.093-3.183-.093-4.1a11.311,11.311,0,0,1,.174-1.835s1.964-.511,2.138-1.834.86-.662,0-2.5a7.884,7.884,0,0,0-2.218-3.345c-1.371-1.336-2.893-2.671-2.893-2.671l-2.682-3.171-2.311-1.916a16.94,16.94,0,0,0-2.311-.5,6.284,6.284,0,0,1-2.741-1.254c-.081-.255-4.623-8.015-4.96-8.85a34.1,34.1,0,0,0-1.8-3.09l.08-4.17a34.908,34.908,0,0,0,.349-4.065c0-1.7-1.881-3.031-1.881-3.031l-2.916-2.59-1.37-2.834s-2.741-1-4.193-1.417a8.562,8.562,0,0,1-2.742-1.5,21.963,21.963,0,0,0-2.822-2.671,21.844,21.844,0,0,0-2.833-1.011l-4.7.337a4.418,4.418,0,0,0-1.626,1.174,2.878,2.878,0,0,1-1.719,1s-1.8-1-1.115-2.416a12.7,12.7,0,0,1,2.23-3.263c1.452-1.835,2.393-2.079,2.916-3.508s4.367-2.579.162-3.588a30.316,30.316,0,0,0-6.155-1h-2.741l-1.627-2.591a32.393,32.393,0,0,1,1.2-3.751,7.485,7.485,0,0,0,.6-1.916l-1.8-4.762-4.715-1.417c-.685.755-2.381-.755-.848,2.253s.592,1.835,1.452,2,2.393-.081,2.567.417.337,1.672-.43,2.009-1.452,0-2.055.337c0,0-1.208,1.011-1.08,1.917s.964.964,0,1.626-1.417.313-1.824,1.7-1.2,1.336-.453,2.277,1,.813.546,2.032.476,1.7-1.289,3.322-2.4,1.254-3.112,2.2-.674,1.185-.128,1.812,1-.313,1.858,0,1.452.662,1.893,2.289-.348,1.718,1.2,2.381,2.218,1.591,1.8,3.38-.547,1.091-1.417,3.217.29,1.44-1.382,3.253-1.382,1.289-2.787,2.044a1.918,1.918,0,0,1-1.011.3v4.065l1.707,1.174a7.605,7.605,0,0,0,2.312.743,9.1,9.1,0,0,1,2.916.337,6.7,6.7,0,0,1,2.055.917c.767.5,1.115.5,1.626,1.336s.767,1.835,1.034,2.253a8.171,8.171,0,0,1,.848,1.255,2.3,2.3,0,0,0,1.975,1.579,11.965,11.965,0,0,1,2.23.674s.418.163,2.567,1.336a17.78,17.78,0,0,1,2.9,1.835s.092,1.591.174,2.171a5.413,5.413,0,0,0,.766,1.58,12.6,12.6,0,0,1,3.09.255c1.278.337,1.707,0,2.056.917s.685,1.08.685,2.172a21.889,21.889,0,0,1-.511,3.333l-.429,2.242-1.893.6-3.334.917s-2.741.162-3.937.243-1.544.081-1.718.674a17.152,17.152,0,0,0-.256,2.254l1.2,1.254,1.719,1.579a26.27,26.27,0,0,0,.6,3.926,26.9,26.9,0,0,1,.674,3.09,4.347,4.347,0,0,1,.348,1.661,13.571,13.571,0,0,1,0,2.671c-.174,1.174-.429,1.754-.174,2.509a6.151,6.151,0,0,0,1.289,1.753l2.485.081,2.312-.662,1.626,2.916a16.892,16.892,0,0,0,0,2.171c.081.255.163,1.08,1.964.5s1.718-1,3.251-1.58a3.7,3.7,0,0,0,2.056-1.928,1.95,1.95,0,0,1,1.893-1.417c1.452.082,3.078,0,3.078,0s2.311.418,2.66,1,3.252,2.254,5.389,3.426a9.489,9.489,0,0,1,2.567,1.754c.429.337.348-1,1.718-.255s2.219,1.011,2.219,1.835a2.992,2.992,0,0,1-.848,2.171c-.523.418-.953.592-.953,1.174s.86,1.336.778,2l3.171-2.416s2.392-.255,2.648-.337.6-1.08.685-1.835a4.2,4.2,0,0,1,1.033-1.754,6.51,6.51,0,0,0,2.474-1.079c1.115-.837,1.8.08,1.8-1.592S924.11,317.491,923.6,316.062ZM1375.61,730.547a5.416,5.416,0,0,1,.349-2.59c.337-.326,1.37-.581,1.022-1.662a14.455,14.455,0,0,0-.685-2.59c-.337-.5-2.311-1.254-2.822-1.916a4.491,4.491,0,0,1-1.022-2.672c.081-.836.255-2.345.255-2.927s-7.108-16.945-7.108-16.945.081-2.671,0-3.5-.255-1.846-.255-1.846a21.074,21.074,0,0,0-1.881-3,24.094,24.094,0,0,1-1.975-1.753c-.174-.337,0-9.095,0-9.095a19.341,19.341,0,0,1-2.659-.255,3.72,3.72,0,0,1-2.73-2.334,31.128,31.128,0,0,1-1.37-5.006c-.093-1.01-1.37-2.171-.267-3.008a21,21,0,0,0,2.056-1.672c.348-.336.255-2.171.255-2.171s-6.678-3.67-6.678-4.088v-2.671a21.536,21.536,0,0,0-1.627-1.835c-.337-.243-9.931-8.932-9.931-8.932h-3a47.956,47.956,0,0,1-1.37-4.669,6.234,6.234,0,0,0-1.8-2.753c-.417-.174-2.218-1.092-3.159-.755s-1.8,1.255-2.149.918-1.533-2-1.533-2-4.971-.592-5.226-.337-.174,2-1.289,2.172-2.219.58-2.474-.174,1.1-2.172,1.1-2.172l25.181-23.194s1.626-.337,1.881-.337.859-1.336.859-1.672V611.44l4.194-3.75a24.329,24.329,0,0,0,.174-2.672c-.093-.245-2.23-3.171-2.23-3.171l-3.6-.418-.255-.836s.255-1.917.255-2.172-2.138-4.25-2.138-4.587-.941-5.262-1.115-5.586-1.277-2.928-1.626-3.091a19.889,19.889,0,0,0-3.682.743h-2.311l-3.6-5.505s-.418-2.079-.685-3.008-1.964-2.915-2.137-3.414-.511-4.844-.511-4.844l-1.545-4.843-2.9-4.925.512-10.174s-.512-3.345-.778-3.263c-.326,0-6.156-7.178-6.156-7.178s1.2-3.508,1.533-4.088a35.974,35.974,0,0,0,1.544-6.84c-.082-.756-.255-13.195-.255-13.439s1.115-4.17,1.022-4.588a18.047,18.047,0,0,0-.941-3.345c-.429-.836-1.963-2.079-1.278-2.671s1.707-.836,1.882-1.5a16.884,16.884,0,0,0,0-3.008s-1.882-3.334-1.882-3.589a34.728,34.728,0,0,1,1.8-3.09s5.9-2.5,6.933-2.834a28.749,28.749,0,0,0,5.309-3.925c.174-.337,1.115-3.171,1.115-3.171a14.764,14.764,0,0,0-.43-3.17,31.353,31.353,0,0,1-1.881-2.834l-.6-4.6s1.37-.581,1.626-1.08a14.84,14.84,0,0,0,.43-3.253c0-.418-.175-2.009-.175-2.009l3.937-4.669,4.2-2.428,2.474-2.834.255-2.59-2.312-2.671s-1.533-4.17-1.533-4.588-.6-4.669-.685-5.168-6.422-3.345-6.422-3.345l-7.539.418s-.859-1.5-1.626-1.5-3.426,0-3.856.418-1.8,2.5-2.822,2.753a10.939,10.939,0,0,0-3.345,1.58c-.418.417-2.648,2.59-2.648,2.59l-2.741-.163a21.15,21.15,0,0,0-3.171-1.591,33.06,33.06,0,0,0-3.856-.081,8.94,8.94,0,0,1-1.626,1.174,21.167,21.167,0,0,0-3.159.162c-.349.163-2.66,2.009-2.66,2.009l-6.167.163a23.43,23.43,0,0,0-4.112-1.092c-.685.093-3.425.592-3.425.592s-1.359,1.5-2.044,1.5-3.857-.082-4.286,0-.86.917-1.881,1.417a8.393,8.393,0,0,1-4.541.337c-1.115-.337-5.227-1.591-6.075-2a23.536,23.536,0,0,0-7.456-.837c-1.963.244-2.822-1.011-5.227-1.173s-6.074-.663-6.329-.081.766,1.579.174,2.59-1.208,1.08-1.975,1.5-.859,1-2.056,2.091a13.053,13.053,0,0,1-2.822,1.834s-2.659-1.173-3.251-2.171-1.719-2.172-2.834-1.835a31.755,31.755,0,0,0-4.1,2.172l-8.4,5.087h-7.364l-8.734-.662s-4.7-3.787-3.727-4c.766-.151-2.091-2.021-2.091-2.021s-3.427.175-4.286.175-4.623-5.517-5.134-5.854-4.971-1.661-4.971-1.661-3.589-.674-5.483-1a32.928,32.928,0,0,0-5.471-.175,14.945,14.945,0,0,0-2.578.837l-1.882,1.5a8.147,8.147,0,0,1-3.251,1.173,28.008,28.008,0,0,1-4.111.163c-2.567,0-1.707-.326-3.763-.837a12.452,12.452,0,0,0-3.775-.325l-6.329,1s-4.112.163-5.993,0-6.167-1.173-6.167-1.173l-9.594-.663a67.116,67.116,0,0,0-7.7,1.835c-2.23.837-4.111,2-5.819,2a27.772,27.772,0,0,0-3.774.337,33.066,33.066,0,0,1-4.274-.5c-1.37-.337-.86,0-4.634-.837s-4.274-.662-4.274-.662a14.9,14.9,0,0,1-3.09.325c-1.707,0-1.533.511-2.9,1.51s-3.6.836-5.308.836-2.916,1-5.308,1.336a2.847,2.847,0,0,0-2.4,2.834l-7.364,1.835-7.7-1.835-.348-6.341-7.7-1.174v5.679s1.533,2.834,2.056,2.834h3.252v3.508l-1.881,1.173a11.3,11.3,0,0,1-.778,3.334c-.592,1.173-3.334,3.345-3.857,3.67s-1.532,1.336-1.358,2.009a7.507,7.507,0,0,0,1.533,2h4.111l4.449,3.008s.522,2.509,2.4,3.171,3.252,1,2.567,1.336-3.937,1.174-3.937,1.174l-1.37,4.169v3.67s2.392,1.672.174,1.672a6.3,6.3,0,0,1-3.937-1.672s0-2.5-1.37-2.5-2.579,0-3.264.824a13.807,13.807,0,0,0-1.382,3.345s-1.869,3.172-2.717,3.671a23.141,23.141,0,0,0-4.286,3.333c-1.022,1.173-1.707.674-3.078,2.845s-2.579,4.008-2.579,4.008l-5.644-5.517s-1.37-3.333-2.916-2.16-1.881,2.5-2.567,3.67-1.707,3.509-3.078,4.008a7.2,7.2,0,0,0-3.09,2.833c-.685,1,0,3.671,0,3.671l2.4,2.171a2.487,2.487,0,0,1,1.022,2.172c-.174,1.337-7.538,7.015-7.538,7.015s-1.882-1.173-3.078,0-1.371,5.668-1.708,6.5-.348,2.334,1.023,2.672a5.759,5.759,0,0,1,3.426,3.17c.511,1.336,6.853,8.85,6.853,8.85l-1.371,3.171,2.393,5.006a18.256,18.256,0,0,1,4.448,3.008c1.371,1.5,4.972,3.171,5.146,4.344s2.032,1.626,2.032,1.626,2.753-.069,3.008-.382a6.208,6.208,0,0,1,2.254-1.5,17.317,17.317,0,0,1,3.531-.756,2.628,2.628,0,0,1,2.451-.5c1.278.5.569.186,2.5.5s2.636.569,4.111.314a35.229,35.229,0,0,0,3.473-.627,5.839,5.839,0,0,0,2.055-1.812,15.917,15.917,0,0,1,1.661-2.254c.2-.127,6.039-2.194,6.423-2.194a17.928,17.928,0,0,1,4.053,1.2c.7.441,1.219,2,2.439,2.311a8,8,0,0,0,3.845-.058,11.091,11.091,0,0,0,2.961-1.51l1.858-3,3.531-4.635,3.148-1.626,4.622-.882a18.062,18.062,0,0,0,6.876-2.683c3.02-2.137,3.148-3.578,5.458-4.076s2.637-1.056,4.751-1.313a8.551,8.551,0,0,0,4.82-1.94c1.278-1.067,1.278-1.626,2.369-2.2s3.218-2,3.8-2.183,10.012-4.134,10.012-4.134V635.958a23,23,0,0,1-4.541-.221c-4.623-.673-1.882.837-2.567,1s-2.567,0-6.33-.337-3.089,0-6.341.5a49.068,49.068,0,0,1-8.049.837,46.658,46.658,0,0,1-5.133,0c-2.4,0-2.567-1.336-3.089-1.835s-1.882,0-3.427.337-1.533,2-2.9,2.334-3.775,0-5.308.163-6.167.674-8.56.836-2.056-1.661-2.056-1.661-2.741-3.345-4.285-3.345-1.882,3.345-1.2,3.845,0,3.333,0,3.333l-1.545,1-2.23-1.336-3.078-1.162a10.356,10.356,0,0,0-2.393.325c-1.207.337-1.207,1.011-2.578,1.847a37.592,37.592,0,0,1-3.253,2.16c-.859.337-2.392,0-3.251.337s-1.545,2.171-2.056,2.833-1.2,1.011-2.741.837a8.62,8.62,0,0,0-2.9,0c-1.208.174-3.426,1.173-3.949,2.171a10.962,10.962,0,0,1-2.044,2.335s-1.893.836-2.4,1.01-2.916-3.345-2.916-3.345L1020.7,653.6l-3.287,3.5v2.171a19.707,19.707,0,0,1-4.413,2.509c-1.719.5-4.46,1.66-7.19,1.5s-3.774.836-3.774.836l-2.567,1.672s-1.2,1.162-2.056,1.162a19.736,19.736,0,0,1-3.6-1,23.8,23.8,0,0,0-3.589-.337,45.3,45.3,0,0,0-4.971.5l-4.448-2-3.775.662v42.242h-6.841a13.284,13.284,0,0,0-5.992,2c-1.035.837-4.461,1.672-6.516,1.835s-4.274-1.66-4.274-1.66-1.719-2.509-2.4-3.682-3.078-.163-3.078-.163l-3.763-6.678a49.3,49.3,0,0,0-6.341-1.5c-1.881-.174-5.134.662-5.818.5s-5.656-2.172-5.656-2.172-2.567-1.5-2.916-2.172-1.022-3.507-1.707-5.063-2.23-6.121-2.567-7.283-.349-4.007-.685-5.806-1.034-4.878-1.545-7.051-1.544-5.179-1.707-6.678a60.265,60.265,0,0,1,.511-7.178l2.393-1.673s2.056-4.332,2.056-5.342.174-5.168,0-6.167-3.426-3.682-3.426-3.682-3.414-.662-4.448-1-3.427-2.834-3.427-2.834l-7.539-1.672-6.1,8.177s-.917,1.173-1.428,1.835,1.2,2.345,1.37,3.682a19.552,19.552,0,0,1-.349,5.5c-.337,1.174-.859,1.336-3.425,2.834s-3.079,1.336-5.646,1.975a12.958,12.958,0,0,0-5.83,3.543c-1.37,1.336,0,5.006,0,5.006s-2.056,4.333-3.078,5.005-5.993,3.334-5.993,3.334-1.881,3.507-2.741,4.681-2.567,7.34-2.567,7.34a32.171,32.171,0,0,1-4.111,3.45,11.785,11.785,0,0,1-4.112.894,38.685,38.685,0,0,0-4.111,2.833c-.337.5-1.707,4.68-1.707,4.68a7.194,7.194,0,0,1-2.056,2c-1.034.5-3.09,4.007-4.111,4.68s-3.426,5.505-3.426,5.505l-4.623,5.005h-6.5a22.919,22.919,0,0,0-3.09-.837,5.926,5.926,0,0,0-2.741,0H822.9a9.222,9.222,0,0,1-1.37-2.334A7.369,7.369,0,0,0,820,708.351h-6.515c-1.882,0-1.37-.5-2.044-.836s-.175-2.009-.175-2.846.175-2.834.175-3.833a23.626,23.626,0,0,0-.523-3.345l-2.056-3.171L806.293,694l-2.741-.836-1.023-2.509.337-3.507-.337-3.833-.685-3.008,2.392-1.5s3.775.5,4.972.5a56.094,56.094,0,0,1,5.818,1,4.976,4.976,0,0,0,2.916-2.172c1.2-1.836-.512-4.007-.512-4.007l-1.893-5.505h2.23a18.608,18.608,0,0,0,2.393-2.172c.86-1,.349-2,1.034-3.333a1.879,1.879,0,0,1,2.23-.836l4.785,1.5s2.742-.5,4.112-.836,2.915-2.334,3.426-2.834,2.055-2,2.055-2l3.775,1.336,4.274,3.5,3.6-2.16s-.86-4.007-1.2-4.878-4.634-5.807-4.8-6a52.707,52.707,0,0,1-2.741-6.144c0-.511,1.2-4.344,1.2-4.344l-2.056-6.516s-.453-.941-.894-1.638h-.012a1.711,1.711,0,0,0-.638-.7,22.677,22.677,0,0,1-2.9-2.765l-2.567-4.076.848-6.516s-3.588-.836-4.448-1a55.293,55.293,0,0,1-5.134-2.172s-4.112-.662-5.308-.662-5.482-2.009-5.482-2.009l-3.426-.325v4c0,.511-2.055,4.518-2.23,5.342s-2.056,2.508-2.056,2.508-2.9,1.672-3.588,1.672-3.949-.5-5.656-.5-3.763,1.834-3.763,1.834l-4.285,1.836a37.065,37.065,0,0,1-4.286,0,12.751,12.751,0,0,1-3.588-2.845c-1.545-1.5-5.831,0-5.831,0h-4.274l-3.6-.825a25.463,25.463,0,0,0-3.078-3.008c-.511-.163-3.6-.674-4.111-.837a15.53,15.53,0,0,1-2.4-2.508l-1.707-5.842-3.7-2.16a5.058,5.058,0,0,0-1.6,1.128,19.207,19.207,0,0,1-2.056,1.938c-.452.186-1.347,1.371-.511,2.126s1.6-.94,2.369-.441a3.166,3.166,0,0,1,.964,2.381c0,.5-3.019,1.127-3.019,1.127l-2.311.94a2.906,2.906,0,0,1-.894,1.568c-.766.686-1.219,1.313-1.858,1.813s-.523.94-2.126,1.626a5.009,5.009,0,0,0-2.311,1.44c-.964.871-1.73,3.565-1.73,3.565h1.15s1.091-1.185,1.869-.743a2.753,2.753,0,0,1,1.092,1.243l-.709,1.626s-1.475-.3-1.219.627-2-.372-2.508.7-1.092,1-.384,2.126.964,1.313.836,2.126a2.069,2.069,0,0,1-1.091,1.881,5.158,5.158,0,0,1-2.822.5c-.453,0-1.034.5-.651,1.068s1.742.686,2.126,1.185,1.348,1.255.511,1.568a8.491,8.491,0,0,1-2.114.372s-1.289-1.44-2.323-1.44a1.753,1.753,0,0,0-1.475.755s1.475,2.88,1.29,3.623a3.808,3.808,0,0,1-1.092,1.51s-1.731-.813-1.731-2.137,3.008-3.182-.325-2.369-3.345,1.242-3.658,1.94a4.3,4.3,0,0,0-.326,2.253c.07.872,1.092,1.87,0,2.067s-1.544.813-2.114-.441.384-1.812-.58-2.2-1.162-.94-1.6.128c-.3.708.233,1.928.151,3.02v.011l4.809,5.029,4.285,4.832,5.309,6.853,1.022,4.669s1.37,2.509,2.916,2.834a42.365,42.365,0,0,1,4.448.836c1.544.5,1.893,1.672,3.09,1.672s3.937-1.5,4.448-1.834a16.028,16.028,0,0,1,4.286-.837c.86,0,3.588.5,3.763,1s1.718,3.845,1.718,4.681a16.2,16.2,0,0,0,.512,4.17c.337.662,3.937,2.334,3.937,2.334l3.856,1.672s-.429,2.834,0,3.671a4.671,4.671,0,0,1,0,2.508l-3.345,2s-4.111,0-4.448.837a11.767,11.767,0,0,0-.512,3.67c0,1.174-1.033,3.345-.523,3.845s5.146,1.336,5.146,1.336,4.8-.5,6.33-.5,3.6.326,4.285.163a10.706,10.706,0,0,0,2.916-1.835c.511-.5.511-2.334,1.707-1.834s3.937,2.171,4.112,2.671,1.37,3.508,1.37,3.508,4.274-.837,4.448,0,1.034,2.671,1.034,3.17a5.7,5.7,0,0,1-1.034,3c-.686.674-1.533,1.51-2.218,2.171a4.034,4.034,0,0,0-.86,2.009,1.348,1.348,0,0,1,1.544,1.162,42.241,42.241,0,0,0,1.533,5.18l-.523,2.067a6.188,6.188,0,0,0-1.185.012c-.511.127-.255.754-2.183,1.381s-3.984,1.255-5.4,1.627a42.187,42.187,0,0,0-5.134,2.381l-2.056,4.007,2.822,7.758,1.545,4.507-1.417,2.88L768.1,759.3l-.766,4.507,1.8,1.5,3.333,3.008.384,3.647.568,9.012v.012c.592.29.976.476.976.476l1.417,1.313a13.643,13.643,0,0,1,4.878,1.184c1.985,1.068,1.405,1.754,3.531,3.008s1.985.255,3.786-.127,2.508-.372,3.856.441,1.219,1.5,1.987.813a1.287,1.287,0,0,0-.059-2.126c-.709-.441-1.928-.941-.639-1.2a12.659,12.659,0,0,1,3.334.069s2.439.872,2.892,1.127a9.116,9.116,0,0,1,1.928,1.057c.894.7-.709,1.254,1.405,1.881s3.148-.557,3.926-1.5.383-2.126,1.73-1.381,2.439,1.509,2.892,1.381,1.092-1.2,1.092-1.2a27.347,27.347,0,0,1-.325-3.437c.07-.872-1.22-1.881.383-3.38s2.184-1.94,2.962-1.754,1.219.686,1.985.5a2.87,2.87,0,0,0,1.987-1.057,2.747,2.747,0,0,1,1.614-.941,4.021,4.021,0,0,0,2.242,2.126c1.672.627,2.126,0,3.856.314s2.184.313,2.509.754a5.536,5.536,0,0,0,1.219,1.371c.894.813,1.15.627,2.114.813s1.417.186,1.672.627-.766,1.254.384,1.254,1.092-.813,1.928,0a5.375,5.375,0,0,1,1.731,3.508c-.059,1.185-.708,1.683.127,3s1.092,1.952,2.126,2.509,1.858.372,2.95.87,2.055.128,2.38,1.068.569,1,.767,1.7-.07,1.127,1.289,1.626,3.148,1.94,5.9,1.37,2.892-.685,4.564-1,2.241-1.37,3.147,0,.58,1.313,1.858,2.323a10.21,10.21,0,0,0,3.147,1.742c1.6.7,1.034-.43,3.6,1.324s2.752,1.37,4.366,2,2.439.755,3.717,1.382,1.289,1.626,2.961.244a14.48,14.48,0,0,0,2.37-2.625c.58-.568.523-1.382,2.125-.754s1.731.441,2.115.882-.059,1.056,1.73,1.242,1.8-.87,2.579.2,1.277.5,1.985,1.754a7.63,7.63,0,0,0,1.672,2.126c.767.813,1.092-.755,2.636,1.556s2.753.441,3.718,1.754,1.219,2.137,2.508,1.568,1.8-2.625,2.95-3.008,1.219.511,2.822,1.753,1.358,2.567,1.416,3.949-.836,1.5.71,3.008,2.055,1.812,2.892,1.812,1.347.372,1.8,0,1.219-.754,1.789,0,1.359,1.5,1.672,1.94,1.289,1.568,1.289,1.568a2.918,2.918,0,0,0,1.15,2.439c1.29.941.779.372,2.834,1.186s2.242.627,3.275,1.881,1.023,1.313,1.789,2.126a2.6,2.6,0,0,0,.639.488c.569.325,1.011.429.778,1.022a2.265,2.265,0,0,0,0,2.056c.325.511,1.289.882,1.289,1.127s-.905.511-.453,1.324a9.956,9.956,0,0,0,1.987,2l-.894,1-1.417.7s-.58.429-.058,1.312a5.292,5.292,0,0,0,1.475,1.5,3.545,3.545,0,0,1,2.822,2.126c.778,1.951.453,2.009,1.672,2.067s2.509-.558,1.731.569.2,1.812-1.278,1.684-1.544-1.441-2.311-.628a3.07,3.07,0,0,0-.709,2.068,12.092,12.092,0,0,0,1.6,1.626c1.023.882,1.545,1.382,1.731,2.138a8.263,8.263,0,0,1,.523,2c-.071.441-.326,1.313,1.091,1.382s1.023-.627,3.136-.128,2.764.557,3.472,1.185,1.545,1.627,2.381,1.568,1.092-.186,1.278-1.068-.894-1.742.2-1.94,1.6-.872,1.985.07a6.018,6.018,0,0,1,.07,2.625,10.1,10.1,0,0,0-.325,1.7c0,.5.511-.882,2.509,0s-.453,1.684,1.475,1.94,2.242-.627,2.892-.569,1.405-.441,1.533,1,.453,2.009.453,2.881-2.7.754.836,2.381,3.984,2.2,4.495,1.7a5,5,0,0,0,.709-2.138s.639-1,1.986-.115,1.6.94,1.869,1.312.639,1.29,2.567,1.115a3.453,3.453,0,0,1,3.857,2.579c.7,1.881-1.092,1.5.511,3.008s2.242.872,2.439,2.056a23.977,23.977,0,0,0,.639,2.694,3.9,3.9,0,0,0,.964,1.44c.581.442,1.8,1.313,1.8,1.313s.708-.058.836,1.382.512,2.7.581,3.322.568.929-.2,1.869-.964.186-1.672,1.382a15.682,15.682,0,0,0-1.092,3.067c-.383.94-2.183,1.231-.511,2.682s2.242.384,4.17,2.509,1.928,2.753,3.8,2.323,1.789-.384,3.008-.071,2.451.883,3.345.128.384-.941,1.6-1.127,1.8.871,1.869-.441.256-1.94.953-1.5,2.056.314,2.126,1.186-.964,1.44-.255,2.253,1.672.813,1.73,1.754.128,2.253.128,2.253,3.913-1.754,3.472,1.511-.325,2.183-1.033,3.879-1.475.755-.441,2.183,2.056,2.637,2.056,2.637,1.6,1.254,1.475,2.067a5.842,5.842,0,0,1-.778,1.812s-2.753-.372-2.822.314a5.247,5.247,0,0,0,.2,1.568,2.143,2.143,0,0,1-.523,1.753c-.7.686-1.916.43-2.369.557s-.511.128-.511.569-.2,1.37,1.661,3.31.964,1.127,1.742,2.636,1.278,1.812,1.986,2.126,0,1.684,1.73.314a3.569,3.569,0,0,1,4.053-.5c1.092.372.964-.07,1.533.244a9.146,9.146,0,0,1,1.672,1.823s-.964,1.684-.384,2.254,1.672.557,1.672,1.185-1.219,1.5.187,1.626,2.706-.87,3.856-1.37a23.692,23.692,0,0,0,2.694-1.51s-.441-2.5,1.033-1.185,2.37.872,2.37.872.905-1.44,1.219-1.5,1.487,0,1.544.5.255,1.5.255,1.5-1.091,1.44.256,1.2,2-.568,2.055-1.2.2,0,.326-1.557a5.4,5.4,0,0,1,.325-1.881l1.277-.569s1.929,1.382,3.6,2.509,2.311,1.185,4.112.372a9.251,9.251,0,0,1,3.078-.872,4.384,4.384,0,0,1,2.056.814c.639.627-1.987-.314,1.289,1.44s3.531,1.881,4.681,1.312a12.406,12.406,0,0,1,2.962-.813,5.676,5.676,0,0,0,2.5-.441,3.053,3.053,0,0,0,1.092-1.44s-.059-1.185.836-.116-.766,2.311,1.035,1.742,2.241.314,2.183-1.626,1.789-4.251,3.461-5.005,1.289-.5,2.381-.059,1.661,1.684,2.949,1.127,2.115-.186,2.44-2.009.766-2,2.056-2.126,2.508,1.5,2.764-1.127-.325-2.88.453-4.007.569-.685,2.183-1.684,1.6-.5,2.7-1.753,1.405-1.627,1.73-1.627-.453.557.2,1.742-1.219,1.754.058,2.881.708,1.754,1.928,1.2.453-1.382,1.929-1.7,1.15-1.126,1.858-.372.65.128,1.091,1.185.837,1.381,1.928,1.324,2.126-.511,3.275.686.639,1.881,1.034,4.134.824,2.683,1.6,2.37a2.237,2.237,0,0,0,1.22-2.625c-.384-1.185-1.22-2.067.383-2.253s1.987.441,2.509,1.568,1.15,2.31,1.021,3.251-1.417,1.5-.058,2.312,1.405,1.94,2.753.941a13.962,13.962,0,0,0,2.579-2.311c.766-.882.127-1.626,1.6-1.254a20.734,20.734,0,0,1,2.44.627c.638.243-.325.372,1.985.754s3.531.616,3.926-.94-.267-1.7.766-3.38,1.672-2.381,3.275-1.754,1.023,1.126,2.312,1.37,1.73-.186,1.8-.686a10.3,10.3,0,0,0-.383-2.067c-.2-1.057-1.487-2,.058-2.5s2.567-.5,3.02.5-.453,2.126.766,2.253a3.4,3.4,0,0,0,2.311-.882s-.058-1.5,1.545-.372,1.928,1.127,2.125,1.881-.139,1.057.7,1.5a14.517,14.517,0,0,0,2.764.686c.581.185-.127-.686,1.092.313s-.186.255,2,1.509a20.014,20.014,0,0,0,3.4,1.557c1.788.813.255,1.626.894,2.253s.836.07,1.544,2.822,1.661,3.438,2.369,3.124,1.034-.558,1.162-1.057a24.254,24.254,0,0,0-.128-2.636c0-1.242-.255-1.5.708-1.5s1.789.255,1.917,1.185-.639,2.067.778,2.253,1.8-.5,2.567-.243,1.347.5,1.347,1.312-.512.941.383,1.568,1.8-.29,2.509-.429.58-.767,1.986-.825,2.44-.813,2.765.058a2.758,2.758,0,0,1-.255,1.952s-2.254.429-2.636.929-1.347,1.068-.581,1.881a5.725,5.725,0,0,0,2.579,1.127s1.023-1.127,1.661-1.812.326-1.127,1.162-1.127,1.858-.755,1.858-.127a26.4,26.4,0,0,0,.453,3.437,2.636,2.636,0,0,0,1.8,1.881s1.928.071,2.439.814-1.348,1.753.708,2.508,2.312.372,2.625-.569-.441-1.626,1.22-1.626,1.544,1.568,1.544,4.321-2.7,5.633-4.367,8.258-33.868,52.172-33.868,52.172.093.337,2.311,1.08.686,2.846,2.579,2.591,1.37-1.255,3.251-1.08,2.311.452,2.648,1.1.093,1.812,1.719,1.73,1.963.663,2.741-.337,1.963-2.5,1.963-2.5a2.576,2.576,0,0,1,1.545-1.754,16.868,16.868,0,0,1,3.682-.918c1.115-.174,1.115-.673,3.171.326s2.392.417,3.251,2.09,1.963,2.056,2.056,3.287a6.069,6.069,0,0,0,2.312,3.728c1.37,1.242,2.392,2.334,2.392,3.333a3.365,3.365,0,0,0,.86,2.428,14.787,14.787,0,0,1,2.485,1.661c1.452,1.254,3,2.091,3.508,3.171s1.034,2.091,1.115,2.428-.349,1,.6.917,3.159-12.021,3.159-12.021l27.746-147.816s2.44-2.7,2.567-3.751,0,.372-1.091-2.637-2.184-1.312-1.476-4.564a22.828,22.828,0,0,1,1.348-4.564l.511-2.451-1.022-1.754a3.267,3.267,0,0,1-.255-1.37,3.929,3.929,0,0,0-.581-1.812s-4.75-1.882-5.005-3.949.511-2.7-.708-4.448a10.216,10.216,0,0,0-3.345-3.438c-1.405-.882-2.369-1.568-2.44-3.066a9.576,9.576,0,0,1,.581-3.195l2.242-1.7.139-3.252a28.523,28.523,0,0,1-3.345-1.882c0-.186,1.021-2.253,1.021-2.5s2.184-.07-.127-1.567-3.717-2.312-3.717-2.312a36.941,36.941,0,0,0-3.345-2.567c-.894-.5-.255-.882-2.5-1.313s-1.928-.882-3.02-1.7a5.335,5.335,0,0,0-2.381-.941l-2.31-.243-1.545-2.009a2.945,2.945,0,0,0-1.348-2.567c-1.405-.743-1.928-.314-2.694-1.5s-1.15-2.009-1.023-2.822.7-1.185-.127-1.754a8.9,8.9,0,0,1-1.29-.929c-.255-.255,0-37.561,0-37.561a18.971,18.971,0,0,0,3.079-1.2c.127-.244.255-1.243.964-1.313a4.954,4.954,0,0,1,1.928.186c.58.186,1.6-.627,1.6-.627s-.127-.686,1.22-.743a34.209,34.209,0,0,1,3.542-.07c1.023.07,1.789.813,3.136.255s.778.313,1.672-.813a6.205,6.205,0,0,0,1.475-3.253c.071-.941-.441-1.754.709-1.881s2.44-.059,2.893.755-.059,1.626,1.289,2.183,1.277,1.126,2.312.186a6.262,6.262,0,0,0,1.661-2.683c.523-1.127.128-1.7,1.092-2.2s1.928-1.5,2.892-1.44.453-.557,1.673.255a25.465,25.465,0,0,1,3.02,2.056c1.928,1.51,2.648.824,2.741,2.009s-.732,1.626,0,2.752,1.242,2.009,1.812,1.5a5.207,5.207,0,0,0,.906-2.183s-.325-1.313.766-1.382,1.092-1,1.545.186.709.569.638,1.754.384,2.009.906,1.94,2.625-.813,3.078-1.5-.383-1.5.767-2.126,1.347-1.312,2.055-.627.581,1.254,1.162,1.313.767-.314,1.092-.686.384-.94-.384-1.754-1.544-1.7-2.253-2.439-1.6-1.509-.964-2.009a1.655,1.655,0,0,1,1.347-.314l.453.187a25.9,25.9,0,0,1-1.219-2.625c0-.255-.766-2.381.453-2.508s1.986-.059,1.986-.871-.2.128-1.858-1.5-2.961-1.567-1.475-2.137,2.242-.557,1.858-1.243-1.092-.568-2-.94a1.917,1.917,0,0,1-1.023-1.441s0-3.008-1.417-3.507-1.532,1-2.88-.128-.708-1.754-2-1.87-1.476-.882-2.5.245-.139,1.7-1.742,2.009-1.858,1-2.44.186-.383-1.754-1.416-1.882a7.033,7.033,0,0,0-2.37-.186,3.557,3.557,0,0,0-1.928.557c-.709.384-.255,1.127-1.986.384s-.906-.813-2.056-1.382a3.688,3.688,0,0,0-2.567-.5c-.964.127.058.5-1.545.372s-1.6,0-2.31-.372-.651-1.185-1.476-.686a12.382,12.382,0,0,0-1.614,1.127c-.837.627-.894,1.312-1.789,1.44a4.141,4.141,0,0,1-2-.441l-.58-.941V703.589s3.369-.755,3.961-.755,1.626-.917,1.626-.917a14.186,14.186,0,0,1,2.741-.081,4.623,4.623,0,0,0,1.544.5,3.513,3.513,0,0,0,2.742-.837c1.2-1,2.056-2.671,3-2.833s2.393-.5,2.822.162-.081,1.51,1.29,1.672,1.8-1.254,3.17-.662a7.948,7.948,0,0,1,3.079,1.917,5.02,5.02,0,0,0,2.055,1.254h69.873l.685-1.092a4.517,4.517,0,0,1-1.033-.917c-.174-.325.092-1.58-.511-1.661s-1.707-.175-1.707-.175-.349,1.174-.778,1.174a5.569,5.569,0,0,1-1.627-.837s.082-.836.43-1.08.685-.092.685-.674.255-1.08-.429-1.08-1.545.082-1.8.082-.429.163-.429-.592-.941-1.417,0-1.661a17.96,17.96,0,0,0,2.23-.837l.429-1.091a10.146,10.146,0,0,1-.174-1.917,3.309,3.309,0,0,1,1.37-2,5.2,5.2,0,0,1,1.975-.592c.592,0,1.8-.163,1.963.511s.093.743.686,1a14.682,14.682,0,0,0,1.975.5,2.293,2.293,0,0,1,1.452.337c.429.418,1.544.825,1.975,2.16a16.437,16.437,0,0,0,1.114,3.008c.418.754.256,1.091,2.312,1.916s2.9,1.254,3.508,1.928,1.023.663,1.452,1.08,2.056.755,2.23.5a7.64,7.64,0,0,1,.941-.837l-.767-4.75s.337-2.59.767-2.845a16.436,16.436,0,0,1,3.507-1.336h2.916s1.115-1,1.707-1.417a8.709,8.709,0,0,1,2.4-.837,7.448,7.448,0,0,0,2.393-1.162l2.137-1.672s1.29-1.579,2.056-2.5a20.172,20.172,0,0,1,2.4-2.509,19.277,19.277,0,0,0,2.822-3.844l3.089-.663a13.119,13.119,0,0,1,2.73.837,8.788,8.788,0,0,1,2.056,1.5c.174.336.685.255.685,2.253s.255,1.754,0,3.09-.848,3.925-.848,3.925a7.786,7.786,0,0,0,.964,2.671,5.594,5.594,0,0,1,1.254,3.171,7.368,7.368,0,0,0,.256,2.079,27.433,27.433,0,0,0,2.31,1.754c.6.337,2.834,1.336,3.775,1.928s1.8.5,2.137,1.661a18,18,0,0,1,.512,2.672s2.229,7.851,2.4,8.1a23.219,23.219,0,0,1,2.23,3.925,12.405,12.405,0,0,1,1.2,3.763s-.86,2.753-1.2,3.751a25.319,25.319,0,0,0-.778,4.17,11,11,0,0,0,.255,2.59c.092.5.685,2.591.941,3.333a9.312,9.312,0,0,0,1.289,2.009l11.812-3.751v-.836S1375.7,730.883,1375.61,730.547Z"
							transform="translate(-4.496 -1.383)"
						/>
						<path
							className="ag-item-1821"
							d="M911.576,325.914c0,.58.86,1.336.778,2a14.907,14.907,0,0,1-.348,1.591l-1.964,2.973c-.29-.1-.6-.2-.94-.3a4.107,4.107,0,0,0-3.426.5,12.862,12.862,0,0,1-1.464,2.822c-.848,1.162-1.022,2.021-1.789,2.52a4.434,4.434,0,0,1-2.4.244l-2.056.092a6.618,6.618,0,0,1-1.881,1.336c-1.115.5-4.448,0-4.448,0a14.088,14.088,0,0,0-3-.336,7.341,7.341,0,0,1-2.741-.5c-1.034-.255-.941.163-2.148,1.162s-.418,1.672-.418,1.672a7.584,7.584,0,0,1-1.975,2.508,10.79,10.79,0,0,0-2.916,2.834c-2.137,2.59-.592,1.173-1.452,3.09s-2.137,1.916-2.137,1.916-.778.175-1.881.337a6.632,6.632,0,0,0-2.311.662,2.967,2.967,0,0,0-1.37,1.51,10.672,10.672,0,0,0-.43,2.578,5.7,5.7,0,0,1-.174,1.672,8.754,8.754,0,0,1-1.719,0A3.626,3.626,0,0,1,865,358.05c-.511-.255-2.567-1.336-2.567-1.336a19.253,19.253,0,0,0-2.056.743,4.119,4.119,0,0,0-1.544,1.336,10.185,10.185,0,0,0-1.2,2.428,23.43,23.43,0,0,0-.686,2.916s-.429,3.426-.6,3.762-7.794,11.511-7.794,11.511H818.939s-3.345-4.088-4.031-5.005-1.707-2.591-1.707-2.591a24.336,24.336,0,0,0-2.4-3.252c-.941-.918-.941-2.671-1.277-3.926s0-4.007,0-5.424a44.317,44.317,0,0,1,.162-4.507,10.4,10.4,0,0,1,2.66-5.5,15.916,15.916,0,0,0,2.822-4.263c.092-.325.092-5.424.523-6.759a4.014,4.014,0,0,1,1.022-1.835l1.452-2.5.6-3.426a32.479,32.479,0,0,1,2.311-3.751A10.286,10.286,0,0,0,822.528,325a38.842,38.842,0,0,1,3.937-3.253s1.034-1.091,2.23-2.671.348-3.182,0-4.344.081-2.254,0-3.926-1.115-1.079-2.486-1.753-1.452-.244-3.762-.918-2.311-.754-3-1.417-1.033-2.416-1.289-3.252-1.115-3.345-1.115-3.763-.848-4.75-.848-4.75l-1.847-3.357a5.672,5.672,0,0,0,1.557-.615c1.254-.755.255-.6.929-1.847s1.347-1.347,1.834-1.416a11.592,11.592,0,0,0,2.753-.686c1.511-.535.547-.569.872-1.94s.221-.662.929-1.94a6.522,6.522,0,0,0,.929-2.032c.325-1.034,1.219-.441,2.032-1.51s1.313-.941,1.893-1.87.384-.813.511-2.6-.487-1.881,0-2.916.128-.627,1-1.312.965-.441,2.625-1.185.233-.477.743-1.94.546-1.011,1.44-2.138,1.057-.627,2.346-1.277.616-.128,1.766-.221.511-.465,2-.349.639-.43,1.242-1.533.488-.929,1.452-1.278a4.672,4.672,0,0,1,2.765-.278c.929.209,1.185.278,1.568.023s.127-.813,1.056-.836a15.065,15.065,0,0,1,2.962-.07c1.242.162.348.975-.872,1.348s-.743-.349-1.6.754,1.15.592,3.113,1.057,1.475-.465,2.369-1.185a2.464,2.464,0,0,1,2-.778c.546,0,.662.36,1.08.395v4.065l1.707,1.173a7.605,7.605,0,0,0,2.312.743,9.115,9.115,0,0,1,2.915.337,6.74,6.74,0,0,1,2.056.917c.766.5,1.115.5,1.626,1.336s.767,1.835,1.034,2.254a8.1,8.1,0,0,1,.848,1.254,2.306,2.306,0,0,0,1.975,1.58,12.047,12.047,0,0,1,2.23.673s.417.163,2.567,1.336a17.78,17.78,0,0,1,2.9,1.835s.092,1.591.174,2.172a5.417,5.417,0,0,0,.766,1.579,12.6,12.6,0,0,1,3.09.255c1.278.337,1.707,0,2.056.918s.685,1.08.685,2.171a21.909,21.909,0,0,1-.511,3.334l-.429,2.241-1.893.6-3.334.917s-2.741.163-3.937.244-1.544.082-1.719.674a17.244,17.244,0,0,0-.255,2.253l1.2,1.254,1.719,1.58a26.261,26.261,0,0,0,.6,3.925,26.9,26.9,0,0,1,.674,3.09,4.347,4.347,0,0,1,.348,1.661,13.657,13.657,0,0,1,0,2.672c-.174,1.173-.429,1.753-.174,2.508a6.145,6.145,0,0,0,1.289,1.754l2.485.081,2.312-.663,1.626,2.916a16.906,16.906,0,0,0,0,2.172c.081.255.163,1.08,1.964.5s1.718-1,3.251-1.579a3.7,3.7,0,0,0,2.056-1.928,1.95,1.95,0,0,1,1.893-1.417c1.452.081,3.078,0,3.078,0s2.311.417,2.66,1,3.252,2.253,5.388,3.426a9.462,9.462,0,0,1,2.567,1.753c.43.337.349-1,1.719-.255s2.219,1.011,2.219,1.835a2.991,2.991,0,0,1-.849,2.172C912.006,325.158,911.576,325.333,911.576,325.914Z"
							transform="translate(-5.063 -1.629)"
						/>
						<path
							className="ag-item-1821"
							d="M962.249,402.816c-5.261,2.253-6.806,2.509-6.806,2.509l-2.056,1.626a15.194,15.194,0,0,0-2.055,2.253c-1.023,1.37-1.023,2-2.7,3.508s-1.289,1.869-3.333,3.124-3.984,2.624-3.984,2.624l-4.367,2.254s-.383-.244-3.728,2.508-3.729,4.634-3.078,6.261,1.277,3.124,1.277,3.124l.511,3.008-2.055,1.626-3.078,1.881-.767,1.5-1.242,3.09-2.742,2.334s-3,3.845-2.741,4.925,1.115,2.09,1.37,3.588,1.626,1.174.255,3.763-2.311,3.008-1.963,4.75.941,2.765.848,3.345-1.5,4.135-1.5,4.135c-1.023,0-.894,1-1.15,1.626a40.54,40.54,0,0,0-.256,5.25s0,6.016-.127,6.643-1.417,6.5-1.417,6.5-1.8,6.759-2.439,7.388a1.018,1.018,0,0,0-.267.522l-2.428-1.358s-12.079-.163-12.671,0-3.171,1.011-4.031,1.173-.511.674-1.2,2.091a2.544,2.544,0,0,0,.43,2.834,4.961,4.961,0,0,1,.429,1.591s-.092.825-.429,1a1.7,1.7,0,0,1-1.034.337,10.364,10.364,0,0,1-2.219-.418c-1.033-.255-1.115,0-2.23,0s-1.37.5-2.31.906a2.72,2.72,0,0,1-1.8.093s-1.2,0-2.137-.081-1.464.243-2.579,1-.848,3.008-.848,3.008v3a7.5,7.5,0,0,1-.43,3.009c-.429.917.081,2.416.175,3.008a15.1,15.1,0,0,0,1.1,2.5l-4.7,3.09s-1.544-1.207-1.881-1.544a4.349,4.349,0,0,1-.987-1.661c-.081-.465-1.29-1.337-1.29-1.337a15.143,15.143,0,0,0-2.265-1.044c-1.417-.547-2.183.162-4.146,0s-7.794,0-7.794,0a6.1,6.1,0,0,1-1.37-1.464c-.255-.58-.65-3.426-.905-4.507s-1.15-.627-1.929-.755-2.09.837-2.09.837a27.8,27.8,0,0,1-.557,3.253,2.246,2.246,0,0,1-.767,1.416c-.476.547-.3.837-3.6-.5s-.639-.872-1.754-1.754-.476-1.58-.731-2.753.731-1.207,1.2-1.963.523-1.37,1.754-2A8.072,8.072,0,0,0,847,508.1a3.264,3.264,0,0,0,.778-1.034c.21-.337.547-.8.894-1.382s.175-.918.081-1.591-.894-3.334-.976-4.623a2.213,2.213,0,0,1,.255-1.545c.035-.29,2.9.581,4.449,1.08s1.754.047,2.659-.29.813-.709,1.37-1.173a3.159,3.159,0,0,0,.767-2c.081-.674-1.37-2.009-1.37-2.009a10.289,10.289,0,0,0-2.23-1,6.429,6.429,0,0,0-2.648.337c-.86.163-1.5,1.08-2.021,1.08s-.72-.116-1.789-.243-.731-.418-1.08-.837-.255-1.8-.337-2.624a5.752,5.752,0,0,1,.151-1.58,10.686,10.686,0,0,1-2.311-.278,6.363,6.363,0,0,0-1.672-.813,8.327,8.327,0,0,0-2.381-.384,14.321,14.321,0,0,0-1.789.569s-.349-2.567-.523-3.241A7.744,7.744,0,0,0,836,482.271a20.343,20.343,0,0,0-1.37-1.662l-.952-2.253c-.953-2.265.011-1.51.348-2.509s-.592-2.59-1.022-3.507-2.916-1.254-3-1.672a20.053,20.053,0,0,1,.175-3.589c.162-1.916,1.1-1.5,1.707-3.09a7.154,7.154,0,0,0-.082-4.088c-.174-.836-.523-1.08-1.545-2.334s-2.567.337-2.567.337a16.042,16.042,0,0,1-1.857-1.672,4.428,4.428,0,0,1-.8-3.333c.093-1.51.941-3.09.778-3.845a9.135,9.135,0,0,0-1.289-2.753c-.429-.5-1.37-.337-1.975-.162a6.725,6.725,0,0,1-2.474.081,20.162,20.162,0,0,0-4.03.418,22.224,22.224,0,0,1-4.878-.081c-3.171-.337-2.822.406-2.822.406a21.6,21.6,0,0,1-1.544,1.754c-.686.674-.686.255-2.23-.325a4.459,4.459,0,0,0-3,0,10.232,10.232,0,0,1-2.567,1.162c-1.115.255-1.452-.082-2.741-.662s.255-2.009-.337-3.426a17.555,17.555,0,0,0-1.8-3.008s-.941-.743-1.627-3.914.337-1.591.592-2.253a10.606,10.606,0,0,0,.6-3.926,5.566,5.566,0,0,0-1.707-3.171l-2.579-2.334a11.537,11.537,0,0,1-3.078-1.834c-.685-.837.174-1.429.429-2.265s.175-2-.255-2.16a12.469,12.469,0,0,1-2.485-.5c-1.719-.592-1.452-.592-2.567-5.18s-.255-2.508-.092-3.425.94-1.162,1.893-1.835,4.193.174,4.193.174a8.039,8.039,0,0,0,3.218-.255c1.336-.5.8-2.091.719-3.333s-.255-.837-.719-1.092,0-2.915,0-2.915v-1.754a6.751,6.751,0,0,1,2.265-1c1.2-.255,1.789.162,3.333.406a13.7,13.7,0,0,0,3.508.255,12.108,12.108,0,0,1,2.915.163c1.2.174,1.37,1.254,1.545,1.51a6.083,6.083,0,0,0,1.277,1,1.078,1.078,0,0,0,1.37-.255,18.691,18.691,0,0,0,0-2.5,13.068,13.068,0,0,1,.349-3.67c.337-1.591,1.115-2.009,1.8-2.928s-.093-2.09-.175-3.507a8.592,8.592,0,0,0-.941-3.09,22.517,22.517,0,0,0-1.718-3c-.592-.918-.255-.5-1.963-1.092a17.5,17.5,0,0,0-2.916-.743,7.212,7.212,0,0,1-2.648-.837c-1.034-.673-.86-1-1.893-2.59s-3.078-4.344-3.078-4.344-3.345-3.508-4.541-4.507-7.619-6.423-7.619-6.423a35.662,35.662,0,0,0-4.193-2.671,12.2,12.2,0,0,1-2.567-1.591,14,14,0,0,1-2.485-3.334,2.6,2.6,0,0,1,.511-3.008c.767-1,2.4-.917,2.822-1.5a13.907,13.907,0,0,1,2.148-1.754,16.432,16.432,0,0,0,.941-2.416c.255-1.011-.174-1.174-.511-1.928s-1.033-1.08-1.719-1.754a2.346,2.346,0,0,1-.86-1.662,4.539,4.539,0,0,1,.523-2.009c.429-.836.686.418.941.674a18.538,18.538,0,0,0,3.252.581l2.289-3.194c.894.313.511-.059,1.056-.441s.453-.743,1-1.592,1.127-.662,1.127-.662a6,6,0,0,1,2.474-.186c1.567.163.6,1.068.894,2.416s.035,1.405-.71,2.218-.313.72-1.6,1.719-.512-.5-1.313-.743-.743.059-1.417.651-.255.813-.418,2.416a14.458,14.458,0,0,0,.093,3.658c.163,1.719,1.068,1.255,3.217,1.441a12.519,12.519,0,0,0,5.041-.221c1.475-.465.546-1.22,1.475-1.975s1.034-1.627.708-3.6a3.006,3.006,0,0,1,.766-3.066c.616-.906.453-1,.105-2.126s-.814-.557-1.069-1.789a30.808,30.808,0,0,1-.186-5.191c.024-1.278.6-1.219-.87-3.067s-.477-1.7-.035-3.286.836-1.591,1.091-3.438.361-.917-.731-2.508-1-.441-2.183-2.126-.929-2.473-.929-2.473a2.291,2.291,0,0,0-1.231-.407,2.094,2.094,0,0,1-1.789-.6c-.395-.535-.36-.8-1.127-1.313s-.546,0-1.219.79-1,.627-2.02,0-.071-.848.348-1.847.894-.662,2.346-1.289.6-.5.639-1.626-.059-1.162.743-1.533a27.89,27.89,0,0,1,5.969-.755c1.568-.023,2.474.128,3.369-.429a15.993,15.993,0,0,1,3.89-2.567c2.694-1.254.964-.535,4.076-2.88a19.138,19.138,0,0,1,3.275-2.323,11.306,11.306,0,0,0,3.333-2.567c1.29-1.313,1.035-1.37,2.509-2.253a6.336,6.336,0,0,1,.79-.406l1.846,3.356s.848,4.333.848,4.751.86,2.927,1.115,3.762.6,2.591,1.29,3.253.685.754,3,1.417,2.393.255,3.763.917,2.4.081,2.485,1.754-.337,2.753,0,3.925,1.2,2.753,0,4.344-2.23,2.672-2.23,2.672a38.818,38.818,0,0,0-3.937,3.252,10.2,10.2,0,0,1-1.452,1.672,32.479,32.479,0,0,0-2.311,3.751l-.6,3.426-1.452,2.5a4.017,4.017,0,0,0-1.022,1.834c-.43,1.336-.43,6.435-.523,6.76a15.9,15.9,0,0,1-2.822,4.262,10.412,10.412,0,0,0-2.66,5.505,44.318,44.318,0,0,0-.162,4.507c0,1.417-.349,4.169,0,5.424s.337,3.008,1.277,3.925a24.363,24.363,0,0,1,2.4,3.253s1.022,1.672,1.707,2.59,4.03,5.005,4.03,5.005h29.617s7.63-11.185,7.793-11.51.6-3.763.6-3.763a23.339,23.339,0,0,1,.685-2.915,10.2,10.2,0,0,1,1.2-2.428,4.116,4.116,0,0,1,1.545-1.336,18.949,18.949,0,0,1,2.055-.743s2.056,1.08,2.567,1.336a3.649,3.649,0,0,0,1.963.743,8.758,8.758,0,0,0,1.719,0,5.708,5.708,0,0,0,.174-1.672,10.673,10.673,0,0,1,.43-2.579,2.968,2.968,0,0,1,1.37-1.51,6.6,6.6,0,0,1,2.311-.662c1.1-.163,1.881-.337,1.881-.337s1.278,0,2.138-1.917-.686-.5,1.452-3.09a10.752,10.752,0,0,1,2.915-2.833,7.593,7.593,0,0,0,1.975-2.509s-.778-.662.418-1.672,1.115-1.417,2.148-1.162a7.325,7.325,0,0,0,2.741.5,14.038,14.038,0,0,1,3,.337s3.333.5,4.448,0a6.63,6.63,0,0,0,1.882-1.336l2.055-.093a4.444,4.444,0,0,0,2.4-.243c.766-.5.94-1.359,1.788-2.52a12.86,12.86,0,0,0,1.464-2.823,4.111,4.111,0,0,1,3.426-.5c.337.1.65.2.941.3a20.982,20.982,0,0,1,2.218.86l2.4,2.927,2.742,2.416s2.647,1.754,3.588,2.346,0-2.428,2.056,1.336,2.578,4.251,2.659,5.168.86,1.591.43,2.927a16.734,16.734,0,0,0-1.115,3.5c-.175,1.429,2.822,3.345,3.078,3.682s1.115.825,1.289,1.661a5.182,5.182,0,0,1,0,1.754s-2.056,1.174-2.822,1.591A4.171,4.171,0,0,0,925.048,364a9.614,9.614,0,0,0-.255,2.172,13.9,13.9,0,0,1,.081,1.417l-3.333,5.6,1.37,4.088a9.71,9.71,0,0,0,1.626,1.5c.686.418,2.312,0,2.823.836a3.634,3.634,0,0,0,1.451,1.255s-.441-2.509.418-2.509,2.16-.163,2.16-.163-.429-2.915-.092-3.17,1.718-.837,2.4-.418,1.1-.163,1.452,1.173,1.452,1.662.511,2.834-1.707,2.254-1.707,2.254a9.481,9.481,0,0,0-.429,1.079,7.589,7.589,0,0,0-.082,1.174,1.813,1.813,0,0,1,0,1.591,9.614,9.614,0,0,0-.686,2.079,4.036,4.036,0,0,0-.429,1.835,6.915,6.915,0,0,0,.429,2.253c0,.035.012.059.012.081v.023l.012.012c.1.29.278.825.568,1.719,1.2,3.682,2.706,5.017,2.683,5.6a11.535,11.535,0,0,0,0,1.672c.059.418,6.4,0,6.4,0l16.1-15.365a9.726,9.726,0,0,0,1.022,1.928c.384.372,0,2.753,0,3.5a35.471,35.471,0,0,0,.639,3.891,6.074,6.074,0,0,0,1.162,2.288c.384.337,1.544.965,1.544,1.835s.384.964,0,2.114S967.521,400.563,962.249,402.816Z"
							transform="translate(-4.83 -1.829)"
						/>
						<path
							className="ag-item-1821"
							d="M837.511,487.855a6.725,6.725,0,0,1-2,.5c-1.023.127-1.278.2-2.567.406s-1.986,1.591-2.636,2.032a20.694,20.694,0,0,0-2.44,1.44,18.168,18.168,0,0,1-3.275,1.7s-2.439.929-2.5,1.683-.4,2.381-.453,3.38-.384,1.2-.511,2.822.383,5.691,1.475,7a4.251,4.251,0,0,1,.964,3.263c0,.872-.128,1.185.255,1.5s4.46,2.567,4.46,2.567c-.221.337-.29.766-.674,1.068-.766.616-.383,3-.511,3.88a31.493,31.493,0,0,1-1.8,4.25,16.912,16.912,0,0,1-2.183,1,16.338,16.338,0,0,1-3.206.882l-2.567,1.881s-1.544,1.87-2.451,2.73a9.814,9.814,0,0,0-1.928,3.774c-.267,1-2.822,6.261-3.078,7.388a22.451,22.451,0,0,0-.255,3.507l-1.417.871a7.389,7.389,0,0,0-2.95,1.011c-1.417.87,0,1.5,0,3.879s.767.627,1.29,1.127,1.277,3.508,1.277,3.508l-.383,2.253,4.238,1.87a16.414,16.414,0,0,1,1.151,1.881c.523,1-.639.872-2.7,1.626a15.621,15.621,0,0,0-3.078,1.568c-1.162.557-.906,1.684-2.439,3.566s-1.162-.372-3.346,0-3.2.627-3.2.627l-1.29,1.754a9.612,9.612,0,0,1-3.333.5c-1.544-.128-.906-.627-1.8-1.127s-1.672-1-2.822-1.754-1.673.128-2.055,0-.523-1.5-.651-1.568a9.2,9.2,0,0,0-2.183-2.567,1.964,1.964,0,0,0-2.44-.116,11.684,11.684,0,0,1-3.716.744c-2.323.127,0,0-1.8-.059s-.778-.569-1.8-1.568-.638-.627-1.928-1.754a2.679,2.679,0,0,0-2.822-.372s-.65.128-3.09.372-.638,0-1.277-.127-.511-1.243-.651-1.754-.894-1.742-1.661-1.742-.906.872-1.033,1.5a1.677,1.677,0,0,1-1.406,1.626c-1.161.255,0,0-.65-.755a2.733,2.733,0,0,0-1.533-.871s-1.033.372-1.289.871-1.162,2.138-1.928,2.207a13.391,13.391,0,0,0-2.311.674V568.1c-.6-.557-1.29.755-1.638.79s-.511-.441-.894-1.313-.964-.94-2.6-2.067-.128-1.162-.1-2.567a15.266,15.266,0,0,0-.314-4.321c-.36-1.034-.255-.94.035-1.382a8.127,8.127,0,0,1,1.22-1.846c.568-.534,1.277.569,1.277.569a3.292,3.292,0,0,0,.8,1.033c.58.5.29,0,1.2-.384s.418-1.033.477-2.346.638-.592,1.6-1.463.581-1.231,1.382-2.138,2.567-1.37,3.4-1.66a5.1,5.1,0,0,1,1.963-.5c1.313-.115.186-.685-.093-1.869s-1.487-.535-1.765-.906a2.112,2.112,0,0,1-.453-1.033c-.128-.535-.092-.511.035-.755s1.023-.882,1.37-1.5-.348-.163-.824-.349-.4-.686-.2-1.5.348-.1.674-.662,0-.686-.349-1.382-.36-.836-.035-1.94.29-.743.837-2.345-.291-1.662-.384-2.126-.651-.883-.906-1.348.163-.535.325-1.068,1.382-.557,2.15-.372.709.406.709.778.162.418.58,1.346.929.2,1.638-.092.127-.557.151-1.185a2.283,2.283,0,0,0-.476-1.405,4.691,4.691,0,0,0-2.567-1.847c-1.325-.441-.547-.813-1.382-1.823s-1.034-.813-2.311-1.869-.384-.813-.325-2.881-.349-5.075-.186-6.516.151-1.185-.488-3.008-1.278-4.123-1.092-4.529.07-.29.929-.534a10.667,10.667,0,0,1,1.707-.406,5.179,5.179,0,0,1,1.51,0,8.368,8.368,0,0,0,.929-.663c.325-.278.221-.778.07-1.126s-.778-.279-1.254-.337-.651-.093-1.22.743-.615-.059-1.346-.221-.709.255-1.87,0,.128-.778.092-2.346-.546-2.567.326-3.253,1.056.686,1.056.686,1-.151,1.219-.557-.221-1.162-.929-1.917a3.5,3.5,0,0,0-1.985-.964c-.778-.255-.837-.534-.743-1.034a9.909,9.909,0,0,0-.511-2.6c-.2-.813.452-.592,1.544-.941s.128-1.963-.162-2.148-1.186-.162-2.091-.569.418-.72.418-.72a4.442,4.442,0,0,0-1.278-1.219c-.708-.372-.523.464-1.452,1.161s-1.15-.035-1.823-.662-.36-.685-.2-1,.2-1.034-.418-2.253-.035-.848.418-1.7.872-.221,2.73-.592,1.219-.905,3.02-1.719,1.765.442,3.531.151,2.218-1.661,3.147-3.194-.07-1.242.58-2.5,1.7-.686,2.6-2.009.569-2.056.349-3.751-.929-1.092-2.532-3.253-1.487-.882-1.638-2.16-.2-1.034-.453-2.567-1-1.881-.766-3.6-.163-2.567-.035-3.729-.384-.464-1.127-.557-.766,0-2.508-.162-.384-.557-1.731-2.16a21.252,21.252,0,0,1-1.836-2.277,4.162,4.162,0,0,1-.7-2.765,5.262,5.262,0,0,1,.639-1.777c.418-.719,0-1.034.035-2.16s.418-.278,1.51-.162.638.29.964,1.033a2.6,2.6,0,0,0,.964,1.382c.511.406,1.348.058,1.858-.627s.453-1.22.221-2.346.29-1.789.127-3.287-.638-.221-1.277-.685-.1-1.1-.035-1.568,1.346-.535,1.672-.778.023-.406-.128-1.917.059-1.185.186-2.9.615-1.068,1.034-2.288.547-1.127-.1-2.323a11.844,11.844,0,0,0-3.531-3.472c-1.185-.743.128-1.441.128-1.441a3.711,3.711,0,0,0-.837-2c-.825-1.127-1.185-.568-3.112-1s-1.185.244-1.823.778-.325,1.348-.035,1.9.325.569-.29,1.162-.639-.279-1.963-.849-.86-.871-.418-3.031-.279-3.159-1.766-4.669-4.007-4.008-4.878-3.972-.255,1.312-.673,2.531-.581.512-1.511-.523.07-3.008.128-4.134.07-1.662,1.161-2.16,1.859-.221,1.825-1.44a3.262,3.262,0,0,0-1.371-3.008,33.5,33.5,0,0,0-3.856-3.4c-2.346-1.7-4.6-3.635-5.656-4.39s-.29-1.033-1.15-2.218-2.126-1.254-2.671-2.311.546-1.068,1.544-2.323.547-2.6.872-3.623a27.2,27.2,0,0,0,1.185-2.822,16.727,16.727,0,0,1,.8-2.938c.638-1.568.511-.7,2.6-1.162s1.6-.221,2.439-1.313c.36-.476.5-.6.546-.6a9.18,9.18,0,0,0,.349-2.591c.035-1.753-.929-1.289-1.6-2.125s-.511-1.325-.674-2.858.453-1.463,1.638-2.055,1.254-.2,2.8.092,1.022,1.092,1.987,1.94,1.312,1.719,1.963,3.624.313,1.346,1.6,2.032,2.37.221,3.984,0,1.023-1.023,1.254-2.753,0-1,2.044-3.38,2.033-2.973,3.857-4.6,1.2-1.778,2.473-3.787,1.545-2.345,2.056-3.031a10.4,10.4,0,0,1,1.289-1.382,9.043,9.043,0,0,0,2.73,0c1.638-.221,1.115-.72,2.567-1.591s.639-.7.8-2.23a20.029,20.029,0,0,0,.29-3.218c0-1.661.477-1.626.059-3.066s-.708-1.475-1.73-3.6.255-1.662.255-1.662a19.893,19.893,0,0,0-2.4-4.506,26.474,26.474,0,0,0-3.763-4.263,3.729,3.729,0,0,1-1.056-2.59,6.889,6.889,0,0,0-.29-3.473c-.581-1.219-1.347-1.416-2.184-2.357a9.864,9.864,0,0,0-2.531-2.056c-.837-.476-.837-1.661-.906-2.2a5.9,5.9,0,0,1,.07-2.2c.221-.685,1-.87,1.8-1.626a4.43,4.43,0,0,0,1.254-2.845c.255-1.382.639-1.441,1.987-1.441s.383.314,2.055,2.068.453.719,1.29,1.9,2.114,1.219,2.276,1.974a13.015,13.015,0,0,0,.86,2.033c.488,1.2.778,1.033,3.124,1.661s.674.72,1.917,1.881,1.23.837,3.344,2.033,1.023,1.532,1.835,3.821a6.374,6.374,0,0,0,3.5,4.158c1.476.592.6-.058,1.313-.464s.58-.406,1.742-.442,1.115.557,1.219,1.034a3.211,3.211,0,0,1-1.091,2.288c-.837.837.151.523.754.778s.72,1.382.72,1.382.221.743.384,1.65-.2.476-.964,1.254a3.545,3.545,0,0,0-1.057,1.6c-.384.836.29.65,1.185.964l-2.288,3.194a18.546,18.546,0,0,1-3.253-.581c-.255-.255-.511-1.509-.941-.673a4.533,4.533,0,0,0-.523,2.009,2.345,2.345,0,0,0,.86,1.661c.686.674,1.371,1.011,1.719,1.754s.766.917.511,1.928a16.475,16.475,0,0,1-.94,2.416,13.9,13.9,0,0,0-2.149,1.754c-.417.58-2.055.5-2.822,1.5a2.6,2.6,0,0,0-.511,3.008,13.975,13.975,0,0,0,2.485,3.334,12.2,12.2,0,0,0,2.567,1.591,35.662,35.662,0,0,1,4.193,2.671s6.424,5.424,7.619,6.423,4.541,4.507,4.541,4.507,2.056,2.753,3.079,4.344.859,1.917,1.893,2.591a7.215,7.215,0,0,0,2.647.836,17.5,17.5,0,0,1,2.916.743c1.707.592,1.37.174,1.963,1.092a22.646,22.646,0,0,1,1.719,3,8.618,8.618,0,0,1,.941,3.09c.08,1.417.859,2.59.174,3.508s-1.464,1.336-1.8,2.927a13.1,13.1,0,0,0-.348,3.67,18.883,18.883,0,0,1,0,2.5,1.078,1.078,0,0,1-1.37.255,6.061,6.061,0,0,1-1.278-1c-.174-.255-.349-1.336-1.545-1.51a12.105,12.105,0,0,0-2.915-.163,13.706,13.706,0,0,1-3.508-.255c-1.544-.244-2.137-.662-3.333-.406a6.751,6.751,0,0,0-2.265,1v1.754s-.465,2.671,0,2.915.639-.162.719,1.092.616,2.834-.719,3.333a8.039,8.039,0,0,1-3.218.255s-3.251-.836-4.193-.174-1.719.917-1.893,1.835-1.022-1.162.093,3.426.848,4.587,2.567,5.179a12.291,12.291,0,0,0,2.485.5c.429.162.511,1.336.255,2.16s-1.115,1.428-.429,2.265a11.5,11.5,0,0,0,3.078,1.834l2.578,2.335a5.562,5.562,0,0,1,1.707,3.17,10.609,10.609,0,0,1-.6,3.926c-.256.662-1.278-.918-.592,2.253s1.626,3.914,1.626,3.914a17.482,17.482,0,0,1,1.8,3.008c.592,1.417-.94,2.834.337,3.426s1.627.917,2.742.662a10.219,10.219,0,0,0,2.566-1.162,4.459,4.459,0,0,1,3,0c1.544.581,1.544,1,2.23.325a21.659,21.659,0,0,0,1.544-1.753s-.348-.743,2.822-.406a22.253,22.253,0,0,0,4.878.08,20.128,20.128,0,0,1,4.031-.417,6.735,6.735,0,0,0,2.473-.081c.6-.175,1.545-.337,1.975.162a9.136,9.136,0,0,1,1.29,2.753c.162.755-.686,2.335-.779,3.845a4.43,4.43,0,0,0,.8,3.333,16.015,16.015,0,0,0,1.858,1.672s1.533-1.591,2.567-.337,1.37,1.5,1.544,2.335a7.153,7.153,0,0,1,.082,4.088c-.6,1.591-1.544,1.173-1.707,3.089a20.009,20.009,0,0,0-.174,3.589c.081.418,2.567.755,3,1.672s1.37,2.508,1.023,3.508-1.3.243-.349,2.508l.952,2.253a20.255,20.255,0,0,1,1.371,1.662,7.762,7.762,0,0,1,1.277,2.253C837.162,485.288,837.511,487.855,837.511,487.855Z"
							transform="translate(-4.541 -1.92)"
						/>
						<path
							className="ag-item-1821"
							d="M874.22,533.909v4.8l-5.818,2.671L863,546.3l-.43,6.341-1.1,4.425s-3.263,3-3.519,3.253a58.4,58.4,0,0,0-2.138,6.178,9.123,9.123,0,0,0-.035,1.023l-2.88-.441s-1.6-6.318-1.662-6.632-2.764-3.949-2.764-3.949-1.29-3.566-1.219-4.75-1.6-10.894-1.476-11.15.767-2.253.767-2.253a11.043,11.043,0,0,1,2.183-.941,10.274,10.274,0,0,0,2.044-.557c1.1-.372,1.487-.941,2.2-.941a2.075,2.075,0,0,0,1.475-.313,7.2,7.2,0,0,0,1.336-1.127V533.4s5.981-.3,6.306,0a3.374,3.374,0,0,0,2.381.882c1.15-.058,2.7-.128,2.7-.128l1.928-.558Z"
							transform="translate(-5.291 -3.34)"
						/>
						<path
							className="ag-item-1821"
							d="M855.224,570.984l-6.678,7.259a49.6,49.6,0,0,0-4.449,4.262c-.348.662,0,3.833,0,3.833l-4.936,7.015-.894,12.358L836.3,612.3l-2.4,6.759s-3.589-.837-4.449-1a55.43,55.43,0,0,1-5.134-2.172s-4.111-.662-5.308-.662-5.481-2.009-5.481-2.009l-3.426-.325v3.995c0,.512-2.056,4.519-2.23,5.343s-2.056,2.508-2.056,2.508-2.9,1.673-3.588,1.673-3.949-.5-5.656-.5-3.763,1.836-3.763,1.836l-4.286,1.835a37.272,37.272,0,0,1-4.285,0,12.759,12.759,0,0,1-3.589-2.846c-1.544-1.5-5.83,0-5.83,0h-4.274l-3.6-.825a25.541,25.541,0,0,0-3.078-3.008c-.512-.162-3.6-.673-4.112-.836a15.6,15.6,0,0,1-2.4-2.509l-1.707-5.841-3.7-2.16c.638-.314,2.183-.442,3.274-1.952a4.017,4.017,0,0,1,2.7-1.626,7.9,7.9,0,0,0,2.126-2.254c.964-1.5-.512-.742-.906-1.219a2.168,2.168,0,0,1-.441-2.032c.186-1.068,1.73-1.185,1.73-1.185s1.22-1.754,2.114-3.263,2.323-.929,5.018-2.254.964-2.091,1.15-2.091a9.513,9.513,0,0,0,1.8-.162,1.9,1.9,0,0,0,1.348-1.185c.163-.372-.476-.279-1.254-.5a16.86,16.86,0,0,1-2.4-.592c-.638-.313-.162-1.533-.127-2.473s.546-1.069,1.185-1.6.488-.872.488-1.37a1.981,1.981,0,0,1,.639-1.754c.638-.441.836.337,1.928.848s.6,1.313.6,1.313-.151.313-.8.337-.8.29-.29,2.183.964-.337,2.927-.081,1.057-.092,1.707-.941-.87-2.288-1.869-4.007.035-1.162.035-1.684a11.673,11.673,0,0,1,.417-1.661c.093-.569.708.035.708.035s1.186-.418,1.313-.79-.163-.685-.325-1.5-.384-.314-2.183-.813-1.115.151-1.987,0-.58.023-1.417.151-.8.406-.929,1.126.453.906.837,1.719-.291.314-.732.7a2.084,2.084,0,0,1-1.707.592c-.872-.058-2.4-.186-2.4-.186s-1.452.059-3.113.059-.615-.5-.708-1.568-.232-.778-.778-1-1.987-.372-1.7-1.185,1.254-.883,1.672-1.754,1.789-.755,2.625-.755.417-.441.58-.754-.128-.744-.221-1.406.128-.685.384-.94,1.475-.592,1.824-1.092-.674-.441-1.441-.755-.383-.627-.836-1.15-.581-.441-2.148-.662-.743.592-1.22,1.162-.29.743-.905,1.568a4.7,4.7,0,0,1-.953,1.091,5.54,5.54,0,0,0-.94.941c-.29.372.1.406.325,1.243s-.325.94-.8,1.475-.487.79-1.185.848-.778-1.068-1.033-1.568-.163-1.846-.8-2.183-.709,0-1.835-.29-.441-.651-.441-1.87.836-.848.221-1.417v-3.693a13.3,13.3,0,0,1,2.311-.674c.766-.07,1.672-1.7,1.928-2.207s1.289-.872,1.289-.872a2.738,2.738,0,0,1,1.533.872c.65.755-.511,1.011.65.755a1.676,1.676,0,0,0,1.406-1.627c.127-.627.255-1.5,1.033-1.5s1.533,1.242,1.661,1.742,0,1.638.651,1.754-1.162.383,1.277.127,3.09-.372,3.09-.372a2.679,2.679,0,0,1,2.822.372c1.29,1.127.894.755,1.929,1.754s0,1.5,1.8,1.568-.523.186,1.8.058a11.68,11.68,0,0,0,3.717-.743,1.962,1.962,0,0,1,2.439.116,9.2,9.2,0,0,1,2.183,2.567c.128.07.255,1.44.651,1.568s.894-.755,2.055,0,1.917,1.254,2.823,1.754.255,1,1.8,1.126a9.6,9.6,0,0,0,3.334-.5l1.289-1.754s1.022-.255,3.206-.627,1.8,1.881,3.345,0,1.277-3.008,2.439-3.566a15.65,15.65,0,0,1,3.078-1.568c2.056-.755,3.218-.627,2.7-1.626a16.553,16.553,0,0,0-1.15-1.882l-4.239-1.869.383-2.254s-.766-3.008-1.277-3.507-1.29,1.254-1.29-1.127-1.417-3.008,0-3.88a7.4,7.4,0,0,1,2.95-1.01l1.417-.871a22.469,22.469,0,0,1,.255-3.508c.255-1.126,2.81-6.388,3.078-7.386a9.828,9.828,0,0,1,1.928-3.774c.906-.86,2.452-2.73,2.452-2.73l2.566-1.881a16.378,16.378,0,0,0,3.206-.883,16.848,16.848,0,0,0,2.183-1,31.359,31.359,0,0,0,1.8-4.25c.128-.883-.255-3.264.511-3.88.384-.3.453-.731.674-1.068.233-.361.639-.627,1.766-.569,2.183.128,1.417-.394,2.833,0s1.151-.116,2.184.882a34.647,34.647,0,0,1,2.311,2.625s1.7,2.253,1.614,2.753-.592.5.569,1.01a5.058,5.058,0,0,0,1.789.5.864.864,0,0,1,1.289.627,7.639,7.639,0,0,1,.127,2.253s-1.8,1-1.416,1.87a2.248,2.248,0,0,0,1.672,1.382,3.755,3.755,0,0,0,1.289,0s-.535-2.126.7-1.754a5.581,5.581,0,0,1,2.254,1.626,2.106,2.106,0,0,0,.639,1.5c.65.511,1.115,1.359,1.591.988s5.528.139,5.528.139v1.068a7.2,7.2,0,0,1-1.336,1.127,2.076,2.076,0,0,1-1.475.313c-.709,0-1.092.569-2.2.941a10.251,10.251,0,0,1-2.043.557,11.06,11.06,0,0,0-2.184.941s-.639,2.009-.766,2.253,1.533,9.953,1.475,11.15,1.219,4.75,1.219,4.75,2.7,3.636,2.765,3.949,1.661,6.632,1.661,6.632l2.881.441C855.177,568.788,855.224,570.984,855.224,570.984Z"
							transform="translate(-4.704 -3.237)"
						/>
						<path
							className="ag-item-1821"
							d="M786.223,718.882a4.034,4.034,0,0,0-.86,2.009,1.349,1.349,0,0,1,1.545,1.162,42.077,42.077,0,0,0,1.532,5.179l-.523,2.068a6.218,6.218,0,0,0-1.185.011c-.511.128-.255.755-2.183,1.382s-3.984,1.254-5.4,1.627a42.228,42.228,0,0,0-5.134,2.38l-2.055,4.008,2.822,7.758,1.544,4.507-1.417,2.88-7.189,8.142-.767,4.507,1.8,1.5,3.333,3.008.384,3.647.569,9.012c-.244-.116-.523-.243-.825-.394-1.023-.5-1.928.255-2.7.441s-2.892.686-2.892.686a12.449,12.449,0,0,1-3.078.255c-1.289-.128-.964-.569-1.545-1.441s-3.019-1.185-3.019-1.185l-2.893,1.313a21.729,21.729,0,0,1-3.2-.186c-.512-.2-1.348-.882-1.672-2.636s.511-2.068.511-2.068a19.924,19.924,0,0,0-.837-2.125c-.441-.941-1.15-.813-2.114-2s.256-1.381.256-1.381a14.425,14.425,0,0,0,2.508-1.441c.964-.754,0-1.312-.2-2.567s-2.241-.5-6.551-.313-4.552-3.438-4.552-3.438l-2.253-2.322a6.585,6.585,0,0,1,1.161-2.683c.837-.941.314-1.44,1.987-2.881s-1.15-.7-2.567-1.626-2.183.3-3.09.3a9.416,9.416,0,0,0-7.317,2.138,6.327,6.327,0,0,1-2.95.685,39.5,39.5,0,0,1-5.842-1.185c-3.6-.813-2.764-2.323-5.528-4.448s-10.012-7.329-10.407-8.27-1.661-.615-2.95-.615-2.764.429-3.983-1.7-1.533-.94-3.589-2.624-2.253-3.38-2.834-3.821-2.439.186-4.169-.059-4.565-4.007-5.842-5.017-.778.07-3.09-1.626-1.731-2.253-3.4-4.321-3.078-1.683-3.972-2.369-1.417-.941-1.614-1.881a35.843,35.843,0,0,0-.894-3.636c-.384-1.185-.326-.557-3.857-.5s-.511.186-3.786-2.068-1.672-2.5-1.672-4.75.639-1.011,2.95-2.88,3.6-4.077,5.017-5.448,1.475-2.381,4.623-2.822,1.022-.116,3.856,1.068,1.219.871,2.949,1.255,1.092-.569,2.381-1.255,1.858.186,3.206,1.94,1.545.569,3.148-.685,1.475-4.576,1.475-5.32-.255-1.325-1.858-1.568-.906.186-2.183-.941.441-.754.709-1.812-.779-1.7-1.743-3.067-1.219-.07-2.5-.2-.837-.372-1.928-1.684.708-1.068,2.31-1.626,3.078,1.127,4.68.743,1.673-4.378,1.673-5.505.255-2.881-1.8-4.065-.128-.441-.825-2.381-1.092-.627-1.928-4.064.313-1.51.7-1.882a4.214,4.214,0,0,1,1.672-1.254c1.475-.813.384-1.5.255-2.7s0-1.312.837-2.624,2.055-.058,4.495-.813,3.727-4.82,3.727-4.82a3.334,3.334,0,0,1,1.731.313c1.092.441,0,1.068-.441,2.068s.825.127,2.311.7.127.8.441,3,.325,1.127,1.544,0-.836-1.568-.836-1.568a5.82,5.82,0,0,1,.766-2.939c.837-1.312.906-1.068,2.323-1s.638,1.441,1.15,1.37,1.219-.685,2.171-2.125.14-.941.012-2.7.709-.441,1.987-.813,1.033-.755,2.892-1.254,1.928.441,2.381,1.823.058,1.812,0,3,1.405,1.568,2.694,1.011,1.476-1.068,3.02-2.323a1.956,1.956,0,0,0,.731-1.475l4.809,5.029,4.286,4.832,5.308,6.852,1.022,4.67s1.371,2.508,2.916,2.834a42.317,42.317,0,0,1,4.448.836c1.545.5,1.893,1.672,3.09,1.672s3.937-1.5,4.448-1.835a16.078,16.078,0,0,1,4.286-.836c.86,0,3.589.5,3.763,1s1.719,3.845,1.719,4.68a16.2,16.2,0,0,0,.511,4.17c.337.662,3.937,2.334,3.937,2.334l3.856,1.672s-.429,2.834,0,3.671a4.66,4.66,0,0,1,0,2.508l-3.345,2s-4.111,0-4.448.837a11.759,11.759,0,0,0-.511,3.67c0,1.174-1.034,3.345-.523,3.845s5.146,1.336,5.146,1.336,4.8-.5,6.329-.5,3.6.325,4.286.163A10.7,10.7,0,0,0,776.8,706.2c.512-.5.512-2.334,1.707-1.834s3.938,2.171,4.112,2.671,1.37,3.507,1.37,3.507,4.274-.836,4.448,0,1.035,2.671,1.035,3.171a5.694,5.694,0,0,1-1.035,3C787.756,717.384,786.909,718.22,786.223,718.882Z"
							transform="translate(-4.113 -4.073)"
						/>
						<path
							className="ag-item-1821"
							d="M1224.789,451.294l-8.4,5.087h-7.364l-8.734-.662s-4.7-3.786-3.729-4c.766-.151-2.091-2.02-2.091-2.02s-3.425.174-4.285.174-4.623-5.516-5.134-5.853-4.971-1.662-4.971-1.662-3.589-.674-5.483-1a32.9,32.9,0,0,0-5.471-.174,14.944,14.944,0,0,0-2.579.836l-1.881,1.5a8.137,8.137,0,0,1-3.251,1.173,28.016,28.016,0,0,1-4.112.163c-2.567,0-1.707-.325-3.763-.836a12.428,12.428,0,0,0-3.774-.326l-6.33,1s-4.111.163-5.993,0-6.167-1.173-6.167-1.173l-9.594-.662a67.044,67.044,0,0,0-7.7,1.834c-2.23.837-4.112,2-5.819,2a27.75,27.75,0,0,0-3.774.337,33.132,33.132,0,0,1-4.274-.5c-1.37-.337-.859,0-4.635-.836s-4.274-.663-4.274-.663a14.845,14.845,0,0,1-3.09.326c-1.707,0-1.532.511-2.9,1.509s-3.6.837-5.308.837-2.915,1-5.308,1.336a2.846,2.846,0,0,0-2.4,2.833l-7.364,1.835-7.7-1.835-.349-6.341-7.7-1.173v5.679s1.533,2.834,2.056,2.834h3.253v3.507l-1.882,1.174a11.258,11.258,0,0,1-.778,3.333c-.592,1.173-3.333,3.345-3.856,3.67s-1.533,1.336-1.358,2.009a7.488,7.488,0,0,0,1.532,2h4.112l4.448,3.008s.523,2.509,2.4,3.171,3.253,1,2.567,1.336-3.937,1.174-3.937,1.174l-1.37,4.17v3.67s2.393,1.672.174,1.672a6.3,6.3,0,0,1-3.937-1.672s0-2.5-1.37-2.5-2.578,0-3.263.825a13.792,13.792,0,0,0-1.382,3.345s-1.869,3.171-2.718,3.67a23.222,23.222,0,0,0-4.285,3.333c-1.022,1.174-1.708.674-3.078,2.846s-2.578,4.007-2.578,4.007l-5.645-5.516s-1.371-3.334-2.916-2.16-1.881,2.5-2.567,3.67-1.707,3.508-3.078,4.007a7.2,7.2,0,0,0-3.09,2.834c-.686,1,0,3.67,0,3.67l2.4,2.172a2.484,2.484,0,0,1,1.023,2.171c-.175,1.336-7.538,7.016-7.538,7.016s-1.882-1.174-3.079,0-1.37,5.667-1.707,6.5-.348,2.334,1.023,2.671a5.765,5.765,0,0,1,3.427,3.17s-4.588,29.7-5.227,29.7a9.154,9.154,0,0,1-2.5-.384c-.778-.244-1.8-1.44-3.415-2.683s-2.753-.941-4.367-1.509-3.263-1.255-3.263-1.255-2.126,0-2.579.071-2.44,1.683-3.206,1.939-.639-.127-2.694-.754-1.615-1.057-1.929-1.627a27.452,27.452,0,0,1-2-4.506c-.255-1.127-.639-3.124-.894-4.251s-1.289-1.011-2.381-1.51-3.461-1.627-3.461-1.627-1.475.813-2.439,1.382a9.177,9.177,0,0,0-2.126,2.439s-2.5,2.568-2.567,2.753,2.892,4.948,2.892,4.948-1.346,1.127-1.475,1.313,2.242,1.313,2.242,1.313l1.869,2.88-1.869,2.126s-2.7,1.7-3.531,2.067a24.163,24.163,0,0,1-5.459,1.754,15.964,15.964,0,0,0-3.4.813s-2.183.883-2.822,1.2-1.544,1.556-2.126,2a5.03,5.03,0,0,1-3.4,2c-2.625.568-2.567.011-3.972.011l1.626-3.449,3.078-2.508s.686-.163.174-.743-2.055-2.753-2.055-2.753l-1.2-4.1,1.452-4.251s1.37-1.5,1.37-2.253-.6-1.835-.174-2.834.86-2.764,1.975-3.507a7.627,7.627,0,0,0,2.31-2.009c.767-1,.849-2.916,1.278-4.333a10.565,10.565,0,0,0,.6-4.356c-.175-1.579-.686-1.324-.686-4.25s0-3.751-.511-4-1.719-.929-1.719-.929-2.009-.162-2.288.337a14.04,14.04,0,0,1-1.139,3.253A25.132,25.132,0,0,1,947.959,533a6.366,6.366,0,0,1-1.707,1.324c-.778.43-1.231.314-2.6.894s-.825,1.208-.825,1.208a6.431,6.431,0,0,0,.429,2.079,5.042,5.042,0,0,0,1.707,1.591c.686.418,1.29.337,1.371,1.254s0,1.58,0,3.253-.081,2.5-.512,3.008-2.659.244-3,1.08a2.716,2.716,0,0,0,0,2.59c.511,1.08,1.115.918,1.278,1.58a2.668,2.668,0,0,1,.092,2.009c-.349.917-.685.836-.778,2.171s.429,1.5.349,2.579.174,1.254-.43,2.253-1.289,1-1.8,2.416-.255,2.184-.592,2.683a3.567,3.567,0,0,1-2.056,1.08c-.523,0-1.37-.743-2.311-.5a26.331,26.331,0,0,0-2.916,1.173,13.339,13.339,0,0,0-1.626,2.694,14.182,14.182,0,0,0,1.2,2.556,13.018,13.018,0,0,1,.511,1.846s-1.626,1.742-1.707,2.659-.511,1.429-.6,2.672a13.188,13.188,0,0,1-.43,2.508c-.163.837-2.473,1.464-2.473,1.464l-2.184-.882a1.492,1.492,0,0,0-1.033,1.126,2.279,2.279,0,0,1-1.2,1.707s-.29-6.713,0-7.084,2.358-3.38,2.358-3.38a4.975,4.975,0,0,1-1.29-3.635c.128-2.254-.638-3.38.512-4.751a12.4,12.4,0,0,0,1.905-3.38c.406-.882-.616-3.833-.616-3.833l-3-3.554a4.772,4.772,0,0,0-2.138.5,26.733,26.733,0,0,0-3.6,2.5c-.906.883-1.162,1.754-1.8,1.51s-4.878-2.881-4.878-2.881l-4.112-2.253-2.439.87-1.928-1.753a2.714,2.714,0,0,1,.766-2.126c.906-.755,5.017-8.258,5.017-8.258l-.65-13.147s3.728-8.015,4.367-8.4.906-4.623.651-6.76-1.417-5.749-1.29-7.258a72.382,72.382,0,0,1,1.29-8.258,22.78,22.78,0,0,0,.243-2.614,1.029,1.029,0,0,1,.267-.523c.639-.627,2.439-7.387,2.439-7.387s1.29-5.877,1.417-6.5.128-6.644.128-6.644a40.689,40.689,0,0,1,.255-5.249c.255-.627.128-1.627,1.15-1.627,0,0,1.417-3.554,1.5-4.134s-.511-1.591-.848-3.345.592-2.16,1.963-4.75,0-2.254-.255-3.763-1.115-2.5-1.37-3.589,2.741-4.924,2.741-4.924l2.741-2.334,2.311,2.508a40.375,40.375,0,0,0,3.856,8.34c2.9,5.017,1.278.337,2.567.092s2.23-1.091,6.759-.174.6,2.334.6,3.345.511,2.915.174,4.75.418,1.336.767,2.927,1.289.244,2.31-.174,1.115-1.835,1.115-1.835l3.253,1.092a4.205,4.205,0,0,1,1.023,2.5c.174,1.672.952,1.254,2.4,1.428a4.386,4.386,0,0,1,2.485.743c1.022.593,2.473,2.172,3.252,2.591s5.227.5,5.227.5,2.822.163,3.682-.417a14.455,14.455,0,0,1,4.448-1.417c.686,0,1.882-.082,1.882-.082l1.718,1.916,2.474-.452,1.975-1.882.6-2.927-.523-3.253a16.481,16.481,0,0,1-.162-4.088c.255-1.336.941-1.672,2.567-3.252a9.26,9.26,0,0,0,1.963-2.509c.429-.58,3.682-.917,3.682-.917s.86.917,1.719,2.009,2.485,1.916,3.159,3-.337,3.589-.337,3.589a7.115,7.115,0,0,1-2.311,1.51c-1.452.581-1.626.743-3.078,2.416s-.523,1.754.162,3.751,3,2.172,4.031,2.509,2.138-1.336,2.485-2.172,0-2.5.511-2.915,3.427.162,4.274-.418a16.344,16.344,0,0,1,2.742-1.417c1.115-.511.174-2.346.174-2.346s.511-2.671.686-3a5.192,5.192,0,0,1,2.485-1.429c1.2-.325,2.915,1.254,3.17,1.254s5.134.5,5.134.5l15.331-16.19s.255-5.168.255-6.005a1.342,1.342,0,0,1,.766-1.173l1.974-1.08a9.568,9.568,0,0,0-.429-2.335,19.019,19.019,0,0,0-1.719-3.089,18,18,0,0,0-1.881-2.091,6.138,6.138,0,0,1-.686-2.591c-.081-1.079,1.545-.836,1.882-.836s3.17.917,3.17.917l1.8,3.508.337,2.334a8.108,8.108,0,0,0,2.659.929c.941,0,2.393-1.011,3.508-1.754s2.659-1.254,3.345-1.753-.255-1.011-.6-2.254-.859-2.009-.429-2.671a27.577,27.577,0,0,1,2.276-2.509s.128-4.425.036-6.841,0-4.843,0-6.1a4.774,4.774,0,0,1,.348-2.253c.255-.58.429-1.08.941-1.162s2.485,1.417,2.485,1.417a26.22,26.22,0,0,0,2.648.581,6.714,6.714,0,0,0,2.4-.581c.511-.337.848-.754,1.626-1.417s.337-1.591.511-2.171a9.2,9.2,0,0,1,.6-2.334,2.85,2.85,0,0,1,1.37-.592l1.964,1.928a12.746,12.746,0,0,0,1.544-.837c.941-.592.511-1.336.511-1.8a21.805,21.805,0,0,1,.349-2.207l1.533-.674s.94,1.254,1.2,1.509a10.365,10.365,0,0,0,2.229.581l3-1.174,2.4,2.091s7.016-.255,7.782-.255,3.09-.163,3.519-.243.43-.674.848-1.255a4.812,4.812,0,0,1,1.638-1.417,19.347,19.347,0,0,1,2.73.418,11.552,11.552,0,0,1,1.115,1.835c0,.243,1.464,0,2.485-.255a2.034,2.034,0,0,0,1.37-1.243s2.23-.592,2.567-.592,1.8,2.172,1.8,2.172l6.6.5s1.963-.743,2.219-.917a8.66,8.66,0,0,1,2.055,0c.349,0,.859.917.859.917s10.616-.162,11.046-.162.941-.5,1.545-.581a7.9,7.9,0,0,1,2.485.918,20.394,20.394,0,0,0,2.729,2.416,10.517,10.517,0,0,0,3.426-.337c.86-.326.86-1.08,1.208-1.5s2.647-.5,3.251-.674.766-1.754,1.8-2.416a16.422,16.422,0,0,1,4.193-1.417c1.022-.255,5.215.244,8.99.082s7.108-.255,7.108-.255l4.959,5.1,1.627-.5s3.682.837,5.052,1a4.886,4.886,0,0,1,2.741,2c.174.255,3.089.336,3.089.336l2.137-1.916s4.8-.163,5.738-.163,2.23,1.5,2.23,1.5Z"
							transform="translate(-5.65 -2.479)"
						/>
						<path
							className="ag-item-1821"
							d="M933.329,837.521l11.651-3.285,21.321-6.009a19.258,19.258,0,0,1,3.853,0c.857.25,2.483-.835,3.34-.835s3.339.417,3.6.751.428,1.5,1.028,1.92,1.2.167,2.227.584.941,3.421.941,3.421l14.556.668,5.4,3.339,1.455,2h8.22l2.055-4.508,4.281-.334,2.654,3.923,2.912.918,3.424-1.586,2.483-1.336,4.11.417,6.422,6.26,2.826.417,1.284-1,4.281-5.842,2.055-.083,4.2,3.589,3.939-.167,2.911-3.089,4.368-11.352,4.709-2.587,1.8-3.255,2.227-2.421h5.993l3.254,1.169,4.281-1.169,2.569-3.755v-3.422l3.254-1.752,1.37.334,4.709-6.094,1.627-1.085s5.651-.084,5.909,0,6.422-1.919,6.422-1.919l1.284-2.337a15.447,15.447,0,0,0,3.168,1.586c.6,0,3.169-1.085,3.426-1.085s3.339.835,3.339.835l.771,2.336s2.226,1,2.483,1.169a15.94,15.94,0,0,1,2.311,2.421c.171.417,2.226-1.836,2.483-1.836a21.881,21.881,0,0,1,4.024,1.836c.086.25,2.141,2.671,2.141,3.089s.427,1.5,0,1.919-1.884.918-1.884,1.169.343,1.92.343,1.92a7.742,7.742,0,0,1,2.141,1.252,19.586,19.586,0,0,1,1.455,3.171v3.339s1.627,1.92,2.141,2.588,2.825-.668,2.825-.668l.77-1.92h3.255l2.14,1.169,1.37,1.669.857-1.669s1.456-.584,2.055-.25a8.847,8.847,0,0,1,1.8,2.588c.086.25,1.456.751,1.456.751s1.456-1.085,2.313-.918a21.343,21.343,0,0,1,3.767,2.253s.514,3.923,1.369,4.09a13.647,13.647,0,0,0,3.083.5c.257-.167,1.541-.751,2.14-.334s.771-.584,1.028-.751,1.37-1.5,2.4-1.5,4.11.334,4.11.334,3,.417,2.654,1,.857.918-.857,1.252-3.168.417-3.767,1-.514,1.5-.942,2.086a10.919,10.919,0,0,1-1.284,1.336,11.029,11.029,0,0,1,1.969,1,2.086,2.086,0,0,1,1.114,2.337c-.085,1.586-.172,3.672-.172,3.672a4.481,4.481,0,0,0-.77,1.5c-.172.751.942,1.085.343,2.17s-1.628,2-1.884,2.671,1.627,3.088,2.226,3.421,2.055.668,1.456,2.087a12.44,12.44,0,0,1-.942,1.92s-2.911.751-3,1.168a8.029,8.029,0,0,0,.686,2.421c.256.668,1.8,1.419,1.8,1.419s.6-1.753,1.541-1.753a6.4,6.4,0,0,1,2.576,1.252s-.264.835-.692,2.17a2.194,2.194,0,0,0,.692,2.336,26.092,26.092,0,0,0,2.733,1.836s2.4-2.5,2.912-3,0-1.5,0-1.586-3.083-.334-2.912-1.252-.256-1.419.257-2.337a6.718,6.718,0,0,1,2.4-2.169c.257,0,1.37,1.418,1.97,1.669a4.877,4.877,0,0,0,2.912-.25,2.338,2.338,0,0,1,2.226-.667c1.027.333,1.456.583,1.97.416s1.2-1,1.541-.835a1.874,1.874,0,0,1,.685,1.169c0,.25.6,1.252,0,1.586a16.1,16.1,0,0,1-1.712.835c-.771.334-1.028.668-1.028,1.085a2.952,2.952,0,0,1-.6,1.836c-.428.334-.771.584-.771.584l.172.75.855.334s.686.083,1.541.167a21.438,21.438,0,0,0,2.74-.083,20.818,20.818,0,0,1,1.541-2.086c.257-.167,1.37-1,1.37-1s1.2.918,1.284,1.5.343,1.5.686,1.585a3.375,3.375,0,0,0,1.455.334c.6-.083,1.541-.083,1.541-.334a9.334,9.334,0,0,0-.6-1.5l-.856-1.419s.685-.668,1.113-.668,3.083.584,3.083.584,2.055,2.17,2.226,2.5,1.2.668,1.284,1.251a17.421,17.421,0,0,1,0,2.17l-2.312,1.419-.685,2.087s-.514.917.342,1.251a17.507,17.507,0,0,0,1.884.584s.676-2.42.809-2.921a3.548,3.548,0,0,1,.732-1.5,6.887,6.887,0,0,1,2.226-1,14.8,14.8,0,0,0,1.627,2.17c.514.417,2.483,1.92,2.826,2.336s.085.918,1.369.334,1.37-.667,1.37-1.084a23.167,23.167,0,0,0-.343-2.755c-.171-.918-.256-2.755-.256-2.755l.171-1.753,3.147.064"
							transform="translate(-5.839 -4.996)"
						/>
						<path
							className="ag-item-1821"
							d="M1115.4,797.3l-1.97-3-2.825-.835-1.884,1.919-2.141-1.084-1.541-.334-.343,1.418h-2.055v-2.336s-1.027-1.419-1.369-1.419-3.083.584-3.083.584l-1.456-1.5-3.339-.417s-2.141-1.252-1.97-1.5a25.335,25.335,0,0,0,.685-2.754l-2.911-.918s1.113-1.252,0-1.252-4.795-.584-4.795-.584v-4.508a17.052,17.052,0,0,0-2.055-.918c-.428-.083-2.483.751-2.483,0V774.6s.685-2.087,0-2.254-1.37-.25-1.8-.334-1.8,0-1.8-1.169v-2c0-.751-2.312-3.255-2.312-3.255l14.555-12.853-.085-3.923,3.255-2.253,3.682,1.084,1.369-2.086s1.027-.751,1.541-1.085a8.69,8.69,0,0,0,1.541-1.085c.514-.5,1.028-1.252.857-1.669s-1.2-2.254-.942-2.421,2.825-.918,2.825-.918a.72.72,0,0,0,.257,1.252c1.028.5,1.883,1.252,2.4.835a6.655,6.655,0,0,0,1.113-1.5l-.941-2-1.628-3.255s-1.969-1.419-1.969-2a11.7,11.7,0,0,1,.685-2.336,35.632,35.632,0,0,0,2.569-2.5,28.391,28.391,0,0,0,1.2-4.173,11.834,11.834,0,0,1,1.114-3.506,16.955,16.955,0,0,0,1.028-3.339c.085-.334,2.054-7.512,2.054-7.512l4.967-4.757,4.11,3.255h1.712c.343,0,2.654-2.42,3.083-2.921a19.429,19.429,0,0,1,2.654-2.254,35.113,35.113,0,0,1,4.2-1.753,11.746,11.746,0,0,0,4.025-1.919c.428-.5,2.482-1.92,2.911-2.5s1.884-2.838,1.884-2.838l2.483.417v1.336l7.192-.835a19.691,19.691,0,0,0,3.083,1.169c.514,0,3.426.083,3.854-.334a9.7,9.7,0,0,1,2.825-1.753c.343.083,3.253-1,4.2-1.085a24.768,24.768,0,0,0,4.453-.835,13.011,13.011,0,0,0,1.284-1.5l5.651-.5,1.712-1.169a16.992,16.992,0,0,0,2.141,0,18.481,18.481,0,0,1,2.227,0l3.424-2.671,2.141-.751.857,3.005s-.771,2.17-1.541,2.588-3.511,1.335-3.511,1.335v5.092l1.627.25s7.278,7.512,7.964,7.846,6.079-.167,6.336.083,4.6,2.17,4.6,2.17"
							transform="translate(-6.719 -4.284)"
						/>
						<path
							className="ag-item-1821"
							d="M966.163,827.707l-7.7-3.043s-3.252,0-3.426-.662-1.718-4.344-1.718-4.344-2.73.5-3.253,0a13.766,13.766,0,0,0-3.588-2.172c-.523,0-1.719.674-2.567.674s-2.742-2.509-2.742-2.509h-2.055v-3.833l-4.623-2.508-1.207,1.336s-2.393,1-2.742.5-1.532-1.835-1.532-1.835a12.849,12.849,0,0,1-2.567.836c-1.545.337-3.09.663-3.09.663H918.9v-2.335a4.332,4.332,0,0,1-1.718-2c-.337-1.173-1.023-2.845-1.023-2.845l1.023-2.834-1.023-4.67-2.393-4.007-6.852-1.509h-4.112a28.3,28.3,0,0,0-3.774-1.5h-1.707l-.686-11.185a16,16,0,0,0-2.915-1.336c-1.2-.337-3.937-.836-3.937-.836l-1.882-.663-2.741.663-1.881-4.844.6-3.09-3.472-2.624-.384-4.635s-7.19-1.254-7.711-1.254-5.645.384-6.679-.116a12.3,12.3,0,0,1-2.567-2.508,26.929,26.929,0,0,0-3.206-1.627s-3.345-1.626-5.017-1.254-2.567,1.5-3.2,1.254-5.134-2.753-5.134-2.753l-1.8-2.508-2.056-1.37-.383-3.891s-.651-1.37-1.672-1.37-3.984.128-4.75.245-1.8-.245-2.184.383.894,1.255-1.161,1.87-3.461,1.011-3.461,1.011a32.413,32.413,0,0,0-4.239-.5c-.523.116.255,1.127-1.928,1.37s-1.672.628-4.112.128-6.423-1.254-6.423-1.254l-2.95-1.127s-2.439-2.381-2.833-2.126-1.023-1.126-1.023-1.126v-13.4l-5.005-4.378-3.345-1.754s-2.44,1.754-2.95,2.253,0,4.39,0,4.39a17.152,17.152,0,0,1-3.217.743c-.535,0-1.487-.092-2.277-.139"
							transform="translate(-4.934 -4.524)"
						/>
						<line
							className="ag-item-1821"
							y1={0.012}
							transform="translate(783.806 725.227)"
						/>
						<path
							className="ag-item-1821"
							d="M925.259,568.87c-1.151,1.37-.385,2.5-.512,4.75a4.978,4.978,0,0,0,1.289,3.636s-2.056,3.008-2.357,3.38,0,7.085,0,7.085a14.241,14.241,0,0,1-1.243.8,21.246,21.246,0,0,0-3.984,3.38l-2.95,1.255-1.8,1.869v2.266c0,.5-.894,2.253-1.544,2.369s-1.278.383-2.568.754-.766,1.755-.766,1.755a8.341,8.341,0,0,1,.766,2.752v1.824a24.386,24.386,0,0,0-3.078,2.184c-2.439,1.881-2.31,2.752-2.961,4.007a5.63,5.63,0,0,1-2.7,2.508,25.187,25.187,0,0,1-6.55.743c-2.567,0-1.406-2.126-1.406-2.126s2.44-3.135,2.822-4.506a3.715,3.715,0,0,0-.383-2.648,4.383,4.383,0,0,0-2.44,0c-1.544.36-1.928.024-2.961.523s-1.405,1.755-2.183,1.869-.894-1-1.405-1.753-2.056-.372-2.31-.615,0,2.868,0,2.868a10.889,10.889,0,0,0-2.58-.87A27.453,27.453,0,0,1,878,608.3c-1.545-.371-4.622-1.369-4.622-1.369a8.287,8.287,0,0,0-3.346,1.369c-1.15,1-.512,2.881-1.15,3.136s-1.417,2.624-3.218,3.623a12.47,12.47,0,0,0-3.078,2.509,34.092,34.092,0,0,1,0,3.624,5.8,5.8,0,0,1-2.311,2.38c-.906.384-5.017,2.254-5.017,2.254l-5.644,4.135-5.272,3.031h-4.671a1.717,1.717,0,0,0-.637-.7,22.612,22.612,0,0,1-2.9-2.765l-2.567-4.076.847-6.516,2.4-6.759,1.964-6.584.893-12.357,4.937-7.016s-.349-3.17,0-3.834a49.589,49.589,0,0,1,4.449-4.262l6.677-7.259s-.047-2.2-.034-3.565a9.208,9.208,0,0,1,.034-1.023,58.678,58.678,0,0,1,2.138-6.179c.255-.255,3.519-3.253,3.519-3.253l1.1-4.425.429-6.341,5.4-4.925,5.818-2.67v-11.94l4.705-3.09a15.132,15.132,0,0,1-1.105-2.5c-.092-.591-.6-2.09-.174-3.008a7.491,7.491,0,0,0,.43-3.008v-3s-.256-2.254.849-3.009,1.637-1.09,2.578-1,2.138.081,2.138.081a2.709,2.709,0,0,0,1.8-.092c.941-.406,1.2-.906,2.311-.906s1.2-.255,2.23,0a10.432,10.432,0,0,0,2.219.419,1.7,1.7,0,0,0,1.034-.338c.337-.175.43-1,.43-1a4.967,4.967,0,0,0-.43-1.591,2.54,2.54,0,0,1-.429-2.834c.685-1.416.337-1.928,1.2-2.09s3.426-1,4.031-1.174,12.671,0,12.671,0l2.427,1.359a22.541,22.541,0,0,1-.243,2.613,72.472,72.472,0,0,0-1.289,8.258c-.128,1.511,1.022,5.135,1.289,7.259s0,6.388-.65,6.759-4.367,8.4-4.367,8.4l.649,13.149s-4.111,7.5-5.017,8.256a2.725,2.725,0,0,0-.766,2.127l1.928,1.753,2.439-.87,4.112,2.253s4.239,2.625,4.878,2.88.894-.627,1.8-1.509a26.659,26.659,0,0,1,3.6-2.5,4.78,4.78,0,0,1,2.138-.5l3,3.554s1.022,2.951.616,3.834A12.481,12.481,0,0,1,925.259,568.87Z"
							transform="translate(-5.215 -3.122)"
						/>
						<path
							className="ag-item-1821"
							d="M927.084,592.377c.023,1.324.394,2.624-.476,4.076-.894,1.5-.511,1.882-1.928,3.124s-3.6,2.636-4.239,3.265-1.406,1.044-1.545,2.09a33.855,33.855,0,0,0,.4,6.424c.383,3.38,2.183,3.879.511,5.5s-4.111,3.636-4.111,3.636l-1.417,2-2.44,2.381a18.189,18.189,0,0,0-4.367,1c-1.15.627-5.61,8.3-5.61,8.3l-6.1,8.177s-.918,1.173-1.429,1.834,1.2,2.346,1.37,3.682a19.6,19.6,0,0,1-.348,5.505c-.337,1.174-.86,1.336-3.426,2.834s-3.079,1.336-5.645,1.975a12.952,12.952,0,0,0-5.831,3.542c-1.37,1.337,0,5.007,0,5.007s-2.055,4.332-3.078,5.005-5.993,3.333-5.993,3.333-1.881,3.508-2.741,4.682-2.567,7.34-2.567,7.34a32.187,32.187,0,0,1-4.111,3.449,11.781,11.781,0,0,1-4.112.894,38.67,38.67,0,0,0-4.111,2.834c-.337.5-1.707,4.681-1.707,4.681a7.182,7.182,0,0,1-2.056,2c-1.034.5-3.09,4.008-4.111,4.68s-3.426,5.505-3.426,5.505l-4.623,5.006h-6.5a22.914,22.914,0,0,0-3.09-.837,5.909,5.909,0,0,0-2.741,0h-2.056a9.224,9.224,0,0,1-1.37-2.334,7.375,7.375,0,0,0-1.532-2.334h-6.516c-1.881,0-1.37-.5-2.044-.837s-.174-2.009-.174-2.845.174-2.834.174-3.833a23.626,23.626,0,0,0-.523-3.345l-2.056-3.171-2.567-.325-2.741-.837-1.022-2.508.336-3.508-.336-3.833-.686-3.008,2.393-1.5s3.774.5,4.971.5a56.144,56.144,0,0,1,5.818,1,4.977,4.977,0,0,0,2.916-2.171c1.2-1.835-.511-4.007-.511-4.007l-1.893-5.505h2.23a18.71,18.71,0,0,0,2.392-2.172c.86-1,.349-2,1.034-3.333a1.881,1.881,0,0,1,2.231-.837l4.785,1.5s2.741-.5,4.111-.837,2.916-2.334,3.426-2.833,2.056-2,2.056-2l3.774,1.336,4.274,3.5,3.6-2.159s-.86-4.008-1.2-4.878-4.634-5.807-4.8-6.005a52.532,52.532,0,0,1-2.742-6.143c0-.512,1.2-4.345,1.2-4.345l-2.056-6.515s-.452-.941-.894-1.638h4.658l5.273-3.032,5.645-4.134s4.111-1.87,5.016-2.254a5.8,5.8,0,0,0,2.311-2.381,33.8,33.8,0,0,0,0-3.623,12.439,12.439,0,0,1,3.079-2.509c1.8-1,2.566-3.38,3.217-3.623s0-2.138,1.15-3.136a8.294,8.294,0,0,1,3.345-1.37s3.078,1,4.623,1.37a27.214,27.214,0,0,0,3.461.627,10.9,10.9,0,0,1,2.578.872s-.267-3.124,0-2.869,1.789-.128,2.311.615.639,1.882,1.405,1.754,1.162-1.37,2.183-1.87,1.417-.162,2.962-.523a4.39,4.39,0,0,1,2.439,0,3.713,3.713,0,0,1,.384,2.648c-.384,1.37-2.822,4.507-2.822,4.507s-1.162,2.126,1.405,2.126a25.2,25.2,0,0,0,6.551-.743,5.634,5.634,0,0,0,2.694-2.509c.651-1.254.523-2.125,2.962-4.007a24.147,24.147,0,0,1,3.078-2.183v-1.823a8.334,8.334,0,0,0-.767-2.753s-.511-1.382.767-1.754,1.928-.627,2.567-.755,1.544-1.869,1.544-2.369v-2.265l1.8-1.87,2.949-1.254a21.2,21.2,0,0,1,3.984-3.38,13.92,13.92,0,0,0,1.243-.8,2.287,2.287,0,0,0,1.2-1.707,1.491,1.491,0,0,1,1.033-1.127l2.183.882-.72,2.706a8.788,8.788,0,0,0-.209,3.369A.763.763,0,0,0,927.084,592.377Z"
							transform="translate(-5.02 -3.666)"
						/>
						<path
							className="ag-item-1821"
							d="M831.424,716.963l-5.147,3.508s-3.251,6.5-4.273,7.178-1.718,2.833-1.718,2.833,2.4,2.671,2.567,3.671.684,3.345.684,3.345l2.58-2.335s2.043,1.5,2.043,2.5a11.979,11.979,0,0,0,.523,2.671l5.18,3.426"
							transform="translate(-5.132 -4.489)"
						/>
						<path
							className="ag-item-1821"
							d="M978.652,710.079v6.841l4.46,4.507,3.763,4.843,3.774,3.171v5.168s1.707,3.845,2.219,3.845,4.285.836,5.308,2.416,3.774,4.924,3.774,4.924,3.426,1.174,4.112,1.847,3.588,3.67,3.588,3.67,3.937,2.5,4.623,1.834a33.624,33.624,0,0,0,2.4-3.345s-.174-2.5,1.2-3.17,3.426-1.662,3.426-1.662,2.392-1.509,2.567-2.508-.337-2.009,0-3.508,1.544-4.17,2.392-4.17,2.916,2.335,2.916,2.335,1.37,1.5,2.23.5,0-3.17.86-3.17a32.662,32.662,0,0,1,4.785,1.5l8.734,6.516s3.6,1.336,4.46,2.671,2.219,2.834,2.567,4.007a20.262,20.262,0,0,0,1.707,3.334,5.758,5.758,0,0,0,2.741,2.345,4.617,4.617,0,0,1,1.882,3,5.056,5.056,0,0,0,.348,2.671,3.036,3.036,0,0,0,2.056,2.009,3.813,3.813,0,0,0,2.056,0l2.056-1.509s3.425,0,3.762.5,3.937,4.262,3.937,4.262"
							transform="translate(-6.122 -4.446)"
						/>
						<path
							className="ag-item-1821"
							d="M1186.98,683.834l4.448-3.751,2.742-1.835a19.5,19.5,0,0,0-.163-2.346c-.174-1.161-1.37-1.161-2.23-2.5s-1.544-.5-3.6,0a6.4,6.4,0,0,1-3.426,0h-3.763l-2.23,2-2.9.674s-3.774.337-9.257-2.009-1.881,0-3.251.174-3.937.163-3.937.163-1.707-1-1.882-2.334a26.3,26.3,0,0,1,.175-4.345l-3.252-2.334-1.719-2.671s-1.37-2.834-2.055-4.2-.848,0-.848,0h-4.286l-1.37-2.973,21.579-12.357-3.6-1.162-4.96,1.336s-2.915,3.008-4.971.662-1.707-.163-3.252-.325-1.37-.175-2.742-.337a3.843,3.843,0,0,1-2.23-1.174,12.421,12.421,0,0,0-3.078-1.161c-1.2-.175-2.056.662-4.8.325s-2.056-3.171-3.252-3.171c-.732,0-1.963.314-3.857.4"
							transform="translate(-7.063 -3.996)"
						/>
						<line
							className="ag-item-1821"
							y1={0.116}
							transform="translate(922.064 588.594)"
						/>
						<path
							className="ag-item-1821"
							d="M1165.977,642.771l5.266-3.339,3.725-1s-.386-2.128,1.027-2.754,2.569-1.252,2.569-1.252.771-1.5,0-2.129-1.8-.376-1.156-1.878,1.412-2.628,1.156-3.129-1.8-1.252-1.8-1.252l-.643-1.753,3.725-3.255,2.184-1.628a5.716,5.716,0,0,0,2.825.626,5.008,5.008,0,0,0,2.441-2c.128-.376-.514-1.377-.514-1.377s-.771-3.63-.386-3.881,2.055.125,1.67-.626-4.238-2.379-4.238-2.379.128-.751,1.541-1.127,1.785-.751,2.755-.751.97-.5,2.511.125a13.624,13.624,0,0,0,3.767,1.252c.857,0,.343.626,1.884-.626a15.972,15.972,0,0,1,3.6-2.5,2.441,2.441,0,0,0,1.412-1.291,12.041,12.041,0,0,1,.129-2.84c.256-1.377.514-3.13,1.927-3.256a7.588,7.588,0,0,1,2.953-.125c1.669.25,1.413-.214,2.312-.106s2.569-1.145,2.569-1.145a9.839,9.839,0,0,1,2.953-.25c1.541.125,3.34.125,3.34.125a1.431,1.431,0,0,0,1.026-.751,8.718,8.718,0,0,0,0-2.629l.114-3.631s2.84-1,4,0,.9,2.129,2.055,1.377-1.156-.751,1.157-.751,3.211-.125,3.853.626.256,1.127,1.927,1,1.67-.877,2.7-.751a3.265,3.265,0,0,1,1.8,1s.514,1.252,1.156.751.257-2.88.257-2.88l-.642-.82s2.7.056,3.211,0,.77.945,1.8,2.072,0,1.628,2.441,1.878,3.6.125,3.981-.125a7.2,7.2,0,0,0,1.8-1,12.809,12.809,0,0,1,2.954-1.5l8.219-1.324,4.5-2.306a3.368,3.368,0,0,1,2.825-1,38.922,38.922,0,0,0,5.395.25,31.419,31.419,0,0,0,4.752-.877s2.953-.5,3.725-.751,2.055-2.254,2.312-2.755.257-1.126,1.8-1.627.77-1.5,2.441-2.5a31.522,31.522,0,0,1,3.082-1.628l1.67-1s0-.376,1.67-.626a17.549,17.549,0,0,1,3.339-.249,20.173,20.173,0,0,0,2.183-.126s0-1,1.8-.625,1.541,1.126,3.853,1.251l2.313.125s.128-2.128,1.412-2.128a6.413,6.413,0,0,1,3.211.875c.9.5,2.055.627,2.313,1.753s-.771,2.254,1.027,2.254,1.413.751,2.825-.25,1.285-1.628,1.8-2.254a25.514,25.514,0,0,1,3.6-2.378l3.981-1.878"
							transform="translate(-7.294 -3.578)"
						/>
						<path
							className="ag-item-1821"
							d="M1127.595,521.688V637.844a23.156,23.156,0,0,1-4.541-.221c-4.622-.674-1.881.837-2.567,1s-2.567,0-6.329-.337-3.089,0-6.342.5a49.039,49.039,0,0,1-8.048.837,46.69,46.69,0,0,1-5.134,0c-2.4,0-2.567-1.337-3.089-1.835s-1.882,0-3.427.337-1.533,2-2.9,2.334-3.774,0-5.308.163-6.167.674-8.56.836-2.056-1.661-2.056-1.661-2.741-3.345-4.285-3.345-1.882,3.345-1.2,3.844,0,3.334,0,3.334l-1.545,1-2.229-1.336-3.079-1.162a10.341,10.341,0,0,0-2.392.325c-1.208.337-1.208,1.011-2.579,1.847a38,38,0,0,1-3.252,2.16c-.86.336-2.393,0-3.253.336s-1.545,2.172-2.056,2.834-1.2,1.011-2.741.837a8.62,8.62,0,0,0-2.9,0c-1.207.174-3.426,1.173-3.949,2.171a10.975,10.975,0,0,1-2.044,2.334s-1.893.837-2.4,1.011-2.916-3.345-2.916-3.345l-4.622,2.846-3.287,3.5v2.171a19.7,19.7,0,0,1-4.413,2.509c-1.719.5-4.46,1.661-7.19,1.5s-3.774.836-3.774.836l-2.567,1.672s-1.2,1.162-2.056,1.162a19.736,19.736,0,0,1-3.6-1,23.78,23.78,0,0,0-3.588-.337,45.321,45.321,0,0,0-4.972.5l-4.448-2-3.774.662V708.9h-6.842a13.288,13.288,0,0,0-5.992,2c-1.034.837-4.46,1.672-6.516,1.835s-4.274-1.661-4.274-1.661-1.719-2.508-2.4-3.682-3.078-.162-3.078-.162l-3.763-6.679a49.163,49.163,0,0,0-6.342-1.5c-1.881-.175-5.134.662-5.818.5s-5.656-2.171-5.656-2.171-2.567-1.5-2.916-2.172-1.022-3.507-1.707-5.064-2.23-6.12-2.567-7.282-.348-4.007-.685-5.806-1.034-4.878-1.545-7.051-1.544-5.179-1.707-6.678a60.222,60.222,0,0,1,.512-7.178l2.392-1.672s2.056-4.333,2.056-5.342.174-5.168,0-6.167-3.426-3.682-3.426-3.682-3.414-.663-4.448-1-3.427-2.833-3.427-2.833l-7.537-1.672s4.46-7.678,5.61-8.3a18.2,18.2,0,0,1,4.367-1l2.44-2.381,1.417-2s2.439-2.009,4.111-3.635-.128-2.126-.511-5.505a33.848,33.848,0,0,1-.4-6.424c.14-1.044.906-1.463,1.545-2.09s2.822-2.009,4.239-3.265,1.033-1.626,1.928-3.123c.87-1.452.5-2.753.476-4.077.546-.047,2.834-.243,3.565-.243a3.411,3.411,0,0,0,2.254-1.684,2.562,2.562,0,0,1,.708-1.824c.7-.87,1.6-1.684,2.184-2.311s1.405-.627,1.6-2.508-.709-2.5,0-3.31,2.822-1.568,3.983-3.449.442-2.7,1.22-3.567a2.621,2.621,0,0,1,1.742-.813l1.022-.058c1.406,0,1.347.558,3.972-.012a5.038,5.038,0,0,0,3.4-2c.58-.441,1.487-1.7,2.126-2s2.822-1.2,2.822-1.2a15.963,15.963,0,0,1,3.4-.813,24.154,24.154,0,0,0,5.46-1.754c.836-.372,3.53-2.067,3.53-2.067l1.87-2.126-1.87-2.881s-2.369-1.126-2.241-1.312,1.475-1.313,1.475-1.313-2.95-4.762-2.892-4.948,2.567-2.753,2.567-2.753a9.16,9.16,0,0,1,2.126-2.439c.964-.569,2.439-1.382,2.439-1.382s2.369,1.126,3.461,1.626,2.126.384,2.381,1.51.639,3.124.894,4.251a27.429,27.429,0,0,0,2,4.507c.314.569-.127,1,1.928,1.626s1.928,1,2.7.755,2.764-1.882,3.2-1.94,2.579-.07,2.579-.07,1.661.7,3.263,1.254,2.765.255,4.367,1.509,2.636,2.44,3.415,2.683a9.148,9.148,0,0,0,2.5.384c.639,0,5.226-29.7,5.226-29.7.511,1.336,6.853,8.85,6.853,8.85l-1.37,3.171,2.392,5.005a18.276,18.276,0,0,1,4.449,3.008c1.37,1.5,4.971,3.171,5.145,4.344s2.033,1.626,2.033,1.626,2.753-.07,3.008-.383a6.224,6.224,0,0,1,2.253-1.5,17.29,17.29,0,0,1,3.531-.755,2.628,2.628,0,0,1,2.451-.5c1.278.5.569.186,2.5.5s2.636.569,4.111.314,2.893-.43,3.473-.627a5.837,5.837,0,0,0,2.056-1.813,15.819,15.819,0,0,1,1.66-2.253c.2-.127,6.04-2.2,6.423-2.2a17.936,17.936,0,0,1,4.053,1.2c.7.441,1.219,2,2.44,2.312a7.985,7.985,0,0,0,3.844-.059,11.082,11.082,0,0,0,2.962-1.509l1.857-3,3.532-4.635,3.147-1.626,4.622-.882a18.065,18.065,0,0,0,6.877-2.683c3.019-2.138,3.147-3.577,5.458-4.076s2.636-1.057,4.75-1.313a8.557,8.557,0,0,0,4.82-1.94c1.278-1.068,1.278-1.626,2.37-2.2s3.217-2,3.8-2.183S1127.595,521.688,1127.595,521.688Z"
							transform="translate(-5.646 -3.268)"
						/>
						<path
							className="ag-item-1821"
							d="M1129.012,521.278l4.75-2.88,3.09-8.885a34.79,34.79,0,0,1,4.75-2.637c1.022-.243,2.695-2,4.5-3.252s3.2-2.624,4.622-3.508a7.824,7.824,0,0,0,2.822-2.381,32.475,32.475,0,0,0,0-5.006l13.88-8.258s3.588-.127,5.9-.5a20.217,20.217,0,0,0,5.4-1.255,36.678,36.678,0,0,0,4.495-2.381c1.15-.754,3.588-1.626,4.75-2.88a25.068,25.068,0,0,0,2.44-3.751c.511-.755,1.289-2.881,2.311-3.88s8.989-13.729,8.989-13.729"
							transform="translate(-7.063 -2.857)"
						/>
						<path
							className="ag-item-1821"
							d="M1050,444.386s1.881-3.833,2.393-4.17,4.448-3.507,4.448-4.17a21.727,21.727,0,0,0-.674-4.007c-.349-1.173,2.044-1.173,2.044-1.173l4.635,1.173a31.97,31.97,0,0,0,4.274-3.345c1.033-1.162,1.033-2.834,1.033-4.332s-.175-3.845.162-4.681a17.894,17.894,0,0,1,2.579-3.671c.686-.674,2.567-3.008,2.567-3.008V407.5l3.578-7.723"
							transform="translate(-6.569 -2.505)"
						/>
						<path
							className="ag-item-1821"
							d="M919.244,471.658c1.033,0,.384.743,1.928.871a4.5,4.5,0,0,0,2.822-.871l1.8-1.011a19.417,19.417,0,0,0,3.6,1.011,31.737,31.737,0,0,0,3.461,0l2.578-2.88a11.16,11.16,0,0,1,2.44-.128c.766.128,1.672,1.37,1.928,3.008s.766,1.626.384,4.007-1.29,2.625-.639,4.507a19.735,19.735,0,0,0,2.183,5.005,9.858,9.858,0,0,0,3.206,3.253c.894.372,3.856.5,4.623.871a5.775,5.775,0,0,1,2.183,1.51c.766.871.894,2.753,2.694,2.753s4.751-3.008,4.751-3.008a7.73,7.73,0,0,1,1.544-3c1.033-1.011,4.239-3.38,4.239-3.38l4.239-2.381s1.417-1.626,1.928-.627,1.023,1.5.894,2.625,0,.754-1.15,2.88-3.414,2.509-.941,3.763,3.124,1.742,3.763.743.894-2.381,1.544-2.381,4.367,4.262,4.5,4.634a5.879,5.879,0,0,1,1.277,3.38c.128,2.254,0,3.717.906,4.239a6.3,6.3,0,0,1,2.567,2.52,27.892,27.892,0,0,1,1.8,3.88,30.06,30.06,0,0,1,.639,3.635,4.037,4.037,0,0,1-.894,3.508c-1.417,1.5-.523,0-1.417,1.5s-1.022,1.381-.894,3.135-.394,1.87,1.023,2.753a9.391,9.391,0,0,0,3.078,1.127s3.856.372,4.239.872a8.85,8.85,0,0,1,1.289,2.008,29.945,29.945,0,0,0,2.95,4.251,3.662,3.662,0,0,0,2.439,1.045c1.545.209,2.056-.163,3.09,1.464s1.928,3.124,1.928,3.124a25.521,25.521,0,0,1,3.079-.5c.766,0,4.25-5.749,4.25-5.749"
							transform="translate(-5.751 -2.936)"
						/>
						<path
							className="ac-item-1821"
							d="M955.987,539.5c-.43,1.417-.511,3.333-1.278,4.332a7.618,7.618,0,0,1-2.312,2.009c-1.115.743-1.544,2.5-1.974,3.508s.174,2.079.174,2.834-1.37,2.253-1.37,2.253l-1.452,4.251,1.2,4.1s1.533,2.159,2.055,2.753-.174.743-.174.743l-3.078,2.508-1.626,3.449-1.023.059a2.619,2.619,0,0,0-1.742.813c-.778.87-.07,1.683-1.219,3.565s-3.275,2.625-3.984,3.449.186,1.44,0,3.31-1.033,1.881-1.6,2.509-1.487,1.44-2.183,2.31a2.562,2.562,0,0,0-.709,1.823,3.411,3.411,0,0,1-2.254,1.684c-.731,0-3.019.2-3.565.243a.76.76,0,0,1-.116.012,8.773,8.773,0,0,1,.21-3.368l.72-2.706s2.31-.628,2.473-1.464a13.133,13.133,0,0,0,.429-2.509c.093-1.242.512-1.742.6-2.671s1.707-2.659,1.707-2.659a13.052,13.052,0,0,0-.511-1.847,14.178,14.178,0,0,1-1.2-2.555,13.339,13.339,0,0,1,1.626-2.694,26.284,26.284,0,0,1,2.916-1.174c.941-.243,1.789.5,2.311.5a3.562,3.562,0,0,0,2.055-1.08c.337-.5.081-1.254.593-2.683s1.2-1.405,1.8-2.416.337-1.162.43-2.253-.43-1.243-.349-2.579.429-1.254.778-2.172a2.66,2.66,0,0,0-.093-2.008c-.162-.663-.766-.5-1.277-1.58a2.716,2.716,0,0,1,0-2.59c.337-.837,2.567-.581,3-1.08s.512-1.336.512-3.008.08-2.334,0-3.253-.686-.836-1.371-1.254a5.042,5.042,0,0,1-1.707-1.591,6.436,6.436,0,0,1-.429-2.079s-.546-.627.825-1.208,1.823-.464,2.6-.894a6.366,6.366,0,0,0,1.707-1.324,25.173,25.173,0,0,0,2.137-4.263,14.122,14.122,0,0,0,1.139-3.252c.278-.5,2.288-.337,2.288-.337s1.2.674,1.719.929.511,1.08.511,4,.511,2.671.686,4.25a10.568,10.568,0,0,1-.6,4.356"
							transform="translate(-5.803 -3.294)"
						/>
						<path
							className="ad-item-1821"
							d="M874.069,526.485v7.143l-5.134-.314-1.928.558s-1.545.07-2.7.128a3.374,3.374,0,0,1-2.381-.882c-.325-.3-6.306,0-6.306,0s-5.064-.5-5.528-.14-.941-.476-1.591-.987a2.107,2.107,0,0,1-.639-1.5,5.581,5.581,0,0,0-2.254-1.626c-1.23-.372-.7,1.754-.7,1.754a3.783,3.783,0,0,1-1.289,0,2.248,2.248,0,0,1-1.672-1.382c-.384-.872,1.417-1.87,1.417-1.87a7.658,7.658,0,0,0-.128-2.253.864.864,0,0,0-1.289-.627,5.058,5.058,0,0,1-1.789-.5c-1.162-.511-.651-.511-.569-1.011s-1.614-2.753-1.614-2.753a34.72,34.72,0,0,0-2.311-2.624c-1.034-1-.778-.5-2.183-.882s-.651.127-2.834,0c-1.127-.059-1.533.209-1.766.568,0,0-4.076-2.253-4.46-2.566s-.255-.628-.255-1.5a4.246,4.246,0,0,0-.964-3.263c-1.092-1.313-1.6-5.378-1.475-7s.441-1.824.511-2.822.384-2.624.453-3.38,2.5-1.684,2.5-1.684a18.247,18.247,0,0,0,3.275-1.7,20.745,20.745,0,0,1,2.439-1.441c.651-.441,1.358-1.812,2.636-2.032s1.545-.278,2.567-.406a6.717,6.717,0,0,0,2-.5,14.321,14.321,0,0,1,1.789-.569,8.282,8.282,0,0,1,2.381.384,6.372,6.372,0,0,1,1.673.813,10.685,10.685,0,0,0,2.311.278,5.711,5.711,0,0,0-.151,1.58c.081.825,0,2.206.337,2.624s0,.709,1.08.837,1.278.243,1.789.243,1.162-.917,2.021-1.08a6.408,6.408,0,0,1,2.647-.337,10.229,10.229,0,0,1,2.23,1s1.452,1.336,1.37,2.009a3.155,3.155,0,0,1-.766,2c-.557.465-.476.837-1.37,1.174s-1.115.79-2.66.29-4.413-1.37-4.448-1.08a2.2,2.2,0,0,0-.255,1.545c.081,1.289.894,3.96.976,4.622s.255,1.011-.082,1.591-.686,1.045-.894,1.382a3.243,3.243,0,0,1-.778,1.034,8.024,8.024,0,0,1-2.358,1.382c-1.231.627-1.277,1.255-1.753,2s-1.452.8-1.2,1.963-.384,1.881.731,2.753-1.544.418,1.754,1.754,3.124,1.044,3.6.5a2.251,2.251,0,0,0,.766-1.417,27.763,27.763,0,0,0,.557-3.252s1.325-.964,2.091-.837,1.672-.337,1.928.755.651,3.925.906,4.507a6.089,6.089,0,0,0,1.37,1.463s5.819-.174,7.793,0,2.73-.546,4.147,0a15.2,15.2,0,0,1,2.265,1.045s1.207.871,1.289,1.336a4.361,4.361,0,0,0,.988,1.662c.337.336,1.881,1.544,1.881,1.544"
							transform="translate(-5.141 -3.059)"
						/>
						<path
							className="ae-item-1821"
							d="M874.069,526.485v7.143l-5.134-.314-1.928.558s-1.545.07-2.7.128a3.374,3.374,0,0,1-2.381-.882c-.325-.3-6.306,0-6.306,0s-5.064-.5-5.528-.14-.941-.476-1.591-.987a2.107,2.107,0,0,1-.639-1.5,5.581,5.581,0,0,0-2.254-1.626c-1.23-.372-.7,1.754-.7,1.754a3.783,3.783,0,0,1-1.289,0,2.248,2.248,0,0,1-1.672-1.382c-.384-.872,1.417-1.87,1.417-1.87a7.658,7.658,0,0,0-.128-2.253.864.864,0,0,0-1.289-.627,5.058,5.058,0,0,1-1.789-.5c-1.162-.511-.651-.511-.569-1.011s-1.614-2.753-1.614-2.753a34.72,34.72,0,0,0-2.311-2.624c-1.034-1-.778-.5-2.183-.882s-.651.127-2.834,0c-1.127-.059-1.533.209-1.766.568,0,0-4.076-2.253-4.46-2.566s-.255-.628-.255-1.5a4.246,4.246,0,0,0-.964-3.263c-1.092-1.313-1.6-5.378-1.475-7s.441-1.824.511-2.822.384-2.624.453-3.38,2.5-1.684,2.5-1.684a18.247,18.247,0,0,0,3.275-1.7,20.745,20.745,0,0,1,2.439-1.441c.651-.441,1.358-1.812,2.636-2.032s1.545-.278,2.567-.406a6.717,6.717,0,0,0,2-.5,14.321,14.321,0,0,1,1.789-.569,8.282,8.282,0,0,1,2.381.384,6.372,6.372,0,0,1,1.673.813,10.685,10.685,0,0,0,2.311.278,5.711,5.711,0,0,0-.151,1.58c.081.825,0,2.206.337,2.624s0,.709,1.08.837,1.278.243,1.789.243,1.162-.917,2.021-1.08a6.408,6.408,0,0,1,2.647-.337,10.229,10.229,0,0,1,2.23,1s1.452,1.336,1.37,2.009a3.155,3.155,0,0,1-.766,2c-.557.465-.476.837-1.37,1.174s-1.115.79-2.66.29-4.413-1.37-4.448-1.08a2.2,2.2,0,0,0-.255,1.545c.081,1.289.894,3.96.976,4.622s.255,1.011-.082,1.591-.686,1.045-.894,1.382a3.243,3.243,0,0,1-.778,1.034,8.024,8.024,0,0,1-2.358,1.382c-1.231.627-1.277,1.255-1.753,2s-1.452.8-1.2,1.963-.384,1.881.731,2.753-1.544.418,1.754,1.754,3.124,1.044,3.6.5a2.251,2.251,0,0,0,.766-1.417,27.763,27.763,0,0,0,.557-3.252s1.325-.964,2.091-.837,1.672-.337,1.928.755.651,3.925.906,4.507a6.089,6.089,0,0,0,1.37,1.463s5.819-.174,7.793,0,2.73-.546,4.147,0a15.2,15.2,0,0,1,2.265,1.045s1.207.871,1.289,1.336a4.361,4.361,0,0,0,.988,1.662C872.525,525.277,874.069,526.485,874.069,526.485Z"
							transform="translate(-5.141 -3.059)"
						/>
						<path
							className="ag-item-1821"
							d="M846.419,489.8a3.2,3.2,0,0,1,.614-1.452,18.764,18.764,0,0,1,2.23-1.568s1.545-.662,2.311-.917a9.906,9.906,0,0,1,2.95-.58,8.655,8.655,0,0,1,2.614.662c.348.092,1.975.719,1.975.719s1.115-.046,1.626-.127a1.568,1.568,0,0,0,1.242-.8,7.847,7.847,0,0,0-.637-2.706,21.369,21.369,0,0,1-.267-4.053s-.083-2.334-.083-2.787,1.162-1.626,1.162-1.626.719-.72,1.15-.755a9.275,9.275,0,0,1,2.533,1.208c.637.372,1.358,2.206,1.358,2.206l1.975,1.011a3.305,3.305,0,0,0,1.579-.418,7.1,7.1,0,0,1,2.486-.836,9.2,9.2,0,0,1,1.975,1,1.184,1.184,0,0,1,.335,1.045,13.922,13.922,0,0,1-.94,1.382c-.557.709.86,1.452.86,1.452l1.672.882s.338,1.417.557,2.288,1.1,3.136,1.1,3.136.778.418,4.239,0,1.162-.755,1.544-1.173a5.565,5.565,0,0,1,1.371-1.371,2.26,2.26,0,0,1,1.881-.127,15.235,15.235,0,0,0,2.184-1.336,17.293,17.293,0,0,0,1.242-2.254l.348-2.927a16.114,16.114,0,0,1,1.37-1.162c.337-.209,1.627,0,2.474-.255s1.336-1.336,1.755-2a5.774,5.774,0,0,1,1.845-1.417,26.357,26.357,0,0,1,2.741-.209,34.5,34.5,0,0,1,3.6.035,3.818,3.818,0,0,1,2.521,1.045,16.613,16.613,0,0,0,2.264,1.126,19.694,19.694,0,0,0,2.915-.5s1.115-1.336,1.2-1.545.73-1.9.73-1.9h2.928"
							transform="translate(-5.295 -2.958)"
						/>
						<line
							className="ag-item-1821"
							x1={1.023}
							transform="translate(953.702 382.786)"
						/>
						<path
							className="ag-item-1821"
							d="M933.678,391.278s.012.035.035.116c.012,0,.012,0,.012.012a.071.071,0,0,0,.011.046"
							transform="translate(-5.841 -2.452)"
						/>
						<path
							className="ag-item-1821"
							d="M959.706,386.279l1.707-5.295a41.121,41.121,0,0,1,0-4.681c.174-.917-.337-2.172,0-3.09s.174-2.079,1.023-2.753.685-.917,2.148-2.253,2.055-2.091,2.137-2.834.255-2.172.255-2.172l.686-9.268s-.592-1.5-1.278-3.09a28.278,28.278,0,0,0-2.183-3.751V344.5l.976-3.67,1.207-2.915a13.683,13.683,0,0,1,2.138-.837,7.933,7.933,0,0,1,2.114,0"
							transform="translate(-6.004 -2.112)"
						/>
						<path
							className="ag-item-1821"
							d="M978.14,358.4l2.483-1.419a17.641,17.641,0,0,1,4.624,1.419c1.284.835,2.4,1.92,3.424,1.836a6.1,6.1,0,0,0,3.168-1.836,14,14,0,0,0,1.712-2.838c.086-.249-.085-.5.172-2.336s-.428-2.838.428-4.007.427-1.836,1.712-2,1.97.334,2.74-.166a2.132,2.132,0,0,0,.685-2.671c-.514-.918,3.169-.167-1.369-2.087s-5.223-3.172-5.223-3.172l-1.2-2.921-.172-4.424.343-2.42s3.767-4.174,3.767-4.424-.086-2.754-.171-4.089a18.086,18.086,0,0,0-.771-3.422l-2.911-.668a1.814,1.814,0,0,0-.686,1.586,4.2,4.2,0,0,1,.085,2.5,12.171,12.171,0,0,0-.6,1.836s-1.712,1.335-2.141,1.084-1.369-.167-1.8-1.418-1.113-2.337-.771-3.422.857-2.087,1.114-2.838a5.272,5.272,0,0,0,.427-1.335c0-.334-.685-.751-1.284-1s-1.8-.835-1.8-.835l-1.284-2.17s-.085-3.172.343-4.006a29.427,29.427,0,0,1,1.627-2.5,12.535,12.535,0,0,0,2.569-2.671l1.455-1.919.335-1.586,1.892-1.336-.343-10.433s-.857,0-1.2-2.17-1.044-3.338-.351-4.34a7.353,7.353,0,0,0,.95-2.5l4.452-.751"
							transform="translate(-6.119 -1.734)"
						/>
						<path
							className="ad-item-1821"
							d="M980.956,155.41l-1.606,3.86a27.534,27.534,0,0,0-2.632,3.005,15.857,15.857,0,0,0-.065,2.692c0,1.189.8,3.067-.016,3.818a7.912,7.912,0,0,0-1.461,2.442s1.059,2.629,1.461,3.442.144-.625,1.815,2,1.8,2.942,1.733,3.13-1.6-.063-2.119.438-1.669,1.252-1.285,1.941a4.35,4.35,0,0,0,1.285,1.251,3.341,3.341,0,0,1,2.183-.125,3.278,3.278,0,0,1,1.478,1l-1.22,2.191-1.413,3.068a3.493,3.493,0,0,0,.065,1.376,46.694,46.694,0,0,1,.321,4.7,6.814,6.814,0,0,0-1.541,1c-.386.438-1.862,2.691-1.862,2.691a4.819,4.819,0,0,1-2.055,2.066c-1.413.689-2.826.689-4.175,1.44s-1.349,1.377-2.569,1.69a9.523,9.523,0,0,1-2.89.25c-1.028,0-3.339,1.5-3.339,1.5s-2.5.814-2.633,2.379.257,2.066-.706,3.381-2.441,2.754-3.147,3.755a30.115,30.115,0,0,0-1.734,3.13l-.449,4.319a17.982,17.982,0,0,0,1.091,3.694c.45.563,1.991,1.628,2.505,2.754s3.788,2.567,4.11,2.88a27.586,27.586,0,0,1,2.183,2.817c.321.563,1.219,2.5,1.219,2.5l1.67,2a10.884,10.884,0,0,0,.514,3.569,16,16,0,0,0,1.669,2.879c.514.939,1.477,1.753,1.477,2.442s.771,1.377.193,1.941a12.464,12.464,0,0,1-1.284,1.064s-1.092-1.315-2.183-1.064a23.03,23.03,0,0,0-2.7.939,12.966,12.966,0,0,1-3.339.313l-2.954-1.252H954.37s-4.046,3.755-4.3,4.068a12.684,12.684,0,0,0-.835,1.69l2.055,1.816,3.211,1.878a6.808,6.808,0,0,1,1.927,2.065c.771,1.315,1.156,1.315,1.734,2.5s1.091,1.44,1.22,2.191a6.97,6.97,0,0,1,.064,2.628c-.193,1.127-.963,1.315-.193,2.191s1.092,1.627,2.184,1.878,1.669-.25,2.183.689,1.028,2,1.028,2,.449,1.376.835,2.315a6.964,6.964,0,0,0,1.22,1.816s.835.939.835,1.565a7.154,7.154,0,0,1-.771,2.066l-2.5,3.317"
							transform="translate(-5.938 -0.976)"
						/>
						<path
							className="ae-item-1821"
							d="M980.956,155.41l-1.606,3.86a27.534,27.534,0,0,0-2.632,3.005,15.857,15.857,0,0,0-.065,2.692c0,1.189.8,3.067-.016,3.818a7.912,7.912,0,0,0-1.461,2.442s1.059,2.629,1.461,3.442.144-.625,1.815,2,1.8,2.942,1.733,3.13-1.6-.063-2.119.438-1.669,1.252-1.285,1.941a4.35,4.35,0,0,0,1.285,1.251,3.341,3.341,0,0,1,2.183-.125,3.278,3.278,0,0,1,1.478,1l-1.22,2.191-1.413,3.068a3.493,3.493,0,0,0,.065,1.376,46.694,46.694,0,0,1,.321,4.7,6.814,6.814,0,0,0-1.541,1c-.386.438-1.862,2.691-1.862,2.691a4.819,4.819,0,0,1-2.055,2.066c-1.413.689-2.826.689-4.175,1.44s-1.349,1.377-2.569,1.69a9.523,9.523,0,0,1-2.89.25c-1.028,0-3.339,1.5-3.339,1.5s-2.5.814-2.633,2.379.257,2.066-.706,3.381-2.441,2.754-3.147,3.755a30.115,30.115,0,0,0-1.734,3.13l-.449,4.319a17.982,17.982,0,0,0,1.091,3.694c.45.563,1.991,1.628,2.505,2.754s3.788,2.567,4.11,2.88a27.586,27.586,0,0,1,2.183,2.817c.321.563,1.219,2.5,1.219,2.5l1.67,2a10.884,10.884,0,0,0,.514,3.569,16,16,0,0,0,1.669,2.879c.514.939,1.477,1.753,1.477,2.442s.771,1.377.193,1.941a12.464,12.464,0,0,1-1.284,1.064s-1.092-1.315-2.183-1.064a23.03,23.03,0,0,0-2.7.939,12.966,12.966,0,0,1-3.339.313l-2.954-1.252H954.37s-4.046,3.755-4.3,4.068a12.684,12.684,0,0,0-.835,1.69l2.055,1.816,3.211,1.878a6.808,6.808,0,0,1,1.927,2.065c.771,1.315,1.156,1.315,1.734,2.5s1.091,1.44,1.22,2.191a6.97,6.97,0,0,1,.064,2.628c-.193,1.127-.963,1.315-.193,2.191s1.092,1.627,2.184,1.878,1.669-.25,2.183.689,1.028,2,1.028,2,.449,1.376.835,2.315a6.964,6.964,0,0,0,1.22,1.816s.835.939.835,1.565a7.154,7.154,0,0,1-.771,2.066l-2.5,3.317"
							transform="translate(-5.938 -0.976)"
						/>
						<path
							className="ag-item-1821"
							d="M980.311,179.579l4.437-.825a19.779,19.779,0,0,1,3.937-1.091c1.289-.081.94,0,3.507,0a31.879,31.879,0,0,1,4.112,0c1.034.174,1.289-.743,2.23,0a3.034,3.034,0,0,1,1.2,1.916c.174.592.766.836.174,1.754a12.931,12.931,0,0,0-1.37,2.346c-.349.825-.512,1.161-.349,1.661s1.115,1.173,1.115,1.173l.86-.836s.686-1,1.2-1.08.429-.917,1.37.243,1.8,1.835,1.975,2.672-.523,1.753.592,2.009,1.626-.175,2.741.162,1.452-.255,1.8.837.766,1.916,0,3.17-1.023,2.091-1.8,2.591-2.648,1.834-2.648,1.834l-1.034,1.5.767,2.428s.266,2.079,2.741,1.417.952-2.172,3.856-1.592,3.856,1.719,3.856,1.719,1.115,1.452,1.882,1.707,1.452.662,1.975.163c.5-.488,4.4-.662,4.646-.674"
							transform="translate(-6.133 -1.114)"
						/>
					</g>
				</g>
			</g>
			<g transform="translate(0 25.247)">
				<g className="ah-item-1821">
					<path
						className="ai-item-1821"
						d="M1931.251,1052.676H1229.636a302.6,302.6,0,0,0-279.313,186.082L735.314,1754.352"
						transform="translate(-3844.131 -455.817)"
					/>
					<path
						className="ai-item-1821"
						d="M1930.082,1052.962h847.256A302.607,302.607,0,0,0,3056.652,866.88l215.009-515.595"
						transform="translate(-3842.961 -456.102)"
					/>
					<path
						className="ai-item-1821"
						d="M5549.685,1347.079l399.5-.487A302.606,302.606,0,0,0,6228.5,1160.51l206.422-495"
						transform="translate(-3630.357 -455.975)"
					/>
					<path
						className="ai-item-1821"
						d="M7770.9,482.59H6923.642a302.61,302.61,0,0,0-279.315,186.082l-205.112,491.913"
						transform="translate(-3838.55 -456.049)"
					/>
					<path
						className="aj-item-1821"
						d="M797.214,1308.69h701.614a302.606,302.606,0,0,0,279.314-186.082l290.616-697.024"
						transform="translate(-3844.071 -456.072)"
					/>
					<path
						className="aj-item-1821"
						d="M1001.532,1308.334h-505.8a302.606,302.606,0,0,0-279.314,186.082L1.4,2010.01"
						transform="translate(-3844.849 -455.713)"
					/>
					<path
						className="aj-item-1821"
						d="M7834.65,1288.515h-505.8A302.606,302.606,0,0,0,7049.533,1474.6l-215.008,515.594"
						transform="translate(-3838.162 -455.721)"
					/>
					<path
						className="aj-item-1821"
						d="M7836.693,702.265h-505.8a302.607,302.607,0,0,1-279.314-186.082L6836.566.589"
						transform="translate(-3838.16 -456.245)"
					/>
				</g>
			</g>
			<text
				className="ak-item-1821"
				transform="translate(201.322 321.829)">
				<tspan x={0} y={66}>
					{'COBERTURA '}
				</tspan>
			</text>
			<g
				className="al-item-1821"
				transform="translate(136 830.062) rotate(90)">
				<path
					className="am-item-1821"
					d="M150.547,162.491l35.693,48.585a1.353,1.353,0,0,1,.253.781l.2,38.035a1.333,1.333,0,0,1-1.323,1.333l-5.308.025a1.325,1.325,0,0,1-1.333-1.318l-.071-13.49-19.187.1.071,13.495a1.326,1.326,0,0,1-1.323,1.333l-5.308.025a1.318,1.318,0,0,1-1.328-1.318l-.182-34.943a1.322,1.322,0,0,1,1.318-1.333l5.308-.03a1.333,1.333,0,0,1,1.333,1.323l.071,13.49,19.187-.1-.076-14.432-32.408-44.124-27.572.142L86.618,214.533l.071,14.427,19.193-.1-.071-13.49a1.322,1.322,0,0,1,1.318-1.333l5.308-.03a1.326,1.326,0,0,1,1.333,1.323l.182,34.943a1.328,1.328,0,0,1-1.318,1.333l-5.308.025a1.325,1.325,0,0,1-1.333-1.318l-.071-13.495-19.187.1.071,13.495a1.333,1.333,0,0,1-1.323,1.333l-5.308.025a1.328,1.328,0,0,1-1.333-1.318l-.2-38.035a1.326,1.326,0,0,1,.248-.781l35.181-48.96a1.34,1.34,0,0,1,1.07-.553l34.33-.177a1.319,1.319,0,0,1,1.075.542M95.271,122.767,37.84,104.442a1.285,1.285,0,0,0-.816.005L.91,116.385a1.328,1.328,0,0,0-.842,1.678L1.731,123.1a1.326,1.326,0,0,0,1.678.842l12.805-4.233,6.027,18.219-12.81,4.233a1.328,1.328,0,0,0-.842,1.678l1.663,5.039a1.332,1.332,0,0,0,1.678.841l33.179-10.97a1.324,1.324,0,0,0,.842-1.678l-1.663-5.039a1.332,1.332,0,0,0-1.678-.842L29.8,135.431l-6.022-18.219,13.7-4.532,52.158,16.648,4.26,12.886L98.287,155.5,66.34,199.963l-13.7,4.527-6.022-18.219,12.81-4.233a1.328,1.328,0,0,0,.842-1.678L58.6,175.321a1.325,1.325,0,0,0-1.673-.842L23.748,185.45a1.328,1.328,0,0,0-.842,1.678l1.663,5.039a1.328,1.328,0,0,0,1.678.841l12.81-4.238,6.027,18.219-12.81,4.238a1.327,1.327,0,0,0-.847,1.678l1.668,5.039a1.328,1.328,0,0,0,1.678.841l36.109-11.943a1.328,1.328,0,0,0,.664-.487L106.723,157.4a1.314,1.314,0,0,0,.182-1.191L96.128,123.619a1.329,1.329,0,0,0-.857-.852m70.819-8.973,57.238-18.929a1.315,1.315,0,0,0,.659-.487l22.2-30.888a1.329,1.329,0,0,0-.3-1.85l-4.309-3.1a1.324,1.324,0,0,0-1.85.3L231.844,69.8,216.261,58.6l7.873-10.955a1.323,1.323,0,0,0-.3-1.85l-4.309-3.1a1.319,1.319,0,0,0-1.85.3L197.281,71.379a1.329,1.329,0,0,0,.3,1.855l4.314,3.1a1.329,1.329,0,0,0,1.85-.3l7.873-10.955,15.583,11.2-8.42,11.715L166.8,105.177l-22.391-16.09-.284-54.749,8.42-11.715,15.583,11.2-7.873,10.955a1.324,1.324,0,0,0,.3,1.85l4.309,3.1a1.324,1.324,0,0,0,1.85-.3l20.394-28.378a1.324,1.324,0,0,0-.3-1.85l-4.309-3.1a1.329,1.329,0,0,0-1.85.3l-7.878,10.955L157.193,16.159,165.066,5.2a1.329,1.329,0,0,0-.3-1.85l-4.309-3.1a1.319,1.319,0,0,0-1.85.3L136.4,31.443a1.348,1.348,0,0,0-.248.781l.314,60.285a1.319,1.319,0,0,0,.553,1.07L164.9,113.612a1.33,1.33,0,0,0,1.191.182m96.378,7.949,1.612-5.059a1.328,1.328,0,0,0-.862-1.668l-36.231-11.563a1.337,1.337,0,0,0-.821.005l-57.238,18.929a1.311,1.311,0,0,0-.847.857l-10.438,32.7a1.32,1.32,0,0,0,.193,1.186l35.688,48.59a1.353,1.353,0,0,0,.669.477l36.231,11.568a1.326,1.326,0,0,0,1.668-.862l1.612-5.054a1.317,1.317,0,0,0-.857-1.668l-12.856-4.106,5.835-18.28,12.856,4.1a1.329,1.329,0,0,0,1.668-.857l1.612-5.059a1.328,1.328,0,0,0-.862-1.668l-33.29-10.625a1.321,1.321,0,0,0-1.663.862l-1.617,5.059a1.321,1.321,0,0,0,.862,1.663l12.851,4.106-5.83,18.28-13.748-4.385-32.413-44.129,8.385-26.264,51.981-17.19,13.743,4.39-5.83,18.28-12.856-4.106a1.334,1.334,0,0,0-1.668.862l-1.612,5.059a1.323,1.323,0,0,0,.862,1.663l33.285,10.625a1.327,1.327,0,0,0,1.668-.857l1.617-5.059a1.332,1.332,0,0,0-.862-1.668l-12.856-4.1,5.835-18.28,12.856,4.106a1.334,1.334,0,0,0,1.668-.862M99.311,113.906l27.638-20.358a1.335,1.335,0,0,0,.542-1.08l-.4-60.285a1.308,1.308,0,0,0-.259-.776L104.274.784A1.323,1.323,0,0,0,102.419.5L98.145,3.648A1.328,1.328,0,0,0,97.866,5.5l8,10.864L90.42,27.748l-8-10.864a1.326,1.326,0,0,0-1.855-.279l-4.273,3.148a1.326,1.326,0,0,0-.279,1.855L96.731,49.743a1.328,1.328,0,0,0,1.855.279l4.273-3.148a1.328,1.328,0,0,0,.284-1.855l-8-10.864,15.451-11.381,8.557,11.619.36,54.749-22.2,16.349L45.13,88.919,36.573,77.3,52.024,65.92l8,10.864a1.328,1.328,0,0,0,1.855.279l4.273-3.148a1.332,1.332,0,0,0,.284-1.855L45.708,43.929a1.324,1.324,0,0,0-1.855-.284l-4.273,3.148a1.327,1.327,0,0,0-.279,1.855l8,10.864L31.853,70.893l-8-10.864a1.328,1.328,0,0,0-1.855-.284L17.72,62.893a1.328,1.328,0,0,0-.279,1.855L40,95.373a1.3,1.3,0,0,0,.664.477L98.12,114.1a1.332,1.332,0,0,0,1.191-.2"
					transform="translate(97.42 -56.426) rotate(-15)"
				/>
			</g>

			<g className="hola">
				<BluePoint onHover={() => {}} />
			</g>
			{selectedImage !== 16 ? (
				<g transform="translate(805 179)">
					<RedPoint onHover={() => setSelectedImage(16)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(724.581 124.676)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 75.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="da-item-1821"
							transform="matrix(1, 0, 0, 1, -724.58, -124.68)">
							<rect
								className="u-item-1821"
								width={209}
								height={70}
								rx={15}
								transform="translate(724.58 124.68)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(104 30)">
							<tspan x={-71.928} y={0}>
								{'San José de'}
							</tspan>
							<tspan x={-65.712} y={26}>
								{'Costa Rica'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 15 ? (
				<g transform="translate(1054 221)">
					<RedPoint onHover={() => setSelectedImage(15)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(951.535 194.676)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(111.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="db-item-1821"
							transform="matrix(1, 0, 0, 1, -951.53, -194.68)">
							<rect
								className="u-item-1821"
								width={255}
								height={43}
								rx={15}
								transform="translate(951.53 194.68)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(15 30)">
							<tspan x={0} y={0}>
								{'Ciudad de Panamá'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 14 ? (
				<g transform="translate(1345 100)">
					<RedPoint onHover={() => setSelectedImage(14)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1263.535 75.676)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="dc-item-1821"
							transform="matrix(1, 0, 0, 1, -1263.53, -75.68)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1263.53 75.68)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(32 30)">
							<tspan x={0} y={0}>
								{'Barranquilla'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 13 ? (
				<g transform="translate(1311 132)">
					<BluePoint onHover={() => setSelectedImage(13)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1231.535 108.697)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="cy-item-1821"
							transform="matrix(1, 0, 0, 1, -1231.53, -108.7)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1231.53 108.7)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(39 30)">
							<tspan x={0} y={0}>
								{'Cartagena'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 12 ? (
				<g transform="translate(1283 216)">
					<BluePoint onHover={() => setSelectedImage(12)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1202.488 188.711)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="cx-item-1821"
							transform="matrix(1, 0, 0, 1, -1202.49, -188.71)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1202.49 188.71)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(50.5 30)">
							<tspan x={0} y={0}>
								{'Montería'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 11 ? (
				<g transform="translate(1433 147)">
					<BluePoint onHover={() => setSelectedImage(11)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1351.535 120.69)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="cz-item-1821"
							transform="matrix(1, 0, 0, 1, -1351.53, -120.69)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1351.53 120.69)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(40.5 30)">
							<tspan x={0} y={0}>
								{'Valledupar'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 10 ? (
				<g transform="translate(1480 275)">
					<BluePoint onHover={() => setSelectedImage(10)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1402.535 245.725)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="de-item-1821"
							transform="matrix(1, 0, 0, 1, -1402.53, -245.73)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1402.53 245.73)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(60 30)">
							<tspan x={0} y={0}>
								{'Cúcuta'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 9 ? (
				<g transform="translate(1450 320)">
					<BluePoint onHover={() => setSelectedImage(9)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1370.535 296.732)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="dd-item-1821"
							transform="matrix(1, 0, 0, 1, -1370.53, -296.73)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1370.53 296.73)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(21 30)">
							<tspan x={0} y={0}>
								{'Bucaramanga'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 8 ? (
				<g transform="translate(1296 407)">
					<RedPoint onHover={() => setSelectedImage(8)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1216.581 368.665)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="df-item-1821"
							transform="matrix(1, 0, 0, 1, -1216.58, -368.66)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1216.58 368.66)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(55 30)">
							<tspan x={0} y={0}>
								{'Medellín'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 7 ? (
				<g transform="translate(1386 469)">
					<RedPoint onHover={() => setSelectedImage(7)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1306.581 440.697)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="cw-item-1821"
							transform="matrix(1, 0, 0, 1, -1306.58, -440.7)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1306.58 440.7)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(61 30)">
							<tspan x={0} y={0}>
								{'Bogotá'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 6 ? (
				<g transform="translate(1294 453)">
					<RedPoint onHover={() => setSelectedImage(6)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1213.581 430.697)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="cv-item-1821"
							transform="matrix(1, 0, 0, 1, -1213.58, -430.7)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1213.58 430.7)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(63 30)">
							<tspan x={0} y={0}>
								{'Pereira'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 5 ? (
				<g transform="translate(1325 482)">
					<BluePoint onHover={() => setSelectedImage(5)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1244.535 458.679)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="ct-item-1821"
							transform="matrix(1, 0, 0, 1, -1244.53, -458.68)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1244.53 458.68)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(63 30)">
							<tspan x={0} y={0}>
								{'Ibagué'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 4 ? (
				<g transform="translate(1245 536)">
					<RedPoint onHover={() => setSelectedImage(4)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1164.535 511.686)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="cu-item-1821"
							transform="matrix(1, 0, 0, 1, -1164.53, -511.69)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1164.53 511.69)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(81 30)">
							<tspan x={0} y={0}>
								{'Cali'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 3 ? (
				<g transform="translate(1417 490)">
					<BluePoint onHover={() => setSelectedImage(3)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1337.011 464.679)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="cs-item-1821"
							transform="matrix(1, 0, 0, 1, -1337.01, -464.68)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1337.01 464.68)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(28.5 30)">
							<tspan x={0} y={0}>
								{'Villavicencio'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 2 ? (
				<g transform="translate(1323, 570)">
					<BluePoint onHover={() => setSelectedImage(2)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1241.105 548.693)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="cr-item-1821"
							transform="matrix(1, 0, 0, 1, -1241.1, -548.69)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1241.1 548.69)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(81 30)">
							<tspan x={0} y={0}>
								{'Neiva'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			{selectedImage !== 1 ? (
				<g transform="translate(1203 660)">
					<BluePoint onHover={() => setSelectedImage(1)} />
				</g>
			) : (
				<React.Fragment>
					<g
						transform="translate(1124.535 637.01)"
						onClick={() => setSelectedImage(null)}>
						<g
							className="aq-item-1821"
							transform="translate(88.2 48.808)">
							<g transform="translate(6.919 43.912)">
								<g className="ar-item-1821">
									<use
										transform="translate(-0.07 -0.002)"
										xlinkHref="#rc"
									/>
								</g>
							</g>
							<g className="aq-item-1821">
								<path
									className="as-item-1821"
									d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(0 0)"
								/>
								<g
									className="at-item-1821"
									transform="translate(2.605 2.104)">
									<g className="au-item-1821">
										<g transform="translate(0 0)">
											<g className="av-item-1821">
												<rect
													className="aw-item-1821"
													width={27.55}
													height={14.249}
													transform="translate(-0.08 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									className="ax-item-1821"
									d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-44.108 -44.193)"
								/>
								<g
									className="ay-item-1821"
									transform="translate(2.903 25.605)">
									<g className="az-item-1821">
										<g transform="translate(0)">
											<g className="ba-item-1821">
												<rect
													className="d-item-1821"
													width={27.296}
													height={19.699}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(6.728 29.43)">
									<g className="bb-item-1821">
										<g transform="translate(0 0)">
											<g className="bc-item-1821">
												<rect
													className="bd-item-1821"
													width={19.18}
													height={12.922}
													transform="translate(-0.018 -0.017)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(19.816 4.592)">
									<g className="be-item-1821">
										<g transform="translate(0 0)">
											<g className="bf-item-1821">
												<rect
													className="e-item-1821"
													width={3.59}
													height={3.432}
													transform="translate(-1.003 2.416) rotate(-67.457)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="ay-item-1821"
									transform="translate(5.128 5.564)">
									<g className="bg-item-1821">
										<g transform="translate(0)">
											<g className="bh-item-1821">
												<rect
													className="e-item-1821"
													width={8.409}
													height={8.369}
													transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(19.816 25.39)">
									<g className="bi-item-1821">
										<path
											className="ac-item-1821"
											d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
											transform="translate(-266.166 -341.04)"
										/>
									</g>
								</g>
								<g
									className="bj-item-1821"
									transform="translate(5.128 20.915)">
									<g className="bk-item-1821">
										<path
											className="ac-item-1821"
											d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
											transform="translate(-68.879 -280.936)"
										/>
									</g>
								</g>
								<g
									className="bl-item-1821"
									transform="translate(5.006)">
									<g className="bm-item-1821">
										<g transform="translate(0 0)">
											<g className="bn-item-1821">
												<rect
													className="bo-item-1821"
													width={22.583}
													height={4.548}
													transform="translate(0 0)"
												/>
											</g>
										</g>
									</g>
								</g>
								<g
									className="bp-item-1821"
									transform="translate(3.839 18.557)">
									<g className="bq-item-1821">
										<path
											className="u-item-1821"
											d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
											transform="translate(-51.561 -249.259)"
										/>
									</g>
								</g>
								<g
									className="at-item-1821"
									transform="translate(3.588 3.355)">
									<g className="br-item-1821">
										<path
											className="u-item-1821"
											d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
											transform="translate(-48.195 -45.06)"
										/>
									</g>
								</g>
								<path
									className="u-item-1821"
									d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
									transform="translate(-79.572 -79.658)"
								/>
								<path
									className="bs-item-1821"
									d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
									transform="translate(-114.049 -103.851)"
								/>
								<path
									className="bs-item-1821"
									d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
									transform="translate(-206.389 -103.664)"
								/>
								<path
									className="bs-item-1821"
									d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
									transform="translate(-223.017 -183.909)"
								/>
								<path
									className="bs-item-1821"
									d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
									transform="translate(-161.752 -229.359)"
								/>
								<path
									className="bs-item-1821"
									d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
									transform="translate(-100.713 -184.675)"
								/>
							</g>
						</g>
						<g
							className="cq-item-1821"
							transform="matrix(1, 0, 0, 1, -1124.53, -637.01)">
							<rect
								className="u-item-1821"
								width={209}
								height={43}
								rx={15}
								transform="translate(1124.53 637.01)"
							/>
						</g>
						<text
							className="bt-item-1821"
							transform="translate(71 30)">
							<tspan x={0} y={0}>
								{'Pasto'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			)}
			<text className="bu-item-1821" transform="translate(289 573.182)">
				<tspan x={0} y={23}>
					{'Bogotá'}
				</tspan>
				<tspan x={0} y={61}>
					{'Medellín '}
				</tspan>
				<tspan x={0} y={99}>
					{'Cali '}
				</tspan>
				<tspan x={0} y={137}>
					{'Pereira '}
				</tspan>
				<tspan x={0} y={175}>
					{'Barranquilla '}
				</tspan>
			</text>
			<text className="bv-item-1821" transform="translate(249 531.62)">
				<tspan x={0} y={23}>
					{'Colombia'}
				</tspan>
			</text>
			<text className="bv-item-1821" transform="translate(489.5 531.62)">
				<tspan x={0} y={23}>
					{'Panamá'}
				</tspan>
			</text>
			<text
				className="bv-item-1821"
				transform="translate(757.693 531.62)">
				<tspan x={0} y={23}>
					{'Costa Rica'}
				</tspan>
			</text>
			<text className="bu-item-1821" transform="translate(533.5 573.182)">
				<tspan x={0} y={23}>
					{'Ciudad de '}
				</tspan>
				<tspan x={0} y={49}>
					{'Panamá'}
				</tspan>
			</text>
			<text className="bu-item-1821" transform="translate(810.5 573.182)">
				<tspan x={0} y={23}>
					{'San José de '}
				</tspan>
				<tspan x={0} y={49}>
					{'Costa Rica'}
				</tspan>
			</text>
			<text className="bu-item-1821" transform="translate(533 869.182)">
				<tspan x={0} y={23}>
					{'Pasto '}
				</tspan>
				<tspan x={0} y={61}>
					{'Villavicencio'}
				</tspan>
				<tspan x={0} y={99}>
					{'Bucaramanga '}
				</tspan>
			</text>
			<text className="bu-item-1821" transform="translate(289 869.182)">
				<tspan x={0} y={23}>
					{'Cartagena '}
				</tspan>
				<tspan x={0} y={61}>
					{'Valledupar '}
				</tspan>
				<tspan x={0} y={99}>
					{'Montería '}
				</tspan>
			</text>
			<text className="bu-item-1821" transform="translate(818 869.182)">
				<tspan x={0} y={23}>
					{'Neiva '}
				</tspan>
				<tspan x={0} y={61}>
					{'Ibagué '}
				</tspan>
				<tspan x={0} y={99}>
					{'Cúcuta '}
				</tspan>
			</text>
			<text
				className="bw-item-1821"
				transform="translate(251.193 463.505)">
				<tspan x={0} y={30}>
					{'CEDIS en ciudades principales '}
				</tspan>
			</text>
			<text
				className="bw-item-1821"
				transform="translate(251.193 803.505)">
				<tspan x={0} y={30}>
					{'CEDIS en ciudades intermedias '}
				</tspan>
			</text>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(272 622.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(272 584.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(516.5 584.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(793.5 584.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(516 880.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(272 880.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(795 880.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(272 660.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(516 918.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(272 918.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(795 918.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(272 698.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(516 956.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(272 956.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(795 956.505)"
			/>
			<circle
				className="am-item-1821"
				cx={4}
				cy={4}
				r={4}
				transform="translate(272 736.505)"
			/>
			<g className="bx-item-1821" transform="translate(201.322 774.829)">
				<g transform="translate(8.675 55.053)">
					<g className="by-item-1821">
						<use
							transform="translate(-0.088 -0.003) scale(1.254 1.254)"
							xlinkHref="#rc"
						/>
					</g>
				</g>
				<g className="bx-item-1821">
					<path
						className="ac-item-1821"
						d="M40.85,19.6A20.434,20.434,0,1,0,1.61,28.4C6.094,40.542,18.554,55.059,20.244,56.692a.281.281,0,0,0,.386,0C22.479,55,36.915,39.174,40.2,25.65c.034-.128.064-.258.1-.388s.062-.259.09-.389a20.425,20.425,0,0,0,.424-2.881c0-.038.006-.075.008-.113.033-.477.056-.958.056-1.444,0-.3-.008-.574-.021-.839M20.436,32.85A12.411,12.411,0,1,1,32.847,20.439,12.411,12.411,0,0,1,20.436,32.85"
						transform="translate(0 0)"
					/>
					<g
						className="at-item-1821"
						transform="translate(3.265 2.637)">
						<g className="bz-item-1821">
							<g transform="translate(0 0)">
								<g className="ca-item-1821">
									<rect
										className="aw-item-1821"
										width={34.54}
										height={17.865}
										transform="translate(-0.1 0)"
									/>
								</g>
							</g>
						</g>
					</g>
					<path
						className="ac-item-1821"
						d="M63.644,47.748A15.988,15.988,0,1,0,79.631,63.736,15.988,15.988,0,0,0,63.644,47.748m0,28.4A12.411,12.411,0,1,1,76.054,63.736,12.411,12.411,0,0,1,63.644,76.147"
						transform="translate(-43.208 -43.291)"
					/>
					<g
						className="ay-item-1821"
						transform="translate(3.64 32.101)">
						<g className="cb-item-1821">
							<g transform="translate(0)">
								<g className="cc-item-1821">
									<rect
										className="cd-item-1821"
										width={34.221}
										height={24.697}
										transform="translate(0 0)"
									/>
								</g>
							</g>
						</g>
					</g>
					<g
						className="at-item-1821"
						transform="translate(8.434 36.897)">
						<g className="ce-item-1821">
							<g transform="translate(0 0)">
								<g className="cf-item-1821">
									<rect
										className="bd-item-1821"
										width={24.047}
										height={16.201}
										transform="translate(-0.022 -0.022)"
									/>
								</g>
							</g>
						</g>
					</g>
					<g
						className="ay-item-1821"
						transform="translate(24.843 5.757)">
						<g className="cg-item-1821">
							<g transform="translate(0 0)">
								<g className="ch-item-1821">
									<rect
										className="ci-item-1821"
										width={4.501}
										height={4.303}
										transform="translate(-1.257 3.029) rotate(-67.457)"
									/>
								</g>
							</g>
						</g>
					</g>
					<g
						className="ay-item-1821"
						transform="translate(6.429 6.976)">
						<g className="cj-item-1821">
							<g transform="translate(0)">
								<g className="ck-item-1821">
									<rect
										className="cl-item-1821"
										width={10.543}
										height={10.492}
										transform="matrix(0.651, -0.759, 0.759, 0.651, -3.8, 4.433)"
									/>
								</g>
							</g>
						</g>
					</g>
					<g
						className="at-item-1821"
						transform="translate(24.843 31.832)">
						<g className="cg-item-1821">
							<path
								className="ac-item-1821"
								d="M266.788,344.591a8.937,8.937,0,0,0,2.563-1.177c-1.3-1.639-1.87-2.374-1.87-2.374l-1.315.6Z"
								transform="translate(-266.166 -341.04)"
							/>
						</g>
					</g>
					<g
						className="bj-item-1821"
						transform="translate(6.429 26.222)">
						<g className="cj-item-1821">
							<path
								className="ac-item-1821"
								d="M71.61,280.936c1.135,1.933,2.605,4.2,4.5,5-.8,1.513-1.471,2.689-1.471,2.689a14.387,14.387,0,0,1-5.757-6.387c1.3-.588,2.731-1.3,2.731-1.3"
								transform="translate(-68.879 -280.936)"
							/>
						</g>
					</g>
					<g className="bl-item-1821" transform="translate(6.276)">
						<g className="cm-item-1821">
							<g transform="translate(0 0)">
								<g className="cn-item-1821">
									<rect
										className="bo-item-1821"
										width={28.313}
										height={5.702}
										transform="translate(0 0)"
									/>
								</g>
							</g>
						</g>
					</g>
					<g
						className="bp-item-1821"
						transform="translate(4.813 23.265)">
						<g className="co-item-1821">
							<path
								className="u-item-1821"
								d="M82.923,249.259a15.687,15.687,0,0,1-1.792,5.183,16.15,16.15,0,0,1-3.48,4.27,15.876,15.876,0,0,1-4.734,2.844,16.1,16.1,0,0,1-10.893.2,15.874,15.874,0,0,1-4.838-2.664,16.174,16.174,0,0,1-3.639-4.136,15.641,15.641,0,0,1-1.986-5.112A16.122,16.122,0,0,0,62.138,261.42a16.071,16.071,0,0,0,10.652-.2,16.174,16.174,0,0,0,10.133-11.963"
								transform="translate(-51.561 -249.259)"
							/>
						</g>
					</g>
					<g
						className="at-item-1821"
						transform="translate(4.498 4.206)">
						<g className="cp-item-1821">
							<path
								className="u-item-1821"
								d="M48.195,60.021a15.686,15.686,0,0,1,1.452-5.779,16,16,0,0,1,8.606-8.067,16.017,16.017,0,0,1,16.9,3.275,15.924,15.924,0,0,1,3.5,4.868A15.687,15.687,0,0,1,80.076,60.1l-.092-.74-.126-.734c-.049-.243-.1-.485-.155-.728s-.126-.479-.189-.719a15.8,15.8,0,0,0-1.082-2.758,16.058,16.058,0,0,0-8.516-7.777,15.976,15.976,0,0,0-11.49-.03,16,16,0,0,0-4.988,3.064,16.2,16.2,0,0,0-5.242,10.339"
								transform="translate(-48.195 -45.06)"
							/>
						</g>
					</g>
					<path
						className="u-item-1821"
						d="M98.384,110.887a12.411,12.411,0,1,1,12.411-12.411,12.411,12.411,0,0,1-12.411,12.411"
						transform="translate(-77.948 -78.032)"
					/>
					<path
						className="bs-item-1821"
						d="M129.651,121.1l2.163-1.594a.1.1,0,0,0,.042-.084l-.031-4.718a.1.1,0,0,0-.02-.061l-1.766-2.4a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l.626.85-1.209.891-.626-.85a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l1.622,2.2a.1.1,0,0,0,.145.022l.335-.246a.1.1,0,0,0,.022-.145l-.626-.85,1.209-.891.67.909.028,4.285-1.737,1.28-4.084-1.3-.67-.909,1.209-.891.626.85a.1.1,0,0,0,.145.022l.335-.246a.1.1,0,0,0,.022-.145l-1.622-2.2a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l.626.85-1.209.891-.626-.85a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l1.766,2.4a.1.1,0,0,0,.052.037l4.5,1.429a.1.1,0,0,0,.093-.015"
						transform="translate(-111.721 -101.732)"
					/>
					<path
						className="bs-item-1821"
						d="M225.333,120.909l4.48-1.481a.1.1,0,0,0,.052-.038l1.737-2.418a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-.616.858-1.22-.876.616-.858a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-1.6,2.221a.1.1,0,0,0,.024.145l.337.242a.1.1,0,0,0,.145-.024l.616-.857,1.22.877-.659.917-4.069,1.345-1.752-1.259-.022-4.285.659-.917,1.22.877-.616.857a.1.1,0,0,0,.024.145l.337.242a.1.1,0,0,0,.145-.024l1.6-2.221a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-.616.858-1.22-.876.616-.858a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-1.737,2.418a.1.1,0,0,0-.02.061l.024,4.718a.1.1,0,0,0,.043.084l2.182,1.568a.1.1,0,0,0,.093.014"
						transform="translate(-202.176 -101.548)"
					/>
					<path
						className="bs-item-1821"
						d="M249.166,200.138l.126-.4a.1.1,0,0,0-.067-.13l-2.836-.905a.1.1,0,0,0-.064,0l-4.48,1.482a.1.1,0,0,0-.066.067l-.817,2.56a.1.1,0,0,0,.015.093l2.793,3.8a.1.1,0,0,0,.052.037l2.836.905a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-1.006-.321.457-1.431,1.006.321a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-2.606-.832a.1.1,0,0,0-.13.067l-.126.4a.1.1,0,0,0,.067.13l1.006.321-.457,1.431-1.076-.343-2.537-3.454.656-2.056,4.069-1.345,1.076.343-.457,1.431-1.006-.321a.1.1,0,0,0-.13.067l-.126.4a.1.1,0,0,0,.067.131l2.606.832a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-1.006-.321.457-1.431,1.006.321a.1.1,0,0,0,.13-.067"
						transform="translate(-218.466 -180.155)"
					/>
					<path
						className="bs-item-1821"
						d="M180.391,247.85l2.793,3.8a.1.1,0,0,1,.02.061l.015,2.977a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.006-1.056-1.5.008.006,1.056a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.014-2.735a.1.1,0,0,1,.1-.1l.415,0a.1.1,0,0,1,.1.1l.006,1.056,1.5-.008-.006-1.129-2.537-3.454-2.158.011-2.5,3.48.006,1.129,1.5-.008-.006-1.056a.1.1,0,0,1,.1-.1l.415,0a.1.1,0,0,1,.1.1l.014,2.735a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.006-1.056-1.5.008.006,1.056a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.015-2.977a.1.1,0,0,1,.02-.061l2.754-3.832a.1.1,0,0,1,.084-.043l2.687-.014a.1.1,0,0,1,.084.042"
						transform="translate(-158.451 -224.678)"
					/>
					<path
						className="bs-item-1821"
						d="M116.271,200.97l-4.5-1.435a.1.1,0,0,0-.064,0l-2.827.935a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l1-.332.472,1.426-1,.332a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l2.6-.859a.1.1,0,0,0,.066-.131l-.13-.394a.1.1,0,0,0-.131-.066l-1,.332-.472-1.426,1.072-.355,4.082,1.3.677,2.049-2.5,3.48-1.072.354-.472-1.426,1-.332a.1.1,0,0,0,.066-.131l-.13-.394a.1.1,0,0,0-.131-.066l-2.6.859a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l1-.332.472,1.426-1,.332a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l2.826-.935a.1.1,0,0,0,.052-.038l2.754-3.832a.1.1,0,0,0,.014-.093l-.844-2.551a.1.1,0,0,0-.067-.066"
						transform="translate(-98.657 -180.906)"
					/>
				</g>
			</g>
			<g className="bx-item-1821" transform="translate(201.322 434.829)">
				<g transform="translate(8.675 55.053)">
					<g className="by-item-1821">
						<use
							transform="translate(-0.088 -0.003) scale(1.254 1.254)"
							xlinkHref="#rc"
						/>
					</g>
				</g>
				<g className="bx-item-1821">
					<path
						className="am-item-1821"
						d="M40.85,19.6A20.434,20.434,0,1,0,1.61,28.4C6.094,40.542,18.554,55.059,20.244,56.692a.281.281,0,0,0,.386,0C22.479,55,36.915,39.174,40.2,25.65c.034-.128.064-.258.1-.388s.062-.259.09-.389a20.425,20.425,0,0,0,.424-2.881c0-.038.006-.075.008-.113.033-.477.056-.958.056-1.444,0-.3-.008-.574-.021-.839M20.436,32.85A12.411,12.411,0,1,1,32.847,20.439,12.411,12.411,0,0,1,20.436,32.85"
						transform="translate(0 0)"
					/>
					<g
						className="at-item-1821"
						transform="translate(3.265 2.637)">
						<g className="bz-item-1821">
							<g transform="translate(0 0)">
								<g className="ca-item-1821">
									<rect
										className="aw-item-1821"
										width={34.54}
										height={17.865}
										transform="translate(-0.1 0)"
									/>
								</g>
							</g>
						</g>
					</g>
					<path
						className="am-item-1821"
						d="M63.644,47.748A15.988,15.988,0,1,0,79.631,63.736,15.988,15.988,0,0,0,63.644,47.748m0,28.4A12.411,12.411,0,1,1,76.054,63.736,12.411,12.411,0,0,1,63.644,76.147"
						transform="translate(-43.208 -43.291)"
					/>
					<g
						className="ay-item-1821"
						transform="translate(3.64 32.101)">
						<g className="cb-item-1821">
							<g transform="translate(0)">
								<g className="cc-item-1821">
									<rect
										className="cd-item-1821"
										width={34.221}
										height={24.697}
										transform="translate(0 0)"
									/>
								</g>
							</g>
						</g>
					</g>
					<g
						className="at-item-1821"
						transform="translate(8.434 36.897)">
						<g className="ce-item-1821">
							<g transform="translate(0 0)">
								<g className="cf-item-1821">
									<rect
										className="bd-item-1821"
										width={24.047}
										height={16.201}
										transform="translate(-0.022 -0.022)"
									/>
								</g>
							</g>
						</g>
					</g>
					<g
						className="ay-item-1821"
						transform="translate(24.843 5.757)">
						<g className="cg-item-1821">
							<g transform="translate(0 0)">
								<g className="ch-item-1821">
									<rect
										className="ci-item-1821"
										width={4.501}
										height={4.303}
										transform="translate(-1.257 3.029) rotate(-67.457)"
									/>
								</g>
							</g>
						</g>
					</g>
					<g
						className="ay-item-1821"
						transform="translate(6.429 6.976)">
						<g className="cj-item-1821">
							<g transform="translate(0)">
								<g className="ck-item-1821">
									<rect
										className="cl-item-1821"
										width={10.543}
										height={10.492}
										transform="matrix(0.651, -0.759, 0.759, 0.651, -3.8, 4.433)"
									/>
								</g>
							</g>
						</g>
					</g>
					<g
						className="at-item-1821"
						transform="translate(24.843 31.832)">
						<g className="cg-item-1821">
							<path
								className="ac-item-1821"
								d="M266.788,344.591a8.937,8.937,0,0,0,2.563-1.177c-1.3-1.639-1.87-2.374-1.87-2.374l-1.315.6Z"
								transform="translate(-266.166 -341.04)"
							/>
						</g>
					</g>
					<g
						className="bj-item-1821"
						transform="translate(6.429 26.222)">
						<g className="cj-item-1821">
							<path
								className="ac-item-1821"
								d="M71.61,280.936c1.135,1.933,2.605,4.2,4.5,5-.8,1.513-1.471,2.689-1.471,2.689a14.387,14.387,0,0,1-5.757-6.387c1.3-.588,2.731-1.3,2.731-1.3"
								transform="translate(-68.879 -280.936)"
							/>
						</g>
					</g>
					<g className="bl-item-1821" transform="translate(6.276)">
						<g className="cm-item-1821">
							<g transform="translate(0 0)">
								<g className="cn-item-1821">
									<rect
										className="bo-item-1821"
										width={28.313}
										height={5.702}
										transform="translate(0 0)"
									/>
								</g>
							</g>
						</g>
					</g>
					<g
						className="bp-item-1821"
						transform="translate(4.813 23.265)">
						<g className="co-item-1821">
							<path
								className="u-item-1821"
								d="M82.923,249.259a15.687,15.687,0,0,1-1.792,5.183,16.15,16.15,0,0,1-3.48,4.27,15.876,15.876,0,0,1-4.734,2.844,16.1,16.1,0,0,1-10.893.2,15.874,15.874,0,0,1-4.838-2.664,16.174,16.174,0,0,1-3.639-4.136,15.641,15.641,0,0,1-1.986-5.112A16.122,16.122,0,0,0,62.138,261.42a16.071,16.071,0,0,0,10.652-.2,16.174,16.174,0,0,0,10.133-11.963"
								transform="translate(-51.561 -249.259)"
							/>
						</g>
					</g>
					<g
						className="at-item-1821"
						transform="translate(4.498 4.206)">
						<g className="cp-item-1821">
							<path
								className="u-item-1821"
								d="M48.195,60.021a15.686,15.686,0,0,1,1.452-5.779,16,16,0,0,1,8.606-8.067,16.017,16.017,0,0,1,16.9,3.275,15.924,15.924,0,0,1,3.5,4.868A15.687,15.687,0,0,1,80.076,60.1l-.092-.74-.126-.734c-.049-.243-.1-.485-.155-.728s-.126-.479-.189-.719a15.8,15.8,0,0,0-1.082-2.758,16.058,16.058,0,0,0-8.516-7.777,15.976,15.976,0,0,0-11.49-.03,16,16,0,0,0-4.988,3.064,16.2,16.2,0,0,0-5.242,10.339"
								transform="translate(-48.195 -45.06)"
							/>
						</g>
					</g>
					<path
						className="u-item-1821"
						d="M98.384,110.887a12.411,12.411,0,1,1,12.411-12.411,12.411,12.411,0,0,1-12.411,12.411"
						transform="translate(-77.948 -78.032)"
					/>
					<path
						className="bs-item-1821"
						d="M129.651,121.1l2.163-1.594a.1.1,0,0,0,.042-.084l-.031-4.718a.1.1,0,0,0-.02-.061l-1.766-2.4a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l.626.85-1.209.891-.626-.85a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l1.622,2.2a.1.1,0,0,0,.145.022l.335-.246a.1.1,0,0,0,.022-.145l-.626-.85,1.209-.891.67.909.028,4.285-1.737,1.28-4.084-1.3-.67-.909,1.209-.891.626.85a.1.1,0,0,0,.145.022l.335-.246a.1.1,0,0,0,.022-.145l-1.622-2.2a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l.626.85-1.209.891-.626-.85a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l1.766,2.4a.1.1,0,0,0,.052.037l4.5,1.429a.1.1,0,0,0,.093-.015"
						transform="translate(-111.721 -101.732)"
					/>
					<path
						className="bs-item-1821"
						d="M225.333,120.909l4.48-1.481a.1.1,0,0,0,.052-.038l1.737-2.418a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-.616.858-1.22-.876.616-.858a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-1.6,2.221a.1.1,0,0,0,.024.145l.337.242a.1.1,0,0,0,.145-.024l.616-.857,1.22.877-.659.917-4.069,1.345-1.752-1.259-.022-4.285.659-.917,1.22.877-.616.857a.1.1,0,0,0,.024.145l.337.242a.1.1,0,0,0,.145-.024l1.6-2.221a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-.616.858-1.22-.876.616-.858a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-1.737,2.418a.1.1,0,0,0-.02.061l.024,4.718a.1.1,0,0,0,.043.084l2.182,1.568a.1.1,0,0,0,.093.014"
						transform="translate(-202.176 -101.548)"
					/>
					<path
						className="bs-item-1821"
						d="M249.166,200.138l.126-.4a.1.1,0,0,0-.067-.13l-2.836-.905a.1.1,0,0,0-.064,0l-4.48,1.482a.1.1,0,0,0-.066.067l-.817,2.56a.1.1,0,0,0,.015.093l2.793,3.8a.1.1,0,0,0,.052.037l2.836.905a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-1.006-.321.457-1.431,1.006.321a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-2.606-.832a.1.1,0,0,0-.13.067l-.126.4a.1.1,0,0,0,.067.13l1.006.321-.457,1.431-1.076-.343-2.537-3.454.656-2.056,4.069-1.345,1.076.343-.457,1.431-1.006-.321a.1.1,0,0,0-.13.067l-.126.4a.1.1,0,0,0,.067.131l2.606.832a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-1.006-.321.457-1.431,1.006.321a.1.1,0,0,0,.13-.067"
						transform="translate(-218.466 -180.155)"
					/>
					<path
						className="bs-item-1821"
						d="M180.391,247.85l2.793,3.8a.1.1,0,0,1,.02.061l.015,2.977a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.006-1.056-1.5.008.006,1.056a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.014-2.735a.1.1,0,0,1,.1-.1l.415,0a.1.1,0,0,1,.1.1l.006,1.056,1.5-.008-.006-1.129-2.537-3.454-2.158.011-2.5,3.48.006,1.129,1.5-.008-.006-1.056a.1.1,0,0,1,.1-.1l.415,0a.1.1,0,0,1,.1.1l.014,2.735a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.006-1.056-1.5.008.006,1.056a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.015-2.977a.1.1,0,0,1,.02-.061l2.754-3.832a.1.1,0,0,1,.084-.043l2.687-.014a.1.1,0,0,1,.084.042"
						transform="translate(-158.451 -224.678)"
					/>
					<path
						className="bs-item-1821"
						d="M116.271,200.97l-4.5-1.435a.1.1,0,0,0-.064,0l-2.827.935a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l1-.332.472,1.426-1,.332a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l2.6-.859a.1.1,0,0,0,.066-.131l-.13-.394a.1.1,0,0,0-.131-.066l-1,.332-.472-1.426,1.072-.355,4.082,1.3.677,2.049-2.5,3.48-1.072.354-.472-1.426,1-.332a.1.1,0,0,0,.066-.131l-.13-.394a.1.1,0,0,0-.131-.066l-2.6.859a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l1-.332.472,1.426-1,.332a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l2.826-.935a.1.1,0,0,0,.052-.038l2.754-3.832a.1.1,0,0,0,.014-.093l-.844-2.551a.1.1,0,0,0-.067-.066"
						transform="translate(-98.657 -180.906)"
					/>
				</g>
			</g>
		</svg>
	)
}
