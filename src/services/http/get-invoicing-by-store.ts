import { api } from '@/services/api'

interface GetInvoicingByStoreProps {
  token: string
  storeId: string
}

export async function getInvoicingByStore({
  token,
  storeId,
}: GetInvoicingByStoreProps) {
  const response = await api.get(`/invoicings/${storeId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
