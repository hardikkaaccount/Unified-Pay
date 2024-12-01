import styles from "../style";
import { discount, robot, card } from "../assets";
import GetStarted from "./GetStarted";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            CryptoCurrency meets <br className="sm:block hidden" />{" "}
            <span className="text-gradient">UPI Payments.</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link to={'/login'}> <GetStarted /></Link>
            
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Your all-in-one platform for seamless UPI and cryptocurrency transactions, empowering businesses to thrive effortlessly
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={card} alt="billing" className="w-[80%] h-[90%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
