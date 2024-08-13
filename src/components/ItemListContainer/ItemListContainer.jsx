import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import Loader from "../Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    const productosRef = collection(db, "Productos");

    const q = query(productosRef, where("category", "==", category));

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);

  return (
    <>
      {productos.length === 0 ? (
        <Loader />
      ) : (
        <>
          <ItemList productos={productos} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
