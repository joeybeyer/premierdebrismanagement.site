'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { PhoneButton } from '@/components/ui/PhoneButton'

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  zip: z.string().min(5, 'Valid zip code required'),
  size: z.enum(['10', '20', '30', '40']),
  projectType: z.string().min(1, 'Select project type'),
  deliveryDate: z.string().min(1, 'Select delivery date'),
})

type QuoteFormData = z.infer<typeof quoteSchema>

export const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      size: '20',
      projectType: '',
      deliveryDate: '',
    },
  })

  const onSubmit = async (data: QuoteFormData) => {
    setError(null)
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please call us instead.')
      }
    } catch {
      setError('Something went wrong. Please call us instead.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">
          Thank You!
        </h3>
        <p className="text-slate-600 mb-4">
          We've received your request and will call you shortly.
        </p>
        <p className="text-sm text-slate-500">
          Need immediate assistance? Call us now:
        </p>
        <div className="mt-4">
          <PhoneButton />
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm">
          {error}
        </div>
      )}

      <Input
        label="Full Name"
        placeholder="John Smith"
        {...register('name')}
        error={errors.name?.message}
      />

      <Input
        label="Phone Number"
        type="tel"
        placeholder="(555) 123-4567"
        {...register('phone')}
        error={errors.phone?.message}
      />

      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label="Zip Code"
        placeholder="12345"
        {...register('zip')}
        error={errors.zip?.message}
      />

      <Select
        label="Dumpster Size"
        {...register('size')}
        options={[
          { value: '10', label: '10 Yard ($299-$449)' },
          { value: '20', label: '20 Yard ($349-$549) - Most Popular' },
          { value: '30', label: '30 Yard ($399-$649)' },
          { value: '40', label: '40 Yard ($449-$799)' },
        ]}
        error={errors.size?.message}
      />

      <Select
        label="Project Type"
        {...register('projectType')}
        placeholder="Select project type"
        options={[
          { value: 'renovation', label: 'Home Renovation' },
          { value: 'roofing', label: 'Roofing Project' },
          { value: 'construction', label: 'Construction' },
          { value: 'cleanout', label: 'Estate/Home Cleanout' },
          { value: 'demolition', label: 'Demolition' },
          { value: 'landscaping', label: 'Landscaping/Yard Work' },
          { value: 'other', label: 'Other' },
        ]}
        error={errors.projectType?.message}
      />

      <Select
        label="Delivery Date"
        {...register('deliveryDate')}
        placeholder="When do you need it?"
        options={[
          { value: 'asap', label: 'ASAP / Same Day' },
          { value: 'tomorrow', label: 'Tomorrow' },
          { value: 'this-week', label: 'This Week' },
          { value: 'next-week', label: 'Next Week' },
          { value: 'flexible', label: 'Flexible' },
        ]}
        error={errors.deliveryDate?.message}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
      </Button>

      <p className="text-center text-sm text-slate-500">
        Or call us directly: <PhoneButton variant="link" />
      </p>
    </form>
  )
}
