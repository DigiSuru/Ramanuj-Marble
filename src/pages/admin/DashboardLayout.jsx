import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin');
      } else {
        setIsAuthenticated(true);
      }
    };
    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    if (import.meta.env.VITE_SUPABASE_URL !== undefined) {
      await supabase.auth.signOut();
    }
    navigate('/admin');
  };

  const navigation = [
    { name: 'Products', href: '/admin/dashboard/products' },
    { name: 'Gallery', href: '/admin/dashboard/gallery' },
    { name: 'Inquiries', href: '/admin/dashboard/inquiries' },
    { name: 'Settings', href: '/admin/dashboard/settings' },
  ];

  if (!isAuthenticated) return <div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <div className="md:w-64 bg-slate-900 flex flex-col">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 mb-6">
            <h1 className="text-white text-xl font-serif font-bold tracking-widest">RAMANUJ Admin</h1>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname.includes(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-amber-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex-shrink-0 flex bg-slate-800 p-4">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex-shrink-0 w-full group block text-slate-300 hover:text-white transition-colors text-sm font-medium text-left"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Outlet renders the child routes (Products, Gallery, etc) */}
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
