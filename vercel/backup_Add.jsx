// import React from 'react'

// function backup_Add() {
//     return (
//         <div>
//             <form onSubmit={handleSubmit(submitForm)} className='mt-10'>
//                 <div className=''>

//                     <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5">
//                         <div>
//                             <label htmlFor='project_title' className='block text-sm font-medium text-gray-700'>
//                                 Project Title
//                             </label>
//                             <input
//                                 placeholder='Enter project title'
//                                 type='text'
//                                 id='project_title'
//                                 {...register('project_title', { required: true })}
//                                 className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                             />
//                             {errors.project_title && <span className='text-red-500'>This field is required</span>}
//                         </div>

//                         <div>
//                             <label htmlFor='number_of_student' className='block text-sm font-medium text-gray-700'>
//                                 Number of Student
//                             </label>
//                             <input
//                                 placeholder='Enter number of student'
//                                 type='number'
//                                 id='number_of_student'
//                                 {...register('number_of_student', { required: true })}
//                                 className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                             />
//                             {errors.number_of_student && <span className='text-red-500'>This field is required</span>}
//                         </div>

//                         <div className='sm:col-span-2'>
//                             <label htmlFor='introduction' className='block text-sm font-medium text-gray-700'>
//                                 Introduction
//                             </label>
//                             <textarea
//                                 rows={5}
//                                 placeholder='Enter introduction text separated by a new line'
//                                 id='introduction'
//                                 required
//                                 onChange={(e) => handleIntroduction(e)}
//                                 className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                             ></textarea>

//                             <p className='mt-2 text-sm text-gray-500'>NOTE: Please separate each introduction with a new line</p>
//                         </div>

//                         <div className='sm:col-span-2'>
//                             <label htmlFor='guidelines' className='block text-sm font-medium text-gray-700'>
//                                 Guidelines
//                             </label>
//                             <textarea
//                                 rows={5}
//                                 placeholder='Enter guidelines text separated by a new line'
//                                 onChange={(e) => handleGuidelines(e)}
//                                 id='guidelines'
//                                 required
//                                 className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                             />

//                             <p className='mt-2 text-sm text-gray-500'>NOTE: Please separate each guideline with a new line</p>
//                         </div>
//                     </div>


//                     <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl mt-10">
//                         <label htmlFor='attachments' className='block font-medium text-gray-700'>
//                             Attachments
//                         </label>

//                         {/* Attachment 1 */}
//                         <div
//                             className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
//                             <div className='w-full'>
//                                 <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
//                                     Attachment 1 Title:
//                                 </label>
//                                 <input
//                                     {...register('attachment1Title', { required: true })}
//                                     placeholder='Enter attachment title'
//                                     type='text'
//                                     id='attachments_title_1'
//                                     className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 />
//                             </div>

//                             <div className='w-full'>
//                                 <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
//                                     Attachment 1 URL:
//                                 </label>
//                                 <input
//                                     {...register('attachment1Url')}
//                                     placeholder='Enter attachment URL'
//                                     type='text'
//                                     id='attachments_url_1'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 />
//                             </div>
//                         </div>

//                         {/* Attachment 2 */}
//                         <div
//                             className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
//                             <div className='w-full'>
//                                 <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
//                                     Attachment 2 Title:
//                                 </label>
//                                 <input
//                                     {...register('attachment2Title')}
//                                     placeholder='Enter attachment title'
//                                     type='text'
//                                     id='attachments_title_2'
//                                     className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 />
//                             </div>

//                             <div className='w-full'>
//                                 <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
//                                     Attachment 2 URL:
//                                 </label>
//                                 <input
//                                     {...register('attachment2Url')}
//                                     placeholder='Enter attachment URL'
//                                     type='text'
//                                     id='attachments_url_2'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 />
//                             </div>
//                         </div>

//                         {/* Attachment 3 */}
//                         <div
//                             className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
//                             <div className='w-full'>
//                                 <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
//                                     Attachment 3 Title:
//                                 </label>
//                                 <input
//                                     {...register('attachment3Title')}
//                                     placeholder='Enter attachment title'
//                                     type='text'
//                                     id='attachments_title_3'
//                                     className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 />
//                             </div>

//                             <div className='w-full'>
//                                 <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
//                                     Attachment 3 URL:
//                                 </label>
//                                 <input
//                                     {...register('attachment3Url')}
//                                     placeholder='Enter attachment URL'
//                                     type='text'
//                                     id='attachments_url_3'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 />
//                             </div>
//                         </div>

//                         {/* Attachment 4 */}
//                         <div
//                             className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
//                             <div className='w-full'>
//                                 <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
//                                     Attachment 4 Title:
//                                 </label>
//                                 <input
//                                     {...register('attachment4Title')}
//                                     placeholder='Enter attachment title'
//                                     type='text'
//                                     id='attachments_title_4'
//                                     className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 />
//                             </div>

