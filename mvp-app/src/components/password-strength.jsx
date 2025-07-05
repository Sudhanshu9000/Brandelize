import { validatePassword } from "@/lib/validations"

export function PasswordStrength({ password }) {
  if (!password) return null

  const validation = validatePassword(password)
  const strength = validation.isValid ? 100 : Math.max(20, (5 - validation.errors.length) * 20)

  const getStrengthColor = () => {
    if (strength >= 80) return "bg-green-500"
    if (strength >= 60) return "bg-yellow-500"
    if (strength >= 40) return "bg-orange-500"
    return "bg-red-500"
  }

  const getStrengthText = () => {
    if (strength >= 80) return "Strong"
    if (strength >= 60) return "Good"
    if (strength >= 40) return "Fair"
    return "Weak"
  }

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-600">Password Strength</span>
        <span
          className={`text-xs font-medium ${
            strength >= 80
              ? "text-green-600"
              : strength >= 60
                ? "text-yellow-600"
                : strength >= 40
                  ? "text-orange-600"
                  : "text-red-600"
          }`}
        >
          {getStrengthText()}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor()}`}
          style={{ width: `${strength}%` }}
        />
      </div>
      {validation.errors.length > 0 && (
        <ul className="mt-2 text-xs text-red-600 space-y-1">
          {validation.errors.map((error, index) => (
            <li key={index}>• {error}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
