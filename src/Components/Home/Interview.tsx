import { SiTicktick } from 'react-icons/si';
import { MdDateRange } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { CiUser, CiVideoOn } from 'react-icons/ci';
import { MdCardTravel } from 'react-icons/md';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectAllapplication } from '../../features/applications/reducers/selectors';
import dayjs from 'dayjs';

const Interview = () => {
	const [open, setopen] = useState(false);
	const [viewInterview, setviewInterview] = useState<any>('');
	const alljobs = useSelector(selectAllapplication) || [];

	const handleview = (value: any) => {
		setopen(true);
		setviewInterview(value);
	};

	const statusStyles: any = {
		applied: { bg: '#E3F2FD', text: '#1565C0' },
		reviewed: { bg: '#FFF3E0', text: '#EF6C00' },
		shortlisted: { bg: '#E8F5E9', text: '#2E7D32' },

		'interview scheduled': { bg: '#FFF8E1', text: '#F9A825' },
		'interview rescheduled': { bg: '#E1F5FE', text: '#0277BD' },
		'interview selected': { bg: '#E8F5E9', text: '#2E7D32' },
		'interview rejected': { bg: '#FFEBEE', text: '#C62828' },

		'offer sent': { bg: '#E3F2FD', text: '#1976D2' },
		'offer accepted': { bg: '#E8F5E9', text: '#2E7D32' },
		'offer rejected': { bg: '#FFEBEE', text: '#C62828' },

		rejected: { bg: '#FFEBEE', text: '#C62828' },
		'doc verification pending': { bg: '#FFFDE7', text: '#FBC02D' },
		'doc verified': { bg: '#E8F5E9', text: '#2E7D32' },
		onboarded: { bg: '#E8F5E9', text: '#1B5E20' },
	};

	return (
		<div className='mt-5'>
			{alljobs?.map((value: any) => {
				return (
					<div
						key={value?._id}
						className='border border-[#E0E0E0] bg-[#FFFFFF] rounded-lg p-4 my-5'
					>
						<p className='flex flex-col  items-start sm:flex-row justify-between'>
							<span className='text-[13px] sm:text-[16px] text-[#0A0A0A]'>
								{value?.job?.title}
							</span>{' '}
							<span
								className='px-2.5 py-0.5 m-1 rounded-2xl flex flex-row gap-2 items-center mt-2 sm:mt-0 sm:mb-0 mb-2 text-sm sm:text-md'
								style={{
									backgroundColor: statusStyles[value?.status]?.bg,
									color: statusStyles[value?.status]?.text,
								}}
							>
								<SiTicktick />
								{value?.status}
							</span>
						</p>
						<p className='text-[#717182] sm:text-[13px] text-[11px] mt-3 sm:mt-2 '>
							TechCorp Solution
						</p>
						<p className='mt-3 sm:mt-2 flex items-center gap-2 sm:text-[13px] text-[13px] text-[#717182]'>
							<MdDateRange size={20} />
							Applied - {dayjs(value?.createdAt).format('DD MMM YYYY')}
						</p>

						{value?.status == 'interview scheduled' && (
							<div className='bg-[#FC8019] border-[#FFD9B3] text-white p-3 rounded-lg mt-5'>
								<p className='flex flex-col  items-start sm:items-center sm:flex-row justify-between'>
									<span className='text-[13px] sm:text-[16px] '>
										{value?.status}
									</span>{' '}
									<span
										className='text-[#2E7D32] sm:w-fit w-25 bg-[#E8F5E9] p-1 sm:p-3 m-1 rounded-lg flex flex-row gap-2 items-center mt-2 sm:mt-0 sm:mb-0 mb-2 text-sm sm:text-md cursor-pointer'
										onClick={() => handleview(value)}
									>
										View Details
									</span>
								</p>
								<p className='mt-3 sm:mt-2 flex items-center gap-2 sm:text-[13px] text-[13px] '>
									<MdDateRange size={20} />
									Applied - {dayjs(value?.createdAt).format('DD MMM YYYY')}
								</p>
								<p className='mt-3 sm:mt-2 flex items-center gap-2.5 sm:text-[13px] text-[13px] '>
									<FaRegClock size={18} />
									{dayjs(value?.createdAt).format('hh : mm A')}
								</p>
							</div>
						)}
					</div>
				);
			})}

			{open && (
				<div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4'>
					<div className='bg-white rounded-xl w-full sm:max-w-[55%] max-h-[90vh] overflow-y-auto'>
						{/* HEADER */}
						<div className='flex items-center justify-between bg-[#FC8019] text-white p-4 rounded-t-xl'>
							<div>
								<p className='text-lg font-bold'>Interview Details</p>
								<p className='text-sm opacity-90'>
									All Information About Your Scheduled Interview
								</p>
							</div>

							<IoClose
								size={32}
								className='cursor-pointer bg-white/30 rounded-lg p-1'
								onClick={() => setopen(false)}
							/>
						</div>

						{/* Candidate Info */}
						<div className='p-4'>
							<div className='p-3 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg flex items-center gap-3'>
								<div className='w-10 h-10 bg-[#FC8019] rounded-full flex items-center justify-center'>
									<CiUser size={22} className='text-white' />
								</div>
								<div>
									<p className='text-[16px] text-[#0A0A0A]'>
										{viewInterview?.user?.fullName}
									</p>
									<p className='text-[14px] text-[#717182] flex items-center gap-2'>
										<MdCardTravel /> {viewInterview?.job?.title}
									</p>
								</div>
							</div>
						</div>

						{/* Date & Time */}
						<div className='flex flex-col sm:flex-row gap-3 px-4'>
							<div className='w-full'>
								<div className='p-3 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg'>
									<p className='flex items-center gap-2 text-[#FC8019] text-sm mb-1'>
										<MdDateRange size={18} />
										<span className='text-[#717182]'>Date</span>
									</p>
									<p className='text-[#0A0A0A] text-[16px]'>
										{dayjs(viewInterview?.interviewDetails?.date).format(
											'dddd, MMMM DD, YYYY'
										)}
									</p>
								</div>
							</div>

							<div className='w-full'>
								<div className='p-3 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg'>
									<p className='flex items-center gap-2 text-[#FC8019] text-sm mb-1'>
										<FaRegClock size={18} />
										<span className='text-[#717182]'>Time</span>
									</p>
									<p className='text-[#0A0A0A] text-[16px]'>
										{dayjs(viewInterview?.interviewDetails?.date).format(
											'hh : mm A'
										)}
									</p>
								</div>
							</div>
						</div>

						{/* Interview Mode */}
						<div className='p-4 pt-3'>
							<div className='p-3 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg'>
								<p className='flex items-center gap-2 text-[#FC8019] text-sm mb-1'>
									<CiVideoOn size={18} />
									<span className='text-[#717182]'>Interview Mode</span>
								</p>
								<p className='text-[#0A0A0A] text-[16px]'>Online</p>
							</div>
						</div>

						{/* Meeting Link */}
						<div className='p-4 pt-1'>
							<div className='p-3 border border-[#FFD9B3] bg-[#FFF5EB] rounded-lg'>
								<p className='flex items-center gap-2 text-[#FC8019] text-sm mb-1'>
									<CiVideoOn size={18} />
									<span className='text-[#7D4A1F]'>Meeting Link</span>
								</p>

								<div className='flex items-center gap-3 mt-3'>
									<div className='border border-[#FFD9B3] bg-white p-3 rounded-lg flex-1'>
										<p className='text-[14px] text-[#717182] break-all'>
											{viewInterview?.interviewDetails?.meetingLink}
										</p>
									</div>
									<a
										href={viewInterview?.interviewDetails?.meetingLink}
										target='_blank'
										className='bg-[#FC8019] text-white p-3 rounded-lg'
									>
										<FaExternalLinkAlt size={15} />
									</a>
								</div>
							</div>
						</div>

						{/* Tips */}
						<div className='p-4 pt-1'>
							<div className='p-3 border border-[#90CAF9] bg-[#E3F2FD] rounded-lg'>
								<p className='text-[#0D47A1] text-[16px] font-semibold mb-2'>
									Interview Instructions & Tips
								</p>

								<p className='flex items-center gap-3 text-[#1565C0] text-sm mt-1'>
									<span className='w-2 h-2 bg-[#1565C0] rounded-full'></span>
									{viewInterview?.interviewDetails?.instructions}
								</p>

								{viewInterview?.interviewDetails?.mode === 'online' && (
									<div className='space-y-1 text-sm text-[#1565C0] mt-1'>
										{[
											'Test your audio and video at least 10 minutes before the interview.',
											'Ensure you have a stable internet connection.',
											'Join from a quiet, well-lit environment.',
											'Keep all necessary documents ready for screen sharing if required.',
										].map((text, idx) => (
											<p key={idx} className='flex items-center gap-3'>
												<span className='w-2 h-2 bg-[#1565C0] rounded-full'></span>
												{text}
											</p>
										))}
									</div>
								)}

								{viewInterview?.interviewDetails?.mode !== 'online' && (
									<div className='space-y-1 text-sm text-[#1565C0] mt-1'>
										{[
											'Arrive at the venue at least 10 minutes before your scheduled time.',
											'Carry all required documents (ID proof, resume, certificates).',
											'Dress professionally and maintain proper grooming.',
											'Cooperate with the security and follow on-site instructions.',
										].map((text, idx) => (
											<p key={idx} className='flex items-center gap-3'>
												<span className='w-2 h-2 bg-[#1565C0] rounded-full'></span>
												{text}
											</p>
										))}
									</div>
								)}
							</div>
						</div>

						{/* Buttons */}
						<div className='flex flex-col sm:flex-row gap-3 p-4'>
							{viewInterview?.interviewDetails?.mode === 'online' && (
								<a
									href={viewInterview?.interviewDetails?.meetingLink}
									target='_blank'
									className='w-full bg-[#FC8019] text-white p-3 rounded-lg flex items-center justify-center gap-2 text-[15px]'
								>
									<CiVideoOn size={18} /> Join Now
								</a>
							)}

							{/* Close Button */}
							<button
								className='w-full bg-[#F3F3F5] text-[#0A0A0A] p-3 rounded-lg'
								onClick={() => setopen(false)}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Interview;
