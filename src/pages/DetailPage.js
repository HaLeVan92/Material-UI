import React from 'react'
import books from '../books.json';
import { useParams } from 'react-router';

function DetailPage() {
    const params = useParams()
  return (
    <div>
      <h1>Detail Page {params.id}</h1>
    </div>
  )
}

export default DetailPage
