/* eslint-disable */
// @ts-nocheck
import React, { useRef, useEffect } from 'react'
import { Runtime, Inspector } from '@observablehq/runtime'
import notebook from "@havish/see-baltimores-segregation-with-detail";

export default () => {
	const chartRef = useRef()
	const legendRef = useRef()
	const viewofRaceRef = useRef()

	useEffect(() => {
		const runtime = new Runtime()
		runtime.module(notebook, (name) => {
			if (name === 'chart') {
				return new Inspector(chartRef.current)
			}

			if (name === 'legend') {
				return new Inspector(legendRef.current)
			}

			if (name === 'viewof race') {
				return new Inspector(viewofRaceRef.current)
			}

			return <p>error</p>
		})
		return () => runtime.dispose()
	}, [])

	return (
		<>
			<div ref={viewofRaceRef} style={{ display: 'flex' }} />
			<div ref={legendRef} />
			<div ref={chartRef} />
		</>
	)
}