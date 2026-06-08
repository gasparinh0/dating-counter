import Profile from './Profile.jsx'
import Counter from './Counter.jsx'
import Button from './Button.jsx' 

const Card = () => {
    return (
        <div className="bg-rose-900/40 backdrop-blur-md border border-rose-300/30 shadow-2xl shadow-rose-600/50 text-white p-8 rounded-3xl flex flex-col justify-center items-center w-[90%] max-w-md mx-auto">
            {/* Importando profile */}
            <Profile title='Lucas e Gaby' subtitle='Estão juntos há:'/>

            {/* Importando counter*/}
            <Counter />

            <div className='content-none bg-rose-300/50 h-[2px] w-full mt-8 mb-2 rounded-full'/>

            {/* Importando button */}
            <Button />
        </div>
    )
}

export default Card
