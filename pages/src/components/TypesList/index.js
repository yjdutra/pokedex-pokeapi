export const TypesList = ({ types }) => {
  const data = types.map((e) => {
    return  `📌 ${e} ` ;
  });
  return <div className="text-white fs-3">{data}</div>;
};
