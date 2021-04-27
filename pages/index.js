import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css'

export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);
 const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

console.log(scrollPosition);
  return (
    <div className = 'content'>

          <div className = { scrollPosition > 110 ? 'nav-bar-fixe displayBlock nav-bar-fixe-amination-in' :'nav-bar-fixe displayNone nav-bar-fixe-amination-out'}>
            <div className ='profile-div'>
                 <div className = 'profile-div-img'>
                     <div className = 'profile-div-img-radius'><img src = './potofio.jpg'/></div>
                 </div>
                 <div className = 'profile-div-twiter'>mbastouabdele55@gmail.com</div>
            </div>
            <div className = 'menu-second-div'>
               <div className = 'menu-second-div-ul'>

                   <ul>

                     <li> <a href="#home">Home</a></li>
                     <li> <a href="#information">About Me</a></li>
                     <li> <a href="#experience">Experiences</a></li>
                     <li> <a href="#contact">Contacts Me</a></li>
                   </ul>
               </div>
            </div>
          </div>
        <div className = 'container'>



            <div className ='first-section' id="home">

                <div className = 'first-section-div'>

                    <nav className ='menu'>
                      <div className = 'menu-first-div'></div>
                      <div className = 'menu-second-div'>
                        <ul>

                          <li> <a href="#home">Home</a></li>
                          <li> <a href="#information">A propos</a></li>
                          <li> <a href="#experience">Experiences</a></li>
                          <li> <a href="#contact">Contacts</a></li>
                        </ul>
                      </div>
                    </nav>
                  <div className ='first-section-square'></div>
                  <div className ='first-section-title'>
                     <div className ='first-section-title-name'>MOUTAIROU BASTOU ABDEL</div>
                     <div className ='first-section-title-small'><small>I am a Next.js Front-end and Back-end web developer.</small></div>
                  </div>
                  <div className = 'first-section-ronder'>
                      <img src = './potofio.jpg'/>
                  </div>
                </div>

            </div>
            <div className ='second-section' id="information">

                <div className ='second-section-title'><bold>personal information</bold></div>
                <div className ='second-section-p'>
                    <p>
                        Fascinated by bringing a project to reality, I can develop products by working

                        in a group or solo. With 3 years of experience I can develop front-end and back-end products.

                        I am a project leader and startup manager which has allowed me to develop other

                        skills in web design and implementation of new features to existing projects.
                    </p>
                </div>

            </div>

            <div className ='third-section' id="experience" >

               <div className = 'third-section-blur'>

                   <div className = 'third-section-title'><span>Experiences</span></div>
                   <div className = 'third-section-container'>
                      <div className ='third-section-content'>

                            <div className = 'third-section-content-title'>
                               <span>E-commerce</span>
                            </div>
                            <div className = 'third-section-content-logo'>
                               <div><img src = 'ecom.svg'/></div>
                            </div>
                            <div className = 'third-section-content-p'>
                              <p>
                               E-commerce application; also take advantage of my experience in marketing your websites.
                              </p>
                            </div>
                      </div>

                      <div className ='third-section-content'>

                            <div className = 'third-section-content-title'>
                               <span>Services</span>
                            </div>
                            <div className = 'third-section-content-logo'>
                               <div><img src = 'setting.svg'/></div>
                            </div>
                            <div className = 'third-section-content-p'>
                              <p>
                                  Develop web service applications.
                              </p>
                            </div>
                      </div>

                      <div className ='third-section-content'>

                            <div className = 'third-section-content-title'>
                               <span>Produits Personnalisés</span>
                            </div>
                            <div className = 'third-section-content-logo'>
                               <div><img src = 'produit.svg'/></div>
                            </div>
                            <div className = 'third-section-content-p'>
                              <p>
                                 Create custom products on your websites.
                              </p>
                            </div>
                      </div>


                   </div>

                   <div className = 'third-section-container-responsive-media-width-666-0'>
                           <div className ='third-section-content'>

                                   <div className = 'third-section-container-responsive-content'>


                                           <div className = 'third-section-content-title'>
                                              <span>E-commerce</span>
                                           </div>
                                           <div className = 'third-section-content-logo'>
                                              <div><img src = 'ecom.svg'/>
                                          </div>
                                    </div>

                               </div>
                            <div className = 'third-section-content-p'>
                              <p>
                                E-commerce application; also take advantage of my experience in marketing your websites.
                              </p>
                            </div>
                      </div>



                            <div className ='third-section-content'>

                                  <div className = 'third-section-container-responsive-content'>

                                        <div className = 'third-section-content-title'>
                                           <span>Services</span>
                                        </div>
                                        <div className = 'third-section-content-logo'>
                                           <div><img src = 'setting.svg'/></div>
                                        </div>
                                </div>


                            <div className = 'third-section-content-p'>
                              <p>
                                Develop web service applications.
                              </p>
                            </div>
                      </div>

                      <div className ='third-section-content'>

                            <div className = 'third-section-container-responsive-content'>

                                <div className = 'third-section-content-title'>
                                   <span>Produits Personnalisés</span>
                                </div>
                                <div className = 'third-section-content-logo'>
                                   <div><img src = 'produit.svg'/></div>
                                </div>

                            </div>

                            <div className = 'third-section-content-p'>
                              <p>
                                 Create custom products on your websites.
                              </p>
                            </div>
                      </div>


                   </div>

               </div>

            </div>

            <div className ='forth-section' id="contact">

               <div className = 'forth-section-blur'>

                   <div className = 'forth-section-title'><span>Contact</span></div>
                   <div className = 'forth-section-container'>
                      <div className ='third-section-content contact-third-height'>
                          <a href='https://api.whatsapp.com/send?phone=22996532496'>
                            <div className = 'third-section-content-title'>
                               <span></span>
                            </div>
                            <div className = 'third-section-content-logo'>
                               <div><img src = 'whatsapp-icon.svg'/></div>

                            </div>
                            <div className = 'third-section-content-p contact-third'>
                              <p>
                                Whatsapp
                              </p>
                            </div>
                            </a>
                      </div>

                      <div className ='third-section-content contact-third-height'>
                           <a href='https://m.me/bastou.moutairou'>
                            <div className = 'third-section-content-title'>
                               <span></span>
                            </div>
                            <div className = 'third-section-content-logo'>
                               <div><img src = 'facebook-messenger.svg'/></div>

                            </div>
                            <div className = 'third-section-content-p contact-third'>
                              <p>
                                Messenger
                              </p>
                            </div>
                          </a>
                      </div>

                      <div className ='third-section-content contact-third-height'>
                            <a href='https://twitter.com/MoutairouAbdel'>
                                <div className = 'third-section-content-title contact-third'>
                                   <span></span>
                                </div>
                                <div className = 'third-section-content-logo'>
                                   <div>

                                           <img src = 'twitter.svg'/>

                                    </div>
                                </div>
                                <div className = 'third-section-content-p contact-third'>
                                  <p>
                                  twiter
                                  </p>
                                </div>
                            </a>
                      </div>


                   </div>

               </div>

            </div>

            <div className = 'five-section' id="skill">

                <div className ='five-section-title'><span>Skill</span></div>
                <div className ='five-section-title-container'>

                    <div className ='five-section-title-container-div'>
                        <div className ='five-container-title'>
                          <span>Tools</span>
                        </div>
                        <div className = 'five-container-list'>
                          <span>Next.js</span>
                          <span>React.js</span>
                          <span>React Native</span>
                          <span>Node.js</span>
                          <span>mySQL</span>
                          <span>mongoDB</span>
                        </div>
                    </div>

                    <div className ='five-section-title-container-div'>
                        <div className ='five-container-title'>
                          <span>Graphic design</span>
                        </div>
                        <div className = 'five-container-list'>
                          <span>Adobe xd</span>
                        </div>
                    </div>

                </div>


            </div>

            <div className ='six-section six-section-not-responsinator' id="work">

                <div className = 'six-section-div'>

                <div className = 'six-section-div-title'>
                  <span>How to work</span>
                </div>

                 <div className = 'six-section-div-container'>

                    <div className = 'six-section-div-container-text'>Design</div>
                    <div className = 'six-section-div-container_arrow'><img src = 'arrow.svg'/></div>
                    <div className = 'six-section-div-container-text'>Font-end</div>
                    <div className = 'six-section-div-container_arrow'><img src = 'arrow.svg'/></div>
                    <div className = 'six-section-div-container-text'>Back-end</div>
                 </div>

                </div>

            </div>

            <div className ='six-section six-section-responsinator' id="work">

                <div className = 'six-section-div'>

                <div className = 'six-section-div-title'>
                  <span>How to work</span>
                </div>

                 <div className = 'six-section-div-container'>

                    <div className = 'six-section-div-container-text'>Design</div>
                    <div className = 'six-section-div-container_arrow'><img src = 'arrow.svg'/></div>
                    <div className = 'six-section-div-container-text'>Font-end</div>
                    <div className = 'six-section-div-container_arrow'><img src = 'arrow.svg'/></div>
                    <div className = 'six-section-div-container-text'>Back-end</div>
                 </div>

                </div>

            </div>

            <div className ='sept-section' id="product">

                <div className = 'sept-section-div'>

                <div className = 'sept-section-div-title'>
                  <span>Dernières réalisations</span>
                </div>

                 <div className = 'sept-section-div-container'>

                    <div className = 'sept-section-div-container-div-1'></div>
                    <div className = 'sept-section-div-container-div-2'></div>
                 </div>



                </div>

            </div>
            <footer className = 'footer' id ="footer">
                 <div className = 'footer-container'>

                     <div className = 'footer-div'> <span>Thank you for visiting. </span> </div>
                     <div className = 'footer-div'> <button onClick = {() => { window.scrollTo(0, 0)}}> Go to top</button></div>
                     <div className = 'footer-div'> <span>Build an application like you've never built it before.</span></div>
                     <div className = 'footer-contact'>
                       <div className = 'footer-contact-text footer-contact-text-email'><img src = 'email.svg'/> <span> mbastouabdele55@gmail.com</span></div>
                       <div className = 'footer-contact-text footer-contact-text-adress'> <img src = 'address-card.svg'/> <span> Cotonou Benin </span></div>
                     </div>

                 </div>
            </footer>


        </div>



    </div>
  )
}
