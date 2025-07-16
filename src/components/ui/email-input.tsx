'use client'

import React, { useState } from 'react'
import { Mail, SendHorizonal, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// List of personal email domains to block
const PERSONAL_EMAIL_DOMAINS = [
    'gmail.com',
    'yahoo.com',
    'yahoo.co.uk',
    'yahoo.ca',
    'yahoo.fr',
    'yahoo.de',
    'hotmail.com',
    'outlook.com',
    'live.com',
    'msn.com',
    'aol.com',
    'icloud.com',
    'me.com',
    'mac.com',
    'protonmail.com',
    'tutanota.com',
    'yandex.com',
    'mail.ru',
    'zoho.com',
    'fastmail.com',
    'gmx.com',
    'web.de',
    'mail.com',
    '163.com',
    'qq.com',
    'sina.com',
    'rediffmail.com'
]

const validateEmail = (email: string) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return { isValid: false, message: 'Please enter a valid email address' }
    }

    // Extract domain from email
    const domain = email.split('@')[1]?.toLowerCase()
    
    // Check if it's a personal email domain
    if (PERSONAL_EMAIL_DOMAINS.includes(domain)) {
        return { isValid: false, message: 'Please use your company email address' }
    }

    return { isValid: true, message: '' }
}

interface EmailInputProps {
    onSubmit?: (email: string) => void
    placeholder?: string
    buttonText?: string
    className?: string
    showHelperText?: boolean
    size?: 'sm' | 'md' | 'lg'
}

export function EmailInput({ 
    onSubmit,
    placeholder = "Your mail address",
    buttonText = "Get Started",
    className,
    showHelperText = false,
    size = 'md'
}: EmailInputProps) {
    const [email, setEmail] = useState('')
    const [validation, setValidation] = useState<{ isValid: boolean; message: string }>({ isValid: true, message: '' })
    const [touched, setTouched] = useState(false)

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setEmail(value)
        
        if (value.trim()) {
            const validationResult = validateEmail(value)
            setValidation(validationResult)
        } else {
            setValidation({ isValid: true, message: '' })
        }
    }

    const handleEmailBlur = () => {
        setTouched(true)
        if (email.trim()) {
            const validationResult = validateEmail(email)
            setValidation(validationResult)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setTouched(true)
        
        if (!email.trim()) {
            setValidation({ isValid: false, message: 'Email address is required' })
            return
        }
        
        const validationResult = validateEmail(email)
        setValidation(validationResult)
        
        if (validationResult.isValid && onSubmit) {
            onSubmit(email)
        }
    }

    const showError = touched && !validation.isValid

    const sizeClasses = {
        sm: {
            container: 'max-w-sm',
            input: 'h-10 text-sm',
            button: 'size="sm"',
            icon: 'size-4'
        },
        md: {
            container: 'max-w-md',
            input: 'h-12 text-sm md:text-base',
            button: 'size="lg"',
            icon: 'size-4'
        },
        lg: {
            container: 'max-w-lg',
            input: 'h-12 text-sm md:text-base',
            button: 'size="lg"',
            icon: 'size-5'
        }
    }

    return (
        <form onSubmit={handleSubmit} className={cn("mx-auto w-full", sizeClasses[size].container, className)}>
            <div className={`bg-background relative grid grid-cols-[1fr_auto] items-center rounded-2xl pr-1 border shadow shadow-zinc-950/5 transition-all duration-200 ${
                showError 
                    ? 'border-red-500 ring-2 ring-red-500/20' 
                    : 'has-[input:focus]:ring-muted has-[input:focus]:ring-2'
            }`}>
                <Mail className={`pointer-events-none absolute inset-y-0 left-4 my-auto ${sizeClasses[size].icon} transition-colors duration-200 ${
                    showError ? 'text-red-500' : ''
                }`} />

                <input
                    placeholder={placeholder}
                    className={`${sizeClasses[size].input} w-full bg-transparent pl-12 pr-4 focus:outline-none transition-colors duration-200 ${
                        showError ? 'placeholder:text-red-400' : ''
                    }`}
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                />

                <div className="flex-shrink-0">
                    <Button
                        aria-label="submit"
                        size={size === 'sm' ? 'sm' : 'lg'}
                        type="submit"
                        disabled={!validation.isValid && touched}
                        className="rounded-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap">
                        <span className="hidden sm:block">{buttonText}</span>
                        <SendHorizonal
                            className={`relative mx-auto ${sizeClasses[size].icon} sm:hidden`}
                            strokeWidth={2}
                        />
                    </Button>
                </div>
            </div>
            
            {/* Error message */}
            {showError && (
                <div className="mt-4 flex items-center justify-center gap-1 text-sm text-red-600 dark:text-red-400">
                    <AlertCircle className="size-4" />
                    <span>{validation.message}</span>
                </div>
            )}
            
            {/* Helper text */}
            {!showError && showHelperText && (
                <p className="mt-2 text-xs text-muted-foreground text-center">
                    Please use your company email address
                </p>
            )}
        </form>
    )
} 