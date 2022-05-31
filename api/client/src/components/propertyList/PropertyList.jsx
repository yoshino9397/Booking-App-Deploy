import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading } = useFetch("/hotels/countByType");
  const images = [
    "https://live.staticflickr.com/65535/52033332526_41ecf5400d_k.jpg",
    "https://live.staticflickr.com/65535/52033332296_a41854a9d6_k.jpg",
    "https://live.staticflickr.com/65535/52032287302_6429af739f_k.jpg",
    "https://live.staticflickr.com/65535/52033332566_5aac6adc11_k.jpg",
    "https://live.staticflickr.com/65535/52032287812_a47f64726b_k.jpg",
    "https://live.staticflickr.com/65535/52032287902_c315b17279_k.jpg",
  ];

  return (
    <div className="pList">
      {loading ? (
        "Loading...."
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i} style={{ padding: "0 5px 0 10px" }}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
