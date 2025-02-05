import { motion } from "framer-motion";
import React from "react";

function Cards() {
    return (
        <motion.div
            className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5 sticky top-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="cardcontainer h-[50vh] w-1/2">
                <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
                        &copy;2019-2022
                    </button>
                </div>
            </div>

            <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
                <div className="card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
                        RATING 5.0 ON CLUTCH
                    </button>
                </div>
                <div className="card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
                        BUSINESS BOOTCAMP ALUMNI
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default Cards;
