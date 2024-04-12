import { createBrowserRouter } from 'react-router-dom'
import useScreens from 'screens'
/** Parent Routes */
import Products from './products'
import Productos from 'components/Productos/Productos'
import Historia from 'components/Historia/Historia'
import Reconocimientos from 'components/Reconocimientos/Reconocimientos'
import Responsabilidad from 'components/Responsabilidad/Responsabilidad'
import Biomedico from 'components/Biomedico/Biomedico'
import Eventos from 'components/Eventos/Eventos'
import Filosofia from 'components/Filosofia/Filosofia'

const useRouter = () => {
	const {
		ContactUs,
		Etic,
		GenomicsGenetics,
		Home,
		HospitalLogistics,
		InstrumentalStyrilation,
		MedicalDevices,
		MedicalSurgicalDevices,
		Medicines,
		Neuro,
		Orthopedicts,
		OurAllises,
		RoboticSurgery,
		WoundCare,
	} = useScreens()

	const router = createBrowserRouter([
		{
			path: '',
			element: <Home />,
		},
		{
			path: 'contactenos',
			element: <ContactUs />,
		},
		{
			path: 'codigo-linea-etica',
			element: <Etic />,
		},
		{
			path: 'nuestros-aliados',
			element: <OurAllises />,
		},
		{
			path: 'productos',
			element: <Productos />,
		},
		{
			path: 'historia',
			element: <Historia />,
		},
		{
			path: 'reconocimientos',
			element: <Reconocimientos />,
		},
		{
			path: 'responsabilidad',
			element: <Responsabilidad />,
		},
		{
			path: 'biomedico',
			element: <Biomedico />,
		},
		{
			path: 'eventos',
			element: <Eventos />,
		},
		{
			path: 'filosofia',
			element: <Filosofia />,
		},
		{
			path: 'productos',
			element: <Products />,
			children: [
				{
					path: 'ortopedia',
					element: <Orthopedicts />,
				},
				{
					path: 'cuidado-avanzado-de-heridas',
					element: <WoundCare />,
				},
				{
					path: 'instrumental-y-estirilizacion',
					element: <InstrumentalStyrilation />,
				},
				{
					path: 'neurointervencionismo',
					element: <Neuro />,
				},
				{
					path: 'genomica-y-genetica',
					element: <GenomicsGenetics />,
				},
				{
					path: 'logistica-hospitalaria',
					element: <HospitalLogistics />,
				},
				{
					path: 'dispositivos-medico-quirurgicos',
					element: <MedicalSurgicalDevices />,
				},
				{
					path: 'equipos-medicos',
					element: <MedicalDevices />,
				},
				{
					path: 'cirugia-robotica',
					element: <RoboticSurgery />,
				},
				{
					path: 'medicamentos',
					element: <Medicines />,
				},
			],
		},
	])

	return {
		router,
	}
}

export default useRouter
