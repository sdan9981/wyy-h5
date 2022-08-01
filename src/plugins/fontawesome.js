/* import the fontawesome core */
import {
	library
} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {
	FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
	faUserSecret,
	faMusic,
	faPodcast,
	faHeartCirclePlus,
	faBars,
	faMicrophoneLines,
	faRankingStar,
	faCalendarCheck,
	faRadio,
	faClipboardList,
	faBookQuran,
	faCompactDisc,
	faFileVideo,
	faHeartPulse,
	faGamepad,
	faStar,
	faCaretRight
} from '@fortawesome/free-solid-svg-icons'
import {
	faTwitter,
	faNapster,
	faSoundcloud
} from '@fortawesome/free-brands-svg-icons'
// import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
const fontwArr = [
	faUserSecret, 
	faTwitter, 
	faNapster, 
	faMusic, 
	faPodcast, 
	faHeartCirclePlus,
	faSoundcloud,
	faBars,
	faMicrophoneLines,
	faRankingStar,
	faCalendarCheck,
	faRadio,
	faClipboardList,
	faBookQuran,
	faCompactDisc,
	faFileVideo,
	faHeartPulse,
	faGamepad,
	faStar,
	faCaretRight
]
fontwArr.forEach((item) => {
	library.add(item)
})

export default (app) => {
	app.component('font-awesome-icon', FontAwesomeIcon)
}