import React from 'react'
import { Flowbite } from 'flowbite-react'
import customTheme from 'customTheme'
import useRouter from 'routes'
import useGeneral from 'hooks/general.hook'
import Video from 'components/Video/Video'
import { NavbarMovil } from 'componentsmovil/NavbarMovil/NavbarMovil'
import { RouterProvider } from 'react-router-dom'
import FooterMobile from 'componentsmovil/Footer/Video'
import FixedContact from 'components/fixed-components/FixedContact'
import FixedSocialNetworks from 'components/fixed-components/FixedSocialNetworks'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'

const App: React.FC = (): JSX.Element => {
	const { router } = useRouter()

	/** Hooks */
	const { width } = useGeneral()

	const [showVideoPopup, setShowVideoPopup] = React.useState<boolean>(true)

	return (
		<React.Suspense fallback={null}>
			<Flowbite theme={{ theme: customTheme }}>
				{showVideoPopup && window.location.pathname === '/' ? (
					<Video onCloseVideo={() => setShowVideoPopup(false)} />
				) : (
					<React.Fragment>
						{width >= 768 ? <Navbar /> : <NavbarMovil />}
						<main className="mt-[5.4%]">
							<RouterProvider router={router} />
							{width >= 768 ? <Footer /> : <FooterMobile />}
						</main>
						{window.location.pathname !== '/contactenos' && (
							<FixedContact />
						)}
						<FixedSocialNetworks />
					</React.Fragment>
				)}
			</Flowbite>
		</React.Suspense>
	)
}

export default App