//                             <div className='w-full'>
//                                 <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
//                                     Attachment 4 URL:
//                                 </label>
//                                 <input
//                                     {...register('attachment4Url')}
//                                     placeholder='Enter attachment URL'
//                                     type='text'
//                                     id='attachments_url_4'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 />
//                             </div>
//                         </div>
//                     </div>



//                     <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5 mt-10">
//                         <div className='sm:col-span-2'>
//                             <label htmlFor='optional_bonus_sections' className='block font-medium text-gray-700'>
//                                 Optional Bonus Sections
//                             </label>
//                             <textarea
//                                 rows={5}
//                                 placeholder='Enter optional bonus section text'
//                                 {...register('optional_bonus_sections')}
//                                 id='optional_bonus_sections'
//                                 required
//                                 className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                             ></textarea>
//                             {errors.optional_bonus_sections && <span className='text-red-500'>This field is required</span>}
//                         </div>

//                     </div>


//                     {/* mandatory options: data- title, description, yes_no */}

//                     <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5 mt-10">
//                         <di className="flex justify-between items-center">
//                             <label className='block  font-medium text-gray-700'>
//                                 Mandatory Sections
//                             </label>

//                             <div className='flex gap-2'>
//                                 <button type='button' onClick={addMandatorySection} className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-5 rounded-full transition duration-200'>
//                                     +
//                                 </button>

//                                 <button type='button' onClick={removeMandatorySection} className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-5 rounded-full transition duration-200'>
//                                     -
//                                 </button>
//                             </div>
//                         </di>




//                         {[...Array(numberOfMandatorySections)].map((_, index) => (
//                             <div key={index} className='mt-5'>
//                                 {/* title */}
//                                 <div>
//                                     <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
//                                         Title of the evaluation criteria:
//                                     </label>
//                                     <input
//                                         {...register(`title.${index}`, { required: true })}
//                                         placeholder='Enter a title'
//                                         type='text'
//                                         className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                     />
//                                 </div>

//                                 {/* description */}
//                                 <div>
//                                     <label htmlFor='description' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                         Detailed dscription:
//                                     </label>

//                                     <textarea
//                                         {...register(`description.${index}`, { required: true })}
//                                         rows={5}
//                                         placeholder='Enter detailed description separated by a new line'
//                                         className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                     />
//                                     < p className='mt-2 text-sm text-gray-500' > NOTE: Please separate each description with a new line</p>
//                                 </div>

//                                 {/* yes_no */}
//                                 <div>
//                                     <label htmlFor='yes_no' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                         Yes/No button or slider:
//                                     </label>

//                                     <select
//                                         {...register(`yes_no.${index}`, { required: true })}
//                                         className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                     >
//                                         <option value={null}>Select one</option>
//                                         <option value={true}>Yes/No button</option>
//                                         <option value={false}>Slider with value</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         ))}







//                     </div>


//                     <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5 mt-10">
//                         <label htmlFor='grading_options' className='block text-sm font-medium text-gray-700'>
//                             Grading Options (select yes to add in the sheet)
//                         </label>

//                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5">
//                             <div>
//                                 <label htmlFor='ok' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     OK:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleOk(e)}
//                                     id='ok'

//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor='outstanding' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     Outstanding:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleOutstanding(e)}
//                                     id='outstanding'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor='empty_work' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     Empty Work:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleEmptyWork(e)}
//                                     id='empty_work'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor='incomplete_work' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     Incomplete Work:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleIncompleteWork(e)}
//                                     id='incomplete_work'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor='invalid_compilation' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     Invalid Compilation:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleInvalidCompilation(e)}
//                                     id='invalid_compilation'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor='norme' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     Norme:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleNorme(e)}
//                                     id='norme'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor='cheat' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     Cheat:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleCheat(e)}
//                                     id='cheat'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor='crash' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     Crash:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleCrash(e)}
//                                     id='crash'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor='concerning_situations' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     Concerning Situations:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleConcerningSituations(e)}
//                                     id='concerning_situations'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor='leaks' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     Leaks:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleLeaks(e)}
//                                     id='leaks'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor='forbidden_functions' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     Forbidden Functions:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleForbiddenFunctions(e)}
//                                     id='forbidden_functions'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor='cannot_support' className='block text-sm text-gray-500 mt-5 mb-1'>
//                                     Cannot Support:
//                                 </label>
//                                 <select
//                                     onChange={(e) => handleCannotSupport(e)}
//                                     id='cannot_support'
//                                     className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
//                                 >
//                                     <option value={null}>Select one</option>
//                                     <option value={true}>Yes</option>
//                                     <option value={false}>No</option>
//                                 </select>
//                             </div>
//                         </div>

//                     </div>




//                     < div className='mt-5'>
//                         <button type='submit' className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-10 rounded mt-10 transition duration-200'>
//                             Save to Database
//                         </button>
//                         <div div className='mt-5'>
//                         </div>

//                     </div>

//                 </div>
//             </form>

//         </div>
//     )
// }

// export default backup_Add