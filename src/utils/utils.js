export const  getproductsFromLocalStorage = ()=> {
    const data =  localStorage.getItem("products")
     return (data.length > 0) ? (JSON.parse(data)) : [];
 };