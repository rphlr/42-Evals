// import React from 'react'

// function backup() {
//     return (
//         <div className='bg-white text-gray-900'>
//             <div className="max-w-7xl mx-auto pb-20 px-5 md:px-14 lg:px-20 2xl:px-32">

//                 {/* Back to admin */}
//                 <div className="flex gap-3 items-center">
//                     <Link href='/admin'>
//                         <button
//                             className='w-10 h-10 bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-3 rounded-full mt-10 transition duration-200'>
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
//                             </svg>
//                         </button>
//                     </Link>
//                     <h1 className=' mt-10  text-gray-400'>Back to dashboard</h1>
//                 </div>



//                 <div className="flex mt-10 items-center gap-2">
//                     <span>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
//                         </svg>


//                     </span>
//                     <h1 className='text-3xl '>

//                         Edit Sheet
//                     </h1>
//                 </div>

//                 <div>
//                     <form onSubmit={handleSubmit(submitForm)} className='mt-10'>
//                         <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>

//                             <div>
//                                 <label htmlFor='project_title' className='block text-sm font-medium text-gray-700'>
//                                     Project Title
//                                 </label>
//                                 <input
//                                     defaultValue={sheetDataFromServer?.project_title}
//                                     placeholder='Enter project title'
//                                     type='text'
//                                     id='project_title'
//                                     {...register('project_title', { required: true })}
//                                     className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 />
//                                 {errors.project_title && <span className='text-red-500'>This field is required</span>}
//                             </div>

//                             <div>
//                                 <label htmlFor='number_of_student' className='block text-sm font-medium text-gray-700'>
//                                     Number of Student
//                                 </label>
//                                 <input
//                                     defaultValue={sheetDataFromServer?.number_of_student}
//                                     placeholder='Enter number of student'
//                                     type='number'
//                                     id='number_of_student'
//                                     {...register('number_of_student', { required: true })}
//                                     className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 />
//                                 {errors.number_of_student && <span className='text-red-500'>This field is required</span>}
//                             </div>

//                             <div className='sm:col-span-2'>
//                                 <label htmlFor='introduction' className='block text-sm font-medium text-gray-700'>
//                                     Introduction
//                                 </label>
//                                 <textarea
//                                     defaultValue={
//                                         sheetDataFromServer?.introduction ? sheetDataFromServer?.introduction.join('\n') : ''
//                                     }
//                                     rows={5}
//                                     placeholder='Enter introduction text separated by a new line'
//                                     id='introduction'
//                                     required
//                                     onChange={(e) => handleIntroduction(e)}
//                                     className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 ></textarea>

//                                 <p className='mt-2 text-sm text-gray-500'>NOTE: Please separate each introduction with a new line</p>
//                             </div>

//                             <div className='sm:col-span-2'>
//                                 <label htmlFor='guidelines' className='block text-sm font-medium text-gray-700'>
//                                     Guidelines
//                                 </label>
//                                 <textarea
//                                     defaultValue={
//                                         sheetDataFromServer?.guidelines ? sheetDataFromServer?.guidelines.join('\n') : ''
//                                     }
//                                     rows={5}
//                                     placeholder='Enter guidelines text separated by a new line'
//                                     onChange={(e) => handleGuidelines(e)}
//                                     id='guidelines'
//                                     required
//                                     className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 ></textarea>

//                                 <p className='mt-2 text-sm text-gray-500'>NOTE: Please separate each guideline with a new line</p>

//                                 <div className='mt-10'>
//                                     <label htmlFor='attachments' className='block text-sm font-medium text-gray-700'>
//                                         Attachments
//                                     </label>

//                                     {/* Attachment 1 */}
//                                     <div
//                                         className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
//                                         <div className='w-full'>
//                                             <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
//                                                 Attachment 1 Title:
//                                             </label>
//                                             <input
//                                                 defaultValue={
//                                                     sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[0].split(',')[0] : ''
//                                                 }
//                                                 {...register('attachment1Title')}
//                                                 placeholder='Enter attachment title'
//                                                 type='text'
//                                                 id='attachments_title_1'
//                                                 className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                             />
//                                         </div>

