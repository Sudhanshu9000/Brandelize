// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// export default function SignupPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     // Clear error when user starts typing
//     if (error) setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     // Basic validation
//     if (!formData.name || !formData.email || !formData.password) {
//       setError('All fields are required');
//       setLoading(false);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       setLoading(false);
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters');
//       setLoading(false);
//       return;
//     }

//     try {
//       // Replace with your actual API call
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Redirect to login or dashboard
//         router.push('/login?message=Account created successfully');
//       } else {
//         setError(data.message || 'Something went wrong');
//       }
//     } catch (err) {
//       setError('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
//           <p className="text-gray-600">Join us and start your journey</p>
//         </div>

//         {error && (
//           <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
//             <p className="text-red-600 text-sm">{error}</p>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-12"
//                 placeholder="Create a password"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? '🙈' : '👁️'}
//               </button>
//             </div>
//           </div>

//           <div>
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//               placeholder="Confirm your password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? 'Creating Account...' : 'Create Account'}
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Already have an account?{' '}
//             <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
//               Sign in
//             </Link>
//           </p>
//         </div>

//         <div className="mt-8 pt-6 border-t border-gray-200">
//           <div className="text-center">
//             <p className="text-sm text-gray-500 mb-4">Or sign up with</p>
//             <div className="flex space-x-4">
//               <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all">
//                 <span className="mr-2">🔗</span>
//                 Google
//               </button>
//               <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all">
//                 <span className="mr-2">📘</span>
//                 Facebook
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }