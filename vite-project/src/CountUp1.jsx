import react from "react";
import CountUp from "react-countup";

const CountUpPage = () => {
    
    return(
        <div>
            <h1>
                <CountUp start={0} end={5000} duration={5} />
                <h1>testiong</h1>
            </h1>
        </div>
    );
};

export default CountUpPage;