<script lang="ts">
	import { 
		Package, 
		Building2, 
		Users, 
		ShoppingCart,
		TrendingUp,
		AlertTriangle,
		Activity
	} from 'lucide-svelte';
	
	let { tenantSubdomain } = $props();

	// Mock data for dashboard
	const stats = [
		{
			title: 'Total Products',
			value: '1,234',
			change: '+12%',
			changeType: 'positive',
			icon: Package
		},
		{
			title: 'Active Warehouses',
			value: '3',
			change: '0',
			changeType: 'neutral',
			icon: Building2
		},
		{
			title: 'Employees',
			value: '28',
			change: '+2',
			changeType: 'positive',
			icon: Users
		},
		{
			title: 'Pending Orders',
			value: '42',
			change: '-5%',
			changeType: 'negative',
			icon: ShoppingCart
		}
	];

	const recentOrders = [
		{ id: 'ORD-001', customer: 'ABC Company', status: 'Processing', amount: '€1,250.00' },
		{ id: 'ORD-002', customer: 'XYZ Ltd', status: 'Shipped', amount: '€892.50' },
		{ id: 'ORD-003', customer: 'DEF Corp', status: 'Pending', amount: '€2,100.00' },
		{ id: 'ORD-004', customer: 'GHI Inc', status: 'Delivered', amount: '€675.25' }
	];

	const lowStockItems = [
		{ sku: 'PRD-001', name: 'Widget A', current: 5, minimum: 10 },
		{ sku: 'PRD-045', name: 'Gadget B', current: 2, minimum: 15 },
		{ sku: 'PRD-123', name: 'Tool C', current: 8, minimum: 20 }
	];

	function getStatusColor(status: string) {
		switch (status.toLowerCase()) {
			case 'processing': return 'bg-yellow-100 text-yellow-800';
			case 'shipped': return 'bg-blue-100 text-blue-800';
			case 'pending': return 'bg-gray-100 text-gray-800';
			case 'delivered': return 'bg-green-100 text-green-800';
			default: return 'bg-gray-100 text-gray-800';
		}
	}
</script>

<div class="space-y-6">
	<!-- Header -->
	<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">
				Welcome to {tenantSubdomain?.toUpperCase()} WMS
			</h1>
			<p class="text-gray-600 mt-1">
				Overview of your warehouse operations and key metrics
			</p>
		</div>
		<div class="mt-4 sm:mt-0">
			<button class="btn btn-primary">
				<Package class="h-4 w-4 mr-2" />
				New Order
			</button>
		</div>
	</div>

	<!-- Stats Grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each stats as stat}
			{@const IconComponent = stat.icon}
			<div class="card p-6">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm text-gray-600">{stat.title}</p>
						<p class="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
					</div>
					<div class="p-3 bg-primary-50 rounded-lg">
						<IconComponent class="h-6 w-6 text-primary-600" />
					</div>
				</div>
				<div class="mt-4 flex items-center text-sm">
					{#if stat.changeType === 'positive'}
						<TrendingUp class="h-4 w-4 text-green-500 mr-1" />
						<span class="text-green-600">{stat.change}</span>
					{:else if stat.changeType === 'negative'}
						<TrendingUp class="h-4 w-4 text-red-500 mr-1 transform rotate-180" />
						<span class="text-red-600">{stat.change}</span>
					{:else}
						<Activity class="h-4 w-4 text-gray-500 mr-1" />
						<span class="text-gray-600">No change</span>
					{/if}
					<span class="text-gray-500 ml-1">from last month</span>
				</div>
			</div>
		{/each}
	</div>

	<!-- Main Content Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		<!-- Recent Orders -->
		<div class="card">
			<div class="p-6 border-b border-gray-200">
				<h2 class="text-lg font-semibold text-gray-900">Recent Orders</h2>
			</div>
			<div class="p-6">
				<div class="space-y-4">
					{#each recentOrders as order}
						<div class="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
							<div>
								<p class="font-medium text-gray-900">{order.id}</p>
								<p class="text-sm text-gray-600">{order.customer}</p>
							</div>
							<div class="text-right">
								<span class="inline-block px-2 py-1 text-xs font-medium rounded-full {getStatusColor(order.status)}">
									{order.status}
								</span>
								<p class="text-sm font-medium text-gray-900 mt-1">{order.amount}</p>
							</div>
						</div>
					{/each}
				</div>
				<div class="mt-6">
					<a href="/orders" class="text-primary-600 hover:text-primary-700 text-sm font-medium">
						View all orders →
					</a>
				</div>
			</div>
		</div>

		<!-- Low Stock Alerts -->
		<div class="card">
			<div class="p-6 border-b border-gray-200">
				<div class="flex items-center">
					<AlertTriangle class="h-5 w-5 text-yellow-500 mr-2" />
					<h2 class="text-lg font-semibold text-gray-900">Low Stock Alerts</h2>
				</div>
			</div>
			<div class="p-6">
				<div class="space-y-4">
					{#each lowStockItems as item}
						<div class="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
							<div>
								<p class="font-medium text-gray-900">{item.name}</p>
								<p class="text-sm text-gray-600">{item.sku}</p>
							</div>
							<div class="text-right">
								<p class="text-sm font-medium text-red-600">
									{item.current} / {item.minimum}
								</p>
								<p class="text-xs text-gray-500">Current / Minimum</p>
							</div>
						</div>
					{/each}
				</div>
				<div class="mt-6">
					<a href="/inventory" class="text-primary-600 hover:text-primary-700 text-sm font-medium">
						View all inventory →
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Quick Actions -->
	<div class="card p-6">
		<h2 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
			<a href="/orders/new" class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
				<ShoppingCart class="h-8 w-8 text-primary-600 mr-3" />
				<div>
					<p class="font-medium text-gray-900">Create Order</p>
					<p class="text-sm text-gray-600">New inbound/outbound order</p>
				</div>
			</a>
			
			<a href="/inventory/add" class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
				<Package class="h-8 w-8 text-primary-600 mr-3" />
				<div>
					<p class="font-medium text-gray-900">Add Product</p>
					<p class="text-sm text-gray-600">Register new product</p>
				</div>
			</a>
			
			<a href="/employees/invite" class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
				<Users class="h-8 w-8 text-primary-600 mr-3" />
				<div>
					<p class="font-medium text-gray-900">Invite Employee</p>
					<p class="text-sm text-gray-600">Add team member</p>
				</div>
			</a>
			
			<a href="/warehouses/new" class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
				<Building2 class="h-8 w-8 text-primary-600 mr-3" />
				<div>
					<p class="font-medium text-gray-900">Add Warehouse</p>
					<p class="text-sm text-gray-600">Register new location</p>
				</div>
			</a>
		</div>
	</div>
</div>