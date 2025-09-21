<script lang="ts">
	import { page } from '$app/stores';
	import { getTenantFromHostname, isTenantSubdomain } from '$lib/utils/tenant';
	import WMSLayout from '$lib/components/WMSLayout.svelte';
	import LandingLayout from '$lib/components/LandingLayout.svelte';
	import '../app.css';

	let { children } = $props();

	// Determine if this is a tenant subdomain or main site
	const hostname = $derived($page.url.hostname);
	const isWMSTenant = $derived(isTenantSubdomain(hostname));
	const tenantSubdomain = $derived(getTenantFromHostname(hostname));
</script>

{#if isWMSTenant}
	<WMSLayout {tenantSubdomain}>
		{@render children()}
	</WMSLayout>
{:else}
	<LandingLayout>
		{@render children()}
	</LandingLayout>
{/if}
