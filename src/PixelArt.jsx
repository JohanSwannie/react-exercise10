import { useState, createContext, useContext } from "react";

const ColorContext = createContext({
  color: "lightgray",
  setColor: () => {},
});

const ColorPicker = () => {
  const { setColor } = useContext(ColorContext);
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
        height: "2.57rem",
        width: "2.75rem",
        backgroundColor: `${pixelColor}`,
        border: "1px solid #FFFFDF",
      }}
    />
  );
};

const Pixels = () => {
  const pixels = [];
  for (let i = 0; i < 450; i++) {
    pixels.push(<Pixel />);
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(30, 1fr)",
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
  const [color, setColor] = useState("lightgray");
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <ColorPicker />
      <Pixels />
    </ColorContext.Provider>
  );
};

export default PixelArt;
