import Link from "next/link";
import { Package, Users, ShoppingCart, DollarSign } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your CyberZed store</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <DollarSign className="w-8 h-8 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">+12.5%</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Total Revenue</h3>
            <p className="text-3xl font-bold">$1,250.00</p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <ShoppingCart className="w-8 h-8 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">+8.2%</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Total Orders</h3>
            <p className="text-3xl font-bold">45</p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <Package className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Products</h3>
            <p className="text-3xl font-bold">6</p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <Users className="w-8 h-8 text-cyan-400" />
              <span className="text-sm text-gray-500 font-medium">Add more</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Accounts in Pool</h3>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/admin/products" className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition">
            <Package className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manage Products</h3>
            <p className="text-gray-400 text-sm">Create, edit, and manage your product catalog</p>
          </Link>

          <Link href="/admin/accounts" className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition">
            <Users className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Upload Accounts</h3>
            <p className="text-gray-400 text-sm">Bulk upload account credentials</p>
          </Link>

          <Link href="/admin/orders" className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition">
            <ShoppingCart className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">View Orders</h3>
            <p className="text-gray-400 text-sm">See all customer orders</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
