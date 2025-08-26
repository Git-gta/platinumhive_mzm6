import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowRight, Star, Users, Zap } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            
            <h1 className="text-2xl font-bold text-gray-900">PlatinumHive_mzm6</h1>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Healthcare App platform specialized in analytics and reporting with intuitive interface and advanced features
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The ultimate healthcare app solution for analytics and reporting, designed for entrepreneurs.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">10k+</div>
              <div className="text-gray-600">Active Users</div>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SSO and secure authentication</h3>
            <p className="text-gray-600">
              Powerful sso and secure authentication functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced analytics dashboard</h3>
            <p className="text-gray-600">
              Powerful advanced analytics dashboard functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time webhooks</h3>
            <p className="text-gray-600">
              Powerful real-time webhooks functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Audit logs</h3>
            <p className="text-gray-600">
              Powerful audit logs functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Role and permissions management</h3>
            <p className="text-gray-600">
              Powerful role and permissions management functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-tenant management</h3>
            <p className="text-gray-600">
              Powerful multi-tenant management functionality designed for modern businesses.
            </p>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2024 PlatinumHive_mzm6. Generated by Go To Factory.</p>
        </div>
      </footer>
    </div>
  )
}