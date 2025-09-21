<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { 
		Package, 
		Users, 
		Building2, 
		BarChart3, 
		Settings, 
		LogOut,
		Menu,
		X,
		Home
	} from 'lucide-svelte';

	let { children, tenantSubdomain } = $props();
	
	let sidebarOpen = $state(false);
	
	// Navigation items
	const navItems = [
		{ href: '/', icon: Home, label: 'Dashboard' },
		{ href: '/warehouses', icon: Building2, label: 'Warehouses' },
		{ href: '/inventory', icon: Package, label: 'Inventory' },
		{ href: '/orders', icon: BarChart3, label: 'Orders' },
		{ href: '/employees', icon: Users, label: 'Employees' },
		{ href: '/settings', icon: Settings, label: 'Settings' }
	];

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	function closeSidebar() {
		sidebarOpen = false;
	}
</script>

<div class="min-h-screen bg-gray-50">
	<!-- Mobile sidebar overlay -->
	{#if sidebarOpen}
		<div 
			class="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden" 
			onclick={closeSidebar}
			onkeydown={(e) => e.key === 'Escape' && closeSidebar()}
			role="button"
			tabindex="0"
			aria-label="Close sidebar"
		></div>
	{/if}

	<!-- Sidebar -->
	<div class="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform {sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0">
		<div class="flex items-center justify-between h-16 px-4 border-b border-gray-200">
			<div class="flex items-center">
				<Package class="h-8 w-8 text-primary-600" />
				<span class="ml-2 text-xl font-bold text-gray-900">
					{tenantSubdomain ? tenantSubdomain.toUpperCase() : 'WMS'}
				</span>
			</div>
			<button 
				onclick={closeSidebar}
				class="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
			>
				<X class="h-6 w-6" />
			</button>
		</div>

		<nav class="mt-8">
			<div class="px-4 space-y-2">
				{#each navItems as item}
					{@const IconComponent = item.icon}
					<a 
						href={item.href}
						class="sidebar-link {$page.url.pathname === item.href ? 'active' : ''}"
						onclick={closeSidebar}
					>
						<IconComponent class="h-5 w-5 mr-3" />
						{item.label}
					</a>
				{/each}
			</div>

			<div class="mt-8 pt-8 border-t border-gray-200">
				<div class="px-4">
					<button class="sidebar-link w-full text-left text-red-600 hover:bg-red-50">
						<LogOut class="h-5 w-5 mr-3" />
						Sign Out
					</button>
				</div>
			</div>
		</nav>
	</div>

	<!-- Main content -->
	<div class="lg:pl-64">
		<!-- Top navigation -->
		<div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4">
			<div class="flex items-center justify-between">
				<button 
					onclick={toggleSidebar}
					class="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
				>
					<Menu class="h-6 w-6" />
				</button>
				
				<div class="flex items-center space-x-4">
					<span class="text-sm text-gray-500">
						Tenant: <span class="font-medium">{tenantSubdomain}</span>
					</span>
					<div class="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center">
						<span class="text-sm font-medium text-primary-700">U</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Page content -->
		<main class="p-6">
			{@render children()}
		</main>
	</div>
</div>