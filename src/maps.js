import { IoLocationSharp } from "react-icons/io5";

function maps() {
  return (
    <>
      <div
        className="location"
        style={{
          fontSize: "20px",
          marginTop: "100px",
          marginLeft: "170px",
        }}
      >
        <IoLocationSharp
          style={{ color: "rgb(163, 56, 56)", fontSize: "35px" }}
        />
        The Mint Museum of Medicinal Plants
      </div>
      <div
        style={{
          width: "600px",
          height: "400px",
          marginLeft: "600px",
          marginTop: "-50px",
        }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2310906.0646291035!2d5.471057983033913!3d44.95509965293407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47881b9d2e38732d%3A0x1a759e43c104ed8f!2sthe%20Mint%20Museum%20of%20Medicinal%20Plants!5e1!3m2!1sen!2sro!4v1730817646890!5m2!1sen!2sro"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default maps;
