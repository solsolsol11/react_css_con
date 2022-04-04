import style from "./ItemBox.module.css";

function ItemBox(props) {
  const { imgVisible, saleVisible, priceVisible, productNameVisible, data } =
    props;
  return (
    <div className={style.boxItem}>
      {imgVisible ? <img src={data.image} /> : null}
      {saleVisible ? <p>{data.sale}</p> : null}
      {priceVisible ? <p className={style.priceText}>{data.price}</p> : null}
      {productNameVisible ? <p>{data.name}</p> : null}
    </div>
  );
}

export default ItemBox;
