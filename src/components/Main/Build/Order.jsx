import React from 'react';

const Order = (props) => {
  const { date, orderId, total, uuid, process } = props.element;
  return (
    <tr className='border-b border-slate-600 cursor-pointer hover:opacity-60 duration-200' onClick={() => {}}>
      <th className='text-sm text-white pb-4 text-left'>{ orderId }</th>
      <th className='text-sm text-white pb-4 text-left'>{ date }</th>
      <th className='text-sm text-white pb-4 text-left'>{ uuid }</th>
      <th className='text-sm text-white pb-4 text-left'>{ `$${total}` }</th>
      <th className='text-sm text-white pb-4 text-left'>{ process }</th>
    </tr>
  )
}

export default Order