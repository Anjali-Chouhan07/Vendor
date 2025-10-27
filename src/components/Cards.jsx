import React from 'react';


const data = [
{ title: 'Orders Received', value: 120 },
{ title: 'Out of Stock', value: 8 },
{ title: 'Revenue', value: '$5,400' },
{ title: 'Top Products', value: 15 },
];


export default function Cards(){
return (
<section className="cards">
{data.map((c, idx) => (
<article key={idx} className="card">
<div className="card-meta">
<h3>{c.title}</h3>
<p className="card-value">{c.value}</p>
</div>
<div className="card-deco" aria-hidden />
</article>
))}
</section>
);
}