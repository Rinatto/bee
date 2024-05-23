import './styles/first-page.css';
import './styles/map-page.css';
import './styles/resume.css';

import { initializeYandexMap } from './scripts/yandexMap';
import { loadPageContent } from './scripts/navigation';

document.addEventListener('DOMContentLoaded', function() {
    loadPageContent();
    initializeYandexMap();
});
