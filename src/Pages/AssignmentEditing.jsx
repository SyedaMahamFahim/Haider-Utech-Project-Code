import React from 'react'
import ServiceHeroSection from '../components/ServiceHeroSection/ServiceHeroSection'
import {Link} from 'react-router-dom'
import CallToAction from '../components/CallToAction/CallToAction'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import ExpertEditing from '../components/ExpertEditing/ExpertEditing'
import EssayEditingAdventure from '../components/EssayEditingAdventure/EssayEditingAdventure'
import EssayEditingHelp from '../components/EssayEditingHelp/EssayEditingHelp'
import InstantHelp from '../components/InstantHelp/InstantHelp'
import Contact from '../components/Contact/Contact'
const AssignmentEditing = () => {
    return (
        <>
            <ServiceHeroSection title={`Perfect Assignment Help through Quality Editing and Proofreading Services.`}
            imgUrl={'./assests/images/assignment-editing-1.jpg'}/>
            <section className="main-paper-hlp-dsk-sec" >
        <div className="container" >
          <div className="row" >
            <div className="col-lg-12" >
              <h2 >Paper Help Desk</h2>
              <h6 >The Most Reliable Help for Your Essays!</h6>
              <p >If you are not confident doing your essay and keep having second
                thoughts on writing quality essay drafts. If you keep worrying over syntax, grammar, language,
                structure and referencing of your essay papers.</p>
              <p >You definitely need a professional essay service to help edit your
                essays. Paper Help Desk shines in times of your need to offer top notch essay help, editing and
                proofreading services to secure you best grades throughout your courses and modules.</p>
              <Link to="/"  className="btncontact btn-theme-blue" ><i className="fa fa-user-o" /> Sign Up</Link>
              <Link to="/" target="_self" className="btn-theme-yellow" ><i className="fa fa-comments-o" /> Chat With
                Our Expert</Link>
              <Link to="/" className="btncontact btn-theme-blue gotocontact" ><i className="fa fa-tty" /> Let's Get Started</Link>
              
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

export default AssignmentEditing
