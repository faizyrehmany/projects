import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {

    const cards = [useAnimation(), useAnimation()];
    const images = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
        images[index].start({ scale: 0.9 }); // Squeeze effect
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
        images[index].start({ scale: 1 }); // Reset to normal
    };

    return (
        <div className="w-full py-20">
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <h1 className="text-7xl font-[ochi4] tracking-tight">Featured</h1>
            </div>

            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">

                    {/* FYDE Card */}
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative w-1/2 h-[75vh]"
                    >
                        <h1 className="absolute left-full flex text-[#CDEA68] overflow-hidden font-[ochi1] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-[10vw]">
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    key={index}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                        {/* Image with Squeeze Effect */}
                        <motion.div
                            className="card w-full h-full rounded-xl overflow-hidden"
                            initial={{ scale: 1 }}
                            animate={images[0]}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <img
                                className="w-full h-full object-cover"
                                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                                alt=""
                            />
                        </motion.div>
                    </motion.div>

                    {/* VISE Card */}
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer relative w-1/2 h-[75vh]"
                    >
                        <h1 className="absolute right-full flex text-[#CDEA68] overflow-hidden font-[ochi1] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-[10vw]">
                            {"VISE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    key={index}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                        {/* Image with Squeeze Effect */}
                        <motion.div
                            className="card w-full h-full rounded-xl overflow-hidden"
                            initial={{ scale: 1 }}
                            animate={images[1]}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <img
                                className="w-full h-full object-cover"
                                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                                alt=""
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

export default Featured;
