import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { businessInfo } from '../data/business';

const enquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  email: z.string().email('Please enter a valid email address').or(z.literal('')),
  stoneType: z.string().min(1, 'Please select a stone type'),
  projectLocation: z.string().min(2, 'Please specify project city / location'),
  quantity: z.string().optional(),
  message: z.string().min(10, 'Please share a brief note about your requirements (minimum 10 characters)'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Please consent to be contacted regarding this enquiry',
  }),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
  defaultStone?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ defaultStone, className = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<EnquiryFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      stoneType: defaultStone || 'Natural Sandstone',
      projectLocation: '',
      quantity: '',
      message: '',
      consent: true,
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    // Simulate high-end submission processing
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmissionSuccess(data);
  };

  const handleSendViaWhatsApp = (data: EnquiryFormData) => {
    const text = `*New Natural Stone Enquiry - GET STONE*%0A%0A*Name:* ${data.fullName}%0A*Phone:* ${data.phone}%0A*Email:* ${data.email || 'N/A'}%0A*Stone Type:* ${data.stoneType}%0A*Location:* ${data.projectLocation}%0A*Quantity:* ${data.quantity || 'TBD'}%0A*Requirement:* ${data.message}`;
    window.open(`https://wa.me/919214567181?text=${text}`, '_blank');
  };

  return (
    <div className={`bg-charcoal text-ivory p-6 sm:p-10 border border-sandstone/25 shadow-2xl ${className}`}>
      {submissionSuccess ? (
        <div className="py-8 text-center space-y-6 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-sandstone/20 border border-sandstone flex items-center justify-center mx-auto text-sandstone">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <h3 className="font-display text-3xl font-medium text-white">
              Enquiry Recorded
            </h3>
            <p className="mt-2 text-sm text-ivory/80 max-w-md mx-auto">
              Thank you, <strong className="text-sandstone">{submissionSuccess.fullName}</strong>. Your enquiry for <strong className="text-sandstone">{submissionSuccess.stoneType}</strong> has been logged in this presentation demo.
            </p>
          </div>

          <div className="p-4 bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs text-stonegray space-y-1">
            <p className="font-semibold text-sandstone uppercase tracking-wider text-[11px]">
              Direct Contact Option
            </p>
            <p>
              To dispatch your exact specifications directly to the GET STONE sales desk right now, tap below:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => handleSendViaWhatsApp(submissionSuccess)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer"
            >
              <WhatsAppIcon size={16} />
              <span>Forward via WhatsApp</span>
            </button>

            <a
              href={`tel:${businessInfo.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#007AFF] hover:bg-[#0066d6] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 92145 67181</span>
            </a>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setSubmissionSuccess(null);
                reset();
              }}
              className="text-xs uppercase tracking-widest text-stonegray hover:text-white underline underline-offset-4"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="border-b border-white/10 pb-4 mb-6">
            <span className="text-xs uppercase tracking-widest text-bronze font-semibold">
              Project Consultation & Estimates
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white font-normal mt-1">
              Request Stone Quotation
            </h3>
            <p className="text-xs text-stonegray mt-1">
              Tell us about your stone specifications, site location, and dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-sandstone mb-2 font-medium">
                Full Name *
              </label>
              <input
                type="text"
                {...register('fullName')}
                placeholder="e.g. Ar. Rajesh Sharma"
                className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-stonegray text-sm focus:outline-none focus:border-sandstone transition-colors"
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-sandstone mb-2 font-medium">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register('phone')}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-stonegray text-sm focus:outline-none focus:border-sandstone transition-colors"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-sandstone mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                {...register('email')}
                placeholder="your.email@domain.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-stonegray text-sm focus:outline-none focus:border-sandstone transition-colors"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Stone Type Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-sandstone mb-2 font-medium">
                Stone Material *
              </label>
              <select
                {...register('stoneType')}
                className="w-full px-4 py-3 bg-charcoal-dark border border-white/15 text-white text-sm focus:outline-none focus:border-sandstone transition-colors cursor-pointer"
              >
                <option value="Natural Sandstone">Natural Sandstone (Kota & Rajasthan)</option>
                <option value="Bijolia Stone">Bijolia Stone (Natural Cleft Paving/Masonry)</option>
                <option value="Kota Stone">Kota Stone (Greenish-Blue / Brown Limestone)</option>
                <option value="Basalt Stone">Basalt Stone (Dark Volcanic Igneous)</option>
                <option value="Architectural Marble (Concept)">Architectural Marble (Concept Enquiry)</option>
                <option value="Architectural Granite (Concept)">Architectural Granite (Concept Enquiry)</option>
                <option value="Natural Stone Cladding">Natural Stone Cladding</option>
                <option value="General Architectural Consultation">General Consultation / Mixed Order</option>
              </select>
              {errors.stoneType && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.stoneType.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Project Location */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-sandstone mb-2 font-medium">
                Project City / Site Location *
              </label>
              <input
                type="text"
                {...register('projectLocation')}
                placeholder="e.g. Kota / Jaipur / Delhi NCR / Mumbai"
                className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-stonegray text-sm focus:outline-none focus:border-sandstone transition-colors"
              />
              {errors.projectLocation && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.projectLocation.message}
                </p>
              )}
            </div>

            {/* Estimated Quantity */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-sandstone mb-2 font-medium">
                Estimated Quantity / Area (Optional)
              </label>
              <input
                type="text"
                {...register('quantity')}
                placeholder="e.g. 5,000 sq ft or 2 truckloads"
                className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-stonegray text-sm focus:outline-none focus:border-sandstone transition-colors"
              />
            </div>
          </div>

          {/* Requirement Message */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-sandstone mb-2 font-medium">
              Project Details & Specific Finishes *
            </label>
            <textarea
              rows={4}
              {...register('message')}
              placeholder="Describe required thickness, finishes (honed, flamed, cleft, polished), delivery schedule, or design requirements..."
              className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-stonegray text-sm focus:outline-none focus:border-sandstone transition-colors resize-y"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              {...register('consent')}
              className="mt-1 accent-sandstone rounded-none w-4 h-4 cursor-pointer"
            />
            <label htmlFor="consent" className="text-xs text-stonegray leading-relaxed cursor-pointer">
              I agree to be contacted by GET STONE regarding this natural stone quotation and project requirements.
            </label>
          </div>
          {errors.consent && (
            <p className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.consent.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-sandstone hover:bg-white text-charcoal font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Preparing Enquiry...</span>
            ) : (
              <>
                <span>Send Stone Enquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
