import {
	Button,
	Search,
	Icon,
	Swipe,
	SwipeItem,
	Popup,
	Slider
} from 'vant'

const vantArr = [
	Button,
	Search,
	Icon,
	Swipe,
	SwipeItem,
	Popup,
	Slider
]

export default (app) => {
	vantArr.forEach(item => {
		return app.use(item)
	})
}
