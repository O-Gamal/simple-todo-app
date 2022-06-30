import React, { useRef } from 'react'
import './styles.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e:React.FormEvent) => void,
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className='input'
            onSubmit={(e) =>{ 
                handleAdd(e);
                // inputRef.current?.blur();
            }}>
            <input
                ref={inputRef}
                className='input-box'
                type='text'
                placeholder='What would you like to do?'
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
            />
            <button className='input-submit' type='submit'><span className="material-symbols-outlined">add</span></button>
        </form>
    )
}

export default InputField