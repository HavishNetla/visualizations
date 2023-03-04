import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="Main page" content="Havish's personal website" />
				<meta
					name="keywords"
					content="Havish, Netla, Georgia Tech, Developer, Data, Maryland, Data Visualizations, Visualizations, Maps, Baltimore, Race"
				/>
				<meta name="description" content="Havish Netla's data visualizations" />
				<meta name="author" content="Havish Netla" />
				<link rel="icon" type="image/png" href="/favicon.png?" />
				<title>Havish Netla Data Visualizations</title>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="transition duration-500 ease-in-out">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
