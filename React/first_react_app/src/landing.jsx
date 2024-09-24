import Button from "./button";
import watch from "./assets/watch.png";
function Landing(){
    return(
        <section className="h-[85vh] bg-black flex items-center justify-between px-[200px]">
            <div className="flex flex-col justify-center items-start gap-4">
                <h1 className="text-6xl font-semibold">Smartwatch <br />Fitbit Ionic.</h1>
                <p className="text-sm">Altimeter, Gyroscope, GPS, Heart Rate Monitor</p>
                <Button/>
            </div>
            <img src={watch} alt="Fitbit" />
        </section>
    )
}
export default Landing;