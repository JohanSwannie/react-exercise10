import { useState, createContext, useContext } from "react";

const ColorContext = createContext({
  color: "lightgray",
  setColor: () => {},
});

const topScreenColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "black",
  "crimson",
  "pink",
  "olive",
  "lightseagreen",
  "peachpuff",
  "tomato",
  "lightgray",
];

const ColorPicker = () => {
  const { setColor } = useContext(ColorContext);
  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>Choose a color</h2>
      {topScreenColors.map((tsColor) => (
        <button
          onClick={() => setColor(tsColor)}
          key={tsColor}
          style={{
            backgroundColor: `${tsColor}`,
            width: "1.5rem",
            height: "1.5rem",
            marginRight: "5px",
            marginBottom: "1.5rem",
          }}
        />
      ))}
    </div>
  );
};

const Pixel = () => {
  const { color } = useContext(ColorContext);
  const [pixelColor, setPixelColor] = useState("lightgray");
  return (
    <div
      onClick={() => setPixelColor(color)}
      style={{
        height: "1rem",
        width: "1rem",
        backgroundColor: `${pixelColor}`,
        border: "1px solid #FFFFDF",
      }}
    />
  );
};

const Pixels = () => {
  const pixels = [];
  for (let i = 0; i < 3040; i++) {
    pixels.push(<Pixel />);
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(80, 1fr)",
        width: "90vw",
        margin: "auto",
        border: "5px solid gray",
      }}
    >
      {pixels}
    </div>
  );
};

const PixelArt = () => {
  const [color, setColor] = useState("");
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <ColorPicker />
      <Pixels />
    </ColorContext.Provider>
  );
};

export default PixelArt;
