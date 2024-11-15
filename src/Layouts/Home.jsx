import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftSide from "../components/LeftSide";
import Navbar from "../components/Navbar";
import Center from "../components/Center";
import RightSide from "../components/RightSide";

const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
                <section className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </section>
            </header>
            <main className="grid grid-cols-12 w-11/12 mx-auto py-10">
                <section className="col-span-3">
                    <LeftSide></LeftSide>
                </section>
                <section className="col-span-6">
                    <Center></Center>
                </section>
                <section className="col-span-3">
                    <RightSide></RightSide>
                </section>
            </main>
        </div>
    );
};

export default Home;