import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import CustomBtn from '../shared/components/CustomBtn';

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center flex flex-col items-center justify-center">
      {/* Status Pill */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-600 mb-6">
        <span>Error 404</span>
      </div>

      {/* Large Minimalist Display */}
      <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-neutral-950 leading-none select-none">
        404
      </h1>

      {/* Heading & Subtext */}
      <h2 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
        Page not found
      </h2>
      <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-md leading-relaxed">
        The page you are looking for doesn’t exist or may have been moved. Let’s get you back on track.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
        <CustomBtn
          variant="primary"
          size="md"
          leftIcon={<Home className="w-4 h-4" />}
          onClick={() => navigate('/')}
          className="w-full sm:w-auto"
        >
          Back to Home
        </CustomBtn>
        <CustomBtn
          variant="secondary"
          size="md"
          leftIcon={<ArrowLeft className="w-4 h-4" />}
          onClick={() => navigate(-1)}
          className="w-full sm:w-auto"
        >
          Previous Page
        </CustomBtn>
      </div>
    </div>
  );
};

export default NotFoundPage;
