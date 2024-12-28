import React from 'react';
import ReportHeader from '../components/reports/ReportHeader';
import ReportCharts from '../components/reports/ReportCharts';
import ReportTable from '../components/reports/ReportTable';

export default function Reports() {
  return (
    <div className="space-y-6">
      <ReportHeader />
      <ReportCharts />
      <ReportTable />
    </div>
  );
}