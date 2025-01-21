import { useEffect, useState } from 'react';
import './App.css'

function App() {

 const[products,setproducts] = useState([]);
 const [page,setpage] = useState(1);
  
 const FetchProducts = async ()=>{
  const res = await fetch("https://dummyjson.com/products?limit=100")
  const data = await res.json()
  
  if (data && data.products) {
  setproducts(data.products);
  }
 };
 console.log(products);

 useEffect(()=>{
    FetchProducts()
 },[]);

 const SelectedPage =(marked) => {
  if(marked >=1 && marked<=products.length / 10 && marked !== page)
  setpage(marked);
 }
  return (
    <>
      {
        products.length>0 && <div className="products">
          {
            products.slice(page * 10 - 10, page * 10).map((item)=>{
              return (
                <span className="item__single" key={item.id}>
                  <img src= {item.thumbnail} alt="item.title" />
                  <span className= "item__title">{item.title}</span>
                </span>
              )
            })
          }
        </div>
      }
      {
        products.length>0 && <div className="pagination">
          <span onClick={()=>SelectedPage(page - 1)} 
            className={page > 1 ? "" : "pagination__disabled"}
            >
              Previous
              </span>
          {
          [...Array(products.length / 10)].map(( _, i)=>{
            return (
            <span
            className= {page===i+1 ? "Selected" : ""}
             onClick={()=>SelectedPage(i + 1)} key={i}>
              {i + 1}
              </span>
            );
          })}
          <span onClick={()=>SelectedPage(page + 1)} 
            className={page < products.length / 10 ? "" : "pagination__disabled"}
            >
              Next
              </span>
        </div>
      }
    </>
  )
}

export default App
