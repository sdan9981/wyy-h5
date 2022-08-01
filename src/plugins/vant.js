import {
	Button,
	Search,
	Icon,
	Swipe,
	SwipeItem
} from 'vant'

const vantArr = [
	Button,
	Search,
	Icon,
	Swipe,
	SwipeItem
]

export default (app) => {
	vantArr.forEach(item => {
		return app.use(item)
	})
}
