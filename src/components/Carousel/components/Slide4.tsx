import React from 'react'
import DownAsta from './components/downasta'
import TopRightAsta from './components/toprightasta'
import TopLeftAsta from './components/topleftasta'
import DownLeftAsta from './components/downleftasta'
import DownRightAsta from './components/downrightasta'
import Tooltip from './Tooltip'

interface ISlide {
	height: string
	image: string
  onReturn: () => void
}

const Slide4: React.FC<ISlide> = ({ height, image, onReturn }): JSX.Element => {
	const [selected, setSelected] = React.useState<number>(0)

	console.log(image)

	return (
		<svg
			width="100%"
			height={height}
			viewBox="0 0 1920 1080"
			preserveAspectRatio="none">
			<defs>
				<style
					dangerouslySetInnerHTML={{
						__html: '\n  .a-slide-6,\n.c-slide-6,\n.g-slide-6,\n.h-slide-6,\n.iu-slide-6 {\n  fill: none;\n}\n.a-slide-6 {\n  stroke: rgba(0, 0, 0, 0);\n}\n.b-slide-6,\n.iy-slide-6,\n.s-slide-6 {\n  fill: #001f5f;\n}\n.d-slide-6,\n.i-slide-6,\n.t-slide-6 {\n  fill: #fff;\n}\n.d-slide-6 {\n  stroke: #707070;\n}\n.e-slide-6 {\n  opacity: 0.52-slide-6;\n}\n.f-slide-6 {\n  clip-path: url(#a-slide-6);\n}\n.g-slide-6 {\n  stroke: #fff;\n}\n.g-slide-6,\n.h-slide-6,\n.iu-slide-6 {\n  stroke-miterlimit: 10;\n}\n.g-slide-6,\n.h-slide-6 {\n  stroke-width: 1.074px-slide-6;\n}\n.h-slide-6 {\n  stroke: ;\n}\n.i-slide-6 {\n  font-size: 100px;\n}\n.i-slide-6,\n.iy-slide-6,\n.l-slide-6,\n.s-slide-6 {\n  font-family: "Kiona-Bold";\n  font-weight: 700;\n}\n.j-slide-6 {\n  fill: url(#b-slide-6);\n}\n.k-slide-6 {\n  opacity: 0.45-slide-6;\n  fill: url(#e-slide-6);\n}\n.l-slide-6 {\n  fill: rgba(255, 255, 255, 0.75-slide-6);\n  font-size: 49px;\n}\n.m-slide-6 {\n  fill: url(#h-slide-6);\n}\n.n-slide-6 {\n  opacity: 0.7-slide-6;\n  fill: url(#k-slide-6);\n}\n.o-slide-6 {\n  fill: url(#n-slide-6);\n}\n.p-slide-6,\n.r-slide-6 {\n  opacity: 0.6-slide-6;\n}\n.jb-slide-6,\n.jd-slide-6,\n.p-slide-6,\n.r-slide-6 {\n  mix-blend-mode: multiply;\n}\n.ix-slide-6,\n.jb-slide-6,\n.jd-slide-6,\n.p-slide-6,\n.r-slide-6 {\n  isolation: isolate;\n}\n.p-slide-6 {\n  fill: url(#q-slide-6);\n}\n.q-slide-6 {\n  fill: url(#r-slide-6);\n}\n.r-slide-6 {\n  fill: url(#u-slide-6);\n}\n.s-slide-6 {\n  font-size: 36px;\n}\n.u-slide-6 {\n  fill: #fffefe;\n}\n.v-slide-6 {\n  fill: #fefdfd;\n}\n.w-slide-6 {\n  fill: #fefcfc;\n}\n.x-slide-6 {\n  fill: #fefbfb;\n}\n.y-slide-6 {\n  fill: #fdfafa;\n}\n.z-slide-6 {\n  fill: #fdf9f9;\n}\n.aa-slide-6 {\n  fill: #fcf8f9;\n}\n.ab-slide-6 {\n  fill: #fcf7f8;\n}\n.ac-slide-6 {\n  fill: #fcf6f7;\n}\n.ad-slide-6 {\n  fill: #fbf5f6;\n}\n.ae-slide-6 {\n  fill: #fbf4f5;\n}\n.af-slide-6 {\n  fill: #fbf3f4;\n}\n.ag-slide-6 {\n  fill: #faf2f3;\n}\n.ah-slide-6 {\n  fill: #faf1f2;\n}\n.ai-slide-6 {\n  fill: #f9f0f1;\n}\n.aj-slide-6 {\n  fill: #f9eff0;\n}\n.ak-slide-6 {\n  fill: #f9eeef;\n}\n.al-slide-6 {\n  fill: #f8edee;\n}\n.am-slide-6 {\n  fill: #f8eced;\n}\n.an-slide-6 {\n  fill: #f8ebed;\n}\n.ao-slide-6 {\n  fill: #f7eaec;\n}\n.ap-slide-6 {\n  fill: #f7e9eb;\n}\n.aq-slide-6 {\n  fill: #f7e8ea;\n}\n.ar-slide-6 {\n  fill: #f6e7e9;\n}\n.as-slide-6 {\n  fill: #f6e6e8;\n}\n.at-slide-6 {\n  fill: #f5e5e7;\n}\n.au-slide-6 {\n  fill: #f5e4e6;\n}\n.av-slide-6 {\n  fill: #f5e3e5;\n}\n.aw-slide-6 {\n  fill: #f4e2e4;\n}\n.ax-slide-6 {\n  fill: #f4e1e3;\n}\n.ay-slide-6 {\n  fill: #f4e0e2;\n}\n.az-slide-6 {\n  fill: #f3dfe1;\n}\n.ba-slide-6 {\n  fill: #f3dee1;\n}\n.bb-slide-6 {\n  fill: #f2dde0;\n}\n.bc-slide-6 {\n  fill: #f2dcdf;\n}\n.bd-slide-6 {\n  fill: #f2dbde;\n}\n.be-slide-6 {\n  fill: #f1dadd;\n}\n.bf-slide-6 {\n  fill: #f1d9dc;\n}\n.bg-slide-6 {\n  fill: #f1d8db;\n}\n.bh-slide-6 {\n  fill: #f0d7da;\n}\n.bi-slide-6 {\n  fill: #f0d6d9;\n}\n.bj-slide-6 {\n  fill: #f0d5d8;\n}\n.bk-slide-6 {\n  fill: #efd4d7;\n}\n.bl-slide-6 {\n  fill: #efd3d6;\n}\n.bm-slide-6 {\n  fill: #eed2d6;\n}\n.bn-slide-6 {\n  fill: #eed1d5;\n}\n.bo-slide-6 {\n  fill: #eed0d4;\n}\n.bp-slide-6 {\n  fill: #edcfd3;\n}\n.bq-slide-6 {\n  fill: #edced2;\n}\n.br-slide-6 {\n  fill: #edcdd1;\n}\n.bs-slide-6 {\n  fill: #ecccd0;\n}\n.bt-slide-6 {\n  fill: #eccbcf;\n}\n.bu-slide-6 {\n  fill: #ebcace;\n}\n.bv-slide-6 {\n  fill: #ebc9cd;\n}\n.bw-slide-6 {\n  fill: #ebc8cc;\n}\n.bx-slide-6 {\n  fill: #eac7cb;\n}\n.by-slide-6 {\n  fill: #eac6ca;\n}\n.bz-slide-6 {\n  fill: #eac5ca;\n}\n.ca-slide-6 {\n  fill: #e9c4c9;\n}\n.cb-slide-6 {\n  fill: #e9c3c8;\n}\n.cc-slide-6 {\n  fill: #e9c2c7;\n}\n.cd-slide-6 {\n  fill: #e8c1c6;\n}\n.ce-slide-6 {\n  fill: #e8c0c5;\n}\n.cf-slide-6 {\n  fill: #e7bfc4;\n}\n.cg-slide-6 {\n  fill: #e7bec3;\n}\n.ch-slide-6 {\n  fill: #e7bdc2;\n}\n.ci-slide-6 {\n  fill: #e6bcc1;\n}\n.cj-slide-6 {\n  fill: #e6bbc0;\n}\n.ck-slide-6 {\n  fill: #e6babf;\n}\n.cl-slide-6 {\n  fill: #e5b9be;\n}\n.cm-slide-6 {\n  fill: #e5b8be;\n}\n.cn-slide-6 {\n  fill: #e5b7bd;\n}\n.co-slide-6 {\n  fill: #e4b6bc;\n}\n.cp-slide-6 {\n  fill: #e4b5bb;\n}\n.cq-slide-6 {\n  fill: #e3b4ba;\n}\n.cr-slide-6 {\n  fill: #e3b3b9;\n}\n.cs-slide-6 {\n  fill: #e3b2b8;\n}\n.ct-slide-6 {\n  fill: #e2b1b7;\n}\n.cu-slide-6 {\n  fill: #e2b0b6;\n}\n.cv-slide-6 {\n  fill: #e2afb5;\n}\n.cw-slide-6 {\n  fill: #e1aeb4;\n}\n.cx-slide-6 {\n  fill: #e1adb3;\n}\n.cy-slide-6 {\n  fill: #e0acb2;\n}\n.cz-slide-6 {\n  fill: #e0abb2;\n}\n.da-slide-6 {\n  fill: #e0aab1;\n}\n.db-slide-6 {\n  fill: #dfa9b0;\n}\n.dc-slide-6 {\n  fill: #dfa8af;\n}\n.dd-slide-6 {\n  fill: #dfa7ae;\n}\n.de-slide-6 {\n  fill: #dea6ad;\n}\n.df-slide-6 {\n  fill: #dea5ac;\n}\n.dg-slide-6 {\n  fill: #dea4ab;\n}\n.dh-slide-6 {\n  fill: #dda3aa;\n}\n.di-slide-6 {\n  fill: #dda2a9;\n}\n.dj-slide-6 {\n  fill: #dca1a8;\n}\n.dk-slide-6 {\n  fill: #dca0a7;\n}\n.dl-slide-6 {\n  fill: #dc9fa6;\n}\n.dm-slide-6 {\n  fill: #db9ea6;\n}\n.dn-slide-6 {\n  fill: #db9da5;\n}\n.do-slide-6 {\n  fill: #db9ca4;\n}\n.dp-slide-6 {\n  fill: #da9ba3;\n}\n.dq-slide-6 {\n  fill: #da9aa2;\n}\n.dr-slide-6 {\n  fill: #d999a1;\n}\n.ds-slide-6 {\n  fill: #d998a0;\n}\n.dt-slide-6 {\n  fill: #d9979f;\n}\n.du-slide-6 {\n  fill: #d8969e;\n}\n.dv-slide-6 {\n  fill: #d8959d;\n}\n.dw-slide-6 {\n  fill: #d8949c;\n}\n.dx-slide-6 {\n  fill: #d7939b;\n}\n.dy-slide-6 {\n  fill: #d7929a;\n}\n.dz-slide-6 {\n  fill: #d7919a;\n}\n.ea-slide-6 {\n  fill: #d69099;\n}\n.eb-slide-6 {\n  fill: #d68f98;\n}\n.ec-slide-6 {\n  fill: #d58e97;\n}\n.ed-slide-6 {\n  fill: #d58d96;\n}\n.ee-slide-6 {\n  fill: #d58c95;\n}\n.ef-slide-6 {\n  fill: #d48b94;\n}\n.eg-slide-6 {\n  fill: #d48a93;\n}\n.eh-slide-6 {\n  fill: #d48992;\n}\n.ei-slide-6 {\n  fill: #d38891;\n}\n.ej-slide-6 {\n  fill: #d38790;\n}\n.ek-slide-6 {\n  fill: #d2868f;\n}\n.el-slide-6 {\n  fill: #d2858f;\n}\n.em-slide-6 {\n  fill: #d2848e;\n}\n.en-slide-6 {\n  fill: #d1838d;\n}\n.eo-slide-6 {\n  fill: #d1828c;\n}\n.ep-slide-6 {\n  fill: #d1818b;\n}\n.eq-slide-6 {\n  fill: #d0808a;\n}\n.er-slide-6 {\n  fill: #d07f89;\n}\n.es-slide-6 {\n  fill: #d07e88;\n}\n.et-slide-6 {\n  fill: #cf7d87;\n}\n.eu-slide-6 {\n  fill: #cf7c86;\n}\n.ev-slide-6 {\n  fill: #ce7b85;\n}\n.ew-slide-6 {\n  fill: #ce7a84;\n}\n.ex-slide-6 {\n  fill: #ce7983;\n}\n.ey-slide-6 {\n  fill: #cd7883;\n}\n.ez-slide-6 {\n  fill: #cd7782;\n}\n.fa-slide-6 {\n  fill: #cd7681;\n}\n.fb-slide-6 {\n  fill: #cc7580;\n}\n.fc-slide-6 {\n  fill: #cc747f;\n}\n.fd-slide-6 {\n  fill: #cb737e;\n}\n.fe-slide-6 {\n  fill: #cb727d;\n}\n.ff-slide-6 {\n  fill: #cb717c;\n}\n.fg-slide-6 {\n  fill: #ca707b;\n}\n.fh-slide-6 {\n  fill: #ca6f7a;\n}\n.fi-slide-6 {\n  fill: #ca6e79;\n}\n.fj-slide-6 {\n  fill: #c96d78;\n}\n.fk-slide-6 {\n  fill: #c96c77;\n}\n.fl-slide-6 {\n  fill: #c96b77;\n}\n.fm-slide-6 {\n  fill: #c86a76;\n}\n.fn-slide-6 {\n  fill: #c86975;\n}\n.fo-slide-6 {\n  fill: #c76874;\n}\n.fp-slide-6 {\n  fill: #c76773;\n}\n.fq-slide-6 {\n  fill: #c76672;\n}\n.fr-slide-6 {\n  fill: #c66571;\n}\n.fs-slide-6 {\n  fill: #c66470;\n}\n.ft-slide-6 {\n  fill: #c6636f;\n}\n.fu-slide-6 {\n  fill: #c5626e;\n}\n.fv-slide-6 {\n  fill: #c5616d;\n}\n.fw-slide-6 {\n  fill: #c4606c;\n}\n.fx-slide-6 {\n  fill: #c45f6b;\n}\n.fy-slide-6 {\n  fill: #c45e6b;\n}\n.fz-slide-6 {\n  fill: #c35d6a;\n}\n.ga-slide-6 {\n  fill: #c35c69;\n}\n.gb-slide-6 {\n  fill: #c35b68;\n}\n.gc-slide-6 {\n  fill: #c25a67;\n}\n.gd-slide-6 {\n  fill: #c25966;\n}\n.ge-slide-6 {\n  fill: #c25865;\n}\n.gf-slide-6 {\n  fill: #c15764;\n}\n.gg-slide-6 {\n  fill: #c15663;\n}\n.gh-slide-6 {\n  fill: #c05562;\n}\n.gi-slide-6 {\n  fill: #c05461;\n}\n.gj-slide-6 {\n  fill: #c05360;\n}\n.gk-slide-6 {\n  fill: #bf525f;\n}\n.gl-slide-6 {\n  fill: #bf515f;\n}\n.gm-slide-6 {\n  fill: #bf505e;\n}\n.gn-slide-6 {\n  fill: #be4f5d;\n}\n.go-slide-6 {\n  fill: #be4e5c;\n}\n.gp-slide-6 {\n  fill: #be4d5b;\n}\n.gq-slide-6 {\n  fill: #bd4c5a;\n}\n.gr-slide-6 {\n  fill: #bd4b59;\n}\n.gs-slide-6 {\n  fill: #bc4a58;\n}\n.gt-slide-6 {\n  fill: #bc4957;\n}\n.gu-slide-6 {\n  fill: #bc4856;\n}\n.gv-slide-6 {\n  fill: #bb4755;\n}\n.gw-slide-6 {\n  fill: #bb4654;\n}\n.gx-slide-6 {\n  fill: #bb4553;\n}\n.gy-slide-6 {\n  fill: #ba4453;\n}\n.gz-slide-6 {\n  fill: #ba4352;\n}\n.ha-slide-6 {\n  fill: #b94251;\n}\n.hb-slide-6 {\n  fill: #b94150;\n}\n.hc-slide-6 {\n  fill: #b9404f;\n}\n.hd-slide-6 {\n  fill: #b83f4e;\n}\n.he-slide-6 {\n  fill: #b83e4d;\n}\n.hf-slide-6 {\n  fill: #b83d4c;\n}\n.hg-slide-6 {\n  fill: #b73c4b;\n}\n.hh-slide-6 {\n  fill: #b73b4a;\n}\n.hi-slide-6 {\n  fill: #b73a49;\n}\n.hj-slide-6 {\n  fill: #b63948;\n}\n.hk-slide-6 {\n  fill: #b63848;\n}\n.hl-slide-6 {\n  fill: #b53747;\n}\n.hm-slide-6 {\n  fill: #b53646;\n}\n.hn-slide-6 {\n  fill: #b53545;\n}\n.ho-slide-6 {\n  fill: #b43444;\n}\n.hp-slide-6 {\n  fill: #b43343;\n}\n.hq-slide-6 {\n  fill: #b43242;\n}\n.hr-slide-6 {\n  fill: #b33141;\n}\n.hs-slide-6 {\n  fill: #b33040;\n}\n.ht-slide-6 {\n  fill: #b22f3f;\n}\n.hu-slide-6 {\n  fill: #b22e3e;\n}\n.hv-slide-6 {\n  fill: #b22d3d;\n}\n.hw-slide-6 {\n  fill: #b12c3c;\n}\n.hx-slide-6 {\n  fill: #b12b3c;\n}\n.hy-slide-6 {\n  fill: #b12a3b;\n}\n.hz-slide-6 {\n  fill: #b0293a;\n}\n.ia-slide-6 {\n  fill: #b02839;\n}\n.ib-slide-6 {\n  fill: #b02738;\n}\n.ic-slide-6 {\n  fill: #af2637;\n}\n.id-slide-6 {\n  fill: #af2536;\n}\n.ie-slide-6 {\n  fill: #ae2435;\n}\n.if-slide-6 {\n  fill: #ae2334;\n}\n.ig-slide-6 {\n  fill: #ae2233;\n}\n.ih-slide-6 {\n  fill: #ad2132;\n}\n.ii-slide-6 {\n  fill: #ad2031;\n}\n.ij-slide-6 {\n  fill: #ad1f30;\n}\n.ik-slide-6 {\n  fill: #ac1e30;\n}\n.il-slide-6 {\n  fill: #ac1d2f;\n}\n.im-slide-6 {\n  fill: #ab1c2e;\n}\n.in-slide-6 {\n  fill: #ab1b2d;\n}\n.io-slide-6 {\n  fill: #ab1a2c;\n}\n.ip-slide-6 {\n  fill: #aa192b;\n}\n.iq-slide-6 {\n  fill: #aa182a;\n}\n.ir-slide-6 {\n  fill: #e81d2c;\n}\n.is-slide-6 {\n  clip-path: url(#v-slide-6);\n}\n.it-slide-6 {\n  clip-path: url(#w-slide-6);\n}\n.iu-slide-6 {\n  stroke: #e7002a;\n  stroke-width: 3px;\n}\n.iv-slide-6 {\n  clip-path: url(#x-slide-6);\n}\n.iw-slide-6 {\n  fill: url(#y-slide-5);\n}\n.iy-slide-6 {\n  font-size: 42px;\n}\n.iz-slide-6 {\n  filter: url(#s-slide-6);\n}\n.ja-slide-6 {\n  filter: url(#o-slide-6);\n}\n.jb-slide-6 {\n  filter: url(#l-slide-6);\n}\n.jc-slide-6 {\n  filter: url(#i-slide-6);\n}\n.jd-slide-6 {\n  filter: url(#f-slide-6);\n}\n.je-slide-6 {\n  filter: url(#c-slide-6);\n}\n\n',
					}}
				/>
				<clipPath id="a-slide-5">
					<rect className="a" width={1920} height={1079} />
				</clipPath>
				<pattern
					id="b-slide-5"
					width={1}
					height={1}
					patternTransform="translate(1875.022 1406.352) rotate(-180)"
					viewBox="10.203 195.347 923.046 476.376">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={937.511}
						height={703.176}
						xlinkHref="ComponentTMP_0-image.jpg"
					/>
				</pattern>
				<filter
					id="c-slide-5"
					x={0}
					y={1073.237}
					width={955.511}
					height={501.841}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="d" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="d" />
					<feComposite in="SourceGraphic" />
				</filter>
				<linearGradient
					id="e-slide-5"
					x1={0.181}
					y1={1}
					x2={0.189}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
					<stop offset={1} stopColor="#001f5f" />
				</linearGradient>
				<filter
					id="f-slide-5"
					x={0}
					y={1073.237}
					width={955.511}
					height={501.841}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="g" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="g" />
					<feComposite in="SourceGraphic" />
				</filter>
				<pattern
					id="h-slide-5"
					width={1}
					height={1}
					patternTransform="matrix(1, 0, 0, -1, 0, 1034.785)"
					viewBox="5.938 158.016 769.308 346.218">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={775.246}
						height={517.392}
						xlinkHref="ComponentTMP_0-image2.jpg"
					/>
				</pattern>
				<filter
					id="i-slide-5"
					x={0}
					y={1073.236}
					width={793.246}
					height={366.89}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="j" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="j" />
					<feComposite in="SourceGraphic" />
				</filter>
				<linearGradient
					id="k-slide-5"
					x1={0.222}
					x2={0.22}
					y2={0.018}
					xlinkHref="#e"
				/>
				<filter
					id="l-slide-5"
					x={0}
					y={1073.236}
					width={793.246}
					height={366.89}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="m" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="m" />
					<feComposite in="SourceGraphic" />
				</filter>
				<pattern
					id="n-slide-5"
					width={1}
					height={1}
					viewBox="67.489 110.494 870.022 449.011">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={937.511}
						height={625.007}
						xlinkHref="ComponentTMP_0-image3.jpg"
					/>
				</pattern>
				<filter
					id="o-slide-5"
					x={982.489}
					y={1662.868}
					width={955.511}
					height={501.841}
					filterUnits="userSpaceOnUse">
					<feOffset dy={-3} />
					<feGaussianBlur stdDeviation={3} result="p" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="p" />
					<feComposite in="SourceGraphic" />
				</filter>
				<linearGradient
					id="q-slide-5"
					x1={0.314}
					y1={1}
					x2={0.312}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#1c164e" stopOpacity={0} />
					<stop offset={1} stopColor="#1c164e" />
				</linearGradient>
				<pattern
					id="r-slide-5"
					width={1}
					height={1}
					viewBox="0 132.158 775.246 348.89">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={775.246}
						height={516.831}
						xlinkHref={image}
					/>
				</pattern>
				<filter
					id="s-slide-5"
					x={1144.754}
					y={1797.819}
					width={793.246}
					height={366.89}
					filterUnits="userSpaceOnUse">
					<feOffset dy={-3} />
					<feGaussianBlur stdDeviation={3} result="t" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="t" />
					<feComposite in="SourceGraphic" />
				</filter>
				<linearGradient
					id="u-slide-5"
					x1={0.513}
					x2={0.54}
					y2={0}
					xlinkHref="#e"
				/>
				<clipPath id="v-slide-5">
					<rect className="b" width={406.518} height={175.872} />
				</clipPath>
				<clipPath id="w-slide-5">
					<rect className="c" width={707} height={569.514} />
				</clipPath>
				<clipPath id="x-slide-5">
					<rect
						className="d"
						width={475}
						height={534}
						transform="translate(1590.658 549)"
					/>
				</clipPath>
				<pattern
					id="y-slide-5"
					width={1}
					height={1}
					viewBox={`${image === '/images/carouselHeader/ComponentTMP_0-image4.png' ? '100 -100 662.303 514.533' : '223 0 662.303 514.533'}`}>
					<image
						preserveAspectRatio="xMidYMid slice"
						width={771.8}
						height={514.533}
						xlinkHref={image}
					/>
				</pattern>
			</defs>

			<g transform="translate(9)">
				<g transform="translate(0 -534)">
					<g transform="translate(0 1614)">
						<rect
							className="b-slide-6"
							width={1920}
							height={1079}
						/>
						<g className="e-slide-6">
							<g className="f-slide-6" transform="translate(0 0)">
								<path
									className="g-slide-6"
									d="M1803.186.21l-179,430.555A164.505,164.505,0,0,1,1472.332,532H1129.258A164.519,164.519,0,0,0,977.4,633.228L826.276,996.67A164.509,164.509,0,0,1,674.423,1097.9H331.348A164.517,164.517,0,0,0,179.5,1199.135L.5,1629.69"
									transform="translate(-785.418 -1059.319)"
								/>
								<path
									className="h-slide-6"
									d="M1868.662,65.685l-179,430.555a164.5,164.5,0,0,1-151.853,101.233H1194.734A164.519,164.519,0,0,0,1042.88,698.7L891.753,1062.145A164.509,164.509,0,0,1,739.9,1163.378H396.824a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
									transform="translate(-676.291 -950.183)"
								/>
								<path
									className="g-slide-6"
									d="M1934.137,131.16l-179,430.555a164.5,164.5,0,0,1-151.853,101.233H1260.209a164.519,164.519,0,0,0-151.853,101.23L957.227,1127.62a164.509,164.509,0,0,1-151.853,101.233H462.3a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
									transform="translate(-567.166 -841.047)"
								/>
								<path
									className="h-slide-6"
									d="M1999.612,196.635l-179,430.555a164.5,164.5,0,0,1-151.853,101.236H1325.684a164.519,164.519,0,0,0-151.853,101.23L1022.7,1193.094A164.511,164.511,0,0,1,870.849,1294.33H527.774a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
									transform="translate(-458.041 -731.911)"
								/>
								<path
									className="g-slide-6"
									d="M2065.088,262.111l-179,430.555A164.5,164.5,0,0,1,1734.234,793.9H1391.16a164.519,164.519,0,0,0-151.853,101.23l-151.128,363.441A164.509,164.509,0,0,1,936.325,1359.8H593.25A164.517,164.517,0,0,0,441.4,1461.036l-179,430.555"
									transform="translate(-348.914 -622.773)"
								/>
								<path
									className="h-slide-6"
									d="M2130.563,327.586l-179,430.555a164.5,164.5,0,0,1-151.853,101.233H1456.635A164.518,164.518,0,0,0,1304.781,960.6l-151.128,363.441A164.509,164.509,0,0,1,1001.8,1425.279H658.725a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
									transform="translate(-239.789 -513.638)"
								/>
								<path
									className="g-slide-6"
									d="M2196.038,393.061l-179,430.555a164.505,164.505,0,0,1-151.854,101.233H1522.11a164.519,164.519,0,0,0-151.853,101.23l-151.128,363.442a164.509,164.509,0,0,1-151.853,101.233H724.2a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
									transform="translate(-130.664 -404.502)"
								/>
								<path
									className="h-slide-6"
									d="M2261.514,458.537l-179,430.555a164.508,164.508,0,0,1-151.853,101.233H1587.586a164.519,164.519,0,0,0-151.853,101.23L1284.6,1455a164.511,164.511,0,0,1-151.853,101.233H789.676a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
									transform="translate(-21.538 -295.364)"
								/>
								<path
									className="g-slide-6"
									d="M2326.989,524.012l-179,430.555A164.505,164.505,0,0,1,1996.136,1055.8H1653.061a164.519,164.519,0,0,0-151.854,101.23l-151.128,363.441A164.509,164.509,0,0,1,1198.226,1621.7H855.151A164.518,164.518,0,0,0,703.3,1722.938l-179,430.555"
									transform="translate(87.587 -186.228)"
								/>
							</g>
						</g>
					</g>
					<g transform="translate(0 1613.236)">
						<g transform="translate(0 0)">
							<g
								className="je-slide-6"
								transform="matrix(1, 0, 0, 1, -9, -1079.24)">
								<path
									className="j-slide-6"
									d="M239.377,0H937.511V483.841H0L108.49,132.8C130.271,52.466,181.977,0,239.377,0Z"
									transform="translate(946.51 1563.08) rotate(180)"
								/>
							</g>
							<g
								className="jd-slide-6"
								transform="matrix(1, 0, 0, 1, -9, -1079.24)">
								<path
									className="k-slide-6"
									d="M239.377,0H937.511V483.841H0L108.49,132.8C130.271,52.466,181.977,0,239.377,0Z"
									transform="translate(946.51 1563.08) rotate(180)"
								/>
							</g>
							<text
								className="l-slide-6"
								transform="translate(524 464)">
								<tspan x={0} y={0}>
									{'+3.000'}
								</tspan>
							</text>
						</g>
						<g transform="translate(0 0)">
							<g
								className="jc-slide-6"
								transform="matrix(1, 0, 0, 1, -9, -1079.24)">
								<path
									className="m-slide-6"
									d="M189.626,0h585.62V348.89H0L79.833,95.763C98.1,37.833,141.477,0,189.626,0Z"
									transform="translate(784.25 1428.13) rotate(180)"
								/>
							</g>
							<g
								className="jb-slide-6"
								transform="matrix(1, 0, 0, 1, -9, -1079.24)">
								<path
									className="n-slide-6"
									d="M189.626,0h585.62V348.89H0L79.833,95.763C98.1,37.833,141.477,0,189.626,0Z"
									transform="translate(784.25 1428.13) rotate(180)"
								/>
							</g>
							<text
								className="l-slide-6"
								transform="translate(372 329)">
								<tspan x={0} y={0}>
									{'+5.000'}
								</tspan>
							</text>
						</g>
						<g transform="translate(982.489 595.632)">
							<g transform="translate(0)">
								<g
									className="ja-slide-6"
									transform="matrix(1, 0, 0, 1, -991.49, -1674.87)">
									<path
										className="o-slide-6"
										d="M231.192.49H929.326V484.331H-8.185l108.49-351.037C122.086,52.956,173.793.49,231.192.49Z"
										transform="translate(999.67 1674.38)"
									/>
								</g>
								<path
									className="p-slide-6"
									d="M231.192.49H929.326V484.331H-8.185l108.49-351.037C122.086,52.956,173.793.49,231.192.49Z"
									transform="translate(8.185 -0.49)"
								/>
							</g>
							<text
								className="l-slide-6"
								transform="translate(261.511 56.368)">
								<tspan x={0} y={0}>
									{'10 instituciones'}
								</tspan>
							</text>
						</g>
						<g transform="translate(1144.754 730.583)">
							<g
								className="iz-slide-6"
								transform="matrix(1, 0, 0, 1, -1153.75, -1809.82)">
								<path
									className="q-slide-6"
									d="M190.355.49h585.62V349.38H.729L80.562,96.253C98.833,38.323,142.206.49,190.355.49Z"
									transform="translate(1153.02 1809.33)"
								/>
							</g>
							<path
								className="r-slide-6"
								d="M190.355.49h585.62V349.38H.729L80.562,96.253C98.833,38.323,142.206.49,190.355.49Z"
								transform="translate(-0.729 -0.49)"
							/>
							<text
								className="l-slide-6"
								transform="translate(230.246 56.417)">
								<tspan x={0} y={0}>
									{'+45.600'}
								</tspan>
							</text>
						</g>
					</g>
				</g>
				<g className="is-slide-6">
					<path
						className="b-slide-6"
						d="M267.257,175.872H0V0H406.518V45.533c0,71.985-62.349,130.339-139.261,130.339"
					/>
				</g>
				<g transform="translate(1213 513.486)">
					<g className="it-slide-6" transform="translate(0 0)">
						<path
							className="b-slide-6"
							d="M580.38,460.013l.078-333.1H274.217c-73.956,0-140.661,40.518-169.112,102.725L0,460.013Z"
							transform="translate(126.59 109.501)"
						/>
						<path
							className="iu-slide-6"
							d="M674.943.5H491.771c-83.748,0-159.284,49.865-191.5,126.42L85.887,637.572H674.943Z"
							transform="translate(99.495 7.963)"
						/>
						<path
							className="t-slide-6"
							d="M57.358,0V26.1H0V39.2H57.358V65.3l56.719-32.652Z"
							transform="translate(206.912 645.535)"
						/>
					</g>
				</g>
				<g className="iv-slide-6" transform="translate(-145.658)">
					<g transform="translate(899.409 182.768)">
						<g transform="translate(746.249 385.699)">
							<g transform="translate(0 0)">
								<path
									className="iw-slide-6"
									d="M770.1,14.03H401.667c-62.258,0-106.328,11.051-142.364,106.309L107.8,528.563H770.1Z"
									transform="translate(-107.798 -14.03)"
								/>
							</g>
						</g>
					</g>
				</g>
				<g transform="translate(550 170)">
					<defs>
						<style>
							{
								'.a-item-pen{fill:url(#a-item-pen);}.b-item-pen{fill:url(#b-item-pen);}.c-item-pen{fill:url(#c-item-pen);}.d-item-pen{fill:url(#d-item-pen);}.e-item-pen{fill:#fff;}.f-item-pen{fill:#fffefe;}.g-item-pen{fill:url(#e-item-pen);}'
							}
						</style>
						<pattern
							id="a-item-pen"
							preserveAspectRatio="none"
							width="100%"
							height="100%"
							viewBox="0 0 752 652">
							<image
								width={752}
								height={652}
								xlinkHref="/images/navbar/ComponentTMP_0-image.png"
							/>
						</pattern>
						<pattern
							id="b-item-pen"
							width={1}
							height={1}
							viewBox="9.243 -0.161 390 323">
							<image
								preserveAspectRatio="none"
								width={390}
								height={323}
								xlinkHref="/images/navbar/ComponentTMP_0-image2.png"
							/>
						</pattern>
						<pattern
							id="c-item-pen"
							preserveAspectRatio="none"
							width="100%"
							height="100%"
							viewBox="0 0 724 744">
							<image
								width={724}
								height={744}
								xlinkHref="/images/navbar/ComponentTMP_0-image3.png"
							/>
						</pattern>
						<pattern
							id="d-item-pen"
							preserveAspectRatio="none"
							width="100%"
							height="100%"
							viewBox="0 0 744 752">
							<image
								width={744}
								height={752}
								xlinkHref="/images/navbar/ComponentTMP_0-image4.png"
							/>
						</pattern>
						<pattern
							id="e-item-pen"
							preserveAspectRatio="none"
							width="100%"
							height="100%"
							viewBox="0 0 856 644">
							<image
								width={856}
								height={644}
								xlinkHref="/images/navbar/ComponentTMP_0-image5.png"
							/>
						</pattern>
					</defs>
					{selected !== 5 && (
						<g
							transform="translate(74.064)"
							onClick={() => setSelected(5)}>
							<rect
								className="a-item-pen"
								width={381}
								height={331}
								transform="matrix(0.999, 0.035, -0.035, 0.999, 11.552, 0)"
							/>
						</g>
					)}
					{selected !== 4 && (
						<g
							transform="translate(451.751 18.338)"
							onClick={() => setSelected(4)}>
							<rect
								className="b-item-pen"
								width={402}
								height={323}
								transform="matrix(1, 0.017, -0.017, 1, 5.637, 0)"
							/>
						</g>
					)}
					{selected !== 3 && (
						<g
							transform="translate(506.053 270.002)"
							onClick={() => setSelected(3)}>
							<rect
								className="c-item-pen"
								width={375.158}
								height={384.577}
								transform="translate(20.127) rotate(3)"
							/>
						</g>
					)}
					{selected !== 2 && (
						<g
							transform="translate(0 263.002)"
							onClick={() => setSelected(2)}>
							<rect
								className="d-item-pen"
								width={379}
								height={384}
								transform="matrix(0.999, 0.035, -0.035, 0.999, 13.401, 0)"
							/>
						</g>
					)}
					{selected !== 1 && (
						<g
							transform="translate(231.423 438.291)"
							onClick={() => setSelected(1)}>
							<path
								className="e-item-pen"
								d="M377.324,430.64l49.708,67.67a1.85,1.85,0,0,1,.358,1.084l.276,52.976a1.847,1.847,0,0,1-1.838,1.857l-7.392.038a1.848,1.848,0,0,1-1.857-1.838l-.1-18.79-26.726.139.1,18.791a1.847,1.847,0,0,1-1.838,1.858l-7.391.037a1.846,1.846,0,0,1-1.858-1.837l-.254-48.671a1.848,1.848,0,0,1,1.838-1.857l7.392-.039A1.847,1.847,0,0,1,389.6,503.9l.1,18.791,26.728-.139-.105-20.1L371.177,441l-38.4.2-44.5,61.924.1,20.1,26.728-.138-.1-18.793a1.849,1.849,0,0,1,1.837-1.858l7.391-.037a1.848,1.848,0,0,1,1.858,1.838l.254,48.67a1.849,1.849,0,0,1-1.838,1.858l-7.391.037a1.848,1.848,0,0,1-1.857-1.838l-.1-18.791-26.728.139.1,18.792a1.848,1.848,0,0,1-1.838,1.857l-7.391.038a1.847,1.847,0,0,1-1.857-1.838l-.276-52.976a1.842,1.842,0,0,1,.347-1.087l49-68.185a1.848,1.848,0,0,1,1.491-.771l47.812-.247a1.847,1.847,0,0,1,1.5.754"
								transform="translate(-132.049 -429.886)"
							/>
							<path
								className="f-item-pen"
								d="M377.321,430.792l49.817,67.818a1.852,1.852,0,0,1,.359,1.087l.277,53.091a1.852,1.852,0,0,1-1.843,1.862l-7.407.038a1.853,1.853,0,0,1-1.862-1.842l-.1-18.831-26.785.14.1,18.832a1.851,1.851,0,0,1-1.841,1.862l-7.407.038a1.851,1.851,0,0,1-1.862-1.842l-.254-48.777a1.852,1.852,0,0,1,1.842-1.861l7.408-.039a1.852,1.852,0,0,1,1.862,1.842l.1,18.833,26.786-.14-.105-20.142-45.242-61.591-38.483.2-44.6,62.061.1,20.139,26.786-.138-.1-18.834a1.852,1.852,0,0,1,1.841-1.862l7.408-.038a1.852,1.852,0,0,1,1.862,1.842l.255,48.776a1.854,1.854,0,0,1-1.842,1.862l-7.408.037a1.851,1.851,0,0,1-1.861-1.842l-.1-18.833-26.786.14.1,18.833a1.852,1.852,0,0,1-1.842,1.862l-7.408.038a1.851,1.851,0,0,1-1.862-1.841l-.276-53.093a1.848,1.848,0,0,1,.348-1.09l49.107-68.335a1.849,1.849,0,0,1,1.494-.772l47.917-.248a1.85,1.85,0,0,1,1.5.755"
								transform="translate(-131.989 -429.927)"
							/>
							<rect
								className="g-item-pen"
								width={443}
								height={333}
								transform="matrix(1, 0.017, -0.017, 1, 5.812, 0.11)"
							/>
						</g>
					)}
				</g>
				<text className="iy-slide-6" transform="translate(1000 67.639)">
					<tspan x={-432.432} y={42}>
						{'El origen de nuestra historia es hoy'}
					</tspan>
					<tspan x={-351.886} y={79}>
						{'la esencia de nuestra marca'}
					</tspan>
				</text>
				{selected === 1 && (
					<DownAsta onUnselected={() => setSelected(0)} />
				)}
				{selected === 2 && (
					<DownLeftAsta onUnselected={() => setSelected(0)} />
				)}
				{selected === 3 && (
					<DownRightAsta onUnselected={() => setSelected(0)} />
				)}
				{selected === 5 && (
					<TopLeftAsta />
				)}
				{selected === 4 && (
					<TopRightAsta onUnselected={() => setSelected(0)} />
				)}
			</g>
			<g transform='translate(1557 950)' onClick={onReturn}>
				<path
					style={{ fill: '#fff' }}
					d="M45.263,0V46.781L85.8,23.389,66.44,12.217Z"
					transform="rotate(180)"></path>
			</g>
			<g transform='translate(158 700)'>
				<Tooltip/>
			</g>
		</svg>
	)

}

export default Slide4
