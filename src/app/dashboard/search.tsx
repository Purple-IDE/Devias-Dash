export default function Page(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  // Sample dataset
  const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Friend', 'Girl', 'House'];

  // Handle search logic
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
  placeholder="Search..."
  startAdornment={
    <InputAdornment position="start">
      <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
    </InputAdornment>
  }
/>
</Card>

{/* Results Dropdown */}
{results.length > 0 && (
<Card
  sx={{
    position: 'absolute',
    top: 'calc(6% + 8px)',
    mt: 2,
    p: 2,
    width: '100%',
    maxWidth: '500px',
    boxShadow: 3,
    borderRadius: 2,
    zIndex: 10,
  }}
>
  {results.map((result) => (
    <Typography
      key={result}
      sx={{
        p: 1,
        borderBottom: result !== results[results.length - 1] ? '1px solid #e0e0e0' : 'none',
        cursor: 'pointer',
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

