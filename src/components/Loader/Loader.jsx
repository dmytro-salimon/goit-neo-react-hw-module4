import { SyncLoader } from "react-spinners";

const Loader = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
    <SyncLoader color="#00BFFF" size={15} />
  </div>
);

export default Loader;
