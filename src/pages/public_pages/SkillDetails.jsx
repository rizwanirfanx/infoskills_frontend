import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const SkillDetailsPage = (props) => {
	const [data, setData] = useState();
	const {slug} = useParams();
	useEffect(() => {
		const fetchSkillsData = async () => {
			try {
				const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/skill/' + slug)
				const data = await response.json()
				console.log(data)
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
								Platform
							</th>
							<th scope="col" className="px-6 py-3">
								Course Description
							</th>
							<th scope="col" className="px-6 py-3">
								Course Title
							</th>
							<th scope="col" className="px-6 py-3">
								Status
							</th>
							<th scope="col" className="px-6 py-3">
								Link
							</th>
						</tr>
					</thead>
					<tbody>

						{
							data?.result[0]?.courses?.map((course) => {
								let link = `/skill/${course.slug}`
								console.log(link)
								return (

									<tr key={course.slug} className="bg-white border-b ">
										<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
											{course.title}
										</th>
										<td className="px-6 py-4">
											{course.description}
										</td>
										<td className="px-6 py-4">
											{course.title}
										</td>
										<td className="px-6 py-4">
											{course.status}
										</td>
										<td className="px-6 py-4">
											<a className="underline text-blue-600" href={link}>
												{course.link}
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
export default SkillDetailsPage
