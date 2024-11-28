import Profile from './Profile.jsx'
import Counter from './Counter.jsx'
import Button from './Button.jsx' 

const Card = () => {
    return (
        <div className="bg-black text-white p-10 rounded-xl flex flex-col justify-center items-center ">
            {/* Importando profile */}
            <Profile title='Lucas e Gabriele' subtitle='Estão juntos há:'/>

            {/* Importando counter*/}
            <Counter />

            {/* Importando button */}
            <Button />
        </div>
    )
}

export default Card