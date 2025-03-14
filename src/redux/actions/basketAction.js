import { v4 } from "uuid";
import api from "../../utils/api";
import actionTypes from "../actionTypes";

// sepetteki verileri getir
const getCart = () => {
    return(dispatch) => {
        // yükleme
        dispatch({type: actionTypes.CART_LOADİNG});

        // apiye istek at
        api.get(`/cart`).then((res) => dispatch({type:actionTypes.CART_SUCCESS,payload:res.data})
    ).catch((err) => dispatch({type:actionTypes.CART_ERROR,payload:err}));
    };
};

// sepete ürün ekle
const createItem = (item) => {
    return (dispatch) => {
        // sepete eklenecek ürün için bir obje oluştur
        const newItem = {
            id: v4(),
            productId: item.id,
            title: item.title,
            price: item.price,
            photo: item.photo,
            amount: 1,
        };

        // apiye istek at 
        api.post('/cart',newItem).then(() => 
            // istek başarı olursa reducera haber ver ve state i güncelle
            dispatch({type: actionTypes.CREATE_ITEM, payload: newItem})
        );
    };
};

//sepetteki ürünü güncelle
const updateItem = (id,newAmount) => {
    return (dispatch) => {
        api.patch(`/cart/${id}`,{amount: newAmount})
        .then((res) => 
        dispatch({type: actionTypes.UPDATE_ITEM, payload: res.data})
    );
    };
};

// sepetteki ürünü sil
const deleteItem = (id) => {
    return (dispatch) => {
        api.delete(`cart/${id}`).then(()=> dispatch({type: actionTypes.DELETE_ITEM, payload: id}));
    };
};



export {getCart,createItem,deleteItem,updateItem}