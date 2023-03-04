/* eslint-disable */
// @ts-nocheck
import React, { useRef, useEffect } from 'react'
import { Runtime, Inspector } from '@observablehq/runtime'
import notebook from "@havish/who-would-voter-id-laws-impact-the-most";

export default () => {
	const chartRef = useRef()
	const legendRef = useRef()

	useEffect(() => {
		const runtime = new Runtime()
		runtime.module(notebook, (name) => {
			if (name === 'chart') {
				return new Inspector(chartRef.current)
			}

			if (name === 'legend') {
				return new Inspector(legendRef.current)
			}

			return <p>error</p>
		})
		return () => runtime.dispose()
	}, [])

	return (
		<>
			<div ref={legendRef} />
			<div ref={chartRef} />
		</>
	)
}
