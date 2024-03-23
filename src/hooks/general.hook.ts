import React from 'react'

const useGeneral = () => {
    /** Variables */
    const location = window.location

    /** States */
    const [width, setWidth] = React.useState<number>(window.innerWidth)
    const [height, setHeight] = React.useState<string>("100vh")
    const [showVideo, setShowVideo] = React.useState<boolean>(false)

    /** Effects */
    React.useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))

        return () => window.removeEventListener('resize', () => setWidth(window.innerWidth))
    }, [])

    React.useEffect(() => {
        const resizeImage = () => {
          if (window.innerWidth > 1024 && window.innerHeight > 1080) {
            setHeight("100%");
          } else if (window.innerWidth < 1024 && window.innerHeight > 900) {
            setHeight("100%");
          } else if (window.innerHeight > 800) {
            setHeight("110vh");
          } else if (window.innerHeight < 700) {
            setHeight("100%");
          } else {
            setHeight("100vh");
          }
        };
        window.addEventListener("resize", resizeImage);
    
        resizeImage();
    
        return () => window.removeEventListener("resize", resizeImage);
      }, []);
    

    React.useEffect(() => {
        if (location.pathname === '/') setShowVideo(true)
        else setShowVideo(false)
    }, [location])

    return { width, height, showVideo }
}

export default useGeneral
