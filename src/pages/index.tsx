export default function Home() {
	return (
		<div>
			<div className="p-3 text-center">
				<h4>Welcome to the IT-Lab! Check out our events:</h4>
			</div>
			<iframe
				className="rounded border border-gh-border"
				src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FBrussels&showTitle=0&showTabs=0&showDate=1&showPrint=0&showCalendars=0&hl=nl_BE&src=aXRsYWIuaGdAZ21haWwuY29t&color=%23039BE5"
				width="800"
				height="600"
			></iframe>
		</div>
	);
}
