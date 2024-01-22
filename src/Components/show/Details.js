import React from 'react'

export default function Details({status, network, premiered}) {
  return (
    <div>
        <p>Status: <b>{status}</b></p>
        <p>Premiered {premiered} on {network ? network.name : 'Not known'}</p>
    </div>
  )
}
