import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./views/Main"
import AllBlogs from "./views/blogs/AllBlogs"
import OurTeam from "./views/team/OurTeam"
import ViewMember from "./views/team/ViewMember"
import Partners from "./views/partners/Partners"
import Consultation from "./views/consultation/Consultation"
import ViewConsultation from "./views/consultation/ViewConsultation"
import Jobs from "./views/jobs/Jobs"
import Packages from "./views/packages/Packages"
import Portfolios from "./views/portfolios/Portfolios"
import ViewPortfolio from "./views/portfolios/ViewPortfolio"
import Services from "./views/services/Services"


 const Routes = ()=> {
   return (
       <Switch>
           <Route path="/" exact render={props=> <Home {...props} />} />
           <Route path="/blogs" exact render={props=> <AllBlogs {...props} />} />
           <Route path="/partners" exact render={props=> <Partners {...props} />} />
           <Route path="/ourTeam" exact render={props=> <OurTeam {...props} />} />
           <Route path="/ViewMember/:id" exact render={props=> <ViewMember {...props} />} />
           <Route path="/services" exact render={props=> <Home {...props} />} />
           <Route path="/portfolios" exact render={props=> <Home {...props} />} />
           <Route path="/reviews" exact render={props=> <Home {...props} />} />
           <Route path="/consultation" exact render={props=> <Consultation {...props} />} />
           <Route path="/viewConsultation/:id" exact render={props=> <ViewConsultation {...props} />} />
           <Route path="/reviews" exact render={props=> <Consultation {...props} />} />
           <Route path="/jobs" exact render={props=> <Jobs {...props} />} />
           <Route path="/packages" exact render={props=> <Packages {...props} />} />
           <Route path="/portfolios" exact render={props=> <Portfolios {...props} />} />
           <Route path="/viewPortfolio/:id" exact render={props=> <ViewPortfolio {...props} />} />
           <Route path="/services" exact render={props=> <Services {...props} />} />
       </Switch>
   )
 }
 export default Routes