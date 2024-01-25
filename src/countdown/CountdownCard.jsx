import './style.css'
const CountdownCard = ({labelName, labelValue}) => {
    return(
        <div className='flex flex-col items-center'>
        <div className="w-[200px] h-[200px] rounded bg-[] shadow card-blue flex items-center justify-center font-extrabold text-[5em] text-red card-shadow ">{labelValue}
        </div>
        <strong className=' text-blue-200 py-5 uppercase'>{labelName}</strong>
        </div>
    )
}

export default CountdownCard;