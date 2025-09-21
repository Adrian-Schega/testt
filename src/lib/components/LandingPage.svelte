<script lang="ts">
	import { 
		Package, 
		Building2, 
		Users, 
		BarChart3, 
		Shield, 
		Globe,
		ArrowRight,
		Check
	} from 'lucide-svelte';
</script>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
				Modern Warehouse<br />
				<span class="text-primary-600">Management System</span>
			</h1>
			<p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
				Streamline your warehouse operations with our multi-tenant SaaS platform. 
				Manage inventory, orders, employees, and payments with HotPay.pl integration.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/register" class="btn btn-primary text-lg px-8 py-3">
					Start Free Trial
					<ArrowRight class="ml-2 h-5 w-5" />
				</a>
				<a href="#features" class="btn btn-secondary text-lg px-8 py-3">
					Learn More
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
				Everything you need to manage your warehouse
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Our comprehensive WMS solution provides all the tools you need to optimize your warehouse operations.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Feature 1 -->
			<div class="card p-8 text-center">
				<Package class="h-12 w-12 text-primary-600 mx-auto mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Inventory Management</h3>
				<p class="text-gray-600">
					Track stock levels, manage multiple warehouses, and automate reorder points with real-time visibility.
				</p>
			</div>

			<!-- Feature 2 -->
			<div class="card p-8 text-center">
				<Building2 class="h-12 w-12 text-primary-600 mx-auto mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Multi-Warehouse Support</h3>
				<p class="text-gray-600">
					Manage multiple warehouse locations with centralized control and location-specific operations.
				</p>
			</div>

			<!-- Feature 3 -->
			<div class="card p-8 text-center">
				<Users class="h-12 w-12 text-primary-600 mx-auto mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Employee Management</h3>
				<p class="text-gray-600">
					Assign roles, track performance, and manage warehouse staff with flexible permission systems.
				</p>
			</div>

			<!-- Feature 4 -->
			<div class="card p-8 text-center">
				<BarChart3 class="h-12 w-12 text-primary-600 mx-auto mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Order Processing</h3>
				<p class="text-gray-600">
					Streamline inbound and outbound orders with automated workflows and status tracking.
				</p>
			</div>

			<!-- Feature 5 -->
			<div class="card p-8 text-center">
				<Shield class="h-12 w-12 text-primary-600 mx-auto mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-4">HotPay.pl Integration</h3>
				<p class="text-gray-600">
					Secure payment processing with Poland's leading payment gateway for seamless transactions.
				</p>
			</div>

			<!-- Feature 6 -->
			<div class="card p-8 text-center">
				<Globe class="h-12 w-12 text-primary-600 mx-auto mb-4" />
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Multi-Tenant SaaS</h3>
				<p class="text-gray-600">
					Each client gets their own subdomain with isolated data and customizable settings.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Pricing Section -->
<section id="pricing" class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
				Simple, transparent pricing
			</h2>
			<p class="text-xl text-gray-600">
				Choose the plan that fits your business needs
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Basic Plan -->
			<div class="card p-8">
				<div class="text-center">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
					<div class="mb-6">
						<span class="text-4xl font-bold text-gray-900">$29</span>
						<span class="text-gray-600">/month</span>
					</div>
					<ul class="space-y-3 text-left mb-8">
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>1 Warehouse</span>
						</li>
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>Up to 5 employees</span>
						</li>
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>Basic reporting</span>
						</li>
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>Email support</span>
						</li>
					</ul>
					<a href="/register?plan=basic" class="btn btn-secondary w-full">
						Get Started
					</a>
				</div>
			</div>

			<!-- Professional Plan -->
			<div class="card p-8 border-2 border-primary-600 relative">
				<div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
					<span class="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
						Most Popular
					</span>
				</div>
				<div class="text-center">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
					<div class="mb-6">
						<span class="text-4xl font-bold text-gray-900">$79</span>
						<span class="text-gray-600">/month</span>
					</div>
					<ul class="space-y-3 text-left mb-8">
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>5 Warehouses</span>
						</li>
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>Up to 25 employees</span>
						</li>
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>Advanced reporting</span>
						</li>
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>Priority support</span>
						</li>
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>API access</span>
						</li>
					</ul>
					<a href="/register?plan=professional" class="btn btn-primary w-full">
						Get Started
					</a>
				</div>
			</div>

			<!-- Enterprise Plan -->
			<div class="card p-8">
				<div class="text-center">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
					<div class="mb-6">
						<span class="text-4xl font-bold text-gray-900">$199</span>
						<span class="text-gray-600">/month</span>
					</div>
					<ul class="space-y-3 text-left mb-8">
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>Unlimited warehouses</span>
						</li>
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>Unlimited employees</span>
						</li>
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>Custom reporting</span>
						</li>
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>24/7 phone support</span>
						</li>
						<li class="flex items-center">
							<Check class="h-5 w-5 text-green-500 mr-3" />
							<span>Custom integrations</span>
						</li>
					</ul>
					<a href="/register?plan=enterprise" class="btn btn-secondary w-full">
						Contact Sales
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-primary-600">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
			Ready to streamline your warehouse operations?
		</h2>
		<p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
			Join hundreds of businesses already using our WMS platform to optimize their warehouse management.
		</p>
		<a href="/register" class="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
			Start Your Free Trial Today
			<ArrowRight class="ml-2 h-5 w-5" />
		</a>
	</div>
</section>