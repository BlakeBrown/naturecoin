import Head from "next/head";
import {
  faInstagram,
  faTwitter,
  faDiscord,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WIP() {
  return (
    <div className="height-100">
      <Head>
        <title>The Climate Change DAO | Nature Coin</title>
      </Head>
      <Navbar />
      <section id="section-artwork">
        <img id="homepage-artwork" src="artwork.png"></img>
        <div className="container-wip text-align-left">
          <h1 className="color-primary margin-0">What's your ideal future?</h1>
          <p className="color-secondary">
            Let’s turn it into reality. Nature Coin is the climate change DAO
            <br />
            that supports and funds transformative environmental projects.
          </p>
        </div>
      </section>
      <section>
        <h1 className="color-primary" style={{ marginTop: 100 }}>
          Invest in a global <br /> environmental hive mind
        </h1>
        <p className="color-secondary" style={{ marginTop: 60 }}>
          The secret to tackling climate change lies in effective human to human
          collaboration.
          <br />
          <br />
          Our network incentivizes this by aligning collective climate action
          with profit.
        </p>
      </section>
    </div>
  );
}
