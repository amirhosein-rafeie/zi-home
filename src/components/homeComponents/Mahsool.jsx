const Mahsool = ({ price, title, image }) => {
  return (
    <div className="min-w-[80%] md:min-w-[40%]">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-gray-500/30"
      ></div>
      <div>{title}</div>
      <div>{price}</div>
    </div>
  );
};

export default Mahsool;
