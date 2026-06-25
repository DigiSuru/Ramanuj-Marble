import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function GalleryManager() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const initialFormState = { 
    title: '', 
    image: ''
  };
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error.message);
        alert('Error fetching projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleOpenAdd = () => {
    setFormState(initialFormState);
    setEditingId(null);
    setIsFormOpen(true);
  };

  const handleOpenEdit = (project) => {
    setFormState({
      title: project.title || '',
      image: project.image || ''
    });
    setEditingId(project.id);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setFormState(initialFormState);
    setEditingId(null);
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();

    const projectData = {
      title: formState.title, 
      image: formState.image || 'https://images.unsplash.com/photo-1544085023-e2bc00ee200c?auto=format&fit=crop&q=80'
    };

    try {
      if (editingId) {
        // Update existing
        const { data, error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', editingId)
          .select();

        if (error) throw error;
        setProjects(projects.map(p => p.id === editingId ? (data?.[0] || { ...p, ...projectData }) : p));
      } else {
        // Insert new
        const { data, error } = await supabase
          .from('projects')
          .insert([projectData])
          .select();

        if (error) throw error;
        
        setProjects([data?.[0] || projectData, ...projects]);
      }
      
      handleCloseForm();
    } catch (error) {
      console.error('Error saving project:', error.message);
      alert('Error saving project: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setProjects(projects.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting project:', error.message);
      alert('Error deleting project');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">Manage Projects Gallery</h1>
        <button 
          onClick={isFormOpen ? handleCloseForm : handleOpenAdd}
          className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700"
        >
          {isFormOpen ? 'Cancel' : 'Add New Project'}
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-8">
          <h2 className="text-lg font-medium text-slate-900 mb-4">{editingId ? 'Edit Project' : 'Add New Project'}</h2>
          <form onSubmit={handleSaveProject} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Project Title</label>
                <input 
                  type="text" 
                  required
                  value={formState.title}
                  onChange={e => setFormState({...formState, title: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md" 
                  placeholder="e.g., Luxury Villa Flooring"
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

            <div className="pt-2">
              <button type="submit" className="bg-slate-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-slate-800">
                {editingId ? 'Update Project' : 'Save Project'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md border border-slate-200">
        {loading ? (
          <div className="p-8 text-center text-slate-500">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No projects found. Add one above!</div>
        ) : (
          <ul className="divide-y divide-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
            {projects.filter(Boolean).map((project) => (
              <li key={project.id || project.title} className="border border-slate-200 rounded-lg overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                <div className="h-48 w-full bg-slate-100 overflow-hidden relative">
                  <img className="h-full w-full object-cover group-hover:scale-105 transition-transform" src={project?.image} alt={project?.title} />
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div className="text-sm font-bold text-slate-900 mb-4">{project?.title}</div>
                  <div className="flex space-x-3 justify-end mt-auto border-t border-slate-100 pt-3">
                    <button 
                      onClick={() => handleOpenEdit(project)}
                      className="text-blue-600 hover:text-blue-900 text-xs font-medium px-2 py-1 bg-blue-50 rounded"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => project?.id ? handleDelete(project.id) : null}
                      className="text-red-600 hover:text-red-900 text-xs font-medium px-2 py-1 bg-red-50 rounded"
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
