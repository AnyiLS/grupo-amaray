import May02 from '../components/02May'
import May04 from '../components/04May'
import Mar06 from '../components/06Mar'
import Mar07 from '../components/07Mar'
import Mar08 from '../components/08Mar'
import Mar09 from '../components/09Mar'
import Feb10 from '../components/10Feb'
import Mar15 from '../components/15Mar'
import May16 from '../components/16May'
import May18 from '../components/18May'
import May22 from '../components/22May'
import May23 from '../components/23May'
import May24 from '../components/24May'
import May25 from '../components/25May'
import Feb29 from '../components/29Feb'
import May30 from '../components/30May'
import May31 from '../components/31May'
import Feb3, { ICalendar } from '../components/3Feb'
import Feb9 from '../components/9Feb'

export interface CalendarItems {
	id: number
	Component: React.FunctionComponent<ICalendar>
	day: number
}

export const calendarItems: CalendarItems[] = [
	{ id: 0, Component: Feb3, day: 3 },
	{ id: 1, Component: Feb9, day: 90 },
	{ id: 2, Component: Feb10, day: 10 },
	{ id: 3, Component: Feb29, day: 29 },
	{ id: 4, Component: Mar06, day: 6 },
	{ id: 5, Component: Mar07, day: 7 },
	{ id: 6, Component: Mar08, day: 8 },
	{ id: 7, Component: Mar09, day: 9 },
	{ id: 8, Component: Mar15, day: 15 },
	{ id: 9, Component: May02, day: 2 },
	{ id: 10, Component: May04, day: 4 },
	{ id: 11, Component: May16, day: 16 },
	{ id: 12, Component: May18, day: 18 },
	{ id: 13, Component: May22, day: 22 },
	{ id: 14, Component: May23, day: 23 },
	{ id: 15, Component: May24, day: 24 },
	{ id: 16, Component: May25, day: 25 },
	{ id: 17, Component: May30, day: 30 },
	{ id: 18, Component: May31, day: 31 },
]

export const daysMar: any = {
	'29-2': { transform: 'translate(335px, 470px)' },
	'1-3': { transform: 'translate(422px, 470px)' },
	'2-3': { transform: 'translate(508px, 470px)' },
	'3-3': { transform: 'translate(-6px, 519px)' },
	'4-3': { transform: 'translate(75px, 519px)' },
	'5-3': { transform: 'translate(165px, 519px)' },
	'6-3': { transform: 'translate(251px, 519px)', hasEvent: true },
	'7-3': { transform: 'translate(336px, 519px)', hasEvent: true },
	'8-3': { transform: 'translate(422px, 519px)', hasEvent: true },
	'9-3': { transform: 'translate(508px, 519px)', hasEvent: true },
	'10-3': { transform: 'translate(-6px, 517px)' },
	'11-3': { transform: 'translate(75px, 517px)' },
	'12-3': { transform: 'translate(165px, 517px)' },
	'13-3': { transform: 'translate(251px, 564px)' },
	'14-3': { transform: 'translate(336px, 564px)' },
	'15-3': { transform: 'translate(422px, 564px)', hasEvent: true },
	'16-3': { transform: 'translate(508px, 564px)' },
	'17-3': { transform: 'translate(-6px, 564px)' },
	'18-3': { transform: 'translate(75px, 564px)' },
	'19-3': { transform: 'translate(165px, 564px)' },
	'20-3': { transform: 'translate(251px, 614px)' },
	'21-3': { transform: 'translate(336px, 614px)' },
	'22-3': { transform: 'translate(422px, 614px)' },
	'23-3': { transform: 'translate(508px, 614px)' },
	'24-3': { transform: 'translate(-6px, 614px)' },
	'25-3': { transform: 'translate(75px, 614px)' },
	'26-3': { transform: 'translate(165px, 614px)' },
	'27-3': { transform: 'translate(251px, 661px)' },
	'28-3': { transform: 'translate(336px, 661px)' },
	'29-3': { transform: 'translate(422px, 661px)' },
	'30-3': { transform: 'translate(508px, 661px)' },
	'31-3': { transform: 'translate(-6px, 661px)' },
}

export const daysFeb: any = {   
	'29-1': { transform: 'translate(78px, 470px)' },
	'30-1': { transform: 'translate(164px, 470px)' },
	'31-1': { transform: 'translate(249px, 470px)' },
	'1-2': { transform: 'translate(335px, 470px)' },
	'2-2': { transform: 'translate(422px, 470px)', hasEvent: true },
	'3-2': { transform: 'translate(508px, 470px)', hasEvent: true },
	'4-2': { transform: 'translate(78px, 517px)' },
	'5-2': { transform: 'translate(78px, 517px)' },
	'6-2': { transform: 'translate(78px, 517px)' },
	'7-2': { transform: 'translate(78px, 517px)' },
	'8-2': { transform: 'translate(78px, 517px)' },
	'9-2': { transform: 'translate(422px, 517px)', hasEvent: true },
	'10-2': { transform: 'translate(508px, 517px)', hasEvent: true },
	'11-2': { transform: 'translate(78px, 564px)' },
	'12-2': { transform: 'translate(78px, 564px)' },
	'13-2': { transform: 'translate(78px, 564px)' },
	'14-2': { transform: 'translate(78px, 564px)' },
	'15-2': { transform: 'translate(78px, 564px)' },
	'16-2': { transform: 'translate(78px, 564px)' },
	'17-2': { transform: 'translate(78px, 564px)' },
	'18-2': { transform: 'translate(78px, 614px)' },
	'19-2': { transform: 'translate(78px, 614px)' },
	'20-2': { transform: 'translate(78px, 614px)' },
	'21-2': { transform: 'translate(78px, 614px)' },
	'22-2': { transform: 'translate(78px, 614px)' },
	'23-2': { transform: 'translate(78px, 614px)' },
	'24-2': { transform: 'translate(78px, 614px)' },
	'25-2': { transform: 'translate(78px, 661px)' },
	'26-2': { transform: 'translate(78px, 661px)' },
	'27-2': { transform: 'translate(78px, 661px)' },
	'28-2': { transform: 'translate(78px, 661px)' },
	'29-2': { transform: 'translate(335px, 661px)', hasEvent: true },
}
