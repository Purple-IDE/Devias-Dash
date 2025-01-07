import type { Metadata } from 'next';
import { config } from '@/config';

// Export metadata configuration for the dashboard page
export const metadata: Metadata = {
  title: `Overview | Dashboard | ${config.site.name}`
}; 