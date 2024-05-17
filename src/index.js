import './styles/first-page.css';
import './styles/map-page.css';
import './styles/resume.css';

import arrowImg from './images/nav-top/Arrow.svg';
import statisticsImg from './images/nav-top/Statistics.svg';
import invoicesImg from './images/nav-top/Invoices.svg';
import scheduleImg from './images/nav-top/Schedule.svg';
import activityImg from './images/nav-bottom/Activity.svg';
import mapImg from './images/nav-bottom/Map.svg';
import timeImg from './images/nav-bottom/Time.svg';
import notesImg from './images/nav-bottom/Notes.svg';
import friendsImg from './images/nav-bottom/Friends.svg';
import photosImg from './images/nav-bottom/Photos.svg';
import settingsImg from './images/nav-bottom/Settings.svg';
import arrow2Img from './images/nav-bottom/Arrow2.svg';
import artImg from './images/main-content/art.svg';
import commentImg from './images/main-content/comment.svg';
import comment2Img from './images/main-content/comment2.svg';
import eyeImg from './images/main-content/eye.svg';
import timeContentImg from './images/main-content/time.svg';
import timeContent2Img from './images/main-content/time2.svg';
import arrow3Img from './images/main-content/arrow3.svg';
import arrow4Img from './images/main-content/arrow4.svg';
import telegramImg from './images/main-resume/telegramm.svg';
import hhImg from './images/main-resume/hh.svg';
import twitterImg from './images/main-resume/twitter.svg';
import avatarImg from './images/main-resume/Avatar.svg';
import profileImg from './images/main-navigation/Profile.svg';
import balanceImg from './images/main-navigation/Balance.svg';
import connectImg from './images/main-navigation/Connect.svg';
import friendsNavImg from './images/main-navigation/Friends.svg';
import eventsImg from './images/main-navigation/Events.svg';
import accountSettingsImg from './images/main-navigation/AccountSettings.svg';
import arrow3NavImg from './images/main-navigation/Arrow3.svg';
import arrow4NavImg from './images/main-navigation/Arrow4.svg';

import { initializeYandexMap } from './scripts/yandexMap';
import { loadPageContent } from './scripts/navigation';
import { startTimer } from './scripts/timer';

document.addEventListener('DOMContentLoaded', function() {
    loadPageContent();
    startTimer();
    initializeYandexMap();

    const setImageSrc = (selector, src) => {
        const imgElement = document.querySelector(selector);
        if (imgElement) {
            imgElement.src = src;
        }
    };

    const images = [
        { selector: 'img[alt="arrow"]', src: arrowImg },
        { selector: 'img[alt="Statistics"]', src: statisticsImg },
        { selector: 'img[alt="Invoices"]', src: invoicesImg },
        { selector: 'img[alt="Schedule"]', src: scheduleImg },
        { selector: 'img[alt="Activity"]', src: activityImg },
        { selector: 'img[alt="Map"]', src: mapImg },
        { selector: 'img[alt="Time"]', src: timeImg },
        { selector: 'img[alt="Notes"]', src: notesImg },
        { selector: 'img[alt="Friends"]', src: friendsImg },
        { selector: 'img[alt="Photos"]', src: photosImg },
        { selector: 'img[alt="Settings"]', src: settingsImg },
        { selector: 'img[alt="Arrow2"]', src: arrow2Img },
        { selector: 'img[alt="art"]', src: artImg },
        { selector: 'img[alt="comment"]', src: commentImg },
        { selector: 'img[alt="comment2"]', src: comment2Img },
        { selector: 'img[alt="eye"]', src: eyeImg },
        { selector: 'img[alt="time"]', src: timeContentImg },
        { selector: 'img[alt="time2"]', src: timeContent2Img },
        { selector: 'img[alt="arrow3"]', src: arrow3Img },
        { selector: 'img[alt="arrow4"]', src: arrow4Img },
        { selector: 'img[alt="telegramm"]', src: telegramImg },
        { selector: 'img[alt="hh"]', src: hhImg },
        { selector: 'img[alt="twitter"]', src: twitterImg },
        { selector: 'img[alt="Profile"]', src: profileImg },
        { selector: 'img[alt="Balance"]', src: balanceImg },
        { selector: 'img[alt="Connections"]', src: connectImg },
        { selector: 'img[alt="FriendsNav"]', src: friendsNavImg },
        { selector: 'img[alt="Events"]', src: eventsImg },
        { selector: 'img[alt="settings"]', src: accountSettingsImg },
        { selector: 'img[alt="Arrow3Nav"]', src: arrow3NavImg },
        { selector: 'img[alt="Arrow4Nav"]', src: arrow4NavImg },
        { selector: 'img[alt="Avatar"]', src: avatarImg },
    ];

    images.forEach(({ selector, src }) => {
        setImageSrc(selector, src);
    });
});
