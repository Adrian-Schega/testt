<script lang="ts">
	import { page } from '$app/stores';
	import { getTenantFromHostname, isTenantSubdomain } from '$lib/utils/tenant';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import WMSDashboard from '$lib/components/WMSDashboard.svelte';

	// Determine if this is a tenant subdomain
	const hostname = $derived($page.url.hostname);
	const isWMSTenant = $derived(isTenantSubdomain(hostname));
	const tenantSubdomain = $derived(getTenantFromHostname(hostname));
</script>

<svelte:head>
	<title>{isWMSTenant ? `${tenantSubdomain?.toUpperCase()} WMS Dashboard` : 'WMS SaaS - Warehouse Management System'}</title>
	<meta name="description" content={isWMSTenant ? 'Warehouse Management System Dashboard' : 'Modern multi-tenant warehouse management system with HotPay integration'} />
</svelte:head>

{#if isWMSTenant}
	<WMSDashboard {tenantSubdomain} />
{:else}
	<LandingPage />
{/if}
