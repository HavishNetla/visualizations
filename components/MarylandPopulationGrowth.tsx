/* eslint-disable */
// @ts-nocheck
import React, { useRef, useEffect } from 'react'
import { Runtime, Inspector } from '@observablehq/runtime'
import notebook from '@havish/which-counties-are-growing-in-maryland'

export default () => {
	const chartRef = useRef()
	const viewofPcntOrNumRef = useRef()

	useEffect(() => {
		const runtime = new Runtime()
		runtime.module(notebook, (name) => {
			if (name === 'chart') {
				return new Inspector(chartRef.current)
			}

			if (name === 'viewof pcntOrNum') {
				return new Inspector(viewofPcntOrNumRef.current)
			}

			return <p>error</p>
		})
		return () => runtime.dispose()
	}, [])

	return (
		<>
			<div ref={viewofPcntOrNumRef} />
			<div ref={chartRef} />
		</>
	)
}