//                                         <div className='w-full'>
//                                             <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
//                                                 Attachment 1 URL:
//                                             </label>
//                                             <input
//                                                 defaultValue={
//                                                     sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[0].split(',')[1] : ''
//                                                 }
//                                                 {...register('attachment1Url')}
//                                                 placeholder='Enter attachment URL'
//                                                 type='text'
//                                                 id='attachments_url_1'
//                                                 className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Attachment 2 */}
//                                     <div
//                                         className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
//                                         <div className='w-full'>
//                                             <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
//                                                 Attachment 2 Title:
//                                             </label>
//                                             <input
//                                                 defaultValue={
//                                                     sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[1].split(',')[0] : ''
//                                                 }
//                                                 {...register('attachment2Title')}
//                                                 placeholder='Enter attachment title'
//                                                 type='text'
//                                                 id='attachments_title_2'
//                                                 className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                             />
//                                         </div>

//                                         <div className='w-full'>
//                                             <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
//                                                 Attachment 2 URL:
//                                             </label>
//                                             <input
//                                                 defaultValue={
//                                                     sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[1].split(',')[1] : ''
//                                                 }
//                                                 {...register('attachment2Url')}
//                                                 placeholder='Enter attachment URL'
//                                                 type='text'
//                                                 id='attachments_url_2'
//                                                 className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Attachment 3 */}
//                                     <div
//                                         className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
//                                         <div className='w-full'>
//                                             <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
//                                                 Attachment 3 Title:
//                                             </label>
//                                             <input
//                                                 defaultValue={
//                                                     sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[2].split(',')[0] : ''
//                                                 }
//                                                 {...register('attachment3Title')}
//                                                 placeholder='Enter attachment title'
//                                                 type='text'
//                                                 id='attachments_title_3'
//                                                 className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                             />
//                                         </div>

//                                         <div className='w-full'>
//                                             <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
//                                                 Attachment 3 URL:
//                                             </label>
//                                             <input
//                                                 defaultValue={
//                                                     sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[2].split(',')[1] : ''
//                                                 }
//                                                 {...register('attachment3Url')}
//                                                 placeholder='Enter attachment URL'
//                                                 type='text'
//                                                 id='attachments_url_3'
//                                                 className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Attachment 4 */}
//                                     <div
//                                         className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
//                                         <div className='w-full'>
//                                             <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
//                                                 Attachment 4 Title:
//                                             </label>
//                                             <input
//                                                 defaultValue={
//                                                     sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[3].split(',')[0] : ''
//                                                 }
//                                                 {...register('attachment4Title')}
//                                                 placeholder='Enter attachment title'
//                                                 type='text'
//                                                 id='attachments_title_4'
//                                                 className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                             />
//                                         </div>

//                                         <div className='w-full'>
//                                             <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
//                                                 Attachment 4 URL:
//                                             </label>
//                                             <input
//                                                 defaultValue={
//                                                     sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[3].split(',')[1] : ''
//                                                 }
//                                                 {...register('attachment4Url')}
//                                                 placeholder='Enter attachment URL'
//                                                 type='text'
//                                                 id='attachments_url_4'
//                                                 className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                             />
//                                         </div>
//                                     </div>



//                                     <div className='mt-5'>
//                                         <label htmlFor='optional_bonus_sections' className='block text-sm font-medium text-gray-700'>
//                                             Optional Bonus Sections
//                                         </label>
//                                         <textarea
//                                             defaultValue={sheetDataFromServer?.optional_bonus_sections}
//                                             rows={5}
//                                             placeholder='Enter optional bonus section text'
//                                             {...register('optional_bonus_sections')}
//                                             id='optional_bonus_sections'
//                                             required
//                                             className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                         ></textarea>
//                                         {errors.optional_bonus_sections && <span className='text-red-500'>This field is required</span>}


//                                     </div>


//                                     {/* mandatory options: data- title, description, yes_no */}

//                                     <div className='mt-5'>
//                                         <label htmlFor='mandatory_options' className='block text-sm font-medium text-gray-700'>
//                                             Mandatory Options
//                                         </label>
//                                         {/* title */}

//                                         <label htmlFor='title' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                             Title of the evaluation criteria:
//                                         </label>
//                                         <input
//                                             defaultValue={
//                                                 mandatoryOptionsDataFromServer ? mandatoryOptionsDataFromServer[0].title : ''
//                                             }
//                                             onChange={(e) => handleTitle(e)}
//                                             placeholder='Enter a title'
//                                             type='text'
//                                             id='title'
//                                             required
//                                             className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                         />

//                                         {/* description */}
//                                         <label htmlFor='description' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                             Detailed dscription:
//                                         </label>

//                                         <textarea
//                                             defaultValue={
//                                                 mandatoryOptionsDataFromServer ? mandatoryOptionsDataFromServer[0].description.join('\n') : ''
//                                             }
//                                             onChange={(e) => handleDescription(e)}
//                                             rows={5}
//                                             placeholder='Enter detailed description separated by a new line'
//                                             id='description '
//                                             required
//                                             className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                         />
//                                         < p className='mt-2 text-sm text-gray-500' > NOTE: Please separate each description with a new line</p>

