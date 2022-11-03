import React, { useEffect } from 'react'
// import styles from './QuickView.module.css'
// import './QuickView.css'

import $$ from '../js/shortJS'

function QuickView() {
	const eF = (e) => {
		if (e.key === 'Escape') {
			$$.qcL('.quickT')
		}
	}

	useEffect(() => {
		$$.oe(document, eF, 'keyup')
		$$.qcLm('#quick', { selT: '.quickT' })

		return () => {
			$$.oeR(document, eF, 'keyup')
		}
	}, [])

	return (
		<>
			{/* <button type={props.type} className={styles.button} onClick={props.onClick}> */}

			<article>
				<div className="quickview quickT" style={{ overflowY: 'scroll' }}>
					{/* <div id="quickviewDefault" className="quickview quickT my-1"> */}
					{/* <div className="box has-background-primary p-2"> */}
					<div className="box py-2 px-3" style={{ backgroundColor: '#375A7F' }}>
						<header className="qv_h is-flex is-justify-content-space-between p-2">
							<p className="is-size-5 has-text-white">ゲーム一覧</p>
							<span
								className="delete deleteQV"
								onClick={() => {
									$$.qcL('.quickT')
								}}
							></span>
						</header>

						<div className="quickview-body qv_b">
							<article className="message is-primary mb-0">
								<div className="message-header pb-1">
									<p>リンク先</p>
								</div>
								<div className="message-body is-size-6 py-2 px-0">
									<table className="table is-hoverable">
										<tbody>
											<tr>
												<th className="has-text-right is-flex-grow-5">
													<a href="https://affectionate-wozniak-de01a2.netlify.app/">
														初めての【 けいさん 】
													</a>
												</th>
												<td className="td_flex-direction is-size-7 is-flex-grow-4">
													だれでもできる
												</td>
											</tr>
											<tr>
												<th className="has-text-right is-flex-grow-5">
													<a href="https://jolly-lamport-67e201.netlify.app">
														しんけいすいじゃく
													</a>
												</th>
												<td className="td_width is-size-7 is-flex-grow-4">
													忍者トランプ
												</td>
											</tr>
											<tr>
												<th className="has-text-right is-flex-grow-5">
													<a href="https://flashcard2.netlify.app">
														一発勝負 <span style={{ color: 'red' }}>❣</span>
													</a>
												</th>
												<td className="td_boxes is-size-7 is-flex-grow-4">
													記憶ゲーム
												</td>
											</tr>
											<tr>
												<th className="has-text-right is-flex-grow-5 is-size-6">
													<a href="https://archtictactoe.netlify.app/">
														ティック・タック・トゥ
													</a>
												</th>
												<td className="td_boxes is-size-7 is-flex-grow-4">
													三目並べ
												</td>
											</tr>
											<tr>
												<th className="has-text-right is-flex-grow-5">
													<a href="https://space-game2.netlify.app">
														いん石を狙え <span style={{ color: 'red' }}>❣</span>
													</a>
												</th>
												<td className="td_boxes is-size-7 is-flex-grow-4">
													宇宙の旅
												</td>
											</tr>
											<tr>
												<th className="has-text-right is-flex-grow-5">
													<a href="https://nyan-gules.vercel.app/">
														にゃんにゃん動画
													</a>
												</th>
												<td className="td_boxes is-size-7 is-flex-grow-4">
													Next.js 版
												</td>
											</tr>
											<tr>
												<th className="has-text-right is-flex-grow-5">
													<a href="https://isnt-archmapp-awesome.netlify.app/">
														にゃんにゃん動画
													</a>
												</th>
												<td className="td_boxes is-size-7 is-flex-grow-4">
													旧版
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</article>
						</div>
						<footer className="quickview-footer qv_f has-background-primary mt-4 mt-2 pb-3">
							<div
								className="mt-3"
								style={{ textAlign: 'center', width: '500px' }}
							>
								<div className="is-half-mobile is-one-quarter-desktop">
									<h6 className="f_around arch is-size-6 pb-0 pt-1 mb-4">
										提供:
										<span className="is-size-5 my-1">アーキエムアップ</span>
									</h6>
									<p>
										<a href="http://www.archmapp.tech/">
											<strong className="is-success px-3">
												第三版・Bulmaと共に！
											</strong>
										</a>
									</p>
									<address>
										<strong
											className="is-size-5 px-2 mb-3"
											style={{ background: '#e3c800' }}
										>
											Next.js 予定
										</strong>
										<p className="mt-3 is-size-7">北九州</p>

										<i className="fas fa-fw fa-envelope lightcoral"></i>
										<span className="mb-5">
											<a href="mailto:archmapp@i.softbank.jp">
												archmapp@i.softbank.jp
											</a>
										</span>
									</address>
								</div>
							</div>
						</footer>
					</div>
				</div>
			</article>
		</>
	)
}

export default QuickView
