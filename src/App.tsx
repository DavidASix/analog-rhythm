import React, { useState } from "react";
import Vinyl from "./components/Vinyl/vinyl";
import "./App.css";

const colors = ["#EA526F", "#23B5D3", "#8A800F", "#47A025"] as const;
type Color = (typeof colors)[number];

function App() {
  const [spinning, setSpinning] = useState<boolean>(true);
  const [color, setColor] = useState<Color>(colors[0]);
  const [text, setText] = useState<string>("Old School Cool");
  return (
    <main className="page dotted">
      <div className="content">
        <section className="hero">
          <div className="hero-left">
            <h1 className="title">Analog Rhythm</h1>
            <p>
              Analog Rhythm is a artisan project I'm working on to up-cycle old
              vinyl records into interesting attractive art pieces. Currently I
              have created clocks, shelves, and stands, with more ideas on the
              way! If you're interested in purchasing an Analog Rhythm piece,
              contact me at{" "}
              <a href="mailto:analogrhythm@davidasix.com">
                AnalogRhythm@davidasix.com
              </a>
            </p>
            <p>
              This website is built with React and TypeScript. The spinning
              record is a collection of SVG's being rotated with CSS. Utilize
              the controls below it to change the color and add some text!
              Analog Rhythm can print and record sticker you'd like making your
              new art piece uniquely yours!
            </p>
          </div>
          <div className="hero-right">
            <div className="record-sizer">
              <Vinyl
                color={color}
                containerSize={"100%"}
                spinning={spinning}
                text={text}
                onMouseEnter={() => setSpinning(false)}
                onMouseLeave={() => setSpinning(true)}
              />
            </div>
            <input
              type="text"
              aria-label="Record Label Text Input"
              placeholder="Label your record!"
              value={text}
              maxLength={20}
              onChange={(e) => setText(e.target.value)}
              className="text-input"
            />
            <div className="color-palette-row">
              {colors.map((c, i) => (
                <button
                  key={i}
                  className="color-button"
                  aria-label={`Switch record to color hex ${c}`}
                  style={{ backgroundColor: c }}
                  onClick={() => setColor(c)}
                ></button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
