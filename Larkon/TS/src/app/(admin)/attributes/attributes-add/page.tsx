import PageTItle from '@/components/PageTItle'
import EditForm from './components/EditForm'
import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Attributes Add' }

const AttributesAddPage = () => {
  return (
    <div>
      <PageTItle title="ATTRIBUTE ADD" />
      <EditForm />
    </div>
  )
}

export default AttributesAddPage
