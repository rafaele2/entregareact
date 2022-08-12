import {getProducts, getProductsByCategory} from '../../../asynmock'
import {useState ,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState ([])

  const {categoryId} = useParams ()
  


  useEffect(()=> {
    if (categoryId) {
      getProductsByCategory(categoryId).then (response =>{
        setProducts (response)
    })
    } else {
      getProducts().then (response =>{
        setProducts (response)
      })
    }
  }, [categoryId])
  
    return (
      <>
      <h1>{greeting}</h1>
      <div>
        {products.map(prod => <Link to= {`/detail/${prod.id}`} key={prod.id}>{prod.name}</Link>)}
      </div>
      </>
    )
  
    }

    export default ItemListContainer