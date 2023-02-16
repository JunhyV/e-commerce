import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useFilters = (type) => {
  const store = useSelector(state => state.store.storeState.onStore);
  const [data, setData] = useState([])
  const category = type;
  const filter = store.filter(product => product.title === category);

  useEffect(() => {
    const filterData = store.filter(product => product.title === category);
    setData(filterData); 
  }, [])

  const changeData = (value) => {
    const filterByPrice = store.filter(product => product.price <= value);
    const filterProducts = filterByPrice.filter(product => product.title === category);
    setData(filterProducts)
    return filterByPrice;
  }
  
  const orderByCheapest= () => {
    const order = filter.sort((a, b)=> a.price - b.price)
    setData(order);
  }
  
  const orderByExpensive= () => {
    const order = filter.sort((a, b)=> b.price - a.price)
    setData(order);
  }
  
  const orderDefault= () => {
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