import { useState, useEffect } from "react";
import api from "../../utils/api";
import { useParams } from 'react-router-dom';
import { FaFire } from "react-icons/fa";
import RestaurantProductCard from "../RestaurantProductCard";
import Error from "../Error";
import Loader from "../Loader";

const RestaurantProducts = () => {

  // url deki restarant ıd sine eriş
const {id} = useParams();

// bileşen içerisine verileri yönetebilmek için usestate kurulumu yap

const [products, setProducts] = useState([]);
const [error, setError] = useState(null);

  // products endpointine istek atarak ilgili restaurant a ait verileri al

  useEffect(() => {
    api.get(`products?restaurantId=${id}`)
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      setError(err.message);
    });
  }, []);

  return (
    <div>
      {error ? ( <Error/>
     ) : !products ? (
      <Loader/>
     ) : products.length === 0 ? (<p className="p-3 text-2xl font-semibold">Bu restaurant'a ait ürün bulunamadı</p>) :
     (
      <div>
        <h2 className="flex gap-2 text-2xl">
          <FaFire className="text-red-500"/>
          Popüler</h2>
        <p className="text-gray-600">
          Restaurant en çok tercih edilen ürünleri 
          </p>

          <div className="grid lg:grid-cols-2 gap-5 mt-5">
            {products?.map((item) => (
              <RestaurantProductCard key={item.id} item={item} />
            ))}
          </div>
      </div>
     )}
    </div>
  )
}

export default RestaurantProducts;
