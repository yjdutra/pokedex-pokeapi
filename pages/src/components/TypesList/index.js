export const TypesList = ({ types }) => {
   
     types.is_baby === false ?
      const is_baby = "❌" : "✅";

      types.is_legendary === false ?
      is_legendary = "❌" : "✅";

      types.is_mythical === false ?
      is_mythical = "❌" : "✅";

  return (
    <>
      <div className="text-whit  e fs-3"> {` Baby : ${is_baby}`}</div>
      <div className="text-white fs-3"> {` Legendary : ${is_legendary}`}</div>
      <div className="text-white fs-3">{` Mythical ${is_mythical}`}</div>
    </>
  );
};
