import reactDoom from 'react-dom/client';

// Import Portfolio and global styles
import { Portfolio } from '@/view/portfolio.view.jsx';
import './index.css';

reactDoom.createRoot(document.getElementById('root')).render(<Portfolio />);
