import React, { useEffect, useState } from "react";
//compoenentes
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
//Firebase
import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase/firebase";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { Id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      const docs = [];
      const datos = await getDocs(collection(db, "productos"));
      datos.forEach((documento) => {
        docs.push({ ...documento.data() });
        Id && setData(docs.filter((e) => e.id === Id));
      });
    };
    obtenerDatos();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [Id]);

  return <>{isLoading ? <Loading /> : <ItemDetail Item={data} />}</>;
};

export default ItemDetailContainer;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// //compoenentes
// import ItemDetail from "../ItemDetail/ItemDetail";
// import Loading from "../Loading/Loading";

// const ItemDetailContainer = ({ match }) => {
//   let id = match.params.id;

//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
//       setData(res.data)
//     );
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, [id]);

//   return <>{isLoading ? <Loading /> : <ItemDetail Item={data} />}</>;
// };

// export default ItemDetailContainer;
