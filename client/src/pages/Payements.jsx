import React, { useState } from 'react';
import Pay from '../components/Pay.jsx';
import Request from './Request';

const Payements = () => {
    const [active, setActive] = useState("upi");
    const [isWalletConnected, setWalletConnected] = useState(false);

    const toggleHandler = (paymentType) => {
        setActive(paymentType);
    };

    const connectWallet = async () => {
        if (typeof window.ethereum === "undefined") {
            alert("MetaMask is not installed!");
            return;
        }

        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected account:", accounts[0]);
            setWalletConnected(true);
        } catch (error) {
            console.error("Failed to connect wallet:", error);
        }
    };

    React.useEffect(() => {
        // Auto-connect wallet if possible
        if (typeof window.ethereum !== "undefined") {
            connectWallet();
        }
    }, []);

    return (
        <div className='flex flex-col bg-black w-full text-white border-t h-screen'>
            <div className='w-full flex px-8 py-4 gap-10 text-xl'>
                <div 
                    onClick={() => toggleHandler("upi")} 
                    className={`w-full flex justify-center border p-4 rounded-full ${active === "upi" ? 'bg-fadeBlue text-black' : 'bg-boxbg'} hover:bg-fadeBlue hover:text-black`}
                >
                    UPI
                </div>
                <div 
                    onClick={() => toggleHandler("metamask")} 
                    className={`w-full flex justify-center border p-4 rounded-full ${active === "metamask" ? 'bg-fadeBlue text-black' : 'bg-boxbg'} hover:bg-fadeBlue hover:text-black`}
                >
                    Requests
                </div>
            </div>
            <div className='h-full flex justify-center'>
                {active === "upi" ? (
                    <>
                        {console.log("Pay component is active")}
                        <Pay />
                    </>
                ) : null}

                {active === "metamask" && isWalletConnected ? (
                    <Request />
                ) : (
                    <div>Please connect your wallet to proceed.</div>
                )}
            </div>
        </div>
    );
};
export default Payements;
