import React, { useState } from 'react'

export default function About() {

    // Creating a my style object for styling
    const [myStyle, setmyStyle ] = useState(
        {
            color: 'black',
            backgroundColor: 'white'
        }
    )

    const [btntext, setBtnText] = useState("Enable dark mode")

   const toggleStyle = ()=> {

        if(myStyle.color === 'black'){
            setmyStyle({
                color:'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Drak mode")
        }
        else
        {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black'
            })
            setBtnText("Enable Light mode")
        }
   }

  return (
        <div className="container" style={myStyle} >
            <h1 className="my-3" >About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Educational Importance
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>The importance of education.</strong> Education is not how well you can read and write but whether you can communicate with and understand the world around you. A good education not only teaches you skills but also helps you broaden your horizons, gain better perspective, and teaches you to think for yourself. People today are quite aware and comfortable speaking about social injustices and other pressing issues. This can be attributed to the increased access to education around the world, which in turn has made society more accepting and open-minded. Therefore, education is an element of human evolution. The importance of education is also pronounced in areas of creativity and innovation. Education encourages thinking outside the box and experimenting with new ideas. <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Motivational
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>Motivation Is Important Because.</strong> Everyone in the world is chasing success because it is assumed that success will solve all problems. Is everyone’s definition of success the same? and will successfully resolve all issues? and what factors contribute to a person’s success? The Motivational Speech for Students in English contains all of the answers to the questions. Students can use these speeches on success to better understand the factors that contribute to life success. <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Cartoon
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>Cartoons Can Improve Vocabullary.</strong> Cartoons are animated movies that tell a story, and young children make up its major audience. The original cartoon, which is now known as Mickey Mouse, was made in 1928 and told the tale of a mouse. Cartoons today frequently feature material that was inappropriate for youngsters in the 1900s.

            Every child eagerly anticipated seeing the cartoons of the 1990s on Saturday mornings. One of the finest experiences a child from this era will have is dressing as their favourite hero and fighting the crime. Kids can learn to be themselves from these cartoons, like Snoopy said “Nobody can accuse you of doing it incorrectly.”

            The newer generations believe that classic animated series like Bugs Bunny, Tom & Jerry, Snoopy, and Popeye have poor pictures or graphics, a brief plot, and dull surroundings. Nowadays, kids just turn on their smartphones or other electronic gadgets and watch cartoons without having to struggle for the TV. With so many devices at their disposal, kids will be less focused in class, which will affect their grades. <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>

        <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary"> {btntext} </button>
        </div>
    
        </div>
  )
}
