import React from 'react';
import CustomerList from '../components/customers/CustomerList';
import CustomerHeader from '../components/customers/CustomerHeader';

export default function Customers() {
  return (
    <div className="space-y-6">
      <CustomerHeader />
      <CustomerList />
    </div>
  );
}