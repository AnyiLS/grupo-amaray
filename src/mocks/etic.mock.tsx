import React from 'react'

interface DataEtic {
	uno: () => JSX.Element
	[index: string]: () => JSX.Element
}

export const dataEtic: DataEtic = {
	uno: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 320px)' }}>
				<text className="a-text-1" transform="translate(70)">
					<tspan x={136.68} y={38}>
						{'Conflicto de inter\xE9s'}
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 93.422)">
					<tspan x={0} y={23}>
						{
							'La situaci\xF3n en virtud de la cual una persona, por su actividad o '
						}
					</tspan>
					<tspan x={0} y={51}>
						{
							'cargo, o por la informaci\xF3n que posee, se enfrenta a distintas '
						}
					</tspan>
					<tspan x={0} y={79}>
						{
							'alternativas de conducta en relaci\xF3n con intereses incompatibles, '
						}
					</tspan>
					<tspan x={0} y={107}>
						{
							'siendo incorrecto privilegiar alguno de ellos, pues se vulnerar\xEDa o '
						}
					</tspan>
					<tspan x={0} y={135}>
						{'debilitar\xEDa injustamente la posici\xF3n del otro.'}
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
	dos: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 340px)' }}>
				<text className="a-text-1">
					<tspan x={14.98} y={38}>
						{'Incumplimiento de leyes y regulaciones'}
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 94.988)">
					<tspan x={0} y={23}>
						{
							'Negocios de la compa\xF1\xEDa que no se realicen dentro del marco legal '
						}
					</tspan>
					<tspan x={0} y={51}>
						{
							'y/o que sus colaboradores no obren dentro de este. Incumplimiento '
						}
					</tspan>
					<tspan x={0} y={79}>
						{
							'a lo dispuesto en el c\xF3digo de \xE9tica, reglamento interno de trabajo, '
						}
					</tspan>
					<tspan x={0} y={107}>
						{
							'pol\xEDticas de contrataci\xF3n y pago a terceros, reglamentos, pol\xEDticas '
						}
					</tspan>
					<tspan x={0} y={135}>
						{
							'y/o procedimientos espec\xEDficos establecidos por el Grupo Amarey.'
						}
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
	tres: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 340px)' }}>
				<text className="a-text-1">
					<tspan x={234.42} y={38}>
						{'Confidencialidad'}
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 87.886)">
					<tspan x={0} y={23}>
						{
							'Los empleados utilizar\xE1n la informaci\xF3n no p\xFAblica que sea de su '
						}
					</tspan>
					<tspan x={0} y={51}>
						{
							'conocimiento, para realizar las actividades que desempe\xF1en, de '
						}
					</tspan>
					<tspan x={0} y={79}>
						{
							'manera confidencial y reservada, y se abstendr\xE1n en todo '
						}
					</tspan>
					<tspan x={0} y={107}>
						{
							'momento de obtener o recibir beneficios personales o provocar '
						}
					</tspan>
					<tspan x={0} y={135}>
						{
							'perjuicios a la empresa por su divulgaci\xF3n o utilizaci\xF3n indebida.'
						}
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
	cuatro: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 380px)' }}>
				<text className="a-text-1">
					<tspan x={225.94} y={38}>
						{'Lavado de activos'}
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 87.886)">
					<tspan x={0} y={23}>
						{
							'Son operaciones que busca dar apariencia de legalidad a recursos '
						}
					</tspan>
					<tspan x={0} y={51}>
						{
							'provenientes de actividades il\xEDcitas, a trav\xE9s de diversas '
						}
					</tspan>
					<tspan x={0} y={79}>
						{
							'transacciones ocultando as\xED el origen y trayectoria de los recursos.'
						}
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
	cinco: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 380px)' }}>
				<text className="a-text-1">
					<tspan x={151.68} y={38}>
						{'Actividades inapropiadas'}
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 87.886)">
					<tspan x={0} y={23}>
						{
							'La relaci\xF3n entre los empleados del Grupo Amarey deber\xE1 estar '
						}
					</tspan>
					<tspan x={0} y={51}>
						{
							'siempre basada en el debido y mutuo respeto, a fin de asegurar un '
						}
					</tspan>
					<tspan x={0} y={79}>
						{'ambiente armonioso conducente al trabajo productivo.'}
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
	seis: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 340px)' }}>
				<text className="a-text-1">
					<tspan x={49.08} y={38}>
						{'Pr\xE1cticas comerciales inadecuadas'}
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 87.886)">
					<tspan x={0} y={23}>
						{
							'En la relaci\xF3n con los clientes de Grupo Amarey, los empleados de la '
						}
					</tspan>
					<tspan x={0} y={51}>
						{
							'organizaci\xF3n siempre deber\xE1n actuar con objetividad, '
						}
					</tspan>
					<tspan x={0} y={79}>
						{
							'imparcialidad, equidad, excelencia y de acuerdo con los objetivos '
						}
					</tspan>
					<tspan x={0} y={107}>
						{'de imagen, crecimiento y rentabilidad de la empresa.'}
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
	siete: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 340px)' }}>
				<text className="a-text-1">
					<tspan x={197.12} y={38}>
						{'D\xE1divas o prebendas'}
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 87.886)">
					<tspan x={0} y={23}>
						{
							'Son todas aquellas ventajas, art\xEDculos o incentivos en dinero o '
						}
					</tspan>
					<tspan x={0} y={51}>
						{
							'especie que se entregan a terceros (cualquier relacionado con '
						}
					</tspan>
					<tspan x={0} y={79}>
						{
							'compra, distribuci\xF3n, comercializaci\xF3n, prescripci\xF3n y dispensaci\xF3n '
						}
					</tspan>
					<tspan x={0} y={107}>
						{
							'de f\xE1rmacos, dispositivos m\xE9dicos o insumos de salud), con el '
						}
					</tspan>
					<tspan x={0} y={135}>
						{
							'prop\xF3sito de obtener beneficios comerciales que no se ajustan a '
						}
					</tspan>
					<tspan x={0} y={163}>
						{
							'los principios de la promoci\xF3n \xE9tica, de la competencia leal y del '
						}
					</tspan>
					<tspan x={0} y={191}>
						{
							'respeto por los principios, la moral y el buen actuar.'
						}
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
}
