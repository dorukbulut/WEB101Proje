import axios from "axios";
import {useRouter} from "next/router";
import Head from 'next/head'
import { Router } from 'next/router'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'

// ** Config Imports
import themeConfig from '../../configs/themeConfig'

// ** Component Imports
import UserLayout from '../../layouts/UserLayout'
import ThemeComponent from '../../@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from '../../@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from '../../@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'



const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** MUI Imports
import Grid from '@mui/material/Grid'




// ** Styled Component Import
import ApexChartWrapper from '../../@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from '../../views/dashboard/Table'
import Trophy from '../../views/dashboard/Trophy'

import StatisticsCard from '../../views/dashboard/StatisticsCard'
import WeeklyOverview from '../../views/dashboard/WeeklyOverview'

import MenteeNavbar from "../../components/ui/MenteeNavbar";
const Dashboard = () => {
    

  // Variables
  
  return (
    <div className="grid grid-cols-5">
        <div className="col-span-1">
            <MenteeNavbar />
        </div>
        
        <div className="flex flex-col col-span-4 p-20 space-y-10">
            <div className="flex space-x-10">
                <Trophy />
                <div className="w-1/2">
                    <StatisticsCard />
                </div>
            </div>
            <div className="">
                <div>
                    <Table />
                </div>
            </div>
            
        </div>
        
    </div>
    

        
     
   
  )
}
export async function getServerSideProps(context) {
    const cookie = context.req.cookies

    try{
        const res = await axios.post("http://localhost:3001/mentee/verify",cookie,{withCredentials:true})
        if (res.status === 201) {
            return {props : {
                authToken : cookie
            }}
        }
    }
    

    catch(err) {
        return {
            redirect : {
                permanent : false,
                destination :"/signin-mentee"
            }
        }
    }

}






export default Dashboard;