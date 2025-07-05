"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { PasswordStrength } from "@/components/password-strength"
import { supabase } from "@/lib/supabase"
import { validateSignupForm, validateLoginForm } from "@/lib/validations"
import { Mail, Lock, User, Phone, Building, Eye, EyeOff, AlertCircle, CheckCircle, X } from "lucide-react"

export function AuthModal({ isOpen, onClose, onSuccess }) {
  const [activeTab, setActiveTab] = useState("signup")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [authError, setAuthError] = useState("")
  const [authSuccess, setAuthSuccess] = useState("")

  // Form data states
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
  })

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const clearErrors = () => {
    setFormErrors({})
    setAuthError("")
    setAuthSuccess("")
  }

  const handleSignup = async (event) => {
    event.preventDefault()
    clearErrors()
    setIsLoading(true)

    try {
      // Validate form
      const validation = validateSignupForm(signupData)
      if (!validation.isValid) {
        const errors = {}
        validation.errors.forEach((error) => {
          errors[error.field] = error.message
        })
        setFormErrors(errors)
        setIsLoading(false)
        return
      }

      // Sign up with Supabase
      const { data, error } = await supabase.auth.signUp({
        email: signupData.email,
        password: signupData.password,
        options: {
          data: {
            first_name: signupData.firstName,
            last_name: signupData.lastName,
            phone: signupData.phone,
            company: signupData.company,
            full_name: `${signupData.firstName} ${signupData.lastName}`,
          },
        },
      })

      if (error) {
        setAuthError(error.message)
      } else if (data.user) {
        setAuthSuccess("Account created successfully! Redirecting to dashboard...")
        setTimeout(() => {
          onSuccess?.(data.user)
          onClose()
          // Use window.location for reliable redirect
          window.location.href = "/userData"
        }, 2000)
      }
    } catch (error) {
      setAuthError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    clearErrors()
    setIsLoading(true)

    try {
      // Validate form
      const validation = validateLoginForm(loginData)
      if (!validation.isValid) {
        const errors = {}
        validation.errors.forEach((error) => {
          errors[error.field] = error.message
        })
        setFormErrors(errors)
        setIsLoading(false)
        return
      }

      // Sign in with Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      })

      if (error) {
        setAuthError(error.message)
      } else if (data.user) {
        setAuthSuccess("Login successful! Redirecting to dashboard...")
        setTimeout(() => {
          onSuccess?.(data.user)
          onClose()
          // Use window.location for reliable redirect
          window.location.href = "/userData"
        }, 1000)
      }
    } catch (error) {
      setAuthError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/userData`,
        },
      })

      if (error) {
        setAuthError(error.message)
      }
    } catch (error) {
      setAuthError("Social login failed. Please try again.")
    }
  }

  const resetForm = () => {
    setSignupData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      password: "",
      confirmPassword: "",
    })
    setLoginData({
      email: "",
      password: "",
      rememberMe: false,
    })
    clearErrors()
  }

  const handleTabChange = (value) => {
    setActiveTab(value)
    clearErrors()
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto relative">
        {/* Close button in the top-right corner */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome to Brandelize
          </DialogTitle>
          <DialogDescription className="text-center">
            Join thousands of businesses transforming their digital presence
          </DialogDescription>
        </DialogHeader>

        {authError && (
          <Alert className="border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">{authError}</AlertDescription>
          </Alert>
        )}

        {authSuccess && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">{authSuccess}</AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>

          <TabsContent value="signup">
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Create Your Account</CardTitle>
                <CardDescription>Start your digital transformation journey today</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="pl-10"
                          value={signupData.firstName}
                          onChange={(e) => setSignupData((prev) => ({ ...prev, firstName: e.target.value }))}
                          error={!!formErrors.firstName}
                        />
                      </div>
                      {formErrors.firstName && <p className="text-xs text-red-600">{formErrors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="pl-10"
                          value={signupData.lastName}
                          onChange={(e) => setSignupData((prev) => ({ ...prev, lastName: e.target.value }))}
                          error={!!formErrors.lastName}
                        />
                      </div>
                      {formErrors.lastName && <p className="text-xs text-red-600">{formErrors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-10"
                        value={signupData.email}
                        onChange={(e) => setSignupData((prev) => ({ ...prev, email: e.target.value }))}
                        error={!!formErrors.email}
                      />
                    </div>
                    {formErrors.email && <p className="text-xs text-red-600">{formErrors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        className="pl-10"
                        value={signupData.phone}
                        onChange={(e) => setSignupData((prev) => ({ ...prev, phone: e.target.value }))}
                        error={!!formErrors.phone}
                      />
                    </div>
                    {formErrors.phone && <p className="text-xs text-red-600">{formErrors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="company"
                        placeholder="Your Company"
                        className="pl-10"
                        value={signupData.company}
                        onChange={(e) => setSignupData((prev) => ({ ...prev, company: e.target.value }))}
                        error={!!formErrors.company}
                      />
                    </div>
                    {formErrors.company && <p className="text-xs text-red-600">{formErrors.company}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10"
                        value={signupData.password}
                        onChange={(e) => setSignupData((prev) => ({ ...prev, password: e.target.value }))}
                        error={!!formErrors.password}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {formErrors.password && <p className="text-xs text-red-600">{formErrors.password}</p>}
                    <PasswordStrength password={signupData.password} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10"
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                        error={!!formErrors.confirmPassword}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {formErrors.confirmPassword && <p className="text-xs text-red-600">{formErrors.confirmPassword}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>

                  <p className="text-xs text-center text-gray-600">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="login">
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Welcome Back</CardTitle>
                <CardDescription>Sign in to your Brandelize account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="loginEmail">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="loginEmail"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-10"
                        value={loginData.email}
                        onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                        error={!!formErrors.email}
                      />
                    </div>
                    {formErrors.email && <p className="text-xs text-red-600">{formErrors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loginPassword">Password *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="loginPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10"
                        value={loginData.password}
                        onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                        error={!!formErrors.password}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {formErrors.password && <p className="text-xs text-red-600">{formErrors.password}</p>}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember"
                        className="rounded border-gray-300"
                        checked={loginData.rememberMe}
                        onChange={(e) => setLoginData((prev) => ({ ...prev, rememberMe: e.target.checked }))}
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <Button variant="link" className="p-0 h-auto text-sm text-purple-600">
                      Forgot password?
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => handleSocialLogin("google")}
                      disabled={isLoading}
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => handleSocialLogin("facebook")}
                      disabled={isLoading}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
