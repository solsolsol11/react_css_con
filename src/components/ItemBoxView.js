import ItemBox from "./ItemBox";

function ItemBoxView(props) {
  const template = props.template;
  return (
    <div>
      {
        {
          simple: <ItemBox data={props.data} imgVisible={true} />,
          all: (
            <ItemBox
              data={props.data}
              priceVisible={true}
              productNameVisile={true}
              imgVisible={true}
            />
          ),
        }[template]
      }
    </div>
  );
}

export default ItemBoxView;
