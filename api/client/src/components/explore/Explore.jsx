import "./explore.css";

const Explore = () => {
  return (
    <div className="exploreList">
      <div className="eListItem" style={{ paddingLeft: "10px" }}>
        <img
          src="https://live.staticflickr.com/65535/52033832420_7bb6b2fc27_k.jpg"
          alt=""
          className="eListImg"
        />
        <div className="eListTitles">
          <h1>Sapporo</h1>
          <h2>1200 hotels</h2>
        </div>
      </div>
      <div className="eListItem">
        <img
          src="https://live.staticflickr.com/65535/52032267727_f6cb97623f_k.jpg"
          alt=""
          className="eListImg"
        />
        <div className="eListTitles">
          <h1>Tokyo</h1>
          <h2>4000 hotels</h2>
        </div>
      </div>
      <div className="eListItem">
        <img
          src="https://live.staticflickr.com/65535/52032267802_65f3194947_k.jpg"
          alt=""
          className="eListImg"
        />
        <div className="eListTitles">
          <h1>Kyoto</h1>
          <h2>3000 hotels</h2>
        </div>
      </div>
      <div className="eListItem">
        <img
          src="https://live.staticflickr.com/65535/52033566569_e6509d239d_k.jpg"
          alt=""
          className="eListImg"
        />
        <div className="eListTitles">
          <h1>Nagano</h1>
          <h2>1980 hotels</h2>
        </div>
      </div>
      <div className="eListItem">
        <img
          src="https://live.staticflickr.com/65535/52033314381_1396142504_k.jpg"
          alt=""
          className="eListImg"
        />
        <div className="eListTitles">
          <h1>Kumamoto</h1>
          <h2>1000 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default Explore;
