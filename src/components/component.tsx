import { Component } from "react";
// import { Parallax } from "react-scroll-parallax";

export default class ParallaxExample extends Component {
  render() {
    return (
        <>
            <div
                className="relative z-0 min-h-screen flex flex-col justify-center items-center bg-sky1 bg-fixed bg-no-repeat bg-cover bg-center animate-fadeinslow">
                <h1 className="font-black text-6xl animate-fadeinslow">I am an undergrad</h1>
                <p className="font-black text-2xl animate-fadeinslowest">studying Computer Engineering at NYU Tandon</p>
            </div>


            <div className="p-10">
                <h2 className="font-bold text-4xl">I am looking for an internship for summer 2024</h2>
                <p>I use python and c++, and have been dabbing in both front and back end</p>
            </div>

            <div className="bg-sunset1 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed animate-fadeinslow"></div>

            <div className="p-10">
                <h2 className="font-bold text-4xl">I am a tutor and an office assistant for my college</h2>
                <p>and I don't know how wordy I should make each section of this website, anyways, feel free to email me: jr5887@nyu.edu</p>
            </div>


            {/*<div className="bg-sunset1 min-h-screen bg-fixed bg-no-repeat bg-cover"></div>*/}
        </>
    )
        ;
  }
}