import { Routes } from '@angular/router';

/**
 * The DPDPX engine performs its own in-app view switching across all 44 modules
 * (Dashboard, Consent Management, Data Governance, Device Policies, Admin, etc.)
 * via its global go(route) navigator, which Angular enhances with skeleton
 * loaders and animated transitions. The shell hosts that experience, so a single
 * catch-all route keeps deep links from 404-ing during local dev.
 */
export const routes: Routes = [{ path: '**', children: [] }];
