import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';

import { UpdatePasswordForm } from '@/components/dashboard/settings/update-password-form';
import { GeneralSettings } from '@/components/dashboard/settings/general-settings';

export const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;
/* Components:
 * - <Notifications /> - Temporarily disabled
 * TODO: Re-enable when notification system is implemented
 * import { Notifications } from '@/components/dashboard/settings/notifications';
 */

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Settings</Typography>
      </div>
      <GeneralSettings />
      <UpdatePasswordForm />
      
    </Stack>
  );
}
