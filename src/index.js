import './styles/first-page.css';
import './styles/map-page.css';
import './styles/resume.css';

import { loadPageContent } from './scripts/navigation';

document.addEventListener('DOMContentLoaded', function() {
    const initialPage = window.location.pathname.replace("/", "") || "activity";
    loadPageContent(initialPage, false);
});