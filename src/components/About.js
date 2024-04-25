import React from 'react'

// function About({image="https://via.placeholder.com/215",text}) {
//   return (
//     <aside>
//         <img src={image} alt="blog logo" />
//         <p>{text}</p>
//     </aside>
//   )
// }
const About = (props) => {
  const{about, image="https://via.placeholder.com/215", alt="blog logo"} =props;
  
  return (
    <aside>
      <img src={image} alt={alt} />
      <p>{about}</p>
    </aside>
  )
}
export default About