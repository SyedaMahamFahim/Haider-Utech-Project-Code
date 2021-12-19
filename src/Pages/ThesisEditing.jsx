import React from 'react'
import ServiceHeroSection from '../components/ServiceHeroSection/ServiceHeroSection'
import CallToAction from '../components/CallToAction/CallToAction'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import ExpertEditing from '../components/ExpertEditing/ExpertEditing'
import EssayEditingAdventure from '../components/EssayEditingAdventure/EssayEditingAdventure'
import EssayEditingHelp from '../components/EssayEditingHelp/EssayEditingHelp'
import InstantHelp from '../components/InstantHelp/InstantHelp'
import Contact from '../components/Contact/Contact'
import {Link} from 'react-router-dom'

const ThesisEditing = () => {
    return (
        <>
            <ServiceHeroSection title={`Perfect Thesis Help through Quality Editing and Proofreading Services.`}
            imgUrl={'./assests/images/dissertation-editing-1.png'}/>
             <section className="main-paper-hlp-dsk-sec" >
        <div className="container" >
          <div className="row" >
            <div className="col-lg-12" >
              <h2 >Affordable Thesis Services. Help with Thesis,
                Editing &amp; Proofreading!</h2>
              <p >If you are not confident doing your essay and keep having second
                thoughts on writing quality essay drafts. If you keep worrying over syntax, grammar, language,
                structure and referencing of your essay papers.</p>
              <p >You definitely need a professional essay service to help edit your
                essays. Paper Help Desk shines in times of your need to offer top notch essay help, editing and
                proofreading services to secure you best grades throughout your courses and modules.</p>
              <Link to="/" className="btncontact btn-theme-blue" ><i className="fa fa-user-o"  /> Sign Up</Link>
              <Link to="/" className="btn-theme-yellow" ><i className="fa fa-comments-o"  /> Chat With
                Our Expert</Link>
              <Link to="/" className="btncontact btn-theme-blue gotocontact" ><i className="fa fa-tty"  /> Let's Get Started</Link>
              <p className="p3" >PaperHelpDesk assignment services excel at helping with
                your undergraduate and masters assignments over a wide range of subjects. We could help you from
                auditing your assignment brief for complete requirements and guidelines, assist you with
                drafting the assignment, overlook it for errors or corrections for a perfect finish.</p>
              <p className="p4" >At PaperHelpDesk, We Are Busy In Taking Your Brilliant Ideas To The Next Level Of Perfection.</p>
              <p className="p5" >Our expert assignment help services are available at affordable prices. Editing and proofreading your assignments more economically than other services in UK while offering you complete solution to gain best results.</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction/>
      <HowItWorks/>
      <ExpertEditing/>
      <EssayEditingAdventure/>
      <EssayEditingHelp 
      title={"Transform Your Essay Drafts through Exquisite Essay Writing Help."}
      paraOne={"We pay special care to every minute detail while editing and proofreading your essays. Our expertise span across numerous subjects and research areas to help you through quality essay services for perfect drafts!"}
      paraTwo={"Economical essay help through top editors and proofreaders on fastest turn around time should be your ticket to a Perfect Essay!"}
      />
      <InstantHelp/>
      <Contact/>
        </>
    )
}

export default ThesisEditing
