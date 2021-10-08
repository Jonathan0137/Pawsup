
import Footer from '../components/Footer';
import HeaderMenu from '../components/HeaderMenu';
import HomePageSearchService from '../components/HomePageSearchService';
import './HomePage.css';

const search = (e) =>{
    
}
const HomePage = () => {

    return (
        <>
            <HeaderMenu />
            <div className="homePage bg-light">
                <div className="container">
                    <div className = "row title-container text-center">
                        <div className = "title">
                            <h1>Temporay Harbor Warmth Like Home</h1>
                        </div>
                        <div className = "subtitle"> 
                            <h4>Best Pets Service platform, Solve your Every Worries</h4>
                        </div>
                    </div>
                    <HomePageSearchService search={search}/>
                </div>
            </div>
            <Footer/>
        </>
        
    );
}

export default HomePage;