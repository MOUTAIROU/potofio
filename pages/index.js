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
                     <li> <a href="#information">A propos</a></li>
                     <li> <a href="#experience">Experiences</a></li>
                     <li> <a href="#contact">Contacts</a></li>
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
                     <div className ='first-section-title-small'><small>Je suis d??veloppeur web Next.js Frond-end et Back-end.</small></div>
                  </div>
                  <div className = 'first-section-ronder'>
                      <img src = './potofio.jpg'/>
                  </div>
                </div>

            </div>
            <div className ='second-section' id="information">

                <div className ='second-section-title'><bold>Information personnelle</bold></div>
                <div className ='second-section-p'>
                    <p>
                        Passionn?? d'amener un projet ?? la r??alit??, je peux d??velopper des produits en travaillant

                        en groupe ou en solo. Avec 3 ans d'exp??rience je peux d??velopper des produits front-end et back-end.

                        Je suis meneur de projet et chef de startup ce qui m'a permis ?? d??velopper d'autres

                        comp??tences en web design et impl??mentation de nouvelles fonctionnalit??s aux projets existants.
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
                                Application d'e-commerce ; profiter ??galement de mes exp??riences en marketing sur vos sites web.
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
                                  D??velopp?? des applications de service web pour vos projets personels et entreprises.
                              </p>
                            </div>
                      </div>

                      <div className ='third-section-content'>

                            <div className = 'third-section-content-title'>
                               <span>Produits Personnalis??s</span>
                            </div>
                            <div className = 'third-section-content-logo'>
                               <div><img src = 'produit.svg'/></div>
                            </div>
                            <div className = 'third-section-content-p'>
                              <p>
                                 Cr??er des produits personnalis??s sur vos sites web.
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
                                Application d'e-commerce; profiter ??galement de mes exp??riences en marketing sur vos sites web.
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
                                D??velopp?? des applications de service web pour vos projets personnels et entreprises.
                              </p>
                            </div>
                      </div>

                      <div className ='third-section-content'>

                            <div className = 'third-section-container-responsive-content'>

                                <div className = 'third-section-content-title'>
                                   <span>Produits Personnalis??s</span>
                                </div>
                                <div className = 'third-section-content-logo'>
                                   <div><img src = 'produit.svg'/></div>
                                </div>

                            </div>

                            <div className = 'third-section-content-p'>
                              <p>
                                 Cr??er des produits personnalis??s sur vos sites web.
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

                <div className ='five-section-title'><span>Languages</span></div>
                <div className ='five-section-title-container'>

                    <div className ='five-section-title-container-div'>
                        <div className ='five-container-title'>
                          <span>Languages de programations</span>
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
                  <span>M??thode de travail</span>
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
                  <span>M??thode de travail</span>
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
                  <span>Derni??res r??alisations</span>
                </div>

                 <div className = 'sept-section-div-container'>

                    <div className = 'sept-section-div-container-div-1'></div>
                    <div className = 'sept-section-div-container-div-2'></div>
                 </div>



                </div>

            </div>
            <footer className = 'footer' id ="footer">
                 <div className = 'footer-container'>

                     <div className = 'footer-div'> <span>Mercie pour la visite. </span> </div>
                     <div className = 'footer-div'> <button onClick = {() => { window.scrollTo(0, 0)}}> Go to top</button></div>
                     <div className = 'footer-div'> <span>Cr??ez votre application comme vous ne l'avez jamais fait auparavant.</span></div>
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
