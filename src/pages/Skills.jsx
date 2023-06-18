import {useEffect, useState} from "react";

const SkillsPage = (props) => {
	const [data, setData] = useState()
	console.log("Babes we are also getting Affected")
	useEffect(() => {
		const fetchSkillsData = async () => {
			try {
				const response = await fetch('http://127.0.0.1:4003/skills')
				const data = await response.json()
				setData(data)
			}
			catch (error) {
				console.log(error)
			}
		}
		fetchSkillsData()
	}, [])
	return (
		<>

			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500 -gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>

							<th scope="col" className="px-6 py-3">
								Skill
							</th>
							<th scope="col" className="px-6 py-3">
								Description
							</th>
							<th scope="col" className="px-6 py-3">
								Courses Links
							</th>
						</tr>
					</thead>
					<tbody>
						{
							data?.result.map((skill) => {
								let link = `/skill/${skill.slug}`
								console.log(link)
								return (
					
									<tr className="bg-white border-b ">
										<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
											{skill.name}
										</th>
										<td className="px-6 py-4">
											{skill.description}
										</td>
										<td className="px-6 py-4">
											<a className="underline text-blue-600" href={link}>
												{skill.name} Courses
											</a>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>

		</>
	);
}
export default SkillsPage
