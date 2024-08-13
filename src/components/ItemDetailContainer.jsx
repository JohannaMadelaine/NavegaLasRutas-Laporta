import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase/FirebaseConfig";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "Productos", id);
    getDoc(docRef)
      .then((resp) => {
        if (resp.exists()) {
          setProductos({ ...resp.data(), id: resp.id });
        } else {
          console.error("Producto no encontrado");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el documento:", error);
      });
  }, [id]);

  return (
    <div>
      <ItemDetail {...productos} />
    </div>
  );
};

export default ItemDetailContainer;
