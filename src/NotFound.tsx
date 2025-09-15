import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Oops! Page Not Found</h2>
      <p className="notfound-text">
        The page you are looking for might have been removed or doesn’t exist.
      </p>
      <Link to="/" className="notfound-btn">
        Go Back Home
      </Link>

      <style>{`
        .notfound-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
           background: var(--dark-black-purple-color); 
          text-align: center;
          padding: 0 1rem;
        }

        .notfound-title {
          font-size: 9rem;
          font-weight: bold;
          color: #facc15; 
        }

        .notfound-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1rem;
          color: #006affff; 
        }

        .notfound-text {
          margin-top: 0.5rem;
          color: #6b7280; 
        }

        .notfound-btn {
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          background-color: #facc15; 
          color: black;
          border-radius: 9999px;
          font-weight: 500;
          text-decoration: none;
          transition: background-color 0.3s ease;
          display: inline-block;
        }

        .notfound-btn:hover {
          background-color: #fbbf24; 
        }

        /* Responsive */
        @media (min-width: 768px) {
          .notfound-subtitle {
            font-size: 1.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
