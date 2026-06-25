import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function ProductsManager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const initialFormState = { 
    name: '', 
    category: 'Statues & Murtis', 
    image: '',
    price: '',
    description: '',
    applications: '',
    is_featured: false
  };
  const [formState, setFormState] = useState(initialFormState);

  const categories = ["Statues & Murtis", "Architectural", "Slabs", "Custom Design"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching products:', error.message);
        alert('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleOpenAdd = () => {
    setFormState(initialFormState);
    setEditingId(null);
    setIsFormOpen(true);
  };

  const handleOpenEdit = (product) => {
    setFormState({
      name: product.name || '',
      category: product.category || 'Statues & Murtis',
      image: product.image || '',
      price: product.price || '',
      description: product.description || '',
      applications: product.applications ? product.applications.join('\n') : '',
      is_featured: product.is_featured || false
    });
    setEditingId(product.id);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setFormState(initialFormState);
    setEditingId(null);
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    
    // Process applications text into an array
    const appsArray = formState.applications
      .split('\n')
      .map(app => app.trim())
      .filter(app => app.length > 0);

    const productData = {
      name: formState.name, 
      category: formState.category, 
      image: formState.image || 'https://images.unsplash.com/photo-1544085023-e2bc00ee200c?auto=format&fit=crop&q=80',
      price: formState.price,
      description: formState.description,
      applications: appsArray,
      is_featured: formState.is_featured
    };

    try {
      if (editingId) {
        // Update existing
        const { data, error } = await supabase
          .from('products')
          .update(productData)
          .eq('id', editingId)
          .select();

        if (error) throw error;
        
        setProducts(products.map(p => p.id === editingId ? (data?.[0] || { ...p, ...productData }) : p));
      } else {
        // Insert new
        const { data, error } = await supabase
          .from('products')
          .insert([productData])
          .select();

        if (error) throw error;
        
        setProducts([data?.[0] || productData, ...products]);
      }
      
      handleCloseForm();
    } catch (error) {
      console.error('Error saving product:', error.message);
      alert('Error saving product: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setProducts(products.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error.message);
      alert('Error deleting product');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">Manage Products</h1>
        <button 
          onClick={isFormOpen ? handleCloseForm : handleOpenAdd}
          className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700"
        >
          {isFormOpen ? 'Cancel' : 'Add New Product'}
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-8">
          <h2 className="text-lg font-medium text-slate-900 mb-4">{editingId ? 'Edit Product' : 'Add New Product'}</h2>
          <form onSubmit={handleSaveProduct} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Product Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md" 
                  placeholder="e.g., White Marble Ganesha"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Category</label>
                <select 
                  value={formState.category}
                  onChange={e => setFormState({...formState, category: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Price (Optional)</label>
                <input 
                  type="text" 
                  value={formState.price}
                  onChange={e => setFormState({...formState, price: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md" 
                  placeholder="e.g., On Request, ₹50,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Image URL</label>
                <input 
                  type="url" 
                  required
                  value={formState.image}
                  onChange={e => setFormState({...formState, image: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md" 
                  placeholder="https://..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Description (Optional)</label>
              <textarea 
                rows="3"
                value={formState.description}
                onChange={e => setFormState({...formState, description: e.target.value})}
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md" 
                placeholder="Describe the product details..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Ideal Applications (Optional)</label>
              <p className="text-xs text-slate-500 mb-1">Enter each application on a new line.</p>
              <textarea 
                rows="4"
                value={formState.applications}
                onChange={e => setFormState({...formState, applications: e.target.value})}
                className="block w-full px-3 py-2 border border-slate-300 rounded-md" 
                placeholder="Home Pooja Rooms&#10;Office Reception Temples&#10;Spiritual Centers"
              ></textarea>
            </div>

            <div className="flex items-center mt-4">
              <input
                id="is_featured"
                type="checkbox"
                checked={formState.is_featured}
                onChange={e => setFormState({...formState, is_featured: e.target.checked})}
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label htmlFor="is_featured" className="ml-2 block text-sm text-slate-900">
                Mark as Featured Product
              </label>
            </div>

            <div className="pt-2">
              <button type="submit" className="bg-slate-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-slate-800">
                {editingId ? 'Update Product' : 'Save Product'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md border border-slate-200">
        {loading ? (
          <div className="p-8 text-center text-slate-500">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No products found. Add one above!</div>
        ) : (
          <ul className="divide-y divide-slate-200">
            {products.filter(Boolean).map((product) => (
              <li key={product.id || product.name}>
                <div className="px-4 py-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 bg-slate-100 rounded overflow-hidden">
                      <img className="h-16 w-16 object-cover" src={product?.image} alt={product?.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-900 flex items-center">
                        {product?.name}
                        {product?.is_featured && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">Featured</span>}
                      </div>
                      <div className="text-sm text-slate-500">{product?.category}</div>
                      {product?.price && <div className="text-xs text-amber-600 font-medium mt-1">{product.price}</div>}
                    </div>
                  </div>
                  <div className="flex space-x-3 w-full sm:w-auto justify-end">
                    <button 
                      onClick={() => handleOpenEdit(product)}
                      className="text-blue-600 hover:text-blue-900 text-sm font-medium px-3 py-1 bg-blue-50 rounded"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => product?.id ? handleDelete(product.id) : null}
                      className="text-red-600 hover:text-red-900 text-sm font-medium px-3 py-1 bg-red-50 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
