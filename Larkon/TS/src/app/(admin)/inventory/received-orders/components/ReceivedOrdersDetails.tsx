import React from 'react'
import { receivedOrderData, ReceivedOrderType } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap'

const ReceivedOrderData = ({ title, icon, item }: ReceivedOrderType) => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <CardTitle as={'h4'} className="mb-2">
              {title}
            </CardTitle>
            <p className="text-muted fw-medium fs-22 mb-0">{item}</p>
          </div>
          <div>
            <div className="avatar-md bg-primary bg-opacity-10 rounded flex-centered">
              <IconifyIcon width={32} height={32} icon={icon} className="fs-32 text-primary" />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

const ReceivedOrdersDetails = () => {
  return (
    <Row>
      {receivedOrderData.map((item, idx) => (
        <Col md={6} xl={3} key={idx}>
          <ReceivedOrderData {...item} />
        </Col>
      ))}
    </Row>
  )
}

export default ReceivedOrdersDetails
