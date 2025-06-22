import React from 'react'
import './Skill.css'

const Skills = () => {
  return (
    <>
     <div className="homeSkills">
                    <h1 variant='h3'>SKILLS</h1>

                    <div className="homeCubeSkills">
                        <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                            <img
                                src="https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/66502d746f57d299fe0e0c31_Image%201-Express.js.webp"
                                alt="Face1"
                                loading='lazy'
                            />
                        </div>
                        <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                            <img
                                src="https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png"
                                alt="Face2"
                                loading='lazy'
                            />
                        </div>
                        <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                            <img
                                src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-wordmark-programming-language-pack-logos-icons-1174936.png?f=webp&w=256"
                                alt="Face3"
                                loading='lazy'
                            />
                        </div>
                        <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                            <img
                                src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
                                alt="Face4"
                                loading='lazy'
                            />
                        </div>
                        <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                            <img
                                src="https://svgmix.com/uploads/5b99f5-material-ui.svg"
                                alt="Face5"
                                loading='lazy'
                            />
                        </div>
                        <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                            <img
                                src="https://www.svgrepo.com/show/373703/js.svg"
                                alt="Face6"
                                loading='lazy'
                            />
                        </div>
                    </div>
                    {/* <div className="homeskillsBox" id="homeskillsBox">
                        <SiHtml5 />
                        <SiCss3 />
                        <SiJavascript />
                        <SiMongodb />
                        <SiExpress />
                        <SiReact />
                        <SiNodedotjs />
                        <SiGit/>
                    </div> */}
                </div>
            
    </>
  )
}

export default Skills