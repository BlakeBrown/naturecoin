import Head from "next/head";
import {
  faInstagram,
  faTwitter,
  faDiscord,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nature Coin</title>
      </Head>
      <div class="container">
        <h1>Nature Coin</h1>
        <p>The climate change DAO. Coming soon to the Cardano blockchain.</p>
        <br />
        <br />
        <a
          href="https://twitter.com/NatureCoinDAO"
          target="_blank"
          className="secondary-text"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="animate-hover font-awesome"
          />
        </a>
        <a
          href="https://discord.gg/njFRb6nz6N"
          target="_blank"
          className="secondary-text"
        >
          <FontAwesomeIcon
            icon={faDiscord}
            className="animate-hover font-awesome"
          />
        </a>
        <a
          href="https://www.instagram.com/NatureCoinDAO/"
          target="_blank"
          className="secondary-text"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="animate-hover font-awesome"
          />
        </a>
        <a
          href="https://www.reddit.com/r/naturecoin/"
          target="_blank"
          className="secondary-text"
        >
          <FontAwesomeIcon
            icon={faReddit}
            className="animate-hover font-awesome"
          />
        </a>
      </div>
    </div>
  );
}