//                                         {/* yes_no */}

//                                         <label htmlFor='yes_no' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                             Yes/No button or slider:
//                                         </label>

//                                         <select
//                                             defaultValue={
//                                                 mandatoryOptionsDataFromServer ? mandatoryOptionsDataFromServer[0].yes_no : null
//                                             }
//                                             onChange={(e) => handleYesNo(e)}
//                                             id='yes_no'
//                                             required
//                                             className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                         >
//                                             <option value={null}>Select one</option>
//                                             <option value={true}>Yes/No button</option>
//                                             <option value={false}>Slider with value</option>
//                                         </select>
//                                     </div>


//                                     <div className='mt-5'>
//                                         <label htmlFor='grading_options' className='block text-sm font-medium text-gray-700'>
//                                             Grading Options (select yes to add in the sheet)
//                                         </label>

//                                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5">
//                                             <div>
//                                                 <label htmlFor='ok' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     OK:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].ok : null
//                                                     }
//                                                     onChange={(e) => handleOk(e)}
//                                                     id='ok'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>

//                                             <div>
//                                                 <label htmlFor='outstanding' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     Outstanding:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].outstanding : null
//                                                     }
//                                                     onChange={(e) => handleOutstanding(e)}
//                                                     id='outstanding'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>

//                                             <div>
//                                                 <label htmlFor='empty_work' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     Empty Work:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].empty_work : null
//                                                     }
//                                                     onChange={(e) => handleEmptyWork(e)}
//                                                     id='empty_work'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>

//                                             <div>
//                                                 <label htmlFor='incomplete_work' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     Incomplete Work:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].incomplete_work : null
//                                                     }
//                                                     onChange={(e) => handleIncompleteWork(e)}
//                                                     id='incomplete_work'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>

//                                             <div>
//                                                 <label htmlFor='invalid_compilation' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     Invalid Compilation:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].invalid_compilation : null
//                                                     }
//                                                     onChange={(e) => handleInvalidCompilation(e)}
//                                                     id='invalid_compilation'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>

//                                             <div>
//                                                 <label htmlFor='norme' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     Norme:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].norme : null
//                                                     }
//                                                     onChange={(e) => handleNorme(e)}
//                                                     id='norme'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>

//                                             <div>
//                                                 <label htmlFor='cheat' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     Cheat:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].cheat : null
//                                                     }
//                                                     onChange={(e) => handleCheat(e)}
//                                                     id='cheat'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>

//                                             <div>
//                                                 <label htmlFor='crash' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     Crash:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].crash : null
//                                                     }
//                                                     onChange={(e) => handleCrash(e)}
//                                                     id='crash'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>

//                                             <div>
//                                                 <label htmlFor='concerning_situations' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     Concerning Situations:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].concerning_situations : null
//                                                     }
//                                                     onChange={(e) => handleConcerningSituations(e)}
//                                                     id='concerning_situations'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>

//                                             <div>
//                                                 <label htmlFor='leaks' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     Leaks:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].leaks : null
//                                                     }
//                                                     onChange={(e) => handleLeaks(e)}
//                                                     id='leaks'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>

//                                             <div>
//                                                 <label htmlFor='forbidden_functions' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     Forbidden Functions:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].forbidden_functions : null
//                                                     }
//                                                     onChange={(e) => handleForbiddenFunctions(e)}
//                                                     id='forbidden_functions'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>

//                                             <div>
//                                                 <label htmlFor='cannot_support' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                                     Cannot Support:
//                                                 </label>
//                                                 <select
//                                                     defaultValue={
//                                                         gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].cannot_support : null
//                                                     }
//                                                     onChange={(e) => handleCannotSupport(e)}
//                                                     id='cannot_support'
//                                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                                 >
//                                                     <option value={null}>Select one</option>
//                                                     <option value={true}>Yes</option>
//                                                     <option value={false}>No</option>
//                                                 </select>
//                                             </div>
//                                         </div>
//                                     </div>


//                                     < div className='mt-5'>
//                                         <button type='submit' className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-10 rounded mt-10 transition duration-200'>
//                                             Update sheet
//                                         </button>
//                                         <div div className='mt-5'>
//                                         </div>
//                                     </div>


//                                 </div>
//                             </div>
//                         </div>
//                     </form>

//                 </div>






//             </div>
//         </div>
//     )
// }

// export default backup