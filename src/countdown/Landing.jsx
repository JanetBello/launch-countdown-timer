import CountdownCard from "./CountdownCard"
import Footer from "./Footer"

const Landing = () => {
    return(
        <div className="bg-stars h-screen dark-saturated-blue p-2 flex flex-col items-center">

            <h2 className="uppercase text-white font-bold text-[1.5rem] mt-24">We are launching soon</h2>
            <section className="flex gap-[100px] items-center justify-center py-[60px]">
                <CountdownCard labelName={"Days"} labelValue={'05'}/>
                <CountdownCard labelName={"Hours"} labelValue={"23"}/>
                <CountdownCard labelName={"Minutes"} labelValue={"43"}/>
                <CountdownCard labelName={"Seconds"} labelValue={"60"}/>
            </section>
            <Footer/>
        </div>
    )
}

export default Landing