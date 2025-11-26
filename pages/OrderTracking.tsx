import React, { useState } from 'react';
import { Header } from '../components/Layout';
import { Order } from '../types';

const MOCK_ORDERS: Order[] = [
  {
    id: 'AI-12345',
    status: 'In Production',
    date: 'August 15, 2024',
    estimatedDelivery: 'August 25, 2024',
    title: 'Cosmic Dance',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD56oabj1kSgT3f8GTvRq-pPqKW-xnPIoRxXvvGqLKELOQ20OIzG3gcxErofimh-X_u5TV5L8IVsNT7c3gg3mTKThG8NQZy2RIS8ewlmpba-SmBPC0sx2J9m4rwHbVA8JvVfWlNs2JCbJkMIisMnQLpfqe2QIO1wAPwNqx-E8or41omSkou7WQnrheFyV3fmMDefTItDpcjizPudY1ewhp3UuW7ccqwC4XKuY34ZvekK1WTcKzUWNUHWyn-oa1TRgf-pPcI7hT1yFk',
  },
  {
    id: 'AI-11029',
    status: 'Delivered',
    date: 'July 10, 2024',
    estimatedDelivery: 'July 20, 2024',
    title: 'Urban Sunset',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2cNfBZbrYA0rRE4Ewz5UouMXOCJjSnZh57gaUpgGvh9X38--CXSBiOOAeU8bo-eDeXWE_2-lbQJzhqmL57XMvVOCe2ztm_WPUPmocMz0mYWcaf2hRdmyjOKp7wXHsQER2gJgshhkVFho1A9wpDMrsi9Ii2gWp-vUxR7ONXZ-HA9__WjufonkXvDbKGSJclybf4KCvybMo8HJGHJ7m7p49uBfPapfh_0CZuj9HCfDRF5m64PfrGfirdA5ewpbHx54duiqjh9nKO-U',
  },
  {
    id: 'AI-09283',
    status: 'Shipped',
    date: 'August 01, 2024',
    estimatedDelivery: 'August 10, 2024',
    title: 'Geometric Harmony',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGZY_swKYSAKG8PmIZn-bzZhjGhSK7dLO-XAJ1DRAE_YG1_JpQwax5_tjjSSJk0Imf48OEBHWLbHd8UgkRWscFltHqw01U4K3eVZgf1stLd4r9mPVg-WzhrnX4WTsErRCEROg6t145CQWiU2vyZpqCaSU0SzXOeG7AlQehNuDDvf6qsCRwUMY1AZCdyCRr0wj55bccsvI-vJdTju4mvlS26Qjd6_Ia45fkZw6o0V-RXjNX_PYUzhxDDaMaGlbbxbWKh9nCy3LHo-8',
  }
];

