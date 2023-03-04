/* eslint-disable */
// @ts-nocheck
import React, { useRef, useEffect } from 'react'
import { Runtime, Inspector } from '@observablehq/runtime'
import notebook from '@havish/where-are-houses-in-maryland-bieng-built'

export default () => {
	const barChartRef = useRef()
	const viewofLocationRef = useRef()
	const legendRef = useRef()
	const chartRef = useRef()

	useEffect(() => {
		const runtime = new Runtime()
		runtime.module(notebook, (name) => {
			if (name === 'barChart') {
				return new Inspector(barChartRef.current)
			}

			if (name === 'viewof location') {
				return new Inspector(viewofLocationRef.current)
			}

			if (name === 'legend') {
				return new Inspector(legendRef.current)
			}

			if (name === 'chart') {
				return new Inspector(chartRef.current)
			}

			return <p>error</p>
		})
		return () => runtime.dispose()
	}, [])

	return (
		<>
			<div ref={viewofLocationRef} />
			<div ref={barChartRef} />
			<div ref={legendRef} />
			<div ref={chartRef} />
		</>
	)
}
