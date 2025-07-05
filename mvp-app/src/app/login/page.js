// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter, useSearchParams } from 'next/navigation';

// export default function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     // Check for success message from signup
//     const message = searchParams.get('message');
//     if (message) {
//       setSuccess(message);
//     }
//   }, [searchParams]);

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
//     if (!formData.email || !formData.password) {
//       setError('Email and password are required');
//       setLoading(false);
//       return;
//     }

//     try {
//       // Replace with your actual API call
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//           rememberMe: rememberMe
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Store token if provided
//         if (data.token) {
//           localStorage.setItem('auth_token', data.token);
//         }
        
//         // Redirect to dashboard or home
//         router.push('/dashboard');
//       } else {
//         setError(data.message || 'Invalid credentials');
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
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
//           <p className="text-gray-600">Sign in to your account</p>
//         </div>

//         {success && (
//           <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
//             <p className="text-green-600 text-sm">{success}</p>
//           </div>
//         )}

//         {error && (
//           <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
//             <p className="text-red-600 text-sm">{error}</p>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
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
//                 placeholder="Enter your password"
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

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//               <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
//                 Remember me
//               </label>
//             </div>
//             <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
//               Forgot password?
//             </Link>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? 'Signing in...' : 'Sign In'}
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Don't have an account?{' '}
//             <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
//               Sign up
//             </Link>
//           </p>
//         </div>

//         <div className="mt-8 pt-6 border-t border-gray-200">
//           <div className="text-center">
//             <p className="text-sm text-gray-500 mb-4">Or continue with</p>
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