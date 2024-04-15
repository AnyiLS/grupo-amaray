import React from 'react'
import { CalendarItems, calendarItems } from './mocks/calendar.mock'
import moment from 'moment'

const Eventos = () => {
	const month = moment().month()
	const day = moment().date()

	const [slide, setSlide] = React.useState<number>(0);

	const handleAddPage = (): void => setSlide((slide + 1) > 18 ? 0 : slide + 1);

	const handleLessPage = (): void => setSlide((slide - 1) <= 0 ? 18 : slide - 1);

	const handleChangeDay = (day: number): void => {
		const index: CalendarItems | undefined = calendarItems.find((item: CalendarItems) => item.day === day);
		setSlide(index?.id || 1)
	}

	const handleAddMonth = () => {
		if (slide <= 3) return setSlide(4)
		else if (slide <= 8) return setSlide(9)
		else return setSlide(0)
	}

	const handleLessMonth = () => {
		if (slide <= 3) return setSlide(9)
		else if (slide <= 8) return setSlide(3)
		else return setSlide(0)
	}

	return (
		<React.Fragment>
			{calendarItems.map((item: CalendarItems, index: number) => {
				const Component = item.Component

				if (slide === index)
					return (
						<Component
							month={month}
							next={handleAddPage}
							prev={handleLessPage}
							today={day}
							onChangeDay={handleChangeDay}
							onChangeMonth={handleAddMonth}
							onLessMonth={handleLessMonth}
						/>
					)
				else return <React.Fragment></React.Fragment>
			})}
		</React.Fragment>
	)
}

export default Eventos
