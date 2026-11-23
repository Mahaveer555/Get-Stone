import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-ivory px-4 py-32 text-center">
      <div className="max-w-md space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze block">
          404 Error
        </span>

        <h1 className="font-display text-5xl sm:text-6xl text-charcoal font-normal">
          Page Not Found
        </h1>

        <div className="w-16 h-[2px] bg-sandstone mx-auto" />

        <p className="text-sm text-stonegray leading-relaxed">
          The natural stone page or material detail you are looking for has moved or does not exist.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white text-xs uppercase tracking-widest font-semibold hover:bg-bronze transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 border border-charcoal text-charcoal text-xs uppercase tracking-widest font-semibold hover:bg-charcoal hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Stones</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
