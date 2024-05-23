import '../styles/first-page.css';
import '../styles/map-page.css';
import '../styles/resume.css';

import { loadPageContent } from './navigation';

document.addEventListener('DOMContentLoaded', function() {
    const initialPage = window.location.pathname.replace("/", "") || "index";
    loadPageContent(initialPage, false);
});