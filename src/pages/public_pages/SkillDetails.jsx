
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const SkillDetailsPage = (props) => {
	const {slug} = useParams();
	return (
		<>

			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500 -gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>

							<th scope="col" className="px-6 py-3">
								{slug}
							</th>
							<th scope="col" className="px-6 py-3">
								Description
							</th>
							<th scope="col" className="px-6 py-3">
								Courses Links
							</th>
						</tr>
					</thead>
				</table>
			</div>

		</>
	);
}
export default SkillDetailsPage
