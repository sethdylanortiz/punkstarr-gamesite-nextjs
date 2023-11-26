import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.css";

const Punkstarr = ({children}) => {
    return (
        <div className = {styles.container}>
            <Navbar/>

            {children}
            
            <Footer/>
        </div>
    )
}

export default Punkstarr;