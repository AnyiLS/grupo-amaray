import React from 'react'

const ContactUs: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./ContactUs'));
const Etic: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./Etic'));
const GenomicsGenetics: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./GenomicsGenetics'));
const Home: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./Home'));
const HospitalLogistics: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./HospitalLogistics'));
const InstrumentalStyrilation: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./InstrumentalStyrilation'))
const MedicalDevices: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./MedicalDevices'))
const MedicalSurgicalDevices: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./MedicalSurgicalDevices'))
const Medicines: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./Medicines'))
const Neuro: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./Neuro'))
const Orthopedicts: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./Orthopedics'))
const OurAllises: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./OurAllises'))
const RoboticSurgery: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./RoboticSurgery'))
const WoundCare: React.LazyExoticComponent<React.FC> = React.lazy(async () => await import('./WoundCare'))

const useScreens = () => {
    return {
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
        WoundCare
    }
}

export default useScreens;