import React from 'react'
import SellerDetails from './components/SellerDetails'
import SellerDataEdit from './components/SellerDataEdit'
import { Row } from 'react-bootstrap'
import PageTItle from '@/components/PageTItle'
import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Seller Edit' }

const SellerEditPage = () => {
  return (
    <>
      <PageTItle title="SELLER EDIT" />
      <Row>
        <SellerDetails />
        <SellerDataEdit />
      </Row>
    </>
  )
}

export default SellerEditPage
