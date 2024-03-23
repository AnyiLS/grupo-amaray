import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
// Styles
import 'assets/css/index.css'

const root: HTMLElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(<React.StrictMode><App/></React.StrictMode>)

reportWebVitals()