export const OrderTracking = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="bg-background dark:bg-background-dark min-h-full pb-10 transition-colors">
      <Header title="Order History" />
      <div className="max-w-5xl mx-auto p-6 lg:p-10">
        
        {!selectedOrder ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-text-primary dark:text-white">Your Orders</h2>
            <div className="grid gap-4">
              {MOCK_ORDERS.map((order) => (
                <div key={order.id} className="bg-surface dark:bg-surface-dark rounded-xl shadow-soft dark:shadow-none border border-border dark:border-border-dark p-4 flex flex-col md:flex-row gap-4 items-center hover:shadow-soft-lg transition-shadow">
                  <img src={order.thumbnail} alt={order.title} className="w-24 h-24 rounded-lg object-cover" />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-lg text-text-primary dark:text-white">{order.title}</h3>
                    <p className="text-sm text-text-secondary dark:text-gray-400">Order #{order.id}</p>
                    <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">Placed on {order.date}</p>
                  </div>
                  <div className="flex flex-col items-center md:items-end gap-2 min-w-[140px]">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                    }`}>
                      {order.status}
                    </span>
                    <button 
                      onClick={() => setSelectedOrder(order)}
                      className="text-primary font-bold text-sm hover:underline flex items-center gap-1"
                    >
                      Track Order <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <OrderDetail order={selectedOrder} onBack={() => setSelectedOrder(null)} />
        )}
      </div>
    </div>
  );
};

const OrderDetail = ({ order, onBack }: { order: Order; onBack: () => void }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button onClick={onBack} className="flex items-center gap-2 text-text-secondary dark:text-gray-400 hover:text-primary font-medium">
        <span className="material-symbols-outlined">arrow_back</span> Back to Orders
      </button>

      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold text-text-primary dark:text-white font-serif">Track Your Masterpiece</h1>
        <p className="text-text-secondary dark:text-gray-400">Order #{order.id} • Placed on {order.date}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Timeline */}
         <div className="lg:col-span-2 bg-surface dark:bg-surface-dark rounded-xl shadow-soft dark:shadow-none border border-border dark:border-border-dark p-8">
            <div className="mb-8">
               <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-primary">{order.status}</span>
                  <span className="text-sm text-text-secondary dark:text-gray-400">Est. Delivery: {order.estimatedDelivery}</span>
               </div>
               <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000" 
                    style={{ width: order.status === 'Delivered' ? '100%' : order.status === 'Shipped' ? '75%' : '45%' }}
                  ></div>
               </div>
            </div>

            <div className="space-y-8 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
               <TimelineItem 
                 status="Order Placed" 
                 date={order.date} 
                 completed 
                 icon="check"
               />
               <TimelineItem 
                 status="In Production" 
                 desc="Your masterpiece is being printed and framed." 
                 completed={order.status === 'Shipped' || order.status === 'Delivered'}
                 active={order.status === 'In Production'}
                 icon="auto_awesome"
               />
               <TimelineItem 
                 status="Shipped" 
                 desc="On its way to you." 
                 completed={order.status === 'Delivered'}
                 active={order.status === 'Shipped'}
                 icon="local_shipping"
               />
               <TimelineItem 
                 status="Delivered" 
                 desc="Enjoy your art!" 
                 active={order.status === 'Delivered'}
                 icon="inventory_2"
               />
            </div>
         </div>

         {/* Details Sidebar */}
         <div className="space-y-6">
            <div className="bg-surface dark:bg-surface-dark rounded-xl shadow-soft dark:shadow-none border border-border dark:border-border-dark p-6">
               <h3 className="font-bold text-lg mb-4 border-b border-border dark:border-border-dark pb-4 text-text-primary dark:text-white">Tracking Info</h3>
               <div className="space-y-4">
                  <div>
                     <p className="text-xs font-bold text-text-secondary dark:text-gray-400 uppercase">Carrier</p>
                     <p className="text-text-primary dark:text-white">{order.status === 'Placed' ? '—' : 'FedEx'}</p>
                  </div>
                  <div>
                     <p className="text-xs font-bold text-text-secondary dark:text-gray-400 uppercase">Tracking Number</p>
                     <p className="text-text-primary dark:text-white">{order.status === 'Placed' ? '—' : 'TRK-987654321'}</p>
                  </div>
               </div>
            </div>

            <div className="bg-surface dark:bg-surface-dark rounded-xl shadow-soft dark:shadow-none border border-border dark:border-border-dark p-6">
               <h3 className="font-bold text-lg mb-4 text-text-primary dark:text-white">Order Summary</h3>
               <div className="flex gap-4">
                  <img src={order.thumbnail} className="size-20 rounded-lg object-cover" alt={order.title} />
                  <div>
                     <p className="font-bold text-text-primary dark:text-white">{order.title}</p>
                     <p className="text-sm text-text-secondary dark:text-gray-400">24" x 36" Premium Canvas</p>
                     <p className="text-sm text-text-secondary dark:text-gray-400">Walnut Floating Frame</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ status, date, desc, completed, active, icon }: any) => (
  <div className="flex gap-4 relative">
     <div className={`z-10 size-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${completed ? 'bg-primary text-white' : active ? 'bg-white dark:bg-gray-800 border-4 border-primary/20 text-primary' : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600'}`}>
        <span className="material-symbols-outlined text-sm">{icon}</span>
     </div>
     <div className="pt-1">
        <h4 className={`font-bold ${active ? 'text-primary' : completed ? 'text-text-primary dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>{status}</h4>
        {date && <p className="text-sm text-text-secondary dark:text-gray-400">{date}</p>}
        {desc && <p className="text-sm text-text-secondary dark:text-gray-400">{desc}</p>}
     </div>
  </div>
);