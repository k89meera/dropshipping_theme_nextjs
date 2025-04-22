import React from 'react'
import OrderCartData from './components/OrderCartData'
import { Row } from 'react-bootstrap'
import OrderSummary from './components/OrderSummary'
import PageTItle from '@/components/PageTItle'
import { Metadata } from 'next'

export const metadata: Metadata = { title: ' Order Cart' }

const OrderCartPage = () => {
  return (
    <>
      <PageTItle title="ORDER CART" />
      <Row>
        <OrderCartData />
        <OrderSummary />
      </Row>
    </>
  )
}

export default OrderCartPage
