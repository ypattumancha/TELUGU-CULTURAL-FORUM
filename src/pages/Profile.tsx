import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Calendar, Camera, Save, AlertCircle } from 'lucide-react';

const Profile = () => {
  const { currentUser, updateUserProfile } = useAuth();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Update page title
  useEffect(() => {
    document.title = 'My Profile - Telugu Cultural Forum';
  }, []);

  // Load user data
  useEffect(() => {
    if (currentUser) {
      setDisplayName(currentUser.displayName || '');
      setEmail(currentUser.email || '');
      setPhotoURL(currentUser.photoURL || '');
    }
  }, [currentUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setError('');
      setMessage('');
      setLoading(true);
      
      await updateUserProfile(displayName, photoURL);
      
      setMessage('Profile updated successfully!');
      setIsEditing(false);
      
      // Clear the success message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (err: any) {
      setError('Failed to update profile. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Convert created date to readable format
  const formattedDate = currentUser?.metadata?.creationTime 
    ? new Date(currentUser.metadata.creationTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : '';

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-primary-800 to-primary-600 p-6 text-white">
              <div className="flex flex-col md:flex-row items-center">
                <div className="relative mb-4 md:mb-0 md:mr-6">
                  <div className="h-24 w-24 rounded-full bg-primary-200 flex items-center justify-center overflow-hidden border-4 border-white">
                    {photoURL ? (
                      <img src={photoURL} alt="Profile" className="h-full w-full object-cover" />
                    ) : (
                      <User size={40} className="text-primary-700" />
                    )}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold">{displayName || 'TCF Member'}</h2>
                  <p className="text-primary-100">{email}</p>
                </div>
              </div>
            </div>
            
            {/* Profile Content */}
            <div className="p-6">
              {error && (
                <div className="mb-6 p-4 bg-error-50 border-l-4 border-error-500 rounded-md flex items-start">
                  <AlertCircle className="h-5 w-5 text-error-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-error-700 text-sm">{error}</p>
                </div>
              )}
              
              {message && (
                <div className="mb-6 p-4 bg-success-50 border-l-4 border-success-500 rounded-md">
                  <p className="text-success-700 text-sm">{message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="displayName"
                        className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${!isEditing ? 'bg-gray-50' : ''}`}
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                        value={email}
                        disabled
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Email address cannot be changed</p>
                  </div>
                  
                  <div>
                    <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-1">
                      Profile Picture URL
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Camera className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="photoURL"
                        className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${!isEditing ? 'bg-gray-50' : ''}`}
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        placeholder="https://example.com/profile-picture.jpg"
                        disabled={!isEditing}
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Enter a URL to an image for your profile picture</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Member Since
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                        value={formattedDate}
                        disabled
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    {isEditing ? (
                      <>
                        <button
                          type="button"
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                          onClick={() => setIsEditing(false)}
                          disabled={loading}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                          disabled={loading}
                        >
                          {loading ? 'Saving...' : (
                            <>
                              <Save className="h-5 w-5 mr-1" />
                              Save Changes
                            </>
                          )}
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                        onClick={() => setIsEditing(true)}
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Membership Information */}
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Membership Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h3 className="font-semibold text-primary-800 mb-1">Membership Status</h3>
                  <p className="text-primary-600">Active Member</p>
                </div>
                
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h3 className="font-semibold text-primary-800 mb-1">Membership Type</h3>
                  <p className="text-primary-600">Regular</p>
                </div>
                
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h3 className="font-semibold text-primary-800 mb-1">Next Renewal</h3>
                  <p className="text-primary-600">January 15, 2025</p>
                </div>
                
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h3 className="font-semibold text-primary-800 mb-1">Member ID</h3>
                  <p className="text-primary-600">TCF-{currentUser?.uid?.substring(0, 6).toUpperCase()}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="btn-outline w-full md:w-auto">
                  Upgrade Membership
                </button>
              </div>
            </div>
          </div>
          
          {/* Recent Activities */}
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="text-gray-700">You registered for the Ganesh Chaturthi event.</p>
                  <p className="text-sm text-gray-500">2 days ago</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="text-gray-700">You joined the TCF Premier League team registration.</p>
                  <p className="text-sm text-gray-500">1 week ago</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="text-gray-700">You created your account.</p>
                  <p className="text-sm text-gray-500">on {formattedDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;