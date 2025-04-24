import React, { useState, useEffect } from 'react';

export default function ClubJoin({ onBack }) {
  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem('clubMembers');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    diabetesStage: 'Stage 1',
    joinDate: new Date().toISOString().split('T')[0],
    phone: '',
    email: ''
  });

  const [showForm, setShowForm] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    localStorage.setItem('clubMembers', JSON.stringify(members));
  }, [members]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMembers([...members, { ...formData, id: Date.now() }]);
    setFormData({
      name: '',
      studentId: '',
      diabetesStage: 'Stage 1',
      joinDate: new Date().toISOString().split('T')[0],
      phone: '',
      email: ''
    });
    setShowForm(false);
  };

  const deleteMember = (id) => {
    if (window.confirm('Are you sure you want to remove this member?')) {
      setMembers(members.filter(m => m.id !== id));
      setSelectedMember(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">DIU SugarCare Club</h2>
        <div className="space-x-2">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {showForm ? 'View Members' : 'New Member'}
          </button>
          <button
            onClick={onBack}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back
          </button>
        </div>
      </div>

      {showForm ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Student ID</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={formData.studentId}
                onChange={(e) => setFormData({...formData, studentId: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Diabetes Stage</label>
              <select
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={formData.diabetesStage}
                onChange={(e) => setFormData({...formData, diabetesStage: e.target.value})}
              >
                <option>Stage 1</option>
                <option>Stage 2</option>
                <option>Stage 3</option>
                <option>Pre-diabetes</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          {selectedMember ? (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Member Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Name</p>
                  <p className="font-medium">{selectedMember.name}</p>
                </div>
                <div>
                  <p className="text-gray-600">Student ID</p>
                  <p className="font-medium">{selectedMember.studentId}</p>
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="font-medium">{selectedMember.phone}</p>
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="font-medium">{selectedMember.email}</p>
                </div>
                <div>
                  <p className="text-gray-600">Diabetes Stage</p>
                  <p className="font-medium">{selectedMember.diabetesStage}</p>
                </div>
                <div>
                  <p className="text-gray-600">Join Date</p>
                  <p className="font-medium">{selectedMember.joinDate}</p>
                </div>
              </div>
              <div className="mt-4 space-x-2">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Back to List
                </button>
                <button
                  onClick={() => deleteMember(selectedMember.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete Member
                </button>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {members.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{member.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{member.studentId}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{member.diabetesStage}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => setSelectedMember(member)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {members.length === 0 && (
                <p className="text-center py-4 text-gray-500">No members found</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
