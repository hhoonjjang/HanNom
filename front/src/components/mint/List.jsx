export const List = ({ list }) => {
  // const [list, setList] = useState<Array<nftData>>([]);
  console.log(list);
  return (
    <>
      <div>마이페이지 팔기전 내가 민트(등록)한 토큰들</div>
      <ul>
        {list.map((item, idx) => (
          <Item item={item} key={`item-${idx}`} />
        ))}
      </ul>
    </>
  );
};

const Item = ({ item: { name, description, image } }) => {
  return (
    <li>
      <div>{name}</div>
      <div>{description}</div>
      <div>
        <img src={image} />
      </div>
      <button>sell</button>
    </li>
  );
};
