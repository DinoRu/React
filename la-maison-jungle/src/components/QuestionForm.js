import {useState} from 'react'

function QuestForm() {
    const [inputValue, setInputValue] = useState('Poser une question : ')
    return (
        <div>
            <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={()=> alert(inputValue)}>Alertez Moi 🚨!</button>
        </div>
    )
}
export default QuestForm