const Heading = ({ heading, totalProducts }) => {
  return (
    <nav>
      <h1>
        {heading}({totalProducts}) - {Date.now()}
      </h1>
    </nav>
  );
};

export default Heading;
