'use client';

import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItemAvatar';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';

import { Budget } from '@/components/dashboard/overview/budget';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { LatestProducts } from '@/components/dashboard/overview/latest-products';
import { Sales } from '@/components/dashboard/overview/sales';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';

export default function Page(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  // Sample dataset
  const data = ['Apple', 'Banana', 'Branana', 'Cherry', 'Date', 'Elderberry'];

  // Handle search logic
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() !== '') {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Card sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          width: '100%',
          maxWidth: '500px',
        }}>
          <OutlinedInput
            defaultValue={searchQuery}
            onChange={handleSearch}
            fullWidth
            placeholder="Search..."
            startAdornment={
              <InputAdornment position="start">
                <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
              </InputAdornment>
            }
            sx={{ maxWidth: '500px' }}
          />
        </Card>
        {results.length > 0 && (
          <List sx={{ mt: 2}}>
            {results.map((result, index) => (
              <ListItem key={index}>
                <Typography>{result}</Typography>
              </ListItem>
            ))}
          </List>
        )}

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
            <LatestProducts
              products={[
                {
                  id: 'PRD-005',
                  name: 'Soja & Co. Eucalyptus',
                  image: '/assets/product-5.png',
                  updatedAt: dayjs().subtract(18, 'minutes').subtract(5, 'hour').toDate(),
                },
                {
                  id: 'PRD-004',
                  name: 'Necessaire Body Lotion',
                  image: '/assets/product-4.png',
                  updatedAt: dayjs().subtract(41, 'minutes').subtract(3, 'hour').toDate(),
                },
                {
                  id: 'PRD-003',
                  name: 'Ritual of Sakura',
                  image: '/assets/product-3.png',
                  updatedAt: dayjs().subtract(5, 'minutes').subtract(3, 'hour').toDate(),
                },
                {
                  id: 'PRD-002',
                  name: 'Lancome Rouge',
                  image: '/assets/product-2.png',
                  updatedAt: dayjs().subtract(23, 'minutes').subtract(2, 'hour').toDate(),
                },
                {
                  id: 'PRD-001',
                  name: 'Erbology Aloe Vera',
                  image: '/assets/product-1.png',
                  updatedAt: dayjs().subtract(10, 'minutes').toDate(),
                },
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid lg={8} md={12} xs={12}>
            <LatestOrders
              orders={[
                {
                  id: 'ORD-007',
                  customer: { name: 'Ekaterina Tankova' },
                  amount: 30.5,
                  status: 'pending',
                  createdAt: dayjs().subtract(10, 'minutes').toDate(),
                },
                {
                  id: 'ORD-006',
                  customer: { name: 'Cao Yu' },
                  amount: 25.1,
                  status: 'delivered',
                  createdAt: dayjs().subtract(10, 'minutes').toDate(),
                },
                {
                  id: 'ORD-004',
                  customer: { name: 'Alexa Richardson' },
                  amount: 10.99,
                  status: 'refunded',
                  createdAt: dayjs().subtract(10, 'minutes').toDate(),
                },
                {
                  id: 'ORD-003',
                  customer: { name: 'Anje Keizer' },
                  amount: 96.43,
                  status: 'pending',
                  createdAt: dayjs().subtract(10, 'minutes').toDate(),
                },
                {
                  id: 'ORD-002',
                  customer: { name: 'Clarke Gillebert' },
                  amount: 32.54,
                  status: 'delivered',
                  createdAt: dayjs().subtract(10, 'minutes').toDate(),
                },
                {
                  id: 'ORD-001',
                  customer: { name: 'Adam Denisov' },
                  amount: 16.76,
                  status: 'delivered',
                  createdAt: dayjs().subtract(10, 'minutes').toDate(),
                },
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}