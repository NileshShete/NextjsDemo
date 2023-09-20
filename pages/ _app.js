import Navbar from "../component/ Navbar"

function MyApp({ Component, pageProps }) {
    console.log('Component', Component)
    console.log('pageProps', pageProps)
    return (
        <>
            <Navbar/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp