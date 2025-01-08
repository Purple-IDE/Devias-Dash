'use client';

import React, { useState } from 'react';
import { Box, Card, OutlinedInput, InputAdornment, Typography } from '@mui/material';
import { MagnifyingGlassIcon } from '@heroicons/react/outline';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  // Sample dataset
  const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      {/* Search Bar */}
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <OutlinedInput
          value={searchQuery}
          onChange={handleSearch}
          fullWidth
          placeholder="Search customer"
          startAdornment={
            <InputAdornment position="start">
              <MagnifyingGlassIcon style={{ fontSize: '24px' }} />
            </InputAdornment>
          }
        />
      </Card>

      {/* Results Dropdown */}
      {results.length > 0 && (
        <Card
          sx={{
            position: 'absolute',
            top: 'calc(100% + 8px)', // Below the search bar
            mt: 2,
            p: 2,
            width: '100%',
            maxWidth: '500px',
            boxShadow: 3,
            borderRadius: 2,
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            opacity: 1,
            transform: 'translateY(0)',
            zIndex: 10,
          }}
        >
          {results.map((result, index) => (
            <Typography
              key={index}
              sx={{
                p: 1,
                borderBottom: index !== results.length - 1 ? '1px solid #e0e0e0' : 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              {result}
            </Typography>
          ))}
        </Card>
      )}
    </Box>
  );
};

export default SearchPage;
