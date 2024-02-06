import { Component } from "react";
import { Parallax } from "react-scroll-parallax";

export default class ParallaxExample extends Component {
  render() {
    return (
      <div>
 <Parallax speed={-10}>
     <p></p>
      </Parallax>
      </div>
    );
  }
}