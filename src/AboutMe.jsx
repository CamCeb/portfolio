import aboutme from './images/aboutme.jpg'

export function AboutMe(){
    return( 
    <>
        <div id="about-box" className="about-box">
            <div className="about-left">
            <img src={aboutme} alt="Aboutme" height="300"/>
            </div>
            <div className="about-right">
                <h1>About Me:</h1>
                <p> Welcome to my portfolio website! I am currently a computer engineering student minoring in
                    in engineering management. I am currently looking for an internship or co-op in software engineering.
                    Through my internship or co-op, I hope to learn the necessary skills in the field and find my favorite
                    sector in software. In my free time, I enjoy hiking, working out, gaming, and completing side projects.
                </p>
            </div>
            
        </div>
    </>
    )
}