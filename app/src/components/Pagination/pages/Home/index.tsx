import React, {  } from 'react'
import { Container, Props } from './styles'

// So this will get removed if I restore this... hmmm... interesting...
const HomePage: React.FC<Props> = ({pageName, visible})=>{  
    return(
        <Container className={`app-container-column ${visible ? "" : "hide-page"}`}>
            
            <section className="app-section flex-1">
                <div className="title">
                    <span className='left'>TEXT EDITOR</span>
                </div>
            </section>            
        </Container>
    )
}

export default HomePage

