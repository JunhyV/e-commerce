import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useFilters = (type) => {
  const store = useSelector(state => state.store.onStore);
  const [data, setData] = useState([])
  const category = type;

  useEffect(() => {
    const filterData = store.filter(product => product.title === category);
    setData(filterData); 
  }, [])

  const changeData = (value) => {
    const filter = store.filter(product => product.price <= value);
    const filterProducts = filter.filter(product => product.title === category);
    setData(filterProducts)
  }
  
  const orderByCheapest= () => {
    const filter = store.filter(product => product.title === category);
    const order = filter.sort((a, b)=> a.price - b.price)
    setData(order);
  }
  
  const orderByExpensive= () => {
    const filter = store.filter(product => product.title === category);
    const order = filter.sort((a, b)=> b.price - a.price)
    setData(order);
  }
  
  const orderDefault= () => {
    const filter = store.filter(product => product.title === category);
    setData(filter);
  }

  return {
    store,
    data, 
    orderByCheapest,
    orderByExpensive,
    orderDefault,
    changeData,
  }
}

export default useFilters;