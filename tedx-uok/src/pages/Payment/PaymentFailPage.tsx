import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const PaymentFailPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.backgroundColor = '#000000';
    
    return () => {
      document.body.style.backgroundColor = '';
      document.documentElement.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <style>{`
        body, html, #root {
          background-color: #000000 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        * {
          letter-spacing: 0 !important;
        }
        @keyframes xmark {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes circle {
          0% {
            stroke-dashoffset: 240;
          }
          100% {
            stroke-dashoffset: 480;
          }
        }
        .error-circle {
          stroke-dasharray: 240;
          stroke-dashoffset: 480;
          animation: circle 0.6s ease-in-out forwards;
        }
        .error-x {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: xmark 0.6s 0.6s ease-in-out forwards;
        }
      `}</style>

      <div
        style={{
          backgroundColor: '#000000',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle
                className="error-circle"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#EB0028"
                strokeWidth="4"
              />
              <line
                className="error-x"
                x1="40"
                y1="40"
                x2="80"
                y2="80"
                stroke="#EB0028"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                className="error-x"
                x1="80"
                y1="40"
                x2="40"
                y2="80"
                stroke="#EB0028"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#FFFFFF', letterSpacing: '0' }}>
            Payment Failed
          </h1>
          
          <p className="text-xl text-gray-300 mb-8" style={{ letterSpacing: '0' }}>
            Unfortunately, we couldn't process your payment.
          </p>

          <div className="bg-[#0E0E0E] border border-[#EB0028] rounded-xl p-8 mb-8">
            <h3 className="text-lg font-bold text-white mb-4" style={{ letterSpacing: '0' }}>
              Common reasons for payment failure:
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <span className="text-[#EB0028] flex-shrink-0">•</span>
                <p className="text-gray-300" style={{ letterSpacing: '0' }}>
                  Insufficient funds in your account
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-[#EB0028] flex-shrink-0">•</span>
                <p className="text-gray-300" style={{ letterSpacing: '0' }}>
                  Incorrect card details or expired card
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-[#EB0028] flex-shrink-0">•</span>
                <p className="text-gray-300" style={{ letterSpacing: '0' }}>
                  Your bank declined the transaction
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-[#EB0028] flex-shrink-0">•</span>
                <p className="text-gray-300" style={{ letterSpacing: '0' }}>
                  Network or connection issues
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="inline-block bg-[#EB0028] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#c7001f] transition-all"
              style={{ color: '#FFFFFF', letterSpacing: '0' }}
            >
              Try Again
            </button>
            
            <Link
              to="/register"
              className="inline-block bg-[#1F1F1F] border border-[#EB0028] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#2F2F2F] transition-all"
              style={{ color: '#FFFFFF', letterSpacing: '0', textDecoration: 'none' }}
            >
              Return to Registration
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-12">
            <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3" style={{ letterSpacing: '0' }}>
                Need Help?
              </h3>
              <p className="text-gray-400 mb-4" style={{ letterSpacing: '0' }}>
                If you continue to experience issues, please contact your bank or reach out to our support team.
              </p>
              <Link
                to="/contact"
                className="inline-block text-[#EB0028] hover:underline font-semibold"
                style={{ letterSpacing: '0' }}
              >
                Contact Support →
              </Link>
            </div>
          </div>

          {/* Home Link */}
          <div className="mt-8">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-300 transition-colors"
              style={{ letterSpacing: '0' }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentFailPage;
