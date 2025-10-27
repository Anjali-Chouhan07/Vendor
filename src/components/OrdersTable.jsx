import React from 'react';


const orders = [
{ id: '#1001', customer: 'John Doe', product: 'Product A', status: 'Delivered', amount: '$120' },
{ id: '#1002', customer: 'Jane Smith', product: 'Product B', status: 'Pending', amount: '$80' },
{ id: '#1003', customer: 'Bob Lee', product: 'Product C', status: 'Cancelled', amount: '$50' },
{ id: '#1004', customer: 'Mary Jane', product: 'Product D', status: 'Delivered', amount: '$220' },
];


function statusClass(s){
if(s === 'Delivered') return 'delivered';
if(s === 'Pending') return 'pending';
return 'cancelled';
}


export default function OrdersTable(){
return (
<div className="table-card">
<h3>Recent Orders</h3>
<div className="table-wrap">
<table className="orders-table">
<thead>
<tr>
<th>Order ID</th>
<th>Customer</th>
<th>Product</th>
<th>Status</th>
<th>Amount</th>
</tr>
</thead>
<tbody>
{orders.map(o => (
<tr key={o.id}>
<td>{o.id}</td>
<td>{o.customer}</td>
<td>{o.product}</td>
<td><span className={`status ${statusClass(o.status)}`}>{o.status}</span></td>
<td>{o.amount}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}

