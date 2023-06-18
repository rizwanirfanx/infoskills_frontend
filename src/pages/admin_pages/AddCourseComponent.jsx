

import {useEffect, useRef, useState} from "react";

const AddCourseComponent = (props) => {
	const courseNameRef = useRef()
	const courseDescriptionRef = useRef()
	const courseSlugRef = useRef()
	const platformNameRef = useRef()
	const courseLinkRef = useRef()
	const courseStatusRef = useRef()
	const [skillIsBeingSaved, setSkillIsBeingSaved] = useState(false)

	const handleFormSubmission = async (e) => {
		e.preventDefault()
		const data = {
			'name': courseNameRef.current.value,
			'description': courseDescriptionRef.current.value,
			'slug': courseSlugRef.current.value
		}
		setSkillIsBeingSaved(true)
		console.log(skillIsBeingSaved)
		await postSkillData(data)
		setSkillIsBeingSaved(false)
		console.log(false)
	}

	// Example POST method implementation:
	async function postSkillData(data = {}) {
		console.log('Running')
		const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/admin/skills/add', {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				"Content-Type": "application/json",
				"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDY5ZGVhN2IxN2E2NjhiNjI3NjI4MTMiLCJpYXQiOjE2ODcwOTc0MjksImV4cCI6MTY4NzEwMTAyOX0.LGcPJAC4_C1NK9U6bx-bBO201fUUe6rgNUC2D-Mb8FE",
			},
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		});
		console.log('Fetch Finished')
		return response.json(); // parses JSON response into native JavaScript objects
	}


	return (
		<>
			<div className="container p-6 m-auto">
				<form onSubmit={handleFormSubmission} id="add_skill_form" method="POST">
					<h1 className="mb-8">Add Course</h1>
					<div className="relative z-0 w-full mb-6 group">
						<input ref={platformNameRef} type="text" name="skill_name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Platform Name</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input ref={courseNameRef} type="text" name="skill_name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Course Name</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input ref={courseDescriptionRef} type="text" name="skill_slug" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Course Description</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input ref={courseSlugRef} type="text" name="skill_description" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Course Slug</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input ref={courseLinkRef} type="text" name="skill_description" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Course Link</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<select>
							<option value={"free"} selected>Free</option>
							<option value={"paid"}>Paid</option>
						</select>
					</div>
					<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >{skillIsBeingSaved ? 'Saving' : 'Add Course'}</button>
				</form>
			</div>
		</>
	);
}
export default AddCourseComponent
