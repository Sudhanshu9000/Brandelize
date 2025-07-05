# Brandelize - Digital Marketing Platform

A modern, full-stack digital marketing platform built with Next.js, user authentication, and a comprehensive dashboard for managing marketing campaigns.

[Brandelize Homepage](https://brandelize111.vercel.app/)

[Demo Video](https://www.loom.com/share/98785b4565a54f1aacbfd283be059e05?sid=0fe90bbb-a721-45c7-972d-c99f4fb0490b)


## ✨ Features

### 🏠 **Homepage**
- **Modern Landing Page** with gradient designs and animations
- **Service Showcase** - Performance Marketing, Branding, AI Marketing, Digital Strategy
- **Company Information** with contact details and social media links
- **Contact Form** for lead generation
- **Responsive Design** optimized for all devices

### 🔐 **Authentication System**
- **Dual Modal** - Signup and Login in one interface
- **Form Validation** with real-time error feedback
- **Password Strength Indicator** with security requirements
- **Supabase Integration** for secure user management

### 📊 **User Dashboard**
- **Personalized Welcome** with user data
- **Analytics Cards** - Revenue, Campaigns, Visitors, Conversion Rate
- **Campaign Management** with status tracking
- **Quick Actions** sidebar for common tasks
- **Account Information** panel with subscription details
- **Recent Activity** feed with timestamped actions

### 🎨 **UI/UX Design**
- **Gradient Color Scheme** - Purple, Pink, Orange
- **Modern Components** with hover effects and transitions
- **Consistent Branding** throughout the application
- **Accessibility Features** with proper ARIA labels
- **Mobile-First** responsive design

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **React 18** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Custom UI Components** - Built from scratch

### **Backend & Database**
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Relational database
- **Row Level Security** - Data protection
- **Real-time subscriptions** - Live data updates

### **Authentication**
- **Supabase Auth** - User management
- **OAuth Providers** - Google, Facebook
- **JWT Tokens** - Secure session management
- **Email Verification** - Account security

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control
- **Vercel** - Deployment platform

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account
- Git for version control

### **1. Clone the Repository**
\`\`\`bash
git clone https://github.com/Sudhanshu9000/Brandelize.git
cd mvp-app
\`\`\`

### **2. Install Dependencies**
\`\`\`bash
npm install
# or
yarn install
\`\`\`

### **3. Environment Setup**
Create a \`.env.local\` file in the root directory:

\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

### **4. Supabase Setup**

#### **Create Supabase Project**
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key

#### **Database Schema**
The authentication tables are automatically created by Supabase. User metadata is stored in the \`auth.users\` table.

### **5. Run Development Server**
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Key Features Explained

### **Authentication Flow**
1. **User clicks "Get Started"** → Opens authentication modal
2. **User fills signup form** → Validates data client-side
3. **Form submission** → Creates user in Supabase
4. **Email verification** → User receives confirmation email
5. **Login form** → Validates 
6. **Session management** → Maintains login state

### **Form Validation**
- **Email format** validation
- **Password strength** requirements (8+ chars, uppercase, lowercase, number, special char)
- **Required field** checking
- **Real-time feedback** with error messages

## 🎨 Customization

### **Colors & Branding**
The design uses a consistent color palette defined in Tailwind CSS:

\`\`\`css
/* Primary Colors */
purple-600: #9333ea
pink-600: #db2777
orange-600: #ea580c

/* Gradients */
from-purple-600 to-pink-600
from-pink-600 to-orange-600
from-purple-600 via-pink-600 to-orange-500
\`\`\`

### **Typography**
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable fonts
- **UI Elements**: Consistent sizing and spacing

### **Components**
All UI components are modular and reusable:
- Consistent styling with Tailwind classes
- Proper TypeScript/JavaScript support
- Accessibility features built-in

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Key responsive features:
- Collapsible navigation
- Stacked layouts on mobile
- Touch-friendly buttons
- Optimized images

## 🔒 Security Features

### **Authentication Security**
- **Password hashing** handled by Supabase
- **JWT tokens** for session management
- **Row Level Security** for data protection
- **Email verification** for account security

### **Data Validation**
- **Client-side validation** for user experience
- **Server-side validation** for security
- **SQL injection protection** via Supabase
- **XSS protection** via React

## 🚀 Deployment

### **Vercel Deployment** (Recommended)
1. **Connect GitHub** repository to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on git push

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
\`\`\`

### **Other Platforms**
- **Netlify**: Works with static export
- **Railway**: Full-stack deployment
- **DigitalOcean**: App Platform deployment

### **Environment Variables for Production**
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_key
\`\`\`

## 🧪 Testing

### **Manual Testing Checklist**
- [ ] Homepage loads correctly
- [ ] Authentication modal opens
- [ ] Signup form validation works
- [ ] User can create account
- [ ] Email verification sent
- [ ] Login form works
- [ ] Dashboard loads with user data
- [ ] Logout functionality works
- [ ] Responsive design on mobile

### **Test User Flow**
1. Visit homepage
2. Click "Get Started"
3. Fill signup form
4. Verify email (check spam folder)
5. Login with credentials
6. Explore dashboard features
7. Test logout

## 🐛 Troubleshooting

### **Common Issues**

#### **Authentication Not Working**
- Check Supabase URL and keys
- Verify OAuth provider setup
- Check browser console for errors
- Ensure redirect URLs are correct

#### **Dashboard Not Loading**
- Check user authentication state
- Verify Supabase connection
- Check browser network tab
- Clear browser cache

#### **Styling Issues**
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS
- Verify component imports
- Test in different browsers

#### **Build Errors**
- Check Node.js version (18+)
- Clear node_modules and reinstall
- Verify all dependencies are installed
- Check for TypeScript errors

## 📈 Performance Optimization

### **Current Optimizations**
- **Next.js App Router** for optimal performance
- **Component lazy loading** where appropriate
- **Image optimization** with Next.js Image component
- **CSS optimization** with Tailwind CSS purging

### **Future Improvements**
- **API route caching** for better performance
- **Database query optimization** with proper indexing
- **CDN integration** for static assets
- **Progressive Web App** features

## 🤝 Contributing

### **Development Workflow**
1. **Fork** the repository
2. **Create feature branch** (\`git checkout -b feature/amazing-feature\`)
3. **Commit changes** (\`git commit -m 'Add amazing feature'\`)
4. **Push to branch** (\`git push origin feature/amazing-feature\`)
5. **Open Pull Request**

### **Code Standards**
- Use **ESLint** for code linting
- Follow **React best practices**
- Write **descriptive commit messages**
- Add **comments** for complex logic
- Test **responsive design**

## 👥 Team

### **Brandelize Team**
- **Founded**: 2024
- **Industry**: Digital Marketing Services
- **Specialties**: Brand Building, Performance Marketing

### **Contact Information**
- **Phone**: 8406842340
- **Email**: brandelize.com@gmail.com
- **Address**: Main Road, near Indrapuri Chowk, Domino's Pizza, Hazaribagh, Jharkhand, India

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Supabase Team** for the backend infrastructure
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icons
- **Vercel** for the deployment platform

## 📚 Additional Resources

### **Documentation**
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

**Built with ❤️ by the Brandelize Team**

*Transform your business with digital marketing solutions.*
