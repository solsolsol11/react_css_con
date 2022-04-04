import "./App.css";
import FlexChild from "./flex/FlexChild";
import HorizontalFlex from "./flex/HorizontalFlex";
import VerticalFlex from "./flex/VerticalFlex";
import style from "./App.module.css";
import ItemBox from "./components/ItemBox";
import ItemBoxView from "./components/ItemBoxView";

function App(props) {
  const data = [
    {
      id: 1,
      sale: 130,
      price: 12000,
      name: "스포츠",
      image: "https://picsum.photos/id/237/150/150",
    },
    {
      id: 2,
      sale: 130,
      price: 12000,
      name: "스포츠",
      image: "https://picsum.photos/id/237/150/150",
    },
    {
      id: 3,
      sale: 130,
      price: 12000,
      name: "스포츠",
      image: "https://picsum.photos/id/237/150/150",
    },
    {
      id: 4,
      sale: 130,
      price: 12000,
      name: "스포츠",
      image: "https://picsum.photos/id/237/150/150",
    },
    {
      id: 5,
      sale: 130,
      price: 12000,
      name: "스포츠",
      image: "https://picsum.photos/id/237/150/150",
    },
    {
      id: 6,
      sale: 130,
      price: 12000,
      name: "스포츠",
      image: "https://picsum.photos/id/237/150/150",
    },
  ];
  return (
    <div className={style.container}>
      <HorizontalFlex>
        <VerticalFlex>
          <FlexChild>
            <ItemBoxView data={data[0]} template={"all"} />
            <ItemBoxView data={data[1]} template={"simple"} />
          </FlexChild>
        </VerticalFlex>
      </HorizontalFlex>
    </div>
  );
}

export default App;
