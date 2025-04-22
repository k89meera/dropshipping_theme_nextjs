import PageTItle from '@/components/PageTItle'
import StockData from './components/StockData'
import WarehouseList from './components/WarehouseList'
import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Warehouse' }

const WarehousePage = () => {
  return (
    <>
      <PageTItle title="WAREHOUSE LIST" />
      <StockData />
      <WarehouseList />
    </>
  )
}

export default WarehousePage
