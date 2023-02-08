const Trytr = ({ data }) => {
  return (
    <>
      <tr>
        {data &&
          data.map((item) => {
            return <td key={item.id}>{item.name}</td>;
          })}
      </tr>
    </>
  );
};
export default Trytr;
