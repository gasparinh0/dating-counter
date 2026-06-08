import profileImage from '../assets/profile.jpeg';

const Profile = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col items-center">
            <div className='bg-white/20 p-2 border-solid border-[3px] border-rose-400 shadow-xl shadow-rose-500/40 rounded-full mt-[-80px] backdrop-blur-sm'>
                <img
                    src={profileImage}
                    alt="foto de lucas e gabriele"
                    className="h-40 w-40 object-cover rounded-full border-[3px] border-white"
                />
            </div>
            <h1 className='text-4xl mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-pink-100 drop-shadow-lg text-center tracking-wide'>
                {title}
            </h1>
            <p className='font-medium text-lg mt-1 text-rose-100 drop-shadow-md tracking-wider'>
                {subtitle}
            </p>
        </div>
    )
}

export default Profile