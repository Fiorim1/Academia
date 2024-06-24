import "../../../../../styles/ChatMuscle.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../../Header"

function ChatMuscle() {
    return (
    <div>
        <Header />
        <div className="callPersonal">
            <div className="titleCallPersonal">
            <h2>Chamar Personal</h2>
            </div>
            <div>
                <input type="text" placeholder="Qual Aparelho Você Está?"/>
            </div>
        </div>
        
    </div>
    )
}

export  default ChatMuscle