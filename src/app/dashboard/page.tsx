'use client';

import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

import { Budget } from '@/components/dashboard/overview/budget';
import { Sales } from '@/components/dashboard/overview/sales';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';
import { ActivityLog } from '@/components/dashboard/activity/activity-log';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';
import { applyPagination } from '@/utils/apply-pagination';
import dayjs from 'dayjs';



  const customers: Customer[] = [
    {
      id: 'USR-010',
      name: 'Alcides Antonio',
      avatar: '/assets/avatar-10.png',
      email: 'alcides.antonio@devias.io',
      phone: '908-691-3242',
      address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-009',
      name: 'Marcus Finn',
      avatar: '/assets/avatar-9.png',
      email: 'marcus.finn@devias.io',
      phone: '415-907-2647',
      address: { city: 'Carson City', country: 'USA', state: 'Nevada', street: '2188 Armbrester Drive' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-008',
      name: 'Jie Yan',
      avatar: '/assets/avatar-8.png',
      email: 'jie.yan.song@devias.io',
      phone: '770-635-2682',
      address: { city: 'North Canton', country: 'USA', state: 'Ohio', street: '4894 Lakeland Park Drive' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-007',
      name: 'Nasimiyu Danai',
      avatar: '/assets/avatar-7.png',
      email: 'nasimiyu.danai@devias.io',
      phone: '801-301-7894',
      address: { city: 'Salt Lake City', country: 'USA', state: 'Utah', street: '368 Lamberts Branch Road' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-006',
      name: 'Iulia Albu',
      avatar: '/assets/avatar-6.png',
      email: 'iulia.albu@devias.io',
      phone: '313-812-8947',
      address: { city: 'Murray', country: 'USA', state: 'Utah', street: '3934 Wildrose Lane' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-005',
      name: 'Fran Perez',
      avatar: '/assets/avatar-5.png',
      email: 'fran.perez@devias.io',
      phone: '712-351-5711',
      address: { city: 'Atlanta', country: 'USA', state: 'Georgia', street: '1865 Pleasant Hill Road' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
  
    {
      id: 'USR-004',
      name: 'Penjani Inyene',
      avatar: '/assets/avatar-4.png',
      email: 'penjani.inyene@devias.io',
      phone: '858-602-3409',
      address: { city: 'Berkeley', country: 'USA', state: 'California', street: '317 Angus Road' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-003',
      name: 'Carson Darrin',
      avatar: '/assets/avatar-3.png',
      email: 'carson.darrin@devias.io',
      phone: '304-428-3097',
      address: { city: 'Cleveland', country: 'USA', state: 'Ohio', street: '2849 Fulton Street' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-002',
      name: 'Siegbert Gottfried',
      avatar: '/assets/avatar-2.png',
      email: 'siegbert.gottfried@devias.io',
      phone: '702-661-1654',
      address: { city: 'Los Angeles', country: 'USA', state: 'California', street: '1798 Hickory Ridge Drive' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-001',
      name: 'Miron Vitold',
      avatar: '/assets/avatar-1.png',
      email: 'miron.vitold@devias.io',
      phone: '972-333-4106',
      address: { city: 'San Diego', country: 'USA', state: 'California', street: '75247' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    // Add more customer data as needed
  ];

  export default function Page(): React.JSX.Element {
    const [page, setPage] = useState(0);

const handleNextPage = () => {
  setPage((prevPage) => prevPage + 1);
};

console.log(page); // Use the `page` value

    const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      {/* Search Bar */}
      

      <Stack spacing={2} sx={{ width: '100%' }}>
        <Grid container spacing={3}>
          <Grid lg={3} sm={6} xs={12}>
            <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24k" />
          </Grid>
          <Grid lg={3} sm={6} xs={12}>
            <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
          </Grid>
          <Grid lg={3} sm={6} xs={12}>
            <TasksProgress sx={{ height: '100%' }} value={75.5} />
          </Grid>
          <Grid lg={3} sm={6} xs={12}>
            <TotalProfit sx={{ height: '100%' }} value="$15k" />
          </Grid>
          <Grid lg={8} xs={12}>
            <Sales
              chartSeries={[
                { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
                { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid lg={4} md={6} xs={12}>
            <Traffic chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
          </Grid>
          <Grid lg={4} md={6} xs={12}>
            <ActivityLog />
          </Grid>
          <Grid lg={8} xs={12}>
            {/* Customers section */}
        <Card sx={{ width: '100%' }}>
          <CustomersFilters />
          <CustomersTable
            count={paginatedCustomers.length}
            page={page}
            rows={paginatedCustomers}
            rowsPerPage={rowsPerPage}
          />
        </Card>
          </Grid>
        </Grid>

        
      </Stack>
    </Box>
  );
}
