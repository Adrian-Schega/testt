import { dev } from '$app/environment';

/**
 * Extract tenant subdomain from hostname
 */
export function getTenantFromHostname(hostname: string): string | null {
  if (dev) {
    // In development, check for localhost patterns
    const match = hostname.match(/^([^.]+)\.localhost/);
    return match ? match[1] : null;
  }
  
  // In production, extract subdomain
  const parts = hostname.split('.');
  if (parts.length >= 3) {
    return parts[0];
  }
  
  return null;
}

/**
 * Check if hostname is a tenant subdomain
 */
export function isTenantSubdomain(hostname: string): boolean {
  const tenant = getTenantFromHostname(hostname);
  return tenant !== null && tenant !== 'www' && tenant !== 'api';
}

/**
 * Get root domain for tenant redirection
 */
export function getRootDomain(): string {
  return dev ? 'localhost:5173' : 'wms.example.com';
}

/**
 * Generate tenant subdomain URL
 */
export function getTenantUrl(subdomain: string): string {
  const protocol = dev ? 'http' : 'https';
  const domain = getRootDomain();
  return `${protocol}://${subdomain}.${domain}`;
}