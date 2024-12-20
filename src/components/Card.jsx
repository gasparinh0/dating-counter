import Profile from './Profile.jsx'
import Counter from './Counter.jsx'
import Button from './Button.jsx' 

const Card = () => {
    return (
        <div className="bg-[#1d1e1f] shadow-lg shadow-rose-600 text-white p-10 rounded-xl flex flex-col justify-center items-center">
            {/* Importando profile */}
            <Profile title='Lucas e Gabriele' subtitle='Estão juntos há:'/>

            {/* Importando counter*/}
            <Counter />
            <div className='content-none bg-white h-[1px] w-[270px]'/>
            {/* Importando button */}
            <Button />
        </div>
    )
}

export default Card