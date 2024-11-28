import profileImage from '../assets/profile.jpg';

const Profile = ({ title, subtitle }) => {
    return (
        <>
            <div className='bg-white rounded-full mt-[-89px]'>
                <img
                    src={profileImage}
                    alt="foto de lucas e gabriele"
                    className="h-40 w-40 object-cover rounded-full"
                />
            </div>
            <h1 className='text-4xl mt-3'>{title}</h1>
            <p className='font-light text-lg'>{subtitle}</p>
        </>
    )
}

export default Profile