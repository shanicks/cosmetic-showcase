import { useEffect, useRef } from "react";
import { Button } from "./components/ui/button";
import "./App.css";

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      const viewer = document.querySelector("spline-viewer");
      const badge = viewer?.shadowRoot?.querySelector("a");
      if (badge) badge.style.display = "none";
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero relative h-full w-full z-10 flex flex-col items-center justify-center">
        <div className="nav absolute top-1 left-1 z-10 text-italic text-xl text-bold text-[#994C3C]">
          Luxury Cosmetics
        </div>
        <div className="inter-font text-[90px] underline font-bold text-white z-10 relative item-center">
          Shaan.web3d
        </div>
        <Button
          onClick={() => console.log("clicked")}
          className="text-white relative z-10 top-0 bg-[#994C3C]"
        >
          Hire Me!
        </Button>
      </section>
      <section className="min-h-screen w-full flex items-center justify-center bg-blue-600">
        <div className="max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Mid Section Title</h2>
          <p className="text-lg text-gray-600">
            This section takes the full viewport height and scrolls naturally
            below the hero.
          </p>
          {/* <p className="relative z-10 bg-contain bg-red-600"> */}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            doloremque in harum earum nostrum, obcaecati nisi ducimus, saepe
            nesciunt quia accusantium ab consequuntur blanditiis necessitatibus.
            Debitis soluta quae est atque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia doloremque in harum earum
            nostrum, obcaecati nisi ducimus, saepe nesciunt quia accusantium ab
            consequuntur blanditiis necessitatibus. Debitis soluta quae est
            atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia doloremque in harum earum nostrum, obcaecati nisi ducimus,
            saepe nesciunt quia accusantium ab consequuntur blanditiis
            necessitatibus. Debitis soluta quae est atque. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia doloremque in harum
            earum nostrum, obcaecati nisi ducimus, saepe nesciunt quia
            accusantium ab consequuntur blanditiis necessitatibus. Debitis
            soluta quae est atque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia doloremque in harum earum nostrum,
            obcaecati nisi ducimus, saepe nesciunt quia accusantium ab
            consequuntur blanditiis necessitatibus. Debitis soluta quae est
            atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia doloremque in harum earum nostrum, obcaecati nisi ducimus,
            saepe nesciunt quia accusantium ab consequuntur blanditiis
            necessitatibus. Debitis soluta quae est atque. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia doloremque in harum
            earum nostrum, obcaecati nisi ducimus, saepe nesciunt quia
            accusantium ab consequuntur blanditiis necessitatibus. Debitis
            soluta quae est atque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia doloremque in harum earum nostrum,
            obcaecati nisi ducimus, saepe nesciunt quia accusantium ab
            consequuntur blanditiis necessitatibus. Debitis soluta quae est
            atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia doloremque in harum earum nostrum, obcaecati nisi ducimus,
            saepe nesciunt quia accusantium ab consequuntur blanditiis
            necessitatibus. Debitis soluta quae est atque. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia doloremque in harum
            earum nostrum, obcaecati nisi ducimus, saepe nesciunt quia
            accusantium ab consequuntur blanditiis necessitatibus. Debitis
            soluta quae est atque.
          </p> */}
        </div>
      </section>
    </>
  );
}

export default App;
